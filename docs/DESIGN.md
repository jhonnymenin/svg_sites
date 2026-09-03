# Good Vibes — Design & Reconstruction Specification

**Status:** art direction locked. No implementation yet.
**Primary reference:** `references/screenshots/LP SGV mockup.PNG` (1024 × 1536 px full-page render).
**Purpose:** this document is a reconstruction spec. A frontend developer who has never seen the
reference should be able to build a page that reads as the same design from across the room.

All reference measurements below were sampled directly from the PNG at its native 1024 px width.
Every spec value is given for a **1440 px design width** (scale factor **×1.40625** from the
reference). Where a value is quoted as "ref" it is the raw 1024 px measurement.

---

## 0. What we take, and what we do not

**Take (structure and system):**
the band stacking, the wide/tight container, the near-zero radius, the color-block card system,
the flat type scale, the six-up and five-up rows, the compressed vertical rhythm, the icon strips,
the hairline-flanked centered title, the stripe rule device, the amber capture band.

**Do not take (proprietary to the reference):**
- The reference logotype and its lockup — we use **our own logo**.
- The illustrated multi-color display lettering used in the Brasiliana panel — this is a bespoke
  illustration. We build **our own display treatment** for that slot (see §7.5).
- Any headline, body copy, event name, property name, or program name from the reference.
- The reference photography.
- The specific hex values are re-derived below into **our own named palette**; do not sample the
  reference image at runtime.

Everything in this document is a description of layout behavior, not a copy of assets.

---

## 1. Concept

> **A printed poster for a night that already happened, rebuilt as a website.**

The page behaves like a well-set broadsheet or a gig poster: full-bleed color bands stacked edge to
edge, condensed capitals set large, photography cropped hard and let into the layout as blocks
rather than floated cards, and almost no rounding anywhere. Warmth comes from the palette and the
imagery — never from soft UI.

### Visual personality

1. **Dense** — content sits close to the edges and close to itself. Generosity is expressed in
   scale and color, not in empty margin.
2. **Banded** — the page is a stack of full-bleed color fields. Section separation is chromatic,
   not spatial.
3. **Warm-dark** — deep forest, brick, ochre and navy against parchment. Golden-hour, string-light,
   after-sunset.
4. **Printed** — square corners, hairline rules, flat fills, no glass, no glow.
5. **Systematic** — every vertical of the business owns a color, and that color follows it
   everywhere (icon, link, card body, band).
6. **Ordered, not stiff** — everything sits on the same grid, but rhythm changes constantly:
   6-up, 5-up, 4-up, split, strip, strip, bar.

---

## 2. Page frame and grid

| Token | Value @1440 | Ref @1024 | Notes |
|---|---|---|---|
| `--page-max` | 1520 px | — | outer cap; above this the bands stay full-bleed, content centers |
| `--gutter` | 51 px (`clamp(16px, 3.55vw, 64px)`) | 36 px | side inset for all band content |
| content width | 1339 px | 952 px | = 93 % of viewport at 1440 |
| `--gap-6` | 14 px | 10 px | gutter for the 6-up rows |
| `--gap-4` | 20 px | 14 px | gutter for the 4-up row |
| `--gap-5-tiles` | 13 px | 9 px | gutter for the Brasiliana tile row |

**The container is deliberately wide and the gutters are deliberately tight.** This is the single
most important structural decision in the reference: content occupies 93 % of the viewport and the
columns almost touch. Do not "breathe" this out — a 1200 px container with 32 px gaps destroys the
entire art direction.

### Column systems in use

| Row | Columns | Column width @1440 |
|---|---|---|
| Pillars ("Five ways") | 5 equal, no visible gutter | 268 px |
| Events | 6 equal, 14 px gap | 207 px |
| Stays | 6 equal, 14 px gap | 207 px |
| Brasiliana | 28 % / 72 % split, 24 px gap; right side = 5 tiles, 13 px gap | 371 px / 944 px; tiles 176 px |
| Hospitality | 4 equal, 20 px gap | 316 px |
| Media strip | icon-row of 5 + right-aligned button | fluid |
| Community strip | title block + 5 items + right-aligned button | fluid |

### Vertical rhythm — band heights

Measured band boundaries in the reference and their 1440 equivalents:

| # | Band | Ref y-range | Ref height | Height @1440 |
|---|---|---|---|---|
| 1 | Hero (nav overlaid) | 0 – 344 | 345 | **485** → build at **min(620px, 78vh)**¹ |
| 2 | Pillars — parchment | 345 – 535 | 190 | **268** |
| 3 | Events — forest | 536 – 744 | 208 | **293** |
| 4 | Stays — parchment | 746 – 929 | 183 | **257** |
| 5 | Brasiliana — forest + foliage | 930 – 1092 | 162 | **228** |
| 6 | Hospitality — parchment | 1093 – 1275 | 182 | **256** |
| 7 | Production & Media — navy | 1277 – 1370 | 93 | **131** |
| 8 | Community & Development — brick | 1371 – 1445 | 75 | **105** |
| 9 | Newsletter — ochre | 1446 – 1492 | 46 | **65** |
| 10 | Footer — near-black | 1493 – … | (truncated) | **~220** |

¹ The reference is a static mockup with no fold. 485 px is too short for a real hero on a
900 px-tall viewport; build the hero at `min(620px, 78vh)` and keep every internal proportion of
§7.1 unchanged.

**Band padding is very tight.** Measured top padding inside a band: 6–11 px (ref) — i.e. **9–15 px
at 1440**. Spec: `--band-pad-y: 22px` at ≥1280, `18px` at tablet, `28px` at mobile. This is a
deliberate, slightly relaxed reading of the reference; going beyond ~32 px loses the poster feel.

Bands butt directly against one another. There are **no separator rules between bands** — only a
1 px optical seam where two fields meet. Color does the work.

---

## 3. Color

Named tokens. These are ours; they are re-derived from the reference's relationships, not lifted.

```
/* Fields */
--parchment        #EBE4DA   /* the light band; warm, low-chroma, near-flat */
--parchment-hi     #F4EFE7   /* input fills, date chips */
--forest           #041C0C   /* the dark band; almost black, unmistakably green */
--forest-card      #0B3314   /* card bodies and tile captions on forest */
--navy             #04101B   /* media band */
--navy-card        #0B2B37   /* navy card body */
--brick            #61110C   /* community band, red card bodies */
--brick-deep       #58100A   /* pressed / darker red */
--ochre            #A8690F   /* newsletter band, primary button fill */
--ochre-card       #9B5D02   /* gold card body */
--ink              #141411   /* footer, warm near-black */

/* Marks */
--gold             #C9954A   /* hairlines, outline buttons, footer column heads */
--gold-bright      #D9A94F   /* hover state for gold */
--cream            #EBE4DA   /* text on dark */
--cream-dim        #C6BCAC   /* secondary text on dark */
--white            #FFFFFF
--slate-dim        #93A3B4   /* body text on navy */
```

### How color behaves

1. **Bands alternate light and dark**: dark → light → dark → light → dark → light → dark → dark →
   ochre → black. The eye is walked down a ladder. Never place two parchment bands adjacent.
2. **Each business vertical owns a hue** and keeps it everywhere it appears:

   | Vertical | Hue |
   |---|---|
   | Events | `--brick` |
   | Stays | `--forest` |
   | Hospitality | `--ochre` |
   | Production & Media | `--navy` |
   | Community & Development | `--brick` |

   The pillar icon, the pillar link, the matching card bodies, and the matching band all use it.
3. **Card bodies cycle through the vertical palette** in the Events row —
   brick, ochre, forest-card, navy-card, ochre, brick — so a row of six reads as a color chord, not
   a repeated component. Assign by position, not by content type.
4. **Card fills carry a slight vertical gradient** (≈ 8 % lighter at the top). Flat enough to read
   as printed ink, gradient enough to avoid looking like a CSS block.
5. **Gold is the only accent that crosses band boundaries.** It is the hairline, the outline button,
   the arrow, the footer column head. Nothing else is allowed to be a global accent.
6. **Parchment is near-flat.** Optional paper grain at ≤ 2 % opacity. No gradient, no vignette.

---

## 4. Typography

The reference sets everything display in a **bold condensed grotesque, all caps**, and everything
running in a **narrow humanist sans**. Recommended obtainable pairing:

- **Display** — `Oswald` 500/600/700 (fallback: `Barlow Condensed` 700, then
  `"Arial Narrow", system-ui`). Always uppercase in display roles.
- **Text** — `Barlow` 400/500/600 (fallback: `system-ui`). Sentence case.
- Dense strip copy may use `Barlow Semi Condensed` 400 to hold three lines in a narrow column.

### Scale

Derived from measured cap-heights and line pitches in the reference.

| Role | Size @1440 | Line-height | Weight | Case / tracking | Ref cap-h |
|---|---|---|---|---|---|
| Hero H1 | 49 px (`clamp(34px, 3.4vw, 52px)`) | **1.00** | 700 | UPPER, `-0.005em` | 25.5 |
| Centered feature title | 42 px | 1.00 | 700 | UPPER, `0` | 22 |
| Section title | 34 px | 1.00 | 700 | UPPER, `0` | 17.5 |
| Band title (Media / Community) | 30 px | 1.05 | 700 | UPPER, `0` | 15 |
| Pillar label | 19 px | 1.15 | 600 | UPPER, `0.01em` | 10 |
| Card title | 17 px | 1.25 | 600 | UPPER, `0.005em` | 9 |
| Tile caption | 16 px | 1.25 | 600 | UPPER, `0.01em` | 8.5 |
| Strip item title | 14 px | 1.2 | 600 | UPPER, `0.03em` | 7.5 |
| Nav link | 13 px | 1 | 600 | UPPER, `0.08em` | 7 |
| Micro link / eyebrow | 13 px | 1 | 600 | UPPER, `0.08em` | 7 |
| Body — hero | 15 px | 1.35 | 400 | sentence | — |
| Body — default | 14 px | 1.45 | 400 | sentence | — |
| Body — strip | 12.5 px | 1.4 | 400 | sentence | — |
| Card meta | 14 px | 1.35 | 400 | sentence | — |

### Typographic behavior — the important part

- **The scale is flat.** Hero 49 → feature 42 → section 34. A ratio of roughly 1.15 between the
  three largest levels. Hierarchy is created by *color field, position and weight*, not by a
  dramatic size jump. Resist the urge to set the H1 at 96 px; it will break the page.
- **Display leading is 1.0.** Multi-line display type is a solid block. The hero headline's four
  lines read as a slab.
- **Display type is never centered except once** — the pillars' feature title. Everything else is
  flush left (or flush right for the "view all" links).
- **Micro links are always uppercase, 600, tracked +0.08em, followed by a `→`** with an 8 px gap.
  This is the only link style on the page.
- **Body copy is short-measure**: 3–4 lines, ~34 characters per line in the pillar columns,
  ~46 characters in the hero. Line breaks are part of the composition — allow manual `<br>`
  or `text-wrap: balance` on short blocks.
- Card meta is set in two stacked lines (date, then place) rather than one line with a separator.

---

## 5. Surfaces, borders, radius, shadow

| Property | Value | Notes |
|---|---|---|
| `--radius-card` | **4 px** | events, stays, hospitality images, tiles |
| `--radius-control` | **3 px** | buttons, inputs, date chip |
| `--radius-pill` | *not used* | there are no pills on this page |
| Hairline | **1 px solid `--gold`** at 45–60 % alpha | flanking rules, tile borders, strip dividers |
| Nav button border | 1 px `rgba(255,255,255,.55)` | transparent fill |
| Card shadow | none by default | on hover: `0 6px 0 -2px rgba(0,0,0,.35)` — a **hard offset**, never a blur bloom |
| Date chip shadow | `0 2px 6px rgba(0,0,0,.45)` | the only soft shadow on the page |

**Radius discipline is the fastest way to get this right or wrong.** Everything on this page is
4 px or less. There are no 12 px cards, no 24 px containers, no rounded-full anything except the
four circular social icons in the footer.

---

## 6. Signature devices

Three recurring devices make the page recognizable. Use all three; do not add a fourth.

1. **The three-bar stripe rule.** A stack of three horizontal bars — forest, ochre, brick — total
   **183 × 17 px** at 1440 (ref 130 × 12: three 3 px bars separated by 2 px gaps). It appears under
   the hero headline and in the footer lockup. Build it in CSS/SVG from *our* palette; do not trace
   the reference's version.
2. **The hairline-flanked centered title.** A 1 px gold rule runs from the container's left edge to
   ~25 px before the title, and from ~25 px after it to the container's right edge, vertically
   centered on the title's cap-height. Used exactly once, on the pillars band.
3. **The overlapping date chip.** A parchment rectangle, **52 × 44 px** at 1440, inset 7 px from the
   card's top-left, sitting *on top* of the card image. Month in 11 px condensed caps above, day in
   19 px condensed bold below, both `--ink`, centered, 2 px gap. It is the only element on the page
   that overlaps another.

---

## 7. Section-by-section reconstruction

### 7.1 Hero

- Full-bleed photographic band, **no container**. Nav overlays it; there is no separate header band.
- **Image:** a single wide landscape photograph, subject placed right-of-center. Object-position
  `center 55%`. Content: golden-hour / blue-hour outdoor gathering — crowd at long tables, string
  lights, silhouetted palms, a warm architectural mass on the right third. Never a product shot,
  never an empty venue.
- **Scrim:** two layers.
  - Horizontal: `linear-gradient(90deg, rgba(4,10,6,.94) 0%, rgba(4,10,6,.72) 22%, rgba(4,10,6,0) 55%)`
    (measured: luminance rises from 3 at x=0 to ~150 at x=640 in the reference).
  - Vertical: `linear-gradient(180deg, rgba(4,10,6,.55) 0%, transparent 22%, transparent 62%, rgba(4,10,6,.6) 100%)`
    — the top layer buys nav legibility, the bottom grounds the crowd.
- **Text column:** left-aligned, inset **68 px** from the viewport edge (ref 48 — note this is
  *17 px more* than the standard gutter; the hero indents further than every other band). Column
  max-width ~ 46 % of viewport / 620 px.
- **Stack, top to bottom** (ref y → @1440 spacing):
  1. H1, 4 lines, 49 px / 1.0, white, `text-shadow: 0 2px 12px rgba(0,0,0,.55)`.
  2. gap **13 px** → stripe rule (183 × 17).
  3. gap **17 px** → body paragraph, 15 px / 1.35, `--cream` at 92 %, 4 lines.
  4. gap **20 px** → primary button.
- **Primary button:** `--ochre` fill, white 13 px caps `+0.08em`, **183 × 34 px** (ref 130 × 24),
  radius 3, no border, no shadow.
- Headline block sits at roughly **25 %–63 % of the hero's height** — it is vertically centered in
  the band, not bottom-anchored.

### 7.2 Navigation (overlaid on hero)

- Height **~55 px** at 1440, transparent, no border, sitting on the hero scrim.
- **Left:** logo lockup at **~60 px tall** (ref 43), followed by a small stacked descriptor set in
  3 lines of 8 px caps `+0.12em` at 55 % white, ~20 px to the right of the mark. This descriptor is
  a real compositional element — do not drop it.
- **Right of the logo, one flush row:** 7 uppercase nav links, 13 px / 600 / `+0.08em`, white,
  separated by **~40 px**. Link x-positions in the reference are evenly distributed across the
  remaining width — i.e. the nav row is `justify-content: flex-end` with a fixed gap, ending
  ~24 px before the button.
- **CTA:** outline button, **122 × 39 px**, 1 px `rgba(255,255,255,.55)`, transparent fill, radius 2,
  white 13 px caps `+0.06em`. Flush to the right gutter.
- No dropdowns visible. No search. No language switch.

### 7.3 Pillars — "Five ways" (parchment)

- Centered title with flanking gold hairlines (see §6.2). Title 42 px, `--forest`.
- **5 equal columns, no gutter, each centered.** Column centers in the reference sit at 12 %, 30 %,
  49 %, 69 %, 87 % of the container — i.e. simple equal fifths, with icons optically centered.
- Per column, top to bottom:
  1. gap **11 px** below the title rule → **line icon, 41 × 44 px, 2.5 px stroke**, in the
     vertical's hue. Lucide-style single-weight outline, no fill, no container, no circle behind it.
  2. gap **17 px** → pillar label, 19 px caps, `--forest`. Wraps to 2 lines on the longest label —
     keep the following body aligned to the *top* of its own box, so columns with a 2-line label
     shift down. The reference does exactly this; the raggedness is intentional.
  3. gap **20 px** → body, 14 px / 1.45, centered, 3–4 lines, `--ink` at 78 %.
  4. gap **22 px** → micro link `EXPLORE X →` in the vertical's hue.
- Icons: calendar-check, home, cloche/dome, video camera, group-of-three. One idea each, no
  duplicated metaphors.

### 7.4 Events (forest)

- **Header row:** section title flush left (34 px, white); `VIEW ALL EVENTS →` flush right in
  `--gold`, 13 px caps. The two are **vertically centered on each other**, not baseline-aligned.
- gap **14 px** → the card row.
- **6 cards, 207 × 229 px** (ref 147 × 163), radius 4, no border.
  - **Image: 207 × 103 px — exactly 2 : 1**, `object-fit: cover`, radius 4 on the top corners only.
  - **Body: 126 px tall**, solid vertical-cycling color (§3.3), padding **14 px** left/right,
    **15 px** top, **13 px** bottom.
  - Body stack: title (17 px caps, 2 lines, white, pitch 21 px) → **8 px** → date (14 px, cream 85 %)
    → location (14 px, cream 85 %, pitch 18 px) → **12 px** → `GET TICKETS →` (13 px caps, white).
  - **Date chip** per §6.3, overlapping the image top-left.
- Image subjects: one per event type — festival tents at dusk, a lit dining room, a sunset
  treeline, fireworks, a sports team, string lights over tables. Every image is shot at night or
  golden hour. Nothing daylit, nothing white-background.

### 7.5 Stays (parchment)

- Same header pattern; `VIEW ALL PROPERTIES →` in `--forest` (the link takes the *band's*
  dark color here, because the band is light — gold would not hold).
- **6 cards, 207 × 195 px** (ref 147 × 139), radius 4.
  - **Image: 207 × 105 px — 1.96 : 1.**
  - **Body: 90 px**, `--forest` fill with a subtle lighter top-left gradient, padding 14 px.
  - Stack: title (17 px caps, white, 1 line) → **9 px** → location (14 px, `--cream-dim`) →
    **7 px** → outline button.
  - **Outline button:** **122 × 20 px** (ref 87 × 14), 1 px `--gold`, transparent fill, radius 3,
    gold 12 px caps `+0.06em`, with a `→` pushed to the right edge of the button and separated from
    the label by ~14 px of space. This "label left, arrow right, inside a tight outline" is a
    distinct control — do not replace it with a plain text link.
- Image subjects: exteriors and interiors at blue hour, warm interior light spilling out, water or
  reflection when possible. One interior among six for rhythm.

### 7.6 Brasiliana / cultural panel (forest + foliage)

- Full-bleed `--forest` with a **tone-on-tone foliage pattern** — large tropical leaves at roughly
  8 % lightness above the ground color, concentrated in the left third and the far right, absent
  behind the tiles. Use an SVG pattern or a dark-multiplied PNG; keep contrast under 10 %.
- **Split: 28 % / 72 %, 24 px gap.**
- **Left column (371 px):**
  1. A **display lockup** occupying ~150 px of height — this is the page's one expressive
     typographic moment. In the reference it is a bespoke multi-color illustrated wordmark. **Build
     our own**: our word set in the display face at ~54 px, with per-letter color drawn from
     `--forest-card / --ochre / --brick / --gold`, optionally with small vector ornaments in the
     counters. It must feel hand-made and it must not resemble the reference's lettering.
  2. gap **20 px** → tagline, 15 px caps `+0.05em`, white — three words, each closed with a period.
  3. gap **17 px** → body, 14 px / 1.5, `--cream-dim`, 4 lines.
  4. gap **20 px** → ochre-filled button, ~190 × 30 px.
- **Right column: 5 tiles, 176 × 210 px** (ref 125 × 149), **1 px `--gold` border at ~55 % alpha,
  radius 4**, the border wrapping image *and* caption as one unit.
  - **Image: 176 × 148 px — 1.19 : 1** (near-square, slightly landscape), inset by the 1 px border.
  - **Caption block: 62 px**, `--forest-card`, caption centered, 16 px caps, 1–2 lines, vertically
    centered.
- These bordered tiles are the only bordered cards on the page. That is what marks this band as
  a different kind of content.

### 7.7 Hospitality (parchment)

- Same header pattern; `VIEW ALL HOSPITALITY →` in `--forest`.
- **4 columns, 20 px gap. No card.** The image sits directly on the parchment and the caption sits
  directly under it — this is the rhythm break in the middle of the page and it must not be
  converted into cards.
  - **Image: 316 × 128 px — 2.47 : 1**, radius 4, no border, no shadow.
  - gap **10 px** → title, 17 px caps, `--forest`, **centered**.
  - gap **13 px** → caption, 14 px / 1.4, centered, 1–2 lines, `--ink` at 75 %.
- Note the alignment switch: Events and Stays are left-aligned inside cards; Hospitality is centered
  on open ground. Keep it.

### 7.8 Production & Media (navy strip)

- Band height **131 px**. `--navy` field with a barely-there noise texture.
- **Band title flush left at the top** (30 px caps, white), then the item row below it.
- **5 items in a row, separated by 1 px vertical `--gold` hairlines at 40 % alpha** running the
  full height of the item row (measured divider positions: 27 %, 63 %, 81 % of the container — the
  items are *not* equal width; they size to their content). Let them be uneven.
- Each item: **28 px ochre line icon at left**, 14 px gap, then a text block —
  title (14 px caps, white) → **5 px** → body (12.5 px / 1.4, `--slate-dim`, 3 lines).
- **Right-aligned ochre button**, ~145 × 34 px, vertically centered against the item row.
- This band is deliberately the densest thing on the page. It should feel like a masthead's
  contributor strip.

### 7.9 Community & Development (brick strip)

- Band height **105 px**. `--brick` field.
- Same strip anatomy as §7.8 with **one variation**: the band title moves **into the row**, flush
  left and vertically centered, set in 2 lines of 30 px caps. The 5 items then begin to its right.
- Icons and hairlines in `--gold`; body copy in cream at 78 %.
- Right-aligned gold button.
- Read §7.8 and §7.9 as a **diptych**: two strips of the same construction in two different colors,
  differentiated only by where the title sits. That pairing is the page's closing cadence before
  the capture band.

### 7.10 Newsletter (ochre bar)

- Band height **65 px**, `--ochre`, with a soft darker vignette at both ends.
- Left group, vertically centered: **outlined envelope icon ~46 px**, 20 px gap, then
  title (17 px caps, `--ink`) → **4 px** → body (13 px / 1.35, 2 lines, `--ink` at 78 %).
- Right group: **input 343 × 34 px** (ref 244 × 24), `--parchment-hi` fill, 1 px border at 12 %
  black, radius 3, placeholder 14 px at 45 % ink, 16 px left padding — then an **8 px gap** —
  then **`SUBSCRIBE` button, 112 × 34 px**, `--forest` fill, white 13 px caps `+0.06em`, radius 3.
- The 8 px gap between field and button is tight on purpose; they read as one control.

### 7.11 Footer (near-black)

- `--ink` field, ~220 px, with a **1 px `--gold` rule along its top edge** (the only rule separating
  two bands on the entire page — it exists because ochre-on-black needs the seam).
- Four zones on one row, top-aligned:
  1. **Logo lockup + descriptor** (as in the nav), then the stripe rule beneath it, then a
     one-line legal micro-copy at 11 px, 40 % white.
  2. **EXPLORE** — column head in `--gold`, 12 px caps `+0.1em`, then **two sub-columns** of links.
  3. **COMPANY** — one column of 3 links.
  4. **RESOURCES** — two sub-columns of links.
  5. **FOLLOW US** — column head, then **4 circular outline social icons, 30 px, 1 px white at
     35 %** — the only circles on the page.
- Links: 12.5 px, `--cream-dim`, 9 px vertical pitch. Column heads sit ~14 px above the first link.
- A bottom hairline at 10 % white with copyright left and 2–3 legal links right.

---

## 8. Motion

**Philosophy:** the page is print that woke up. Motion confirms structure; it never performs.
Everything is short, linear-feeling, and slightly mechanical. No springs, no bounce, no float.

- **Easing:** `cubic-bezier(0.2, 0.7, 0.2, 1)`. **Durations:** 180 ms (hover), 480 ms (reveal),
  700 ms (hero).
- **Entrance (once, at 20 % viewport):** band title fades + rises 20 px; the row beneath it
  staggers children by **55 ms**, each fading in and rising **24 px**. Never scale on entrance.
- **Hero:** the four headline lines reveal on a `clip-path` wipe from below, staggered 80 ms;
  the stripe rule scales in horizontally from the left (`transform-origin: left`) after the last
  line; body and button fade at 400 ms. The hero image holds a slow `scale(1.06) → scale(1.0)` over
  1.4 s on load, then a scroll-linked `translateY` of at most **6 %** — parallax so subtle it is
  felt, not seen.
- **Nav:** transparent over the hero; after the hero passes, it solidifies to `--forest` at 96 %
  with a 1 px gold bottom hairline, over 220 ms. Links get a **gold underline that wipes in from
  the left** (2 px, 160 ms) — no color change, no opacity change.
- **Cards (Events / Stays / Brasiliana tiles):** on hover the **image scales to 1.05** inside its
  clipped box while the **date chip stays put** (this is the whole effect — the depth comes from
  the chip not moving); the body fill lightens ~6 %; the `→` translates +4 px; the card lifts 2 px
  with a **hard offset shadow**, not a blur.
- **Hospitality (no card):** image scales 1.04 and the title shifts to `--ochre`. Nothing else.
- **Strips:** on hover, the item's icon goes `--gold` → `--gold-bright` and its title underlines.
  On entrance the vertical hairlines draw from the top down over 400 ms.
- **Micro links everywhere:** arrow +4 px, 160 ms. That is the universal affordance.
- **Reduced motion:** all reveals become a 200 ms opacity fade; parallax, image scale and the hero
  wipe are disabled; hover states keep only color and the arrow shift.

---

## 9. Imagery direction

- **Time of day is a rule, not a preference:** golden hour, blue hour, or after dark with warm
  artificial light. If a candidate image is daylit, it does not go on this page.
- **Light sources in frame:** string lights, candles, table lamps, lit windows, fire, stage light.
  Small warm points against a deep field. This is what ties every photograph to the palette.
- **Subjects:** people gathered (backs and three-quarter views over posed faces), tables set,
  buildings lit from within, silhouetted vegetation, food and drink shot close and dark.
- **Crop hard.** Aspect ratios in use: **2 : 1** (events, stays), **2.47 : 1** (hospitality),
  **1.19 : 1** (tiles), wide landscape (hero). Never letterbox to fit — recrop.
- **Treatment:** slight contrast lift, shadows crushed toward the band's own dark tone, saturation
  held back except in the warm highlights. Apply a shared grade so a row of six images reads as one
  shoot even when it is not.
- **No overlays on card images** except the date chip. The color body under the image does the job
  a gradient overlay would otherwise do.
- **Typography never sits on a photograph** except in the hero. Everywhere else, text sits on a
  solid field. This is a strict rule and it is what keeps the page legible at speed.

---

## 10. Responsive

Verified breakpoints: **390 / 768 / 1440**. Additional handling at 1024 and ≥1600.

### ≥1600 px
Bands stay full-bleed; content caps at 1520 px and centers. Type scales up ~6 %; the container's
93 % relationship stops applying once the cap is hit.

### 1024–1439 px
- Gutter → 32 px. Hero text inset → 44 px. H1 → 40 px, section titles → 28 px.
- Events / Stays: **6-up becomes a horizontal snap carousel that bleeds off the right edge**, card
  width fixed at ~200 px, `scroll-snap-type: x mandatory`, gap 14 px, with the last card
  deliberately half-visible to signal scroll. Do not reflow to 3 × 2 — the single-row rhythm is the
  design.
- Hospitality → 2 columns.
- Pillars → 3 + 2, second row centered.
- Brasiliana → left column full width above; tiles become a 5-up horizontal carousel.
- Strips (§7.8/7.9) → title above, items in a 3 + 2 grid, button full-width at the bottom.

### 768 px (tablet)
- Gutter 28 px. H1 → 36 px. Section titles → 26 px.
- **Hero recomposes:** switch to a 4:5 or 1:1 crop of the same photograph, with the scrim rotated to
  vertical (`180deg`, dark at the bottom) and the text block sitting in the lower 45 %. The
  horizontal scrim does not work in portrait — do not just scale it.
- Pillars → 2 columns, left-aligned rather than centered, with a 1 px gold hairline between rows.
- Events / Stays / Tiles → carousels, card width ~200 px.
- Hospitality → 2 columns.
- Newsletter → title block above, field + button below, both full width.
- Footer → 2 × 2 zones.

### 390 px (mobile)
- Gutter 20 px. Band padding 28 px. H1 → **34 px / 1.0** (still four lines — keep the slab).
- Nav → logo left, hamburger right. Menu opens as a **full-screen `--forest` overlay**, links set
  at 28 px display caps stacked with 1 px gold hairlines between them, the CTA as a full-width
  ochre button at the bottom, and the stripe device beneath it. Overlay slides down over 300 ms.
- **Events / Stays:** single-row carousel, **card width 74 vw**, gap 12 px, bleeding to the screen
  edge (negative margin equal to the gutter, with matching scroll-padding). Date chip → 44 × 38 px.
- **Pillars:** single column, **left-aligned**, with the icon inline to the left of the label rather
  than stacked above it; body and link below. Rows separated by 1 px gold hairlines. This is a real
  recomposition, not a stack — five centered columns in a row is dead space on a phone.
- **Brasiliana:** display lockup at ~40 px, copy, button; then tiles as a 2-up grid (the 5th tile
  spans full width) — a carousel here competes with the Events carousel above.
- **Hospitality:** single column; image aspect relaxes to **16 : 9**; caption left-aligned under it.
- **Strips:** the icon row becomes a vertical list; hairlines rotate to horizontal separators;
  button full-width.
- **Newsletter:** icon and title on one line, body below, then field, then full-width button.
- **Footer:** logo zone, then link groups as an accordion or a 2-column list, then socials centered.
- **Drop on mobile:** the foliage pattern in §7.6 (keep a faint version at ≤6 %), the hero's
  vertical parallax, and the nav descriptor lines.
- **Never drop on mobile:** the stripe device, the date chips, the color-cycling card bodies, the
  centered feature title with hairlines (the hairlines shorten but stay).

---

## 11. Anti-patterns for this specific page

Beyond the project-wide list in `CLAUDE.md`, these would each individually break this art direction:

- Any border-radius above 6 px. This is the single fastest way to lose the reference.
- A narrow (≤1200 px) container or generous (≥28 px) column gaps.
- A dramatic type scale — an 80–120 px hero headline over a 24 px section title.
- Soft, large, blurred shadows; hover "lift and glow"; any glassmorphism on the bands.
- Converting the Hospitality row into cards, or the Events row into a 3 × 2 grid.
- Adding whitespace between bands, or a rule/divider between them.
- Centering the hero.
- Using gold as a background for large areas other than the newsletter bar.
- Icon-per-feature proliferation: icons appear in exactly three places (pillars, media strip,
  community strip) and nowhere else.
- Gradient overlays on card images.
- Letting any photograph be daylit, white-background, or cool-toned.
- More than one expressive/illustrated typographic moment (§7.6 is the only one).

---

## 12. Build order and quality gate

1. Tokens: palette, type scale, spacing, radius (§2–§5).
2. Band shell + container primitive; verify the light/dark ladder with empty bands first.
3. Nav + hero (§7.1–7.2) — get the scrim and the flat type scale right before anything else.
4. Pillars, Events, Stays (§7.3–7.5) — these establish the card system.
5. Brasiliana, Hospitality (§7.6–7.7) — the rhythm breaks.
6. Media, Community, Newsletter, Footer (§7.8–7.11).
7. Motion pass (§8), then reduced-motion pass.
8. Responsive pass at 1440 → 1024 → 768 → 390 (§10), treating 768 and 390 as recompositions.

**Gate.** The page is not done until, side by side with the reference at the same zoom:
band order and relative band heights match; the container edge and column gaps match; the corner
radius reads identically; the type scale looks equally flat; and the color ladder walks the eye
down the page in the same rhythm — using entirely our own logo, copy, and photography.
