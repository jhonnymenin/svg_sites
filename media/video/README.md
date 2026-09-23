# Web video — Serving Good Vibes family

The loops are silent. H.264 files are High profile, yuv420p, +faststart and have no audio track. VP9 WebM files are also silent, yuv420p, 2-pass.
Every loop ends with a 0.3 s (Sunset Grove: 0.5 s) crossfade back into its first frame, so `loop` plays through without a visible jump.
Posters are the first frame of each file, JPG q80 progressive. Cuts inside each loop are 0.3 s fades (Sunset Grove: 0.5 s).
Source paths are relative to `~/Downloads/SGV Marketing/`. `vNNN` ids match `media/videos.json`. Timecodes are in seconds.

Recommended markup:

```html
<video autoplay muted loop playsinline preload="metadata" poster="sgv-hero-loop-poster.jpg">
  <source src="sgv-hero-loop.webm" type="video/webm">
  <source src="sgv-hero-loop.mp4"  type="video/mp4">
</video>
```

## 1. `sgv-hero-loop` (Serving Good Vibes homepage hero)

| File | Size | Dims | Dur |
|---|---|---|---|
| sgv-hero-loop.mp4 | 4.9 MB | 1920×800 (2.4:1) | 12.7 s |
| sgv-hero-loop.webm | 4.1 MB | 1920×800 | 12.7 s |
| sgv-hero-loop-poster.jpg | 112 KB | 1920×800 | |
| sgv-hero-loop-mobile.mp4 | 2.6 MB | 720×1280 (9:16) | 12.1 s |
| sgv-hero-loop-mobile.webm | 2.0 MB | 720×1280 | 12.1 s |
| sgv-hero-loop-mobile-poster.jpg | 50 KB | 720×1280 | |

- Source: v9 `SGV Fall_Winter launch/SGV FALL 2026 V2.mp4` (4K, 24 fps). Every shot is cropped to the top 1560 px (72%), which removes the burned-in subtitles. Desktop uses crop 3744×1560 → 1920×800. Mobile uses 878×1560 vertical slices taken from the same subtitle-free band, re-framed on the subject for each shot.
- Desktop shots, in order: 56.3 (phone-light crowd, night stage) · 36.5 (dancer, pink light) · 48.3 (crowd dancing) · 46.25 (band + dancer) · 83.75 (drums, bokeh) · 79.2 (purple dance floor) · 103.1 (fiddle close-up) · 104.7 (percussion circle) · 99.2 (band under string-lit oak) · 7.25 ("good vibes" neon) → loops to the crowd.
- Mobile shots: the same set with 37.8 (dancing feet) in place of 36.5. The neon is dropped because it does not read in a 9:16 slice.
- Grade: eq contrast 1.04 / sat 1.06, soft vignette, light hqdn3d before encoding.
- Use: SGV homepage hero. Use `object-fit: cover`. The desktop file is 2.4:1, so it can fill a 16:9 viewport with a slight side crop, or sit letterboxed as a cinematic band.

## 2. `sgv-film` ("Watch the film" modal)

| File | Size | Dims | Dur |
|---|---|---|---|
| sgv-film.mp4 | 81.6 MB | 1920×1080 | 2:15 |
| sgv-film-poster.jpg | 115 KB | 1920×1080 | |
| sgv-film-poster-alt.jpg | 169 KB | 1920×1080 | |

- Source: v9, full length. It keeps the original burned-in subtitles. H.264 CRF 23 (≈4.7 Mb/s) + AAC 128k stereo, +faststart. The source timecode track and metadata were stripped.
- Poster: t=7.23, the "good vibes" neon. Alt poster: t=56.22, the phone-light crowd from the stage. Both frames have no subtitles.
- Use: load it on demand in the modal (`preload="none"`). Because it is 82 MB, a streaming host (Mux, Cloudflare Stream, Vimeo) is better if it gets heavy traffic.

## 3. `chez-loop` (Chez La Fête)

| File | Size | Dims | Dur |
|---|---|---|---|
| chez-loop.mp4 | 2.5 MB | 1280×720 | 11.1 s |
| chez-loop.webm | 1.9 MB | 1280×720 | 11.1 s |
| chez-loop-poster.jpg | 42 KB | | |
| chez-loop-vertical.mp4 | 2.7 MB | 720×1280 | 10.9 s |
| chez-loop-vertical.webm | 2.0 MB | 720×1280 | 10.9 s |
| chez-loop-vertical-poster.jpg | 78 KB | | |

- 16:9 shots: v9 50.0 ("Courtyard" sign pan, 16:9 crop from the subtitle-free band) · v9 101.2 (the house's "Chez La Fête" neon wall) · v108 7.0 (couples dancing in front of the house at night) · v103 4.0 (crowd + stage under the blue-lit oak) · v9 99.2 (band under string lights) · v108 11.0 · v102 2.0 (fiddler, blue lights).
  v102/v103/v108 = `SGV Event Photos/EVENTS @CHEZ LA FETE/High Notes 3.6.26/HighNotes3626_996a18/000014|000025|000020.mp4`.
- Vertical shots: v9 101.2 (neon sign, with a crop that tracks the camera pan) · v111 8.0 (dancing by the house) · v88 3.0 (fiddler, lit oak) · v9 99.2 (accordion player, string lights) · v111 14.0 · v91 1.5 (accordion + bass) · v95 1.0 (stage + crowd). All are High Notes 3.6.26 except the v9 shots.
- Grade: the phone clips are pulled down to saturation 0.86 with gamma 1.03 so they sit closer to the film footage.
- Use: Chez La Fête hero / events section. Use the vertical file for mobile.

## 4. `sunset-grove-loop`

| File | Size | Dims | Dur |
|---|---|---|---|
| sunset-grove-loop.mp4 | 3.8 MB | 1920×1080 | 9.1 s |
| sunset-grove-loop.webm | 3.0 MB | 1920×1080 | 9.1 s |
| sunset-grove-loop-poster.jpg | 470 KB | | |

- Source: v856 `Vacations Properties/Sunset Grove/VIDEO/Copy of SunsetGrove.mp4`: 6.6 (oak canopy) · 9.3 (swing → house reveal) · 20.0 (house across the pond) · 107.0 (drone over the property) · 91.0 (barn house). The shots avoid the logo (3–6 s) and the end card.
- Slower 0.5 s dissolves, a gentle warm balance, and a bitrate cap (3.4 Mb/s) because the dense foliage is expensive to encode.
- Use: Sunset Grove property block (the properties section of the SGV hub).

## 5. `braziliana-loop`

| File | Size | Dims | Dur |
|---|---|---|---|
| braziliana-loop.mp4 | 2.7 MB | 1280×720 | 10.8 s |
| braziliana-loop.webm | 3.0 MB | 1280×720 | 10.8 s |
| braziliana-loop-poster.jpg | 128 KB | | |
| braziliana-loop-vertical.mp4 | 2.5 MB | 720×1280 | 10.4 s |
| braziliana-loop-vertical.webm | 2.6 MB | 720×1280 | 10.4 s |
| braziliana-loop-vertical-poster.jpg | 208 KB | | |

- Source: `SGV Event Photos/DTA! Ft. Braziliana/DTAFtBraziliana41026_415e12/` at golden hour, with the painted mural stage and dancing in the square.
- 16:9 shots: v654 4.0 (band in front of the mural) · v668 3.0 (crowd dancing) · v648 4.0 (cavaquinho, pink stage light) · v639 9.0 (dancing couples) · v667 2.0 (trumpet) · v661 7.0 (dancer in a Brazil jersey).
- Vertical shots: v681 0.5 (Brazil-jersey couple dancing) · v662 1.5 (bassist against the blue bubble mural) · v644 3.0 (cavaquinho singer) · v647 2.0 (couple dancing by the mural) · v634 1.0 · v674 1.0.
- Grade: saturation 1.08 with a slight warm shift, to unify the phone footage.
- Use: Braziliana hero / culture section.

## 6. `se-loop` (Social Entertainment collage / Americana)

| File | Size | Dims | Dur |
|---|---|---|---|
| se-loop.mp4 | 2.0 MB | 1280×720 | 9.6 s |
| se-loop.webm | 1.0 MB | 1280×720 | 9.6 s |
| se-loop-poster.jpg | 34 KB | | |
| se-loop-bw.mp4 | 1.9 MB | 1280×720 | 9.6 s |
| se-loop-bw.webm | 1.1 MB | 1280×720 | 9.6 s |
| se-loop-bw-poster.jpg | 26 KB | | |

- Source: v9, 16:9 crops (2773×1560 from the subtitle-free band): 116.65 (hands on keys) · 32.95 ("Serving Good Vibes" sign) · 37.8 (dancing feet) · 69.6 (accordion) · 62.7 (sneakers + soccer ball) · 97.4 (beer tap pour) · 50.0 ("Courtyard" lettering) · 56.25 (phone-light crowd) · 27.0 (festival crowd).
- `se-loop` is lightly desaturated color. You can also apply `filter: grayscale(1) contrast(1.2)` to it in CSS. `se-loop-bw` is a pre-baked high-contrast B&W version with animated grain.
- Use: SE collage panels and section backgrounds. It works well small or masked.

## Caveats

- The v9 subtitles are removed by cropping only (top 72% of frame). Nothing is painted out. The full film keeps them by design.
- Much of the event footage is 720p phone video (Chez, Braziliana). Those loops are delivered at 720p and should not be shown larger than about 1280 px wide without some softness.
- The encode masters (CRF 10) and the build specs are in a scratch directory and are not kept here. The loops can be rebuilt from the source timecodes above.
