'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';
import PhoneFrame, { StatusBar } from './phone/PhoneFrame';

interface Slide {
  image: string;
  tag: string;
  title: string;
  description: string;
}

// Real app screens, one per feature, shown inside the site's phone frame. Each file is the app
// screenshot with status-bar room added on top, so the frame's notch never covers its content.
const SLIDES: Slide[] = [
  {
    image: '/assets/screens/onboarding-goals.webp',
    tag: 'Getting Started',
    title: 'It starts with a conversation',
    description: 'A few gentle questions about what you want to bring into your life. After that, nothing Aura writes is generic.',
  },
  {
    image: '/assets/screens/sky-dial.webp',
    tag: 'Your Time',
    title: 'Your moment, at your hour',
    description: 'Slide the sun to the time you want. Morning, midday, evening or before bed, it arrives then and not whenever.',
  },
  {
    image: '/assets/screens/first-letter.webp',
    tag: 'Living Letters',
    title: 'Hold to light your first letter',
    description: 'A letter from the you who already has it, read word by word in a voice that says your name. Every letter is kept.',
  },
  {
    image: '/assets/screens/today.webp',
    tag: 'Daily Moments',
    title: 'A new moment, written every morning',
    description: 'Tell Aura how you are arriving today, and the morning brings a fresh moment shaped around the life you described.',
  },
  {
    image: '/assets/screens/player.webp',
    tag: 'Audio Player',
    title: 'Every moment arrives spoken',
    description: 'Listen, or read along as each line is said. Skip back, slow it down, or refine it until it sounds like you.',
  },
  {
    image: '/assets/screens/affirmation.webp',
    tag: 'Affirmations',
    title: 'Words for today, in your own voice',
    description: 'One affirmation a day, written from your promise. Hear it read, or share it as a card.',
  },
  {
    image: '/assets/screens/what-aura-knows.webp',
    tag: 'Living Memory',
    title: 'It remembers, and you can edit all of it',
    description: 'Everything Aura remembers, in your words, grouped plainly. Edit or remove anything and it forgets completely.',
  },
  {
    image: '/assets/screens/never-mention.webp',
    tag: 'Privacy',
    title: 'Some things stay out',
    description: 'Words and topics you would rather leave out never appear in anything Aura writes. Change them any time.',
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

        {/* Right / the real screen in the phone frame, crossfading between slides */}
        <div className="lg:col-span-6 flex justify-center">
          <PhoneFrame className="w-[260px] sm:w-[300px]">
            <div className="absolute inset-x-0 top-0 z-20">
              <StatusBar />
            </div>
            {SLIDES.map((slide, idx) => (
              <Image
                key={slide.image}
                src={slide.image}
                alt={idx === current ? `${slide.title}, Aura app screen` : ''}
                aria-hidden={idx !== current}
                fill
                sizes="(max-width: 640px) 260px, 300px"
                className={`object-cover transition-[opacity,scale] duration-500 ease-out ${
                  idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
                }`}
              />
            ))}
          </PhoneFrame>
        </div>
      </div>
    </div>
  );
}
