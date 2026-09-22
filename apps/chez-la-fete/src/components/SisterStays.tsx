import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { SgvMark } from "@sgv/brand";
import { ArrowRight } from "lucide-react";
import { Chapter } from "./Chapter";

/* TODO(client): link each property to its page on the SGV portfolio. */
const SGV_PORTFOLIO_URL = "#";

/* All four photographs are stock PLACEHOLDERS of similar regional houses,
   not the actual properties. */
const STAYS = [
  { name: "Sunset Grove", place: "Broussard, Louisiana", img: "/images/sister-sunset-grove.jpg", pos: "50% 60%", alt: "A two-storey galleried Louisiana house with a white porch" },
  { name: "Saint John Inn", place: "Lafayette, Louisiana", img: "/images/sister-saint-john.jpg", pos: "45% 55%", alt: "A raised Creole cottage with a deep white gallery" },
  { name: "Camellia Cottage", place: "Lafayette, Louisiana", img: "/images/sister-camellia.jpg", pos: "58% 55%", alt: "A white Victorian cottage with a gingerbread-trimmed porch" },
  { name: "Salty Air Retreat", place: "Pensacola Key, Florida", img: "/images/sister-salty-air.jpg", pos: "50% 18%", alt: "A beach house above the dunes with a wooden stair to the sand" },
];

export function SisterStays() {
  return (
    <section id="sister-stays" aria-labelledby="sister-title" className="paper relative pt-24 pb-16 lg:pt-36 lg:pb-24">
      <div className="frame">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <Chapter id="sister-title" numeral="V." title="Sister Stays" kicker="More incredible places." />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-[44ch] text-[16px] leading-[1.7] text-ink-soft">
              Explore other unique properties from Serving Good Vibes, each with its own character and charm across
              Louisiana and beyond.
            </p>
          </Reveal>
        </div>

        <ul className="rail -mx-[var(--gutter)] mt-14 flex gap-5 overflow-x-auto px-[var(--gutter)] pt-2 pb-4 lg:mx-0 lg:mt-20 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0">
          {STAYS.map((s, i) => (
            <li key={s.name} className="w-[70%] shrink-0 sm:w-[42%] lg:w-auto">
              <RevealItem index={i}>
                <a href={SGV_PORTFOLIO_URL} className="group block">
                  <div className="arch relative aspect-[3/4] overflow-hidden bg-linen ring-1 ring-gold/50 ring-offset-4 ring-offset-ivory">
                    <Image
                      src={s.img}
                      alt={s.alt}
                      fill
                      sizes="(min-width:1024px) 22vw, (min-width:640px) 42vw, 70vw"
                      style={{ objectPosition: s.pos }}
                      className="grade object-cover transition-transform duration-[1.2s] ease-[var(--ease-salon)] group-hover:scale-[1.05]"
                    />
                    {/* warm the pale skies so each arch reads against the ivory page */}
                    <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgb(164_125_59/0.28),rgb(164_125_59/0.04)_45%,transparent)] mix-blend-multiply" />
                    <div aria-hidden className="arch pointer-events-none absolute inset-[7px] border border-ivory/70" />
                  </div>
                  <h3 className="display mt-6 text-[23px] tracking-[0.05em]">{s.name}</h3>
                  <p className="italic-serif mt-1.5 text-[17px] text-ink-mute">{s.place}</p>
                  <span className="label mt-5 inline-flex items-center gap-3 text-[10.5px] text-ink">
                    Learn More
                    <ArrowRight
                      aria-hidden
                      className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5"
                      strokeWidth={1.3}
                    />
                  </span>
                </a>
              </RevealItem>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex items-center gap-6 border-t border-gold/35 pt-8 lg:mt-20">
          <SgvMark height={30} />
          <p className="italic-serif text-[17px] text-ink-mute">A family of houses, each with its own character.</p>
        </div>
      </div>
    </section>
  );
}
