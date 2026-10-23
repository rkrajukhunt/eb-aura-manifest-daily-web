import type { Metadata } from 'next';
import PrivacyView from './PrivacyView';
import BreadcrumbData from '@/components/BreadcrumbData';
import PageTransition from '@/components/PageTransition';
import { SITE_URL } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read our complete Privacy Policy. Learn how Aura: Manifest Daily collects, encrypts, and handles your intentions and reflections with strict row-level security and zero data sale.',
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy | Aura: Manifest Daily',
    description:
      'Learn how Aura handles and secures your personal journal, affirmations, and memory reflections with strict privacy guarantees.',
    url: `${SITE_URL}/privacy`,
    images: [`${SITE_URL}/assets/banner.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Aura: Manifest Daily',
    description:
      'Learn how Aura handles and secures your personal journal, affirmations, and memory reflections with strict privacy guarantees.',
    images: [`${SITE_URL}/assets/banner.png`],
  },
};

export default function PrivacyPage() {
  return (
    <PageTransition>
      <BreadcrumbData items={[{ name: 'Privacy Policy', path: '/privacy' }]} />
      <PrivacyView />
    </PageTransition>
  );
}
