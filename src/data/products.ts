import type { Product } from '../lib/types';

/**
 * Filter chips on "All finds" follow this order. Add, rename or remove freely —
 * a category only shows up as a chip when at least one product uses it.
 */
export const categories = ['Home', 'Kitchen', 'Beauty', 'Wellness', 'Tech', 'Style'];

/** Shared Unsplash prefix for the demo photos. Swap each `image` for your own. */
const demo = (id: string) => `https://images.unsplash.com/photo-${id}`;

/**
 * ─── PRODUCTS ────────────────────────────────────────────────────────────────
 * The Athena and Grace and Glow entries use your product photos in
 * public/images/products/*.webp (square, light grey background). Until a photo
 * exists, its illustration (imageFallback) is shown. Everything after them is
 * DEMO content. Replace names, descriptions and
 * images with your real finds, and paste each TikTok Shop affiliate link into
 * `affiliateUrl` exactly as TikTok gives it (tracking parameters included).
 * Leave `affiliateUrl` empty and the site shows "Link coming soon" instead of
 * a broken button.
 *
 * Prices are SAMPLES. Prefer `pricePhp` (exact peso price from TikTok Shop);
 * `price` is US dollars. Visitors can switch ₱/$ — the other currency is a
 * conversion using the rate in src/config/site.ts → currency. Delete the price
 * line to show "Check price on TikTok" instead.
 */
export const products: Product[] = [
  {
    id: 'athena-body-wash',
    name: 'Athena Brightening & Refreshing Body Wash',
    category: 'Beauty',
    description: 'A clear lavender body wash made with niacinamide, vitamin C and collagen.',
    pricePhp: 869,
    image: '/images/products/athena-body-wash.webp',
    imageFallback: '/images/products/athena-body-wash.svg',
    gallery: ['/images/hero.jpg'],
    imageAlt: 'Athena Brightening & Refreshing Body Wash in a clear lavender pump bottle',
    // TEST LINK — opens TikTok Shop's home page so you can preview a working
    // "View on TikTok" button. Replace with this product's affiliate link.
    affiliateUrl: 'https://www.tiktok.com/shop',
    featured: true,
    featuredOrder: 1,
    badge: "Creator's Pick",
  },
  {
    id: 'grace-glow-rouge-540',
    name: 'Grace and Glow Rouge 540 Glow & Firm Body Wash',
    category: 'Beauty',
    description: 'A ruby-red scrub body wash with niacinamide and collagen, made for glow and firmness.',
    pricePhp: 985,
    image: '/images/products/grace-glow-rouge-540.webp',
    imageFallback: '/images/products/grace-glow-rouge-540.svg',
    gallery: ['/images/hero.jpg'],
    imageAlt: 'Grace and Glow Rouge 540 Glow & Firm Scrub Solution Body Wash in a red pump bottle',
    affiliateUrl: '',
    featured: true,
    featuredOrder: 2,
  },
  {
    id: 'grace-glow-english-pear',
    name: 'Grace and Glow English Pear & Freesia Body Wash',
    category: 'Beauty',
    description: 'An amber body wash with AHA, BHA, PHA and centella asiatica, scented with English pear and freesia.',
    pricePhp: 985,
    image: '/images/products/grace-glow-english-pear.webp',
    imageFallback: '/images/products/grace-glow-english-pear.svg',
    gallery: ['/images/hero.jpg'],
    imageAlt: 'Grace and Glow English Pear and Freesia Body Wash in an amber pump bottle',
    affiliateUrl: '',
    featured: true,
    featuredOrder: 3,
    badge: 'New find',
  },
  {
    id: 'stoneware-mug',
    name: 'Matte Stoneware Mug',
    category: 'Kitchen',
    description: 'A heavy, hand-warming mug with a soft matte glaze that suits any shelf.',
    price: 18.00,
    image: demo('1514228742587-6b1558fcca3d'),
    imageAlt: 'White stoneware mug on a pale surface',
    gallery: [demo('1687158179204-5849fb8fc8a5')],
    affiliateUrl: '',
    featured: true,
    featuredOrder: 4,
    relatedVideoIds: ['slow-morning', 'pour-over'],
  },
  {
    id: 'knit-throw',
    name: 'Chunky Knit Throw',
    category: 'Home',
    description: 'An oversized knit throw that makes a sofa corner feel finished.',
    price: 39.99,
    image: demo('1640794334953-47993ef59351'),
    imageAlt: 'Cream chunky knit throw folded on a chair',
    gallery: [demo('1674475760738-8c7af859f821')],
    affiliateUrl: '',
    featured: true,
    featuredOrder: 5,
    relatedVideoIds: ['cozy-corner', 'bedroom-refresh'],
  },
  {
    id: 'sage-bottle',
    name: 'Insulated Water Bottle',
    category: 'Wellness',
    description: 'A slim stainless bottle in a muted sage that fits most cup holders.',
    price: 24.00,
    image: demo('1602143407151-7111542de6e8'),
    imageAlt: 'Sage green insulated water bottle',
    affiliateUrl: '',
    featured: true,
    featuredOrder: 6,
  },
  {
    id: 'amber-candle',
    name: 'Amber Jar Candle Set',
    category: 'Home',
    description: 'Two amber glass candles that look as good unlit on a bedside table.',
    price: 22.00,
    image: demo('1572726729207-a78d6feb18d7'),
    imageAlt: 'Two amber glass jar candles',
    affiliateUrl: '',
    relatedVideoIds: ['candle-evening'],
  },
  {
    id: 'over-ear-headphones',
    name: 'Over-Ear Headphones',
    category: 'Tech',
    description: 'Clean, cushioned over-ears in a neutral finish for desk days and commutes.',
    price: 59.99,
    image: demo('1583394838336-acd977736f90'),
    imageAlt: 'Grey over-ear headphones on a white background',
    affiliateUrl: '',
    relatedVideoIds: ['desk-reset'],
  },
  {
    id: 'pantry-jars',
    name: 'Glass Pantry Jars',
    category: 'Kitchen',
    description: 'Clear stacking jars that turn a crowded cupboard into a tidy shelf.',
    price: 29.99,
    image: demo('1567966221845-e91f7d888354'),
    imageAlt: 'Glass jars filled with dry pantry staples',
    affiliateUrl: '',
  },
  {
    id: 'canvas-tote',
    name: 'Everyday Canvas Tote',
    category: 'Style',
    description: 'A sturdy natural-canvas tote sized for a laptop and the market run after.',
    price: 19.99,
    image: demo('1544816155-12df9643f363'),
    imageAlt: 'Natural canvas tote bag',
    gallery: [demo('1574365569389-a10d488ca3fb')],
    affiliateUrl: '',
  },
  {
    id: 'hand-cream',
    name: 'Daily Hand Cream',
    category: 'Beauty',
    description: 'A pocket-sized tube that lives in every bag and by the sink.',
    price: 9.99,
    image: demo('1638609927040-8a7e97cd9d6a'),
    imageAlt: 'White hand cream tube on a white surface',
    affiliateUrl: '',
  },
  {
    id: 'bud-vase',
    name: 'Ceramic Bud Vase',
    category: 'Home',
    description: 'A small white vase that makes a single stem of greenery look intentional.',
    price: 15.00,
    image: demo('1610247673420-52d9683002eb'),
    imageAlt: 'Green plant in a white ceramic vase',
    gallery: [demo('1677761821976-4a2b4ed29437')],
    affiliateUrl: '',
  },
  {
    id: 'classic-sunglasses',
    name: 'Classic Sunglasses',
    category: 'Style',
    description: 'A timeless black frame that works with almost every outfit.',
    price: 21.99,
    image: demo('1584036553516-bf83210aa16c'),
    imageAlt: 'Black framed sunglasses on a white surface',
    affiliateUrl: '',
  },
];
