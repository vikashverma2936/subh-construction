import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Lead from '@/models/Lead';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = contactSchema.parse(body);

    await dbConnect();

    // Save lead to MongoDB
    const lead = await Lead.create(validatedData);

    // Send email notification
    if (resend) {
      try {
        await resend.emails.send({
          from: 'SUBH Construction Leads <onboarding@resend.dev>',
          to: process.env.CONTACT_EMAIL || 'vikashverma2936@gmail.com',
          subject: `New Lead: ${validatedData.name} - ${validatedData.projectType}`,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
            <p><strong>Message:</strong> ${validatedData.message}</p>
            <hr />
            <p>This lead has been saved to your MongoDB database.</p>
          `,
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // We don't fail the request if only email fails, as lead is already saved
      }
    }

    return NextResponse.json({ success: true, data: lead }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.issues[0].message }, { status: 400 });
    }
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
