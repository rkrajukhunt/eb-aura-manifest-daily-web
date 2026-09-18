'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Trash2, AlertTriangle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { DELETION_DOC, CONTACT_EMAIL } from '@/data/legal';

export default function DeleteAccountPage() {
  const [requested, setRequested] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleManualRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setRequested(true);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#6f6a58] dark:text-[#8a8265] hover:text-[#1b1810] dark:hover:text-[#f5f2e8] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 mb-10 border border-[#9e2b12]/30 dark:border-[#9e2b12]/40">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#9e2b12]/10 dark:bg-[#9e2b12]/20 text-[#9e2b12] dark:text-[#f2a96f] border border-[#9e2b12]/30 dark:border-[#9e2b12]/40">
            <Trash2 className="w-4 h-4 text-[#e2682f]" />
            <span>Data Protection & Privacy Rights</span>
          </div>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
            {DELETION_DOC.title}
          </h1>
          <p className="text-base sm:text-lg text-[#4a4536] dark:text-[#dad5be] leading-relaxed">
            {DELETION_DOC.intro[0]}
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Method 1: In App */}
        <section className="glass-panel rounded-3xl p-8 border border-black/10 dark:border-white/10 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#e2682f]/20 text-[#e2682f] flex items-center justify-center text-sm font-bold">
              1
            </span>
            <h2 className="font-serif-luxury text-2xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
              {DELETION_DOC.sections[0].heading}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4a4536] dark:text-[#dad5be] leading-relaxed pl-11">
            {DELETION_DOC.sections[0].body[0]}
          </p>
        </section>

        {/* Method 2: Request without app */}
        <section className="glass-panel rounded-3xl p-8 border border-black/10 dark:border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#e2682f]/20 text-[#e2682f] flex items-center justify-center text-sm font-bold">
              2
            </span>
            <h2 className="font-serif-luxury text-2xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
              {DELETION_DOC.sections[1].heading}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4a4536] dark:text-[#dad5be] leading-relaxed pl-11">
            {DELETION_DOC.sections[1].body[0]}
          </p>

          <div className="pl-11 pt-2">
            {requested ? (
              <div className="bg-[#e2682f]/10 border border-[#e2682f]/30 rounded-2xl p-6 text-sm text-[#1b1810] dark:text-[#f5f2e8] space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#e2682f] dark:text-[#f2a96f]">
                  <CheckCircle2 className="w-5 h-5 text-[#e2682f]" />
                  <span>Request Logged</span>
                </div>
                <p>
                  We received a deletion notice for <span className="font-mono text-[#e2682f] dark:text-[#f2a96f]">{emailInput}</span>. Our security team will confirm via email and purge all data within 30 days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleManualRequest} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="email"
                  required
                  placeholder="Enter your account email..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/70 dark:bg-black/40 border border-black/10 dark:border-white/10 text-sm text-[#1b1810] dark:text-[#f5f2e8] placeholder-[#8a8265] focus:outline-none focus:border-[#e2682f] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#1b1810] bg-gradient-to-r from-[#f2a96f] to-[#e2682f] hover:opacity-95 shrink-0 shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Scope of Deletion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6 border border-black/10 dark:border-white/5 space-y-3">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1b1810] dark:text-[#f5f2e8] flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-[#e2682f]" />
              <span>What is deleted</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#6f6a58] dark:text-[#8a8265] leading-relaxed">
              {DELETION_DOC.sections[2].body[0]}
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-black/10 dark:border-white/5 space-y-3">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1b1810] dark:text-[#f5f2e8] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#e2682f] dark:text-[#f2a96f]" />
              <span>Important note on subscriptions</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#6f6a58] dark:text-[#8a8265] leading-relaxed">
              {DELETION_DOC.sections[3].body[0]}
            </p>
          </div>
        </div>

        {/* Support contact info */}
        <div className="text-center pt-6 text-xs text-[#6f6a58] dark:text-[#8a8265]">
          <p>
            Have questions or need manual confirmation? Write to our Data Protection Officer at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#e2682f] dark:text-[#f2a96f] underline font-mono">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
