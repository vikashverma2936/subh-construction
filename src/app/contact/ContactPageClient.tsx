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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="subh-ui-81">
        <div className="subh-ui-82">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="subh-ui-44">Contact Us</span>
            <h1 className="subh-ui-83">
              Let&apos;s Build <span className="gradient-text">Together</span>
            </h1>
            <p className="subh-ui-114">Reach out to us for a free consultation. We&apos;re ready to bring your construction vision to life.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="subh-ui-115">
        <div className="subh-ui-22">
          <div className="subh-ui-116">
            {contactInfo.map((info, i) => (
              <motion.div key={info.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="subh-ui-117">
                <div className="subh-ui-118">
                  <info.icon size={24} className="subh-ui-39" />
                </div>
                <h3 className="subh-ui-119">{info.label}</h3>
                {info.href ? (
                  <a href={info.href} className="subh-ui-120">{info.value}</a>
                ) : (
                  <p className="subh-ui-121">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="subh-ui-64">
        <div className="subh-ui-22">
          <div className="subh-ui-122">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="subh-ui-123">Send Us a Message</h2>
              <p className="subh-ui-124">Fill out the form below and our team will get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="subh-ui-125">
                  <input type="text" placeholder="Your Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="subh-ui-126" />
                  <input type="email" placeholder="Email Address *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="subh-ui-126" />
                </div>
                <div className="subh-ui-125">
                  <input type="tel" placeholder="Phone Number *" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="subh-ui-126" />
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full px-5 py-3.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 transition-all font-medium appearance-none ${formData.service === '' ? 'text-gray-400' : 'text-brand-black dark:text-white'}`}
                    >
                      <option value="" disabled hidden>Select Service</option>
                      <option value="residential" className="subh-ui-127">Residential Construction</option>
                      <option value="commercial" className="subh-ui-127">Commercial Construction</option>
                      <option value="renovation" className="subh-ui-127">Renovation & Remodeling</option>
                      <option value="interior" className="subh-ui-127">Interior Construction</option>
                      <option value="infrastructure" className="subh-ui-127">Infrastructure Development</option>
                      <option value="management" className="subh-ui-127">Project Management</option>
                    </select>
                    {/* Arrow Icon for select */}
                    <div className="subh-ui-128">
                      <svg className="subh-ui-129" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
                <textarea placeholder="Your Message *" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="subh-ui-130" />
                <button type="submit" disabled={loading} className="subh-ui-131">
                  {loading ? <div className="subh-ui-132"></div> : <Send size={20} />} {loading ? 'Sending...' : 'Send Message'}
                </button>
                {submitted && <p className="subh-ui-133"><CheckCircle2 size={16} /> Message sent successfully! We&apos;ll contact you shortly.</p>}
                {error && <p className="subh-ui-134">{error}</p>}
              </form>

              {/* WhatsApp */}
              <div className="subh-ui-135" onClick={() => window.open('https://wa.me/919876543210', '_blank')}>
                <MessageCircle size={32} className="subh-ui-136" />
                <div>
                  <p className="subh-ui-137">Quick Response via WhatsApp</p>
                  <span className="subh-ui-138">Chat with us on WhatsApp →</span>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} id="map">
              <div className="subh-ui-139">
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
