/**
 * Brand, copy and links — edit this file to make the site yours.
 * Products live in src/data/products.ts, videos in src/data/videos.ts.
 */
export const site = {
  /** Shown as the wordmark in the header and footer. */
  brandName: 'bea',
  /** Browser tab + search result title. */
  title: 'bea — favorite finds, all in one place',
  description:
    'A curated catalog of favorite finds from TikTok. Browse the picks, watch the videos, and shop each find on TikTok.',

  /** Your TikTok handle without the @, and your profile URL. Leave the URL empty to hide profile links. */
  tiktokHandle: 'minaaaaaaaa001',
  tiktokProfileUrl: 'https://www.tiktok.com/@minaaaaaaaa001',

  /**
   * Business contact — shown in the footer. A value that still contains "X"
   * (numbers) or "yourdomain" (email) shows as plain text instead of a link.
   */
  contact: {
    heading: 'For business, please contact',
    text: 'Brand collaborations, product seeding and partnerships.',
    // Written with the +63 country code so WhatsApp and Viber links open the right chat.
    whatsapp: '+63 968 618 5349',
    viber: '+63 968 618 5349',
    email: 'beamiguel825@gmail.com',
  },

  /** Shows a slim "demo content" notice at the top of the page. Set to false once your real content is in. */
  demoMode: true,

  /**
   * Prices are stored in US dollars. Visitors can switch to Philippine pesos;
   * PHP amounts are converted with this rate and shown as approximate.
   */
  currency: {
    default: 'PHP' as 'USD' | 'PHP',
    usdToPhp: 58, // update to the current rate
  },

  /**
   * Click tracking with Plausible (https://plausible.io). Add the domain you
   * registered there, e.g. 'bea.example.com', to start counting TikTok clicks,
   * video plays, quick views and shares. Empty = tracking off.
   */
  analytics: {
    plausibleDomain: '',
  },

  /** Image used when the site is shared on social media (1200×630 works best). */
  shareImage: '/images/hero.jpg',

  hero: {
    /** Save your photo here (about 2400px wide). Until it exists, `fallbackImage` is shown. */
    image: '/images/hero.jpg',
    fallbackImage: '/images/hero-placeholder.svg',
    imageAlt: 'Athena and Grace and Glow body wash bottles on stone plinths with baby’s breath',
    /** CSS object-position, used when the image is cropped to fit. */
    imagePosition: '50% 58%',
    headline: 'My favorite finds, all in one place.',
    intro:
      'The products from my TikToks, gathered in one easy catalog. Tap any find for a closer look, then shop it on TikTok.',
    primaryLabel: 'Explore my finds',
    secondaryLabel: 'Watch my TikToks',
  },

  featured: {
    heading: 'Top picks right now',
    text: 'A short list of standout finds. Every link goes straight to TikTok Shop, where you can check the latest price.',
  },

  /** Editorial feature: one product next to a large lifestyle photo. */
  spotlight: {
    productId: 'knit-throw',
    eyebrow: 'Find of the month',
    heading: 'Softer evenings start here',
    text: 'A chunky, oversized knit that makes a sofa corner or the end of a bed feel finished. It works with almost any neutral room, which is exactly why it gets a spot here.',
    image: 'https://images.unsplash.com/photo-1786107727673-dfb789a4e5c8',
    imageAlt: 'Bed made with white pillows and a sage striped blanket',
    imagePosition: '50% 80%',
  },

  allFinds: {
    heading: 'All finds',
    text: 'Every product from my videos. Search by name or filter by category, then tap a find for details and its TikTok link.',
  },

  videos: {
    heading: 'Watch on TikTok',
    text: 'See the finds in action. Tap a video to play it here, or open it on TikTok.',
  },

  about: {
    eyebrow: 'About bea',
    /** The big statement that appears over your photo. */
    statement: 'Small finds for everyday routines — shared on TikTok, gathered here.',
    /** Your intro, in your own voice — edit freely. */
    paragraphs: [
      'I’m bea. I share everyday finds on TikTok — body care, home pieces and the small things that make a routine feel a little nicer. This page keeps every product from my videos in one place, so you don’t have to scroll back to find a link.',
    ],
    /** Your photo — it opens out to fill the screen as visitors scroll. */
    image: 'https://images.unsplash.com/photo-1667312939978-64cf31718a6e',
    imageAlt: 'A sculptural table lamp, stacked books and a small vase on a wooden sideboard',
    /** Four smaller photos that sit either side of yours (left to right). */
    tiles: [
      '/images/products/athena-body-wash.webp',
      'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      'https://images.unsplash.com/photo-1640794334953-47993ef59351',
      '/images/products/grace-glow-english-pear.webp',
    ],
  },

  faq: {
    heading: 'How buying works',
    text: 'Everything you need to know before you tap through to TikTok.',
    items: [
      {
        q: 'Where do I buy?',
        a: 'Every “View on TikTok” button opens the product on TikTok Shop. You check the price, pay and track your order there — this site doesn’t sell anything itself.',
      },
      {
        q: 'Is the price here the final price?',
        a: 'Prices shown here are a guide. Prices, stock and promotions change often on TikTok Shop, so the final price is always the one on the product page there.',
      },
      {
        q: 'Who ships my order and handles returns?',
        a: 'The seller on TikTok Shop. Delivery, returns and refunds follow TikTok Shop’s policies and the seller’s terms shown on the product page.',
      },
      {
        q: 'Do you earn from these links?',
        a: 'Some links are affiliate links. I may earn a commission if you purchase through them.',
      },
      {
        q: 'Does this site use cookies?',
        a: 'This site doesn’t set cookies. TikTok videos only load when you tap play, and TikTok and TikTok Shop may set their own cookies once you open them there.',
      },
    ],
  },

  disclosure:
    'Some links are affiliate links. I may earn a commission if you purchase through them.',

  nav: [
    { label: 'Featured', href: '#featured' },
    { label: 'All Finds', href: '#all-finds' },
    { label: 'Videos', href: '#videos' },
    { label: 'About', href: '#about' },
  ],

  /** Extra links shown only in the footer's Explore list. */
  footerNav: [{ label: 'How buying works', href: '#faq' }],
};

export type Site = typeof site;
