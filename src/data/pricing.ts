// Premium prices shown on the Plans section. The app takes its real prices from the App Store and
// Google Play, so these must be set by hand to match the stores before launch.
//
// While SAMPLE_PRICES is true the section is labelled "Sample prices", so placeholder numbers are
// never mistaken for the real ones. Set real prices below, then switch it to false.
export const SAMPLE_PRICES = true;

export type BillingPeriod = 'yearly' | 'monthly' | 'weekly';

export interface PremiumPlan {
  id: BillingPeriod;
  name: string;
  /** Price as the store shows it, currency included */
  price: string;
  /** Printed right after the price */
  cadence: string;
  /** The honest arithmetic under the price, as the app's paywall prints it */
  equivalent: string;
  /** Free trial length the store gives this plan, if any */
  trialDays?: number;
  badge?: string;
}

export const PREMIUM_PLANS: PremiumPlan[] = [
  { id: 'yearly', name: 'Yearly', price: '$39.99', cadence: '/year', equivalent: 'about $3.33 a month, billed once', trialDays: 7, badge: 'Best value' },
  { id: 'monthly', name: 'Monthly', price: '$9.99', cadence: '/month', equivalent: 'billed every month' },
  { id: 'weekly', name: 'Weekly', price: '$3.99', cadence: '/week', equivalent: 'about $17.29 a month' },
];

export const DEFAULT_PLAN: BillingPeriod = 'yearly';
