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
      <section className="subh-ui-81">
        <div className="subh-ui-82">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="subh-ui-44">Our Blog</span>
            <h1 className="subh-ui-83">
              Construction <span className="gradient-text">Insights</span>
            </h1>
            <p className="subh-ui-84">Expert articles, guides, and tips on construction, building materials, and home design in India.</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="subh-ui-85">
        <div className="subh-ui-22">
          {/* Featured */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <Link href={`/blog/${blogs[0].slug}`} className="group subh-ui-86">
              <div className="subh-ui-87">
                <Image src={blogs[0].img} alt={blogs[0].title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="group subh-ui-88" />
              </div>
              <div className="subh-ui-89">
                <span className="subh-ui-90">Featured</span>
                <h2 className="group subh-ui-91">{blogs[0].title}</h2>
                <p className="subh-ui-92">{blogs[0].excerpt}</p>
                <div className="subh-ui-93">
                  <span className="subh-ui-94"><User size={14} /> {blogs[0].author}</span>
                  <span className="subh-ui-94"><Clock size={14} /> {blogs[0].readTime}</span>
                  <span>{blogs[0].date}</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Grid */}
          <div className="subh-ui-59">
            {blogs.slice(1).map((blog, i) => (
              <motion.div key={blog.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={`/blog/${blog.slug}`} className="group subh-ui-95">
                  <div className="subh-ui-96">
                    <Image src={blog.img} alt={blog.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="group subh-ui-88" />
                  </div>
                  <div className="p-6">
                    <h3 className="group subh-ui-97">{blog.title}</h3>
                    <p className="subh-ui-98">{blog.excerpt}</p>
                    <div className="subh-ui-93">
                      <span className="subh-ui-94"><Clock size={14} /> {blog.readTime}</span>
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
