import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, Lock, Smartphone } from 'lucide-react';
import AudioPreview from '@/components/AudioPreview';
import FaqAccordion from '@/components/FaqAccordion';
import DaysBecoming from '@/components/DaysBecoming';
import Glim from '@/components/Glim';
import MoodDial from '@/components/MoodDial';
import SectionHeading from '@/components/SectionHeading';
import DayWithAura from '@/components/DayWithAura';
import OnboardingStory from '@/components/OnboardingStory';
import LetterRitual from '@/components/LetterRitual';
import StudioStory from '@/components/StudioStory';
import MemoryStory from '@/components/MemoryStory';
import PlanStory from '@/components/PlanStory';
import { APP_STORE_URL } from '@/data/site';

const ALSO_BUILT_IN = [
  {
    icon: Lock,
    title: 'Your words are only for you',
    body: 'Used only to write to you. Never sold, never used to train public AI models. Delete everything from Settings.',
  },
  {
    icon: HeartHandshake,
    title: 'Care on hard days',
    body: 'Aura is a mindset practice, not therapy. If things are really hard, it shows free support lines open around the clock.',
  },
  {
    icon: Smartphone,
    title: 'Waiting on any phone',
    body: 'Sign in with Apple, Google or email, and your letters and memories follow you to a new phone.',
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      {/* ============================================================ */}
      {/* 1. HERO                                                       */}
      {/* ============================================================ */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-body bg-card border border-line">
              <span className="w-1.5 h-1.5 rounded-full bg-ember" aria-hidden="true" />
              For the life you are quietly building
            </span>

            <h1 className="font-serif text-[2.9rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-medium tracking-tight text-ink text-balance">
              Your dream life, <em className="text-ember-text">read back to you</em> every morning
              <span className="text-ember">.</span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-body leading-relaxed text-pretty">
              Tell Aura what you are building, once. Each morning it writes you a short moment in your own words,
              and reads it to you by name.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-pill w-full sm:w-auto">
                Download on the App Store
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#day" className="btn-ghost w-full sm:w-auto">
                See a day with Aura
              </a>
            </div>

            <p className="text-sm text-muted">Free to download · iPhone and iPad · iOS 16 or later</p>
          </div>

          {/* The app's day scene in an arch, with Glim floating in it */}
          <div className="lg:col-span-5 relative mx-auto w-full max-w-[420px]">
            <div className="relative aspect-[4/5] rounded-t-[999px] rounded-b-[44px] overflow-hidden border border-line shadow-[0_40px_80px_-40px_rgba(27,24,16,0.45)]">
              <Image
                src="/assets/illustrations/player-day.jpg"
                alt=""
                fill
                preload
                sizes="(max-width: 1024px) 420px, 40vw"
                className="object-cover object-bottom dark:hidden"
              />
              <Image
                src="/assets/illustrations/player-dusk.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 420px, 40vw"
                className="object-cover object-bottom hidden dark:block"
              />
              <div className="absolute inset-0 flex items-end justify-center pb-[12%]">
                <Glim
                  clip="idle_float"
                  eager
                  alt="Glim, Aura's firefly companion, floating with its lantern glowing"
                  className="w-[46%] drop-shadow-[0_20px_30px_rgba(226,104,47,0.3)]"
                />
              </div>
            </div>

            {/* Arrival notification, in the app's voice */}
            <div className="absolute -left-2 sm:-left-10 top-[14%] max-w-[230px] liquid-glass rounded-2xl p-3 animate-float-soft">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative w-5 h-5 rounded-md overflow-hidden bg-card">
                  <Image src="/assets/logo.png" alt="" fill sizes="20px" className="object-contain" />
                </span>
                <span className="text-[11px] font-semibold text-ink">Aura</span>
                <span className="text-[11px] text-muted ml-auto">7:00</span>
              </div>
              <p className="text-[13px] leading-snug text-ink">Maya, this morning&rsquo;s is about the studio.</p>
            </div>

            {/* A kept affirmation, on parchment */}
            <div
              className="absolute -right-2 sm:-right-8 bottom-[8%] max-w-[220px] rounded-2xl p-4 bg-parchment border border-line shadow-[0_20px_40px_-20px_rgba(27,24,16,0.35)] animate-float-soft"
              style={{ animationDelay: '-3s' }}
            >
              <p className="font-serif italic text-[15px] leading-snug text-ink">
                &ldquo;I am building the studio with my own hands, one quiet morning at a time.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. A DAY WITH AURA (pinned phone scroll story)                */}
      {/* ============================================================ */}
      <section id="day" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="A day with Aura"
          title="Three minutes, spread through your day"
          intro="Scroll through one ordinary Tuesday. Every screen here is the app, in its own words."
        />
        <div className="mt-10 lg:mt-4">
          <DayWithAura />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. IT BEGINS WITH A CONVERSATION (onboarding)                 */}
      {/* ============================================================ */}
      <section id="begin" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-bg-deep/60 border-y border-line">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Before the first morning"
            title="It begins with a conversation"
            intro="A few unhurried questions, so nothing Aura writes is generic. Every few answers, it reflects back what it heard."
          />
          <div className="mt-14">
            <OnboardingStory />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. THE FIRST LETTER + LISTEN                                  */}
      {/* ============================================================ */}
      <section id="listen" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Your first letter"
          title="A letter from the you who already has it"
          intro="Written from everything you shared, recorded in a voice that says your name, and kept forever on every plan."
        />
        <div className="mt-14 space-y-5">
          <LetterRitual />
          <div className="reveal">
            <AudioPreview />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. STUDIO: MANIFEST ANYTHING + GUIDED AFFIRMATIONS           */}
      {/* ============================================================ */}
      <section id="studio" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="When you want more"
          title="Ask for exactly what you need"
          intro="A moment about the one situation on your mind, or a line written for what today needs."
        />
        <div className="mt-14">
          <StudioStory />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. MEMORY                                                     */}
      {/* ============================================================ */}
      <section id="memory" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Living memory"
          title="It remembers, and you are in charge"
          intro="The more Aura knows, the realer it feels. So it shows you everything it knows, and forgets anything you ask it to."
        />
        <div className="mt-14">
          <MemoryStory />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. MEET GLIM                                                  */}
      {/* ============================================================ */}
      <section id="glim" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Meet Glim"
          title="A small light that keeps yours"
          intro="Glim is Aura's firefly. Every small good thing you tell Aura becomes a spark in its lantern. Move the dial to see how Glim meets you on different days."
        />
        <div className="reveal mt-12">
          <MoodDial />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. DAYS BECOMING: HELD DAYS & RESTORE                        */}
      {/* ============================================================ */}
      <DaysBecoming />

      {/* ============================================================ */}
      {/* 9. HONEST PRICING                                             */}
      {/* ============================================================ */}
      <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Plans"
          title="Free to begin, honest about the rest"
          intro="The free plan is a real daily practice. Premium adds more ways to ask, keep and share. You see every term before you decide."
        />
        <div className="mt-14">
          <PlanStory />
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          {ALSO_BUILT_IN.map(({ icon: Icon, title, body }) => (
            <div key={title} className="reveal card p-6 space-y-3">
              <span className="w-11 h-11 rounded-full bg-bg-deep flex items-center justify-center text-ink">
                <Icon className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl font-medium text-ink">{title}</h3>
              <p className="text-sm text-body leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-body">Want the full list, screen by screen?</p>
          <Link href="/features" className="btn-ghost">
            See every feature
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. FAQ                                                        */}
      {/* ============================================================ */}
      <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <SectionHeading eyebrow="Questions" title="Asked, and answered plainly" />
        <div className="mt-12">
          <FaqAccordion />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. FINAL CTA                                                 */}
      {/* ============================================================ */}
      <section id="download" className="pb-24 pt-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="reveal relative rounded-[40px] overflow-hidden min-h-[520px] flex items-center">
          <Image
            src="/assets/illustrations/player-dusk.jpg"
            alt=""
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover object-[50%_70%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b1810]/70 via-[#1b1810]/30 to-transparent" />

          <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end p-8 sm:p-14">
            <div className="space-y-6 text-[#f5f2e8]">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.05] text-balance">
                Tomorrow morning, something written for you
                <span className="text-ember-soft">.</span>
              </h2>
              <p className="text-lg text-[#dad5be] max-w-md">
                Set your intentions tonight. Wake to a moment that already knows them.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill !bg-[#f5f2e8] !text-[#1b1810]"
                >
                  Download on the App Store
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm text-[#dad5be]/80">Requires iOS 16 or later · iPhone and iPad</p>
            </div>
            <div className="hidden md:flex justify-center">
              <Glim clip="wave_hello" alt="Glim waving hello" className="w-[170px] drop-shadow-[0_20px_40px_rgba(242,169,111,0.45)]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
