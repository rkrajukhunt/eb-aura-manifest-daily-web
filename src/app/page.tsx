import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Volume2,
  Brain,
  Moon,
  ShieldCheck,
  Check,
  Smartphone,
  Flame,
  Headphones,
} from 'lucide-react';
import AudioPreview from '@/components/AudioPreview';
import ScreenshotCarousel from '@/components/ScreenshotCarousel';
import FaqAccordion from '@/components/FaqAccordion';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Floating Glowing Aura Orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[600px] h-[340px] sm:h-[500px] md:h-[600px] rounded-full bg-gradient-to-tr from-[#e2682f]/25 via-[#f2a96f]/15 to-transparent blur-[90px] sm:blur-[130px] pointer-events-none animate-orb-glow -z-10" />

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#e2682f]/15 text-[#c9531f] dark:text-[#f2a96f] border border-[#e2682f]/30 backdrop-blur-md shadow-lg shadow-[#e2682f]/5">
            <Sparkles className="w-3.5 h-3.5 text-[#e2682f]" />
            <span>AI Companion for Daily Audio Manifestation</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1b1810] dark:text-[#f5f2e8] leading-[1.08]">
            Your dream life, <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#e2682f] via-[#f2a96f] to-[#8a8265] dark:from-[#f2a96f] dark:via-[#e2682f] dark:to-[#dad5be]">
              spoken into reality
            </span>{' '}
            every morning.
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#4a4536] dark:text-[#dad5be] leading-relaxed font-light">
            Aura turns your deepest goals and evening reflections into personalized, studio-quality audio moments and daily affirmations that evolve with you.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-[#1b1810] bg-gradient-to-r from-[#f2a96f] to-[#e2682f] hover:opacity-95 shadow-[0_0_35px_rgba(226,104,47,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download on App Store</span>
            </a>

            <a
              href="#experience"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-[#1b1810] dark:text-[#dad5be] glass-panel hover:border-[#e2682f]/50 transition-colors"
            >
              <Headphones className="w-4 h-4 text-[#e2682f]" />
              <span>Listen to a Sample</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#6f6a58] dark:text-[#8a8265]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 sm:bg-transparent sm:dark:bg-transparent">
              <ShieldCheck className="w-4 h-4 text-[#e2682f] shrink-0" />
              <span>Private & Encrypted</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 sm:bg-transparent sm:dark:bg-transparent">
              <Sparkles className="w-4 h-4 text-[#e2682f] dark:text-[#f2a96f] shrink-0" />
              <span>Zero Toxic Positivity</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 sm:bg-transparent sm:dark:bg-transparent">
              <Volume2 className="w-4 h-4 text-[#e2682f] shrink-0" />
              <span>ElevenLabs AI Voices</span>
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. INTERACTIVE AUDIO EXPERIENCE DEMO                         */}
      {/* ============================================================ */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#e2682f] font-mono font-semibold">
            Audio Sanctuary
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
            Hear What Morning Clarity Sounds Like
          </h2>
          <p className="text-base sm:text-lg text-[#6f6a58] dark:text-[#8a8265] max-w-xl mx-auto">
            Experience the intimate tone and gentle pacing of an Aura daily moment. Click play to listen.
          </p>
        </div>

        <AudioPreview />
      </section>

      {/* ============================================================ */}
      {/* 3. FOUR PILLARS / FEATURES                                   */}
      {/* ============================================================ */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#e2682f] font-mono font-semibold">
            Product Foundations
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
            Designed for Quiet Power
          </h2>
          <p className="text-base sm:text-lg text-[#6f6a58] dark:text-[#8a8265]">
            Built from psychology, neuroscience, and ethical AI — without spammy notification tactics or guilt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-black/10 dark:border-white/5 hover:border-[#e2682f]/40 transition-all group space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e2682f]/10 border border-[#e2682f]/20 flex items-center justify-center text-[#e2682f] group-hover:scale-110 transition-transform">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
              Personalized Audio Moments
            </h3>
            <p className="text-sm sm:text-base text-[#4a4536] dark:text-[#dad5be] leading-relaxed">
              Every day at your chosen ritual time, Aura synthesizes a custom audio letter crafted around your immediate intentions, speaking in an unhurried voice that feels like a wise companion.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-black/10 dark:border-white/5 hover:border-[#e2682f]/40 transition-all group space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e2682f]/10 border border-[#e2682f]/20 flex items-center justify-center text-[#e2682f] group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
              The Living Memory Engine
            </h3>
            <p className="text-sm sm:text-base text-[#4a4536] dark:text-[#dad5be] leading-relaxed">
              Aura connects the dots across your journal reflections. It remembers when you overcome hesitation, reminds you of past breakthroughs, and lets you view and edit everything it stores.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-black/10 dark:border-white/5 hover:border-[#e2682f]/40 transition-all group space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e2682f]/10 border border-[#e2682f]/20 flex items-center justify-center text-[#e2682f] group-hover:scale-110 transition-transform">
              <Moon className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
              Zero-Pressure Evening Gratitude
            </h3>
            <p className="text-sm sm:text-base text-[#4a4536] dark:text-[#dad5be] leading-relaxed">
              Three quiet evening prompts to down-regulate your nervous system. What you write tonight gently weaves into tomorrow morning’s audio meditation.
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-black/10 dark:border-white/5 hover:border-[#e2682f]/40 transition-all group space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e2682f]/10 border border-[#e2682f]/20 flex items-center justify-center text-[#e2682f] group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
              Resonant Affirmations & Soft Streaks
            </h3>
            <p className="text-sm sm:text-base text-[#4a4536] dark:text-[#dad5be] leading-relaxed">
              Keep, replay, and share affirmation cards that resonate with you. Plus, a ritual counter that respects the rhythm of life — missing a day never wipes out your progress.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. APP SHOWCASE / SCREENSHOT GALLERY                         */}
      {/* ============================================================ */}
      <section id="showcase" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black/[0.02] dark:bg-black/30 border-y border-black/5 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#e2682f] font-mono font-semibold">
            Visual Craftsmanship
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
            Experience the Interface
          </h2>
          <p className="text-base sm:text-lg text-[#6f6a58] dark:text-[#8a8265]">
            Built with tactile haptics, warm editorial typography, and buttery 60fps animations.
          </p>
        </div>

        <ScreenshotCarousel />
      </section>

      {/* ============================================================ */}
      {/* 5. AURA VS TRADITIONAL MEDITATION APPS                       */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-[#e2682f] font-mono font-semibold">
            Intentional Difference
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
            Why Aura Feels Different
          </h2>
          <p className="text-xs sm:text-sm text-[#6f6a58] dark:text-[#8a8265] max-w-md mx-auto">
            Traditional apps play the same generic audio for millions. Aura speaks directly to your journey.
          </p>
        </div>

        {/* Desktop Table View (Hidden on mobile) */}
        <div className="hidden sm:block glass-panel rounded-3xl overflow-hidden border border-black/10 dark:border-white/10">
          <div className="grid grid-cols-12 bg-black/5 dark:bg-white/5 p-4 sm:p-6 text-xs uppercase tracking-wider font-semibold text-[#6f6a58] dark:text-[#8a8265] border-b border-black/10 dark:border-white/10">
            <div className="col-span-5 sm:col-span-6">Experience</div>
            <div className="col-span-4 sm:col-span-3 text-center text-[#e2682f]">Aura</div>
            <div className="col-span-3 sm:col-span-3 text-center">Typical Apps</div>
          </div>

          <div className="divide-y divide-black/5 dark:divide-white/5 text-sm sm:text-base text-[#4a4536] dark:text-[#dad5be]">
            <div className="grid grid-cols-12 p-4 sm:p-6 items-center">
              <div className="col-span-5 sm:col-span-6 font-medium text-[#1b1810] dark:text-[#f5f2e8]">
                Audio Personalization
              </div>
              <div className="col-span-4 sm:col-span-3 text-center text-[#e2682f] dark:text-[#f2a96f] font-medium">
                Unique daily AI generation
              </div>
              <div className="col-span-3 sm:col-span-3 text-center text-[#6f6a58] dark:text-[#8a8265]">
                Static recorded tracks
              </div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-6 items-center bg-black/[0.02] dark:bg-white/[0.02]">
              <div className="col-span-5 sm:col-span-6 font-medium text-[#1b1810] dark:text-[#f5f2e8]">
                Memory & Continuity
              </div>
              <div className="col-span-4 sm:col-span-3 text-center text-[#e2682f] dark:text-[#f2a96f] font-medium">
                Remembers your goals & reflections
              </div>
              <div className="col-span-3 sm:col-span-3 text-center text-[#6f6a58] dark:text-[#8a8265]">
                Zero memory of user
              </div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-6 items-center">
              <div className="col-span-5 sm:col-span-6 font-medium text-[#1b1810] dark:text-[#f5f2e8]">
                Habit Loops
              </div>
              <div className="col-span-4 sm:col-span-3 text-center text-[#e2682f] dark:text-[#f2a96f] font-medium">
                Gentle soft streaks, zero shame
              </div>
              <div className="col-span-3 sm:col-span-3 text-center text-[#6f6a58] dark:text-[#8a8265]">
                Guilt-inducing streak resets
              </div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-6 items-center bg-black/[0.02] dark:bg-white/[0.02]">
              <div className="col-span-5 sm:col-span-6 font-medium text-[#1b1810] dark:text-[#f5f2e8]">
                Voice Quality
              </div>
              <div className="col-span-4 sm:col-span-3 text-center text-[#e2682f] dark:text-[#f2a96f] font-medium">
                ElevenLabs studio synthesis
              </div>
              <div className="col-span-3 sm:col-span-3 text-center text-[#6f6a58] dark:text-[#8a8265]">
                Robotic TTS or generic narrator
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Cards View (Visible on small screens) */}
        <div className="block sm:hidden space-y-3.5">
          {[
            {
              feature: 'Audio Personalization',
              aura: 'Unique daily AI moment generated for your goals',
              others: 'Static pre-recorded audio libraries',
            },
            {
              feature: 'Memory & Continuity',
              aura: 'Living Memory Engine remembers your reflections',
              others: 'Zero memory — starts over every time',
            },
            {
              feature: 'Habit Loops',
              aura: 'Gentle soft streaks with zero guilt or shame',
              others: 'Punishing streak counters that reset to 0',
            },
            {
              feature: 'Voice Quality',
              aura: 'ElevenLabs hyper-realistic studio voices',
              others: 'Robotic synthetic speech or monotone audio',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-4 border border-black/10 dark:border-white/10 space-y-3"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#1b1810] dark:text-[#f5f2e8]">
                {item.feature}
              </span>

              {/* Aura advantage */}
              <div className="p-3 rounded-xl bg-[#e2682f]/10 dark:bg-[#e2682f]/15 border border-[#e2682f]/25 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#e2682f] dark:text-[#f2a96f]">
                    Aura
                  </span>
                  <Check className="w-3.5 h-3.5 text-[#e2682f]" />
                </div>
                <p className="text-xs font-medium text-[#1b1810] dark:text-[#f5f2e8]">
                  {item.aura}
                </p>
              </div>

              {/* Typical Apps */}
              <div className="px-3 py-2 rounded-xl bg-black/5 dark:bg-white/5 space-y-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8a8265]">
                  Typical Apps
                </span>
                <p className="text-xs text-[#6f6a58] dark:text-[#8a8265]">
                  {item.others}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. FREQUENTLY ASKED QUESTIONS                                */}
      {/* ============================================================ */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#e2682f] font-mono font-semibold">
            Common Inquiries
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#1b1810] dark:text-[#f5f2e8]">
            Frequently Asked Questions
          </h2>
        </div>

        <FaqAccordion />
      </section>

      {/* ============================================================ */}
      {/* 8. FINAL DOWNLOAD CTA BANNER                                 */}
      {/* ============================================================ */}
      <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="relative rounded-[40px] p-8 sm:p-14 md:p-16 overflow-hidden glass-panel-glow border-2 border-[#e2682f]/40 text-center shadow-[0_20px_80px_rgba(226,104,47,0.15)] dark:shadow-[0_20px_80px_rgba(226,104,47,0.2)]">
          {/* Internal Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#e2682f]/10 via-[#e2682f]/5 to-[#e2682f]/15 pointer-events-none" />

          {/* Inner Content with vertical spacing */}
          <div className="relative z-10 space-y-8">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold text-[#1b1810] dark:text-[#f5f2e8] leading-tight">
                Begin your morning with clarity tomorrow.
              </h2>
              <p className="text-base sm:text-lg text-[#4a4536] dark:text-[#dad5be]">
                Download Aura on iOS. Set your intentions, rest with peaceful gratitude, and let your future self speak to you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://apps.apple.com/app/id6795523727"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-[#1b1810] bg-gradient-to-r from-[#f2a96f] to-[#e2682f] hover:opacity-95 shadow-xl transition-transform hover:scale-105"
              >
                <Smartphone className="w-5 h-5" />
                <span>Get Aura for iOS</span>
              </a>
              <Link
                href="/support"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-[#1b1810] dark:text-[#dad5be] glass-panel hover:text-[#e2682f] dark:hover:text-white"
              >
                <span>Need Help? Contact Support</span>
              </Link>
            </div>

            <div className="pt-2 text-xs text-[#6f6a58] dark:text-[#8a8265]">
              Requires iOS 16.0 or later · Compatible with iPhone and iPad
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
