'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award, Users, Star, ChevronDown, ChevronUp, Building2, Home as HomeIcon, Paintbrush, HardHat, Landmark, ClipboardList, CheckCircle2, Phone, MapPin, MessageCircle } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { useState } from 'react';

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="hero-section">
      <Image src="/images/hero.png" alt="High-quality residential and commercial construction site" fill sizes="100vw" className="object-cover" priority />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="about-hero-badge">
            🏗️ Leading Civil Contractor in India
          </motion.span>
          <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="hero-heading">
            Trusted Construction Company in <span className="text-brand-yellow">Lucknow</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="hero-subtext">
            We build modern homes, commercial buildings, and renovation projects using high-quality materials and expert engineering.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="hero-cta-group">
            <Link href="/contact" className="hero-primary-btn">
              Get Free Quote <ArrowRight size={20} />
            </Link>
            <a href="tel:+919876543210" className="hero-secondary-btn">
              <Phone size={20} /> Call Now
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ─── Introduction ─── */
function Introduction() {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="intro-grid">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="intro-badge">About Company</span>
            <h2 className="intro-heading">
              <span className="text-white">About</span> <span className="text-brand-yellow-dark">SUBH Construction</span>
            </h2>
            <p className="intro-desc">
              SUBH Construction is a trusted construction company based in Lucknow, Uttar Pradesh. We specialize in residential homes, commercial buildings, renovation projects, and turnkey construction services. Our mission is to deliver durable, high-quality construction with transparency, modern engineering, and on-time project completion.
            </p>
            <div className="intro-features-grid">
              {[{ icon: Users, label: 'Experienced Engineers' }, { icon: HardHat, label: 'Skilled Workforce' }, { icon: Shield, label: 'Quality Building Materials' }, { icon: Award, label: 'Modern Techniques' }].map((item) => (
                <div key={item.label} className="intro-feature-item">
                  <item.icon size={20} className="achievement-icon" />
                  <span className="text-sm text-white">{item.label}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="intro-learn-more text-white hover:text-brand-yellow">
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="intro-img-wrap">
              <Image src="/images/engineers.png" alt="SUBH Construction engineers reviewing blueprints" width={600} height={500} style={{ width: '100%', height: 'auto' }} className="intro-img" />
            </div>
            <div className="intro-exp-badge">
              <p className="intro-exp-number">15+</p>
              <p className="intro-exp-label">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Overview ─── */
const servicesData = [
  { icon: HomeIcon, title: 'Residential Construction', desc: 'Custom residential homes built with top quality materials and solid foundations.' },
  { icon: Building2, title: 'Commercial Construction', desc: 'Reliable construction for modern office buildings, retail spaces, and commercial complexes.' },
  { icon: Paintbrush, title: 'House Renovation', desc: 'Expert remodeling and renovation services to modernize your existing space.' },
  { icon: HardHat, title: 'Interior Design', desc: 'Premium interior finishes, false ceilings, flooring, and woodwork.' },
  { icon: Landmark, title: 'Civil Engineering Services', desc: 'Strong structure and foundation work ensuring safety and longevity of the building.' },
  { icon: ClipboardList, title: 'Turnkey Construction Projects', desc: 'End-to-end project management from architectural planning to final handover.' },
];

function ServicesSection() {
  return (
    <section className="team-section">
      <div className="container">
        <SectionHeader badge="Our Services" title="Our Construction" highlight="Services" description="Comprehensive construction and civil contractor services tailored to your needs in Lucknow." />
        <div className="services-grid">
          {servicesData.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group service-card">
              <div className="group service-icon-box">
                <service.icon size={28} className="text-brand-yellow" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <Link href="/services" className="service-link">
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Projects ─── */
const projectsData = [
  { img: '/images/residential.png', title: 'Luxury House Construction', cat: 'Residential House', loc: 'Gomti Nagar, Lucknow' },
  { img: '/images/commercial.png', title: 'Modern Commercial Building', cat: 'Commercial Building', loc: 'Hazratganj, Lucknow' },
  { img: '/images/proj-apt-1.png', title: 'Apartment Complex Buildout', cat: 'Apartments', loc: 'Kanpur Road, Lucknow' },
  { img: '/images/workers-team.png', title: 'Ongoing Construction Work', cat: 'Work In Progress', loc: 'Aliganj, Lucknow' },
];

function FeaturedProjects() {
  return (
    <section className="projects-section">
      <div className="container">
        <SectionHeader badge="Our Work" title="Project" highlight="Gallery" description="Explore our latest completed projects and ongoing construction work." dark={false} />
        <div className="projects-grid">
          {projectsData.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group project-card">
              <div className="project-card-img-wrap">
                <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw" className="group team-member-photo" />
                <div className="project-badge-wrap">
                  <span className="project-badge">{project.cat}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-location"><MapPin size={12} /> {project.loc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="projects-view-all-wrap">
          <Link href="/projects" className="projects-view-all-btn">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

const statsData = [
  { n: '10+', l: 'Years Experience' },
  { n: '120+', l: 'Projects Completed' },
  { n: '95%', l: 'Client Satisfaction' },
  { n: '25+', l: 'Skilled Workers' }
];

function TrustElements() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="stat-number">{s.n}</p>
              <p className="stat-label">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─── */
function WhyChooseUs() {
  const reasons = [
    { icon: Users, title: 'Experienced Engineers', desc: 'Our civil engineers and architects ensure flawless execution on every project.' },
    { icon: Shield, title: 'Quality Materials', desc: 'We never compromise on cement, steel, or finishing construction materials.' },
    { icon: Landmark, title: 'Transparent Pricing', desc: 'Competitive rates and clear pricing models with absolutely no hidden charges.' },
    { icon: Clock, title: 'On-Time Delivery', desc: 'We follow strict timelines and project management to ensure completion on schedule.' },
  ];
  return (
    <section className="why-section">
      <div className="container">
        <SectionHeader badge="Why Us" title="Why Choose" highlight="SUBH Construction" description="Top reasons why clients trust us for their house construction and building needs." light />
        <div className="projects-grid">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="why-card">
              <div className="why-icon-box">
                <r.icon size={26} className="text-brand-yellow" />
              </div>
              <div>
                <h3 className="why-card-title">{r.title}</h3>
                <p className="footer-desc">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing Preview ─── */
const pricingData = [
  { name: 'Basic', price: '₹1,600', unit: '/sq ft', features: ['Standard materials', 'Basic finishing', '5-year warranty', 'Phone support'] },
  { name: 'Standard', price: '₹2,000', unit: '/sq ft', popular: true, features: ['Quality materials', 'Good finishing', '7-year warranty', 'Dedicated manager'] },
  { name: 'Premium', price: '₹2,600', unit: '/sq ft', features: ['Premium materials', 'Premium finishing', '10-year warranty', 'Priority support'] },
  { name: 'Luxury', price: '₹3,500', unit: '/sq ft', features: ['Imported materials', 'Luxury finishing', '15-year warranty', '24/7 concierge'] },
];

function PricingPreview() {
  return (
    <section className="mission-section">
      <div className="container">
        <SectionHeader badge="Pricing" title="Construction" highlight="Cost" description="Affordable and transparent pricing for every budget. View our construction packages." />
        <div className="projects-grid">
          {pricingData.map((pkg, i) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative p-8 rounded-2xl border transition-all duration-300 ${pkg.popular ? 'bg-white dark:bg-brand-black border-brand-yellow shadow-xl scale-105 z-10' : 'bg-white dark:bg-brand-black border-gray-200 dark:border-white/10 hover:border-brand-yellow/50'}`}>
              {pkg.popular && <span className="pricing-popular-tag">Most Popular</span>}
              <h3 className="pricing-plan-name">{pkg.name}</h3>
              <div className="pricing-price-wrap">
                <span className="about-stat-value">{pkg.price}</span>
                <span className="pricing-plan-desc">{pkg.unit}</span>
              </div>
              <ul className="pricing-features">
                {pkg.features.map((f) => (
                  <li key={f} className="pricing-feature-item">
                    <CheckCircle2 size={16} className="achievement-icon" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className={`block text-center py-3 rounded-full font-semibold text-sm transition-all ${pkg.popular ? 'bg-brand-yellow text-brand-black hover:bg-brand-yellow-dark' : 'border border-brand-yellow/30 text-brand-yellow hover:bg-brand-yellow hover:text-brand-black'}`}>
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
const testimonials = [
  { name: 'Rajesh Sharma', role: 'Homeowner, Lucknow', text: 'SUBH Construction delivered our dream home on time with excellent quality. The attention to detail was remarkable.', rating: 5 },
  { name: 'Priya Kapoor', role: 'Business Owner, Noida', text: 'Our commercial complex was completed ahead of schedule. The team was professional, transparent, and highly skilled.', rating: 5 },
  { name: 'Amit Verma', role: 'Real Estate Developer', text: 'We have partnered with SUBH Construction on multiple projects. Their consistency in quality and delivery is unmatched.', rating: 5 },
  { name: 'Sunita Gupta', role: 'Homeowner, Kanpur', text: 'From design to handover, every step was smooth. The premium package was worth every rupee. Highly recommended!', rating: 5 },
];

function Testimonials() {
  return (
    <section className="projects-section">
      <div className="container">
        <SectionHeader badge="Testimonials" title="Client" highlight="Reviews" description="See what our happy clients have to say about our construction services." dark={false} />
        <div className="reviews-grid">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="review-card">
              <div className="review-stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={18} className="review-star-icon" />
                ))}
              </div>
              <p className="review-quote">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="review-author-name">{t.name}</p>
                <p className="review-author-role">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
const faqData = [
  { q: 'How long does construction take?', a: 'Construction timelines vary based on project scope. A typical residential home takes 8-12 months, while commercial projects may take 12-24 months. We provide detailed timelines during consultation.' },
  { q: 'What is the cost per square foot?', a: 'Our construction rates start from ₹1,600/sq ft for basic packages and go up to ₹3,500/sq ft for luxury construction. The final cost depends on materials, design complexity, and finishing quality.' },
  { q: 'Do you provide project management?', a: 'Yes! Every project gets a dedicated project manager who oversees all aspects — from planning and procurement to quality control and handover.' },
  { q: 'Can I customize my house design?', a: 'Absolutely. We work closely with you and our architects to create custom designs that match your vision, lifestyle, and budget. Full customization is available on all packages.' },
  { q: 'What areas do you serve?', a: 'We primarily serve Lucknow, Noida, Delhi NCR, Kanpur, and other major cities across Uttar Pradesh. We also undertake projects in neighboring states for larger contracts.' },
  { q: 'Do you provide a warranty?', a: 'Yes, we offer warranties ranging from 5 to 15 years depending on the package. Our warranty covers structural defects, waterproofing, and major systems.' },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="team-section">
      <div className="faq-container">
        <SectionHeader badge="FAQ" title="Frequently Asked" highlight="Questions" description="Find answers to common questions about our construction services." light />
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="faq-item">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="faq-toggle-btn">
                <span className="faq-question">{faq.q}</span>
                {openIndex === i ? <ChevronUp size={20} className="achievement-icon" /> : <ChevronDown size={20} className="faq-chevron" />}
              </button>
              {openIndex === i && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="faq-answer">
                  <p className="mission-card-text">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Section ─── */
function ContactSection() {
  return (
    <section className="why-section" id="contact">
      <div className="container">
        <SectionHeader badge="Contact Us" title="Get Your" highlight="Free Quote" description="Reach out to us today to discuss your next big construction project in Lucknow." />
        <div className="contact-content-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="svc-quote-heading">Send us a message</h3>
            <form className="space-y-6">
              <div className="svc-quote-grid">
                <div>
                  <label className="svc-quote-label">Full Name</label>
                  <input type="text" className="svc-quote-input" placeholder="John Doe" />
                </div>
                <div>
                  <label className="svc-quote-label">Phone Number</label>
                  <input type="tel" className="svc-quote-input" placeholder="+91 9876543210" />
                </div>
              </div>
              <div>
                <label className="svc-quote-label">Project Type</label>
                <select className="svc-quote-select">
                  <option value="">Select a project type</option>
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Building</option>
                  <option value="renovation">House Renovation</option>
                  <option value="interior">Interior Design</option>
                  <option value="other">Other Turnkey Projects</option>
                </select>
              </div>
              <div>
                <label className="svc-quote-label">Message</label>
                <textarea rows={4} className="svc-quote-input" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="svc-quote-submit">
                Get Free Quote
              </button>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="svc-sidebar">
              <h3 className="svc-sidebar-heading">Contact Information</h3>
              <ul className="space-y-6">
                <li className="svc-contact-row">
                  <div className="svc-contact-icon-box">
                    <Phone className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <p className="svc-contact-label">Phone Number</p>
                    <p className="svc-contact-value">+91 98765 43210</p>
                  </div>
                </li>
                <li className="svc-contact-row">
                  <div className="svc-hours-icon-box">
                    <MessageCircle className="text-brand-yellow-dark" size={20} />
                  </div>
                  <div>
                    <p className="svc-contact-label">Email Address</p>
                    <p className="svc-contact-value">info@subhconstruction.com</p>
                  </div>
                </li>
                <li className="svc-contact-row">
                  <div className="svc-social-icon-box">
                    <MapPin className="text-brand-steel" size={20} />
                  </div>
                  <div>
                    <p className="svc-contact-label">Office Location</p>
                    <p className="svc-contact-value">Lucknow, Uttar Pradesh, India</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="svc-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.37894389204!2d80.85966465030225!3d26.848596489392187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709405252875!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustElements />
      <Introduction />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <PricingPreview />
      <Testimonials />
      <FAQSection />
      <ContactSection />
    </>
  );
}
