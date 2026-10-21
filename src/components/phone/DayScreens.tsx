import React from 'react';
import Image from 'next/image';
import { Heart, Home, Pause, RotateCcw, RotateCw, Share2, Sparkles, User, Volume2 } from 'lucide-react';
import { StatusBar } from './PhoneFrame';
import Glim from '../Glim';
import Typed from '../Typed';

// Coded recreations of the app's screens, using the app's own copy (apps/mobile/src/copy).
// Each one plays its little story once when mounted; under .mock-static it rests on the last frame.

const d = (seconds: number): React.CSSProperties => ({ animationDelay: `${seconds}s` });

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#655e48]">{children}</p>;
}

function Serif({
  children,
  className = '',
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <p className={`font-serif tracking-tight text-[#1b1810] ${className}`} style={style}>
      {children}
    </p>
  );
}

const TABS = [
  { label: 'Home', Icon: Home },
  { label: 'Affirmations', Icon: Sparkles },
  { label: 'Gratitude', Icon: Heart },
  { label: 'Profile', Icon: User },
];

/* The app's Liquid Glass tab bar, with a drop of ember under the open tab */
function TabBar({ active }: { active: string }) {
  return (
    <div className="absolute bottom-3 inset-x-3 rounded-full bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_24px_-12px_rgba(27,24,16,0.35)] px-2 py-1.5 flex justify-between">
      {TABS.map(({ label, Icon }) => (
        <span
          key={label}
          className={`flex-1 flex flex-col items-center gap-0.5 rounded-full py-1 text-[8px] ${
            label === active ? 'bg-[#e2682f]/12 text-[#c9531f] font-semibold' : 'text-[#655e48]'
          }`}
        >
          <Icon className="w-3.5 h-3.5" />
          {label}
        </span>
      ))}
    </div>
  );
}

/* 7:00 · the arrival note on the lock screen */
export function LockScreen() {
  return (
    <div className="absolute inset-0">
      <Image src="/assets/illustrations/player-dusk.jpg" alt="" fill sizes="320px" className="object-cover" />
      <StatusBar light />
      <div className="relative z-10 text-center text-white pt-10">
        <p className="text-[12px] font-medium opacity-90">Tuesday, October 21</p>
        <p className="text-[64px] leading-none font-semibold tracking-tight">7:00</p>
      </div>
      <div className="relative z-10 mx-3 mt-8 space-y-2">
        <div className="mk mk-drop rounded-[18px] bg-white/25 backdrop-blur-xl border border-white/20 p-3 text-white" style={d(0.5)}>
          <div className="flex items-center gap-2 mb-1">
            <span className="relative w-5 h-5 rounded-[6px] overflow-hidden bg-[#f5f2e8]">
              <Image src="/assets/logo.png" alt="" fill sizes="20px" className="object-contain" />
            </span>
            <span className="text-[11px] font-semibold">Aura</span>
            <span className="text-[10px] opacity-75 ml-auto">now</span>
          </div>
          <p className="text-[12px] leading-snug">Maya, this morning&rsquo;s is about the studio.</p>
        </div>
      </div>
      <p className="mk mk-fade absolute bottom-10 inset-x-0 text-center text-[10px] text-white/70" style={d(1.6)}>
        One note a morning. Nothing else.
      </p>
    </div>
  );
}

const MOODS = [
  ['🌤️', 'Calm'],
  ['✨', 'Hopeful'],
  ['🌙', 'Tired'],
  ['🌧️', 'Heavy'],
  ['🌀', 'Restless'],
  ['🙏', 'Grateful'],
];

/* 7:01 · home, the check-in and today's moment */
export function HomeScreen() {
  return (
    <div className="absolute inset-0">
      <StatusBar />
      <div className="px-4 pt-7 space-y-3">
        <div>
          <Eyebrow>Tuesday, October 21</Eyebrow>
          <Serif className="text-[24px] leading-tight mt-0.5">
            Good morning, Maya<span className="text-[#e2682f]">.</span>
          </Serif>
        </div>

        <div className="rounded-[18px] bg-white border border-[#8a8265]/20 p-3 space-y-2.5">
          <p className="text-[11px] font-semibold">How are you arriving today?</p>
          <div className="grid grid-cols-3 gap-1.5">
            {MOODS.map(([emoji, label]) => (
              <span
                key={label}
                className={`rounded-full border px-1.5 py-1 text-[10px] text-center ${
                  label === 'Hopeful'
                    ? 'mk mk-select bg-[#8a8265] text-white border-[#8a8265]'
                    : 'bg-white border-[#8a8265]/25'
                }`}
                style={label === 'Hopeful' ? d(1) : undefined}
              >
                {emoji} {label}
              </span>
            ))}
          </div>
          <p className="mk mk-in font-serif italic text-[13px] text-[#4a4536]" style={d(1.5)}>
            Hold onto that. Today&rsquo;s moment is for it.
          </p>
        </div>

        <div className="mk mk-in rounded-[18px] bg-white border border-[#8a8265]/20 p-3.5 space-y-2" style={d(2.1)}>
          <Eyebrow>Today&rsquo;s moment</Eyebrow>
          <Serif className="text-[18px] leading-tight">The morning you own</Serif>
          <p className="text-[10px] text-[#655e48]">Shaped around financial freedom.</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1b1810] text-[#f5f2e8] text-[10px] font-semibold px-3 py-1.5">
            ▶ Listen · 2 min
          </span>
        </div>

        <div className="mk mk-in grid grid-cols-2 gap-2" style={d(2.5)}>
          <div className="rounded-[14px] bg-white border border-[#8a8265]/20 p-2.5">
            <p className="text-[10px] font-semibold">Favorites</p>
            <p className="text-[9px] text-[#655e48]">4 kept close</p>
          </div>
          <div className="rounded-[14px] bg-[#f4ebd6] border border-[#8a8265]/20 p-2.5">
            <p className="text-[10px] font-semibold">Coming for you</p>
            <p className="text-[9px] text-[#655e48]">Being written</p>
          </div>
        </div>
      </div>
      <TabBar active="Home" />
    </div>
  );
}

const LETTER =
  'Maya, it is a Tuesday, and the light comes into the studio the way you said it would. You almost did not ask for this. You asked anyway, and the window worked.';

/* 7:02 · the player in Read mode, highlighting each word as it is said */
export function PlayerScreen() {
  const words = LETTER.split(' ');
  return (
    <div className="absolute inset-0 flex flex-col">
      <StatusBar />
      <div className="px-5 pt-6 flex-1 flex flex-col">
        <div className="flex justify-center">
          <span className="inline-flex rounded-full bg-[#e2decf] p-0.5 text-[10px] font-semibold">
            <span className="px-3 py-1 rounded-full bg-white">Read</span>
            <span className="px-3 py-1 text-[#655e48]">Listen</span>
          </span>
        </div>
        <div className="mt-4 text-center">
          <Eyebrow>Today&rsquo;s moment</Eyebrow>
          <Serif className="text-[19px] mt-1">The morning you own</Serif>
          <p className="text-[9px] text-[#655e48] mt-0.5">From your future self · 2 min</p>
        </div>
        <p className="mt-5 font-serif text-[15.5px] leading-[1.5] text-[#1b1810]">
          {words.map((word, i) => (
            <span key={i} className="mk mk-word" style={d(0.6 + i * 0.16)}>
              {word}{' '}
            </span>
          ))}
        </p>

        <div className="mt-auto pb-8 space-y-3">
          <div className="h-8 flex items-center gap-[3px]" aria-hidden="true">
            {Array.from({ length: 34 }).map((_, i) => (
              <span
                key={i}
                className={`flex-1 rounded-full ${i < 14 ? 'bg-[#e2682f]' : 'bg-[#ebd9c4]'}`}
                style={{ height: `${25 + ((i * 37) % 70)}%` }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between text-[#1b1810]">
            <span className="text-[10px] rounded-full border border-[#8a8265]/30 px-2 py-0.5">0.9×</span>
            <RotateCcw className="w-4 h-4" />
            <span className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#f2a96f] to-[#e2682f] flex items-center justify-center">
              <Pause className="w-4 h-4 fill-current" />
            </span>
            <RotateCw className="w-4 h-4" />
            <Heart className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* 7:05 · the refine sheet */
export function RefineScreen() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 opacity-40 blur-[1px]">
        <PlayerScreen />
      </div>
      <div className="absolute inset-0 bg-[#1b1810]/30" />
      <div className="mk mk-in absolute inset-x-0 bottom-0 rounded-t-[26px] bg-[#ece9df] px-4 pt-3 pb-7 space-y-3" style={d(0.2)}>
        <div className="mx-auto w-9 h-1 rounded-full bg-[#c9c3ac]" />
        <Serif className="text-[20px]">How should it change?</Serif>
        <div className="space-y-1.5">
          {['More realistic', 'Softer', 'More ambitious'].map((option) => (
            <div
              key={option}
              className={`rounded-[14px] border px-3 py-2.5 text-[12px] flex justify-between ${
                option === 'Softer' ? 'mk mk-select bg-[#8a8265] text-white border-[#8a8265]' : 'bg-white border-[#8a8265]/25'
              }`}
              style={option === 'Softer' ? d(1) : undefined}
            >
              {option}
              {option === 'Softer' && <span>✓</span>}
            </div>
          ))}
        </div>
        <div className="rounded-[14px] bg-white border border-[#8a8265]/25 px-3 py-2.5 text-[11px] text-[#655e48]">
          <span className="text-[#1b1810]">
            <Typed text="Less about the money, more about the mornings." start={1.6} />
          </span>
          <span className="mk-caret">|</span>
        </div>
        <div className="relative h-10">
          <span className="mk mk-fade-out absolute inset-0 opacity-0 rounded-full bg-[#1b1810] text-[#f5f2e8] text-[12px] font-semibold flex items-center justify-center" style={d(3.6)}>
            Rewrite it
          </span>
          <span className="mk mk-fade absolute inset-0 rounded-full bg-[#1b1810] text-[#f5f2e8] text-[12px] font-semibold flex items-center justify-center" style={d(3.6)}>
            Rewriting…
          </span>
        </div>
      </div>
    </div>
  );
}

/* 12:30 · today's affirmation, hold to reveal, with its 369 practice */
export function AffirmationScreen() {
  const rows: [string, number, number][] = [
    ['Morning · 3', 3, 3],
    ['Today · 6', 6, 4],
    ['Tonight · 9', 9, 0],
  ];
  let dot = 0;
  return (
    <div className="absolute inset-0">
      <StatusBar />
      <div className="px-4 pt-7 space-y-3">
        <Serif className="text-[24px] leading-tight">
          Words for <em>today</em>
          <span className="text-[#e2682f]">.</span>
        </Serif>
        <div className="relative rounded-[20px] bg-[#f4ebd6] border border-[#8a8265]/20 p-4 space-y-3 overflow-hidden">
          <div className="flex justify-between">
            <Eyebrow>Today · October 21</Eyebrow>
            <Heart className="w-3.5 h-3.5 text-[#e38fb0] fill-[#e38fb0]" />
          </div>
          <Serif className="text-[19px] leading-snug italic">I build steadily, and what I build holds.</Serif>
          <div className="flex flex-wrap gap-1.5">
            <span className="rounded-full bg-white px-2 py-0.5 text-[9px]">Identity</span>
            <span className="rounded-full bg-white px-2 py-0.5 text-[9px]">From your words: &ldquo;money&rdquo;</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <span className="rounded-full bg-[#1b1810] text-[#f5f2e8] text-[10px] font-semibold py-1.5 flex items-center justify-center gap-1">
              <Volume2 className="w-3 h-3" /> Hear it read
            </span>
            <span className="rounded-full border border-[#1b1810] text-[10px] font-semibold py-1.5 flex items-center justify-center gap-1">
              <Share2 className="w-3 h-3" /> Share as card
            </span>
          </div>

          {/* The hold-to-reveal veil lifts after a press */}
          <div className="mk mk-fade-out absolute inset-0 opacity-0 pointer-events-none bg-[#f4ebd6] flex flex-col items-center justify-center gap-2" style={d(1.4)}>
            <span className="relative w-12 h-12 rounded-full border-2 border-[#ebd9c4] flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="absolute inset-[-2px] w-[52px] h-[52px] -rotate-90">
                <circle cx="26" cy="26" r="23" fill="none" stroke="#e2682f" strokeWidth="2.5" strokeDasharray="145" className="mk mk-draw" style={{ ...d(0.2), ['--len' as string]: 145 }} />
              </svg>
              <span className="w-3 h-3 rounded-full bg-[#e2682f]" />
            </span>
            <p className="text-[11px] font-semibold">Hold to reveal</p>
          </div>
        </div>
        <p className="text-center text-[10px] text-[#655e48]">One a day. That&rsquo;s enough.</p>

        <div className="mk mk-in rounded-[18px] bg-white border border-[#8a8265]/20 p-3 space-y-2" style={d(2)}>
          <p className="text-[11px] font-semibold">369 practice</p>
          {rows.map(([label, total, filled]) => (
            <div key={label} className="flex items-center gap-2">
              <span className="w-[68px] text-[9px] text-[#655e48]">{label}</span>
              <span className="flex gap-1">
                {Array.from({ length: total }).map((_, i) => {
                  const on = i < filled;
                  const delay = on ? 2.4 + dot++ * 0.18 : 0;
                  return (
                    <span
                      key={i}
                      className={`w-2.5 h-2.5 rounded-full border border-[#e2682f]/60 ${on ? 'mk mk-fill bg-[#e2682f]' : ''}`}
                      style={on ? d(delay) : undefined}
                    />
                  );
                })}
              </span>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="Affirmations" />
    </div>
  );
}

/* 21:00 · evening gratitude, with sparks and a remembered line */
export function GratitudeScreen() {
  return (
    <div className="absolute inset-0">
      <StatusBar />
      <div className="px-4 pt-7 space-y-3">
        <div className="flex items-end justify-between">
          <Serif className="text-[24px] leading-tight">
            Grateful for <em>today</em>
            <span className="text-[#e2682f]">.</span>
          </Serif>
          <span className="text-[9px] text-[#655e48] pb-1">12 this month</span>
        </div>
        <div className="rounded-[20px] bg-gradient-to-b from-[#fbeee3] to-white border border-[#e2682f]/25 p-3.5 space-y-2.5">
          <Serif className="text-[15px] leading-snug">You mentioned Nadia yesterday. Anything from them today?</Serif>
          <div className="rounded-[12px] bg-white border border-[#8a8265]/20 px-3 py-2.5 text-[11.5px] min-h-[52px]">
            <Typed text="Chai on the balcony before anyone was awake." start={0.6} />
            <span className="mk-caret">|</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-[#655e48]">Need a spark?</span>
            <div className="relative h-7 w-[86px]">
              <span className="mk mk-fade-out absolute inset-0 opacity-0 rounded-full bg-[#1b1810] text-[#f5f2e8] text-[10px] font-semibold flex items-center justify-center" style={d(2.8)}>
                Keep it
              </span>
              <span className="mk mk-pop absolute inset-0 rounded-full bg-[#e2682f] text-white text-[10px] font-semibold flex items-center justify-center" style={d(2.8)}>
                Kept.
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {['People', 'Small joys', 'Your body', 'Nature', 'Progress'].map((spark) => (
              <span key={spark} className="rounded-full bg-white border border-[#8a8265]/25 px-2 py-0.5 text-[9px]">
                {spark}
              </span>
            ))}
          </div>
        </div>
        <p className="text-[9px] text-center text-[#655e48] px-4">What you write here may return in your moments. That&rsquo;s the point.</p>
        <div className="mk mk-in rounded-[18px] bg-[#f4ebd6] border border-[#8a8265]/20 p-3 space-y-1" style={d(3.4)}>
          <Eyebrow>Remember this?</Eyebrow>
          <Serif className="text-[14px] italic">Shipped the thing I said I would ship.</Serif>
          <p className="text-[9px] text-[#655e48]">Kept three weeks ago</p>
        </div>
      </div>
      <TabBar active="Gratitude" />
    </div>
  );
}

/* Day 7 · days becoming, a held day, and the milestone letter */
export function StreakScreen() {
  const week: ('on' | 'held' | 'today')[] = ['on', 'on', 'held', 'on', 'on', 'on', 'today'];
  return (
    <div className="absolute inset-0">
      <StatusBar />
      <div className="px-4 pt-7 space-y-3">
        <div className="rounded-[20px] bg-white border border-[#8a8265]/20 p-4 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <Serif className="mk mk-pop text-[48px] leading-none" style={d(0.3)}>
                7
              </Serif>
              <p className="text-[9px] uppercase tracking-[0.16em] text-[#655e48] mt-1">days becoming</p>
            </div>
            <span className="rounded-full bg-[#e2decf] px-2 py-0.5 text-[9px]">Record 10</span>
          </div>
          <div className="flex justify-between">
            {week.map((state, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span
                  className={`mk mk-pop w-6 h-6 rounded-full ${
                    state === 'held'
                      ? 'border-2 border-dashed border-[#b4ae9c]'
                      : state === 'today'
                        ? 'bg-gradient-to-tr from-[#f2a96f] to-[#e2682f] ring-2 ring-offset-2 ring-[#e2682f]/40'
                        : 'bg-[#1b1810]/85'
                  }`}
                  style={d(0.6 + i * 0.12)}
                />
                <span className="text-[8px] text-[#655e48]">{'MTWTFSS'[i]}</span>
              </div>
            ))}
          </div>
          <p className="mk mk-in font-serif italic text-[13px] text-[#4a4536]" style={d(1.6)}>
            Yesterday stayed open. I kept your place.
          </p>
        </div>
        <div className="mk mk-in rounded-[20px] bg-[#1b1810] text-[#f5f2e8] p-4 flex items-center gap-3" style={d(2.2)}>
          <div className="flex-1 space-y-1">
            <p className="text-[9px] uppercase tracking-[0.16em] text-[#f2a96f]">A letter for you</p>
            <p className="font-serif text-[16px] leading-snug">Seven days. There&rsquo;s a letter for that.</p>
          </div>
          <Glim clip="keep_spark" className="w-12 shrink-0" />
        </div>
      </div>
    </div>
  );
}
