import React from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import HeroSky from './HeroSky';
import PhoneFrame from './phone/PhoneFrame';
import { AffirmationScreen, HomeScreen, PlayerScreen } from './phone/DayScreens';
import RotatingWord from './RotatingWord';
import StoreButtons from './StoreButtons';
import { Accent } from './SectionHeading';
import { PLATFORMS_LINE } from '@/data/site';

const DREAMS = ['the studio', 'a calm mind', 'the promotion', 'a new home', 'the marathon'];

export default function Hero() {
  return (
    <section className="relative isolate pt-32 sm:pt-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* The app's own sky, full bleed, melting into the page below */}
      <div className="hero-sky absolute inset-x-0 -top-[20%] bottom-0 -z-10" aria-hidden="true">
        <HeroSky />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="hero-copy max-w-4xl mx-auto text-center space-y-7">
        <h1 className="font-sans text-[2.7rem] leading-[1.04] sm:text-6xl md:text-7xl lg:text-[5.4rem] font-semibold tracking-[-0.045em] text-ink text-balance">
          Wake up to <RotatingWord words={DREAMS} />
          <br />
          <Accent>already yours</Accent>
          <span className="text-ember">.</span>
        </h1>

        <p className="max-w-xl mx-auto text-lg sm:text-xl text-body leading-relaxed text-pretty">
          Tell Aura what you are building, once. Each morning it writes you a short moment in your own words, and
          reads it to you by name.
        </p>

        <div className="space-y-3">
          <StoreButtons className="items-center justify-center" />
          <p className="text-sm text-muted">{PLATFORMS_LINE}</p>
        </div>
      </div>

      {/* A fan of three phones, cropped by the horizon like the app's hill */}
      <div className="relative max-w-6xl mx-auto mt-14 sm:mt-16 h-[440px] sm:h-[540px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 flex items-start justify-center">
          <div className="hero-fan-left hidden sm:block -mr-16 mt-16">
            <div className="w-[230px] -rotate-[9deg] origin-bottom-right">
              <PhoneFrame className="opacity-95">
                <div className="absolute inset-0 mock-static">
                  <PlayerScreen />
                </div>
              </PhoneFrame>
            </div>
          </div>
          <div className="hero-fan-center relative z-10 w-[260px] sm:w-[280px]">
            <div className="absolute -inset-10 rounded-full bg-ember/20 blur-3xl" aria-hidden="true" />
            <PhoneFrame className="relative">
              <div className="absolute inset-0">
                <HomeScreen />
              </div>
            </PhoneFrame>
          </div>
          <div className="hero-fan-right hidden sm:block -ml-16 mt-16">
            <div className="w-[230px] rotate-[9deg] origin-bottom-left">
              <PhoneFrame className="opacity-95">
                <div className="absolute inset-0 mock-static">
                  <AffirmationScreen />
                </div>
              </PhoneFrame>
            </div>
          </div>
        </div>

        {/* Floating chips, in the app's own words */}
        <div className="hidden md:flex absolute left-[4%] lg:left-[10%] top-[14%] z-20 liquid-glass rounded-2xl px-4 py-3 items-center gap-3 -rotate-3 animate-float-soft">
          <span className="flex items-end gap-[3px] h-5" aria-hidden="true">
            {[40, 80, 55, 100, 65, 85, 45].map((h, i) => (
              <span key={i} className="w-[3px] rounded-full bg-ember" style={{ height: `${h}%` }} />
            ))}
          </span>
          <span className="text-left leading-tight">
            <span className="block text-sm font-semibold text-ink">Read to you</span>
            <span className="block font-serif italic text-[13px] text-body">by name, every morning</span>
          </span>
        </div>

        <div
          className="hidden md:block absolute left-[1%] lg:left-[6%] top-[38%] z-20 max-w-[220px] rounded-2xl p-4 bg-parchment border border-line shadow-[0_20px_40px_-20px_rgba(27,24,16,0.35)] rotate-2 animate-float-soft"
          style={{ animationDelay: '-2s' }}
        >
          <p className="font-serif italic text-[15px] leading-snug text-ink text-left">
            &ldquo;I am building the studio with my own hands, one quiet morning at a time.&rdquo;
          </p>
        </div>

        <div
          className="hidden md:block absolute right-[3%] lg:right-[9%] top-[10%] z-20 w-[240px] liquid-glass rounded-2xl p-3 rotate-3 animate-float-soft"
          style={{ animationDelay: '-4s' }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="relative w-5 h-5 rounded-md overflow-hidden bg-card">
              <Image src="/assets/logo.png" alt="" fill sizes="20px" className="object-contain" />
            </span>
            <span className="text-[11px] font-semibold text-ink">Aura</span>
            <span className="text-[11px] text-muted ml-auto">7:00</span>
          </div>
          <p className="text-[13px] leading-snug text-ink text-left">Maya, this morning&rsquo;s is about the studio.</p>
        </div>

        {/* The horizon: phones sink into the page */}
        <div className="absolute left-1/2 -translate-x-1/2 w-screen bottom-0 h-48 z-20 bg-gradient-to-b from-transparent via-bg/80 to-bg pointer-events-none" aria-hidden="true" />

        <a
          href="#day"
          className="absolute left-1/2 bottom-6 -translate-x-1/2 z-30 inline-flex items-center gap-2 whitespace-nowrap rounded-full liquid-glass px-4 py-2 text-sm font-semibold text-ink hover:text-ember-text transition-colors"
        >
          See a day with Aura
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
