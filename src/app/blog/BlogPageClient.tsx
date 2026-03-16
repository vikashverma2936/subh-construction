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
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="about-hero-badge">Our Blog</span>
            <h1 className="blog-hero-heading">
              Construction <span className="gradient-text">Insights</span>
            </h1>
            <p className="blog-hero-subtext">Expert articles, guides, and tips on construction, building materials, and home design in India.</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-featured-section">
        <div className="container">
          {/* Featured */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <Link href={`/blog/${blogs[0].slug}`} className="group blog-featured-card">
              <div className="blog-featured-img-wrap">
                <Image src={blogs[0].img} alt={blogs[0].title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="group blog-featured-img" />
              </div>
              <div className="blog-featured-body">
                <span className="blog-featured-tag">Featured</span>
                <h2 className="group blog-featured-title">{blogs[0].title}</h2>
                <p className="blog-featured-excerpt">{blogs[0].excerpt}</p>
                <div className="blog-featured-meta">
                  <span className="blog-featured-meta-item"><User size={14} /> {blogs[0].author}</span>
                  <span className="blog-featured-meta-item"><Clock size={14} /> {blogs[0].readTime}</span>
                  <span>{blogs[0].date}</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Grid */}
          <div className="mission-grid">
            {blogs.slice(1).map((blog, i) => (
              <motion.div key={blog.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={`/blog/${blog.slug}`} className="group blog-card">
                  <div className="blog-card-img-wrap">
                    <Image src={blog.img} alt={blog.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="group blog-featured-img" />
                  </div>
                  <div className="p-6">
                    <h3 className="group blog-card-title">{blog.title}</h3>
                    <p className="blog-card-excerpt">{blog.excerpt}</p>
                    <div className="blog-featured-meta">
                      <span className="blog-featured-meta-item"><Clock size={14} /> {blog.readTime}</span>
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
