import { useMemo } from 'react';
import { useDemo } from '@/app/DemoContext';
import { Drawer } from '@/components/ui/Drawer';
import { Disclaimer } from '@/components/ui/Card';
import { winningOffer } from '@/services/decisionEngine';
import { signals } from '@/mock-data/analytics';
import { guardrails } from '@/mock-data/analytics';
import { settings } from '@/mock-data/settings';

/**
 * Explains the decision: which signals contributed, which guardrails passed,
 * and why the winning offer was selected. Toggled by presenter or "E" key.
 */
export function DecisionExplanationDrawer() {
  const { explanationOpen, setExplanationOpen, persona } = useDemo();
  const winner = useMemo(() => winningOffer(persona), [persona]);

  return (
    <Drawer
      open={explanationOpen}
      onClose={() => setExplanationOpen(false)}
      title="Why this decision?"
    >
      <div className="space-y-4">
        <section>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-rakuten-red">
            Winning action
          </p>
          <div className="flex items-center gap-3 rounded-2xl bg-canvas p-3">
            <span className="text-2xl" aria-hidden>
              {winner.offer.emoji}
            </span>
            <div>
              <p className="text-sm font-bold text-ink">{winner.offer.title}</p>
              <p className="text-xs text-muted">Score {winner.score} / 100 · illustrative</p>
            </div>
          </div>
          {winner.reasons.length > 0 && (
            <ul className="mt-2 space-y-1">
              {winner.reasons.map((r) => (
                <li key={r} className="flex items-start gap-2 text-xs text-ink">
                  <span className="text-success" aria-hidden>
                    ✓
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-rakuten-red">
            Contributing signals
          </p>
          <ul className="space-y-1">
            {signals.map((s) => (
              <li key={s.id} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-ink">
                  <span aria-hidden>{s.icon}</span>
                  {s.label}
                </span>
                <span className="font-bold text-muted">+{s.weight}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-rakuten-red">
            Guardrails
          </p>
          <ul className="space-y-1">
            {guardrails.map((g) => {
              const passes = g.passes(persona);
              return (
                <li key={g.id} className="flex items-center justify-between text-xs">
                  <span className="text-ink">{g.label}</span>
                  <span className={passes ? 'font-bold text-success' : 'font-bold text-warning'}>
                    {passes ? 'Pass' : 'Blocked'}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>

        <Disclaimer>
          {settings.disclaimers.illustrative} {settings.disclaimers.programmeRules}
        </Disclaimer>
      </div>
    </Drawer>
  );
}
