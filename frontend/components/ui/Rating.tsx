'use client';

import { cn } from '@/lib/cn';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number; // 0–5
  max?: number;
  showValue?: boolean;
  showCount?: boolean;
  count?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: { star: 12, text: 'text-xs' },
  md: { star: 14, text: 'text-sm' },
  lg: { star: 18, text: 'text-base' },
};

export function Rating({
  value,
  max = 5,
  showValue = true,
  showCount = false,
  count,
  size = 'md',
  className,
}: RatingProps) {
  const { star, text } = sizeMap[size];
  const safeValue = Math.min(Math.max(value, 0), max);
  const filled = Math.round(safeValue);

  return (
    <div className={cn('inline-flex items-center gap-1', className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            size={star}
            className={cn(
              'transition-colors',
              i < filled ? 'fill-amber-400 text-amber-400' : 'fill-none text-gray-200'
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className={cn('font-semibold text-[#111111]', text)}>
          {safeValue.toFixed(1)}
        </span>
      )}
      {showCount && count !== undefined && (
        <span className={cn('text-[#6b7280]', text)}>
          ({count.toLocaleString('en-IN')})
        </span>
      )}
    </div>
  );
}
