# bea — Content guide

Everything you need to **gather** and **change** to turn the demo site into your real one.
You only ever edit four places:

| What | Where |
| --- | --- |
| Your products | `src/data/products.ts` |
| Your TikTok videos | `src/data/videos.ts` |
| Brand, accounts, contact, all page text | `src/config/site.ts` |
| Photos | `public/images/` (products go in `public/images/products/`) |

> **No code editor needed.** On github.com open the file → click the ✏️ pencil → edit → **Commit changes**. To add photos: open the folder → **Add file → Upload files** → **Commit**. Every commit to `main` re-publishes the site in about 1–2 minutes (Actions tab shows progress).

---

## 1. What to prepare — checklist

### For every product

| Info | Required? | Example | Notes |
| --- | --- | --- | --- |
| **TikTok Shop affiliate link** | ✅ | `https://vt.tiktok.com/ZS…` or `https://www.tiktok.com/view/product/…` | From your affiliate tools / showcase: **Share → Copy link**. Paste it **exactly** — don’t remove anything after the `?`, that’s your tracking. |
| **Product name** | ✅ | `Athena Brightening & Refreshing Body Wash` | Same as the TikTok Shop listing. |
| **Product photo** | ✅ | `athena-body-wash.webp` | See [Photo specs](#3-photo-specs). Square, light grey or white background. |
| **One-line description** | ✅ | `A clear lavender body wash made with niacinamide, vitamin C and collagen.` | One sentence. Describe it — no medical claims (see [Rules](#6-rules-to-stay-safe)). |
| **Category** | ✅ | `Beauty` | One of: `Home`, `Kitchen`, `Beauty`, `Wellness`, `Tech`, `Style` (you can add more). |
| **Price in pesos** | Optional | `869` | Numbers only — no ₱ sign or commas. Leave out to show “Check price on TikTok”. Update on sale days. |
| **Photo description (alt text)** | Recommended | `Athena body wash in a clear lavender pump bottle` | What the photo shows — helps blind visitors and Google. |
| **Extra photos** | Optional | `athena-texture.webp` | Shown as thumbnails in the popup; the first extra photo also appears when hovering the card. |
| **Top Pick?** + order | Optional | Yes, #1 | Every product marked as a Top Pick appears in the Top Picks carousel, in this order. 4–8 works best. |
| **Badge** | Optional | `Creator's Pick`, `New find`, `Bestseller` | Short label on the photo. Only use true labels. |
| **Related TikTok video(s)** | Optional | `athena-review` | The video’s id from `videos.ts` (see below). |

### For every TikTok video

| Info | Required? | Example | Notes |
| --- | --- | --- | --- |
| **TikTok video link** | ✅ | `https://www.tiktok.com/@minaaaaaaaa001/video/7301234567890123456` | Use the **full** link (it contains `/video/` and a long number) so the video can play on the site. On a computer, open the video in a browser and copy the address bar. Short `vt.tiktok.com` links still work but open TikTok instead of playing inline. |
| **Caption** | ✅ | `My go-to body wash this month` | Short, like a TikTok caption. |
| **Thumbnail (cover)** | ✅ | `athena-review.jpg` | Vertical 9:16 — a screenshot of the video’s cover works. |
| **Products in the video** | Optional | `athena-body-wash` | Product id(s) — adds a “Featured find” link under the video. |

### Your accounts & brand (one time)

- [ ] TikTok handle — currently `minaaaaaaaa001`
- [ ] TikTok profile link — currently `https://www.tiktok.com/@minaaaaaaaa001`
- [ ] WhatsApp / Viber number — with `+63`, e.g. `+63 968 618 5349`
- [ ] Business email — currently `beamiguel825@gmail.com`
- [ ] Hero photo (big top banner) — currently `public/images/hero.jpg`
- [ ] About photo of you + 1–3 sentences about you
- [ ] “Find of the month” (Spotlight): which product + a lifestyle photo + 2 sentences why
- [ ] Peso exchange rate for the ₱/$ switch (only matters for prices you enter in USD)
- [ ] Optional: Plausible analytics domain to count TikTok clicks

---

## 2. How to add or change a product

1. Upload the photo to `public/images/products/` (e.g. `glow-serum.webp`).
2. Open `src/data/products.ts`, copy this block, paste it **inside** the `products: [ … ]` list, and fill it in:

```ts
  {
    id: 'glow-serum',                         // short, lowercase, dashes only — must be unique
    name: 'Glow Serum 30ml',
    category: 'Beauty',
    description: 'A lightweight serum with niacinamide for an everyday glow.',
    pricePhp: 499,                            // exact peso price (delete this line to hide the price)
    image: '/images/products/glow-serum.webp',
    imageAlt: 'Glow Serum in a frosted glass dropper bottle',
    gallery: ['/images/products/glow-serum-texture.webp'],   // optional extra photos
    affiliateUrl: 'https://vt.tiktok.com/ZSxxxxxxx/',         // paste exactly from TikTok Shop
    featured: true,                           // optional: show in Top Picks
    featuredOrder: 2,                         // optional: 1 = first
    badge: 'New find',                        // optional
    relatedVideoIds: ['glow-serum-review'],   // optional: ids from videos.ts
  },
```

**Rules for the block:** keep the quotes `' '` around text, the comma at the end of every line and after the closing `},`. Numbers (price, order) have **no** quotes.

**Remove a product:** delete its whole `{ … },` block.
**Reorder Top Picks:** change the `featuredOrder` numbers.

---

## 3. Photo specs

| Photo | Shape | Best size | Where | Tips |
| --- | --- | --- | --- | --- |
| **Product** | Square 1:1 | 1200 × 1200 px or larger | `public/images/products/` | Light grey/white background, product centred with space around it. |
| **Hero banner** | Wide (16:9 or wider) | 2400 × 1350 px | `public/images/hero.jpg` | Keep the main subject in the **centre** — phones show a square crop of the middle. |
| **About / Spotlight** | Portrait 4:5 | 1600 × 2000 px | `public/images/` | Lifestyle shots; set the path in `site.ts`. |
| **Video thumbnail** | Vertical 9:16 | 1080 × 1920 px | `public/images/videos/` | A screenshot of the video cover is fine. |
| **Social share image** | 1.91:1 | 1200 × 630 px | `public/images/` | What shows when the link is shared on Messenger/Facebook. Set `shareImage` in `site.ts`. |

- File types: **.jpg** or **.webp** (PNG works but is heavier). Keep each under ~1 MB; the site makes smaller copies for phones automatically.
- File names: **lowercase, dashes, no spaces** — `glow-serum.webp`, not `Glow Serum (1).JPG`. Upper-case names may work on your computer but break on GitHub Pages.

---

## 4. How to add a video

Upload the thumbnail to `public/images/videos/`, open `src/data/videos.ts`, and add:

```ts
  {
    id: 'glow-serum-review',
    caption: 'Trying the glow serum for a week',
    thumbnail: '/images/videos/glow-serum-review.jpg',
    tiktokUrl: 'https://www.tiktok.com/@minaaaaaaaa001/video/7301234567890123456',
    relatedProductIds: ['glow-serum'],
  },
```

---

## 5. Brand, text and contact — `src/config/site.ts`

| Setting | What it changes |
| --- | --- |
| `tiktokHandle`, `tiktokProfileUrl` | Every “Follow” / “Watch my TikToks” link |
| `contact.whatsapp`, `contact.viber`, `contact.email` | “For business” links in the footer and mobile menu |
| `hero` → `image`, `headline`, `intro` | Top banner photo and text |
| `featured`, `allFinds`, `videos` → `heading`, `text` | Section titles and intros |
| `spotlight` → `productId`, `image`, `heading`, `text` | “Find of the month” section |
| `about` → `statement`, `paragraphs`, `image`, `tiles` | About section (your story + photos) |
| `faq.items` | “How buying works” questions and answers |
| `currency.default`, `currency.usdToPhp` | ₱ is the default; rate used for converting |
| `analytics.plausibleDomain` | Turns on TikTok-click counting |
| `demoMode` | Set to `false` to remove the “Demo catalog” notice at the top |

---

## 6. Rules to stay safe

- **Paste affiliate links exactly** as TikTok gives them — editing them can lose your commission.
- **Only real info:** no made-up reviews, ratings, sales counts, “was/now” prices or discounts.
- **Prices change** — the site always says “final price on TikTok”; update `pricePhp` on payday/sale days.
- **No medical claims** in descriptions (e.g. “cures acne”, “anti-acne”, “whitening”). Describe ingredients, scent, texture, how you use it.
- **No TikTok logo** — text like “View on TikTok” is fine; the logo needs TikTok’s permission.
- Turn on **“Disclose commercial content”** on your affiliate TikTok videos.

---

## 7. Before you launch

- [ ] Replace or delete all demo products (everything after the three body washes) and demo videos
- [ ] Every product has a real `affiliateUrl` (Athena still has the test link `https://www.tiktok.com/shop`)
- [ ] Real About text + photo, Spotlight product + text
- [ ] `demoMode: false`
- [ ] Delete preview pages you don’t need: `src/pages/footer-options.astro`, `logo-options.astro`, `menu-options.astro`, `quickview-options.astro`
- [ ] Test on your phone: tap a product → **View on TikTok** opens the right item

---

## 8. Worksheet — fill this in, then send it over (or paste into `products.ts`)

| # | Product name | TikTok Shop link | Photo file | Category | One-line description | Price ₱ | Top Pick (order) | Badge | Video link |
|---|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | | |
| 2 | | | | | | | | | |
| 3 | | | | | | | | | |
| 4 | | | | | | | | | |
| 5 | | | | | | | | | |
| 6 | | | | | | | | | |
| 7 | | | | | | | | | |
| 8 | | | | | | | | | |
