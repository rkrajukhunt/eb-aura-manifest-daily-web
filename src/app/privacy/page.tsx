import type { Metadata } from 'next';
import PrivacyView from './PrivacyView';
import BreadcrumbData from '@/components/BreadcrumbData';
import PageTransition from '@/components/PageTransition';
import { SHARE_IMAGE, SITE_URL } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Aura: Manifest Daily collects, protects and handles your goals, journal entries and reflections. Encrypted, never sold, and yours to delete.',
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    type: 'website',
    title: 'Privacy Policy | Aura: Manifest Daily',
    description:
      'Learn how Aura handles and secures your personal journal, affirmations, and memory reflections with strict privacy guarantees.',
    url: `${SITE_URL}/privacy`,
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Aura: Manifest Daily',
    description:
      'Learn how Aura handles and secures your personal journal, affirmations, and memory reflections with strict privacy guarantees.',
    images: [SHARE_IMAGE],
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
