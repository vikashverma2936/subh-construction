'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 9876543210', href: 'tel:+919876543210' },
  { icon: Mail, label: 'Email', value: 'info@subhconstruction.com', href: 'mailto:info@subhconstruction.com' },
  { icon: MapPin, label: 'Office', value: 'Lucknow, Uttar Pradesh, India', href: '#map' },
  { icon: Clock, label: 'Hours', value: 'Mon - Sat: 9:00 AM - 7:00 PM', href: undefined },
];

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPageClient() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully! We\'ll contact you shortly.');
        reset();
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.');
      }
    } catch {
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="about-hero-badge">Contact Us</span>
            <h1 className="blog-hero-heading">
              Let&apos;s Build <span className="gradient-text">Together</span>
            </h1>
            <p className="contact-hero-subtext">Reach out to us for a free consultation. We&apos;re ready to bring your construction vision to life.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, i) => (
              <motion.div key={info.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="contact-info-card">
                <div className="contact-info-icon-box">
                  <info.icon size={24} className="theme-root" />
                </div>
                <h3 className="contact-info-label">{info.label}</h3>
                {info.href ? (
                  <a href={info.href} className="contact-info-value-link">{info.value}</a>
                ) : (
                  <p className="contact-info-value">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="team-section">
        <div className="container">
          <div className="contact-content-grid">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="contact-form-title">Send Us a Message</h2>
              <p className="contact-form-subtitle">Fill out the form below and our team will get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="contact-fields-grid">
                  <div className="space-y-1">
                    <input {...register('name')} type="text" placeholder="Your Name *" className={`contact-input ${errors.name ? 'border-red-500' : ''}`} />
                    {errors.name && <p className="text-xs text-red-500 font-medium ml-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-1">
                    <input {...register('email')} type="email" placeholder="Email Address *" className={`contact-input ${errors.email ? 'border-red-500' : ''}`} />
                    {errors.email && <p className="text-xs text-red-500 font-medium ml-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="contact-fields-grid">
                  <div className="space-y-1">
                    <input {...register('phone')} type="tel" placeholder="Phone Number *" className={`contact-input ${errors.phone ? 'border-red-500' : ''}`} />
                    {errors.phone && <p className="text-xs text-red-500 font-medium ml-1">{errors.phone.message}</p>}
                  </div>
                  <div className="relative space-y-1">
                    <select
                      {...register('projectType')}
                      className={`w-full px-5 py-3.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 transition-all font-medium appearance-none ${errors.projectType ? 'border-red-500' : ''}`}
                    >
                      <option value="" disabled hidden>Select Project Type</option>
                      <option value="Residential" className="contact-select-text">Residential Construction</option>
                      <option value="Commercial" className="contact-select-text">Commercial Construction</option>
                      <option value="Renovation" className="contact-select-text">Renovation & Remodeling</option>
                      <option value="Interior" className="contact-select-text">Interior Design</option>
                      <option value="Industrial" className="contact-select-text">Industrial Projects</option>
                    </select>
                    <div className="contact-select-icon pointer-events-none">
                      <svg className="contact-select-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                    {errors.projectType && <p className="text-xs text-red-500 font-medium ml-1">{errors.projectType.message}</p>}
                  </div>
                </div>
                <div className="space-y-1">
                  <textarea {...register('message')} placeholder="Your Message *" rows={5} className={`contact-textarea ${errors.message ? 'border-red-500' : ''}`} />
                  {errors.message && <p className="text-xs text-red-500 font-medium ml-1">{errors.message.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="contact-submit-btn">
                  {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />} {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              {/* WhatsApp */}
              <div className="contact-whatsapp-row" onClick={() => window.open('https://wa.me/919876543210', '_blank')}>
                <MessageCircle size={32} className="contact-whatsapp-icon" />
                <div>
                  <p className="contact-whatsapp-heading">Quick Response via WhatsApp</p>
                  <span className="contact-whatsapp-link">Chat with us on WhatsApp →</span>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} id="map">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.38256438!2d80.77170015!3d26.84631045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1704367200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SUBH Construction Office Location - Lucknow, UP"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
