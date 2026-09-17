'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, Search, Calendar, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { TERMS_DOC, COMPANY_NAME, CONTACT_EMAIL } from '@/data/legal';

export default function TermsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = TERMS_DOC.sections.filter(
    (sec) =>
      sec.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.body.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#8a8265] hover:text-[#f5f2e8] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 mb-12 border border-[#e2682f]/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#e2682f]/10 text-[#f2a96f] border border-[#e2682f]/20">
              <FileText className="w-4 h-4" />
              <span>Legal Agreement</span>
            </div>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#f5f2e8]">
              {TERMS_DOC.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#8a8265]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#e2682f]" />
                Effective: {TERMS_DOC.effectiveDate}
              </span>
              <span>•</span>
              <span>Published by {COMPANY_NAME}</span>
            </div>
          </div>

          <div className="w-full sm:w-72 relative">
            <Search className="w-4 h-4 text-[#8a8265] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs bg-black/40 border border-white/10 text-[#f5f2e8] placeholder-[#8a8265] focus:outline-none focus:border-[#e2682f] transition-colors"
            />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-base sm:text-lg text-[#dad5be] leading-relaxed">
          {TERMS_DOC.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <aside className="hidden lg:block lg:col-span-4">
          <div className="sticky top-28 glass-panel rounded-2xl p-6 border border-white/5 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#f5f2e8] font-bold pb-2 border-b border-white/5">
              Clauses
            </h3>
            <nav className="space-y-1 text-xs">
              {TERMS_DOC.sections.map((sec, idx) => (
                <a
                  key={idx}
                  href={`#sec-${idx}`}
                  className="block py-1.5 px-2 rounded text-[#8a8265] hover:text-[#f5f2e8] hover:bg-white/5 transition-all truncate"
                >
                  {idx + 1}. {sec.heading}
                </a>
              ))}
            </nav>
            <div className="pt-4 mt-4 border-t border-white/5 text-xs text-[#8a8265]">
              <p>For terms inquiries:</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#f2a96f] hover:underline block pt-1">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-8 space-y-8">
          {filteredSections.length === 0 ? (
            <div className="glass-panel rounded-2xl p-10 text-center text-[#8a8265]">
              No terms match your search &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredSections.map((sec, idx) => (
              <section
                key={idx}
                id={`sec-${idx}`}
                className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 space-y-4 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#e2682f]/15 text-[#e2682f] flex items-center justify-center text-xs font-mono font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <h2 className="font-serif-luxury text-2xl font-bold text-[#f5f2e8]">
                    {sec.heading}
                  </h2>
                </div>
                <div className="space-y-3 text-sm sm:text-base text-[#dad5be] leading-relaxed pl-9">
                  {sec.body.map((b, bIdx) => (
                    <p key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#8a8265] mt-1 shrink-0" />
                      <span>{b}</span>
                    </p>
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
