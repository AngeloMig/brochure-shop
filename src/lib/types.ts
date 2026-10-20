export interface Product {
  /** Unique, URL-safe id. Used for quick-view share links (#find-<id>). */
  id: string;
  name: string;
  /** Must match one of the names in `categories` (src/data/products.ts). */
  category: string;
  /** One short sentence: why you recommend it. */
  description: string;
  /** Price in US dollars, e.g. 14.99 — shown in USD or converted to PHP. Omit = "Check price on TikTok". */
  price?: number;
  /** Local path (e.g. "/images/products/mug.jpg") or full https URL. Empty = placeholder panel. */
  image: string;
  imageAlt?: string;
  /** Shown if `image` is missing or fails to load. */
  imageFallback?: string;
  /** Extra images shown in the quick view's arrows. */
  gallery?: string[];
  /** Your TikTok Shop affiliate link, pasted exactly as TikTok gives it. Empty = "Link coming soon". */
  affiliateUrl: string;
  featured?: boolean;
  /** Lower numbers appear first in Top Picks. */
  featuredOrder?: number;
  /** Optional editorial tag, e.g. "Creator's Pick". */
  badge?: string;
  relatedVideoIds?: string[];
}

export interface Video {
  id: string;
  caption: string;
  /** Vertical (9:16) image. Local path or https URL. */
  thumbnail: string;
  /** Full TikTok video URL, e.g. https://www.tiktok.com/@handle/video/1234567890123456789 */
  tiktokUrl: string;
  relatedProductIds?: string[];
}
