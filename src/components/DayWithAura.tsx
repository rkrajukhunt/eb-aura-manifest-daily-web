'use client';

import React, { useEffect, useRef, useState } from 'react';
import PhoneFrame from './phone/PhoneFrame';
import {
  AffirmationScreen,
  GratitudeScreen,
  HomeScreen,
  LockScreen,
  PlayerScreen,
  RefineScreen,
  StreakScreen,
} from './phone/DayScreens';

interface Step {
  time: string;
  title: string;
  body: string;
  points: string[];
  premium?: boolean;
  Screen: React.ComponentType;
}

const STEPS: Step[] = [
  {
    time: '7:00',
    title: 'It arrives at your hour',
    body: 'You chose a time on the Sky Dial. When your moment is ready, one quiet note finds you, using your name and the thing you are building.',
    points: ['One note a morning. Nothing else.', 'No guilt, no “don’t lose your streak”'],
    Screen: LockScreen,
  },
  {
    time: '7:01',
    title: 'How are you arriving?',
    body: 'A one-tap check-in, and a short reply in Aura’s voice. Then today’s moment, shaped around the life you described.',
    points: ['Calm, hopeful, tired, heavy, restless or grateful', '“Coming for you” shows what is being written next'],
    Screen: HomeScreen,
  },
  {
    time: '7:02',
    title: 'Listen, or read along',
    body: 'Every moment arrives spoken, in a voice that says your name. Read mode lights up each word as it is said.',
    points: ['Back or forward 15 seconds', 'Slower lets a line sink in', 'Keep the ones that land'],
    Screen: PlayerScreen,
  },
  {
    time: '7:05',
    title: 'Not quite you? Refine it',
    body: 'More realistic, softer, more ambitious, or tell Aura in your own words. It rewrites the moment, and the next one already knows.',
    points: ['Your preference becomes part of what Aura remembers'],
    premium: true,
    Screen: RefineScreen,
  },
  {
    time: '12:30',
    title: 'Words for today',
    body: 'Hold to reveal one line, written from your own words. It shows which words, and the technique behind it.',
    points: ['Identity, present tense, 369 and scripting', 'Hear it read, or share it as a card', 'One a day. That is enough.'],
    Screen: AffirmationScreen,
  },
  {
    time: '21:00',
    title: 'One good thing, kept',
    body: 'Write a single line of gratitude. Aura remembers the people you mention, and what you keep tonight can return in tomorrow’s moment.',
    points: ['Sparks for blank evenings: people, small joys, your body, nature, progress', '“Remember this?” brings back a past good thing'],
    Screen: GratitudeScreen,
  },
  {
    time: 'Day 7',
    title: 'And it adds up',
    body: 'Aura counts the days you show up. A missed day is held for you, and milestones bring a new letter, not a badge.',
    points: ['Letters on day 7, 30 and 100', 'Restore a longer run once a month, free'],
    Screen: StreakScreen,
  },
];

export default function DayWithAura() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  // The step crossing the middle of the viewport is the one on the phone
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step));
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      {/* Pinned phone (desktop). Each screen remounts when it becomes active, so its story replays */}
      <div className="hidden lg:block">
        <div className="sticky top-[12svh] h-[76svh] flex items-center justify-center">
          <div className="absolute inset-10 rounded-full bg-ember/15 blur-3xl" aria-hidden="true" />
          <PhoneFrame className="relative h-full max-h-[660px]">
            {STEPS.map(({ Screen, time }, i) => (
              <div
                key={time}
                className={`absolute inset-0 transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden={i !== active}
              >
                <div key={i === active ? 'play' : 'rest'} className={`absolute inset-0 ${i === active ? '' : 'mock-static'}`}>
                  <Screen />
                </div>
              </div>
            ))}
          </PhoneFrame>
        </div>
      </div>

      <ol className="relative">
        {/* The day's timeline rail */}
        <span className="absolute left-[27px] top-4 bottom-4 w-px bg-line hidden sm:block" aria-hidden="true" />
        {STEPS.map(({ time, title, body, points, premium, Screen }, i) => (
          <li
            key={time}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            data-step={i}
            className="relative lg:min-h-[78svh] flex flex-col justify-center py-10 lg:py-0 sm:pl-20"
          >
            <span
              className={`hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 lg:top-1/2 w-14 h-14 rounded-full items-center justify-center text-xs font-semibold tabular-nums transition-colors duration-300 ${
                i === active ? 'bg-pill text-pill-text' : 'bg-card border border-line text-muted'
              }`}
            >
              {time}
            </span>

            {/* Mobile and tablet: every step carries its own phone */}
            <div className="lg:hidden mb-8 flex justify-center">
              <PhoneFrame className="w-[260px]">
                <div key={i === active ? 'play' : 'rest'} className={`absolute inset-0 ${i === active ? '' : 'mock-static'}`}>
                  <Screen />
                </div>
              </PhoneFrame>
            </div>

            <div
              className={`space-y-4 max-w-md transition-opacity duration-500 ${
                i === active ? 'lg:opacity-100' : 'lg:opacity-35'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="sm:hidden text-xs font-semibold tabular-nums text-ember-text">{time}</span>
                {premium && (
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] rounded-full px-2.5 py-1 bg-[#e5a93c]/20 text-[#8a5a10] dark:text-[#f6d289]">
                    Premium
                  </span>
                )}
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-ink text-balance">{title}</h3>
              <p className="text-lg text-body leading-relaxed">{body}</p>
              <ul className="space-y-2 pt-1">
                {points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-muted">
                    <span className="mt-2 w-1 h-1 rounded-full bg-ember shrink-0" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
