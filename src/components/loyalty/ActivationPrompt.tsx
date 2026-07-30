import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDemo } from '@/app/DemoContext';
import { Card, Disclaimer } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { settings } from '@/mock-data/settings';

/**
 * Simulated Rakuten member linking flow with idle -> linking -> done states.
 * No real registration or API call occurs.
 */
export function ActivationPrompt() {
  const { isLinked, activate, goToChapter } = useDemo();
  const [state, setState] = useState<'confirm' | 'review' | 'linking' | 'done'>(
    isLinked ? 'done' : 'confirm',
  );

  const completeLink = () => {
    setState('linking');
    window.setTimeout(() => {
      setState('done');
    }, 1400);
  };

  const linked = state === 'done' || isLinked;

  return (
    <Card className="p-5">
      <div className="mb-3 flex flex-col items-center text-center">
        <span className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary-fixed">
          <Icon name="link" filled className="text-[30px] text-primary" />
        </span>
        <p className="font-heading text-xl font-bold text-on-surface">
          Unlock personalised loyalty benefits
        </p>
        <p className="mt-1 text-sm text-on-surface-variant">It only takes a moment to complete setup.</p>
      </div>

      <AnimatePresence mode="wait">
        {state === 'confirm' && !linked && (
          <motion.div key="confirm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="rounded-xl bg-surface-container-low p-3">
              <p className="text-xs font-semibold text-on-surface-variant">Step 1 of 3</p>
              <p className="mt-1 font-heading text-sm font-bold text-on-surface">
                Link your Rakuten member account
              </p>
              <p className="mt-1 text-xs text-on-surface-variant">
                Connect your account to access personalised loyalty benefits.
              </p>
            </div>
            <Button fullWidth size="lg" className="mt-3" onClick={() => setState('review')}>
              Confirm account
            </Button>
          </motion.div>
        )}

        {state === 'review' && !linked && (
          <motion.div key="review" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="rounded-xl bg-surface-container-low p-3">
              <p className="text-xs font-semibold text-on-surface-variant">Step 2 of 3</p>
              <p className="mt-1 font-heading text-sm font-bold text-on-surface">Review setup</p>
              <p className="mt-1 text-xs text-on-surface-variant">
                Happy Program entry requires Rakuten Member Link Registration, linking Rakuten
                Bank account information with Rakuten member information.
              </p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Button variant="outline" fullWidth size="md" onClick={() => setState('confirm')}>
                Back
              </Button>
              <Button fullWidth size="md" onClick={completeLink}>
                Review and continue
              </Button>
            </div>
          </motion.div>
        )}

        {state === 'linking' && (
          <motion.div
            key="linking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-3 rounded-xl bg-surface-container-low py-4"
          >
            <motion.span
              className="inline-block h-5 w-5 rounded-full border-2 border-primary border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
              aria-hidden
            />
            <span className="text-sm font-semibold text-on-surface">Completing setup…</span>
          </motion.div>
        )}

        {linked && state !== 'linking' && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-3 rounded-xl bg-success/10 p-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-success text-white">
                <Icon name="check" className="text-lg" />
              </span>
              <div>
                <p className="font-heading text-sm font-bold text-success">Account linked</p>
                <p className="text-xs text-on-surface-variant">Personalised loyalty benefits are ready.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                fullWidth
                size="md"
                onClick={() => {
                  activate();
                  window.setTimeout(() => goToChapter(1), 0);
                }}
              >
                Return home
              </Button>
              <Button
                fullWidth
                size="md"
                onClick={() => {
                  activate();
                  window.setTimeout(() => goToChapter(2), 0);
                }}
              >
                Explore benefits
              </Button>
            </div>
          </motion.div>
        )}

        {!linked && state !== 'confirm' && state !== 'review' && state !== 'linking' && (
          <motion.div key="fallback" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Button fullWidth size="lg" onClick={() => setState('confirm')} aria-label="Link Rakuten member account">
              Link account
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <Disclaimer className="mt-4">{settings.disclaimers.programmeRules}</Disclaimer>
    </Card>
  );
}
