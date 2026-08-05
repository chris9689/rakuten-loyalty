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
    cardImage: '/cardface_mycolor_pinkbeige_row_Mastercard_rp_e_front_1347x851.png',
    loyalty: makeLoyalty({
      rank: 'Premium',
      nextRank: 'VIP',
      progressToNext: 80,
      monthlyActivitiesCounted: 16,
      monthlyActivitiesTarget: 20,
    }),
    spendingInsight:
      'Your home-setup spending is trending up. Linking more purchases this month can unlock extra point boosts on household categories.',
    offers: [
      {
        source: 'Rakuten Offer',
        merchant: 'Rakuten Ichiba',
        category: 'Home & living',
        type: 'discount',
        title: 'A timely pick for your home setup',
        header: 'Save 5% on the kettle you recently compared.',
        cta: 'Buy now',
        image: '/products/electric_kettle.webp',
        logo: '/Rakuten_Global_Brand_Logo.svg.webp',
      },
      {
        source: 'Rakuten Offer',
        merchant: 'Rakuten Ichiba',
        category: 'Home & living',
        type: 'discount',
        title: 'Complete your new living room',
        header: 'Complete your new living room and save 5% on TVs',
        cta: 'Buy now',
        image: '/products/40_inch_smarttv.webp',
        logo: '/Rakuten_Global_Brand_Logo.svg.webp',
      },
    ],
    gridOffers: [
      { merchant: 'Rakuten Ichiba', title: 'Air purifier', type: 'points', image: '/products/air_purifier.webp', logo: '/Rakuten_Global_Brand_Logo.svg.webp' },
      { merchant: 'Rakuten Ichiba', title: 'Kitchen essentials', type: 'points', image: '/offer_teaser_rakuten_ichiba.png', logo: '/Rakuten_Global_Brand_Logo.svg.webp' },
      { merchant: 'Rakuten Ichiba', title: 'Warm lighting set', type: 'points', image: '/products/warm_lightening_set.webp', logo: '/Rakuten_Global_Brand_Logo.svg.webp' },
      { merchant: 'Nitori', title: 'Storage & organisation', type: 'cashback', image: '/nitori_offer_1.jpg', logo: '/nitori_logo.jpg' },
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
    cardImage: '/cardface_mycolor_pastelblue.png',
    loyalty: makeLoyalty({
      rank: 'Advanced',
      nextRank: 'Premium',
      progressToNext: 55,
      monthlyActivitiesCounted: 9,
      monthlyActivitiesTarget: 15,
    }),
    spendingInsight:
      'Your recent travel searches point to an upcoming Okinawa trip. Warm-weather styles and travel offers are especially relevant this month.',
    offers: [
      {
        source: 'Rakuten Offer',
        merchant: 'Rakuten Fashion',
        category: 'Fashion & travel',
        type: 'discount',
        title: 'Styled for your Okinawa getaway',
        header: 'Get ¥1,000 off this summer dress.',
        cta: 'Get ¥1,000 off',
        image: '/kumiko-offer.png',
        logo: '/Rakuten_Global_Brand_Logo.svg.webp',
      },
    ],
    gridOffers: [
      { merchant: 'Starbucks', title: 'Starbucks coffee', type: 'points', image: '/kumiko-coffee-offer.jpg', logo: '/kumiko-coffee-offer-logo.webp' },
      { merchant: 'SHEIN', title: 'Summer Essentials', type: 'discount', image: '/kumiko_shein-offer.png', logo: '/kumiko-shein-logo.png' },
      { merchant: 'Rakuten Ichiba', title: 'Travel accessories', type: 'points', image: '/kumiko-travel-offer.webp', logo: '/kumiko-travel-offer-logo.png' },
      { merchant: 'Rakuten Ichiba', title: 'Sun protection', type: 'cashback', image: '/kumiko-sun-offer.jpg', logo: '/kumiko-sun-offer-logo.png' },
    ],
    gridTitle: 'More essentials for your trip',
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
    cardImage: '/cardface_mycolor_black.png',
    loyalty: makeLoyalty({
      rank: 'VIP',
      nextRank: 'Super VIP',
      progressToNext: 62,
      monthlyActivitiesCounted: 22,
      monthlyActivitiesTarget: 30,
    }),
    spendingInsight:
      'Your travel activity is picking up ahead of an Osaka trip. Card-linked travel and dining benefits can add value while you book.',
    offers: [
      {
        source: 'MTR Offer',
        merchant: 'MTR Travel',
        category: 'Travel',
        type: 'travel',
        title: 'Ready for your Osaka trip',
        header: 'Add this Osaka hotel offer to get a room upgrade with your card',
        cta: 'Add to card',
        image: '/kenji-offer.jpg',
        logo: '/kenji-logo.jpg',
      },
    ],
    gridOffers: [
      { merchant: 'MTR Travel', title: 'Osaka hotels', type: 'travel', image: '/kenji-hotel-offer.jpg', logo: '/kenji-hotel-offer-logo.jpg' },
      { merchant: 'MTR Travel', title: 'Rail & transfers', type: 'travel', image: '/kenji-railway-offer.jpg', logo: '/kenji-railway-offer-logo.jpg' },
      { merchant: 'MTR Travel', title: 'Dining rewards', type: 'travel', image: '/kenji-dining-offer.jpg', logo: '/kenji-dining-offer-logo.jpg' },
      { merchant: 'MTR Travel', title: 'Airport lounge', type: 'travel', image: '/kenji-airport-lounge-offer.jpg', logo: '/kenji-airport-lounge-offer-logo.jpg' },
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
    cardImage: '/cardface_mycolor_greige.png',
    loyalty: makeLoyalty({
      rank: 'Premium',
      nextRank: 'VIP',
      progressToNext: 48,
      monthlyActivitiesCounted: 11,
      monthlyActivitiesTarget: 20,
    }),
    spendingInsight:
      'You dine out often around midday. Card-linked cashback near your location can add value to your everyday lunch spend.',
    offers: [
      {
        source: 'Mastercard Offer',
        merchant: 'Ginza Kagari',
        category: 'Dining',
        type: 'cashback',
        title: 'A top lunch pick, right when you need it',
        header: 'Activate 10% cashback at Ginza Kagari today.',
        cta: 'Activate cashback',
        image: '/ginza-kagari.webp',
        logo: '/ginza-kagari-logo.webp',
      },
    ],
    gridOffers: [
      { merchant: 'Nearby Cafés', title: 'Coffee cashback', type: 'cashback', image: '/yuki-coffee-cashback.jpg', logo: '/yuki-coffee-cashback-logo.jpg' },
      { merchant: 'Nearby Restaurants', title: 'Dinner rewards', type: 'cashback', image: '/yuki-dinner-reward.jpg', logo: '/yuki-dinner-reward-logo.jpg' },
      { merchant: 'Rakuten Ichiba', title: 'After-lunch pick', type: 'points', image: '/yuki-after-lunch.jpg', logo: '/yuki-after-lunch-logo.jpg' },
      { merchant: 'MTR Travel', title: 'Travel rewards', type: 'travel', image: '/yuki-travel-reward.jpg', logo: '/yuki-travel-reward-logo.jpg' },
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
        cta: 'Complementary offers nearby extend the moment — a coffee right after lunch in the same location, plus dinner rewards, an after-lunch pick and travel rewards.',
      },
    ],
  },
};

export const appUserProfileById = (id: AppUserId): AppUserProfile =>
  appUserProfiles[id];
