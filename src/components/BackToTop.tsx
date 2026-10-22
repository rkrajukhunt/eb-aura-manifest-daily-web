'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { getLenis } from './SmoothScroll';

// Glides home through Lenis when it is running, otherwise lets the browser scroll
export default function BackToTop() {
  const toTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { duration: 1.8, force: true });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      className="inline-flex items-center gap-2 rounded-full border border-[#f5f2e8]/15 bg-[#f5f2e8]/5 px-4 py-2 text-xs font-semibold text-[#f5f2e8]/85 hover:bg-[#f5f2e8]/10 hover:text-[#f5f2e8] transition-colors"
    >
      Back to top
      <ArrowUp className="w-3.5 h-3.5" />
    </button>
  );
}
