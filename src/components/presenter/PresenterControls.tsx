import { useDemo } from '@/app/DemoContext';
import { DemoChapterStepper } from './DemoChapterStepper';
import { Button } from '@/components/ui/Button';
import { cn } from '@/hooks/utils';

const personaModes = [
  {
    key: 'notLinked' as const,
    label: 'Without DY',
    detail: 'No link · no personalisation',
  },
  {
    key: 'linked' as const,
    label: 'With DY',
    detail: 'Linked · full personalisation',
  },
  {
    key: 'underEngaged' as const,
    label: 'Re-engagement',
    detail: 'Linked · re-engagement offer wins',
  },
];

/** The presenter control panel used on desktop side rail and mobile sheet. */
export function PresenterControls({ onClose }: { onClose?: () => void }) {
  const { toggleBehind, nextChapter, prevChapter, resetDemo, persona, setPersona } = useDemo();

  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto p-5 no-scrollbar">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-rakuten-red">
            Presenter mode
          </p>
          <h2 className="text-lg font-extrabold text-ink">Demo controls</h2>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close presenter controls"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.06] text-ink"
          >
            ✕
          </button>
        )}
      </div>

      {/* Persona / DY mode switcher */}
      <div>
        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-muted">Persona / DY mode</p>
        <div className="flex flex-col gap-1.5">
          {personaModes.map((m) => {
            const active = persona === m.key;
            return (
              <button
                key={m.key}
                type="button"
                onClick={() => setPersona(m.key)}
                aria-pressed={active}
                className={cn(
                  'flex items-center justify-between rounded-xl px-3 py-2 text-left transition-colors',
                  active ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-black/[0.03]',
                )}
              >
                <span className="text-xs font-bold">{m.label}</span>
                <span className={cn('text-[10px]', active ? 'text-white/60' : 'text-muted')}>{m.detail}</span>
              </button>
            );
          })}
        </div>
      </div>

      <DemoChapterStepper />

      <div className="grid grid-cols-2 gap-1.5">
        <Button variant="outline" size="sm" onClick={prevChapter} aria-label="Previous step">
          ← Prev
        </Button>
        <Button variant="outline" size="sm" onClick={nextChapter} aria-label="Next step">
          Next →
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-1.5">
        <Button variant="primary" size="sm" onClick={toggleBehind}>
          Reasoning
        </Button>
      </div>

      <Button variant="outline" size="sm" fullWidth onClick={resetDemo} aria-label="Reset demo to start">
        ↺ Reset demo
      </Button>
    </div>
  );
}
