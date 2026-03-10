import type { Metadata } from 'next';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore SUBH Construction\'s portfolio of 250+ completed residential, commercial, and infrastructure projects across India.',
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
