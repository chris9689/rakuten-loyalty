import type { AppUserId, AppUserProfile, LoyaltyStatus } from '@/types';
import { loyaltyStatus } from './loyalty';

/** Build a per-user loyalty status by overriding the shared base. */
const makeLoyalty = (overrides: Partial<LoyaltyStatus>): LoyaltyStatus => ({
  ...loyaltyStatus,
  ...overrides,
});

/**
 * Home-experience definitions for the four selectable app users.
 *
 * Each profile drives:
 *  - the greeting/context on the home screen,
 *  - the "Available balance", "Loyalty status" and "Spending Insight" cards,
 *  - the main "Recommended for you" offer card,
 *  - the "Why shown now" panel that opens when the offer is tapped.
 *
 * The 2x2 "Offers for you" grid is complemented by separately-defined
 * offers from the same `offer.category` (added later).
 *
 * All content below is illustrative placeholder copy — edit freely.
 */
export const appUserProfiles: Record<AppUserId, AppUserProfile> = {
  1: {
    id: 1,
    name: 'App user 1 · New homeowner',
    context: 'Recently moved in, actively setting up the home.',
    pointsBalance: 12340,
    loyalty: makeLoyalty({
      rank: 'Premium',
      nextRank: 'VIP',
      progressToNext: 80,
      monthlyActivitiesCounted: 16,
      monthlyActivitiesTarget: 20,
    }),
    spendingInsight:
      'Your home-setup spending is trending up. Linking more purchases this month can unlock extra point boosts on household categories.',
    offer: {
      merchant: 'Nitori',
      category: 'Home & living',
      type: 'points',
      headline: 'Earn 3× points on every purchase',
      subtitle: 'Pay with your Rakuten Card Mastercard in-store or online',
      cta: 'Activate offer',
      image: '/nitori_offer_1.jpg',
      logo: '/nitori_logo.jpg',
    },
    gridOffers: [
      { merchant: 'Nitori', title: 'Bedroom refresh', type: 'points', icon: 'bed' },
      { merchant: 'Rakuten Ichiba', title: 'Kitchen essentials', type: 'discount', icon: 'kitchen' },
      { merchant: 'Rakuten Ichiba', title: 'Smart lighting', type: 'points', icon: 'lightbulb' },
      { merchant: 'Nitori', title: 'Storage & organisation', type: 'cashback', icon: 'inventory_2' },
    ],
    why: [
      {
        icon: 'home',
        label: 'Home-setup moment',
        detail: 'Recent purchases signal you are furnishing a new home.',
      },
      {
        icon: 'credit_card',
        label: 'Linked card value',
        detail: 'Your Rakuten Card Mastercard unlocks boosted point-back here.',
      },
      {
        icon: 'category',
        label: 'Category match',
        detail: 'Home & living offers align with your recent browsing.',
      },
    ],
  },
  2: {
    id: 2,
    name: 'App user 2 · Placeholder',
    context: 'Describe this persona’s situation and intent.',
    pointsBalance: 3180,
    loyalty: makeLoyalty({
      rank: 'Advanced',
      nextRank: 'Premium',
      progressToNext: 45,
      monthlyActivitiesCounted: 7,
      monthlyActivitiesTarget: 15,
    }),
    spendingInsight:
      'Your engagement has dipped recently. A few qualifying activities this month would keep you on track for the next status.',
    offer: {
      merchant: 'Merchant name',
      category: 'Category',
      type: 'discount',
      headline: 'Offer headline goes here',
      subtitle: 'Supporting line describing the offer value.',
      cta: 'Call to action',
      image: '/nitori_offer_1.jpg',
      logo: '/nitori_logo.jpg',
    },
    gridOffers: [
      { merchant: 'Merchant name', title: 'Grid offer 1', type: 'discount', icon: 'local_offer' },
      { merchant: 'Merchant name', title: 'Grid offer 2', type: 'points', icon: 'local_offer' },
      { merchant: 'Merchant name', title: 'Grid offer 3', type: 'discount', icon: 'local_offer' },
      { merchant: 'Merchant name', title: 'Grid offer 4', type: 'cashback', icon: 'local_offer' },
    ],
    why: [
      {
        icon: 'insights',
        label: 'Reason one',
        detail: 'Explain the first signal behind this recommendation.',
      },
      {
        icon: 'credit_card',
        label: 'Reason two',
        detail: 'Explain the linked-card or value reason.',
      },
      {
        icon: 'category',
        label: 'Reason three',
        detail: 'Explain the category or intent match.',
      },
    ],
  },
  3: {
    id: 3,
    name: 'App user 3 · Placeholder',
    context: 'Describe this persona’s situation and intent.',
    pointsBalance: 28900,
    loyalty: makeLoyalty({
      rank: 'VIP',
      nextRank: 'Super VIP',
      progressToNext: 62,
      monthlyActivitiesCounted: 22,
      monthlyActivitiesTarget: 30,
    }),
    spendingInsight:
      'You are among the top spenders this month. Premium campaigns and elevated point-back are available across your favourite categories.',
    offer: {
      merchant: 'Merchant name',
      category: 'Category',
      type: 'cashback',
      headline: 'Offer headline goes here',
      subtitle: 'Supporting line describing the offer value.',
      cta: 'Call to action',
      image: '/nitori_offer_1.jpg',
      logo: '/nitori_logo.jpg',
    },
    gridOffers: [
      { merchant: 'Merchant name', title: 'Grid offer 1', type: 'cashback', icon: 'local_offer' },
      { merchant: 'Merchant name', title: 'Grid offer 2', type: 'points', icon: 'local_offer' },
      { merchant: 'Merchant name', title: 'Grid offer 3', type: 'discount', icon: 'local_offer' },
      { merchant: 'Merchant name', title: 'Grid offer 4', type: 'points', icon: 'local_offer' },
    ],
    why: [
      {
        icon: 'insights',
        label: 'Reason one',
        detail: 'Explain the first signal behind this recommendation.',
      },
      {
        icon: 'credit_card',
        label: 'Reason two',
        detail: 'Explain the linked-card or value reason.',
      },
      {
        icon: 'category',
        label: 'Reason three',
        detail: 'Explain the category or intent match.',
      },
    ],
  },
  4: {
    id: 4,
    name: 'App user 4 · Placeholder',
    context: 'Describe this persona’s situation and intent.',
    pointsBalance: 640,
    loyalty: makeLoyalty({
      rank: 'Basic',
      nextRank: 'Advanced',
      progressToNext: 20,
      monthlyActivitiesCounted: 2,
      monthlyActivitiesTarget: 12,
    }),
    spendingInsight:
      'You are just getting started. Completing your first few qualifying activities unlocks your initial member benefits.',
    offer: {
      merchant: 'Merchant name',
      category: 'Category',
      type: 'bundle',
      headline: 'Offer headline goes here',
      subtitle: 'Supporting line describing the offer value.',
      cta: 'Call to action',
      image: '/nitori_offer_1.jpg',
      logo: '/nitori_logo.jpg',
    },
    gridOffers: [
      { merchant: 'Merchant name', title: 'Grid offer 1', type: 'bundle', icon: 'local_offer' },
      { merchant: 'Merchant name', title: 'Grid offer 2', type: 'discount', icon: 'local_offer' },
      { merchant: 'Merchant name', title: 'Grid offer 3', type: 'points', icon: 'local_offer' },
      { merchant: 'Merchant name', title: 'Grid offer 4', type: 'cashback', icon: 'local_offer' },
    ],
    why: [
      {
        icon: 'insights',
        label: 'Reason one',
        detail: 'Explain the first signal behind this recommendation.',
      },
      {
        icon: 'credit_card',
        label: 'Reason two',
        detail: 'Explain the linked-card or value reason.',
      },
      {
        icon: 'category',
        label: 'Reason three',
        detail: 'Explain the category or intent match.',
      },
    ],
  },
};

export const appUserProfileById = (id: AppUserId): AppUserProfile =>
  appUserProfiles[id];
