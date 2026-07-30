import { Screen } from './Screen';
import { MonthlyRecap } from '@/components/recap/MonthlyRecap';

/** Chapter 6 — Monthly recap. */
export function RecapScreen() {
  return (
    <Screen chapterId={6}>
      <MonthlyRecap />
    </Screen>
  );
}
