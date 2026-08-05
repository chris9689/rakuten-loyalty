import type { AppUserId, AppUserProfile, LoyaltyStatus } from '@/types';
import { loyaltyStatus } from './loyalty';

/** Build a per-user loyalty status by overriding the shared base. */
const makeLoyalty = (overrides: Partial<LoyaltyStatus>): LoyaltyStatus => ({
  ...loyaltyStatus,
  ...overrides,
});

/**
 * Home-experience definitions for the four selectable app users (personas).
 *
 * Each profile drives:
 *  - the greeting/context on the home screen,
 *  - the "Available balance", "Loyalty status" and "Spending Insight" cards,
 *  - the main "Recommended for you" offer card,
 *  - the "Why shown now" panel (narrative + reasons + alternatives).
 *
 * The 2x2 "Offers for you" grid is complemented by offers from the same
 * `offer.category`. Images are placeholders until real assets are added.
 */
export const appUserProfiles: Record<AppUserId, AppUserProfile> = {
  // Persona 1 — Hanako Tanaka · furnishing a new home
  1: {
    id: 1,
    name: 'Hanako Tanaka',
    context: 'Tuesday, 11:30 AM · Recently compared kettles and bought several home items.',
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
      source: 'Rakuten Offer',
      merchant: 'ABC Kitchen',
      category: 'Home & living',
      type: 'discount',
      headline: 'ABC Kitchen Electric Kettle',
      subtitle: 'Save 5% on the kettle you recently compared.',
      cta: 'Save 5%',
      image: '/nitori_offer_1.jpg',
      logo: '/nitori_logo.jpg',
    },
    gridOffers: [
      { merchant: 'HOME Center', title: '40" TV bundle', type: 'discount', icon: 'tv' },
      { merchant: 'Rakuten Ichiba', title: 'Kitchen essentials', type: 'points', icon: 'kitchen' },
      { merchant: 'Rakuten Ichiba', title: 'Smart lighting', type: 'points', icon: 'lightbulb' },
      { merchant: 'Nitori', title: 'Storage & organisation', type: 'cashback', icon: 'inventory_2' },
    ],
    whyShownNow:
      "Hanako has recently compared this kettle and purchased several home-related items. Together, these signals indicate she's currently furnishing a new home, making this offer highly relevant right now.",
    why: [
      {
        icon: 'compare_arrows',
        label: 'Active purchase intent',
        detail: 'Recent comparison activity signals Hanako is ready to buy.',
      },
      {
        icon: 'home',
        label: 'Home-setup phase',
        detail: 'Multiple home-related purchases suggest a house move or new setup.',
      },
      {
        icon: 'shopping_bag',
        label: 'In the journey',
        detail: "The product remains highly relevant to Hanako's current shopping journey.",
      },
      {
        icon: 'sell',
        label: 'Eligible discount',
        detail: 'A discount is available through the Rakuten ecosystem.',
      },
    ],
    alternatives: [
      {
        source: 'Rakuten Offer',
        label: 'Alternative considered',
        title: 'HOME Center 40" TV',
        cta: 'Complete your new living room and unlock 5% off this 40-inch TV.',
      },
    ],
  },

  // Persona 2 — Kumiko Sato · planning an Okinawa trip
  2: {
    id: 2,
    name: 'Kumiko Sato',
    context: 'Planning a trip to Okinawa based on recent searches and browsing.',
    pointsBalance: 8760,
    loyalty: makeLoyalty({
      rank: 'Advanced',
      nextRank: 'Premium',
      progressToNext: 55,
      monthlyActivitiesCounted: 9,
      monthlyActivitiesTarget: 15,
    }),
    spendingInsight:
      'Your recent travel searches point to an upcoming Okinawa trip. Warm-weather styles and travel offers are especially relevant this month.',
    offer: {
      source: 'Rakuten Offer',
      merchant: 'Rakuten Fashion',
      category: 'Fashion & travel',
      type: 'discount',
      headline: 'Okinawa-Ready A-Line Summer Dress',
      subtitle: 'Get ¥1,000 off this Okinawa-ready A-line dress.',
      cta: 'Get ¥1,000 off',
      image: '/nitori_offer_1.jpg',
      logo: '/nitori_logo.jpg',
    },
    gridOffers: [
      { merchant: 'Rakuten Fashion', title: 'Beachwear edit', type: 'discount', icon: 'beach_access' },
      { merchant: 'Rakuten Fashion', title: 'Summer sandals', type: 'points', icon: 'footprint' },
      { merchant: 'Rakuten Ichiba', title: 'Travel accessories', type: 'points', icon: 'luggage' },
      { merchant: 'Rakuten Ichiba', title: 'Sun protection', type: 'cashback', icon: 'wb_sunny' },
    ],
    whyShownNow:
      "Kumiko is currently researching an Okinawa trip, and this dress matches her preferred style, size, and travel destination. The offer is available and relevant to her upcoming plans.",
    why: [
      {
        icon: 'travel_explore',
        label: 'Active travel planning',
        detail: 'Recent searches indicate an upcoming trip is being planned.',
      },
      {
        icon: 'beach_access',
        label: 'Okinawa · warm weather',
        detail: 'Destination is Okinawa, with warm-weather purchasing patterns.',
      },
      {
        icon: 'checkroom',
        label: 'Style & size match',
        detail: "The item matches Kumiko's preferred size and style preferences.",
      },
      {
        icon: 'sell',
        label: 'Eligible promotion',
        detail: 'A promotional offer is available through Rakuten.',
      },
    ],
  },

  // Persona 3 — Kenji Nakamura · business trip to Osaka
  3: {
    id: 3,
    name: 'Kenji Nakamura',
    context: 'Upcoming business trip to Osaka.',
    pointsBalance: 28900,
    loyalty: makeLoyalty({
      rank: 'VIP',
      nextRank: 'Super VIP',
      progressToNext: 62,
      monthlyActivitiesCounted: 22,
      monthlyActivitiesTarget: 30,
    }),
    spendingInsight:
      'Your travel activity is picking up ahead of an Osaka trip. Card-linked travel and dining benefits can add value while you book.',
    offer: {
      source: 'MTR Offer',
      merchant: 'MTR Travel',
      category: 'Travel',
      type: 'travel',
      headline: 'Osaka Travel Offer',
      subtitle: 'Add this Osaka travel offer to your card before you book.',
      cta: 'Add to card',
      image: '/nitori_offer_1.jpg',
      logo: '/nitori_logo.jpg',
    },
    gridOffers: [
      { merchant: 'MTR Travel', title: 'Osaka hotels', type: 'travel', icon: 'hotel' },
      { merchant: 'MTR Travel', title: 'Rail & transfers', type: 'travel', icon: 'train' },
      { merchant: 'MTR Travel', title: 'Dining rewards', type: 'travel', icon: 'restaurant' },
      { merchant: 'MTR Travel', title: 'Airport lounge', type: 'travel', icon: 'flight' },
    ],
    whyShownNow:
      "Kenji is actively planning a trip to Osaka and is eligible for this travel benefit. Activating it before completing the booking ensures he can take advantage of the available value.",
    why: [
      {
        icon: 'travel_explore',
        label: 'Travel intent identified',
        detail: 'Recent trip-planning activity signals an upcoming journey.',
      },
      {
        icon: 'location_on',
        label: 'Osaka destination',
        detail: 'Osaka has been detected as the destination.',
      },
      {
        icon: 'credit_card',
        label: 'Cardholder eligible',
        detail: 'Kenji is eligible for the available offer.',
      },
      {
        icon: 'schedule',
        label: 'Booking window',
        detail: "Offer timing aligns with Kenji's booking window.",
      },
    ],
    alternatives: [
      {
        source: 'MTR Offer',
        label: 'Hotel offer',
        cta: 'Save on your Osaka stay by activating this hotel offer before booking.',
      },
      {
        source: 'MTR Offer',
        label: 'Dining offer',
        cta: 'Unlock exclusive dining rewards during your upcoming Osaka trip.',
      },
    ],
  },

  // Persona 4 — Yuki Yamamoto · lunchtime in Tokyo
  4: {
    id: 4,
    name: 'Yuki Yamamoto',
    context: '11:30 AM, Tokyo · near participating restaurants at lunchtime.',
    pointsBalance: 5420,
    loyalty: makeLoyalty({
      rank: 'Premium',
      nextRank: 'VIP',
      progressToNext: 48,
      monthlyActivitiesCounted: 11,
      monthlyActivitiesTarget: 20,
    }),
    spendingInsight:
      'You dine out often around midday. Card-linked cashback near your location can add value to your everyday lunch spend.',
    offer: {
      source: 'Mastercard Offer',
      merchant: 'Nearby Restaurants',
      category: 'Dining',
      type: 'cashback',
      headline: 'Nearby Restaurant Cashback Offer',
      subtitle: 'Activate 10% cashback for lunch near you today.',
      cta: 'Activate cashback',
      image: '/nitori_offer_1.jpg',
      logo: '/nitori_logo.jpg',
    },
    gridOffers: [
      { merchant: 'Nearby Cafés', title: 'Coffee cashback', type: 'cashback', icon: 'local_cafe' },
      { merchant: 'Nearby Restaurants', title: 'Dinner rewards', type: 'cashback', icon: 'dinner_dining' },
      { merchant: 'Rakuten Ichiba', title: 'After-lunch pick', type: 'points', icon: 'shopping_bag' },
      { merchant: 'Rakuten Delivery', title: 'Delivery deals', type: 'discount', icon: 'delivery_dining' },
    ],
    whyShownNow:
      "It's lunchtime, Yuki is near participating restaurants, and her previous dining activity suggests strong interest in similar offers. This benefit is currently available and ready to activate.",
    why: [
      {
        icon: 'schedule',
        label: 'Lunchtime context',
        detail: 'The current time of day matches a typical lunch moment.',
      },
      {
        icon: 'location_on',
        label: 'Near participating venues',
        detail: 'Yuki is currently near participating restaurants.',
      },
      {
        icon: 'restaurant',
        label: 'Dining affinity',
        detail: "Yuki's dining history indicates high likelihood of engagement.",
      },
      {
        icon: 'verified',
        label: 'Eligibility confirmed',
        detail: "Offer eligibility has been confirmed for Yuki's card.",
      },
    ],
    alternatives: [
      {
        source: 'Rakuten Offer',
        label: 'Secondary supporting offer',
        cta: 'Save on a recommended item selected for your interests after lunch.',
      },
    ],
  },
};

export const appUserProfileById = (id: AppUserId): AppUserProfile =>
  appUserProfiles[id];
