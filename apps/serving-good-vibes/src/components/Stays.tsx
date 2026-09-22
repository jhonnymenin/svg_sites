import Image from "next/image";
import { RevealItem } from "@sgv/brand/motion";
import { Container } from "./Container";
import { Rail, railItem } from "./Rail";

type Stay = { name: string; place: string; image: string; alt: string; focus?: string; dusk?: boolean };

// PHOTOS ARE PLACEHOLDERS — none of these are the actual properties. See public/images/CREDITS.md.
const STAYS: Stay[] = [
  {
    name: "Chez La Fête",
    place: "Lafayette, Louisiana",
    image: "/images/st-chez-la-fete.jpg",
    alt: "A wraparound-porch guest house lit at dusk beside a pool",
    focus: "30% 45%",
    dusk: true,
  },
  {
    name: "Sunset Grove",
    place: "Broussard, Louisiana",
    image: "/images/st-sunset-grove.jpg",
    alt: "Palm trees and lamplit bungalows along a garden path at night",
    focus: "50% 45%",
  },
  {
    name: "Saint John Inn",
    place: "Lafayette, Louisiana",
    image: "/images/st-saint-john.jpg",
    alt: "A lit front porch behind an iron fence on a warm evening",
    focus: "50% 40%",
  },
  {
    name: "Camellia Cottage",
    place: "Lafayette, Louisiana",
    image: "/images/st-camellia.jpg",
    alt: "Warm light glowing through the leaded windows of a cottage at night",
    focus: "50% 45%",
  },
  {
    name: "Villa BO",
    place: "São Paulo, Brazil",
    image: "/images/st-villa-bo.jpg",
    alt: "A villa with a candlelit pool and garden at dusk",
    focus: "50% 60%",
  },
  {
    name: "Salty Air Retreat",
    place: "Pensacola Key, Florida",
    image: "/images/st-salty-air.jpg",
    alt: "Beach houses silhouetted against a golden sunset over the water",
    focus: "50% 45%",
  },
];

function StayCard({ stay, index }: { stay: Stay; index: number }) {
  return (
    <li className={railItem}>
      <RevealItem index={index} className="h-full">
        <article
          className="group relative flex h-full flex-col overflow-hidden bg-forest transition-[transform,box-shadow] duration-[180ms] ease-out hover:-translate-y-[2px] hover:shadow-[0_6px_0_-2px_rgba(4,28,12,0.35)]"
          style={{ borderRadius: 4 }}
        >
          <div className="relative aspect-[16/10] overflow-hidden xl:aspect-[1.96/1]">
            <Image
              src={stay.image}
              alt={stay.alt}
              fill
              sizes="(min-width: 1280px) 16vw, (min-width: 768px) 220px, 74vw"
              className={`${stay.dusk ? "grade-dusk" : "grade"} object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
              style={{ objectPosition: stay.focus }}
            />
          </div>
          <div
            className="flex flex-1 flex-col px-[14px] pt-[13px] pb-[14px] transition-[background-color] duration-200 group-hover:bg-white/[0.04]"
            style={{ backgroundImage: "linear-gradient(160deg, rgba(40,90,50,0.35), rgba(4,28,12,0) 65%)" }}
          >
            <h3 className="font-display text-[18px] font-semibold uppercase leading-[1.15] tracking-[0.005em] text-white xl:text-[17px]">
              <a href="#stays" className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
                {stay.name}
              </a>
            </h3>
            <p className="mt-[7px] text-[14px] leading-[1.3] text-cream-dim">{stay.place}</p>
            <div className="mt-auto pt-3">
            <span
              className="flex h-[26px] w-full max-w-[150px] items-center justify-between border border-gold px-2.5 font-display text-[11.5px] font-medium uppercase tracking-[0.07em] text-gold transition-colors duration-200 group-hover:bg-gold group-hover:text-forest xl:max-w-[132px]"
              style={{ borderRadius: 3 }}
            >
              Reserve now
              <span aria-hidden className="micro-arrow">
                →
              </span>
            </span>
            </div>
          </div>
          <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[4px] ring-forest ring-offset-2 ring-offset-parchment group-has-[a:focus-visible]:ring-2" />
        </article>
      </RevealItem>
    </li>
  );
}

export function Stays() {
  return (
    <section id="stays" aria-labelledby="stays-title" className="paper relative py-(--band-y)">
      <Container>
        <Rail
          id="stays-title"
          title="Stays"
          label="stays"
          tone="light"
          viewAll={{ href: "#stays", text: "View all properties" }}
        >
          {STAYS.map((s, i) => (
            <StayCard key={s.name} stay={s} index={i} />
          ))}
        </Rail>
      </Container>
    </section>
  );
}
