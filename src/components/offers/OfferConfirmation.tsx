import { motion } from 'framer-motion';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

interface OfferConfirmationProps {
  open: boolean;
  onContinueShopping: () => void;
  onViewSavedBenefits: () => void;
  title: string;
}

/** "Offer saved" confirmation shown after the CTA is triggered. */
export function OfferConfirmation({ open, onContinueShopping, onViewSavedBenefits }: OfferConfirmationProps) {
  return (
    <Modal open={open} onClose={onContinueShopping} title="">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white shadow-float"
        >
          <Icon name="check_circle" filled className="text-[48px]" />
        </motion.div>
        <h3 className="font-heading text-2xl font-bold text-on-surface">Offer saved</h3>
        <p className="mx-auto mt-2 max-w-xs text-sm text-on-surface-variant">
          Your household offer is ready. You can view this offer again from your saved benefits.
        </p>

        <div className="mt-5 rounded-2xl border border-surface-container-high bg-surface-container-lowest p-4 text-left shadow-card">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-tertiary-container">
              <Icon name="card_giftcard" filled className="text-white" />
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-on-surface">Exclusive Family Perk</p>
              <p className="text-xs text-on-surface-variant">Rakuten Points Booster Active</p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-surface-container-high pt-3">
            <span className="font-heading text-sm font-bold text-primary">Pending Approval</span>
            <span className="text-sm font-semibold text-on-surface-variant">View details</span>
          </div>
        </div>

        <Button fullWidth size="lg" className="mt-5" onClick={onContinueShopping}>
          Continue shopping
        </Button>
        <Button variant="outline" fullWidth size="md" className="mt-2" onClick={onViewSavedBenefits}>
          View saved benefits
        </Button>
      </div>
    </Modal>
  );
}
