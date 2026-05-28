/**
 * Format a number as Indian Rupee currency string.
 * e.g. 2100000 → "₹21 Lakh"
 */
export function formatINR(amount: number, compact = true): string {
  if (!compact) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  }

  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)} Cr`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(0)} L`;
  }
  if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(0)}K`;
  }
  return `₹${amount}`;
}

/**
 * Format a number as a compact string.
 * e.g. 2340 → "2.3K", 1000000 → "1M"
 */
export function formatCount(count: number): string {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
}

/**
 * Format a date string to readable format
 */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format placement package range
 */
export function formatPackage(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr/yr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(0)} LPA`;
  return `₹${amount}/yr`;
}

/**
 * Format fees with period
 */
export function formatFees(min: number, max: number, per: string): string {
  if (min === max) return `${formatINR(min)}/${per}`;
  return `${formatINR(min)} – ${formatINR(max)}/${per}`;
}
