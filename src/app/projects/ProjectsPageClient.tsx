'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

const projects = [
  // Residential (Small/Medium)
  { img: '/images/residential.png', title: 'Mishra Residence Renovation', cat: 'Residential', loc: 'Aliganj, Lucknow, UP', year: '2024', desc: 'Complete structural remodeling and interior renovation of a 20-year-old traditional home into a contemporary living space.' },
  { img: '/images/residential.png', title: 'Gupta Villa Construction', cat: 'Residential', loc: 'Indira Nagar, Lucknow, UP', year: '2023', desc: 'Turnkey construction of a modern 3-story independent house with custom interior design and landscaping.' },
  { img: '/images/residential.png', title: 'Sunrise Luxury Villas', cat: 'Residential', loc: 'Gomti Nagar, Lucknow, UP', year: '2024', desc: 'A premium gated community of 12 luxury villas featuring modern architecture, smart home integrations, and sustainable materials.' },

  // Commercial (Small/Medium)
  { img: '/images/commercial.png', title: 'Boutique Cafe Interior', cat: 'Commercial', loc: 'Hazratganj, Lucknow, UP', year: '2024', desc: 'Complete premium interior fit-out for a high-end cafe, featuring custom woodwork, ambient lighting, and modern aesthetics.' },
  { img: '/images/commercial.png', title: 'Retail Space Buildout', cat: 'Commercial', loc: 'Gomti Nagar, Lucknow, UP', year: '2023', desc: 'Structural modifications and interior construction for a 5,000 sq ft modern retail showroom.' },
  { img: '/images/commercial.png', title: 'Metro Business Tower', cat: 'Commercial', loc: 'Kanpur Road, Lucknow, UP', year: '2022', desc: 'A 15-story state-of-the-art commercial complex with LEED Gold certification and premium office spaces.' },

  // Industrial (Strictly RCC Roads)
  { img: '/images/infrastructure.png', title: 'Kisan Path RCC Road Extension', cat: 'Industrial', loc: 'Lucknow Outskirts, UP', year: '2023', desc: 'Construction of a heavy-duty 5km RCC road to facilitate smooth industrial transport and connectivity.' },
  { img: '/images/infrastructure.png', title: 'Transport Nagar RCC Driveway', cat: 'Industrial', loc: 'Transport Nagar, Lucknow, UP', year: '2024', desc: 'High-strength M40 grade RCC driveway and loading bay construction designed to withstand continuous heavy truck movement.' },
  { img: '/images/infrastructure.png', title: 'Industrial Estate Access Road', cat: 'Industrial', loc: 'Nadarganj, Lucknow, UP', year: '2022', desc: 'Development of an RCC access road connecting the main highway to the local industrial sector, ensuring all-weather durability.' },
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
