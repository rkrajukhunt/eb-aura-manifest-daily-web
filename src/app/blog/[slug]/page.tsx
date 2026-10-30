import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import BreadcrumbData from '@/components/BreadcrumbData';
import PostBody, { headingsOf } from '@/components/blog/PostBody';
import PostCard from '@/components/blog/PostCard';
import { POSTS, formatPostDate, getPost, readingMinutes } from '@/data/blog';
import { SITE_URL } from '@/data/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = { url: `${SITE_URL}${post.cover}`, width: 1600, height: 900, alt: post.coverAlt };
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: { type: 'article', title: post.title, description: post.description, url, publishedTime: post.date, images: [image] },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [image] },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const headings = headingsOf(post.body);
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Aura', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Aura', logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.png` } },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.keywords.join(', '),
  };

  return (
    <PageTransition>
      <BreadcrumbData items={[{ name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <main className="relative">
        {/* Same width as the cover and the article below, so every left edge lines up */}
        <header className="pt-32 sm:pt-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All posts
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ember-text">{post.category}</p>
          <h1 className="max-w-4xl font-sans text-4xl sm:text-5xl md:text-[3.6rem] font-semibold tracking-[-0.045em] leading-[1.05] text-ink text-balance">
            {post.title}
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl text-body leading-relaxed text-pretty">{post.description}</p>
          <p className="text-sm text-muted">
            By the Aura team · {formatPostDate(post.date)} · {readingMinutes(post)} min read
          </p>
          </div>
        </header>

        <div className="px-4 sm:px-6 lg:px-8 mt-10">
          <div className="relative max-w-5xl mx-auto aspect-[16/9] rounded-[28px] overflow-hidden border border-line shadow-[0_40px_80px_-40px_rgba(27,24,16,0.45)]">
            <Image src={post.cover} alt={post.coverAlt} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px]">
            <article className="min-w-0 max-w-[68ch]">
              <PostBody body={post.body} />

              <section className="mt-14 border-t border-line pt-8">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Sources</h2>
                <ol className="mt-4 space-y-2.5 text-sm text-body leading-relaxed list-decimal pl-5">
                  {post.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:text-ink underline decoration-line underline-offset-[3px]">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-xs text-muted leading-relaxed">
                  Aura is a mindset practice, not therapy or medical advice. If things feel really hard, please reach out to someone you trust or a local support line.
                </p>
              </section>
            </article>

            {headings.length > 0 && (
              <aside className="hidden lg:block">
                <nav aria-label="On this page" className="sticky top-28 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">On this page</p>
                  <ul className="space-y-2.5 border-l border-line">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="block -ml-px border-l border-transparent pl-4 text-sm text-body leading-snug hover:text-ink hover:border-ember transition-colors">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}
          </div>
        </div>

        <section className="px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
          <div className="max-w-6xl mx-auto space-y-8">
            <h2 className="font-sans text-3xl sm:text-4xl font-semibold tracking-[-0.04em] text-ink">
              Keep reading<span className="text-ember">.</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
