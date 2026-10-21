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
      'Aura writes from what you told it during onboarding, your evening gratitude lines, and what it has learned since. The moment is then read aloud with an ElevenLabs voice. Each one is new, and it addresses you by name.',
  },
  {
    question: 'Is my personal information and journal data private?',
    answer:
      'Yes. Your entries are protected with row-level security and encrypted storage. We never sell your data, and we never train public AI models on what you write. You can view, edit, or delete everything in "What Aura Knows" at any time.',
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
      'Growth comes in seasons, not straight lines. A missed day is held for you, and a longer pause can be restored, so coming back always feels like a welcome.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((curr) => (curr === idx ? null : idx));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="card !rounded-[22px] overflow-hidden"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg sm:text-xl font-medium text-ink">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-body leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
