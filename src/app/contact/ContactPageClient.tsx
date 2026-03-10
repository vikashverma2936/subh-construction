'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
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
            <p className="text-gray-200 text-lg max-w-2xl mx-auto font-light">Reach out to us for a free consultation. We&apos;re ready to bring your construction vision to life.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50 dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <motion.div key={info.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white border border-gray-200 dark:border-white/10 text-center hover:border-white/30 shadow-sm transition-all">
                <div className="w-14 h-14 rounded-xl bg-white/5/5 flex items-center justify-center mx-auto mb-4 border border-gray-200 dark:border-white/10">
                  <info.icon size={24} className="text-brand-black dark:text-white" />
                </div>
                <h3 className="text-brand-black dark:text-white font-bold mb-1">{info.label}</h3>
                {info.href ? (
                  <a href={info.href} className="text-gray-600 dark:text-gray-400 font-medium text-sm hover:text-brand-yellow transition-colors">{info.value}</a>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24 bg-white dark:bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-brand-black dark:text-white font-[family-name:var(--font-heading)] mb-2">Send Us a Message</h2>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Your Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-brand-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 transition-all font-medium" />
                  <input type="email" placeholder="Email Address *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-brand-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 transition-all font-medium" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="tel" placeholder="Phone Number *" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-brand-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 transition-all font-medium" />
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-brand-black dark:text-white focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 transition-all font-medium appearance-none"
                      style={{ color: formData.service === '' ? '#9ca3af' : 'white' }}
                    >
                      <option value="" disabled hidden>Select Service</option>
                      <option value="residential" className="text-gray-900 bg-white">Residential Construction</option>
                      <option value="commercial" className="text-gray-900 bg-white">Commercial Construction</option>
                      <option value="renovation" className="text-gray-900 bg-white">Renovation & Remodeling</option>
                      <option value="interior" className="text-gray-900 bg-white">Interior Construction</option>
                      <option value="infrastructure" className="text-gray-900 bg-white">Infrastructure Development</option>
                      <option value="management" className="text-gray-900 bg-white">Project Management</option>
                    </select>
                    {/* Arrow Icon for select */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 dark:text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <textarea placeholder="Your Message *" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-brand-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 transition-all resize-none font-medium" />
                <button type="submit" className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-yellow-dark transition-all hover:scale-105 w-full justify-center sm:w-auto mt-2">
                  <Send size={20} /> Send Message
                </button>
                {submitted && <p className="text-brand-yellow font-medium text-sm mt-3 flex items-center gap-2"><CheckCircle2 size={16} /> Message sent successfully! We&apos;ll contact you shortly.</p>}
              </form>

              {/* WhatsApp */}
              <div className="mt-8 p-4 rounded-xl bg-green-100 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30 flex items-center gap-4 hover:bg-green-200 dark:hover:bg-green-500/30 transition-all cursor-pointer" onClick={() => window.open('https://wa.me/919876543210', '_blank')}>
                <MessageCircle size={32} className="text-green-600 dark:text-green-400" />
                <div>
                  <p className="text-brand-black dark:text-white text-md font-bold">Quick Response via WhatsApp</p>
                  <span className="text-green-700 dark:text-green-300 text-sm font-medium hover:underline">Chat with us on WhatsApp →</span>
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
