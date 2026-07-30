/**
 * Shared domain types for the Digital Rewards Hub prototype.
 * All values are illustrative and for demonstration only.
 */

export type PersonaState = 'linked' | 'notLinked' | 'underEngaged';

export type HappyProgramRank =
  | 'Basic'
  | 'Advanced'
  | 'Premium'
  | 'VIP'
  | 'Super VIP';

export interface User {
  id: string;
  name: string;
  ageBand: string;
  household: string;
  cardholderType: string;
  weeklyShopper: boolean;
  recentHomePurchases: string[];
  currentIntent: string;
  hypothesis: string;
  consent: boolean;
  linkedHappyProgram: boolean;
  suppressionFlag: boolean;
  happyProgramRank: HappyProgramRank;
  /** Illustrative point balance. Not a real balance. */
  pointsBalance: number;
  avatarInitials: string;
}

export type ProductCategory =
  | 'Kitchen'
  | 'Living'
  | 'Home'
  | 'Appliances'
  | 'Lighting';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  /** Illustrative point-back rate as a percentage. */
  pointRate: number;
  emoji: string;
  /** Optional stock photo URL. Falls back to the emoji tile if it fails. */
  image?: string;
  tag?: string;
  rating: number;
  intentSignal?: boolean;
}

export type OfferKind =
  | 'household'
  | 'electronics'
  | 'activity'
  | 'points-utility'
  | 'recap-action';

export interface Offer {
  id: string;
  kind: OfferKind;
  title: string;
  subtitle: string;
  description: string;
  /** Illustrative value framing e.g. "Up to 10% back in points". */
  valueLabel: string;
  emoji: string;
  /** Relevance score 0-100 produced by the mock decision engine. */
  baseScore: number;
  mastercardLinked: boolean;
  requiresLinked: boolean;
  disclaimer: string;
}

export interface HappyProgramMechanic {
  id: string;
  label: string;
  description: string;
  progress: number; // 0-100
  target: string;
}

export interface LoyaltyStatus {
  rank: HappyProgramRank;
  nextRank: HappyProgramRank;
  progressToNext: number; // 0-100
  monthlyActivitiesCounted: number;
  monthlyActivitiesTarget: number;
  benefits: LoyaltyBenefit[];
  mechanics: HappyProgramMechanic[];
}

export interface LoyaltyBenefit {
  id: string;
  label: string;
  detail: string;
  available: boolean;
  icon: string;
}

export interface Campaign {
  id: string;
  name: string;
  channel: string;
  audience: string;
  status: 'live' | 'draft' | 'scheduled';
  dyExperienceId: string;
}

export interface Recommendation {
  id: string;
  productId: string;
  reason: string;
}

export type SignalCategory = 'behaviour' | 'context' | 'membership' | 'intent';

export interface Signal {
  id: string;
  label: string;
  detail: string;
  category: SignalCategory;
  icon: string;
  /** Weight contributed to the winning decision (illustrative). */
  weight: number;
}

export interface Guardrail {
  id: string;
  label: string;
  detail: string;
  /** Whether the guardrail passes for the current persona. */
  passes: (persona: PersonaState) => boolean;
}

export interface RankedOffer {
  offer: Offer;
  score: number;
  reasons: string[];
}

export interface RecapMetric {
  id: string;
  label: string;
  value: string;
  caption: string;
  icon: string;
  accent: 'red' | 'orange' | 'green' | 'amber';
}

export interface AppNotification {
  id: string;
  title: string;
  body: string;
  time: string;
  icon: string;
}

export interface Settings {
  appName: string;
  tagline: string;
  poweredBy: string;
  currency: string;
  disclaimers: {
    illustrative: string;
    programmeRules: string;
    pointsTiming: string;
    mastercard: string;
  };
}

export interface Chapter {
  id: number;
  key: string;
  title: string;
  copy: string;
  /** Icon shown in the presenter stepper. */
  icon: string;
}
