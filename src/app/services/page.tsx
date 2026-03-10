import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'SUBH Construction offers residential, commercial, renovation, interior, infrastructure, and project management services. Explore our full range of construction expertise.',
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
