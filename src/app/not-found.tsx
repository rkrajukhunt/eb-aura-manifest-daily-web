import React from 'react';
import Link from 'next/link';
import { Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center px-4 py-20">
      <div className="glass-panel max-w-md w-full rounded-3xl p-8 sm:p-10 text-center space-y-6 border border-white/10">
        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#f2a96f]">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#e2682f]">
            404 — Page Not Found
          </span>
          <h1 className="font-serif-luxury text-3xl font-bold text-[#f5f2e8]">
            Lost in the Quiet
          </h1>
          <p className="text-sm text-[#dad5be] leading-relaxed">
            The page you are looking for has drifted away or does not exist. Let’s guide you back to familiar serenity.
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1b1810] bg-gradient-to-r from-[#f2a96f] to-[#e2682f] hover:opacity-95 shadow-[0_0_20px_rgba(226,104,47,0.3)] transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
