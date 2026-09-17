import type { Metadata } from 'next';
import PrivacyView from './PrivacyView';

export const metadata: Metadata = {
  title: 'Privacy Policy — Aura: Manifest Daily',
  description:
    'Read our complete Privacy Policy. Learn how Aura: Manifest Daily collects, encrypts, and handles your intentions and reflections with strict row-level security and zero data sale.',
  alternates: {
    canonical: 'https://eb-aura-manifest-daily.onrender.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy — Aura: Manifest Daily',
    description:
      'Learn how Aura handles and secures your personal journal, affirmations, and memory reflections.',
    url: 'https://eb-aura-manifest-daily.onrender.com/privacy',
  },
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
