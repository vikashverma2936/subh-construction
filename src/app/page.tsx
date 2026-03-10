'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award, Users, Star, ChevronDown, ChevronUp, Building2, Home as HomeIcon, Paintbrush, HardHat, Landmark, ClipboardList, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { useState } from 'react';

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image src="/images/hero.png" alt="Modern construction site at golden hour" fill sizes="100vw" className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block px-4 py-1.5 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-sm font-semibold rounded-full mb-6">
            🏗️ India&apos;s Trusted Construction Partner
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight">
            Building the Future with{' '}
            <span className="gradient-text">Strength &amp; Trust</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            SUBH Construction delivers high-quality residential, commercial, and infrastructure projects across India.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-yellow-dark transition-all duration-200 hover:shadow-lg hover:shadow-brand-yellow/25 hover:scale-105">
              Get Free Quote <ArrowRight size={20} />
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-200 hover:border-brand-yellow hover:text-brand-yellow">
              View Projects
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ n: '250+', l: 'Projects Completed' }, { n: '15+', l: 'Years Experience' }, { n: '120+', l: 'Expert Engineers' }, { n: '500+', l: 'Happy Clients' }].map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-brand-yellow font-[family-name:var(--font-heading)]">{s.n}</p>
                <p className="text-sm text-gray-400 mt-1">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Introduction ─── */
function Introduction() {
  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 text-brand-yellow text-sm font-semibold rounded-full mb-4 border border-brand-yellow/20">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
              We Build Dreams Into <span className="gradient-text">Reality</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              With over 15 years of experience, SUBH Construction has established itself as one of India&apos;s most trusted construction companies. We combine traditional craftsmanship with modern engineering to deliver projects that exceed expectations.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              From luxury villas to towering commercial complexes, our team of 120+ skilled engineers and architects work together to turn your vision into reality — on time, within budget, and with uncompromising quality.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[{ icon: Shield, label: 'Quality Guaranteed' }, { icon: Clock, label: 'On-Time Delivery' }, { icon: Award, label: 'Award Winning' }, { icon: Users, label: 'Expert Team' }].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-gray-300">
                  <item.icon size={20} className="text-brand-yellow shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 mt-8 text-brand-yellow font-semibold hover:gap-4 transition-all">
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image src="/images/engineers.png" alt="SUBH Construction engineers reviewing blueprints" width={600} height={500} style={{ width: '100%', height: 'auto' }} className="object-cover rounded-2xl" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-yellow text-brand-black p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold font-[family-name:var(--font-heading)]">15+</p>
              <p className="text-sm font-semibold">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Overview ─── */
const servicesData = [
  { icon: HomeIcon, title: 'Residential Construction', desc: 'Custom homes, villas, and apartments built with quality materials and modern design.' },
  { icon: Building2, title: 'Commercial Construction', desc: 'Office buildings, retail spaces, and commercial complexes designed for success.' },
  { icon: Paintbrush, title: 'Renovation & Remodeling', desc: 'Transform your existing spaces with modern renovations and remodeling services.' },
  { icon: HardHat, title: 'Interior Construction', desc: 'Premium interior construction with finest finishes and expert craftsmanship.' },
  { icon: Landmark, title: 'Infrastructure Development', desc: 'Roads, bridges, and public infrastructure projects built to last generations.' },
  { icon: ClipboardList, title: 'Project Management', desc: 'End-to-end project management for seamless construction execution.' },
];

function ServicesSection() {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Our Services" title="What We" highlight="Build" description="Comprehensive construction services tailored to your needs — from concept to completion." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-yellow/30 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-brand-yellow/10 flex items-center justify-center mb-6 group-hover:bg-brand-yellow/20 transition-colors">
                <service.icon size={28} className="text-brand-yellow" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-heading)]">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
              <Link href="/services" className="inline-flex items-center gap-1 text-brand-yellow text-sm font-semibold hover:gap-3 transition-all">
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
  { img: '/images/residential.png', title: 'Mishra Residence Renovation', cat: 'Residential', loc: 'Aliganj, Lucknow, UP' },
  { img: '/images/commercial.png', title: 'Boutique Cafe Interior', cat: 'Commercial', loc: 'Hazratganj, Lucknow, UP' },
  { img: '/images/infrastructure.png', title: 'Transport Nagar RCC Driveway', cat: 'Industrial', loc: 'Transport Nagar, Lucknow, UP' },
];

function FeaturedProjects() {
  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Portfolio" title="Featured" highlight="Projects" description="Explore our latest completed projects showcasing excellence in construction." />
        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-brand-yellow/20 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand-yellow text-brand-black text-xs font-bold rounded-full">{project.cat}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-1 flex items-center gap-1"><MapPin size={14} /> {project.loc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/projects" className="inline-flex items-center gap-2 border-2 border-brand-yellow text-brand-yellow px-8 py-3 rounded-full font-semibold hover:bg-brand-yellow hover:text-brand-black transition-all duration-300">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─── */
function WhyChooseUs() {
  const reasons = [
    { icon: Shield, title: 'Quality Assurance', desc: 'We use only premium materials and follow strict quality control processes at every construction stage.' },
    { icon: Clock, title: 'On-Time Delivery', desc: 'Our project management ensures timely completion — we value your time as much as you do.' },
    { icon: Award, title: 'Experienced Team', desc: '120+ skilled engineers and architects with decades of combined construction experience.' },
    { icon: Users, title: 'Customer Focused', desc: 'Transparent communication, regular updates, and dedicated project managers for every client.' },
    { icon: CheckCircle2, title: '10-Year Warranty', desc: 'We stand behind our work with comprehensive warranty coverage on all projects.' },
    { icon: HardHat, title: 'Safety First', desc: 'Industry-leading safety standards and protocols to protect our workers and your project.' },
  ];
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Why Us" title="Why Choose" highlight="SUBH Construction" description="We go beyond building structures — we build trust, quality, and lasting relationships." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-brand-yellow/20 transition-all">
              <div className="w-12 h-12 rounded-lg bg-brand-yellow/10 flex items-center justify-center shrink-0">
                <r.icon size={22} className="text-brand-yellow" />
              </div>
              <div>
                <h3 className="text-white font-semibold font-[family-name:var(--font-heading)] mb-1">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
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
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Pricing" title="Construction" highlight="Rates" description="Transparent pricing for every budget. Choose the package that fits your dream project." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((pkg, i) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative p-8 rounded-2xl border transition-all duration-300 ${pkg.popular ? 'bg-brand-yellow/5 border-brand-yellow/40 scale-105' : 'bg-white/5 border-white/5 hover:border-brand-yellow/20'}`}>
              {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-yellow text-brand-black text-xs font-bold rounded-full">Most Popular</span>}
              <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">{pkg.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-brand-yellow font-[family-name:var(--font-heading)]">{pkg.price}</span>
                <span className="text-gray-400 text-sm">{pkg.unit}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle2 size={16} className="text-brand-yellow shrink-0" /> {f}
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
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Testimonials" title="What Our Clients" highlight="Say" description="Real feedback from real clients who trusted us with their construction projects." />
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-yellow/20 transition-all">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={18} className="text-brand-yellow fill-brand-yellow" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.role}</p>
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
    <section className="py-24 bg-brand-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="FAQ" title="Frequently Asked" highlight="Questions" description="Find answers to common questions about our construction services." />
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-white/10 overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
                <span className="text-white font-semibold pr-4">{faq.q}</span>
                {openIndex === i ? <ChevronUp size={20} className="text-brand-yellow shrink-0" /> : <ChevronDown size={20} className="text-gray-400 shrink-0" />}
              </button>
              {openIndex === i && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="py-24 bg-brand-yellow relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.1) 35px, rgba(0,0,0,0.1) 70px)' }} />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-brand-black mb-6">
            Ready to Build Your Dream Project?
          </h2>
          <p className="text-brand-black/70 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote. Let&apos;s turn your vision into reality together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-black text-brand-yellow px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-all hover:shadow-xl hover:scale-105">
              <Phone size={20} /> Contact Us Now
            </Link>
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 border-2 border-brand-black text-brand-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-black hover:text-brand-yellow transition-all">
              <Mail size={20} /> +91 9876543210
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <PricingPreview />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
