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
      <section className="subh-ui-40">
        <div className="subh-ui-223">
          <Image src="/images/proj-hero.png" alt="Construction projects" fill className="object-cover" />
        </div>
        <div className="subh-ui-224" />
        <div className="subh-ui-43">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="subh-ui-44">Our Portfolio</span>
            <h1 className="subh-ui-45">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="subh-ui-46">Explore 250+ successfully delivered projects across residential, commercial, and industrial sectors.</p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="subh-ui-53">
        <div className="subh-ui-22">
          {/* Filters */}
          <div className="subh-ui-225">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${filter === cat ? 'bg-white dark:bg-brand-black text-brand-yellow shadow-sm border border-brand-yellow/30' : 'bg-white text-gray-600 dark:bg-white/5 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-brand-black dark:hover:text-white border border-gray-200 dark:border-white/10'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="subh-ui-226">
            {loading ? (
              <div className="subh-ui-227"><div className="subh-ui-228"></div></div>
            ) : filtered.length === 0 ? (
              <div className="subh-ui-229">No projects found.</div>
            ) : (
              filtered.map((project, i) => (
                <motion.div key={project._id || project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} layout className="group subh-ui-230">
                <div className="subh-ui-168">
                  <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="group subh-ui-68" />
                  <div className="subh-ui-231" />
                  <div className="subh-ui-169">
                    <span className="subh-ui-170">{project.cat}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="subh-ui-232">{project.title}</h3>
                  <p className="subh-ui-233">{project.desc}</p>
                  <div className="subh-ui-234">
                    <span className="subh-ui-94"><MapPin size={14} /> {project.loc}</span>
                    <span className="subh-ui-94"><Calendar size={14} /> {project.year}</span>
                  </div>
                </div>
              </motion.div>
            )))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="subh-ui-76">
        <div className="subh-ui-77">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="subh-ui-78">Have a Project in Mind?</h2>
            <p className="subh-ui-79">Let&apos;s discuss how we can bring your construction vision to life.</p>
            <Link href="/contact" className="subh-ui-80">
              Start a Project <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
