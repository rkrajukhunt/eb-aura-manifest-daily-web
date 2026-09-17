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
    image: '/assets/screenshots/aura-01-1242x2688.png',
    tag: 'Daily Audio Moments',
    title: 'Your Dreams Spoken Into Reality',
    description: 'Every sunrise, wake up to an intimate, synthesized voice that speaks your specific dreams as if they are already coming to life.',
  },
  {
    image: '/assets/screenshots/aura-02-1242x2688.png',
    tag: 'Living Letter Engine',
    title: 'Letters From Your Future Self',
    description: 'Poetic, deeply tailored daily letters reflecting on your aspirations, challenges, and personal evolution.',
  },
  {
    image: '/assets/screenshots/aura-03-1242x2688.png',
    tag: 'Affirmations Suite',
    title: 'Resonant Affirmation Cards',
    description: 'Collect, replay, and share affirmations calibrated to your energy, free from generic toxic positivity.',
  },
  {
    image: '/assets/screenshots/aura-04-1242x2688.png',
    tag: 'Privacy & Memory',
    title: 'Living Memory: Total Transparency',
    description: 'Aura remembers what you share. Review, edit, or purge every single memory node in "What Aura Knows".',
  },
  {
    image: '/assets/screenshots/aura-05-1242x2688.png',
    tag: 'Evening Reflection',
    title: 'Zero-Pressure Gratitude Journal',
    description: 'Three quiet prompts to ground your nervous system before sleep, seamlessly weaving into tomorrow’s morning moment.',
  },
  {
    image: '/assets/screenshots/aura-06-1242x2688.png',
    tag: 'Habit Progression',
    title: 'Soft Streaks Without Shame',
    description: 'A ritual tracker designed to encourage consistency rather than punish broken days. Growth is cyclical.',
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
      {/* Category Pills Header */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
        {SLIDES.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
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

        {/* Right / iPhone Mockup Display */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[650px] rounded-[48px] p-3 bg-gradient-to-b from-[#2a261f] to-[#12110e] border-[4px] border-[#443e33] shadow-[0_25px_70px_rgba(0,0,0,0.35)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
            {/* Speaker & camera notch */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20" />

            {/* Inner screen area */}
            <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-black">
              <Image
                src={SLIDES[current].image}
                alt={SLIDES[current].title}
                fill
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover"
                priority
              />
              {/* Glass sheen overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
