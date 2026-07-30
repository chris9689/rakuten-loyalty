import { useDemo } from '@/app/DemoContext';
import { Screen } from './Screen';
import { ActivationPrompt } from '@/components/loyalty/ActivationPrompt';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { media } from '@/mock-data/media';

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
  const { isLinked, loyalty, goToChapter } = useDemo();

  if (!isLinked) {
    return (
      <Screen chapterId={2}>
        <div className="flex flex-col gap-5 pt-4">
          <ActivationPrompt />
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
            Personalised loyalty benefits are ready
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

        <button
          type="button"
          onClick={() => goToChapter(3)}
          className="relative aspect-[16/9] overflow-hidden rounded-2xl text-left shadow-card"
        >
          <img src={media.heroLiving} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 p-4 text-white">
            <span className="mb-1 inline-block rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest">
              Member Exclusive
            </span>
            <h4 className="font-heading text-lg font-bold">Explore the Premium Collection</h4>
          </div>
        </button>

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
