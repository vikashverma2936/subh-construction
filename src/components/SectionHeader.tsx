'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({ badge, title, highlight, description, center = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 text-brand-yellow text-sm font-semibold rounded-full mb-4 border border-brand-yellow/20">
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] leading-tight ${light ? 'text-brand-black dark:text-white' : 'text-white'}`}>
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className={`mt-4 text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-600 dark:text-gray-400' : 'text-gray-400'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
