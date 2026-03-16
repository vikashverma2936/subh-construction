import type { Metadata } from 'next';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Recent Projects | Top Construction Sites in Lucknow',
  description: 'View the latest residential and commercial construction projects completed by SUBH Construction in Lucknow and nearby areas. High-quality building portfolio.',
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
