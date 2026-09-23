import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Container } from "./Container";

type Stay = {
  name: string;
  place: string;
  line: string;
  image: string;
  alt: string;
  focus: string;
  logo?: { src: string; w: number; h: number };
  href: string;
  cta: string;
};

const CHEZ: Stay = {
  name: "Chez La Fête",
  place: "Downtown Lafayette, Louisiana",
  line: "Guesthouse & backyard — a white Creole cottage with hot-pink doors, a gallery of festival art, Bar Bijou and the Courtyard Stage under a live oak.",
  image: "/images/chez-exterior-street-01.jpg",
  alt: "The white Chez La Fête cottage with its hot-pink gate door and hand-painted magnolia fence",
  focus: "40% 60%",
  href: "https://chezlafete.com",
  cta: "Visit ChezLafete.com",
};

const STAYS: Stay[] = [
  {
    name: "Sunset Grove",
    place: "Broussard, Louisiana",
    line: "A gambrel farmhouse under a massive live oak. Est. 2022.",
    image: "/images/sunset-grove-exterior-01.jpg",
    alt: "A gambrel farmhouse with a porch swing beneath a sprawling live oak",
    focus: "40% 55%",
    logo: { src: "/brand/logos/stay-sunset-grove.webp", w: 491, h: 444 },
    href: "#contact",
    cta: "Check dates",
  },
  {
    name: "Saint John Inn",
    place: "Lafayette, Louisiana",
    line: "Heron-mural dining, velvet chairs and a patio in the cathedral’s shadow.",
    image: "/images/saint-john-dining-01.jpg",
    alt: "A dining room with a giant heron mural, green velvet chairs and rattan stools",
    focus: "55% 50%",
    logo: { src: "/brand/logos/stay-saint-john-inn.webp", w: 900, h: 751 },
    href: "#contact",
    cta: "Check dates",
  },
  {
    name: "Camellia Cottage",
    place: "Lafayette, Louisiana",
    line: "A dusk patio, a lit pass-through window and a fire table for long nights.",
    image: "/images/camellia-exterior-dusk-01.jpg",
    alt: "A cottage patio at dusk with a lit pass-through window and a teal umbrella strung with lights",
    focus: "35% 45%",
    href: "#contact",
    cta: "Check dates",
  },
  {
    name: "Salty Air Retreat",
    place: "Perdido Key, Florida",
    line: "White sand, Gulf sunsets and a balcony over the dunes.",
    image: "/images/salty-air-beach-sunset-01.jpg",
    alt: "The Perdido Key shoreline at sunset with towers reflected in the wet sand",
    focus: "55% 55%",
    logo: { src: "/brand/logos/stay-salty-air-retreat.webp", w: 900, h: 865 },
    href: "#contact",
    cta: "Check dates",
  },
];

function Badge({ logo }: { logo: NonNullable<Stay["logo"]> }) {
  return (
    <span className="absolute -bottom-9 left-4 z-[3] flex h-[76px] w-[76px] items-center justify-center rounded-full bg-paper-hi p-2 shadow-[0_10px_24px_-12px_rgba(29,25,20,0.5)] transition-transform duration-500 group-hover:-rotate-6">
      {/* eslint-disable-next-line @next/next/no-img-element -- official property marks */}
      <img src={logo.src} alt="" width={logo.w} height={logo.h} className="max-h-full w-auto object-contain" />
    </span>
  );
}

/** For stays without an official mark: a typographic seal, never a fake logo. */
function Monogram({ name }: { name: string }) {
  return (
    <span className="absolute -bottom-9 left-4 z-[3] flex h-[76px] w-[76px] flex-col items-center justify-center rounded-full bg-paper-hi shadow-[0_10px_24px_-12px_rgba(29,25,20,0.5)] ring-1 ring-red/30 ring-inset transition-transform duration-500 group-hover:-rotate-6">
      <span className="display-italic text-[30px] leading-none text-red">{name.charAt(0)}</span>
    </span>
  );
}

function StayCard({ stay, index, className }: { stay: Stay; index: number; className?: string }) {
  return (
    <RevealItem index={index} className={className}>
      <a href={stay.href} className="group block">
        <span className="relative block">
          <span className="grain relative block aspect-[4/3] overflow-hidden rounded-[4px]">
            <Image
              src={stay.image}
              alt={stay.alt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              className="grade object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:transition-none"
              style={{ objectPosition: stay.focus }}
            />
          </span>
          {stay.logo ? <Badge logo={stay.logo} /> : <Monogram name={stay.name} />}
        </span>
        <span className="mt-12 block">
          <span className="block text-[12px] font-semibold tracking-[0.14em] text-olive uppercase">{stay.place}</span>
          <span className="display mt-2 block text-[30px] leading-[1] text-deep-teal">
            <span className="stripe-link">{stay.name}</span>
          </span>
          <span className="mt-2 block max-w-[34ch] text-[15px] leading-[1.5] text-ink/70">{stay.line}</span>
          <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-red">
            {stay.cta}
            <span aria-hidden className="arrow">
              →
            </span>
          </span>
        </span>
      </a>
    </RevealItem>
  );
}

export function Stays() {
  return (
    <section id="stays" aria-labelledby="stays-title" className="paper relative py-(--band-y)">
      <Container>
        <Reveal className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-red">Stays</p>
            <h2 id="stays-title" className="display mt-4 text-[clamp(44px,6vw,92px)] text-deep-teal">
              Stay a <span className="display-italic text-olive">while.</span>
            </h2>
          </div>
          <p className="max-w-[26rem] text-[16px] leading-[1.55] text-ink/70">
            Distinctive properties designed for comfort, connection and inspiration — from downtown Lafayette to the
            Gulf. Book your public or private event at any of our properties.
          </p>
        </Reveal>

        {/* Chez La Fête — the flagship, set wide with its neon as an inset */}
        <RevealItem className="mt-14 md:mt-16">
          <a href={CHEZ.href} className="group grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:gap-14">
            <span className="relative block">
              <span className="grain relative block aspect-[16/9] overflow-hidden rounded-[4px] lg:aspect-[2.1/1]">
                <Image
                  src={CHEZ.image}
                  alt={CHEZ.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="grade object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                  style={{ objectPosition: CHEZ.focus }}
                />
              </span>
              <span className="grain absolute -bottom-8 -right-3 block aspect-[4/3] w-[34%] -rotate-3 overflow-hidden rounded-[4px] ring-[6px] ring-paper transition-transform duration-500 group-hover:rotate-0 md:-right-6 lg:w-[30%]">
                <Image
                  src="/images/chez-detail-neon-01.jpg"
                  alt="Pink “Chez La Fête” neon script on a living green wall"
                  fill
                  sizes="(min-width: 1024px) 18vw, 34vw"
                  className="object-cover"
                />
              </span>
            </span>
            <span className="block pt-6 lg:pt-0 lg:pb-2">
              <span className="block text-[12px] font-semibold tracking-[0.14em] text-olive uppercase">
                Flagship · {CHEZ.place}
              </span>
              <span className="display mt-3 block text-[clamp(44px,4.6vw,72px)] leading-[0.95] text-deep-teal">
                <span className="stripe-link">{CHEZ.name}</span>
              </span>
              <span className="mt-4 block max-w-[36ch] text-[16px] leading-[1.6] text-ink/75">{CHEZ.line}</span>
              <span className="mt-6 inline-flex h-[50px] items-center gap-3 rounded-full bg-deep-teal px-6 text-[15px] font-semibold text-paper-hi transition-colors group-hover:bg-red">
                {CHEZ.cta}
                <span aria-hidden className="arrow">
                  →
                </span>
              </span>
            </span>
          </a>
        </RevealItem>

        <div className="rail -mx-(--gutter) mt-20 flex snap-x snap-mandatory gap-5 overflow-x-auto px-(--gutter) pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-16 md:overflow-visible md:px-0 lg:grid-cols-4 lg:gap-x-8">
          {STAYS.map((s, i) => (
            <StayCard key={s.name} stay={s} index={i} className="w-[80vw] max-w-[360px] shrink-0 snap-start md:w-auto md:max-w-none" />
          ))}
        </div>

        {/* International — Villa BO */}
        <RevealItem className="mt-16 md:mt-20">
          <div className="grid items-center gap-6 border-y border-ink/15 py-6 sm:grid-cols-[180px_1fr_auto] sm:gap-8">
            <span className="grain relative block aspect-[16/10] overflow-hidden rounded-[4px] sm:aspect-[4/3]">
              <Image
                src="/images/st-villa-bo.jpg"
                alt="A villa pool and garden at dusk"
                fill
                sizes="180px"
                className="grade object-cover object-[50%_60%]"
              />
            </span>
            <div>
              <p className="text-[12px] font-semibold tracking-[0.14em] text-olive uppercase">Across the equator</p>
              <p className="display mt-2 text-[32px] leading-none text-deep-teal">
                Villa BO <span className="display-italic text-[24px] text-red">São Paulo, Brazil</span>
              </p>
              <p className="mt-2 max-w-[48ch] text-[15px] text-ink/70">
                Our international stay — a boutique home base in São Paulo.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-[14px] font-semibold text-red"
            >
              <span className="stripe-link">Enquire</span>
              <span aria-hidden className="arrow">
                →
              </span>
            </a>
          </div>
        </RevealItem>
      </Container>
    </section>
  );
}
