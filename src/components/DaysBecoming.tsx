import React from 'react';
import { Headphones, PenLine, Repeat, Trophy, Feather, RotateCcw } from 'lucide-react';

type DayState = 'counted' | 'held' | 'today';

// Mirrors the app's week strip: Monday to Sunday, with two missed days quietly held.
const WEEK: { label: string; state: DayState }[] = [
  { label: 'M', state: 'counted' },
  { label: 'T', state: 'counted' },
  { label: 'W', state: 'held' },
  { label: 'T', state: 'held' },
  { label: 'F', state: 'counted' },
  { label: 'S', state: 'counted' },
  { label: 'S', state: 'today' },
];

const COUNTING_ACTIONS = [
  {
    icon: Headphones,
    title: 'Listen to a moment',
    body: 'Play a morning moment through to the end.',
  },
  {
    icon: PenLine,
    title: 'Write one gratitude line',
    body: 'A single sentence in the evening is enough.',
  },
  {
    icon: Repeat,
    title: 'Finish a 369 practice',
    body: 'Complete an affirmation practice session.',
  },
];

function WeekDot({ state }: { state: DayState }) {
  if (state === 'held') {
    return (
      <span
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-dashed border-[#e2682f]/70"
        aria-label="Held day"
      />
    );
  }
  if (state === 'today') {
    return (
      <span
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#f2a96f] to-[#e2682f] ring-2 ring-offset-2 ring-[#e2682f]/50 ring-offset-white dark:ring-offset-[#181511]"
        aria-label="Today"
      />
    );
  }
  return (
    <span
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e2682f]/80"
      aria-label="Counted day"
    />
  );
}

export default function DaysBecoming() {
  return (
    <section id="rhythm" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
        <span className="text-xs uppercase tracking-widest text-[#e2682f] font-mono font-semibold">
          Gentle Rhythm
        </span>
        <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
          Your Days Becoming, Protected
        </h2>
        <p className="text-base sm:text-lg text-[#6f6a58] dark:text-[#8a8265]">
          Aura counts the days you show up for yourself. Life gets busy, so a missed day is quietly held,
          never held against you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* App card preview */}
        <div className="lg:col-span-5 glass-panel-glow rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-serif-luxury text-6xl font-bold text-[#1b1810] dark:text-[#f5f2e8] leading-none">
                7
              </p>
              <p className="text-xs uppercase tracking-widest text-[#6f6a58] dark:text-[#8a8265] mt-2">
                days becoming
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e2682f]/10 text-[#c9531f] dark:text-[#f2a96f] border border-[#e2682f]/25">
              <Trophy className="w-3.5 h-3.5" />
              <span>Record 10</span>
            </span>
          </div>

          <div className="flex items-center justify-between">
            {WEEK.map((day, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <WeekDot state={day.state} />
                <span className="text-[10px] font-mono text-[#6f6a58] dark:text-[#8a8265]">{day.label}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#4a4536] dark:text-[#dad5be] leading-relaxed border-t border-black/5 dark:border-white/5 pt-4">
            Two quiet days were kept for you. You picked up right where you left off.
          </p>

          <div className="flex items-center justify-between gap-3 rounded-2xl bg-[#e2682f]/10 border border-[#e2682f]/25 px-4 py-3">
            <p className="text-sm text-[#1b1810] dark:text-[#f5f2e8]">Your 10 days can still come back.</p>
            <span className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1b1810] bg-gradient-to-r from-[#f2a96f] to-[#e2682f]">
              <RotateCcw className="w-3.5 h-3.5" />
              Restore
            </span>
          </div>
        </div>

        {/* How it works */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-black/10 dark:border-white/5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-[#e2682f]/10 border border-[#e2682f]/20 flex items-center justify-center text-[#e2682f]">
                <Feather className="w-5 h-5" />
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
                Held days, automatically
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#4a4536] dark:text-[#dad5be] leading-relaxed">
              Each month you have two held days. Miss one or two days and come back, and your count keeps
              growing as if you never left. The missed days appear as soft dashed circles, kept rather than lost.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-black/10 dark:border-white/5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-[#e2682f]/10 border border-[#e2682f]/20 flex items-center justify-center text-[#e2682f]">
                <RotateCcw className="w-5 h-5" />
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
                Restore, when you choose
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#4a4536] dark:text-[#dad5be] leading-relaxed">
              If a longer pause resets your count, a run of three days or more can come back. For three days
              after the reset, you can restore it once a month. Your earlier days and your new ones join into one.
              It&rsquo;s free for everyone, with no timer and no catch.
            </p>
          </div>

          <div className="flex items-start gap-3 px-2 text-sm text-[#6f6a58] dark:text-[#8a8265]">
            <Trophy className="w-4 h-4 text-[#e2682f] shrink-0 mt-0.5" />
            <p>Your record is never erased. Even after a reset, the proof that those days happened stays with you.</p>
          </div>
        </div>
      </div>

      {/* What counts as a day */}
      <div className="mt-14 sm:mt-16">
        <p className="text-center text-xs uppercase tracking-widest text-[#6f6a58] dark:text-[#8a8265] font-semibold mb-6">
          Any one of these counts for the day
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {COUNTING_ACTIONS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="glass-panel rounded-2xl p-5 border border-black/10 dark:border-white/5 flex items-start gap-3"
            >
              <Icon className="w-5 h-5 text-[#e2682f] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#1b1810] dark:text-[#f5f2e8]">{title}</p>
                <p className="text-xs sm:text-sm text-[#6f6a58] dark:text-[#8a8265]">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
