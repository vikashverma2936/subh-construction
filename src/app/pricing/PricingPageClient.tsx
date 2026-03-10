'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Star, Shield, Phone } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

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
      <section className="pt-32 pb-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-sm font-semibold rounded-full mb-6">Pricing</span>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
              Construction <span className="gradient-text">Rates</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Transparent pricing with no hidden costs. Choose the package that fits your budget and dream.</p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, i) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative p-8 rounded-2xl border transition-all ${pkg.popular ? 'bg-brand-yellow/5 border-brand-yellow/40' : 'bg-white/5 border-white/5'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="flex items-center gap-1 px-4 py-1 bg-brand-yellow text-brand-black text-xs font-bold rounded-full"><Star size={12} /> Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mt-2 mb-4">{pkg.desc}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-brand-yellow font-[family-name:var(--font-heading)]">{pkg.price}</span>
                  <span className="text-gray-400">{pkg.unit}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 size={16} className="text-brand-yellow shrink-0" /> {f}
                    </li>
                  ))}
                </ul>

                {/* Details */}
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1 flex items-center gap-1"><Shield size={14} className="text-brand-yellow" /> Materials</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{pkg.materials}</p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">Finishing Quality</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{pkg.finishing}</p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">Warranty</h4>
                    <p className="text-gray-400 text-xs">{pkg.warranty}</p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">Support</h4>
                    <p className="text-gray-400 text-xs">{pkg.support}</p>
                  </div>
                </div>

                <Link href="/contact" className={`mt-8 block text-center py-3.5 rounded-full font-semibold transition-all ${pkg.popular ? 'bg-brand-yellow text-brand-black hover:bg-brand-yellow-dark' : 'border border-brand-yellow/30 text-brand-yellow hover:bg-brand-yellow hover:text-brand-black'}`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 p-6 rounded-xl bg-white/5 border border-white/5 text-center">
            <p className="text-gray-400 text-sm">
              <span className="text-brand-yellow font-semibold">Note:</span> All prices are indicative and may vary based on location, design complexity, and current material costs. Contact us for a detailed, customized quotation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-yellow">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-brand-black mb-6">Ready to Get a Detailed Quote?</h2>
            <p className="text-brand-black/70 text-lg mb-8">Our team will prepare a customized quotation based on your specific requirements.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-black text-brand-yellow px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-all hover:scale-105">
              <Phone size={20} /> Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
