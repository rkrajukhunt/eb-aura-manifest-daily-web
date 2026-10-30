import type { Metadata } from 'next';
import DeleteAccountView from './DeleteAccountView';
import BreadcrumbData from '@/components/BreadcrumbData';
import PageTransition from '@/components/PageTransition';
import { SHARE_IMAGE, SITE_URL } from '@/data/site';

export const metadata: Metadata = {
  title: 'Delete Account & Data',
  description:
    'Step-by-step instructions to delete your Aura account and completely erase all personal journals, audio, and memories.',
  alternates: {
    canonical: `${SITE_URL}/delete-account`,
  },
  openGraph: {
    type: 'website',
    title: 'Delete Account & Data | Aura: Manifest Daily',
    description:
      'Instructions for permanent account and data erasure in Aura: Manifest Daily.',
    url: `${SITE_URL}/delete-account`,
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delete Account & Data | Aura: Manifest Daily',
    description:
      'Instructions for permanent account and data erasure in Aura: Manifest Daily.',
    images: [SHARE_IMAGE],
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
