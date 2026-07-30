import { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDemo } from '@/app/DemoContext';
import { drawerVariants } from '@/animations/variants';
import { SignalTimeline } from '@/components/decision-theatre/SignalTimeline';
import { ValuePool } from '@/components/decision-theatre/ValuePool';
import { GuardrailChecklist } from '@/components/decision-theatre/GuardrailChecklist';
import { RankingBoard } from '@/components/decision-theatre/RankingBoard';
import { Button } from '@/components/ui/Button';
import { Disclaimer } from '@/components/ui/Card';
import { winningOffer } from '@/services/decisionEngine';
import { settings } from '@/mock-data/settings';

/**
 * "Reasoning" decisioning view. This is the ONLY place
 * the orchestration story (signals, value pool, guardrails, ranking) is shown.
 * It never appears in the customer-facing app screens.
 */
export function BehindTheScenes() {
  const { behindOpen, setBehindOpen, replayDecision, replayToken, persona } = useDemo();
  const winner = useMemo(() => winningOffer(persona), [persona]);

  return (
    <AnimatePresence>
      {behindOpen && (
        <div className="fixed inset-0 z-[70] flex items-stretch justify-end">
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setBehindOpen(false)}
            aria-hidden
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Reasoning decisioning"
            variants={drawerVariants}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex h-full w-full max-w-md flex-col bg-canvas shadow-float"
          >
            <header className="flex items-center justify-between border-b border-black/5 bg-ink px-5 py-4 text-white">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-white/60">
                  Reasoning details
                </p>
                <h2 className="text-lg font-extrabold">Reasoning</h2>
              </div>
              <button
                type="button"
                onClick={() => setBehindOpen(false)}
                aria-label="Close reasoning"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white"
              >
                ✕
              </button>
            </header>

            <div className="flex-1 space-y-6 overflow-y-auto p-5 no-scrollbar">
              <section>
                <SectionTitle step="1" title="Understanding Hanako's moment" />
                <p className="mb-3 text-xs text-muted">
                  Safe, approved signals only — no sensitive payment or PCI data.
                </p>
                <SignalTimeline replayKey={replayToken} />
              </section>

              <section>
                <SectionTitle step="2" title="Checking eligible loyalty value" />
                <ValuePool replayKey={replayToken} />
              </section>

              <section>
                <SectionTitle step="3" title="Guardrails — only usable value appears" />
                <GuardrailChecklist replayKey={replayToken} />
              </section>

              <section>
                <SectionTitle step="4" title="Ranking the next best action" />
                <RankingBoard replayKey={replayToken} />
                <div className="mt-3 flex items-start gap-2 rounded-2xl brand-gradient-soft p-3">
                  <span aria-hidden>💡</span>
                  <p className="text-[11px] leading-snug text-ink">
                    <span className="font-bold">Winning action:</span> {winner.offer.title} —
                    selected because Hanako's recent activity suggests a home setup moment.
                  </p>
                </div>
              </section>

              <Button variant="secondary" fullWidth onClick={replayDecision}>
                ↻ Replay decisioning
              </Button>

              <Disclaimer>
                {settings.disclaimers.illustrative} {settings.disclaimers.programmeRules}
              </Disclaimer>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

function SectionTitle({ step, title }: { step: string; title: string }) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-lg brand-gradient text-[11px] font-black text-white">
        {step}
      </span>
      <h3 className="text-sm font-extrabold text-ink">{title}</h3>
    </div>
  );
}
