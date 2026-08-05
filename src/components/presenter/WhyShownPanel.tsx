import { useDemo } from '@/app/DemoContext';
import { Icon } from '@/components/ui/Icon';

/**
 * Left-side "Why shown now" panel. Opens when the customer taps the main
 * recommended offer, and explains the reasons behind the recommendation for
 * the currently selected app user.
 */
export function WhyShownPanel({ onClose }: { onClose?: () => void }) {
  const { appUserProfile } = useDemo();
  const { name, context, offer, why } = appUserProfile;

  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto p-5 no-scrollbar">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-rakuten-red">
            Why shown now
          </p>
          <h2 className="text-lg font-extrabold text-ink">{name}</h2>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close why shown now"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/[0.06] text-ink"
          >
            ✕
          </button>
        )}
      </div>

      {/* Persona context */}
      <p className="text-xs leading-relaxed text-muted">{context}</p>

      {/* Offer summary */}
      <div className="rounded-2xl border border-black/[0.08] bg-white/75 p-3">
        <div className="mb-1 flex items-center gap-2">
          <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            {offer.merchant}
          </span>
          <span className="rounded-full bg-surface-container-high px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-on-surface-variant">
            {offer.category}
          </span>
        </div>
        <p className="text-sm font-bold text-ink">{offer.headline}</p>
        <p className="mt-0.5 text-xs text-muted">{offer.subtitle}</p>
      </div>

      {/* Reasons */}
      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-bold uppercase tracking-wide text-muted">
          Reasons
        </p>
        {why.map((reason) => (
          <div
            key={reason.label}
            className="flex items-start gap-3 rounded-xl border border-black/[0.06] bg-surface-container-lowest p-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary">
              <Icon name={reason.icon} filled className="text-lg" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold text-ink">{reason.label}</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-muted">
                {reason.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-auto text-[10px] leading-relaxed text-muted">
        Reasoning is illustrative and for demonstration only.
      </p>
    </div>
  );
}
