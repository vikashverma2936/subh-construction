import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  metadataBase: new URL('https://subhconstruction.com'),
  title: {
    default: 'Best Construction Company in Lucknow | SUBH Construction',
    template: '%s | SUBH Construction',
  },
  description: 'SUBH Construction is a trusted construction company in Lucknow offering residential construction, commercial building services, renovation, and turnkey construction solutions. Contact us for a free quote.',
  keywords: ['Construction Company in Lucknow', 'Building Contractor in Lucknow', 'Residential Construction Lucknow', 'Commercial Construction Lucknow', 'House Renovation Lucknow'],
  authors: [{ name: 'SUBH Construction' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://subhconstruction.com',
    siteName: 'SUBH Construction',
    title: 'Best Construction Company in Lucknow | SUBH Construction',
    description: 'SUBH Construction is a trusted construction company in Lucknow offering residential construction, commercial building services, renovation, and turnkey construction solutions.',
    images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: 'SUBH Construction' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Construction Company in Lucknow | SUBH Construction',
    description: 'Trusted construction company in Lucknow for residential and commercial building services.',
    images: ['/images/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ConstructionBusiness',
  name: 'SUBH Construction',
  description: 'Premium residential, commercial, and infrastructure construction services across India.',
  url: 'https://subhconstruction.com',
  logo: 'https://subhconstruction.com/images/logo.png',
  telephone: '+91-9876543210',
  email: 'info@subhconstruction.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  sameAs: [],
  foundingDate: '2010',
  numberOfEmployees: '120+',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
