import { site } from '../config/site';

export type Currency = 'USD' | 'PHP';

const usdFmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const phpFmt = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 });

/**
 * Format a product price in the chosen currency. Whichever currency was entered
 * (pricePhp or price in USD) shows exactly; the other is a conversion marked "≈".
 */
export function formatPrice(
  amount: { usd?: number; php?: number },
  currency: Currency = site.currency.default,
): string {
  const rate = site.currency.usdToPhp;
  if (currency === 'PHP') {
    if (typeof amount.php === 'number') return phpFmt.format(amount.php);
    return `≈ ${phpFmt.format((amount.usd ?? 0) * rate)}`;
  }
  if (typeof amount.usd === 'number') return usdFmt.format(amount.usd);
  return `≈ ${usdFmt.format((amount.php ?? 0) / rate)}`;
}
