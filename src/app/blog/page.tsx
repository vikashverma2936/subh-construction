import type { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Construction Blog',
  description: 'Expert insights on construction costs, building materials, house construction guides, and home design trends in India by SUBH Construction.',
};

export default function BlogPage() {
  return <BlogPageClient />;
}
