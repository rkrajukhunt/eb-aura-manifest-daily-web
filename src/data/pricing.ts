// Premium prices shown on the Plans section. The app takes its real prices from the App Store and
// Google Play, so these are set by hand and must be changed here whenever the store prices change.
//
// While SAMPLE_PRICES is true the section is labelled "Sample prices", so placeholder numbers are
// never mistaken for the real ones.
export const SAMPLE_PRICES = false;

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

// Shortest period first, so the list builds up to the best value
export const PREMIUM_PLANS: PremiumPlan[] = [
  { id: 'weekly', name: 'Weekly', price: '$6.99', cadence: '/week', equivalent: 'about $30.29 a month', trialDays: 3 },
  { id: 'monthly', name: 'Monthly', price: '$14.99', cadence: '/month', equivalent: 'billed every month', trialDays: 3 },
  { id: 'yearly', name: 'Yearly', price: '$49.99', cadence: '/year', equivalent: 'about $4.17 a month, billed once', trialDays: 3, badge: 'Best value' },
];

export const DEFAULT_PLAN: BillingPeriod = 'yearly';
