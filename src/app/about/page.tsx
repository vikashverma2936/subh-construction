import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SUBH Construction — 15+ years of excellence in residential, commercial, and infrastructure construction across India. Meet our team of 120+ engineers.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
