'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Building2, CheckCircle2, Trophy, TrendingUp } from 'lucide-react';
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
      <section className="about-hero">
        <div className="about-hero-bg-img">
          <Image src="/images/team.png" alt="SUBH Construction Team" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="about-hero-badge">About Us</span>
            <h1 className="about-hero-heading">
              Our Story of <span className="gradient-text">Excellence</span>
            </h1>
            <p className="about-hero-subtext">Building dreams into reality since 2010 — one project at a time.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="about-stat-card">
                <stat.icon size={36} className="about-stat-icon" />
                <p className="about-stat-value">{stat.value}</p>
                <p className="about-stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeader badge="Our Story" title="From Humble Beginnings to" highlight="Construction Excellence" center={false} />
              <p className="intro-body-text">
                Founded in 2010 by Suresh Bhardwaj, SUBH Construction began as a small residential construction firm in Lucknow. With a vision to deliver uncompromising quality and transparent service, the company quickly earned the trust of homeowners across Uttar Pradesh.
              </p>
              <p className="intro-body-text">
                Over the past 15+ years, we have grown into a full-service construction company with capabilities spanning residential, commercial, and infrastructure development. Today, our team of 120+ engineers, architects, and skilled workers has successfully completed over 250 projects.
              </p>
              <p className="intro-body-text-last">
                Our growth has been fueled by a single principle: every project deserves the same dedication, quality, and attention to detail — whether it&apos;s a single-family home or a multi-story commercial complex.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Image src="/images/team.png" alt="SUBH Construction founding team" width={600} height={450} className="intro-image" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="container">
          <SectionHeader badge="Our Purpose" title="Mission &" highlight="Vision" />
          <div className="mission-grid">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mission-card">
              <div className="mission-icon-box">
                <Target size={28} className="text-brand-yellow" />
              </div>
              <h3 className="mission-card-heading">Our Mission</h3>
              <p className="mission-card-text">
                To deliver exceptional construction services that transform our clients&apos; visions into reality through quality craftsmanship, innovative techniques, and transparent communication — building structures that stand the test of time.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="mission-card">
              <div className="mission-icon-box">
                <Eye size={28} className="text-brand-yellow" />
              </div>
              <h3 className="mission-card-heading">Our Vision</h3>
              <p className="mission-card-text">
                To become India&apos;s most trusted and innovative construction company — setting new benchmarks in quality, sustainability, and customer satisfaction while contributing to the nation&apos;s infrastructure growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <SectionHeader badge="Our Team" title="Meet Our" highlight="Leadership" description="The experienced professionals driving SUBH Construction forward." />
          <div className="team-grid">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group team-member">
                <div className="team-member-photo-wrap">
                  <Image src={member.img} alt={member.name} fill className="group team-member-photo" />
                  <div className="team-member-overlay" />
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="mission-section">
        <div className="container">
          <SectionHeader badge="Achievements" title="Awards &" highlight="Certifications" />
          <div className="achievements-grid">
            {achievements.map((achievement, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="achievement-item">
                <CheckCircle2 size={20} className="achievement-icon" />
                <span className="achievement-text">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-cta-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="about-cta-heading">Want to Work With Us?</h2>
            <p className="about-cta-text">Join hundreds of satisfied clients who chose SUBH Construction for their dream projects.</p>
            <a href="/contact" className="about-cta-btn">
              <TrendingUp size={20} /> Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
