'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-blue/98 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-brand-blue'
      }`}
    >
      <div className="subh-ui-22">
        <div className="subh-ui-23">
          {/* Logo */}
          <Link href="/" className="subh-ui-5">
            <Image src="/images/logo.png" alt="SUBH Construction Logo" width={45} height={45} className="rounded" />
            <div>
              <span className="subh-ui-24">SUBH</span>
              <span className="subh-ui-25">Construction</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="subh-ui-26">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="subh-ui-27"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="subh-ui-28">
            <button
              onClick={toggleTheme}
              className="subh-ui-29"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              href="/contact"
              className="subh-ui-30"
            >
              <Phone size={16} />
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="subh-ui-31">
            <button
              onClick={toggleTheme}
              className="subh-ui-29"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="subh-ui-32"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="subh-ui-33"
          >
            <div className="subh-ui-34">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="subh-ui-35"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="subh-ui-36"
                >
                  <Phone size={16} />
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
