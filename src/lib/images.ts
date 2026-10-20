/**
 * Responsive image helpers. Remote images from CDNs that resize on the fly
 * (Unsplash, imgix) get a real srcset. Local photos in public/images get one
 * from the WebP sizes made by scripts/optimize-images.mjs (runs before dev/build).
 */
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { withBase } from './paths';

const LOCAL_WIDTHS = [480, 800, 1200, 1800];

let manifest: Record<string, [number, number]> | null = null;
const localKey = (src: string) => src.slice('/images/'.length).replace(/\.[^.]+$/, '').replaceAll('/', '__');

/** Width ÷ height of a local photo (from the image step's manifest), or null if unknown. */
export function localAspect(src: string): number | null {
  if (!src.startsWith('/images/')) return null;
  try {
    manifest ??= JSON.parse(readFileSync('public/images/sized/manifest.json', 'utf8'));
  } catch {
    manifest = {};
  }
  const dims = manifest![localKey(src)];
  return dims && dims[1] ? dims[0] / dims[1] : null;
}

/**
 * When a wide photo is cropped into a narrower frame (object-fit: cover), the
 * browser needs a proportionally wider file to stay sharp. Scale every vw/px
 * value in a `sizes` string by that factor.
 */
export function scaleSizes(sizes: string, factor: number): string {
  if (!(factor > 1.05)) return sizes;
  return sizes.replace(/(\d+(?:\.\d+)?)(vw|px)/g, (_, n, unit) => `${Math.ceil(Number(n) * factor)}${unit}`);
}

/** srcset for a local /images/… photo, using whichever resized copies exist. */
function localSet(src: string) {
  if (!src.startsWith('/images/') || src.endsWith('.svg')) return null;
  const key = localKey(src);
  const sizes = LOCAL_WIDTHS.filter((w) => existsSync(path.join('public/images/sized', `${key}-${w}.webp`)));
  if (!sizes.length) return null;
  const url = (w: number) => withBase(`/images/sized/${key}-${w}.webp`);
  return { src: url(sizes[Math.min(1, sizes.length - 1)]), srcset: sizes.map((w) => `${url(w)} ${w}w`).join(', ') };
}

const RESIZABLE = /^https:\/\/(images\.unsplash\.com|[\w-]+\.imgix\.net)\//;

export interface ImageOptions {
  /** Width/height ratio to crop to, e.g. 1 for square, 9/16 for vertical video. */
  ratio?: number;
  widths?: number[];
}

function sized(src: string, w: number, ratio?: number): string {
  const url = new URL(src);
  url.searchParams.set('w', String(w));
  if (ratio) {
    url.searchParams.set('h', String(Math.round(w / ratio)));
    url.searchParams.set('fit', 'crop');
  }
  url.searchParams.set('auto', 'format');
  url.searchParams.set('q', '72');
  return url.toString();
}

export function imageAttrs(src: string, { ratio, widths = [400, 640, 960, 1280] }: ImageOptions = {}) {
  if (!src) return null;
  if (!RESIZABLE.test(src)) return localSet(src) ?? { src: withBase(src), srcset: undefined };
  return {
    src: sized(src, widths[Math.min(1, widths.length - 1)], ratio),
    srcset: widths.map((w) => `${sized(src, w, ratio)} ${w}w`).join(', '),
  };
}
