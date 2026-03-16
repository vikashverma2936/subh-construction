'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Home as HomeIcon, Building2, Paintbrush, HardHat, Landmark, ClipboardList, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: HomeIcon,
    title: 'Residential Construction',
    img: '/images/residential.png',
    desc: 'From cozy family homes to luxury villas, we build residential spaces that blend comfort with modern design. Our homes are built with premium materials and meticulous attention to every detail.',
    benefits: ['Custom floor plans and architectural designs', 'Premium-grade construction materials', 'Energy-efficient building techniques', 'Complete interior finishing options', 'Landscaping and exterior design'],
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    img: '/images/commercial.png',
    desc: 'We create commercial spaces that drive business success — from modern office buildings to retail complexes and mixed-use developments with world-class facilities.',
    benefits: ['Modern office and retail space designs', 'Structural engineering excellence', 'Fire safety and compliance systems', 'Smart building technology integration', 'Parking and common area planning'],
  },
  {
    icon: Paintbrush,
    title: 'Renovation & Remodeling',
    img: '/images/residential.png',
    desc: 'Breathe new life into your existing spaces. Our renovation services transform outdated properties into modern, functional masterpieces with minimal disruption.',
    benefits: ['Kitchen and bathroom remodeling', 'Room additions and extensions', 'Structural modifications', 'Modern electrical and plumbing upgrades', 'Eco-friendly material options'],
  },
  {
    icon: HardHat,
    title: 'Interior Construction',
    img: '/images/engineers.png',
    desc: 'Premium interior construction services that elevate your spaces with expert craftsmanship — from false ceilings and modular kitchens to elegant flooring and finishing.',
    benefits: ['Modular kitchen and wardrobe installation', 'False ceiling and lighting design', 'Premium flooring solutions', 'Wall treatments and textures', 'Complete bathroom fitting'],
  },
  {
    icon: Landmark,
    title: 'Infrastructure Development',
    img: '/images/infrastructure.png',
    desc: 'Large-scale infrastructure projects including roads, bridges, and public facilities built with engineering precision and designed to serve communities for generations.',
    benefits: ['Road and highway construction', 'Bridge and overpass engineering', 'Water supply and drainage systems', 'Public facility construction', 'Environmental compliance'],
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    img: '/images/team.png',
    desc: 'End-to-end project management ensuring your construction project runs smoothly, stays on budget, and finishes on time — with complete transparency at every stage.',
    benefits: ['Detailed project planning and scheduling', 'Budget management and cost control', 'Quality assurance and inspections', 'Vendor and contractor coordination', 'Regular progress reporting'],
  },
];

export default function ServicesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="gallery-hero-bg">
          <Image src="/images/hero.png" alt="Construction services" fill className="object-cover" />
        </div>
        <div className="gallery-hero-overlay" />
        <div className="about-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="about-hero-badge">Our Services</span>
            <h1 className="about-hero-heading">
              Comprehensive <span className="gradient-text">Construction Services</span>
            </h1>
            <p className="about-hero-subtext">From concept to completion — we offer a full range of construction services tailored to your specific needs.</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="intro-section">
        <div className="gallery-detail-content">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mission-icon-box">
                  <service.icon size={28} className="text-brand-yellow" />
                </div>
                <h2 className="gallery-detail-heading">{service.title}</h2>
                <p className="intro-body-text">{service.desc}</p>
                <ul className="pricing-features">
                  {service.benefits.map((b) => (
                    <li key={b} className="gallery-detail-feature">
                      <CheckCircle2 size={16} className="achievement-icon" /> {b}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="gallery-back-btn">
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="gallery-detail-img-wrap">
                  <Image src={service.img} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="gallery-detail-img-overlay" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-cta-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="about-cta-heading">Need a Custom Construction Solution?</h2>
            <p className="about-cta-text">Contact our team to discuss your specific requirements and get a tailored proposal.</p>
            <Link href="/contact" className="about-cta-btn">
              Contact Us <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
