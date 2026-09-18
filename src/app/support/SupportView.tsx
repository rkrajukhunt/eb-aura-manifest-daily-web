'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  LifeBuoy,
  Send,
  CheckCircle2,
  ArrowLeft,
  HelpCircle,
  CreditCard,
  Volume2,
  Bell,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  Check,
  Mail,
  User,
  MessageSquare,
  Copy,
  CheckCheck,
  RotateCcw,
  Clock,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { SUPPORT_DOC, CONTACT_EMAIL } from '@/data/legal';

interface CategoryItem {
  id: string;
  label: string;
  description: string;
  badge: string;
  icon: React.ElementType;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'billing',
    label: 'Billing & Subscriptions',
    description: 'Apple ID purchases, restore access, refunds & Pro pass',
    badge: 'Payment',
    icon: CreditCard,
  },
  {
    id: 'audio',
    label: 'Audio Playback Issues',
    description: 'Sound stops, offline cache sync, synthesized voice quality',
    badge: 'Audio',
    icon: Volume2,
  },
  {
    id: 'notifications',
    label: 'Push Notifications',
    description: 'Morning affirmation alerts, scheduling & daily reminder chimes',
    badge: 'Alerts',
    icon: Bell,
  },
  {
    id: 'account',
    label: 'Account & Data Management',
    description: 'Privacy queries, living memories, data export & account deletion',
    badge: 'Privacy',
    icon: ShieldCheck,
  },
  {
    id: 'feedback',
    label: 'General Feedback & Ideas',
    description: 'Feature suggestions, ritual ideas & companion experience notes',
    badge: 'Ideas',
    icon: Sparkles,
  },
];

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: CATEGORIES[0].label,
    message: '',
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const currentCategory =
    CATEGORIES.find((c) => c.label === formData.category) || CATEGORIES[0];
  const CurrentIcon = currentCategory.icon;

  return (
    <main className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative w-full max-w-full overflow-x-hidden">
      {/* Ambient background glow accents safely clipped */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-24 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#e2682f]/10 dark:bg-[#e2682f]/15 rounded-full blur-3xl" />
        <div className="absolute top-96 right-4 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 bg-[#f2a96f]/10 dark:bg-[#f2a96f]/08 rounded-full blur-3xl" />
      </div>

      {/* Back button */}
      <div className="mb-6 sm:mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#6f6a58] dark:text-[#8a8265] hover:text-[#e2682f] dark:hover:text-[#f2a96f] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Aura Home</span>
        </Link>
      </div>

      {/* Centered Editorial Header (No empty white box) */}
      <div className="text-center space-y-4 mb-12 sm:mb-16 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#e2682f]/12 text-[#c9531f] dark:text-[#f2a96f] border border-[#e2682f]/25 shadow-xs">
          <LifeBuoy className="w-4 h-4 text-[#e2682f]" />
          <span>Support & Companion Care</span>
        </div>

        <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold text-[#1b1810] dark:text-[#f5f2e8] tracking-tight max-w-3xl mx-auto leading-[1.15]">
          How Can We Assist Your Journey?
        </h1>

        <p className="text-base sm:text-lg text-[#6f6a58] dark:text-[#dad5be] max-w-2xl mx-auto leading-relaxed">
          {SUPPORT_DOC.intro[0]}
        </p>

        {/* Status badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 text-xs text-[#6f6a58] dark:text-[#8a8265]">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel font-medium">
            <Clock className="w-3.5 h-3.5 text-[#e2682f] shrink-0" />
            <span>Typical reply within 24 hours</span>
          </span>
          <span className="hidden sm:inline text-black/20 dark:text-white/20">•</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Direct Engineering Care</span>
          </span>
          <span className="hidden sm:inline text-black/20 dark:text-white/20">•</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#e2682f] shrink-0" />
            <span>Apple ID Preserved</span>
          </span>
        </div>
      </div>

      {/* Main Grid: Form (Left) & Quick Solutions (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-5 sm:p-8 md:p-10 border border-black/10 dark:border-white/10 shadow-xl relative">
            <div className="space-y-1.5 sm:space-y-2 pb-5 sm:pb-6 border-b border-black/5 dark:border-white/5">
              <div className="flex items-center justify-between">
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
                  Send a Message
                </h2>
                <span className="px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider rounded-full bg-black/5 dark:bg-white/10 text-[#6f6a58] dark:text-[#8a8265]">
                  Direct Ticket
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#6f6a58] dark:text-[#8a8265]">
                Direct connection with our core product engineering team. Typical response within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="pt-8 pb-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e2682f] to-[#c9531f] text-white flex items-center justify-center mx-auto shadow-[0_10px_25px_rgba(226,104,47,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a4536] dark:text-[#dad5be] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1b1810] dark:text-white">{formData.name || 'friend'}</strong>. We have logged your request under{' '}
                    <span className="font-medium text-[#e2682f] dark:text-[#f2a96f]">
                      {formData.category}
                    </span>{' '}
                    and will reply directly to{' '}
                    <span className="text-[#e2682f] dark:text-[#f2a96f] font-mono text-xs break-all">
                      {formData.email}
                    </span>
                    .
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        category: CATEGORIES[0].label,
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1b1810] bg-[#dad5be] hover:bg-[#c9c3ac] dark:bg-white/15 dark:hover:bg-white/25 dark:text-white transition-all shadow-xs cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-5 sm:pt-6 space-y-4 sm:space-y-5">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs font-semibold text-[#1b1810] dark:text-[#f5f2e8] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#e2682f]" />
                      <span>Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-white dark:bg-[#15130e] border border-black/15 dark:border-white/15 text-sm text-[#1b1810] dark:text-[#f5f2e8] placeholder-[#8a8265]/60 focus:outline-none focus:ring-2 focus:ring-[#e2682f]/30 focus:border-[#e2682f] transition-all shadow-2xs"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs font-semibold text-[#1b1810] dark:text-[#f5f2e8] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#e2682f]" />
                      <span>Account Email *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-white dark:bg-[#15130e] border border-black/15 dark:border-white/15 text-sm text-[#1b1810] dark:text-[#f5f2e8] placeholder-[#8a8265]/60 focus:outline-none focus:ring-2 focus:ring-[#e2682f]/30 focus:border-[#e2682f] transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Custom Category Dropdown */}
                <div className="space-y-1.5 sm:space-y-2 relative" ref={dropdownRef}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-[#1b1810] dark:text-[#f5f2e8] flex items-center gap-1.5">
                      <CurrentIcon className="w-3.5 h-3.5 text-[#e2682f]" />
                      <span>Category</span>
                    </label>
                    <span className="text-[10px] sm:text-[11px] text-[#6f6a58] dark:text-[#8a8265]">
                      Select support route
                    </span>
                  </div>

                  {/* Dropdown Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    aria-haspopup="listbox"
                    aria-expanded={isDropdownOpen}
                    className={`w-full px-3.5 sm:px-4 py-3 rounded-xl bg-white dark:bg-[#15130e] border text-left transition-all flex items-center justify-between gap-2.5 sm:gap-3 shadow-2xs cursor-pointer ${
                      isDropdownOpen
                        ? 'border-[#e2682f] ring-2 ring-[#e2682f]/25 shadow-md'
                        : 'border-black/15 dark:border-white/15 hover:border-[#e2682f]/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#e2682f]/10 dark:bg-[#e2682f]/20 text-[#e2682f] flex items-center justify-center shrink-0">
                        <CurrentIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-medium text-[#1b1810] dark:text-[#f5f2e8] truncate">
                          {currentCategory.label}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-[#6f6a58] dark:text-[#8a8265] truncate">
                          {currentCategory.description}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                      <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-md bg-black/5 dark:bg-white/10 text-[#6f6a58] dark:text-[#8a8265]">
                        {currentCategory.badge}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#6f6a58] dark:text-[#8a8265] transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180 text-[#e2682f]' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Dropdown Options Floating Menu */}
                  {isDropdownOpen && (
                    <div
                      role="listbox"
                      className="absolute left-0 right-0 top-full mt-2 z-50 bg-white dark:bg-[#141310] border border-black/15 dark:border-[#e2682f]/30 rounded-2xl p-1.5 sm:p-2 shadow-[0_20px_50px_rgba(27,24,16,0.22)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)] space-y-1 animate-in fade-in zoom-in-95 duration-150 max-h-[80vh] overflow-y-auto"
                    >
                      {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = cat.label === formData.category;

                        return (
                          <button
                            key={cat.id}
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => {
                              setFormData({ ...formData, category: cat.label });
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl text-left transition-all flex items-start sm:items-center justify-between gap-2.5 group cursor-pointer ${
                              isSelected
                                ? 'bg-[#e2682f]/12 dark:bg-[#e2682f]/20 border border-[#e2682f]/30'
                                : 'hover:bg-black/5 dark:hover:bg-white/5 border border-transparent'
                            }`}
                          >
                            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                              <div
                                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 transition-colors ${
                                  isSelected
                                    ? 'bg-[#e2682f] text-white'
                                    : 'bg-black/5 dark:bg-white/5 text-[#6f6a58] dark:text-[#8a8265] group-hover:text-[#e2682f] group-hover:bg-[#e2682f]/10'
                                }`}
                              >
                                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span
                                    className={`text-xs sm:text-sm font-medium transition-colors ${
                                      isSelected
                                        ? 'text-[#e2682f] dark:text-[#f2a96f] font-semibold'
                                        : 'text-[#1b1810] dark:text-[#f5f2e8] group-hover:text-[#e2682f]'
                                    }`}
                                  >
                                    {cat.label}
                                  </span>
                                  <span
                                    className={`px-1.5 py-0.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider rounded ${
                                      isSelected
                                        ? 'bg-[#e2682f]/20 text-[#c9531f] dark:text-[#f2a96f]'
                                        : 'bg-black/5 dark:bg-white/10 text-[#8a8265]'
                                    }`}
                                  >
                                    {cat.badge}
                                  </span>
                                </div>
                                <div className="text-[10px] sm:text-[11px] text-[#6f6a58] dark:text-[#8a8265] leading-tight line-clamp-2 sm:line-clamp-1 mt-0.5">
                                  {cat.description}
                                </div>
                              </div>
                            </div>

                            <div className="shrink-0 pt-0.5 sm:pt-0 pl-1">
                              {isSelected ? (
                                <Check className="w-4 h-4 text-[#e2682f]" />
                              ) : (
                                <div className="w-4 h-4" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-[#1b1810] dark:text-[#f5f2e8] flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-[#e2682f]" />
                      <span>How can we help? *</span>
                    </label>
                    <span className="text-[10px] sm:text-[11px] text-[#6f6a58] dark:text-[#8a8265]">
                      Model/OS info helpful
                    </span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe what happened, error messages, or questions you have. We read every inquiry carefully..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-white dark:bg-[#15130e] border border-black/15 dark:border-white/15 text-sm text-[#1b1810] dark:text-[#f5f2e8] placeholder-[#8a8265]/60 focus:outline-none focus:ring-2 focus:ring-[#e2682f]/30 focus:border-[#e2682f] transition-all shadow-2xs resize-y"
                  />
                  <p className="text-[10px] sm:text-[11px] text-[#6f6a58] dark:text-[#8a8265] italic">
                    Tip: If requesting a restore, ensure your email matches your Apple/Google ID.
                  </p>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 sm:py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-widest text-[#1b1810] bg-gradient-to-r from-[#f2a96f] via-[#e2682f] to-[#c9531f] hover:brightness-105 active:scale-[0.99] shadow-[0_10px_25px_-5px_rgba(226,104,47,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#1b1810] border-t-transparent rounded-full animate-spin" />
                      <span>Connecting to Support...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Quick Solutions Column (Right) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Email Card */}
          <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-black/10 dark:border-white/10 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#e2682f]/10 dark:bg-[#e2682f]/20 text-[#e2682f] flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1b1810] dark:text-[#f5f2e8]">
                    Direct Email Support
                  </h3>
                  <p className="text-[11px] text-[#6f6a58] dark:text-[#8a8265]">
                    No ticketing queue needed
                  </p>
                </div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 shrink-0" />
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <span className="font-mono text-xs sm:text-sm text-[#1b1810] dark:text-[#f5f2e8] break-all select-all">
                {CONTACT_EMAIL}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto justify-center px-3 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-white/10 text-[#1b1810] dark:text-[#f5f2e8] border border-black/10 dark:border-white/10 hover:border-[#e2682f]/40 transition-all flex items-center gap-1.5 shrink-0 shadow-2xs cursor-pointer active:scale-95"
              >
                {copiedEmail ? (
                  <>
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#6f6a58] dark:text-[#8a8265]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-[#6f6a58] dark:text-[#8a8265] leading-relaxed">
              We strive to answer all direct emails within 24–48 business hours. For immediate troubleshooting, check the solutions below.
            </p>
          </div>

          {/* Quick Solutions Accordion / Cards */}
          <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-black/10 dark:border-white/10 shadow-lg space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-black/5 dark:border-white/5">
              <div className="w-9 h-9 rounded-xl bg-[#e2682f]/10 dark:bg-[#e2682f]/20 text-[#e2682f] flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
                  Instant Solutions
                </h3>
                <p className="text-[11px] text-[#6f6a58] dark:text-[#8a8265]">
                  Resolve 90% of issues instantly
                </p>
              </div>
            </div>

            {/* Accordion list */}
            <div className="space-y-2.5 sm:space-y-3">
              {SUPPORT_DOC.sections.slice(1).map((sec, idx) => {
                const isOpen = activeAccordion === idx;
                const sectionIcons = [RotateCcw, CreditCard, Bell];
                const SecIcon = sectionIcons[idx % sectionIcons.length];

                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isOpen
                        ? 'bg-white/80 dark:bg-white/5 border-[#e2682f]/30 shadow-xs'
                        : 'bg-black/5 dark:bg-black/20 border-black/5 dark:border-white/5 hover:border-black/15'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveAccordion(isOpen ? null : idx)}
                      className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-2.5 cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isOpen
                              ? 'bg-[#e2682f] text-white'
                              : 'bg-black/5 dark:bg-white/10 text-[#6f6a58] dark:text-[#8a8265]'
                          }`}
                        >
                          <SecIcon className="w-3.5 h-3.5" />
                        </div>
                        <span
                          className={`text-xs sm:text-sm font-semibold truncate ${
                            isOpen
                              ? 'text-[#e2682f] dark:text-[#f2a96f]'
                              : 'text-[#1b1810] dark:text-[#f5f2e8]'
                          }`}
                        >
                          {sec.heading}
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 text-[#6f6a58] dark:text-[#8a8265] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-90 text-[#e2682f]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 pt-1 text-xs text-[#4a4536] dark:text-[#dad5be] space-y-2 border-t border-black/5 dark:border-white/5 leading-relaxed animate-in fade-in">
                        {sec.body.map((b, bIdx) => (
                          <p key={bIdx} className="flex items-start gap-2">
                            <span className="text-[#e2682f] shrink-0 font-bold">•</span>
                            <span>{b}</span>
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Link to Account Deletion */}
            <div className="pt-3 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
              <span className="text-[#6f6a58] dark:text-[#8a8265]">Looking to delete your data?</span>
              <Link
                href="/delete-account"
                className="inline-flex items-center gap-1 font-semibold text-[#e2682f] dark:text-[#f2a96f] hover:underline"
              >
                <span>Deletion Guide</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
