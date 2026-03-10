'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

const projects = [
  { img: '/images/residential.png', title: 'Sunrise Luxury Villas', cat: 'Residential', loc: 'Lucknow, UP', year: '2024', desc: 'A premium gated community of 32 luxury villas with modern amenities, landscaped gardens, and private swimming pools.' },
  { img: '/images/commercial.png', title: 'Metro Business Tower', cat: 'Commercial', loc: 'Noida, UP', year: '2023', desc: 'A 22-story commercial tower featuring Grade-A office spaces, smart building systems, and sustainable design.' },
  { img: '/images/infrastructure.png', title: 'National Highway Extension', cat: 'Industrial', loc: 'Delhi NCR', year: '2023', desc: 'A 45km highway expansion project with 4-lane divided carriageway, service roads, and 3 major interchanges.' },
  { img: '/images/residential.png', title: 'Green Valley Apartments', cat: 'Residential', loc: 'Kanpur, UP', year: '2024', desc: 'A 5-tower residential complex with 200+ apartments, rooftop gardens, club house, and recreational facilities.' },
  { img: '/images/commercial.png', title: 'City Center Mall', cat: 'Commercial', loc: 'Lucknow, UP', year: '2022', desc: 'A 300,000 sq ft retail and entertainment destination with multiplex, food court, and anchor retail stores.' },
  { img: '/images/infrastructure.png', title: 'Riverside Bridge Project', cat: 'Industrial', loc: 'Varanasi, UP', year: '2022', desc: 'A 1.2km cable-stayed bridge crossing the Ganges river, connecting the eastern and western districts.' },
  { img: '/images/residential.png', title: 'Royal Heights Residency', cat: 'Residential', loc: 'Agra, UP', year: '2023', desc: 'Ultra-premium 3 and 4 BHK residences with Italian marble flooring, modular kitchens, and panoramic views.' },
  { img: '/images/commercial.png', title: 'TechPark Innovation Hub', cat: 'Commercial', loc: 'Greater Noida', year: '2024', desc: 'A state-of-the-art IT park with co-working spaces, server rooms, and energy-efficient building design.' },
  { img: '/images/infrastructure.png', title: 'Industrial Warehouse Complex', cat: 'Industrial', loc: 'Mathura, UP', year: '2021', desc: 'A 500,000 sq ft industrial warehouse complex with loading bays, cold storage, and automated logistics.' },
];

export default function ProjectsPageClient() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.cat === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-brand-black">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/commercial.png" alt="Construction projects" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-sm font-semibold rounded-full mb-6">Our Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Explore 250+ successfully delivered projects across residential, commercial, and industrial sectors.</p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${filter === cat ? 'bg-brand-yellow text-brand-black' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} layout className="group rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-brand-yellow/20 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-yellow text-brand-black text-xs font-bold rounded-full">{project.cat}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)] mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {project.loc}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-yellow">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-brand-black mb-6">Have a Project in Mind?</h2>
            <p className="text-brand-black/70 text-lg mb-8">Let&apos;s discuss how we can bring your construction vision to life.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-black text-brand-yellow px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-all hover:scale-105">
              Start a Project <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
