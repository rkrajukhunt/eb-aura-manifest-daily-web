'use client';

import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import PlayOnView from './PlayOnView';
import { PLAN_SUMMARY } from '@/data/features';
import { DEFAULT_PLAN, PREMIUM_PLANS, SAMPLE_PRICES, type BillingPeriod } from '@/data/pricing';

// Free and Premium side by side, with every Premium price on show, and the paywall's own
// transparency screen (apps/mobile/src/copy/paywall.ts) following whichever plan is picked.

const d = (seconds: number): React.CSSProperties => ({ animationDelay: `${seconds}s` });

export default function PlanStory() {
  const [selected, setSelected] = useState<BillingPeriod>(DEFAULT_PLAN);
  const plan = PREMIUM_PLANS.find((p) => p.id === selected) ?? PREMIUM_PLANS[0];

  const timeline = plan.trialDays
    ? [
        { when: 'Today · Day 1', what: 'Full access begins. Nothing charged.' },
        { when: `Day ${plan.trialDays - 2}`, what: 'We remind you. Two days left.' },
        { when: `Day ${plan.trialDays}`, what: `${plan.price}${plan.cadence} begins, unless you have cancelled.` },
      ]
    : [
        { when: 'Today', what: `${plan.price}${plan.cadence}, with full access straight away.` },
        { when: 'Every renewal', what: 'The same price. No surprise increases.' },
        { when: 'Any time', what: 'Cancel in two taps. Your letter and memories stay yours.' },
      ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
      {/* Free */}
      <div className="reveal card p-6 sm:p-8 lg:col-span-4 flex flex-col">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">No card needed</p>
        <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink">{PLAN_SUMMARY.free.title}</p>
        <p className="mt-5 flex items-baseline gap-1.5">
          <span className="text-5xl font-semibold tracking-[-0.04em] text-ink">$0</span>
          <span className="text-sm text-muted">forever</span>
        </p>
        <ul className="mt-6 space-y-3">
          {PLAN_SUMMARY.free.lines.map((line) => (
            <li key={line} className="flex gap-2.5 text-sm text-body">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-ember" />
              {line}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-8">
          <a href="#download" className="btn-ghost w-full">
            Start free
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Premium, every price visible */}
      <div className="reveal relative rounded-[28px] p-6 sm:p-8 lg:col-span-5 bg-[#1b1810] text-[#f5f2e8] border border-[#1b1810] shadow-[0_40px_80px_-40px_rgba(27,24,16,0.6)] flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d289]">Everything in free, plus</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">{PLAN_SUMMARY.premium.title}</p>
          </div>
          {SAMPLE_PRICES && (
            <span className="shrink-0 rounded-full border border-[#f5f2e8]/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#f5f2e8]/70">
              Sample prices
            </span>
          )}
        </div>

        <div role="radiogroup" aria-label="Billing period" className="mt-6 space-y-2.5">
          {PREMIUM_PLANS.map((option) => {
            const active = option.id === selected;
            return (
              <button
                key={option.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setSelected(option.id)}
                className={`w-full text-left !rounded-2xl border px-4 py-3.5 flex items-center gap-3 transition-colors duration-300 ${
                  active ? 'border-ember-soft bg-[#f5f2e8]/[0.08]' : 'border-[#f5f2e8]/12 hover:border-[#f5f2e8]/30'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${active ? 'border-ember-soft' : 'border-[#f5f2e8]/35'}`}
                  aria-hidden="true"
                >
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-ember-soft" />}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="flex items-center gap-2">
                    <span className="font-semibold">{option.name}</span>
                    {option.badge && (
                      <span className="rounded-full bg-ember px-2 py-0.5 text-[10px] font-semibold text-white">{option.badge}</span>
                    )}
                  </span>
                  <span className="block text-xs text-[#dad5be]/80 mt-0.5">
                    {option.equivalent}
                    {option.trialDays ? ` · ${option.trialDays}-day free trial` : ''}
                  </span>
                </span>
                <span className="text-right shrink-0">
                  <span className="text-lg font-semibold tabular-nums">{option.price}</span>
                  <span className="text-xs text-[#dad5be]/80">{option.cadence}</span>
                </span>
              </button>
            );
          })}
        </div>

        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
          {PLAN_SUMMARY.premium.lines.map((line) => (
            <li key={line} className="flex gap-2.5 text-sm text-[#dad5be]">
              <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#f6d289]" />
              {line}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <a href="#download" className="btn-pill !bg-[#f5f2e8] !text-[#1b1810] w-full">
            {plan.trialDays ? `Start your ${plan.trialDays}-day free trial` : `Get ${plan.name.toLowerCase()}`}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <p className="mt-3 text-center text-xs text-[#dad5be]/70">Renews automatically. Cancel anytime in two taps.</p>
      </div>

      {/* What happens, for the plan picked */}
      <PlayOnView className="reveal card p-6 sm:p-7 lg:col-span-3">
        <p className="text-xl font-semibold tracking-[-0.02em] text-ink leading-tight">Exactly what happens, and when.</p>
        <p className="mt-1 text-xs text-muted">For the {plan.name.toLowerCase()} plan</p>
        <ol key={plan.id} className="relative mt-6 space-y-6">
          <span className="absolute left-[11px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
          <span className="mk mk-grow-y absolute left-[11px] top-2 bottom-2 w-px bg-ember" style={d(0.2)} aria-hidden="true" />
          {timeline.map(({ when, what }, i) => (
            <li key={when} className="relative pl-10">
              <span
                className="mk mk-pop absolute left-0 top-0.5 w-[23px] h-[23px] rounded-full bg-pill text-pill-text flex items-center justify-center text-[10px] font-semibold"
                style={d(0.2 + i * 0.35)}
              >
                {i + 1}
              </span>
              <p className="text-sm font-semibold text-ink">{when}</p>
              <p className="text-sm text-body">{what}</p>
            </li>
          ))}
        </ol>
        <p className="text-xs text-muted mt-6 leading-relaxed">
          Cancel from your App Store or Google Play subscriptions. If you stop, your letter and everything you told Aura stay
          yours.
        </p>
      </PlayOnView>
    </div>
  );
}
