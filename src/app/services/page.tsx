import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Construction Services in Lucknow | Residential & Commercial',
  description: 'Explore premium construction services in Lucknow by SUBH Construction. We offer residential building, commercial projects, renovation, and turnkey civil contracting with 15+ years of expertise.',
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
