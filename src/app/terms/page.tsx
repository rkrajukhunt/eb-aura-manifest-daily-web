import type { Metadata } from 'next';
import TermsView from './TermsView';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Review the Terms of Service governing your use of Aura: Manifest Daily, including subscription policies, auto-renewal rules, acceptable use, and intellectual property.',
  alternates: {
    canonical: 'https://eb-aura-manifest-daily.onrender.com/terms',
  },
  openGraph: {
    title: 'Terms of Service',
    description:
      'Official Terms of Service for Aura: Manifest Daily applications and services.',
    url: 'https://eb-aura-manifest-daily.onrender.com/terms',
  },
};

export default function TermsPage() {
  return (
    <PageTransition>
      <TermsView />
    </PageTransition>
  );
}
