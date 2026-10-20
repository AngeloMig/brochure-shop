# bea — CRO playbook (note)

Full version with the sample-size calculator: https://claude.ai/artifact/48pyLtJqSJz8heS74hpDxC (private until shared).

## Goal
One number: **share of visits that tap “View on TikTok”** (TikTok product clicks ÷ visits). Commissions only show in the TikTok Shop affiliate dashboard — compare weekly by hand.

## Funnel
TikTok video / bio → land (hero, Top Picks) → find (Top Picks, search, chips, videos) → decide (quick view: photo, ₱ price, details, related video) → **View on TikTok** → purchase on TikTok Shop.

Tracked events already in the site: `Quick view`, `TikTok product click`, `TikTok video click`, `Video play`, `Share`, `Currency`. Turn on by setting `analytics.plausibleDomain` in `src/config/site.ts`.

## Fix first
1. **Blocker:** real affiliate links for every product (most still say “Link coming soon”); set `demoMode: false`.
2. First product sits ~2 screens down on phones.
3. Use the per-product links (`yoursite/#find-<product-id>`) in captions, pinned comments and the bio.
4. Grid cards need two taps to reach TikTok.
5. Thin trust signals — only ever use real numbers from your own videos.
6. Disclosure: FTC examples prefer plain wording like “Paid link · I may earn a commission”.
7. Prices are USD→PHP conversions; enter real PHP prices when known.

## Traffic
- Bio link with `?utm_source=tiktok&utm_medium=bio`; different `utm_source` for Instagram / Facebook cross-posts.
- Plan around PH dates: payday (15th & 30th), double-day sales (9.9, 10.10, 11.11, 12.12), Christmas gift picks from early November.
- Viber community / WhatsApp channel for new finds.

## A/B tests (in order, ICE score)
| # | Test | Control → Variant | ICE |
|---|------|-------------------|-----|
| 1 | Product-first hero | Editorial hero → #1 pick with price + View on TikTok | 8.3 |
| 2 | Direct button on grid cards | Text link → dark pill | 8.0 |
| 3 | Sticky mobile buy bar | None → bar after 30% scroll | 7.3 |
| 4 | Quick view layout | Immersive → Watch & shop / snap sheet | 7.0 |
| 5 | Real social proof | None → real video view count chip | 6.7 |
| 6 | Price display | ≈ ₱ → exact ₱ → “Check price on TikTok” | 6.3 |
| 7 | Disclosure wording | “Affiliate link” → “Paid link · I may earn a commission” | 6.0 |
| 8 | Top Picks order | Manual → ranked by last week’s clicks | 5.7 |
| 9 | Card tap behaviour | Opens quick view → opens TikTok | 5.3 |
| 10 | Nav logo style | Italic serif → colourful variant | 3.7 |

Primary metric: TikTok product clicks per visit. Guardrail: quick-view opens per visit.

## How long
95% confidence, 80% power, 50/50 split. Example: 20% click rate, detect a 15% relative lift (20% → 23%) ≈ **2,950 visits per variant** → ~20 days at 300 visits/day. Minimum 14 days per test; one test at a time; decide the stop date up front.

## Running tests here
Head script assigns A/B once (stored in the browser) and sets e.g. `data-exp-hero="b"` before paint (no flicker); every tracked event carries the variant as a Plausible custom property. Above ~2,000 visits/day, move to GrowthBook or PostHog.

## Plan
- **Week 1:** real links, demo off, Plausible + UTMs, collect a 2-week baseline.
- **Week 2:** start `#find-` links in captions; pick final popup/logo.
- **Week 3:** test 1 (product-first hero), started after a payday weekend.
- **Week 5+:** ship winner, run next test; ~1 test every 2–3 weeks.

## Guardrails
No invented reviews, prices, view counts or discounts; disclosure next to buy buttons; no claims that a product treats a condition (FDA — e.g. avoid “anti-acne”); don’t use the TikTok logo without permission.
