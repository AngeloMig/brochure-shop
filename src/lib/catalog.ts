import { categories, products } from '../data/products';
import { videos } from '../data/videos';
import type { Product, Video } from './types';

const productMap = new Map(products.map((p) => [p.id, p]));
const videoMap = new Map(videos.map((v) => [v.id, v]));

export const getProduct = (id: string) => productMap.get(id);
export const getVideo = (id: string) => videoMap.get(id);

export const featuredProducts: Product[] = products
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));

/** Categories in the editable order, limited to ones that actually have products. */
export const activeCategories = categories.filter((c) => products.some((p) => p.category === c));

/** Videos for a product: its own relatedVideoIds plus any video that points back at it. */
export function videosForProduct(product: Product): Video[] {
  const ids = new Set(product.relatedVideoIds ?? []);
  for (const v of videos) if (v.relatedProductIds?.includes(product.id)) ids.add(v.id);
  return [...ids].map(getVideo).filter((v): v is Video => Boolean(v));
}

export function productsForVideo(video: Video): Product[] {
  return (video.relatedProductIds ?? []).map(getProduct).filter((p): p is Product => Boolean(p));
}

export { products, videos };
