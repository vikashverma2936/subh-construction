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
    <footer className="subh-ui-2">
      {/* Main Footer */}
      <div className="subh-ui-3">
        <div className="subh-ui-4">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="subh-ui-5">
              <Image src="/images/logo.png" alt="SUBH Construction Logo" width={40} height={40} className="rounded" />
              <div>
                <span className="subh-ui-6">SUBH</span>
                <span className="subh-ui-7">Construction</span>
              </div>
            </Link>
            <p className="subh-ui-8">
              SUBH Construction delivers high-quality residential, commercial, and infrastructure projects across India with 15+ years of excellence.
            </p>
            <div className="subh-ui-9">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="subh-ui-10"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="subh-ui-11">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="subh-ui-12">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="subh-ui-11">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="subh-ui-12">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="subh-ui-11">Contact Info</h3>
            <ul className="space-y-4">
              <li className="subh-ui-13">
                <Phone size={18} className="subh-ui-14" />
                <div>
                  <p className="subh-ui-15">+91 9876543210</p>
                </div>
              </li>
              <li className="subh-ui-13">
                <Mail size={18} className="subh-ui-14" />
                <div>
                  <a href="mailto:info@subhconstruction.com" className="subh-ui-16">
                    info@subhconstruction.com
                  </a>
                </div>
              </li>
              <li className="subh-ui-13">
                <MapPin size={18} className="subh-ui-14" />
                <p className="subh-ui-15">
                  Lucknow, Uttar Pradesh, India
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="subh-ui-17">
        <div className="subh-ui-18">
          <div className="subh-ui-19">
            <p className="subh-ui-15">
              © {new Date().getFullYear()} SUBH Construction. All rights reserved.
            </p>
            <div className="subh-ui-20">
              <Link href="#" className="subh-ui-21">Privacy Policy</Link>
              <Link href="#" className="subh-ui-21">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
