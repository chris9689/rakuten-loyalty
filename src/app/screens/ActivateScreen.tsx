import { useDemo } from '@/app/DemoContext';
import { Screen } from './Screen';
import { ActivationPrompt } from '@/components/loyalty/ActivationPrompt';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
const benefitRows = [
  {
    icon: 'local_shipping',
    title: 'Free shipping on next order',
    detail: 'Valid for any marketplace purchase over ¥3,000.',
  },
  {
    icon: 'credit_card',
    title: '5% points back on electronics',
    detail: 'Exclusive member-only rate for high-tech category.',
  },
];

/** Chapter 2 — Activation / linked status. */
export function ActivateScreen() {
  const { isLinked, loyalty, goToChapter, persona } = useDemo();

  if (!isLinked) {
    return (
      <Screen chapterId={2}>
        <div className="flex flex-col gap-5 pt-4">
          <ActivationPrompt />
        </div>
      </Screen>
    );
  }

  // Under-engaged: re-engagement journey
  if (persona === 'underEngaged') {
    return (
      <Screen chapterId={2}>
        <div className="flex flex-col gap-5 pt-4">
          <div className="flex flex-col items-center text-center">
            <span className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-tertiary-fixed">
              <Icon name="refresh" filled className="text-[32px] text-tertiary-container" />
            </span>
            <h2 className="font-heading text-2xl font-bold text-on-surface">Let's pick up where you left off</h2>
            <p className="mt-1 text-sm text-on-surface-variant">
              Your spending insights show an opportunity to re-engage this month.
            </p>
          </div>

          <div className="rounded-2xl border border-surface-container-high bg-surface-container-lowest p-5 shadow-card">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant">
              Your re-engagement goal
            </p>
            <div className="mt-1 flex items-center justify-between">
              <p className="font-heading text-xl font-bold text-primary">
                {loyalty.progressToNext}% toward Premium
              </p>
              <Icon name="flag" filled className="text-tertiary-container" />
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-surface-container-highest">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${loyalty.progressToNext}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-on-surface-variant">
              3 more qualifying activities this month to reach Premium and unlock bonus points.
            </p>
          </div>

          <div className="rounded-2xl border border-surface-container-high bg-surface-container-lowest p-4 shadow-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-tertiary-fixed">
              <Icon name="target" filled className="text-tertiary-container" />
            </span>
            <p className="mt-3 font-heading text-sm font-bold text-on-surface">Complete your monthly activity target</p>
            <p className="text-sm text-on-surface-variant">
              Each qualifying spend with your Rakuten Card counts toward Premium status and unlocks personalised rewards.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Button size="lg" fullWidth onClick={() => goToChapter(3)}>
              Start Shopping Now
              <Icon name="arrow_forward" className="text-lg" />
            </Button>
            <Button variant="outline" size="md" fullWidth onClick={() => goToChapter(6)}>
              View My Progress
            </Button>
          </div>
        </div>
      </Screen>
    );
  }

  return (
    <Screen chapterId={2}>
      <div className="flex flex-col gap-5 pt-4">
        <div className="flex flex-col items-center text-center">
          <span className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary-fixed">
            <Icon name="verified" filled className="text-[32px] text-primary" />
          </span>
          <h2 className="font-heading text-2xl font-bold text-on-surface">Your account is linked</h2>
          <p className="mt-1 text-sm text-on-surface-variant">
            Your spending insights are now shaping your rewards experience.
          </p>
        </div>

        <div className="rounded-2xl border border-surface-container-high bg-surface-container-lowest p-5 shadow-card">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant">
            Next reward
          </p>
          <div className="mt-1 flex items-center justify-between">
            <p className="font-heading text-xl font-bold text-primary">
              {loyalty.progressToNext}% toward your next reward
            </p>
            <Icon name="military_tech" filled className="text-tertiary-container" />
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-surface-container-highest">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${loyalty.progressToNext}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-on-surface-variant">
            Only 4 more qualifying transactions to reach VIP status.
          </p>
        </div>

        {benefitRows.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl border border-surface-container-high bg-surface-container-lowest p-4 shadow-card"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-fixed">
              <Icon name={b.icon} filled className="text-primary" />
            </span>
            <p className="mt-3 font-heading text-sm font-bold text-on-surface">{b.title}</p>
            <p className="text-sm text-on-surface-variant">{b.detail}</p>
          </div>
        ))}

        {/* Merchant offer teasers */}
        <div className="grid grid-cols-3 gap-3">
          {/* Expedia */}
          <button
            type="button"
            onClick={() => goToChapter(3)}
            className="group relative overflow-hidden rounded-2xl shadow-card"
          >
            <img src="/pickup_expedia-hotel.jpg" alt="Expedia" className="aspect-[1/1.2] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 w-full p-2.5 text-center text-white">
              <img src="/logo_280x60_expedia.hotels.jp.png" alt="Expedia" className="mx-auto h-4 w-auto mb-1" />
              <p className="text-[10px] font-bold leading-tight">Hotel Deals</p>
            </div>
          </button>

          {/* Spring Japan */}
          <button
            type="button"
            onClick={() => goToChapter(3)}
            className="group relative overflow-hidden rounded-2xl shadow-card"
          >
            <img src="/pickup_springjapan.jpg" alt="Spring Japan" className="aspect-[1/1.2] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 w-full p-2.5 text-center text-white">
              <p className="text-[10px] font-bold leading-tight">Spring Japan</p>
              <p className="text-[9px] opacity-75">Travel Rewards</p>
            </div>
          </button>

          {/* Uniqlo */}
          <button
            type="button"
            onClick={() => goToChapter(3)}
            className="group relative overflow-hidden rounded-2xl shadow-card"
          >
            <img src="/pickup_uniqlo.png" alt="Uniqlo" className="aspect-[1/1.2] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 w-full p-2.5 text-center text-white">
              <img src="/logo_280x60_uniqlo.com.png" alt="Uniqlo" className="mx-auto h-4 w-auto mb-1" />
              <p className="text-[10px] font-bold leading-tight">Fashion & Basics</p>
            </div>
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <Button size="lg" fullWidth onClick={() => goToChapter(3)}>
            Start Shopping Now
            <Icon name="arrow_forward" className="text-lg" />
          </Button>
          <Button variant="outline" size="md" fullWidth onClick={() => goToChapter(4)}>
            View All Member Benefits
          </Button>
        </div>
      </div>
    </Screen>
  );
}
