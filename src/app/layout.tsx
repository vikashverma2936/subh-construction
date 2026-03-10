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
    default: 'SUBH Construction - Premium Residential, Commercial & Infrastructure Construction in India',
    template: '%s | SUBH Construction',
  },
  description: 'SUBH Construction delivers high-quality residential, commercial, and infrastructure projects across India. 15+ years of excellence, 250+ completed projects. Get a free quote today!',
  keywords: ['construction company India', 'civil contractor', 'building contractor', 'home construction services', 'residential construction', 'commercial construction', 'infrastructure development', 'building construction Lucknow', 'SUBH Construction', 'house construction cost India'],
  authors: [{ name: 'SUBH Construction' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://subhconstruction.com',
    siteName: 'SUBH Construction',
    title: 'SUBH Construction - Building the Future with Strength & Trust',
    description: 'Premium residential, commercial, and infrastructure construction services across India.',
    images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: 'SUBH Construction' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SUBH Construction - Building the Future',
    description: 'Premium construction services across India.',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
