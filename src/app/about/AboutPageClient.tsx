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
      <section className="subh-ui-40">
        <div className="subh-ui-41">
          <Image src="/images/team.png" alt="SUBH Construction Team" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="subh-ui-42" />
        <div className="subh-ui-43">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="subh-ui-44">About Us</span>
            <h1 className="subh-ui-45">
              Our Story of <span className="gradient-text">Excellence</span>
            </h1>
            <p className="subh-ui-46">Building dreams into reality since 2010 — one project at a time.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="subh-ui-47">
        <div className="subh-ui-22">
          <div className="subh-ui-48">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="subh-ui-49">
                <stat.icon size={36} className="subh-ui-50" />
                <p className="subh-ui-51">{stat.value}</p>
                <p className="subh-ui-52">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="subh-ui-53">
        <div className="subh-ui-22">
          <div className="subh-ui-54">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeader badge="Our Story" title="From Humble Beginnings to" highlight="Construction Excellence" center={false} />
              <p className="subh-ui-55">
                Founded in 2010 by Suresh Bhardwaj, SUBH Construction began as a small residential construction firm in Lucknow. With a vision to deliver uncompromising quality and transparent service, the company quickly earned the trust of homeowners across Uttar Pradesh.
              </p>
              <p className="subh-ui-55">
                Over the past 15+ years, we have grown into a full-service construction company with capabilities spanning residential, commercial, and infrastructure development. Today, our team of 120+ engineers, architects, and skilled workers has successfully completed over 250 projects.
              </p>
              <p className="subh-ui-56">
                Our growth has been fueled by a single principle: every project deserves the same dedication, quality, and attention to detail — whether it&apos;s a single-family home or a multi-story commercial complex.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Image src="/images/team.png" alt="SUBH Construction founding team" width={600} height={450} className="subh-ui-57" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="subh-ui-58">
        <div className="subh-ui-22">
          <SectionHeader badge="Our Purpose" title="Mission &" highlight="Vision" />
          <div className="subh-ui-59">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="subh-ui-60">
              <div className="subh-ui-61">
                <Target size={28} className="text-brand-yellow" />
              </div>
              <h3 className="subh-ui-62">Our Mission</h3>
              <p className="subh-ui-63">
                To deliver exceptional construction services that transform our clients&apos; visions into reality through quality craftsmanship, innovative techniques, and transparent communication — building structures that stand the test of time.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="subh-ui-60">
              <div className="subh-ui-61">
                <Eye size={28} className="text-brand-yellow" />
              </div>
              <h3 className="subh-ui-62">Our Vision</h3>
              <p className="subh-ui-63">
                To become India&apos;s most trusted and innovative construction company — setting new benchmarks in quality, sustainability, and customer satisfaction while contributing to the nation&apos;s infrastructure growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="subh-ui-64">
        <div className="subh-ui-22">
          <SectionHeader badge="Our Team" title="Meet Our" highlight="Leadership" description="The experienced professionals driving SUBH Construction forward." />
          <div className="subh-ui-65">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group subh-ui-66">
                <div className="subh-ui-67">
                  <Image src={member.img} alt={member.name} fill className="group subh-ui-68" />
                  <div className="subh-ui-69" />
                </div>
                <h3 className="subh-ui-70">{member.name}</h3>
                <p className="subh-ui-71">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="subh-ui-58">
        <div className="subh-ui-22">
          <SectionHeader badge="Achievements" title="Awards &" highlight="Certifications" />
          <div className="subh-ui-72">
            {achievements.map((achievement, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="subh-ui-73">
                <CheckCircle2 size={20} className="subh-ui-74" />
                <span className="subh-ui-75">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="subh-ui-76">
        <div className="subh-ui-77">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="subh-ui-78">Want to Work With Us?</h2>
            <p className="subh-ui-79">Join hundreds of satisfied clients who chose SUBH Construction for their dream projects.</p>
            <a href="/contact" className="subh-ui-80">
              <TrendingUp size={20} /> Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
