'use client';

import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import Glim from './Glim';

// The app's onboarding, told as the conversation it is. The section pins while the visitor scrolls:
// Aura asks, the visitor answers, and each answer is pinned to "What Aura heard" while Glim's lantern
// fills. At the end the notes fold into the first letter. Copy is from apps/mobile/src/copy/onboarding.ts.

const d = (seconds: number): React.CSSProperties => ({ animationDelay: `${seconds}s` });

type Message = { from: 'aura'; text: string; reflect?: boolean } | { from: 'you'; text: string; chips?: { label: string; struck?: boolean }[] };

interface Chapter {
  label: string;
  messages: Message[];
  note: { label: string; text: string };
}

const CHAPTERS: Chapter[] = [
  {
    label: 'Goals',
    messages: [
      { from: 'aura', text: 'Hi, I’m Aura. What do you most want to bring into your life?' },
      { from: 'you', text: '', chips: [{ label: 'Money & abundance' }, { label: 'Career & purpose' }] },
    ],
    note: { label: 'Building', text: 'Money, and work with purpose' },
  },
  {
    label: 'Your words',
    messages: [
      { from: 'aura', text: 'How does the work you do now feel?' },
      { from: 'you', text: 'Like it belongs to someone else.' },
      { from: 'aura', text: 'So you want work that feels like yours. I heard that.', reflect: true },
    ],
    note: { label: 'In your words', text: '“work that feels like mine”' },
  },
  {
    label: 'Belief',
    messages: [
      { from: 'aura', text: 'Which of these could you say out loud, and mean it?' },
      { from: 'you', text: 'I’m learning to trust myself with this.' },
    ],
    note: { label: 'Tone', text: 'Gentle, about the process' },
  },
  {
    label: 'Limits',
    messages: [
      { from: 'aura', text: 'Anything you’d rather I stayed away from?' },
      { from: 'you', text: '', chips: [{ label: 'My body', struck: true }] },
      { from: 'aura', text: 'Got it. I won’t go there.', reflect: true },
    ],
    note: { label: 'Never mention', text: 'My body' },
  },
  {
    label: 'Your hour',
    messages: [
      { from: 'aura', text: 'When will you take your three minutes?' },
      { from: 'you', text: 'Mornings, around eight.' },
    ],
    note: { label: 'Arrives', text: 'Every morning at 8:00' },
  },
  {
    label: 'Promise',
    messages: [
      { from: 'aura', text: 'Then sign it, and it’s yours.' },
      { from: 'you', text: 'signature' },
    ],
    note: { label: 'A promise', text: 'At my time, once a day' },
  },
];

// Where each note lands on the board, and its tilt
const NOTE_SPOTS = [
  'left-[2%] top-[3%] -rotate-6',
  'right-[0%] top-[1%] rotate-[5deg]',
  'left-[-3%] top-[38%] rotate-3',
  'right-[-3%] top-[36%] -rotate-[4deg]',
  'left-[4%] bottom-[3%] -rotate-2',
  'right-[2%] bottom-[0%] rotate-[3deg]',
];

// A signed page, as the app keeps it: the terms, a hand-drawn signature on the line, the name and date under it
function Signature() {
  return (
    <div className="relative w-[256px] rounded-[18px] bg-parchment border border-[#d9c9a6] px-4 pt-3.5 pb-3 shadow-[0_18px_34px_-22px_rgba(27,24,16,0.5)]">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">A promise to myself</p>
        <span className="mk mk-in inline-flex items-center gap-1 rounded-full bg-[#2f6b4f]/10 px-2 py-0.5 text-[10px] font-semibold text-[#2f6b4f]" style={d(1.9)}>
          <Check className="w-3 h-3" strokeWidth={3} />
          Signed
        </span>
      </div>
      <p className="mt-1.5 font-serif italic text-[13px] text-body">At my time · Once a day · Always mine</p>

      <div className="relative mt-1">
        <span className="absolute left-0 bottom-1.5 font-serif text-sm text-muted" aria-hidden="true">
          &times;
        </span>
        <svg viewBox="0 0 240 70" className="w-full h-[58px] pl-4 text-[#1f2a44]" role="img" aria-label="Maya's signature">
          {/* "Maya", written in one stroke */}
          <path
            d="M6 50 C 10 36 14 22 18 16 C 21 12 23 20 22 30 L 21 48 C 24 34 30 20 35 16 C 38 14 39 22 37 32 L 35 48 C 39 34 46 22 51 18 C 54 16 55 24 53 34 L 52 46 C 55 40 60 33 66 33 C 72 33 70 44 75 45 C 80 46 84 36 86 33 C 85 41 84 49 86 54 C 88 60 84 66 79 64 C 74 62 80 52 90 43 C 95 39 100 34 105 34 C 111 34 108 45 114 45 C 120 45 126 38 132 36"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="520"
            className="mk mk-draw"
            style={{ ...d(0.25), animationDuration: '1.3s', ['--len' as string]: 520 }}
          />
          {/* The flourish under it */}
          <path
            d="M14 58 C 60 52 120 50 176 44 C 196 42 214 40 228 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="240"
            className="mk mk-draw"
            style={{ ...d(1.45), animationDuration: '0.5s', ['--len' as string]: 240 }}
          />
        </svg>
        <div className="border-t border-ink/25" />
      </div>

      <div className="mt-1.5 flex items-center justify-between gap-3">
        <div className="leading-tight text-[10px]">
          <p className="font-semibold text-ink tracking-wide">Maya R.</p>
          <p className="text-muted tabular-nums">22 Oct 2026</p>
        </div>
        {/* Ember wax seal */}
        <span
          className="mk mk-pop shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[#fbe6d4] font-serif italic text-base shadow-[0_6px_14px_-4px_rgba(156,61,23,0.6),inset_0_-2px_4px_rgba(0,0,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.25)]"
          style={{ ...d(2.1), background: 'radial-gradient(circle at 35% 30%, #f08a54, #c4521f 60%, #9c3d17)' }}
          aria-hidden="true"
        >
          A
        </span>
      </div>
    </div>
  );
}

// Every line of the conversation in order; each one gets its own stretch of scroll
const FLOW = CHAPTERS.flatMap((chapter, ci) =>
  chapter.messages.map((message) => ({ message, chapter: ci })),
);
// Index of the line that pins each chapter's note
const NOTE_AT = CHAPTERS.map((_, ci) => FLOW.findLastIndex((line) => line.chapter === ci));
// One beat per line, then a last beat where the notes become the letter
const BEATS = FLOW.length + 1;
const SVH_PER_BEAT = 32;

// Mounts once per line, so only the newest line animates: Aura types, then speaks
function Bubble({ message }: { message: Message }) {
  if (message.from === 'aura') {
    return (
      <div className="flex items-end gap-2.5 max-w-[88%]">
        <span className="relative w-7 h-7 shrink-0 rounded-full overflow-hidden ring-1 ring-line bg-card">
          <Image src="/assets/logo-icon-light.png" alt="Aura Guide Avatar" fill sizes="28px" className="object-cover" />
        </span>
        <div
          className={`relative rounded-[20px] rounded-bl-md px-4 py-3 font-serif text-[17px] leading-snug ${
            message.reflect ? 'bg-parchment text-ink italic border border-ember/20' : 'bg-bg-deep text-ink'
          }`}
        >
          <span className="mk mk-fade-out opacity-0 absolute inset-0 flex items-center gap-1 px-4" style={{ ...d(0.55), animationDuration: '0.3s' }} aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span key={i} className="typing-dot w-1.5 h-1.5 rounded-full bg-muted" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </span>
          <span className="mk mk-fade" style={{ ...d(0.6), animationDuration: '0.45s' }}>
            {message.text}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-end gap-2 max-w-[85%] ml-auto">
      {message.text === 'signature' ? (
        <Signature />
      ) : message.chips ? (
        message.chips.map((chip, i) => (
          <span
            key={chip.label}
            className={`mk mk-select rounded-full px-4 py-2 text-sm bg-[#8a8265] text-white ${chip.struck ? 'line-through decoration-white/70' : ''}`}
            style={d(0.15 + i * 0.2)}
          >
            {chip.label}
          </span>
        ))
      ) : (
        <span className="rounded-[20px] rounded-br-md px-4 py-3 text-[15px] bg-pill text-pill-text">{message.text}</span>
      )}
    </div>
  );
}

function PinnedConversation() {
  const ref = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLSpanElement>(null);
  // How many beats have been reached. It only changes when a new line is due, so scrolling
  // itself never re-renders the conversation; the rail is moved directly instead.
  const [beat, setBeat] = useState(1);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / (rect.height - window.innerHeight)));
      if (railRef.current) railRef.current.style.transform = `scaleX(${progress})`;
      setBeat(Math.min(BEATS, Math.floor(progress * BEATS) + 1));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const lines = Math.min(beat, FLOW.length);
  const letter = beat === BEATS;
  const chapter = FLOW[lines - 1].chapter;
  const notesPinned = NOTE_AT.filter((at) => at < lines).length;

  return (
    <div ref={ref} className="relative" style={{ height: `${100 + BEATS * SVH_PER_BEAT}svh` }}>
      <div className="sticky top-0 h-svh flex flex-col justify-center py-20 sm:py-24">
        {/* Chapter rail */}
        <div className="max-w-6xl w-full mx-auto mb-6 sm:mb-8">
          <div className="relative h-[2px] rounded-full bg-line overflow-hidden">
            <span ref={railRef} className="absolute inset-0 rounded-full bg-ember origin-left" style={{ transform: 'scaleX(0)' }} />
          </div>
          <ol className="mt-3 hidden sm:grid grid-cols-6 text-xs">
            {CHAPTERS.map((c, i) => (
              <li key={c.label} className={`transition-colors duration-500 ${i <= chapter ? 'text-ink font-semibold' : 'text-muted'}`}>
                <span className="tabular-nums text-ember-text mr-1.5">{String(i + 1).padStart(2, '0')}</span>
                {c.label}
              </li>
            ))}
          </ol>
          <p className="mt-3 sm:hidden text-xs text-muted">
            <span className="text-ember-text font-semibold tabular-nums">{String(chapter + 1).padStart(2, '0')} / 06</span> ·{' '}
            {letter ? 'Your first letter' : CHAPTERS[chapter].label}
          </p>
        </div>

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 grid-rows-[minmax(0,1fr)_auto] lg:grid-rows-1 lg:grid-cols-12 gap-5 lg:gap-10 min-h-0 flex-1 max-h-[640px]">
          {/* The conversation */}
          <div className="lg:col-span-6 card !rounded-[32px] flex flex-col min-h-0 overflow-hidden">
            <div className="flex items-center gap-3 px-5 sm:px-6 py-4 border-b border-line">
              <span className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-line">
                <Image src="/assets/logo-icon-light.png" alt="Aura Manifest Daily" fill sizes="36px" className="object-cover" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-ink">Aura</p>
                <p className="text-xs text-muted">{letter ? 'writing your first letter…' : 'getting to know you'}</p>
              </div>
              <span className="ml-auto w-2 h-2 rounded-full bg-ember animate-pulse" aria-hidden="true" />
            </div>
            <div className="chat-mask flex-1 min-h-0 overflow-hidden px-4 sm:px-6 py-5 flex flex-col justify-end" aria-live="polite">
              {FLOW.slice(0, lines).map(({ message }, i) => (
                // Each new line opens its own row, so the older ones glide up instead of jumping
                <div key={i} className="chat-row">
                  <div className="min-h-0 overflow-visible pt-3">
                    <Bubble message={message} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What Aura heard */}
          <div className="relative lg:col-span-6 min-h-[96px] lg:min-h-0">
            <p className="absolute left-1/2 -translate-x-1/2 top-[62%] text-[11px] font-semibold uppercase tracking-[0.18em] text-muted whitespace-nowrap z-10 hidden lg:block">
              What Aura heard
            </p>

            {/* Glim, its lantern brighter with every note */}
            <div className="hidden lg:flex absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <span
                className="absolute w-40 h-40 rounded-full bg-ember-soft blur-3xl transition-[transform,opacity] duration-700 ease-out"
                style={{ transform: `scale(${1 + notesPinned * 0.3})`, opacity: 0.15 + notesPinned * 0.08 }}
                aria-hidden="true"
              />
              <Glim
                clip={letter ? 'deliver_letter' : 'idle_float'}
                alt={letter ? 'Glim carrying your first letter' : 'Glim listening'}
                className="relative w-28"
              />
            </div>

            {/* Notes pinned to the board; on the last beat they gather into the letter */}
            <div className="hidden lg:block absolute inset-0">
              {CHAPTERS.map((c, i) => {
                const visible = i < notesPinned;
                return (
                  <div
                    key={c.label}
                    className={`absolute w-[40%] transition-[transform,opacity,left,top,right,bottom] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${NOTE_SPOTS[i]} ${
                      letter ? '!left-[30%] !right-auto !top-[30%] !bottom-auto !rotate-0 scale-50 opacity-0' : visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 -translate-y-4'
                    }`}
                  >
                    <div className="relative rounded-2xl bg-parchment border border-line px-4 py-3 shadow-[0_16px_30px_-18px_rgba(27,24,16,0.45)]">
                      <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-ember shadow-[0_2px_4px_rgba(27,24,16,0.3)]" aria-hidden="true" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ember-text">{c.note.label}</p>
                      <p className="font-serif italic text-[15px] text-ink leading-snug mt-0.5">{c.note.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* The letter */}
            <div
              className={`absolute left-1/2 bottom-0 lg:bottom-[6%] -translate-x-1/2 w-full max-w-[340px] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                letter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
              }`}
              aria-hidden={!letter}
            >
              <div className="rounded-[22px] bg-card border border-ember/25 p-5 text-center shadow-[0_30px_60px_-30px_rgba(226,104,47,0.45)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ember-text">Your first letter</p>
                <p className="font-serif text-xl text-ink mt-1 leading-snug">From the you who already has it</p>
                <p className="text-sm text-body mt-2">Written from all six answers. Free, and yours to keep.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Phones get the same conversation without pinning: pinning a tall section on a small screen reads as the page
// opening and then snapping shut. Each line simply rises in as it scrolls into view.
function FlowingConversation() {
  return (
    <div className="space-y-5">
      <div className="card !rounded-[28px] overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-line">
          <span className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-line">
            <Image src="/assets/logo-icon-light.png" alt="" fill sizes="36px" className="object-cover" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink">Aura</p>
            <p className="text-xs text-muted">getting to know you</p>
          </div>
        </div>
        <div className="px-4 py-5 space-y-3">
          {CHAPTERS.map((chapter) => (
            <React.Fragment key={chapter.label}>
              {chapter.messages.map((message, i) => (
                <div key={i} className="reveal">
                  <Bubble message={message} />
                </div>
              ))}
              <div className="reveal flex justify-center py-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-parchment border border-line px-3 py-1 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember" aria-hidden="true" />
                  <span className="font-semibold uppercase tracking-[0.14em] text-ember-text">{chapter.note.label}</span>
                  <span className="font-serif italic text-ink">{chapter.note.text}</span>
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="reveal rounded-[22px] bg-card border border-ember/25 p-5 text-center shadow-[0_30px_60px_-30px_rgba(226,104,47,0.45)]">
        <Glim clip="deliver_letter" alt="Glim carrying your first letter" className="w-16 mx-auto" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ember-text mt-2">Your first letter</p>
        <p className="font-serif text-xl text-ink mt-1 leading-snug">From the you who already has it</p>
        <p className="text-sm text-body mt-2">Written from all six answers. Free, and yours to keep.</p>
      </div>
    </div>
  );
}

const DESKTOP_QUERY = '(min-width: 1024px)';
const subscribeDesktop = (onChange: () => void) => {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
};

export default function OnboardingStory() {
  const desktop = useSyncExternalStore(subscribeDesktop, () => window.matchMedia(DESKTOP_QUERY).matches, () => false);
  return desktop ? <PinnedConversation /> : <FlowingConversation />;
}
