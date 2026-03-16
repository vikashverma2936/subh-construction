'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award, Users, Star, ChevronDown, ChevronUp, Building2, Home as HomeIcon, Paintbrush, HardHat, Landmark, ClipboardList, CheckCircle2, Phone, MapPin, MessageCircle, Loader2, Send } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="hero-section">
      <Image src="/images/hero.png" alt="High-quality residential and commercial construction site in Lucknow" fill sizes="100vw" className="object-cover" priority />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="about-hero-badge">
            🏗️ Leading Civil Contractor in Lucknow
          </motion.span>
          <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="hero-heading">
            Best Construction Company in <span className="text-brand-yellow">Lucknow</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="hero-subtext">
            Build your dream home with the most trusted building contractor in Lucknow. We deliver premium residential and commercial construction services.
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
            <span className="intro-badge">About SUBH Construction</span>
            <h2 className="intro-heading">
              <span className="text-white">About</span> <span className="text-brand-yellow-dark">SUBH Construction</span>
            </h2>
            <p className="intro-desc">
              SUBH Construction is a premier construction firm in Lucknow, Uttar Pradesh. We specialize in high-quality residential construction, commercial buildings, and innovative renovation projects. With 15+ years of experience, we are known for our transparency, modern engineering, and commitment to delivering projects on time.
            </p>
            <div className="intro-features-grid">
              {[{ icon: Users, label: 'Expert Civil Engineers' }, { icon: HardHat, label: 'Skilled Labour Force' }, { icon: Shield, label: 'A-Grade Materials' }, { icon: Award, label: 'Modern Construction' }].map((item) => (
                <div key={item.label} className="intro-feature-item">
                  <item.icon size={20} className="achievement-icon" />
                  <span className="text-sm text-white">{item.label}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="intro-learn-more text-white hover:text-brand-yellow">
              Learn More About Our Team <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="intro-img-wrap">
              <Image src="/images/engineers.png" alt="SUBH Construction expert engineers at Lucknow site" width={600} height={500} style={{ width: '100%', height: 'auto' }} className="intro-img" />
            </div>
            <div className="intro-exp-badge">
              <p className="intro-exp-number">15+</p>
              <p className="intro-exp-label">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Overview ─── */
const servicesData = [
  { icon: HomeIcon, title: 'Residential Construction', desc: 'Premium homes and villas built with the best materials in Lucknow.' },
  { icon: Building2, title: 'Commercial Projects', desc: 'State-of-the-art office buildings and retail spaces for Lucknow businesses.' },
  { icon: Paintbrush, title: 'Home Renovation', desc: 'Transform your existing space with our expert remodeling services.' },
  { icon: HardHat, title: 'Interior Design', desc: 'Custom interiors featuring modern woodwork, flooring, and lighting.' },
  { icon: Landmark, title: 'Civil Engineering', desc: 'Robust foundations and structural work by certified civil engineers.' },
  { icon: ClipboardList, title: 'Turnkey Solutions', desc: 'Hassle-free construction from architectural design to final handover.' },
];

function ServicesSection() {
  return (
    <section className="team-section">
      <div className="container">
        <SectionHeader badge="Our Services" title="What We" highlight="Offer" description="Providing top-tier construction and contracting services across Lucknow and beyond." />
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
  { img: '/images/residential.png', title: 'Luxury Villa Construction', cat: 'Residential', loc: 'Gomti Nagar, Lucknow' },
  { img: '/images/commercial.png', title: 'Corporate Business Center', cat: 'Commercial', loc: 'Hazratganj, Lucknow' },
  { img: '/images/proj-apt-1.png', title: 'Modern Apartment Complex', cat: 'Residential', loc: 'Indira Nagar, Lucknow' },
  { img: '/images/workers-team.png', title: 'Industrial Warehouse', cat: 'Industrial', loc: 'Amousi, Lucknow' },
];

function FeaturedProjects() {
  return (
    <section className="projects-section">
      <div className="container">
        <SectionHeader badge="Recent Portfolio" title="Our Recent" highlight="Projects" description="Take a look at some of our successfully completed construction projects in Lucknow." dark={false} />
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
            View Project Portfolio <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

const statsData = [
  { n: '15+', l: 'Years Experience' },
  { n: '150+', l: 'Successful Projects' },
  { n: '100%', l: 'Customer Warranty' },
  { n: '50+', l: 'Expert Workforce' }
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
    { icon: Users, title: 'Certified Engineers', desc: 'Our Lucknow-based team includes registered civil engineers and skilled architects.' },
    { icon: Shield, title: 'Premium Material Quality', desc: 'We use verified A-grade cement and TMT bars to ensure structural longevity.' },
    { icon: Landmark, title: 'Fixed Rate Contracts', desc: 'No hidden costs. We provide detailed estimates and stick to the agreed budget.' },
    { icon: Clock, title: 'Strict Deadlines', desc: 'We understand the value of time and guarantee project completion as per schedule.' },
  ];
  return (
    <section className="why-section">
      <div className="container">
        <SectionHeader badge="Our USP" title="Why We are the Best" highlight="in Lucknow" description="Discover why hundreds of families trust us for their home construction." light />
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

/* ─── Contact Section ─── */
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, email: 'placeholder@temporary.com' }), // API expects email
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Quote request sent! We will call you soon.');
        reset();
      } else {
        toast.error(result.error || 'Request failed. Please try again.');
      }
    } catch {
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="why-section" id="contact">
      <div className="container">
        <SectionHeader badge="Contact Lucknow Office" title="Get a Professional" highlight="Review" description="Discuss your construction plan with our experts today." />
        <div className="contact-content-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="svc-quote-heading">Request a Callback</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="svc-quote-grid">
                <div>
                  <label className="svc-quote-label">Full Name</label>
                  <input {...register('name')} type="text" className={`svc-quote-input ${errors.name ? 'border-red-500' : ''}`} placeholder="Your Name" />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="svc-quote-label">Phone Number</label>
                  <input {...register('phone')} type="tel" className={`svc-quote-input ${errors.phone ? 'border-red-500' : ''}`} placeholder="+91 98765 43210" />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
              </div>
              <div>
                <label className="svc-quote-label">Project Type</label>
                <select {...register('projectType')} className={`svc-quote-select ${errors.projectType ? 'border-red-500' : ''}`}>
                  <option value="">Select a service</option>
                  <option value="Residential">Residential Construction</option>
                  <option value="Commercial">Commercial Building</option>
                  <option value="Renovation">Home Renovation</option>
                  <option value="Interior">Interior Design</option>
                  <option value="Turnkey">Turnkey Project</option>
                </select>
                {errors.projectType && <p className="text-xs text-red-500 mt-1">{errors.projectType.message}</p>}
              </div>
              <div>
                <label className="svc-quote-label">Short Description</label>
                <textarea {...register('message')} rows={4} className={`svc-quote-input ${errors.message ? 'border-red-500' : ''}`} placeholder="Briefly describe your requirements..." />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="svc-quote-submit flex items-center justify-center gap-2">
                {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />} {isSubmitting ? 'Sending...' : 'Get Free Quote'}
              </button>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="svc-sidebar">
              <h3 className="svc-sidebar-heading">Our Contact Details</h3>
              <ul className="space-y-6">
                <li className="svc-contact-row">
                  <div className="svc-contact-icon-box">
                    <Phone className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <p className="svc-contact-label">Call Our Office</p>
                    <p className="svc-contact-value">+91 98765 43210</p>
                  </div>
                </li>
                <li className="svc-contact-row">
                  <div className="svc-hours-icon-box">
                    <MessageCircle className="text-brand-yellow-dark" size={20} />
                  </div>
                  <div>
                    <p className="svc-contact-label">Email Your Queries</p>
                    <p className="svc-contact-value">info@subhconstruction.com</p>
                  </div>
                </li>
                <li className="svc-contact-row">
                  <div className="svc-social-icon-box">
                    <MapPin className="text-brand-steel" size={20} />
                  </div>
                  <div>
                    <p className="svc-contact-label">Visit Our Lucknow Site</p>
                    <p className="svc-contact-value">Lucknow, Uttar Pradesh, India</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Client Sections (Placeholder - extracted from main to keep it clean) ─── */
function PricingPreview() {
    return (
      <section className="mission-section">
        <div className="container">
          <SectionHeader badge="Premium Packages" title="Construction" highlight="Cost" description="Transparent pricing for residential building projects in Lucknow." />
          <div className="projects-grid">
            {[
              { name: 'Basic', price: '₹1,650', unit: '/sq ft', features: ['Standard structural work', 'Basic flooring', 'ISI marked wiring', 'Standard bathroom fittings'] },
              { name: 'Standard', price: '₹2,100', unit: '/sq ft', popular: true, features: ['Premium structural work', 'Vitrified tiles', 'Modular switches', 'Branded sanitaryware'] },
              { name: 'Luxury', price: '₹2,800', unit: '/sq ft', features: ['Superior structural work', 'Italian marble options', 'Smart home automation', 'Premium kitchen fit-outs'] },
            ].map((pkg, i) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative p-8 rounded-2xl border transition-all duration-300 ${pkg.popular ? 'bg-white dark:bg-brand-black border-brand-yellow shadow-xl scale-105 z-10' : 'bg-white dark:bg-brand-black border-gray-200 dark:border-white/10 hover:border-brand-yellow/50'}`}>
                {pkg.popular && <span className="pricing-popular-tag">Recommended</span>}
                <h3 className="pricing-plan-name">{pkg.name} Package</h3>
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
                <Link href="/contact" className={`block text-center py-3 rounded-full font-semibold text-sm transition-all ${pkg.popular ? 'bg-brand-yellow text-brand-black hover:bg-brand-yellow-dark' : 'border border-brand-yellow/30 text-brand-yellow hover:bg-brand-yellow hover:text-brand-black'}`}>
                  Get Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
}

function Testimonials() {
    return (
      <section className="projects-section">
        <div className="container">
          <SectionHeader badge="Customer Reviews" title="What Locals Say" highlight="in Lucknow" description="Feedback from Lucknow resonance who built their homes with us." dark={false} />
          <div className="reviews-grid">
            {[
              { name: 'Raj Kumar Singh', role: 'Indira Nagar, Lucknow', text: 'SUBH Construction built our 3-story house in just 10 months. The quality of concrete and finishing is excellent.', rating: 5 },
              { name: 'Anshu Mishra', role: 'Hazratganj, Lucknow', text: 'We hired them for our office renovation. They are professional and follow all safety norms strictly. Very satisfied.', rating: 5 },
              { name: 'Vipan Verma', role: 'Vikas Nagar, Lucknow', text: 'Best civil contractor in Lucknow. They are very transparent about material costs and timeline.', rating: 5 },
            ].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="review-card">
                <div className="review-stars">
                  {[...Array(t.rating)].map((_, j) => (
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

function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqData = [
        { q: 'Is SUBH Construction registered in Lucknow?', a: 'Yes, we are a registered civil contracting firm operating in Lucknow with valid GST and engineering certifications.' },
        { q: 'Do you provide architectural designs?', a: 'Yes, our turnkey projects include architectural mapping, structural design, and 3D visualization before construction starts.' },
        { q: 'Can you work on projects outside Lucknow?', a: 'While we primarily serve Lucknow (Gomti Nagar, Hazratganj, Indira Nagar etc.), we also undertake major projects in nearby cities like Kanpur and Unnao.' },
    ];
    return (
      <section className="team-section">
        <div className="faq-container">
          <SectionHeader badge="Common Queries" title="Frequently Asked" highlight="Questions" description="Everything you need to know about building in Lucknow." light />
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

/* ─── Main Component ─── */
export default function HomePageClient() {
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
