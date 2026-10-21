# bea — TikTok finds catalog

A one-page catalog of TikTok Shop affiliate finds and TikTok videos. All purchases happen on TikTok; there is no cart, checkout or account.

Built with [Astro](https://astro.build) (static output, Node 20+). Clicking a product opens a quick-view drawer — there are no product pages.

```bash
npm install
npm run dev      # http://localhost:4321/brochure-shop/
npm run build    # static site in dist/
npm run preview  # serve the built site locally
```

## Publish on GitHub Pages

The site is set up for **https://angelomig.github.io/brochure-shop/**.

1. Push this project to `github.com/AngeloMig/brochure-shop` on the `main` branch.
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions** (one time).
3. Every push to `main` now builds and publishes automatically (`.github/workflows/deploy.yml`). The Actions tab shows progress; the live link appears on the run when it finishes.

Moving to your own domain later: set `site` to the domain and `base` to `'/'` in `astro.config.mjs`. Local image/link paths go through `withBase()` (`src/lib/paths.ts`), so nothing else needs changing.

## Where to edit

**Step-by-step guide with photo sizes, templates and a worksheet: [`docs/content-guide.md`](docs/content-guide.md).**

| What | File |
| --- | --- |
| Brand name, handle, TikTok profile URL, hero / section copy, about text, disclosure, demo notice | `src/config/site.ts` |
| Products (name, category, description, image, affiliate link, featured order, badge, related videos) | `src/data/products.ts` |
| Category chips and their order | `categories` in `src/data/products.ts` |
| Videos (caption, thumbnail, TikTok URL, related products) | `src/data/videos.ts` |
| Colours, type, radii, spacing | `src/styles/tokens.css` |
| Hero photo | `public/images/hero.jpg` (lowercase; ~2400px wide) |
| Product photos | `public/images/products/` (square, light grey background) |

### Links

- Paste affiliate links into `affiliateUrl` exactly as TikTok gives them — tracking parameters are kept as-is. They open in a new tab with `rel="noopener sponsored"`.
- An empty `affiliateUrl`, `tiktokUrl` or `tiktokProfileUrl` shows a "coming soon" state instead of a broken link.
- Full video URLs (`https://www.tiktok.com/@handle/video/123…`) play TikTok's official embed after a tap; nothing loads from TikTok before that. Short `vm.tiktok.com` links open TikTok instead.
- A single find can be shared as `https://your-site/#find-<product id>`.

### Before launch

1. Set `demoMode: false` in `src/config/site.ts` and remove the demo products/videos.
2. Paste real TikTok Shop links into `affiliateUrl` (Athena still has a test link to tiktok.com/shop).
3. Delete the preview pages in `src/pages/` you no longer need (`*-options.astro`).
