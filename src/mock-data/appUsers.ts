import type { AppUserId, AppUserProfile } from '@/types';

/**
 * Home-experience definitions for the four selectable app users.
 *
 * Each profile drives:
 *  - the greeting/context on the home screen,
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
