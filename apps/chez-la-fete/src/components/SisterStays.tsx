import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { SgvMark } from "@sgv/brand";
import { ArrowRight } from "lucide-react";
import { Chapter } from "./Chapter";
import { HoverLoop } from "./HoverLoop";

/* TODO(client): link each property to its own page on the SGV portfolio. */
const SGV_PORTFOLIO_URL = "https://servinggoodvibes.com";

type Stay = {
  name: string;
  place: string;
  img: string;
  pos: string;
  alt: string;
  logo?: { src: string; w: number; h: number };
  /** Optional silent loop revealed on hover */
  loop?: string;
};

const STAYS: Stay[] = [
  {
    name: "Sunset Grove",
    place: "Broussard, Louisiana",
    img: "/images/sunset-grove-exterior-01.jpg",
    pos: "42% 55%",
    alt: "Sunset Grove: a gambrel farmhouse beneath a massive live oak with a porch swing on the lawn",
    logo: { src: "/brand/logos/stay-sunset-grove.webp", w: 491, h: 444 },
    loop: "/video/sunset-grove-loop",
  },
  {
    name: "Saint John Inn",
    place: "Lafayette, Louisiana",
    img: "/images/saint-john-dining-01.jpg",
    pos: "52% 50%",
    alt: "Saint John Inn’s dining room with a giant painted heron mural and green velvet chairs",
    logo: { src: "/brand/logos/stay-saint-john-inn.webp", w: 900, h: 751 },
  },
  {
    name: "Camellia Cottage",
    place: "Lafayette, Louisiana",
    img: "/images/camellia-exterior-dusk-01.jpg",
    pos: "30% 45%",
    alt: "Camellia Cottage at dusk: a lit pass-through window and a teal umbrella strung with lights over the patio",
  },
  {
    name: "Salty Air Retreat",
    place: "Perdido Key, Florida",
    img: "/images/salty-air-beach-sunset-01.jpg",
    pos: "58% 55%",
    alt: "The Perdido Key shoreline at sunset, towers reflected in the wet sand",
    logo: { src: "/brand/logos/stay-salty-air-retreat.webp", w: 900, h: 865 },
  },
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
                <a href={SGV_PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative">
                    <div className="arch relative aspect-[3/4] overflow-hidden bg-linen ring-1 ring-gold/50 ring-offset-4 ring-offset-ivory">
                      <Image
                        src={s.img}
                        alt={s.alt}
                        fill
                        sizes="(min-width:1024px) 22vw, (min-width:640px) 42vw, 70vw"
                        style={{ objectPosition: s.pos }}
                        className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-salon)] group-hover:scale-[1.05]"
                      />
                      {s.loop ? <HoverLoop src={s.loop} /> : null}
                      <div aria-hidden className="arch pointer-events-none absolute inset-[7px] border border-ivory/70" />
                    </div>
                    {/* The property's own seal, pinned at the foot of the arch */}
                    {s.logo ? (
                      <span className="absolute -bottom-7 right-3 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-ivory p-2 ring-1 ring-gold/50 transition-transform duration-700 ease-[var(--ease-salon)] group-hover:-rotate-6">
                        <Image
                          src={s.logo.src}
                          alt=""
                          width={s.logo.w}
                          height={s.logo.h}
                          className="h-full w-full object-contain"
                        />
                      </span>
                    ) : null}
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
          <SgvMark height={34} />
          <p className="italic-serif text-[17px] text-ink-mute">A family of houses, each with its own character.</p>
        </div>
      </div>
    </section>
  );
}
