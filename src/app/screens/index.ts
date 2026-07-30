import type { ComponentType } from 'react';
import { StatusScreen } from './StatusScreen';
import { ActivateScreen } from './ActivateScreen';
import { BrowseScreen } from './BrowseScreen';
import { OfferScreen } from './OfferScreen';
import { PointsScreen } from './PointsScreen';
import { RecapScreen } from './RecapScreen';
import { SavedBenefitsScreen } from './SavedBenefitsScreen';

/** Maps a customer-facing chapter id (1-6) to its screen component. */
export const screenByChapter: Record<number, ComponentType> = {
  1: StatusScreen,
  2: ActivateScreen,
  3: BrowseScreen,
  4: OfferScreen,
  5: PointsScreen,
  6: RecapScreen,
  7: SavedBenefitsScreen,
};
