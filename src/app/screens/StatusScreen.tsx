import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDemo } from '@/app/DemoContext';
import { Screen } from './Screen';
import { LoyaltyStatusCard } from '@/components/loyalty/LoyaltyStatusCard';
import { CardFace } from '@/components/loyalty/CardFace';
import { SearchBar } from '@/components/shopping/SearchBar';
import { Icon } from '@/components/ui/Icon';
import { Disclaimer } from '@/components/ui/Card';
import { settings } from '@/mock-data/settings';
import { notifications } from '@/mock-data/notifications';

/** Placeholder slots for the home offers grid (real offers added later). */
const offerSlots = [1, 2, 3, 4];

/** Chapter 1 — Home / loyalty overview. */
export function StatusScreen() {
  const { user, goToChapter, appUser, appUserProfile, openWhy } = useDemo();
  const [query, setQuery] = useState('');
  const [notifDismissed, setNotifDismissed] = useState(false);
  const topNotif = notifications[0];
  const { offer } = appUserProfile;

  return (
    <Screen chapterId={1}>
      <div className="flex flex-col gap-6 pt-2">

        {/* Spend-triggered notification banner */}
        {!notifDismissed && (
          <div className="relative -mx-4 -mt-2 mb-0 flex items-start gap-3 bg-primary px-4 py-3 text-white">
            <span className="mt-0.5 text-xl" aria-hidden>{topNotif.icon}</span>
            <button
              type="button"
              className="min-w-0 flex-1 text-left"
              onClick={() => { setNotifDismissed(true); goToChapter(3); }}
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
              See personalised benefits available for you.
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
              {user.pointsBalance.toLocaleString()}
            </span>
            <span className="font-heading text-sm font-bold">Points</span>
          </div>
        </motion.section>

        {/* Loyalty status card */}
        <LoyaltyStatusCard />

        {/* Spending Insight card */}
        <section className="rounded-2xl border border-surface-container-high bg-surface-container-lowest p-4 shadow-card">
          <p className="text-[11px] font-bold uppercase tracking-wide text-muted">Spending Insight</p>
          <p className="mt-1.5 text-sm leading-relaxed text-on-surface">
            Your recent activity can unlock more this month, including points boosts and member-only offers tailored to your card usage.
          </p>
          <button
            type="button"
            onClick={() => goToChapter(3)}
            className="mt-3 flex items-center gap-1 text-xs font-bold text-primary"
          >
            Explore your member benefits
            <Icon name="arrow_forward" className="text-sm" />
          </button>
        </section>

        {/* Offers grid — 2x2 placeholder layout (complements the main offer's category) */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-base font-bold text-on-surface">
              Offers for you
            </h3>
            <span className="text-[11px] font-semibold text-on-surface-variant">
              {offer.category} · App user {appUser}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {offerSlots.map((slot) => (
              <div
                key={slot}
                className="flex aspect-square flex-col justify-between rounded-2xl border border-dashed border-outline-variant bg-surface-container-low p-3"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container-high">
                    <Icon name="local_offer" className="text-on-surface-variant" />
                  </span>
                  <span className="rounded-full bg-surface-container-high px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-on-surface-variant">
                    Soon
                  </span>
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-on-surface">
                    Offer slot {slot}
                  </p>
                  <p className="text-[11px] text-on-surface-variant">{offer.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended for you — the main targeted offer for this app user */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-base font-bold text-on-surface">
              Recommended for you
            </h3>
            <button
              type="button"
              onClick={() => goToChapter(2)}
              className="text-sm font-semibold text-primary"
            >
              See All
            </button>
          </div>

          <div className="group relative w-full overflow-hidden rounded-2xl text-left shadow-card">
            <img
              src={offer.image}
              alt={offer.merchant}
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Full-card tap target opens the "Why shown now" panel */}
            <button
              type="button"
              onClick={openWhy}
              className="absolute inset-0 z-10"
              aria-label="Why is this shown now?"
            />

            {/* Top-left: merchant badge */}
            <div className="absolute left-3 top-3 z-20">
              <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-ink backdrop-blur-sm">
                Merchant partner offer
              </span>
            </div>

            {/* Top-right: offer type pill */}
            <div className="absolute right-3 top-3 z-20">
              <span className="flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                {offer.type}
              </span>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 z-20 w-full text-white">
              <div className="absolute inset-0 rounded-b-2xl bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="relative p-4">
                {/* Logo row */}
                <div className="mb-2 flex items-center gap-2">
                  {offer.logo && (
                    <img
                      src={offer.logo}
                      alt={offer.merchant}
                      className="h-5 w-auto rounded object-contain"
                    />
                  )}
                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide backdrop-blur-sm">
                    Rakuten Card · Mastercard
                  </span>
                </div>

                <h4 className="font-heading text-base font-bold leading-tight">
                  {offer.headline}
                </h4>
                <p className="mt-0.5 text-xs opacity-80">{offer.subtitle}</p>

                {/* Actions */}
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); goToChapter(3); }}
                    className="relative z-30 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-ink"
                  >
                    {offer.cta}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); openWhy(); }}
                    className="relative z-30 flex items-center gap-1 rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-semibold backdrop-blur-sm"
                  >
                    <Icon name="info" className="text-xs" />
                    Why shown now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Active benefits + Trends — moved to bottom of page */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => goToChapter(6)}
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
            onClick={() => goToChapter(5)}
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

        <Disclaimer>{settings.disclaimers.illustrative}</Disclaimer>
      </div>
    </Screen>
  );
}
