import { cn } from '@/hooks/utils';

/**
 * Rakuten wordmark logo. Uses the supplied brand asset from /public with a
 * graceful text fallback if the image is unavailable.
 */
export function BrandLogo({ className, alt = 'Rakuten' }: { className?: string; alt?: string }) {
  return (
    <img
      src="/Rakuten_Global_Brand_Logo.svg.webp"
      alt={alt}
      className={cn('block w-auto max-w-none object-contain', className)}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = 'none';
      }}
    />
  );
}
