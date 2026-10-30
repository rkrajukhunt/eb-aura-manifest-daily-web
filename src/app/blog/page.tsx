import type { Metadata } from 'next';
import React from 'react';
import PageTransition from '@/components/PageTransition';
import BreadcrumbData from '@/components/BreadcrumbData';
import PostCard from '@/components/blog/PostCard';
import { Accent, Eyebrow } from '@/components/SectionHeading';
import { POSTS } from '@/data/blog';
import { SITE_URL } from '@/data/site';

const description =
  'Honest, research-backed guides to affirmations, manifestation methods, future self letters and gratitude, from the team behind Aura.';

export const metadata: Metadata = {
  title: 'Blog',
  description,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: { title: 'The Aura Blog', description, url: `${SITE_URL}/blog`, images: [`${SITE_URL}${POSTS[0].cover}`] },
  twitter: { card: 'summary_large_image', title: 'The Aura Blog', description, images: [`${SITE_URL}${POSTS[0].cover}`] },
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;
  return (
    <PageTransition>
      <BreadcrumbData items={[{ name: 'Blog', path: '/blog' }]} />
      <main className="relative">
        <section className="pt-32 sm:pt-40 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center space-y-6">
          <Eyebrow>The Aura blog</Eyebrow>
          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.045em] text-ink text-balance max-w-4xl mx-auto leading-[1.02]">
            Affirmations, <Accent>honestly</Accent>
            <span className="text-ember">.</span>
          </h1>
          <p className="text-lg sm:text-xl text-body max-w-2xl mx-auto leading-relaxed">
            What the research says, the methods people swear by, and how to make them work for you. No magic promises.
          </p>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
          <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3 grid">
              <PostCard post={featured} featured />
            </div>
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
