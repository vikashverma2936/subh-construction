'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

type ProjectType = {
  _id: string;
  img: string;
  title: string;
  cat: string;
  loc: string;
  year: string;
  desc: string;
};

export default function ProjectsPageClient() {
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/projects`);
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.cat === filter);

  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="gallery-hero-bg">
          <Image src="/images/proj-hero.png" alt="Construction projects" fill className="object-cover" />
        </div>
        <div className="gallery-hero-overlay" />
        <div className="about-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="about-hero-badge">Our Portfolio</span>
            <h1 className="about-hero-heading">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="about-hero-subtext">Explore 250+ successfully delivered projects across residential, commercial, and industrial sectors.</p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="intro-section">
        <div className="container">
          {/* Filters */}
          <div className="gallery-filter-bar">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${filter === cat ? 'bg-white dark:bg-brand-black text-brand-yellow shadow-sm border border-brand-yellow/30' : 'bg-white text-gray-600 dark:bg-white/5 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-brand-black dark:hover:text-white border border-gray-200 dark:border-white/10'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {loading ? (
              <div className="gallery-loading-wrap"><div className="gallery-spinner"></div></div>
            ) : filtered.length === 0 ? (
              <div className="gallery-empty">No projects found.</div>
            ) : (
              filtered.map((project, i) => (
                <motion.div key={project._id || project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} layout className="group gallery-card">
                <div className="project-card-img-wrap">
                  <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="group team-member-photo" />
                  <div className="gallery-card-overlay" />
                  <div className="project-badge-wrap">
                    <span className="project-badge">{project.cat}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="gallery-card-title">{project.title}</h3>
                  <p className="gallery-card-desc">{project.desc}</p>
                  <div className="gallery-card-meta">
                    <span className="blog-featured-meta-item"><MapPin size={14} /> {project.loc}</span>
                    <span className="blog-featured-meta-item"><Calendar size={14} /> {project.year}</span>
                  </div>
                </div>
              </motion.div>
            )))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-cta-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="about-cta-heading">Have a Project in Mind?</h2>
            <p className="about-cta-text">Let&apos;s discuss how we can bring your construction vision to life.</p>
            <Link href="/contact" className="about-cta-btn">
              Start a Project <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
