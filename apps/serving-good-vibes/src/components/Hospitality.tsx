import Image from "next/image";
import { RevealItem } from "@sgv/brand/motion";
import { Container } from "./Container";
import { MicroLink } from "./MicroLink";
import { SectionHead } from "./SectionHead";

type Service = { title: string; caption: string; image: string; alt: string; focus?: string };

// PHOTOS ARE PLACEHOLDERS — see public/images/CREDITS.md.
const SERVICES: Service[] = [
  {
    title: "Good Vibes Photo Booth",
    caption: "Capture memories with style.",
    image: "/images/ho-photo-booth.jpg",
    alt: "Hands holding lit sparklers in the dark",
    focus: "50% 50%",
  },
  {
    title: "Party Rentals",
    caption: "Everything you need to host the perfect event.",
    image: "/images/ho-party-rentals.jpg",
    alt: "A long banquet table set with candelabras in a grand hall",
    focus: "50% 72%",
  },
  {
    title: "Food & Beverage Operations",
    caption: "Exceptional food and drinks, made with passion.",
    image: "/images/ho-fnb.jpg",
    alt: "A pizza blistering in the flames of a wood-fired oven",
    focus: "55% 62%",
  },
  {
    title: "Good Vibes Mobile",
    caption: "Bringing the vibes wherever we go.",
    image: "/images/ho-mobile.jpg",
    alt: "A food truck parked under a lit marquee at night",
    focus: "40% 62%",
  },
];

/** The rhythm break: no cards. Images sit straight on parchment, captions centred beneath (§7.7). */
export function Hospitality() {
  return (
    <section id="hospitality" aria-labelledby="hospitality-title" className="paper relative py-(--band-y)">
      <Container>
        <SectionHead
          id="hospitality-title"
          title="Hospitality"
          tone="light"
          aside={
            <MicroLink href="#hospitality" className="text-forest max-sm:hidden">
              View all hospitality
            </MicroLink>
          }
        />
        <ul className="mt-5 grid grid-cols-1 gap-y-9 sm:grid-cols-2 sm:gap-x-5 lg:mt-6 xl:grid-cols-4 xl:gap-x-5">
          {SERVICES.map((s, i) => (
            <li key={s.title}>
              <RevealItem index={i}>
                <a href="#hospitality" className="group block">
                  <span className="relative block aspect-[16/9] overflow-hidden sm:aspect-[2.1/1] xl:aspect-[2.47/1]" style={{ borderRadius: 4 }}>
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1280px) 24vw, (min-width: 640px) 48vw, 100vw"
                      className="grade object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      style={{ objectPosition: s.focus }}
                    />
                  </span>
                  <span className="mt-3 block font-display text-[19px] font-semibold uppercase leading-[1.15] tracking-[0.005em] text-forest transition-colors duration-200 group-hover:text-ochre sm:text-center xl:mt-[12px] xl:text-[18px]">
                    {s.title}
                  </span>
                  <span className="mx-auto mt-1.5 block max-w-[30ch] text-[14.5px] leading-[1.4] text-ink/75 text-balance sm:text-center max-sm:mx-0">
                    {s.caption}
                  </span>
                </a>
              </RevealItem>
            </li>
          ))}
        </ul>
        <MicroLink href="#hospitality" className="mt-8 text-forest sm:hidden">
          View all hospitality
        </MicroLink>
      </Container>
    </section>
  );
}
