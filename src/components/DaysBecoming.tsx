import React from 'react';
import { Headphones, PenLine, Repeat, Trophy, Feather, RotateCcw } from 'lucide-react';
import SectionHeading from './SectionHeading';

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
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-dashed border-muted/60"
        aria-label="Held day"
      />
    );
  }
  if (state === 'today') {
    return (
      <span
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-ember-soft to-ember ring-2 ring-offset-2 ring-ember/40 ring-offset-card"
        aria-label="Today"
      />
    );
  }
  return (
    <span
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-ink/85"
      aria-label="Counted day"
    />
  );
}

export default function DaysBecoming() {
  return (
    <section id="rhythm" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Gentle rhythm"
        title="Your days becoming, protected"
        intro="Aura counts the days you show up for yourself. Life gets busy, so a missed day is quietly held, never held against you."
      />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* App card preview */}
        <div className="reveal lg:col-span-5 card relative p-6 sm:p-8 space-y-6 overflow-hidden">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-serif text-6xl font-medium text-ink leading-none">
                7
              </p>
              <p className="text-xs uppercase tracking-widest text-muted mt-2">
                days becoming
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-bg-deep text-body">
              <Trophy className="w-3.5 h-3.5" />
              <span>Record 10</span>
            </span>
          </div>

          <div className="flex items-center justify-between">
            {WEEK.map((day, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <WeekDot state={day.state} />
                <span className="text-[10px] font-mono text-muted">{day.label}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-body leading-relaxed border-t border-line pt-4">
            Two quiet days were kept for you. You picked up right where you left off.
          </p>

          <div className="flex items-center justify-between gap-3 rounded-2xl bg-bg-deep px-4 py-3">
            <p className="text-sm text-ink">Your 10 days can still come back.</p>
            <span className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-pill text-pill-text">
              <RotateCcw className="w-3.5 h-3.5" />
              Restore
            </span>
          </div>
        </div>

        {/* How it works */}
        <div className="lg:col-span-7 space-y-6">
          <div className="reveal card p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-bg-deep flex items-center justify-center text-ink">
                <Feather className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-2xl font-medium tracking-tight text-ink">
                Held days, automatically
              </h3>
            </div>
            <p className="text-sm sm:text-base text-body leading-relaxed">
              Each month you have two held days. Miss one or two days and come back, and your count keeps
              growing as if you never left. The missed days appear as soft dashed circles, kept rather than lost.
            </p>
          </div>

          <div className="reveal card p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-bg-deep flex items-center justify-center text-ink">
                <RotateCcw className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-2xl font-medium tracking-tight text-ink">
                Restore, when you choose
              </h3>
            </div>
            <p className="text-sm sm:text-base text-body leading-relaxed">
              If a longer pause resets your count, a run of three days or more can come back. For three days
              after the reset, you can restore it once a month. Your earlier days and your new ones join into one.
              It&rsquo;s free for everyone, with no timer and no catch.
            </p>
          </div>

          <div className="flex items-start gap-3 px-2 text-sm text-muted">
            <Trophy className="w-4 h-4 text-muted shrink-0 mt-0.5" />
            <p>Your record is never erased. Even after a reset, the proof that those days happened stays with you.</p>
          </div>
        </div>
      </div>

      {/* What counts as a day */}
      <div className="mt-14 sm:mt-16">
        <p className="text-center text-xs uppercase tracking-widest text-muted font-semibold mb-6">
          Any one of these counts for the day
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {COUNTING_ACTIONS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="reveal card !rounded-[22px] p-5 flex items-start gap-3"
            >
              <Icon className="w-5 h-5 text-ink shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-ink">{title}</p>
                <p className="text-xs sm:text-sm text-muted">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
