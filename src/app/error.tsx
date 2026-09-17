'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error for diagnostics
    console.error('App runtime error boundary caught:', error);
  }, [error]);

  return (
    <main className="min-h-[75vh] flex items-center justify-center px-4 py-20">
      <div className="glass-panel-glow max-w-md w-full rounded-3xl p-8 sm:p-10 text-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-[#e2682f]/15 border border-[#e2682f]/30 flex items-center justify-center mx-auto text-[#e2682f]">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f5f2e8]">
            A Quiet Moment
          </h2>
          <p className="text-sm text-[#dad5be]">
            Something unexpected occurred while loading this page. Please try refreshing or return to the peaceful home.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1b1810] bg-gradient-to-r from-[#f2a96f] to-[#e2682f] hover:opacity-95 transition-opacity"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#dad5be] glass-panel hover:text-[#f5f2e8] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
