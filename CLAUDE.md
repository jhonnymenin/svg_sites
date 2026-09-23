# Good Vibes Web — Project Instructions

## Monorepo layout

Serving Good Vibes family of sites — npm workspaces + Turborepo.

| App | Path | Dev port | Mockup | Copy spec |
|---|---|---|---|---|
| Social Entertainment (parent company) | `apps/social-entertainment` | 3001 | `references/mockups/social-entertainment.png` | `references/copy/social-entertainment.txt` |
| Serving Good Vibes (masterbrand hub) | `apps/serving-good-vibes` | 3002 | `references/mockups/serving-good-vibes.png` | `references/copy/serving-good-vibes.txt` |
| Braziliana (culture / philanthropy) | `apps/braziliana` | 3003 | `references/mockups/braziliana.png` | `references/copy/braziliana.txt` |
| Chez La Fête (guest house + venue) | `apps/chez-la-fete` | 3004 | `references/mockups/chez-la-fete.png` | `references/copy/chez-la-fete.txt` |
| Villa BO (São Paulo boutique stay) | `apps/villa-bo` | 3005 | `references/mockups/villa-bo.png` | `references/copy/villa-bo.txt` |

- `packages/brand` (`@sgv/brand`): shared Serving Good Vibes lockup (`SgvMark`) and motion primitives (`@sgv/brand/motion`). Inline styles only, so it renders the same in every app's theme.
- Each app is its own Next.js project with its own brand tokens, fonts and components. Do not share page compositions between sites — each brand must feel distinct.
- Run one site: `npm run dev:se | dev:sgv | dev:braziliana | dev:chez | dev:villabo`. All: `npm run dev`.
- Screenshots: `node scripts/shot.mjs <url> <out.png> <width>`.
- Placeholder photography: `node scripts/find-images.mjs search "<query>"` then `get <id> apps/<app>/public/images/<name>.jpg` (writes CREDITS.md). Every stock image is a placeholder until real client photography arrives.
- Real client media: `media/FACTS.md` (verified brand, calendar, properties — source of truth), curated photos in `media/selections/*.json` (library files in `media/library`, gitignored; rebuild with `media/export.py` from `~/Downloads/SGV Marketing`), video notes in `media/video/README.md`.
- Official logos live in `packages/brand/assets/logos` and are synced to each app's `public/brand/` on `predev`/`prebuild` (`npm run sync:brand`).
- Keep the repo outside iCloud-synced folders — evicted `node_modules` files make Next hang.

This is a design-led web project.

The primary goal is to produce visually exceptional, production-quality websites and landing pages. Visual quality, brand character, responsiveness, and interaction quality matter more than implementation speed.

## Core behavior

Before implementing any major page or section:

1. Read the relevant files in `/docs` (and `references/copy/<site>.txt`).
2. Inspect all relevant assets and references in `/references/mockups`.
3. Understand the intended visual direction before writing code.
4. Prefer a strong, deliberate composition over a generic component layout.
5. Consider desktop and mobile as distinct compositions, not simply scaled versions.
6. Use motion and interaction when they improve the experience.
7. After implementation, inspect the rendered result visually before considering the task complete.

## Visual standards

Aim for:
- editorial composition
- expressive typography
- strong hierarchy
- intentional whitespace
- sophisticated image treatment
- controlled asymmetry
- polished transitions
- thoughtful responsive behavior
- memorable visual moments
- strong brand personality

Avoid default AI-generated frontend aesthetics such as:
- generic centered SaaS heroes
- excessive rounded cards
- cards inside cards
- pill labels everywhere
- random gradients
- decorative glow blobs
- unnecessary glassmorphism
- predictable three-column feature grids
- excessive shadows
- generic stock-like layouts
- excessive use of icons where typography or imagery would be stronger

Prefer composition over decoration.

## References

External visual references are inspiration, not templates to copy.

When analyzing another site, extract principles such as:
- layout structure
- spacing rhythm
- typography scale
- image treatment
- navigation behavior
- animation style
- interaction patterns
- section transitions
- mobile adaptation

Reinterpret those principles according to this project's brand.

## Responsive design

Always verify at minimum:
- 390px mobile
- 768px tablet
- 1440px desktop

Mobile may:
- reorder content
- use different crops
- change interaction patterns
- remove nonessential decorative elements
- alter typography scale and spacing significantly

Never treat mobile as an afterthought.

## Motion

Use Motion for React when appropriate.

Motion should support hierarchy, storytelling, navigation, feedback, or atmosphere.

Avoid animation purely for decoration.

Prefer:
- restrained reveals
- scroll-linked movement
- image transitions
- typographic motion
- subtle parallax
- meaningful hover states
- elegant page/section transitions

## Implementation

Current stack:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Motion
- Lucide React
- Playwright

Create reusable components when there is genuine reuse, but do not abstract prematurely.

Keep page-specific artistic compositions page-specific when that produces a stronger result.

## Quality gate

A page is not complete merely because:
- TypeScript passes
- the build succeeds
- the browser has no console errors

A page is complete only after visual inspection.

Before declaring a major page complete:
1. run the app
2. inspect desktop
3. inspect mobile
4. capture screenshots when useful
5. identify weak or generic areas
6. improve them
7. verify build/lint

Be critical of your own visual output.
