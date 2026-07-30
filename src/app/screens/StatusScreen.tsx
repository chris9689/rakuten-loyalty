import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDemo } from '@/app/DemoContext';
import { Screen } from './Screen';
import { LoyaltyStatusCard } from '@/components/loyalty/LoyaltyStatusCard';
import { CardFace } from '@/components/loyalty/CardFace';
import { SearchBar } from '@/components/shopping/SearchBar';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { Disclaimer } from '@/components/ui/Card';
import { media } from '@/mock-data/media';
import { settings } from '@/mock-data/settings';

/** Chapter 1 — Home / loyalty overview. */
export function StatusScreen() {
  const { isLinked, user, goToChapter } = useDemo();
  const [query, setQuery] = useState('');

  return (
    <Screen chapterId={1}>
      <div className="flex flex-col gap-6 pt-2">
        {/* Greeting */}
        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="font-heading text-sm font-semibold text-secondary">
              Good morning, {user.name.split(' ')[0]}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-on-surface">
              Welcome back.
            </h2>
            <p className="text-sm text-on-surface-variant">See personalised benefits available for you.</p>
          </div>
          <SearchBar value={query} onChange={setQuery} placeholder="Search Rakuten" />
        </section>

        {/* Points balance card with embedded Rakuten Card */}
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
          <div className="mt-1 flex justify-center">
            <span className="flex items-center gap-1 whitespace-nowrap rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium backdrop-blur-md">
              <Icon name="credit_card" className="text-[13px]" /> Rakuten Card •••• 4820
            </span>
          </div>
        </motion.section>

        {!isLinked && (
          <section className="rounded-2xl border border-secondary/30 bg-secondary-fixed/40 p-4">
            <p className="font-heading text-sm font-bold text-on-surface">
              Complete Rakuten Member Link Registration
            </p>
            <p className="mt-1 text-xs text-on-surface-variant">
              Happy Program entry requires Rakuten Member Link Registration, which links
              Rakuten Bank account information with Rakuten member information.
            </p>
            <Button className="mt-3" fullWidth onClick={() => goToChapter(2)}>
              Link now to continue
            </Button>
          </section>
        )}

        <LoyaltyStatusCard />

        {/* Bento: benefits + trends */}
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

        {/* Recommended for your home */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-base font-bold text-on-surface">
              {isLinked ? 'Recommended for your home' : 'Preview once you link'}
            </h3>
            <button
              type="button"
              onClick={() => goToChapter(3)}
              className="text-sm font-semibold text-primary"
            >
              See All
            </button>
          </div>
          <button
            type="button"
            onClick={() => goToChapter(4)}
            className="group relative aspect-[16/10] overflow-hidden rounded-2xl text-left shadow-card"
          >
            <img
              src={media.heroLiving}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-5 text-white">
              <div className="flex items-end justify-between">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {isLinked ? 'Loyalty Exclusive' : 'Available after linking'}
                  </span>
                  <h4 className="font-heading text-lg font-bold leading-tight">
                    {isLinked ? 'Elevate Your Living Space' : 'Unlock Home Setup Rewards'}
                  </h4>
                  <p className="text-xs opacity-90">
                    {isLinked
                      ? 'Up to 15,000 points back on furniture'
                      : 'Link first to start earning points on this offer'}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-lg">
                  <Icon name="shopping_bag" />
                </span>
              </div>
            </div>
          </button>
        </section>

        {!isLinked && (
          <Button size="lg" fullWidth onClick={() => goToChapter(2)}>
            Unlock personalised benefits
          </Button>
        )}

        <Disclaimer>{settings.disclaimers.illustrative}</Disclaimer>
      </div>
    </Screen>
  );
}
