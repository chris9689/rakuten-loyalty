import { motion } from 'framer-motion';
import { useDemo } from '@/app/DemoContext';
import { Screen } from './Screen';
import { OfferConfirmation } from '@/components/offers/OfferConfirmation';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Disclaimer } from '@/components/ui/Card';
import { householdOffer } from '@/mock-data/offers';
import { media } from '@/mock-data/media';

const categories = [
  { icon: 'kitchen', tint: 'bg-primary-fixed', color: 'text-primary', title: 'Home Appliances', detail: 'Refrigerators, Ovens & Cookware' },
  { icon: 'tv', tint: 'bg-tertiary-fixed', color: 'text-tertiary-container', title: 'Televisions', detail: '4K Smart TVs & OLED Displays' },
  { icon: 'light', tint: 'bg-surface-container-high', color: 'text-on-surface-variant', title: 'Lighting', detail: 'Designer Lamps & Smart Systems' },
];

/**
 * Chapter 4 — Contextual in-app offer.
 * Reads as a normal consumer offer page. No decisioning language is shown.
 */
export function OfferScreen() {
  const { goToChapter, offerAccepted, acceptOffer, resetOffer } = useDemo();

  return (
    <Screen chapterId={4}>
      <div className="flex flex-col gap-5 pt-2">
        {/* Contextual offer card */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-2xl border border-surface-container-high bg-surface-container-lowest shadow-card"
        >
          <div className="relative">
            <img src={media.heroKitchen} alt="" className="aspect-[16/9] w-full object-cover" />
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-ink backdrop-blur-sm">
              Merchant partner offer
            </span>
            <span className="absolute bottom-3 left-3 rounded-full bg-secondary-container px-3 py-1 text-[11px] font-bold text-on-secondary-container">
              Exclusive offer
            </span>
            <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-float">
              <Icon name="auto_awesome" filled />
            </span>
          </div>
          <div className="p-5">
            <h3 className="font-heading text-xl font-bold text-on-surface">
              Complete your new home setup
            </h3>
            <p className="mt-1 text-sm text-on-surface-variant">
              Explore selected household value available with your Rakuten Card. Use your Rakuten
              Card at checkout to access eligible value.
            </p>

            <div className="mt-4 flex items-center gap-3 rounded-xl bg-surface-container-low p-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-container">
                <Icon name="card_giftcard" filled className="text-on-secondary-container" />
              </span>
              <div>
                <p className="font-heading text-sm font-bold text-primary">Earn 5,000 points</p>
                <p className="text-xs text-on-surface-variant">On selected household purchases</p>
              </div>
            </div>

            <Button fullWidth size="lg" className="mt-4" onClick={acceptOffer}>
              Save offer
            </Button>
            <button
              type="button"
              onClick={() => goToChapter(3)}
              className="mt-2 flex w-full items-center justify-center gap-2 py-2 font-heading text-sm font-bold text-on-surface"
            >
              <Icon name="shopping_bag" className="text-lg" />
              Continue shopping
            </button>
          </div>
        </motion.section>

        {/* Eligible household categories */}
        <section>
          <h3 className="mb-3 font-heading text-lg font-bold text-on-surface">
            Eligible household categories
          </h3>
          <div className="flex flex-col gap-3">
            {categories.map((c) => (
              <button
                key={c.title}
                type="button"
                onClick={acceptOffer}
                className="flex items-center gap-3 rounded-2xl border border-surface-container-high bg-surface-container-lowest p-3.5 text-left shadow-card"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-lg ${c.tint}`}>
                  <Icon name={c.icon} filled className={c.color} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-heading text-sm font-bold text-on-surface">{c.title}</p>
                  <p className="text-xs text-on-surface-variant">{c.detail}</p>
                </div>
                <Icon name="chevron_right" className="text-on-surface-variant" />
              </button>
            ))}
          </div>
        </section>

        <div className="rounded-xl border border-dashed border-outline-variant bg-surface-container-low p-3">
          <Disclaimer className="italic">
            Offer availability and benefits are subject to programme rules. {householdOffer.disclaimer}
          </Disclaimer>
        </div>

        <Button variant="outline" fullWidth onClick={() => goToChapter(5)}>
          Continue
        </Button>
      </div>

      <OfferConfirmation
        open={offerAccepted}
        onContinueShopping={() => {
          resetOffer();
          goToChapter(3);
        }}
        onViewSavedBenefits={() => {
          resetOffer();
          goToChapter(7);
        }}
        title={householdOffer.title}
      />
    </Screen>
  );
}
