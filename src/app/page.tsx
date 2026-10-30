import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AudioPreview from '@/components/AudioPreview';
import FaqAccordion from '@/components/FaqAccordion';
import DaysBecoming from '@/components/DaysBecoming';
import SectionHeading from '@/components/SectionHeading';
import DayWithAura from '@/components/DayWithAura';
import OnboardingStory from '@/components/OnboardingStory';
import LetterRitual from '@/components/LetterRitual';
import StudioStory from '@/components/StudioStory';
import MemoryStory from '@/components/MemoryStory';
import PlanStory from '@/components/PlanStory';
import Hero from '@/components/Hero';
import DreamMarquee from '@/components/DreamMarquee';
import HowItWorks from '@/components/HowItWorks';
import TrustBento from '@/components/TrustBento';
import PageTransition from '@/components/PageTransition';
import { HomeStructuredData } from '@/components/StructuredData';
import PostCard from '@/components/blog/PostCard';
import { POSTS } from '@/data/blog';

// Lines people have kept, a faint wall behind the marquee
const KEPT_LINES = [
  'I build steadily, and what I build holds.',
  'Money is a tool I am learning to hold without fear.',
  'I am allowed to want more than enough.',
  'The room makes space for me when I walk in.',
  'I finish what I start, and it holds.',
  'My mornings are mine again.',
  'I am becoming someone I trust.',
  'Rest is part of the work.',
  'I speak, and people listen.',
  'The studio is already taking shape.',
];

export default function Home() {
  return (
    <PageTransition>
      <HomeStructuredData />
      <main className="relative overflow-x-clip">
        <Hero />

        {/* ============================================================ */}
        {/* WHATEVER YOU ARE BUILDING (marquee)                           */}
        {/* ============================================================ */}
        <section id="dreams" className="relative isolate pt-20 sm:pt-24 pb-4">
          <div className="text-wall-mask absolute inset-0 -z-10 overflow-hidden flex flex-col justify-center gap-3 opacity-[0.12] select-none" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5].map((row) => (
              <p key={row} className="whitespace-nowrap font-serif italic text-xl sm:text-2xl text-ink" style={{ marginLeft: `${-row * 9}%` }}>
                {[...KEPT_LINES.slice(row), ...KEPT_LINES.slice(0, row)].join('  ·  ')}
              </p>
            ))}
          </div>
          <div className="px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Whatever you are building"
              title="One life."
              accent="Written back to you"
              stacked
              intro="People tell Aura about studios, savings, marathons and quieter minds. Each one gets mornings written for that life, and no one else's."
            />
          </div>
          <div className="mt-12">
            <DreamMarquee />
          </div>
        </section>

        <HowItWorks />

        {/* ============================================================ */}
        {/* 2. A DAY WITH AURA (pinned phone scroll story)                */}
        {/* ============================================================ */}
        <section id="day" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="A day with Aura"
            title="Three minutes,"
            accent="spread through your day"
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
              title="It begins with"
              accent="a conversation"
              intro="A few unhurried questions, so nothing Aura writes is generic. Scroll, and watch it listen."
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
            title="A letter from the you"
            accent="who already has it"
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
            title="Ask for exactly"
            accent="what you need"
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
            title="It remembers,"
            accent="and you are in charge"
            intro="The more Aura knows, the realer it feels. So it shows you everything it knows, and forgets anything you ask it to."
          />
          <div className="mt-14">
            <MemoryStory />
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
            title="Free to begin,"
            accent="honest about the rest"
            intro="The free plan is a real daily practice. Premium adds more ways to ask, keep and share. Every price, and the day you would be charged, is right here."
          />
          <div className="mt-14">
            <PlanStory />
          </div>

          <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <p className="text-body">Want the full list, screen by screen?</p>
            <Link href="/features" className="btn-ghost">
              See every feature
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <TrustBento />

        {/* ============================================================ */}
        {/* FROM THE BLOG                                                  */}
        {/* ============================================================ */}
        <section id="blog" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="From the blog"
            title="Affirmations,"
            accent="honestly"
            intro="What the research says, the methods people swear by, and how to make them work for you."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.slice(0, 3).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="reveal mt-10 flex justify-center">
            <Link href="/blog" className="btn-ghost">
              Read every post
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 10. FAQ                                                        */}
        {/* ============================================================ */}
        <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="FAQs"
            title="Asked often."
            accent="Answered plainly"
            stacked
            intro="The things people want to know before their first morning."
          />
          <div className="mt-12">
            <FaqAccordion />
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
