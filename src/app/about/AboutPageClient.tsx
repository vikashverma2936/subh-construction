'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Award, Users, Building2, CheckCircle2, Trophy, TrendingUp } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const stats = [
  { icon: Building2, value: '250+', label: 'Completed Projects' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '120+', label: 'Expert Engineers' },
  { icon: Trophy, value: '500+', label: 'Happy Clients' },
];

const achievements = [
  'ISO 9001:2015 Certified Construction Company',
  'Best Construction Company Award — UP Construction Council 2023',
  'Green Building Certification for sustainable projects',
  'Member of Indian Construction Industry Association',
  'Zero accident safety record for 3 consecutive years',
  'Featured in Top 50 Construction Companies in North India',
];

const team = [
  { name: 'Suresh Bhardwaj', role: 'Founder & CEO', img: '/images/team.png' },
  { name: 'Anil Kumar', role: 'Chief Engineer', img: '/images/engineers.png' },
  { name: 'Meera Singh', role: 'Head of Architecture', img: '/images/team.png' },
  { name: 'Vikram Patel', role: 'Project Director', img: '/images/engineers.png' },
];

export default function AboutPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-brand-black">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/team.png" alt="SUBH Construction Team" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/90 to-brand-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-sm font-semibold rounded-full mb-6">About Us</span>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
              Our Story of <span className="gradient-text">Excellence</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Building dreams into reality since 2010 — one project at a time.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                <stat.icon size={36} className="text-brand-yellow mx-auto mb-4" />
                <p className="text-4xl font-bold text-brand-yellow font-[family-name:var(--font-heading)]">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeader badge="Our Story" title="From Humble Beginnings to" highlight="Construction Excellence" center={false} />
              <p className="text-gray-400 leading-relaxed mb-6">
                Founded in 2010 by Suresh Bhardwaj, SUBH Construction began as a small residential construction firm in Lucknow. With a vision to deliver uncompromising quality and transparent service, the company quickly earned the trust of homeowners across Uttar Pradesh.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Over the past 15+ years, we have grown into a full-service construction company with capabilities spanning residential, commercial, and infrastructure development. Today, our team of 120+ engineers, architects, and skilled workers has successfully completed over 250 projects.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our growth has been fueled by a single principle: every project deserves the same dedication, quality, and attention to detail — whether it&apos;s a single-family home or a multi-story commercial complex.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Image src="/images/team.png" alt="SUBH Construction founding team" width={600} height={450} className="rounded-2xl object-cover w-full h-[450px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Purpose" title="Mission &" highlight="Vision" />
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-14 h-14 rounded-xl bg-brand-yellow/10 flex items-center justify-center mb-6">
                <Target size={28} className="text-brand-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)] mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To deliver exceptional construction services that transform our clients&apos; visions into reality through quality craftsmanship, innovative techniques, and transparent communication — building structures that stand the test of time.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="p-8 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-14 h-14 rounded-xl bg-brand-yellow/10 flex items-center justify-center mb-6">
                <Eye size={28} className="text-brand-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)] mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become India&apos;s most trusted and innovative construction company — setting new benchmarks in quality, sustainability, and customer satisfaction while contributing to the nation&apos;s infrastructure growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Team" title="Meet Our" highlight="Leadership" description="The experienced professionals driving SUBH Construction forward." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group text-center">
                <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-4">
                  <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="text-white font-semibold font-[family-name:var(--font-heading)] text-lg">{member.name}</h3>
                <p className="text-brand-yellow text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Achievements" title="Awards &" highlight="Certifications" />
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {achievements.map((achievement, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-center gap-3 p-5 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 size={20} className="text-brand-yellow shrink-0" />
                <span className="text-gray-300 text-sm">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-yellow">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-brand-black mb-6">Want to Work With Us?</h2>
            <p className="text-brand-black/70 text-lg mb-8">Join hundreds of satisfied clients who chose SUBH Construction for their dream projects.</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-brand-black text-brand-yellow px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-all hover:scale-105">
              <TrendingUp size={20} /> Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
