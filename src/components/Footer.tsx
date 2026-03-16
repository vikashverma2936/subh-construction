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
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="footer-brand">
              <Image src="/images/logo.png" alt="SUBH Construction Logo" width={40} height={40} className="rounded" />
              <div>
                <span className="footer-brand-name">SUBH</span>
                <span className="footer-brand-suffix">Construction</span>
              </div>
            </Link>
            <p className="footer-desc">
              SUBH Construction delivers high-quality residential, commercial, and infrastructure projects across India with 15+ years of excellence.
            </p>
            <div className="footer-socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="footer-social-btn"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-col-heading">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-col-heading">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="footer-link">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-col-heading">Contact Info</h3>
            <ul className="space-y-4">
              <li className="footer-contact-row">
                <Phone size={18} className="footer-contact-icon" />
                <div>
                  <p className="footer-contact-text">+91 9876543210</p>
                </div>
              </li>
              <li className="footer-contact-row">
                <Mail size={18} className="footer-contact-icon" />
                <div>
                  <a href="mailto:info@subhconstruction.com" className="footer-email-link">
                    info@subhconstruction.com
                  </a>
                </div>
              </li>
              <li className="footer-contact-row">
                <MapPin size={18} className="footer-contact-icon" />
                <p className="footer-contact-text">
                  Lucknow, Uttar Pradesh, India
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-border">
        <div className="footer-bottom-inner">
          <div className="footer-bottom-row">
            <p className="footer-contact-text">
              © {new Date().getFullYear()} SUBH Construction. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link href="#" className="footer-bottom-link">Privacy Policy</Link>
              <Link href="#" className="footer-bottom-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
