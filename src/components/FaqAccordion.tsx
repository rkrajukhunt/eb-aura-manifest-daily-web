'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How does Aura generate my personalized morning moments?',
    answer:
      'Aura synthesizes your onboarding dreams, daily evening gratitude entries, and ongoing aspirations using advanced language intelligence and ElevenLabs studio-quality voice models. Each morning’s moment is unique, intimate, and addresses you by name.',
  },
  {
    question: 'Is my personal information and journal data private?',
    answer:
      'Absolutely. Your thoughts and vulnerability are sacrosanct. We use strict database Row-Level Security (RLS) and encrypted storage. We never sell your personal data, nor do we train public AI models on your private memories. You can view, edit, or delete every memory node in "What Aura Knows" at any time.',
  },
  {
    question: 'How do subscriptions and the free trial work?',
    answer:
      'Aura offers Annual and Monthly subscription plans with a 7-day complimentary free trial. You will not be charged until the trial period concludes, and you can cancel anytime directly via Apple App Store / Google Play Subscriptions without hassle.',
  },
  {
    question: 'How do I restore my purchase after reinstalling the app?',
    answer:
      'Open Aura, go to your Profile or the Paywall screen, and tap "Restore Purchase". Your subscription is securely linked to your Apple ID / Google account and will reactivate instantly with no additional charge.',
  },
  {
    question: 'Why doesn’t Aura use streaks that shame me for missing a day?',
    answer:
      'True personal growth is cyclical, not linear. Unlike apps that punish missed days with broken streak guilt, Aura uses "Soft Streaks" designed to gently welcome you back whenever you are ready.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((curr) => (curr === idx ? null : idx));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'glass-panel-glow border-[#e2682f]/40 dark:border-[#e2682f]/30'
                : 'glass-panel border-black/10 dark:border-white/5 hover:border-black/20 dark:hover:border-white/10'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-serif-luxury text-lg sm:text-xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#e2682f] shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#4a4536] dark:text-[#dad5be] leading-relaxed border-t border-black/5 dark:border-white/5 animate-in fade-in duration-200">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
