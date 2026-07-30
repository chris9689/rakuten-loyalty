import { motion } from 'framer-motion';
import { cn } from '@/hooks/utils';

interface CardFaceProps {
  name: string;
  className?: string;
  /** Compact removes the overlaid holder details for small placements. */
  compact?: boolean;
}

/**
 * Displays the supplied Rakuten Card (Mastercard) asset as the customer's card,
 * with the cardholder name overlaid. Falls back to a gradient if the asset is
 * missing. The card artwork is a real brand asset provided in /public.
 */
export function CardFace({ name, className, compact = false }: CardFaceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, rotateX: 6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative aspect-[1347/851] w-full overflow-hidden rounded-2xl shadow-float ring-1 ring-black/10',
        className,
      )}
    >
      <img
        src="/cardface_mycolor_pinkbeige_row_Mastercard_rp_e_front_1347x851.png"
        alt={`Rakuten Card for ${name}`}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          const el = e.currentTarget.parentElement;
          if (el) el.classList.add('brand-gradient');
          e.currentTarget.style.display = 'none';
        }}
      />
      {!compact && (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
          <div className="rounded-lg bg-black/5 px-2 py-1 backdrop-blur-sm">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/70">
              Cardholder
            </p>
            <p className="text-sm font-extrabold tracking-wide text-ink">{name}</p>
          </div>
          <p className="rounded-lg bg-black/5 px-2 py-1 font-mono text-[11px] font-bold tracking-widest text-ink/70 backdrop-blur-sm">
            •••• 4820
          </p>
        </div>
      )}
    </motion.div>
  );
}
