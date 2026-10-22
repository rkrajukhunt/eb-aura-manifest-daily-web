import React from 'react';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/data/site';

function AppleGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.63-1.7-3.2-1.73-1.36-.14-2.66.8-3.35.8-.69 0-1.76-.78-2.89-.76-1.49.02-2.86.87-3.63 2.2-1.55 2.69-.4 6.67 1.11 8.85.74 1.07 1.62 2.26 2.77 2.22 1.11-.04 1.53-.72 2.88-.72 1.34 0 1.72.72 2.89.7 1.2-.02 1.96-1.08 2.69-2.15.85-1.24 1.2-2.44 1.21-2.5-.03-.01-2.33-.89-2.36-3.6ZM14.17 6.13c.61-.74 1.02-1.77.91-2.8-.88.04-1.94.59-2.57 1.32-.56.65-1.06 1.7-.93 2.7.98.08 1.98-.5 2.59-1.22Z" />
    </svg>
  );
}

function PlayGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4.2 2.6 13.9 12l-9.7 9.4a1.5 1.5 0 0 1-.6-1.2V3.8c0-.5.2-.9.6-1.2Z" fill="#34A853" />
      <path d="m17.1 8.9-3.2 3.1-9.7-9.4.1-.1c.5-.3 1.1-.3 1.6 0l11.2 6.4Z" fill="#FBBC04" />
      <path d="M17.1 15.1 5.9 21.5c-.5.3-1.1.3-1.6 0l-.1-.1 9.7-9.4 3.2 3.1Z" fill="#EA4335" />
      <path d="m20.6 13.1-3.5 2-3.2-3.1 3.2-3.1 3.5 2c.8.5.8 1.7 0 2.2Z" fill="#4285F4" />
    </svg>
  );
}

interface StoreButtonsProps {
  /** `ink` on bone (default), `cream` over dark imagery */
  tone?: 'ink' | 'cream';
  className?: string;
  /** Stretch both buttons to full width (stacked menus) */
  block?: boolean;
}

// Both stores, side by side and equal: Aura ships on iOS and Android
export default function StoreButtons({ tone = 'ink', className = '', block = false }: StoreButtonsProps) {
  const toneClass = tone === 'cream' ? '!bg-[#f5f2e8] !text-[#1b1810]' : '';
  const width = block ? 'w-full' : 'w-full sm:w-auto';

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${block ? 'sm:flex-col' : ''} ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-pill !py-2.5 !pl-5 !pr-6 ${toneClass} ${width}`}
        aria-label="Download Aura on the App Store"
      >
        <AppleGlyph className="w-6 h-6 shrink-0" />
        <span className="flex flex-col items-start leading-none text-left">
          <span className="text-[10px] font-medium opacity-80">Download on the</span>
          <span className="text-[17px] font-semibold tracking-tight mt-0.5">App Store</span>
        </span>
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-pill !py-2.5 !pl-5 !pr-6 ${toneClass} ${width}`}
        aria-label="Get Aura on Google Play"
      >
        <PlayGlyph className="w-6 h-6 shrink-0" />
        <span className="flex flex-col items-start leading-none text-left">
          <span className="text-[10px] font-medium uppercase tracking-wide opacity-80">Get it on</span>
          <span className="text-[17px] font-semibold tracking-tight mt-0.5">Google Play</span>
        </span>
      </a>
    </div>
  );
}
