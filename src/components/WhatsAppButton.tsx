'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20your%20construction%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-btn"
      style={{ '--tw-shadow-color': 'rgba(34,197,94,0.4)' } as React.CSSProperties}
    >
      <MessageCircle size={28} className="theme-root" />
    </a>
  );
}
