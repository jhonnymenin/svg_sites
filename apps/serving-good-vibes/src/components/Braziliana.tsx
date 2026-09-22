import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Container } from "./Container";
import { BrazilianaWordmark } from "./BrazilianaWordmark";
import { cn } from "./cn";

type Tile = { caption: string; image: string; alt: string; focus?: string };

// PHOTOS ARE PLACEHOLDERS — see public/images/CREDITS.md.
const TILES: Tile[] = [
  { caption: "Events & Cultural Exchange", image: "/images/br-cultural.jpg", alt: "A capoeira roda at night, players mid-kick inside a ring of musicians", focus: "62% 50%" },
  { caption: "Food & Beverage", image: "/images/br-food.jpg", alt: "Pão de queijo in a dark ceramic bowl", focus: "50% 50%" },
  { caption: "Sala Braziliana", image: "/images/br-sala.jpg", alt: "A cocktail and a candle on a bar top in a dim, warm room", focus: "70% 50%" },
  { caption: "Good Vibes Mobile", image: "/images/br-mobile.jpg", alt: "A food truck under string lights at night", focus: "62% 50%" },
  { caption: "Merch & Subscriptions", image: "/images/br-merch.jpg", alt: "A patterned cap brim shading a face", focus: "50% 40%" },
];

/** Tone-on-tone tropical fronds, ~8 % above the ground, kept to the band's edges (§7.6). */
function Frond({ className, flip = false }: { className?: string; flip?: boolean }) {
  const n = 18;
  const pt = (t: number) => ({
    x: (1 - t) ** 3 * 20 + 3 * (1 - t) ** 2 * t * 110 + 3 * (1 - t) * t ** 2 * 200 + t ** 3 * 380,
    y: (1 - t) ** 3 * 390 + 3 * (1 - t) ** 2 * t * 300 + 3 * (1 - t) * t ** 2 * 190 + t ** 3 * 70,
  });
  return (
    <svg viewBox="0 0 400 400" aria-hidden className={cn("absolute", className)} style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M20 390 C 110 300, 200 190, 380 70" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      {Array.from({ length: n }, (_, i) => {
        const t = (i + 1.5) / (n + 1);
        const { x, y } = pt(t);
        const a = pt(Math.min(t + 0.01, 1));
        const dir = (Math.atan2(a.y - y, a.x - x) * 180) / Math.PI;
        const len = 40 + 120 * Math.sin(Math.PI * (0.12 + t * 0.78));
        const w = len * 0.13;
        const leaf = `M0 0 Q ${len * 0.45} ${-w * 1.4}, ${len} 0 Q ${len * 0.45} ${w * 0.6}, 0 0 Z`;
        return (
          <g key={i} transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`}>
            <path d={leaf} fill="currentColor" transform={`rotate(${(dir - 62).toFixed(1)})`} />
            <path d={leaf} fill="currentColor" transform={`rotate(${(dir + 58).toFixed(1)}) scale(1 -1)`} />
          </g>
        );
      })}
    </svg>
  );
}

function Monstera({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={cn("absolute", className)}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M100 190 C 40 180, 8 130, 14 82 C 20 36, 60 10, 104 10 C 150 12, 190 44, 188 96 C 186 146, 150 184, 100 190 Z
           M100 186 L 102 40 L 98 40 Z
           M36 70 C 60 78, 80 86, 99 96 L 99 92 C 80 80, 60 70, 40 60 Z
           M30 110 C 55 112, 78 112, 99 116 L 99 112 C 78 106, 56 102, 30 100 Z
           M44 150 C 64 142, 82 136, 99 134 L 99 130 C 82 130, 62 134, 40 142 Z
           M166 64 C 142 74, 122 84, 101 96 L 101 92 C 120 78, 140 66, 160 56 Z
           M172 106 C 148 108, 124 110, 101 116 L 101 112 C 124 104, 148 98, 172 96 Z
           M158 150 C 138 142, 120 136, 101 134 L 101 130 C 120 130, 140 134, 162 142 Z
           M58 96 a 7 9 0 1 0 0.1 0 Z M146 94 a 7 9 0 1 0 0.1 0 Z"
      />
    </svg>
  );
}

export function Braziliana() {
  return (
    <section id="braziliana" aria-labelledby="braziliana-title" className="relative overflow-hidden bg-forest py-(--band-y)">
      {/* foliage — left third and far right, absent behind the tiles; faint on phones */}
      <div aria-hidden className="pointer-events-none absolute inset-0 text-[#0a2a13] opacity-70 lg:opacity-100">
        <Frond className="-top-24 -left-28 w-[440px] rotate-[8deg]" />
        <Monstera className="-bottom-20 left-[14%] hidden w-[260px] rotate-[-24deg] lg:block" />
        <Frond className="-bottom-40 -left-16 w-[380px] rotate-[-30deg]" />
        <Frond flip className="-top-20 -right-36 hidden w-[420px] rotate-[-6deg] lg:block" />
        <Monstera className="-right-24 -bottom-24 w-[280px] rotate-[32deg]" />
      </div>
      <div aria-hidden className="ink-tooth pointer-events-none absolute inset-0" />

      <Container className="relative">
        <div className="grid gap-9 lg:gap-8 xl:grid-cols-[minmax(0,30%)_1fr] xl:items-center xl:gap-[26px]">
          <Reveal className="max-w-[440px] xl:max-w-none xl:pr-2">
            <BrazilianaWordmark id="braziliana-title" />
            <p className="mt-5 font-display text-[15px] font-medium uppercase tracking-[0.12em] text-white md:text-[16px]">
              Culture. Community. Good vibes.
            </p>
            <p className="mt-3.5 max-w-[36ch] text-[15px] leading-[1.5] text-cream-dim">
              Honoring Brazilian culture and Louisiana roots through food, music, art and experiences that
              bring people together.
            </p>
            <a
              href="#braziliana"
              className="group mt-6 inline-flex h-[40px] items-center gap-3 bg-ochre px-5 font-display text-[13px] font-medium uppercase tracking-[0.09em] text-white transition-[background-color,color] duration-200 hover:bg-gold hover:text-forest"
              style={{ borderRadius: 3 }}
            >
              Explore Braziliana
              <span aria-hidden className="micro-arrow">
                →
              </span>
            </a>
          </Reveal>

          <ul className="grid grid-cols-2 gap-[10px] md:grid-cols-6 md:gap-[13px] lg:grid-cols-5">
            {TILES.map((t, i) => (
              <li
                key={t.caption}
                className={cn(
                  "md:col-span-2 lg:col-span-1",
                  i === 4 && "col-span-2 md:col-span-3",
                  i === 3 && "md:col-span-3"
                )}
              >
                <RevealItem index={i} className="h-full">
                  <a
                    href="#braziliana"
                    className="group flex h-full flex-col overflow-hidden border border-gold/55 bg-forest-card transition-[border-color,transform,box-shadow] duration-[180ms] hover:-translate-y-[2px] hover:border-gold hover:shadow-[0_6px_0_-2px_rgba(0,0,0,0.5)]"
                    style={{ borderRadius: 4 }}
                  >
                    <span className={cn("relative block overflow-hidden", i === 4 ? "aspect-[2.2/1] md:aspect-[1.6/1] lg:aspect-[1.19/1]" : i === 3 ? "aspect-[1.19/1] md:aspect-[1.6/1] lg:aspect-[1.19/1]" : "aspect-[1.19/1]")}>
                      <Image
                        src={t.image}
                        alt={t.alt}
                        fill
                        sizes="(min-width: 1280px) 13vw, (min-width: 1024px) 19vw, (min-width: 768px) 33vw, 50vw"
                        className="grade object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        style={{ objectPosition: t.focus }}
                      />
                    </span>
                    <span className="flex min-h-[58px] flex-1 items-center justify-center border-t border-gold/40 px-2 py-2.5 text-center font-display text-[14px] font-semibold uppercase leading-[1.2] tracking-[0.03em] text-white text-balance md:min-h-[62px] md:text-[15.5px]">
                      {t.caption}
                    </span>
                  </a>
                </RevealItem>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
