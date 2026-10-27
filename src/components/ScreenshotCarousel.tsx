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
    title: 'It starts with a conversation',
    description: 'Eleven gentle questions about what matters most to you right now. After that, nothing Aura writes is generic.',
  },
  {
    image: '/assets/screenshots/aura-01-1242x2688.png',
    tag: 'Daily Moments',
    title: 'A new moment, written every morning',
    description: 'Each morning brings a fresh moment shaped around the life you described, in your own words.',
  },
  {
    image: '/assets/screenshots/aura-04-1242x2688.png',
    tag: 'Audio Player',
    title: 'Every moment arrives spoken',
    description: 'Listen, or read it instead. Scrub, slow it down, or read along, and keep the ones that land.',
  },
  {
    image: '/assets/screenshots/aura-03-1242x2688.png',
    tag: 'Living Letters',
    title: 'A letter from the you who already has it',
    description: 'Word by word, in a voice that says your name. Every letter is kept, so you can hear it again.',
  },
  {
    image: '/assets/screenshots/aura-05-1242x2688.png',
    tag: 'Affirmations',
    title: 'Affirmations that explain themselves',
    description: 'Identity phrasing, 369 and scripting, with the technique behind each line. Hear it read or share it as a card.',
  },
  {
    image: '/assets/screenshots/aura-06-1242x2688.png',
    tag: 'Living Memory',
    title: 'It remembers, and you can edit all of it',
    description: 'Your evening gratitude returns in what Aura writes. Review or remove anything in "What Aura Knows", anytime.',
  },
  {
    image: '/assets/screenshots/aura-02-1242x2688.png',
    tag: 'Privacy',
    title: 'Your words are only for you',
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
                ? 'bg-pill text-pill-text'
                : 'bg-card border border-line text-muted hover:text-ink'
            }`}
          >
            {slide.tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left / Info Column */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-card border border-line text-body">
            <Smartphone className="w-3.5 h-3.5" />
            <span>{SLIDES[current].tag}</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink leading-tight text-balance">
            {SLIDES[current].title}
          </h3>

          <p className="text-base sm:text-lg text-body leading-relaxed">
            {SLIDES[current].description}
          </p>

          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={prev}
              className="p-3.5 rounded-full bg-card border border-line text-ink hover:border-ink/30 transition-all hover:-translate-x-0.5"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-sm tabular-nums text-muted">
              <span className="text-ink font-semibold">{current + 1}</span> / {SLIDES.length}
            </div>
            <button
              onClick={next}
              className="p-3.5 rounded-full bg-card border border-line text-ink hover:border-ink/30 transition-all hover:translate-x-0.5"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Right / App Store screenshot (already includes its own device frame) */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-[260px] sm:w-[300px] aspect-[1242/2688] rounded-[28px] overflow-hidden border border-line shadow-[0_40px_80px_-30px_rgba(27,24,16,0.45)]">
            <Image
              key={SLIDES[current].image}
              src={SLIDES[current].image}
              alt={`${SLIDES[current].title} - Aura App Interface Preview`}
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
