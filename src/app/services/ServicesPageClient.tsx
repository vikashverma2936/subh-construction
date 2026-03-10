'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Home as HomeIcon, Building2, Paintbrush, HardHat, Landmark, ClipboardList, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

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
      <section className="relative pt-32 pb-20 bg-brand-black">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/hero.png" alt="Construction services" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-sm font-semibold rounded-full mb-6">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
              Comprehensive <span className="gradient-text">Construction Services</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">From concept to completion — we offer a full range of construction services tailored to your specific needs.</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 rounded-xl bg-brand-yellow/10 flex items-center justify-center mb-6">
                  <service.icon size={28} className="text-brand-yellow" />
                </div>
                <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-heading)] mb-4">{service.title}</h2>
                <p className="text-gray-400 leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle2 size={16} className="text-brand-yellow shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-6 py-3 rounded-full font-semibold hover:bg-brand-yellow-dark transition-all hover:scale-105">
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden h-[400px]">
                  <Image src={service.img} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-yellow">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-brand-black mb-6">Need a Custom Construction Solution?</h2>
            <p className="text-brand-black/70 text-lg mb-8">Contact our team to discuss your specific requirements and get a tailored proposal.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-black text-brand-yellow px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-all hover:scale-105">
              Contact Us <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
