import type { Video } from '../lib/types';

const demo = (id: string) => `https://images.unsplash.com/photo-${id}`;

/**
 * ─── DEMO VIDEOS ─────────────────────────────────────────────────────────────
 * Paste each full TikTok video URL into `tiktokUrl`, e.g.
 *   https://www.tiktok.com/@yourhandle/video/7301234567890123456
 * With a valid URL the card plays TikTok's official embed on tap (nothing loads
 * until then). Short links (vm.tiktok.com/…) still work as "Watch on TikTok"
 * links, but can't be embedded. Empty = "Video coming soon".
 */
export const videos: Video[] = [
  {
    id: 'slow-morning',
    caption: 'A slow-morning coffee setup',
    thumbnail: demo('1517487881594-2787fef5ebf7'),
    tiktokUrl: '',
    relatedProductIds: ['stoneware-mug'],
  },
  {
    id: 'cozy-corner',
    caption: 'Making a reading corner feel cozy',
    thumbnail: demo('1632927126546-e3e051a0ba6e'),
    tiktokUrl: '',
    relatedProductIds: ['knit-throw'],
  },
  {
    id: 'candle-evening',
    caption: 'Evening wind-down, candles on',
    thumbnail: demo('1622429420355-5677170f4fad'),
    tiktokUrl: '',
    relatedProductIds: ['amber-candle'],
  },
  {
    id: 'pour-over',
    caption: 'Pour-over, start to finish',
    thumbnail: demo('1522825397800-ddf6405fc258'),
    tiktokUrl: '',
    relatedProductIds: ['stoneware-mug'],
  },
  {
    id: 'bedroom-refresh',
    caption: 'A quick bedroom refresh',
    thumbnail: demo('1699913028290-ffdcbd969bf7'),
    tiktokUrl: '',
    relatedProductIds: ['knit-throw', 'bud-vase'],
  },
  {
    id: 'desk-reset',
    caption: 'Sunday desk reset',
    thumbnail: demo('1586380951230-e6703d9f6833'),
    tiktokUrl: '',
    relatedProductIds: ['over-ear-headphones'],
  },
];
