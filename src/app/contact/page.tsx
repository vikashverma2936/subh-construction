import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SUBH Construction for a free consultation. Call +91 9876543210 or email info@subhconstruction.com. Office in Lucknow, Uttar Pradesh.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}
