'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, User } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const blogs = [
  {
    slug: 'construction-cost-in-india',
    title: 'Construction Cost in India 2025: Complete Guide',
    excerpt: 'A comprehensive breakdown of construction costs across major Indian cities, including material prices, labor rates, and tips to optimize your construction budget.',
    img: '/images/hero.png',
    date: 'Mar 5, 2025',
    readTime: '8 min read',
    author: 'SUBH Construction Team',
  },
  {
    slug: 'house-construction-guide',
    title: 'Step-by-Step House Construction Guide for First-Time Builders',
    excerpt: 'Everything you need to know before building your first home — from land selection and approvals to choosing the right contractor and materials.',
    img: '/images/residential.png',
    date: 'Feb 20, 2025',
    readTime: '12 min read',
    author: 'SUBH Construction Team',
  },
  {
    slug: 'building-materials-guide',
    title: 'Best Building Materials for Indian Homes: A Complete Guide',
    excerpt: 'Compare cement brands, TMT steel, bricks vs blocks, tiles, and other essential materials. Make informed choices for your construction project.',
    img: '/images/engineers.png',
    date: 'Feb 10, 2025',
    readTime: '10 min read',
    author: 'SUBH Construction Team',
  },
  {
    slug: 'home-design-trends',
    title: 'Top 10 Home Design Trends in India for 2025',
    excerpt: 'From sustainable architecture to smart home integration — discover the latest design trends shaping modern Indian homes and buildings.',
    img: '/images/commercial.png',
    date: 'Jan 28, 2025',
    readTime: '7 min read',
    author: 'SUBH Construction Team',
  },
  {
    slug: 'how-to-build-house-india',
    title: 'How to Build a House in India: Legal, Financial & Practical Guide',
    excerpt: 'Navigate the entire house building process in India — from securing land and obtaining permits to financing options and construction timelines.',
    img: '/images/infrastructure.png',
    date: 'Jan 15, 2025',
    readTime: '15 min read',
    author: 'SUBH Construction Team',
  },
];

export default function BlogPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-sm font-semibold rounded-full mb-6">Our Blog</span>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
              Construction <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Expert articles, guides, and tips on construction, building materials, and home design in India.</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-gray-50 dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <Link href={`/blog/${blogs[0].slug}`} className="group grid lg:grid-cols-2 gap-8 rounded-2xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-brand-yellow/20 transition-all">
              <div className="relative h-72 lg:h-full overflow-hidden">
                <Image src={blogs[0].img} alt={blogs[0].title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-brand-yellow/10 text-brand-yellow text-xs font-semibold rounded-full w-fit mb-4">Featured</span>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black dark:text-white font-[family-name:var(--font-heading)] mb-4 group-hover:text-brand-yellow transition-colors">{blogs[0].title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{blogs[0].excerpt}</p>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <span className="flex items-center gap-1"><User size={14} /> {blogs[0].author}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {blogs[0].readTime}</span>
                  <span>{blogs[0].date}</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.slice(1).map((blog, i) => (
              <motion.div key={blog.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={`/blog/${blog.slug}`} className="group block rounded-2xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-brand-yellow/20 transition-all">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={blog.img} alt={blog.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-brand-black dark:text-white font-[family-name:var(--font-heading)] mb-3 group-hover:text-brand-yellow transition-colors">{blog.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <span className="flex items-center gap-1"><Clock size={14} /> {blog.readTime}</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
