import React from 'react';
import Image from 'next/image';
import PhoneFrame, { StatusBar } from '@/components/phone/PhoneFrame';
import StoreButtons from '@/components/StoreButtons';
import { PLATFORMS_LINE } from '@/data/site';

// Renders a post body written in the light markup described in data/blog.ts

function inline(text: string, keyBase: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) out.push(text.slice(last, match.index));
    const key = `${keyBase}-${i++}`;
    if (match[1]) out.push(<strong key={key} className="font-semibold text-ink">{inline(match[1], key)}</strong>);
    else if (match[2]) out.push(<em key={key} className="font-serif italic text-[1.06em]">{inline(match[2], key)}</em>);
    else {
      const external = match[4].startsWith('http');
      out.push(
        <a key={key} href={match[4]} className="text-ember-text underline decoration-ember/40 underline-offset-[3px] hover:decoration-ember" {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {match[3]}
        </a>,
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');

export function headingsOf(body: string) {
  return body
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => ({ id: slugify(line.slice(3)), text: line.slice(3) }));
}

function Screen({ name, caption }: { name: string; caption: string }) {
  return (
    <figure className="my-10 flex flex-col items-center gap-4">
      <PhoneFrame className="w-[230px] sm:w-[250px]">
        <div className="absolute inset-x-0 top-0 z-20">
          <StatusBar />
        </div>
        <Image src={`/assets/blog/screen-${name}.webp`} alt={caption} fill sizes="250px" className="object-cover" />
      </PhoneFrame>
      <figcaption className="max-w-sm text-center text-sm text-muted leading-relaxed">{caption}</figcaption>
    </figure>
  );
}

function DownloadCard() {
  return (
    <aside className="my-12 rounded-[28px] bg-[#1b1810] text-[#f5f2e8] p-7 sm:p-9 shadow-[0_40px_80px_-40px_rgba(27,24,16,0.6)]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d289]">Try it with Aura</p>
      <p className="mt-3 font-sans text-2xl sm:text-3xl font-semibold tracking-[-0.03em] leading-tight text-balance">
        Affirmations written for you, <em className="font-serif font-normal italic">in your own words</em>
        <span className="text-ember">.</span>
      </p>
      <p className="mt-3 text-[#f5f2e8]/75 leading-relaxed max-w-xl">
        Tell Aura what you are working toward, once. Every morning it writes a two-minute moment at a level you can believe,
        and reads it to you by name.
      </p>
      <StoreButtons tone="cream" className="mt-6" />
      <p className="mt-3 text-sm text-[#f5f2e8]/60">{PLATFORMS_LINE} · Your first letter is free</p>
    </aside>
  );
}

export default function PostBody({ body }: { body: string }) {
  const blocks = body.trim().split(/\n\s*\n/);
  return (
    <div className="post-body">
      {blocks.map((block, b) => {
        const key = `b${b}`;
        const lines = block.split('\n');
        const first = lines[0];

        const screen = first.match(/^\[\[screen:([a-z0-9-]+)\|(.+)\]\]$/);
        if (screen) return <Screen key={key} name={screen[1]} caption={screen[2]} />;
        if (first === '[[cta]]') return <DownloadCard key={key} />;
        if (first.startsWith('## ')) {
          const text = first.slice(3);
          return <h2 key={key} id={slugify(text)}>{inline(text, key)}</h2>;
        }
        if (first.startsWith('### ')) return <h3 key={key}>{inline(first.slice(4), key)}</h3>;
        if (lines.every((l) => l.startsWith('- ')))
          return <ul key={key}>{lines.map((l, i) => <li key={i}>{inline(l.slice(2), `${key}-${i}`)}</li>)}</ul>;
        if (lines.every((l) => /^\d+\. /.test(l)))
          return (
            <ol key={key} start={Number(first.match(/^(\d+)/)?.[1] ?? 1)}>
              {lines.map((l, i) => <li key={i}>{inline(l.replace(/^\d+\. /, ''), `${key}-${i}`)}</li>)}
            </ol>
          );
        if (lines.every((l) => l.startsWith('>'))) {
          const paras = lines.map((l) => l.replace(/^>\s?/, '')).filter((p) => p.trim());
          return (
            <blockquote key={key}>
              {paras.map((p, i) => <p key={i}>{inline(p, `${key}-${i}`)}</p>)}
            </blockquote>
          );
        }
        return <p key={key}>{inline(lines.join(' '), key)}</p>;
      })}
    </div>
  );
}
