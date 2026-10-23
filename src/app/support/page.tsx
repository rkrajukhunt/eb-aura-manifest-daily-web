import type { Metadata } from 'next';
import SupportView from './SupportView';
import BreadcrumbData from '@/components/BreadcrumbData';
import PageTransition from '@/components/PageTransition';
import { SITE_URL } from '@/data/site';

export const metadata: Metadata = {
  title: 'Support & Help Center',
  description:
    'Need help with Aura: Manifest Daily? Contact our product engineering team, restore your subscription, or find answers to common questions about audio and rituals.',
  alternates: {
    canonical: `${SITE_URL}/support`,
  },
  openGraph: {
    title: 'Support & Help Center | Aura: Manifest Daily',
    description:
      'Customer support, troubleshooting, subscription restore assistance, and direct inquiries for Aura users.',
    url: `${SITE_URL}/support`,
    images: [`${SITE_URL}/assets/banner.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support & Help Center | Aura: Manifest Daily',
    description:
      'Customer support, troubleshooting, subscription restore assistance, and direct inquiries for Aura users.',
    images: [`${SITE_URL}/assets/banner.png`],
  },
};

export default function SupportPage() {
  return (
    <PageTransition>
      <BreadcrumbData items={[{ name: 'Support', path: '/support' }]} />
      <SupportView />
    </PageTransition>
  );
}
