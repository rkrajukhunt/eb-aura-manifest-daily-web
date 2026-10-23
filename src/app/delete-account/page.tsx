import type { Metadata } from 'next';
import DeleteAccountView from './DeleteAccountView';
import BreadcrumbData from '@/components/BreadcrumbData';
import PageTransition from '@/components/PageTransition';
import { SITE_URL } from '@/data/site';

export const metadata: Metadata = {
  title: 'Delete Account & Data',
  description:
    'Step-by-step instructions to delete your Aura account and completely erase all personal journals, audio, and memories.',
  alternates: {
    canonical: `${SITE_URL}/delete-account`,
  },
  openGraph: {
    title: 'Delete Account & Data | Aura: Manifest Daily',
    description:
      'Instructions for permanent account and data erasure in Aura: Manifest Daily.',
    url: `${SITE_URL}/delete-account`,
    images: [`${SITE_URL}/assets/banner.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delete Account & Data | Aura: Manifest Daily',
    description:
      'Instructions for permanent account and data erasure in Aura: Manifest Daily.',
    images: [`${SITE_URL}/assets/banner.png`],
  },
};

export default function DeleteAccountPage() {
  return (
    <PageTransition>
      <BreadcrumbData items={[{ name: 'Delete Account', path: '/delete-account' }]} />
      <DeleteAccountView />
    </PageTransition>
  );
}
