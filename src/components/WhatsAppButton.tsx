'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20your%20construction%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-200 animate-pulse-glow"
      style={{ '--tw-shadow-color': 'rgba(34,197,94,0.4)' } as React.CSSProperties}
    >
      <MessageCircle size={28} className="text-brand-black dark:text-white" />
    </a>
  );
}
