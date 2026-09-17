import type { Metadata } from 'next';
import DeleteAccountView from './DeleteAccountView';

export const metadata: Metadata = {
  title: 'Delete Account & Data — Aura: Manifest Daily',
  description:
    'Step-by-step instructions to delete your Aura account and completely erase all personal journals, audio, and memories.',
  alternates: {
    canonical: 'https://eb-aura-manifest-daily.onrender.com/delete-account',
  },
  openGraph: {
    title: 'Delete Account & Data — Aura: Manifest Daily',
    description:
      'Instructions for permanent account and data erasure in Aura: Manifest Daily.',
    url: 'https://eb-aura-manifest-daily.onrender.com/delete-account',
  },
};

export default function DeleteAccountPage() {
  return <DeleteAccountView />;
}
