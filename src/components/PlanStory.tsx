import React from 'react';
import { Check } from 'lucide-react';
import PlayOnView from './PlayOnView';
import { PLAN_SUMMARY } from '@/data/features';

// The paywall's own transparency screen (apps/mobile/src/copy/paywall.ts), shown before anyone starts a trial

const d = (seconds: number): React.CSSProperties => ({ animationDelay: `${seconds}s` });

const TIMELINE = [
  { when: 'Today · Day 1', what: 'Full access begins. Nothing charged.' },
  { when: 'Day 5', what: 'We remind you. Two days left.' },
  { when: 'Day 7', what: 'Your plan begins, unless you have cancelled.' },
];

export default function PlanStory() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
      <PlayOnView className="reveal card p-6 sm:p-8 lg:col-span-2">
        <p className="font-serif text-3xl font-medium tracking-tight text-ink leading-tight">Exactly what happens, and when.</p>
        <ol className="relative mt-7 space-y-7">
          <span className="absolute left-[11px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
          <span
            className="mk mk-grow-y absolute left-[11px] top-2 bottom-2 w-px bg-ember"
            style={d(0.4)}
            aria-hidden="true"
          />
          {TIMELINE.map(({ when, what }, i) => (
            <li key={when} className="relative pl-10">
              <span
                className="mk mk-pop absolute left-0 top-0.5 w-[23px] h-[23px] rounded-full bg-pill text-pill-text flex items-center justify-center text-[10px] font-semibold"
                style={d(0.4 + i * 0.5)}
              >
                {i + 1}
              </span>
              <p className="text-sm font-semibold text-ink">{when}</p>
              <p className="text-sm text-body">{what}</p>
            </li>
          ))}
        </ol>
        <p className="text-xs text-muted mt-7 leading-relaxed">
          Weekly prices also show the monthly figure, so you never have to do the arithmetic yourself. Cancel in two taps
          from your App Store or Google Play subscriptions.
        </p>
      </PlayOnView>

      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {(['free', 'premium'] as const).map((plan) => (
          <div
            key={plan}
            className={`reveal rounded-[28px] p-6 sm:p-8 ${
              plan === 'premium' ? 'bg-[#1b1810] text-[#f5f2e8] border border-[#1b1810]' : 'card'
            }`}
          >
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${plan === 'premium' ? 'text-[#f6d289]' : 'text-muted'}`}>
              {plan === 'free' ? 'No card needed' : 'Everything in free, plus'}
            </p>
            <p className={`font-serif text-3xl font-medium mt-2 ${plan === 'premium' ? '' : 'text-ink'}`}>{PLAN_SUMMARY[plan].title}</p>
            <ul className="mt-6 space-y-3">
              {PLAN_SUMMARY[plan].lines.map((line) => (
                <li key={line} className={`flex gap-2.5 text-sm ${plan === 'premium' ? 'text-[#dad5be]' : 'text-body'}`}>
                  <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan === 'premium' ? 'text-[#f6d289]' : 'text-ember'}`} />
                  {line}
                </li>
              ))}
            </ul>
            {plan === 'premium' && (
              <p className="text-xs text-[#dad5be]/80 mt-6 leading-relaxed">
                Yearly, monthly or weekly, with a free trial. If you stop, your letter and everything you have told Aura stay
                yours.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
