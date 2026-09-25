# ybyata.com

The Ybyatã website: [Astro](https://docs.astro.build), Tailwind, static. Portuguese at the root,
English under `/en/`. Hosted on Cloudflare Pages (build `pnpm build`, output `dist/`).

```sh
pnpm i
pnpm dev                        # http://localhost:4321, reloading
pnpm build && pnpm preview      # the built site, as Cloudflare serves it
node scripts/check.mjs          # every page at desktop and phone width: overflow, images, links
node scripts/walk.mjs <out> /   # viewport screenshots down a page, to see the motion
node scripts/og.mjs             # re-render public/og.png, the link preview (needs preview running)
```

## Where things are

- `src/content/*.ts`: the copy of each page, in both languages side by side. Change words here.
- `src/components/pages/*.astro`: each page's layout, rendered once per language by the thin
  files in `src/pages/` and `src/pages/en/`.
- `src/content/legal/*.html`: the privacy policy, terms, data deletion and the Google Ads API
  design, as plain HTML. The Portuguese legal text prevails; the English is a translation.
- `src/i18n.ts`: every page's address in both languages (the language switch uses it) and the
  shared interface strings.
- `src/site.ts`: contact details, the WhatsApp number the buttons open, and `formKey`, the
  platform's landing-page form for the waitlist (null until production exists,
  ybyata_platform #279).
- `src/scripts/motion.ts`: all motion (reveals, parallax, the pinned steps, the sideways strip).
  Nothing depends on it, and none of it runs with reduced motion.
- `public/media/`: product screenshots and clips, recorded from the platform's demo data (no real
  patients) with the sidebar cropped out.

## Rules

- Only claim what the platform does; what's coming goes under "Em breve".
- Results and testimonials are real or absent (`src/content/service.ts` keeps the section hidden
  while its lists are empty).
- The palette and fonts are the platform's (`ybyata_platform/web/src/index.css`); add a color as a
  token in `src/styles/global.css`, not inline.
- Addresses given to Meta and Google (`/politica-de-privacidade`, `/google-ads-api`, …) never move.
