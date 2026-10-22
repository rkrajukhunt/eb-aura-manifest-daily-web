import React from 'react';
import Image from 'next/image';
import { Check, Heart, Play } from 'lucide-react';
import SectionHeading, { Accent } from './SectionHeading';

function AnswersChip() {
  return (
    <div className="w-[78%] liquid-glass rounded-2xl p-3.5 space-y-2 text-left">
      <p className="font-serif text-[15px] leading-tight text-ink">What matters most to you right now?</p>
      {[
        { label: 'Financial freedom', on: true },
        { label: 'Being recognized', on: false },
        { label: 'Family & love', on: true },
      ].map(({ label, on }) => (
        <div
          key={label}
          className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium ${
            on ? 'bg-[#6f6a4f] text-[#f5f2e8]' : 'bg-white/80 text-[#1b1810]'
          }`}
        >
          {label}
          {on && <Check className="w-3.5 h-3.5" />}
        </div>
      ))}
    </div>
  );
}

function PlayerChip() {
  return (
    <div className="w-[80%] liquid-glass rounded-2xl p-3.5 flex items-center gap-3 text-left">
      <span className="w-10 h-10 rounded-full bg-[#1b1810] text-[#f5f2e8] flex items-center justify-center shrink-0">
        <Play className="w-4 h-4 fill-current ml-0.5" />
      </span>
      <div className="flex-1 min-w-0 space-y-1.5">
        <p className="font-serif text-[15px] leading-none text-ink truncate">The morning you own</p>
        <div className="flex items-end gap-[3px] h-4" aria-hidden="true">
          {[30, 60, 45, 90, 70, 100, 55, 80, 40, 65, 35, 75, 50].map((h, i) => (
            <span key={i} className={`w-[3px] rounded-full ${i < 6 ? 'bg-ember' : 'bg-ink/20'}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <span className="text-[11px] text-muted tabular-nums">2 min</span>
    </div>
  );
}

function KeptChip() {
  return (
    <div className="w-[78%] rounded-2xl p-4 bg-parchment border border-line shadow-[0_20px_40px_-20px_rgba(27,24,16,0.4)] text-left space-y-2 -rotate-2">
      <p className="font-serif italic text-[15px] leading-snug text-ink">&ldquo;I build steadily, and what I build holds.&rdquo;</p>
      <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ember-text">
        <Heart className="w-3.5 h-3.5 fill-current" />
        Kept forever
      </p>
    </div>
  );
}

const STEPS = [
  {
    title: 'Tell Aura',
    accent: 'once',
    body: 'Eleven unhurried questions about the life you are building. Nothing Aura writes after that is generic.',
    image: '/assets/illustrations/sheet-guided.jpg',
    Chip: AnswersChip,
  },
  {
    title: 'Wake to',
    accent: 'your moment',
    body: 'Each morning a new one arrives at your hour, written from your words and read in a voice that says your name.',
    image: '/assets/illustrations/sheet-manifest.jpg',
    Chip: PlayerChip,
  },
  {
    title: 'Keep',
    accent: 'what lands',
    body: 'Save the lines that feel true. Aura remembers what you keep, and the next morning already knows.',
    image: '/assets/illustrations/sheet-memory.jpg',
    Chip: KeptChip,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="How it works"
        title="Your simplest path to"
        accent="a kinder morning"
        stacked
        intro="Three minutes a day. No streak to protect, no feed to scroll. Just something written for you."
      />

      <ol className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
        {STEPS.map(({ title, accent, body, image, Chip }, i) => (
          <li key={title} className="reveal card overflow-hidden flex flex-col">
            <div className="relative aspect-[5/4] flex items-center justify-center overflow-hidden">
              <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, 360px" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-card" aria-hidden="true" />
              <span className="absolute top-4 left-4 w-9 h-9 rounded-full liquid-glass flex items-center justify-center text-xs font-semibold text-ink tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="relative flex justify-center w-full">
                <Chip />
              </div>
            </div>
            <div className="p-6 sm:p-7 pt-2 space-y-2.5">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">
                {title} <Accent>{accent}</Accent>
              </h3>
              <p className="text-body leading-relaxed">{body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
