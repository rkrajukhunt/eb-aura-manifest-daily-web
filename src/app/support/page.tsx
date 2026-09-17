import type { Metadata } from 'next';
import SupportView from './SupportView';

export const metadata: Metadata = {
  title: 'Support & Help Center — Aura: Manifest Daily',
  description:
    'Need help with Aura: Manifest Daily? Contact our product engineering team, restore your subscription, or find answers to common questions about audio and rituals.',
  alternates: {
    canonical: 'https://eb-aura-manifest-daily.onrender.com/support',
  },
  openGraph: {
    title: 'Support & Help Center — Aura: Manifest Daily',
    description:
      'Customer support, troubleshooting, and direct inquiries for Aura users.',
    url: 'https://eb-aura-manifest-daily.onrender.com/support',
  },
};

export default function SupportPage() {
  return <SupportView />;
}
