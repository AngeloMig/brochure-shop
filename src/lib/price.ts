import { site } from '../config/site';

export type Currency = 'USD' | 'PHP';

const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const php = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 });

/** Format a USD amount in the chosen currency. PHP is a conversion, so it's marked approximate. */
export function formatPrice(amountUsd: number, currency: Currency = site.currency.default): string {
  return currency === 'PHP' ? `≈ ${php.format(amountUsd * site.currency.usdToPhp)}` : usd.format(amountUsd);
}
