import { useDemo } from '@/app/DemoContext';
import { DemoChapterStepper } from './DemoChapterStepper';
import { Button } from '@/components/ui/Button';

/** The presenter control panel used on desktop side rail and mobile sheet. */
export function PresenterControls({ onClose }: { onClose?: () => void }) {
  const { toggleExplanation, toggleBehind, nextChapter, prevChapter, resetDemo } = useDemo();

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

      <DemoChapterStepper />

      <div className="grid grid-cols-2 gap-1.5">
        <Button variant="outline" size="sm" onClick={prevChapter} aria-label="Previous step">
          ← Prev
        </Button>
        <Button variant="outline" size="sm" onClick={nextChapter} aria-label="Next step">
          Next →
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        <Button variant="primary" size="sm" onClick={toggleBehind}>
          Reasoning
        </Button>
        <Button variant="outline" size="sm" onClick={toggleExplanation}>
          Explanation
        </Button>
      </div>

      <Button variant="outline" size="sm" fullWidth onClick={resetDemo} aria-label="Reset demo to start">
        ↺ Reset demo
      </Button>
    </div>
  );
}
