import type { Metadata } from 'next';
import TermsView from './TermsView';
import BreadcrumbData from '@/components/BreadcrumbData';
import PageTransition from '@/components/PageTransition';
import { SITE_URL } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Review the Terms of Service governing your use of Aura: Manifest Daily, including subscription policies, auto-renewal rules, acceptable use, and intellectual property.',
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  openGraph: {
    title: 'Terms of Service | Aura: Manifest Daily',
    description:
      'Official Terms of Service for Aura: Manifest Daily applications and services.',
    url: `${SITE_URL}/terms`,
    images: [`${SITE_URL}/assets/banner.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Aura: Manifest Daily',
    description:
      'Official Terms of Service for Aura: Manifest Daily applications and services.',
    images: [`${SITE_URL}/assets/banner.png`],
  },
};

export default function TermsPage() {
  return (
    <PageTransition>
      <BreadcrumbData items={[{ name: 'Terms of Service', path: '/terms' }]} />
      <TermsView />
    </PageTransition>
  );
}
