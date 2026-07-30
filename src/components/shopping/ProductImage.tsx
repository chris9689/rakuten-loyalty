import type { Product } from '@/types';
import { cn } from '@/hooks/utils';

interface ProductImageProps {
  product: Product;
  className?: string;
  /** Emoji size class when falling back. */
  emojiClass?: string;
}

/**
 * Emoji-first product media tile used for a cleaner prototype style.
 */
export function ProductImage({ product, className, emojiClass = 'text-5xl' }: ProductImageProps) {
  return (
    <div className={cn('relative overflow-hidden brand-gradient-soft', className)}>
      <div className={cn('flex h-full w-full items-center justify-center', emojiClass)}>
        <span aria-hidden>{product.emoji}</span>
      </div>
    </div>
  );
}
