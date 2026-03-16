'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Shield, Phone } from 'lucide-react';

const packages = [
  {
    name: 'Basic Construction',
    price: '₹1,600',
    unit: '/sq ft',
    desc: 'Affordable quality construction for budget-conscious homeowners.',
    materials: 'Standard-grade cement, TMT steel bars, Fly ash bricks, Basic electrical fittings, Standard plumbing',
    finishing: 'Putty finished walls, Vitrified tile flooring (₹40/sq ft range), Painted wooden doors, Basic bathroom fittings, Standard window frames',
    warranty: '5 Years Structural Warranty',
    support: 'Phone support during business hours, Monthly progress reports',
    features: ['Structural design included', 'Basic floor plan', 'Standard materials', 'Plumbing & electrical', 'Exterior painting', 'Basic landscaping'],
  },
  {
    name: 'Standard Construction',
    price: '₹2,000',
    unit: '/sq ft',
    popular: true,
    desc: 'Best value package with quality materials and good finishing.',
    materials: 'Premium cement (Ultratech/ACC), High-grade TMT steel, AAC blocks, ISI-marked electrical, Branded plumbing',
    finishing: 'POP finished walls, Branded vitrified tiles (₹60/sq ft range), Flush doors with laminate, Branded bathroom fittings (Hindware/Cera), Aluminum windows',
    warranty: '7 Years Structural Warranty',
    support: 'Dedicated project manager, Bi-weekly progress reports, Priority phone support',
    features: ['Custom architectural design', '3D visualization included', 'Quality branded materials', 'Modular kitchen ready', 'Interior painting with POP', 'Compound wall & gate'],
  },
  {
    name: 'Premium Construction',
    price: '₹2,600',
    unit: '/sq ft',
    desc: 'Premium construction with superior materials and finishing.',
    materials: 'Premium cement (Ambuja/Ultratech), Superior TMT steel, High-quality AAC blocks, Havells/Legrand electrical, Jaquar/Grohe plumbing',
    finishing: 'Gypsum + POP finishing, Italian/Kajaria designer tiles (₹90/sq ft range), Designer wooden doors, Premium bathroom fittings (Jaquar), UPVC windows with mesh',
    warranty: '10 Years Structural Warranty',
    support: 'Senior project manager, Weekly progress reports, 24/7 phone support, Regular site visits',
    features: ['Premium architectural design', '3D walkthrough included', 'Premium branded materials', 'Modular kitchen installed', 'False ceiling in living areas', 'Landscape garden design'],
  },
  {
    name: 'Luxury Construction',
    price: '₹3,500',
    unit: '/sq ft',
    desc: 'Ultra-luxury construction with imported materials and bespoke finishing.',
    materials: 'Imported cement, Premium TMT steel with rust-proof coating, Imported AAC blocks, Schneider electrical systems, Imported plumbing fixtures',
    finishing: 'Italian POP + texture walls, Imported marble/granite flooring, Solid wood carved doors, Luxury bathroom suites (Kohler/Duravit), Floor-to-ceiling glass windows',
    warranty: '15 Years Comprehensive Warranty',
    support: '24/7 personal concierge, Daily progress reports with photos, Architect on-call, Interior designer included',
    features: ['Bespoke architectural design', 'VR walkthrough experience', 'Imported premium materials', 'Fully finished modular kitchen', 'Designer false ceilings throughout', 'Smart home automation ready', 'Swimming pool ready structure', 'Home theater wiring'],
  },
];

export default function PricingPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="about-hero-badge">Pricing</span>
            <h1 className="blog-hero-heading">
              Construction <span className="gradient-text">Rates</span>
            </h1>
            <p className="contact-hero-subtext">Transparent pricing with no hidden costs. Choose the package that fits your budget and dream.</p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="intro-section">
        <div className="container">
          <div className="mission-grid">
            {packages.map((pkg, i) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative p-8 rounded-2xl border transition-all ${pkg.popular ? 'bg-gray-100 dark:bg-white/5 text-brand-black dark:text-white shadow-xl scale-105 z-10' : 'bg-white text-brand-black border-gray-200 hover:border-brand-yellow shadow-md'}`}>
                {pkg.popular && (
                  <div className="gallery-badge-wrap">
                    <span className="gallery-badge"><Star size={12} /> Most Popular</span>
                  </div>
                )}
                <h3 className={`text-2xl font-bold font-[family-name:var(--font-heading)] ${pkg.popular ? 'text-brand-black dark:text-white' : 'text-brand-black'}`}>{pkg.name}</h3>
                <p className={`text-sm mt-2 mb-4 font-medium ${pkg.popular ? 'text-gray-700 dark:text-gray-300' : 'text-gray-600'}`}>{pkg.desc}</p>
                <div className="mb-6">
                  <span className="gallery-budget">{pkg.price}</span>
                  <span className={pkg.popular ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500'}>{pkg.unit}</span>
                </div>

                {/* Features */}
                <ul className="gallery-features">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm font-semibold ${pkg.popular ? 'text-gray-200' : 'text-gray-700'}`}>
                      <CheckCircle2 size={16} className="achievement-icon" /> {f}
                    </li>
                  ))}
                </ul>

                {/* Details */}
                <div className={`space-y-4 pt-6 border-t ${pkg.popular ? 'border-white/20' : 'border-gray-200'}`}>
                  <div>
                    <h4 className={`text-sm font-bold mb-1 flex items-center gap-1 ${pkg.popular ? 'text-brand-black dark:text-white' : 'text-brand-black'}`}><Shield size={14} className="text-brand-yellow" /> Materials</h4>
                    <p className={`text-xs font-medium leading-relaxed ${pkg.popular ? 'text-gray-700 dark:text-gray-300' : 'text-gray-600'}`}>{pkg.materials}</p>
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold mb-1 ${pkg.popular ? 'text-brand-black dark:text-white' : 'text-brand-black'}`}>Finishing Quality</h4>
                    <p className={`text-xs font-medium leading-relaxed ${pkg.popular ? 'text-gray-700 dark:text-gray-300' : 'text-gray-600'}`}>{pkg.finishing}</p>
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold mb-1 ${pkg.popular ? 'text-brand-black dark:text-white' : 'text-brand-black'}`}>Warranty</h4>
                    <p className={`text-xs font-medium ${pkg.popular ? 'text-gray-700 dark:text-gray-300' : 'text-gray-600'}`}>{pkg.warranty}</p>
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold mb-1 ${pkg.popular ? 'text-brand-black dark:text-white' : 'text-brand-black'}`}>Support</h4>
                    <p className={`text-xs font-medium ${pkg.popular ? 'text-gray-700 dark:text-gray-300' : 'text-gray-600'}`}>{pkg.support}</p>
                  </div>
                </div>

                <Link href="/contact" className={`mt-8 block text-center py-3.5 rounded-full font-bold transition-all ${pkg.popular ? 'bg-brand-yellow text-brand-black hover:bg-brand-yellow-dark' : 'border-2 border-brand-black dark:border-white/10 text-brand-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/5'}`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="gallery-enquiry-box">
            <p className="gallery-enquiry-text">
              <span className="font-bold">Note:</span> All prices are indicative and may vary based on location, design complexity, and current material costs. Contact us for a detailed, customized quotation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-cta-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="about-cta-heading">Ready to Get a Detailed Quote?</h2>
            <p className="about-cta-text">Our team will prepare a customized quotation based on your specific requirements.</p>
            <Link href="/contact" className="about-cta-btn">
              <Phone size={20} /> Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
