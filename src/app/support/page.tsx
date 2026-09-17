'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LifeBuoy, Send, CheckCircle2, ArrowLeft, HelpCircle } from 'lucide-react';
import { SUPPORT_DOC, CONTACT_EMAIL } from '@/data/legal';

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Billing & Subscriptions',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#6f6a58] dark:text-[#8a8265] hover:text-[#1b1810] dark:hover:text-[#f5f2e8] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 mb-12 border border-[#e2682f]/30">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#e2682f]/10 text-[#c9531f] dark:text-[#f2a96f] border border-[#e2682f]/20">
            <LifeBuoy className="w-4 h-4 text-[#e2682f]" />
            <span>Support & Help Center</span>
          </div>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
            We Are Here to Help
          </h1>
          <p className="text-base sm:text-lg text-[#4a4536] dark:text-[#dad5be] leading-relaxed">
            {SUPPORT_DOC.intro[0]}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-8 border border-black/10 dark:border-white/10 space-y-6">
            <div className="space-y-1">
              <h2 className="font-serif-luxury text-2xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
                Send a Message
              </h2>
              <p className="text-xs text-[#6f6a58] dark:text-[#8a8265]">
                Direct connection with our product engineering team. Typical response within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#e2682f]/10 border border-[#e2682f]/30 rounded-2xl p-8 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-[#e2682f] text-white flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(226,104,47,0.5)]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
                  Message Received
                </h3>
                <p className="text-sm text-[#4a4536] dark:text-[#dad5be]">
                  Thank you, {formData.name || 'friend'}. We have received your note and will reply directly to <span className="text-[#e2682f] dark:text-[#f2a96f] font-mono">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', category: 'Billing & Subscriptions', message: '' });
                  }}
                  className="mt-4 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1b1810] bg-[#dad5be] hover:bg-white transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#4a4536] dark:text-[#dad5be] font-medium">Your Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-black/40 border border-black/10 dark:border-white/10 text-sm text-[#1b1810] dark:text-[#f5f2e8] placeholder-[#8a8265] focus:outline-none focus:border-[#e2682f] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#4a4536] dark:text-[#dad5be] font-medium">Account Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-black/40 border border-black/10 dark:border-white/10 text-sm text-[#1b1810] dark:text-[#f5f2e8] placeholder-[#8a8265] focus:outline-none focus:border-[#e2682f] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-[#4a4536] dark:text-[#dad5be] font-medium">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-[#141310] border border-black/10 dark:border-white/10 text-sm text-[#1b1810] dark:text-[#f5f2e8] focus:outline-none focus:border-[#e2682f] transition-colors"
                  >
                    <option value="Billing & Subscriptions">Billing & Subscriptions</option>
                    <option value="Audio Playback Issues">Audio Playback Issues</option>
                    <option value="Push Notifications">Push Notifications</option>
                    <option value="Account & Data Management">Account & Data Management</option>
                    <option value="General Feedback & Ideas">General Feedback & Ideas</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-[#4a4536] dark:text-[#dad5be] font-medium">How can we help? *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe what happened or what question you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-black/40 border border-black/10 dark:border-white/10 text-sm text-[#1b1810] dark:text-[#f5f2e8] placeholder-[#8a8265] focus:outline-none focus:border-[#e2682f] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#1b1810] bg-gradient-to-r from-[#f2a96f] to-[#e2682f] hover:opacity-95 shadow-[0_0_20px_rgba(226,104,47,0.3)] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Quick Help Guides */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-3xl p-8 border border-black/10 dark:border-white/10 space-y-6">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#1b1810] dark:text-[#f5f2e8] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#e2682f]" />
              <span>Quick Solutions</span>
            </h3>

            <div className="space-y-6">
              {SUPPORT_DOC.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2 border-b border-black/5 dark:border-white/5 pb-4 last:border-0 last:pb-0">
                  <h4 className="text-sm font-semibold text-[#e2682f] dark:text-[#f2a96f]">
                    {sec.heading}
                  </h4>
                  <div className="space-y-1.5 text-xs text-[#4a4536] dark:text-[#dad5be]/90 leading-relaxed">
                    {sec.body.map((b, bIdx) => (
                      <p key={bIdx}>{b}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-black/10 dark:border-white/10 text-xs text-[#6f6a58] dark:text-[#8a8265]">
              Direct email support:
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[#1b1810] dark:text-[#f5f2e8] font-mono hover:text-[#e2682f] dark:hover:text-[#f2a96f] block pt-1"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
