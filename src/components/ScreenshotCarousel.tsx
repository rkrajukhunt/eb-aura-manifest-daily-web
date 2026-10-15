'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';

interface Slide {
  image: string;
  tag: string;
  title: string;
  description: string;
}

const SLIDES: Slide[] = [
  {
    image: '/assets/screenshots/aura-07-1242x2688.png',
    tag: 'Getting Started',
    title: 'It Starts With a Conversation',
    description: 'Eleven gentle questions about what matters most to you right now. After that, nothing Aura writes is generic.',
  },
  {
    image: '/assets/screenshots/aura-01-1242x2688.png',
    tag: 'Daily Moments',
    title: 'A New Moment, Written Every Morning',
    description: 'Each morning brings a fresh moment shaped around the life you described, in your own words.',
  },
  {
    image: '/assets/screenshots/aura-04-1242x2688.png',
    tag: 'Audio Player',
    title: 'Every Moment Arrives Spoken',
    description: 'Listen, or read it instead. Scrub, slow it down, or read along, and keep the ones that land.',
  },
  {
    image: '/assets/screenshots/aura-03-1242x2688.png',
    tag: 'Living Letters',
    title: 'A Letter From the You Who Already Has It',
    description: 'Word by word, in a voice that says your name. Every letter is kept, so you can hear it again.',
  },
  {
    image: '/assets/screenshots/aura-05-1242x2688.png',
    tag: 'Affirmations',
    title: 'Affirmations That Explain Themselves',
    description: 'Identity phrasing, 369 and scripting, with the technique behind each line. Hear it read or share it as a card.',
  },
  {
    image: '/assets/screenshots/aura-06-1242x2688.png',
    tag: 'Living Memory',
    title: 'It Remembers, and You Can Edit All of It',
    description: 'Your evening gratitude returns in what Aura writes. Review or remove anything in "What Aura Knows", anytime.',
  },
  {
    image: '/assets/screenshots/aura-02-1242x2688.png',
    tag: 'Privacy',
    title: 'Your Words Are Only for You',
    description: 'What you share is used only to write to you. Edit or remove anything, and it is forgotten completely.',
  },
];

export default function ScreenshotCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? SLIDES.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === SLIDES.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      {/* Category Pills Header with smooth mobile horizontal swipe */}
      <div className="flex items-center sm:justify-center overflow-x-auto no-scrollbar gap-2 mb-8 sm:mb-10 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        {SLIDES.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
              current === idx
                ? 'bg-[#e2682f] text-white shadow-[0_0_20px_rgba(226,104,47,0.4)]'
                : 'glass-panel text-[#6f6a58] dark:text-[#8a8265] hover:text-[#1b1810] dark:hover:text-[#f5f2e8] hover:border-black/20 dark:hover:border-white/20'
            }`}
          >
            {slide.tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left / Info Column */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#e2682f]/10 text-[#c9531f] dark:text-[#f2a96f] border border-[#e2682f]/20">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Native iOS Experience</span>
          </div>

          <h3 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b1810] dark:text-[#f5f2e8] leading-tight">
            {SLIDES[current].title}
          </h3>

          <p className="text-base sm:text-lg text-[#4a4536] dark:text-[#dad5be] leading-relaxed">
            {SLIDES[current].description}
          </p>

          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={prev}
              className="p-3.5 rounded-full glass-panel hover:border-[#e2682f] text-[#1b1810] dark:text-[#f5f2e8] hover:text-[#e2682f] transition-all transform hover:-translate-x-1"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-sm font-mono text-[#6f6a58] dark:text-[#8a8265]">
              <span className="text-[#1b1810] dark:text-[#f5f2e8] font-bold">{current + 1}</span> / {SLIDES.length}
            </div>
            <button
              onClick={next}
              className="p-3.5 rounded-full glass-panel hover:border-[#e2682f] text-[#1b1810] dark:text-[#f5f2e8] hover:text-[#e2682f] transition-all transform hover:translate-x-1"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Right / App Store screenshot (already includes its own device frame) */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-[260px] sm:w-[300px] aspect-[1242/2688] rounded-[28px] overflow-hidden border border-black/10 dark:border-white/10 shadow-[0_25px_70px_rgba(27,24,16,0.25)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
            <Image
              key={SLIDES[current].image}
              src={SLIDES[current].image}
              alt={SLIDES[current].title}
              fill
              sizes="(max-width: 640px) 260px, 300px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
