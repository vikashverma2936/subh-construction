import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Residential Construction',
  'Commercial Construction',
  'Renovation & Remodeling',
  'Interior Construction',
  'Infrastructure Development',
  'Project Management',
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-brand-black border-t border-gray-200 dark:border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="SUBH Construction Logo" width={40} height={40} className="rounded" />
              <div>
                <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-brand-yellow">SUBH</span>
                <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-brand-black dark:text-white ml-1">Construction</span>
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              SUBH Construction delivers high-quality residential, commercial, and infrastructure projects across India with 15+ years of excellence.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-brand-blue-light flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-yellow hover:text-brand-black transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-black dark:text-white font-semibold font-[family-name:var(--font-heading)] text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 dark:text-gray-400 hover:text-brand-yellow transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-brand-black dark:text-white font-semibold font-[family-name:var(--font-heading)] text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-brand-yellow transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-brand-black dark:text-white font-semibold font-[family-name:var(--font-heading)] text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-yellow mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">+91 9876543210</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-yellow mt-0.5 shrink-0" />
                <div>
                  <a href="mailto:info@subhconstruction.com" className="text-gray-600 dark:text-gray-400 hover:text-brand-yellow text-sm transition-colors">
                    info@subhconstruction.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-yellow mt-0.5 shrink-0" />
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Lucknow, Uttar Pradesh, India
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SUBH Construction. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-300 text-sm transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-300 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
