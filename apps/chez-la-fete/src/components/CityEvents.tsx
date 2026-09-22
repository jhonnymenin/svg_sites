import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { ArrowRight } from "lucide-react";
import { Chapter } from "./Chapter";

/* PLACEHOLDER dates (mockup dates rolled to the next season) — confirm with
   the organisers before launch. Images are stock placeholders. */
const EVENTS = [
  {
    month: "May",
    day: "24–26",
    title: "Downtown Rising Music Festival",
    date: "May 24–26, 2027",
    img: "/images/city-downtown-rising.jpg",
    alt: "A crowd facing a lit festival stage",
  },
  {
    month: "Jun",
    day: "07",
    title: "Braziliana Summer Fest",
    date: "June 7, 2027",
    img: "/images/city-braziliana-fest.jpg",
    alt: "Carnival dancers in feathered costumes",
  },
  {
    month: "Jun",
    day: "21",
    title: "Sunset Grove Sessions",
    date: "June 21, 2027",
    img: "/images/city-sunset-grove.jpg",
    alt: "Palm trees silhouetted against a violet sunset",
  },
  {
    month: "Aug",
    day: "09",
    title: "Braziliana FC Match Day",
    date: "August 9, 2027",
    img: "/images/city-match-day.jpg",
    alt: "A worn leather football resting in autumn leaves",
  },
];

export function CityEvents() {
  return (
    <section id="city-events" aria-labelledby="city-title" className="relative bg-ivory-deep py-24 lg:py-36">
      <div className="frame">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-5">
            <Chapter id="city-title" numeral="IV." title="City Events" kicker="Experience Lafayette." />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-[46ch] text-[16px] leading-[1.7] text-ink-soft">
              Chez La Fête is ideally located near Lafayette’s best festivals, concerts, dining, and cultural
              attractions. See what’s happening around the city during your stay.
            </p>
            <a href="#happening" className="label mt-7 inline-flex items-center gap-3 text-[11px] text-ink link-underline">
              See What’s Happening
              <ArrowRight aria-hidden className="h-3.5 w-3.5" strokeWidth={1.3} />
            </a>
          </Reveal>
        </div>

        <ol id="happening" className="scroll-mt-32 rail -mx-[var(--gutter)] mt-14 flex gap-4 overflow-x-auto px-[var(--gutter)] pb-4 sm:gap-6 lg:mx-0 lg:mt-20 lg:grid lg:grid-cols-4 lg:gap-7 lg:overflow-visible lg:px-0 lg:pb-0">
          {EVENTS.map((e, i) => (
            <li key={e.title} className={`w-[78%] shrink-0 sm:w-[46%] lg:w-auto ${i % 2 === 1 ? "lg:translate-y-14" : ""}`}>
              <RevealItem index={i}>
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                    <Image
                      src={e.img}
                      alt={e.alt}
                      fill
                      sizes="(min-width:1024px) 22vw, (min-width:640px) 46vw, 78vw"
                      className="object-cover [filter:sepia(0.55)_saturate(0.55)_contrast(1.05)_brightness(0.92)] transition-[filter,transform] duration-[1.1s] ease-[var(--ease-salon)] group-hover:scale-[1.04] group-hover:[filter:sepia(0.12)_saturate(0.95)_contrast(1.04)]"
                    />
                    {/* Date chip — a calendar leaf pinned to the photograph */}
                    <div className="absolute top-0 left-5 flex w-[64px] flex-col items-center border-x border-b border-gold/70 bg-ivory pt-3 pb-2.5 text-ink">
                      <span className="label text-[9.5px] tracking-[0.26em] text-gold">{e.month}</span>
                      <span className={`font-display leading-none ${e.day.length > 2 ? "mt-1 text-[21px]" : "text-[32px]"}`}>
                        {e.day}
                      </span>
                    </div>
                  </div>
                  <h3 className="display mt-6 text-[22px] leading-[1.08] tracking-[0.04em]">{e.title}</h3>
                  <p className="mt-3 flex items-center gap-3 text-[13.5px] text-ink-mute">
                    <span>{e.date}</span>
                    <span aria-hidden className="h-px w-4 bg-gold/60" />
                    <span>Lafayette, LA</span>
                  </p>
                </article>
              </RevealItem>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-[12.5px] text-ink-mute lg:mt-24">
          Events are subject to change. Please check official websites for the latest information.
        </p>
      </div>
    </section>
  );
}
