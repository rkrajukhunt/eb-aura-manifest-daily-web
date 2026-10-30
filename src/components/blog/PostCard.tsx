import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type Post, formatPostDate, readingMinutes } from '@/data/blog';

export default function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group card overflow-hidden flex flex-col transition-[transform,box-shadow] duration-500 hover:-translate-y-1 ${
        featured ? 'lg:flex-row lg:col-span-2' : ''
      }`}
    >
      <div className={`relative aspect-[16/9] overflow-hidden ${featured ? 'lg:w-[58%] lg:shrink-0' : ''}`}>
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          sizes={featured ? '(max-width: 1024px) 100vw, 640px' : '(max-width: 768px) 100vw, 400px'}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className={`flex flex-col gap-3 p-6 sm:p-7 ${featured ? 'lg:flex-1 lg:justify-center lg:p-10' : 'flex-1'}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ember-text">{post.category}</p>
        <h3 className={`font-semibold tracking-[-0.03em] leading-tight text-ink text-balance ${featured ? 'text-3xl sm:text-4xl' : 'text-xl'}`}>
          {post.title}
        </h3>
        <p className={`text-body leading-relaxed ${featured ? 'text-base sm:text-lg' : 'text-sm line-clamp-3'}`}>{post.description}</p>
        <p className="mt-auto pt-2 text-xs text-muted">
          {formatPostDate(post.date)} · {readingMinutes(post)} min read
        </p>
      </div>
    </Link>
  );
}
