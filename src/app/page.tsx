import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Best Construction Company in Lucknow | SUBH Construction',
  description: 'SUBH Construction is the most trusted construction company in Lucknow. We specialize in residential home construction, commercial building projects, and turnkey civil contracting services across Uttar Pradesh. Get a free quote today!',
  keywords: [
    'Construction Company in Lucknow',
    'Best Building Contractor in Lucknow',
    'Residential Construction Lucknow',
    'Commercial Construction Lucknow',
    'Civil Contractor Lucknow',
    'House Construction Cost in Lucknow',
    'Turnkey Construction Projects India',
    'Interior Design Lucknow',
    'Home Renovation Lucknow',
    'SUBH Construction Lucknow',
  ],
  alternates: {
    canonical: 'https://subhconstruction.com',
  },
  openGraph: {
    title: 'Best Construction Company in Lucknow | SUBH Construction',
    description: 'Trusted residential and commercial construction services in Lucknow. Build your dream space with SUBH Construction.',
    url: 'https://subhconstruction.com',
    siteName: 'SUBH Construction',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'SUBH Construction Projects',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
