import Image from "next/image";
import { RevealItem } from "@sgv/brand/motion";
import { Container } from "./Container";
import { Rail, railItem } from "./Rail";

type EventItem = {
  title: string;
  month: string;
  day: string;
  date: string;
  place: string;
  image: string;
  alt: string;
  /** object-position for the 2:1 crop */
  focus?: string;
  fill: string;
};

// Card bodies cycle through the vertical palette by position — a colour chord, not a repeated component (§3.3).
// DATES ARE PLACEHOLDERS — the copy deck names the events but not their dates; confirm with the client.
// PHOTOS ARE PLACEHOLDERS — freely-licensed stand-ins, see public/images/CREDITS.md.
const EVENTS: EventItem[] = [
  {
    title: "Downtown Rising Music Festival",
    month: "May",
    day: "24–26",
    date: "May 24–26, 2027",
    place: "Lafayette, LA",
    image: "/images/ev-downtown-rising.jpg",
    alt: "A guitarist plays under stage lights at an outdoor evening festival",
    focus: "60% 35%",
    fill: "var(--brick)",
  },
  {
    title: "Braziliana Summer Fest",
    month: "Jun",
    day: "07",
    date: "June 7, 2027",
    place: "Lafayette, LA",
    image: "/images/ev-summer-fest.jpg",
    alt: "A samba dancer in a golden feathered costume performs at night",
    focus: "50% 30%",
    fill: "var(--ochre-card)",
  },
  {
    title: "Sunset Grove Sessions",
    month: "Jun",
    day: "21",
    date: "June 21, 2027",
    place: "Lafayette, LA",
    image: "/images/ev-sunset-grove.jpg",
    alt: "A crowd gathers under palm trees and glowing market stalls at twilight",
    focus: "50% 45%",
    fill: "var(--forest-card)",
  },
  {
    title: "Independence Day Block Party",
    month: "Jul",
    day: "04",
    date: "July 4, 2027",
    place: "Lafayette, LA",
    image: "/images/ev-block-party.jpg",
    alt: "Red and green fireworks burst over a dark sky",
    focus: "45% 40%",
    fill: "var(--navy-card)",
  },
  {
    title: "Braziliana FC Match Day",
    month: "Aug",
    day: "09",
    date: "August 9, 2027",
    place: "Lafayette, LA",
    image: "/images/ev-match-day.jpg",
    alt: "Players sprint across a floodlit pitch during a late-night match",
    focus: "50% 55%",
    fill: "var(--ochre-card)",
  },
  {
    title: "Dinner Under the Oaks",
    month: "Sep",
    day: "13",
    date: "September 13, 2027",
    place: "Lafayette, LA",
    image: "/images/ev-dinner-oaks.jpg",
    alt: "Guests at tables beneath string lights on a garden terrace at night",
    focus: "50% 55%",
    fill: "var(--brick)",
  },
];

/** Signature device #3 — the overlapping date chip. The only element on the page that overlaps another. */
function DateChip({ month, day }: { month: string; day: string }) {
  return (
    <span
      aria-hidden
      className="absolute top-[7px] left-[7px] z-10 flex min-w-[46px] flex-col items-center justify-center bg-parchment-hi px-2 pt-[5px] pb-[4px] text-ink shadow-[0_2px_6px_rgba(0,0,0,0.45)] xl:min-w-[52px]"
      style={{ borderRadius: 3 }}
    >
      <span className="font-display text-[10.5px] font-medium uppercase leading-none tracking-[0.1em]">{month}</span>
      <span className="mt-[3px] font-display text-[18px] font-bold leading-none xl:text-[19px]">{day}</span>
    </span>
  );
}

function EventCard({ ev, index }: { ev: EventItem; index: number }) {
  return (
    <li className={railItem}>
      <RevealItem index={index} className="h-full">
        <article
          className="group relative flex h-full flex-col overflow-hidden transition-[transform,box-shadow] duration-[180ms] ease-out hover:-translate-y-[2px] hover:shadow-[0_6px_0_-2px_rgba(0,0,0,0.45)]"
          style={{ borderRadius: 4, backgroundColor: ev.fill }}
        >
          <div className="relative aspect-[16/10] overflow-hidden xl:aspect-[2/1]">
            <Image
              src={ev.image}
              alt={ev.alt}
              fill
              sizes="(min-width: 1280px) 16vw, (min-width: 768px) 220px, 74vw"
              className="grade object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              style={{ objectPosition: ev.focus }}
            />
          </div>
          <DateChip month={ev.month} day={ev.day} />
          <div className="ink-fill flex flex-1 flex-col px-[14px] pt-[15px] pb-[14px] transition-[background-color] duration-200 group-hover:bg-white/[0.06]">
            <h3 className="font-display text-[18px] font-semibold uppercase leading-[1.18] tracking-[0.005em] text-white xl:min-h-[2.36em] xl:text-[17px]">
              <a href="#events" className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
                {ev.title}
              </a>
            </h3>
            <p className="mt-2 text-[14px] leading-[1.35] text-cream/85">
              <time>{ev.date}</time>
              <br />
              {ev.place}
            </p>
            <span className="mt-auto inline-flex items-center gap-2 pt-3 font-display text-[12.5px] font-medium uppercase tracking-[0.08em] text-white">
              Get tickets
              <span aria-hidden className="micro-arrow">
                →
              </span>
            </span>
          </div>
          {/* keyboard focus ring for the stretched link */}
          <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[4px] ring-gold-bright ring-offset-2 ring-offset-forest group-has-[a:focus-visible]:ring-2" />
        </article>
      </RevealItem>
    </li>
  );
}

export function Events() {
  return (
    <section id="events" aria-labelledby="events-title" className="ink-tooth relative bg-forest py-(--band-y)">
      <Container>
        <Rail
          id="events-title"
          title="Upcoming events"
          label="upcoming events"
          tone="dark"
          viewAll={{ href: "#events", text: "View all events" }}
        >
          {EVENTS.map((ev, i) => (
            <EventCard key={ev.title} ev={ev} index={i} />
          ))}
        </Rail>
      </Container>
    </section>
  );
}
