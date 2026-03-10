'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { useState } from 'react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 9876543210', href: 'tel:+919876543210' },
  { icon: Mail, label: 'Email', value: 'info@subhconstruction.com', href: 'mailto:info@subhconstruction.com' },
  { icon: MapPin, label: 'Office', value: 'Lucknow, Uttar Pradesh, India', href: '#map' },
  { icon: Clock, label: 'Hours', value: 'Mon - Sat: 9:00 AM - 7:00 PM', href: undefined },
];

export default function ContactPageClient() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-sm font-semibold rounded-full mb-6">Contact Us</span>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
              Let&apos;s Build <span className="gradient-text">Together</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Reach out to us for a free consultation. We&apos;re ready to bring your construction vision to life.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <motion.div key={info.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center hover:border-brand-yellow/20 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon size={24} className="text-brand-yellow" />
                </div>
                <h3 className="text-white font-semibold mb-1">{info.label}</h3>
                {info.href ? (
                  <a href={info.href} className="text-gray-400 text-sm hover:text-brand-yellow transition-colors">{info.value}</a>
                ) : (
                  <p className="text-gray-400 text-sm">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-heading)] mb-2">Send Us a Message</h2>
              <p className="text-gray-400 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Your Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 transition-all" />
                  <input type="email" placeholder="Email Address *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 transition-all" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="tel" placeholder="Phone Number *" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 transition-all" />
                  <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 transition-all">
                    <option value="">Select Service</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="interior">Interior Construction</option>
                    <option value="infrastructure">Infrastructure Development</option>
                    <option value="management">Project Management</option>
                  </select>
                </div>
                <textarea placeholder="Your Message *" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 transition-all resize-none" />
                <button type="submit" className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-yellow-dark transition-all hover:scale-105 w-full justify-center sm:w-auto">
                  <Send size={20} /> Send Message
                </button>
                {submitted && <p className="text-green-400 text-sm">✓ Message sent successfully! We&apos;ll contact you shortly.</p>}
              </form>

              {/* WhatsApp */}
              <div className="mt-8 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3">
                <MessageCircle size={24} className="text-green-400" />
                <div>
                  <p className="text-white text-sm font-semibold">Quick Response via WhatsApp</p>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-green-400 text-sm hover:underline">Chat with us on WhatsApp →</a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} id="map">
              <div className="rounded-2xl overflow-hidden h-full min-h-[500px]">
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
