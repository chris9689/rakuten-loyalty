import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemo } from '@/app/DemoContext';
import { Screen } from './Screen';
import { LoyaltyStatusCard } from '@/components/loyalty/LoyaltyStatusCard';
import { CardFace } from '@/components/loyalty/CardFace';
import { SearchBar } from '@/components/shopping/SearchBar';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { Disclaimer } from '@/components/ui/Card';
import { settings } from '@/mock-data/settings';
import { notifications } from '@/mock-data/notifications';
import { cn } from '@/hooks/utils';

const bankingActions = [
  { icon: 'swap_horiz', label: 'Transfer', tint: 'bg-primary-fixed', color: 'text-primary' },
  { icon: 'receipt_long', label: 'Pay bills', tint: 'bg-secondary-fixed', color: 'text-secondary' },
  { icon: 'article', label: 'Statement', tint: 'bg-surface-container-high', color: 'text-on-surface-variant' },
  { icon: 'settings', label: 'Card settings', tint: 'bg-surface-container-high', color: 'text-on-surface-variant' },
];

/** Chapter 1 — Home / loyalty overview. */
export function StatusScreen() {
  const { isLinked, user, goToChapter, persona } = useDemo();
  const [query, setQuery] = useState('');
  const [notifDismissed, setNotifDismissed] = useState(false);
  const [offerVariant, setOfferVariant] = useState<'points' | 'discount'>('points');
  const topNotif = notifications[0];

  return (
    <Screen chapterId={1}>
      <div className="flex flex-col gap-6 pt-2">

        {/* Spend-triggered notification banner — linked only */}
        {isLinked && !notifDismissed && (
          <div className="relative -mx-4 -mt-2 mb-0 flex items-start gap-3 bg-primary px-4 py-3 text-white">
            <span className="mt-0.5 text-xl" aria-hidden>{topNotif.icon}</span>
            <button
              type="button"
              className="min-w-0 flex-1 text-left"
              onClick={() => { setNotifDismissed(true); goToChapter(4); }}
            >
              <p className="font-heading text-sm font-bold">{topNotif.title}</p>
              <p className="text-xs opacity-90">{topNotif.body}</p>
            </button>
            <button
              type="button"
              onClick={() => setNotifDismissed(true)}
              className="mt-0.5 shrink-0 opacity-70 hover:opacity-100"
              aria-label="Dismiss notification"
            >
              ✕
            </button>
          </div>
        )}


        {/* Greeting */}
        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="font-heading text-sm font-semibold text-secondary">
              Good morning, {user.name.split(' ')[0]}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-on-surface">
              Welcome back.
            </h2>
            <p className="text-sm text-on-surface-variant">
              {isLinked ? 'See personalised benefits available for you.' : 'Manage your Rakuten Card.'}
            </p>
          </div>
          <SearchBar value={query} onChange={setQuery} placeholder="Search Rakuten" />
        </section>

        {/* Points balance card */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="points-card relative flex flex-col gap-2 overflow-hidden rounded-2xl p-5 text-white shadow-sm"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-[11px] font-medium uppercase tracking-widest opacity-90">
              Available balance
            </p>
            <CardFace name={user.name} compact className="w-24 shrink-0 shadow-md ring-1 ring-white/30" />
          </div>
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-heading text-3xl font-bold">
              {isLinked ? user.pointsBalance.toLocaleString() : '—'}
            </span>
            <span className="font-heading text-sm font-bold">Points</span>
          </div>
        </motion.section>

        {/* Combined spending summary + link CTA — unlinked only */}
        {!isLinked && (
          <section className="rounded-2xl border border-surface-container-high bg-surface-container-lowest p-4 shadow-card">
            <p className="text-[11px] font-bold uppercase tracking-wide text-muted">Spending Summary</p>
            <p className="mt-1.5 text-sm leading-relaxed text-on-surface">
              Your recent eligible card activity is around <span className="font-bold">¥42,000</span>. Join Rakuten Points to start earning and unlock personalised rewards.
            </p>
            <button
              type="button"
              onClick={() => goToChapter(2)}
              className="mt-3 flex items-center gap-1 text-xs font-bold text-primary"
            >
              Join now to start earning points
              <Icon name="arrow_forward" className="text-sm" />
            </button>
          </section>
        )}

        {/* Loyalty status card — linked only */}
        {isLinked && <LoyaltyStatusCard />}

        {/* Spending Insight card — linked only, moved after loyalty status */}
        {isLinked && (
          <section className="rounded-2xl border border-surface-container-high bg-surface-container-lowest p-4 shadow-card">
            <p className="text-[11px] font-bold uppercase tracking-wide text-muted">Spending Insight</p>
            <p className="mt-1.5 text-sm leading-relaxed text-on-surface">
              Your recent activity can unlock more this month, including points boosts and member-only offers tailored to your card usage.
            </p>
            <button
              type="button"
              onClick={() => goToChapter(4)}
              className="mt-3 flex items-center gap-1 text-xs font-bold text-primary"
            >
              Explore your member benefits
              <Icon name="arrow_forward" className="text-sm" />
            </button>
          </section>
        )}

        {/* Bento grid: linked = benefits + trend / unlinked = trend + quick actions */}
        {isLinked ? (
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => goToChapter(2)}
              className="flex flex-col gap-3 rounded-2xl border border-surface-container-high bg-surface-container-lowest p-4 text-left shadow-card transition-transform active:scale-95"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-fixed">
                <Icon name="card_giftcard" filled className="text-secondary" />
              </span>
              <div>
                <p className="font-heading text-xl font-bold text-on-surface">3</p>
                <p className="text-[11px] text-on-surface-variant">active benefits available</p>
              </div>
              <span className="flex items-center gap-1 text-primary">
                <span className="text-[11px] font-semibold">View all</span>
                <Icon name="chevron_right" className="text-sm" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => goToChapter(6)}
              className="flex flex-col gap-3 rounded-2xl border border-surface-container-high bg-surface-container-lowest p-4 text-left shadow-card transition-transform active:scale-95"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-high">
                <Icon name="trending_up" filled className="text-on-surface-variant" />
              </span>
              <div>
                <p className="font-heading text-xl font-bold text-on-surface">+12%</p>
                <p className="text-[11px] text-on-surface-variant">vs. last month</p>
              </div>
              <span className="flex items-center gap-1 text-on-surface-variant">
                <span className="text-[11px] font-semibold">Trends</span>
                <Icon name="show_chart" className="text-sm" />
              </span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {/* Spend trend tile */}
            <button
              type="button"
              className="flex items-center gap-4 rounded-2xl border border-surface-container-high bg-surface-container-lowest p-4 text-left shadow-card transition-transform active:scale-95"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container-high">
                <Icon name="trending_up" filled className="text-on-surface-variant" />
              </span>
              <div className="flex-1">
                <p className="font-heading text-xl font-bold text-on-surface">+12%</p>
                <p className="text-[11px] text-on-surface-variant">Total spend vs. last month</p>
              </div>
              <Icon name="chevron_right" className="text-on-surface-variant" />
            </button>

            {/* Banking quick actions */}
            <div className="grid grid-cols-4 gap-2">
              {bankingActions.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  className="flex flex-col items-center gap-2 rounded-2xl bg-surface-container-lowest p-3 shadow-card transition-transform active:scale-95"
                >
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${action.tint}`}>
                    <Icon name={action.icon} filled className={action.color} />
                  </span>
                  <span className="text-center text-[10px] font-semibold leading-tight text-on-surface-variant">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Recommended for you — linked only */}
        {isLinked && (
          <section className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-base font-bold text-on-surface">
                {persona === 'underEngaged' ? 'Your re-engagement offer' : 'Recommended for you'}
              </h3>
              <button
                type="button"
                onClick={() => goToChapter(3)}
                className="text-sm font-semibold text-primary"
              >
                See All
              </button>
            </div>

            {/* Nitori merchant offer — A/B toggle */}
            <button
              type="button"
              onClick={() => setOfferVariant(v => v === 'points' ? 'discount' : 'points')}
              className="group relative w-full overflow-hidden rounded-2xl text-left shadow-card"
              aria-label="Toggle offer variation"
            >
              <img
                src="/nitori_offer_1.jpg"
                alt="Nitori"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top-left: merchant badge */}
              <div className="absolute left-3 top-3">
                <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-ink backdrop-blur-sm">
                  Merchant partner offer
                </span>
              </div>

              {/* Top-right: A/B variant pill */}
              <div className="absolute right-3 top-3">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={offerVariant}
                    initial={{ opacity: 0, y: -4, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.18 }}
                    className={cn(
                      'flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold',
                      offerVariant === 'points'
                        ? 'bg-primary text-white'
                        : 'bg-amber-500 text-white',
                    )}
                  >
                    {offerVariant === 'points' ? '✦ Variation A · Points' : '% Variation B · Discount'}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 w-full text-white">
                {/* Frosted gradient backing for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-b-2xl" />
                <div className="relative p-4">
                {/* Logo row */}
                <div className="mb-2 flex items-center gap-2">
                  <img
                    src="/nitori_logo.jpg"
                    alt="Nitori"
                    className="h-5 w-auto rounded object-contain"
                  />
                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide backdrop-blur-sm">
                    Rakuten Card · Mastercard
                  </span>
                </div>

                {/* Animated offer content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={offerVariant}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-heading text-base font-bold leading-tight">
                      {offerVariant === 'points'
                        ? 'Earn 3× points on every purchase'
                        : '5% off your next visit to Nitori'}
                    </h4>
                    <p className="mt-0.5 text-xs opacity-80">
                      {offerVariant === 'points'
                        ? 'Pay with your Rakuten Card Mastercard in-store or online'
                        : 'Exclusive Rakuten Card Mastercard discount, no minimum spend'}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Swap hint */}
                <div className="mt-2 flex items-center gap-1 opacity-50">
                  <Icon name="swap_horiz" className="text-xs" />
                  <span className="text-[10px]">Tap to switch offer variation</span>
                </div>
                </div>
              </div>
            </button>
          </section>
        )}

        {/* Re-engagement nudge — underEngaged only */}
        {persona === 'underEngaged' && isLinked && (
          <section className="rounded-2xl border border-surface-container-high bg-surface-container-lowest p-4 shadow-card">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-tertiary-fixed">
                <Icon name="flag" filled className="text-tertiary-container text-lg" />
              </span>
              <p className="font-heading text-sm font-bold text-on-surface">Re-engagement opportunity</p>
            </div>
            <p className="text-xs text-on-surface-variant">
              You're 3 activities away from Premium rank. Complete one more qualifying spend this month to unlock bonus points.
            </p>
            <Button className="mt-3" size="sm" fullWidth onClick={() => goToChapter(2)}>
              View your activity offer →
            </Button>
          </section>
        )}

        <Disclaimer>{settings.disclaimers.illustrative}</Disclaimer>
      </div>
    </Screen>
  );
}
