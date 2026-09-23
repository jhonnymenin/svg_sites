# Verified facts from the client's marketing drop (2026-09-22)

Source: `~/Downloads/SGV Marketing` — brand guide, Fall/Winter 2026 master launch file, 2026 event lineup poster, social media guide. These override mockup/placeholder copy where they conflict.

## Brand — Serving Good Vibes (FINAL Brand Guide 2026)
- Positioning: "Serving Good Vibes is a lifestyle-driven experience company rooted in hospitality, events, and consulting. Built on the belief that how people feel is just as important as how something is executed, we create, host, and advise on experiences that bring people together, strengthen communities, and leave a lasting impression. Whether we're welcoming guests, producing events, or consulting with partners, we exist to set the tone, remove the stress, and deliver moments worth remembering, so everyone involved can fully show up and enjoy the experience."
- Logo divisions line: "HOSPITALITY • PRODUCTION • COMMUNITY & DEVELOPMENT" / "A SOCIAL ENTERTAINMENT COMPANY".
- Logo usage: white or approved brand colors only; never distort/alter. Use the files in `packages/brand/assets/logos` (served at `/brand/logos/*.webp`) or the `SgvMark` component (`variant` horizontal|stacked|circle, `tone` dark|light).
- Palette — primary: red `#8C2A26`, gold `#E0AD46`, olive `#566F46`, deep teal `#044C58`; secondary: cream `#E9D7A5`, teal `#1A7081`.
- Fonts: headline TAN Tangkiwood (commercial, not on Google — use Fraunces 800–900 with SOFT 100 as the web stand-in; the stripes + real logo carry the identity), body Rubik Medium, alternate Rubik Bold.
- Voice lines from the launch: "The vibes are just getting started." · "Pardon our progress. Come join the vibes." · "So much more coming in 2027." · "Events. Experiences. Hospitality. Activations. Community. Lifestyle." · "We're more than events." · "Book your public or private event at any of our properties." · After 15 years of Social Entertainment Productions (SEP), SGV is "the service, experience, lifestyle and activation-driven company under the Social Entertainment umbrella."
- Domain: servinggoodvibes.com (currently redirects to socialentertainment.net).

## Fall/Winter 2026 calendar (today is 2026-09-22 — Village Beats already happened)
| Date | Event | Lineup / what | Where | Time | Tickets |
|---|---|---|---|---|---|
| Thu Sep 17 (past) | Village Beats | Wayne Toups & DJ RV | West Village, Scott, LA | 6–10p | socialentertainment.net/event-details/village-beats-ft-wayne-toups |
| Fri Sep 25 | Downtown Rising (HERO EVENT, night 1) | Big Freedia, Boyfriend, Void, Kidd Love, DJ Ro & DJ Snuz Butt'n | Parc International, Downtown Lafayette | 5–11p | socialentertainment.net/event-details/downtown-rising |
| Sat Sep 26 | Downtown Rising (night 2) | Anders Osborne, Dumpstaphunk, Flow Tribe, Skye Isaac & DJ RV | Parc International | 5–11p | same |
| Sat Oct 3 | Sugar Jam | HWY 90 & Zeus | Sugar Mill Pond, Youngsville, LA | 6–9p | socialentertainment.net/sugar-jam |
| Fri Oct 23 | Acadiana Eats Festival | Rockin' Dopsie Jr & the Zydeco Twisters & DJ Lovebenoir | West Village, Scott, LA | 5–10p | socialentertainment.net/acadianaeatsfestival |
| Sat Oct 24 | Acadiana Eats Festival | Mike Dopsie & Zydeco Entourage, Que Beleza & DJ RV | West Village, Scott | 11a–5p | same |
| Fri Nov 6 | High Notes | Lost Bayou Ramblers | Chez La Fête, Downtown Lafayette | 7–11p | socialentertainment.net/high-notes |
| Sat Nov 7 | Egan Cup Invitational | Ping pong, music, food, cocktails, friendship, and community | SGV HQ, Downtown Lafayette | 9a–5p | socialentertainment.net/egancup |
| Sat Dec 19 | Holiday Open House | Live music by the Braziliana House Band — details coming soon | SGV HQ, Downtown Lafayette | TBD | — |
- Partners/sponsors: socialentertainment.net/partners-sponsors · Vendors: socialentertainment.net/vendors
- Partner pitch: "One season. Seven events. Thousands of guests across Acadiana — from downtown Lafayette to Scott, Youngsville and beyond. Put your brand where the vibes are." Stats: 7 events this season · 15+ years producing Acadiana events · 4 cities across South LA · 22 company-wide partnership slots. Levels: Presenting/Title, Headline, Supporting, Community.

## Properties & spaces
- Vacation stays promoted via SGV: **Salty Air Retreat — Perdido Key, FL** (not "Pensacola Key"), **Saint John Inn** (Lafayette), **Sunset Grove** (Broussard, "Est 2022"), **Camellia Cottage** (Lafayette). Each has its own logo in `/brand/logos/stay-*.webp` (Camellia has none).
- Gathering spaces: **Chez La Fête** (Guesthouse & Backyard — larger parties; own social channels; ChezLafete.com) and **the Good Vibes Room** ("a cultural living room — intimate, vibrant, perfect for smaller gatherings", downtown; this is the Braziliana/Sala room where Bossa Nova nights happen).
- Chez La Fête REAL look (pro shoot): white cottage, eclectic and colorful — hot-pink doors, teal velvet bar stools, gallery walls of colorful art, pink "Chez La Fête" neon on a green wall, magnolia mural fence, "Bienvenue" fence, live-oak tree deck, "Courtyard Stage", yellow umbrellas with mint bistro sets, sail-shade lounge, Fest House Lounge, wet bar. The site should feel like THIS place.
- Services: catering, event rentals, the Good Vibes Photo Booth (primary rental product — "an easy, fun add-on for celebrations and events"), Good Vibes Mobile Bus.

## Other brands (logos available in `/brand/logos/`)
- Social Entertainment (`se-black`, `se-white` — only 241px wide source; fine up to ~90px tall).
- Braziliana (`braziliana` — official multicolor logo, 1800px).
- Events: `event-downtown-rising`, `event-downtown-rising-color`, `event-high-notes`, `event-village-beats`, `event-sugar-jam` (small, 194px), `event-acadiana-eats`, `event-wineaux`, `event-yacht-rock`, `event-last-night`, `event-kids-poetry-booth`, `event-downtown-kids-camp`.

## Curated photography
- `media/library/*.jpg` (web-ready, ≤2400px) + `media/library/index.json`; per-domain picks with scores, uses and focal points in `media/selections/{events,properties,chez-braziliana}.json`.
- Copy what you use into `apps/<app>/public/images/...` (optionally re-save at the needed size). Remove replaced placeholder stock images and their CREDITS.md lines.
- Caveats: most event photos are iPhone (~2016px) — use them at moderate sizes, with overlays/grain; `dtr-stage-crowd-01` came from photographer Adam Burke (watermark cropped) — keep, but flag for credit; check releases for children's photos before launch.
- Video: `media/video/` (see its README when present).
