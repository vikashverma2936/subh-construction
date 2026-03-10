import type { Metadata } from 'next';
import PricingPageClient from './PricingPageClient';

export const metadata: Metadata = {
  title: 'Construction Rates & Pricing',
  description: 'Transparent construction pricing from ₹1,600 to ₹3,500 per sq ft. Explore Basic, Standard, Premium, and Luxury construction packages from SUBH Construction.',
};

export default function PricingPage() {
  return <PricingPageClient />;
}
