import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { ArrowUpRight } from "lucide-react";
import { Chapter } from "./Chapter";
import { LoopVideo } from "./LoopVideo";

/* Fall/Winter 2026 season (media/FACTS.md — verified from the client's launch file). */
const SE = "https://socialentertainment.net";

const HIGH_NOTES = {
  date: "Friday, November 6",
  time: "7–11 PM",
  lineup: "Lost Bayou Ramblers",
  url: `${SE}/high-notes`,
};

const AROUND_TOWN = [
  {
    month: "Sep",
    day: "25–26",
    title: "Downtown Rising",
    lineup: "Big Freedia, Anders Osborne, Dumpstaphunk, Flow Tribe & more",
    where: "Parc International, Downtown Lafayette",
    when: "Fri & Sat · 5–11 PM",
    url: `${SE}/event-details/downtown-rising`,
    img: "/images/dtr-crowd-night-01.jpg",
    pos: "50% 55%",
    alt: "A Downtown Rising crowd holding up phone lights in front of the stage at night",
    logo: { src: "/brand/logos/event-downtown-rising-color.webp", w: 900, h: 781, alt: "Downtown Rising", h2: "h-[58px]" },
  },
  {
    month: "Oct",
    day: "03",
    title: "Sugar Jam",
    lineup: "HWY 90 & Zeus",
    where: "Sugar Mill Pond, Youngsville",
    when: "Saturday · 6–9 PM",
    url: `${SE}/sugar-jam`,
    img: "/images/sugarjam-stage-01.jpg",
    pos: "50% 50%",
    alt: "A band playing under a pink-lit gazebo at Sugar Jam",
    logo: { src: "/brand/logos/event-sugar-jam.webp", w: 194, h: 134, alt: "Sugar Jam at Sugar Mill Pond", h2: "h-[44px]" },
  },
  {
    month: "Oct",
    day: "23–24",
    title: "Acadiana Eats Festival",
    lineup: "Rockin’ Dopsie Jr & the Zydeco Twisters, Mike Dopsie, Que Beleza & more",
    where: "West Village, Scott",
    when: "Fri 5–10 PM · Sat 11 AM–5 PM",
    url: `${SE}/acadianaeatsfestival`,
    img: "/images/ae-food-plate-01.jpg",
    pos: "50% 45%",
    alt: "A guest holding a loaded plate of Thai food at the Acadiana Eats Festival",
    logo: { src: "/brand/logos/event-acadiana-eats.webp", w: 863, h: 361, alt: "Acadiana Eats Festival", h2: "h-[40px]" },
  },
];

const ALSO = [
  { date: "Sat Nov 7", title: "Egan Cup Invitational", where: "SGV HQ, Downtown Lafayette", url: `${SE}/egancup` },
  { date: "Sat Dec 19", title: "Holiday Open House", where: "SGV HQ · Braziliana House Band", url: null },
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
            <a
              href={SE}
              target="_blank"
              rel="noopener noreferrer"
              className="label mt-7 inline-flex items-center gap-3 text-[11px] text-ink link-underline"
            >
              See What’s Happening
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={1.3} />
            </a>
          </Reveal>
        </div>

        {/* ---------- At the house: High Notes ---------- */}
        <Reveal className="mt-16 lg:mt-24">
          <article
            aria-labelledby="high-notes-title"
            className="grid overflow-hidden bg-salon text-ivory lg:grid-cols-12"
          >
            <figure className="relative lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-night lg:aspect-auto lg:h-full lg:min-h-[500px]">
                <LoopVideo
                  src="/video/chez-loop"
                  poster="/video/chez-loop-poster.jpg"
                  still="/images/chez-high-notes-band-01.jpg"
                  stillAlt="A Cajun band — fiddles, guitar and upright bass — playing under the blue-lit live oak, a crowd in front"
                  sizes="(min-width:1024px) 58vw, 100vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(0deg,rgb(22_37_31/0.55),transparent_40%)] lg:bg-[linear-gradient(270deg,var(--salon)_0%,transparent_22%)]"
                />
              </div>
              <figcaption className="absolute bottom-4 left-5 text-[12px] text-ivory/75 lg:bottom-6 lg:left-7">
                <span className="italic-serif text-[15px]">Past nights on the Courtyard Stage</span>
              </figcaption>
            </figure>

            <div className="relative px-6 py-10 sm:px-10 lg:col-span-5 lg:px-12 lg:py-14">
              <div className="flex items-start justify-between gap-6">
                <p className="script neon text-[42px] leading-none sm:text-[48px]">at the house</p>
                {/* date leaf */}
                <div className="flex w-[66px] shrink-0 flex-col items-center border border-gold-bright/60 pt-2.5 pb-2 text-ivory">
                  <span className="label text-[9.5px] tracking-[0.26em] text-sun">Nov</span>
                  <span className="font-display text-[32px] leading-none">06</span>
                </div>
              </div>
              <div className="mt-8 inline-block bg-ivory px-4 py-3">
                <Image
                  src="/brand/logos/event-high-notes.webp"
                  alt="High Notes"
                  width={706}
                  height={374}
                  className="h-[54px] w-auto sm:h-[62px]"
                />
              </div>
              <h3 id="high-notes-title" className="display mt-7 text-[clamp(32px,3vw,44px)]">
                {HIGH_NOTES.lineup}
              </h3>
              <p className="label mt-4 text-[10.5px] text-ivory/75">
                {HIGH_NOTES.date} · {HIGH_NOTES.time}
              </p>
              <p className="mt-6 max-w-[40ch] font-display text-[19px] leading-[1.45] text-ivory/80">
                Cajun music under the live oak, on our own Courtyard Stage — steps from your bedroom door. Stay
                the night of the show.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={HIGH_NOTES.url} target="_blank" rel="noopener noreferrer" className="btn btn-pink">
                  Get Tickets
                  <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={1.3} />
                </a>
                <a href="#book" className="btn btn-ghost-light">
                  Stay That Night
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ---------- Around town ---------- */}
        <div className="mt-20 flex items-baseline justify-between gap-6 border-b border-gold/40 pb-4 lg:mt-28">
          <h3 className="label text-[10.5px] text-ink">Around town this season</h3>
          <span className="italic-serif hidden text-[16px] text-ink-mute sm:block">Produced by Social Entertainment</span>
        </div>
        <ol className="rail -mx-[var(--gutter)] mt-10 flex gap-5 overflow-x-auto px-[var(--gutter)] pb-4 sm:gap-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-10 lg:overflow-visible lg:px-0 lg:pb-0">
          {AROUND_TOWN.map((e, i) => (
            <li key={e.title} className={`w-[80%] shrink-0 sm:w-[46%] lg:w-auto ${i === 1 ? "lg:translate-y-12" : ""}`}>
              <RevealItem index={i}>
                <article className="group">
                  <a href={e.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative aspect-[4/4.6] overflow-hidden bg-linen">
                      <Image
                        src={e.img}
                        alt={e.alt}
                        fill
                        sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 80vw"
                        style={{ objectPosition: e.pos }}
                        className="grade-phone object-cover transition-transform duration-[1.1s] ease-[var(--ease-salon)] group-hover:scale-[1.04]"
                      />
                      {/* Date leaf pinned to the photograph */}
                      <div className="absolute top-0 left-5 flex w-[64px] flex-col items-center border-x border-b border-gold/70 bg-ivory pt-3 pb-2.5 text-ink">
                        <span className="label text-[9.5px] tracking-[0.26em] text-pink-deep">{e.month}</span>
                        <span className={`font-display leading-none ${e.day.length > 2 ? "mt-1 text-[21px]" : "text-[32px]"}`}>
                          {e.day}
                        </span>
                      </div>
                      <div className="absolute right-4 bottom-4 flex h-[70px] items-center bg-ivory px-3">
                        <Image
                          src={e.logo.src}
                          alt={e.logo.alt}
                          width={e.logo.w}
                          height={e.logo.h}
                          className={`${e.logo.h2} w-auto max-w-[130px] object-contain mix-blend-multiply`}
                        />
                      </div>
                    </div>
                    <h4 className="display mt-6 text-[24px] leading-[1.05] tracking-[0.04em]">{e.title}</h4>
                    <p className="mt-2 text-[14px] leading-[1.55] text-ink-soft">{e.lineup}</p>
                    <p className="mt-3 text-[13px] text-ink-mute">
                      {e.where}
                      <br />
                      {e.when}
                    </p>
                    <span className="label mt-5 inline-flex items-center gap-3 text-[10.5px] text-ink transition-colors group-hover:text-pink-deep">
                      Tickets
                      <ArrowUpRight
                        aria-hidden
                        className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.3}
                      />
                    </span>
                  </a>
                </article>
              </RevealItem>
            </li>
          ))}
        </ol>

        {/* ---------- Also this season ---------- */}
        <ul className="mt-14 grid gap-px border-y border-gold/40 sm:grid-cols-2 lg:mt-28">
          {ALSO.map((a) => {
            const body = (
              <>
                <span className="italic-serif w-[88px] shrink-0 text-[16px] text-pink-deep">{a.date}</span>
                <span>
                  <span className="font-display text-[21px] leading-tight text-ink">{a.title}</span>
                  <span className="mt-0.5 block text-[13px] text-ink-mute">{a.where}</span>
                </span>
              </>
            );
            return (
              <li key={a.title} className="py-5 sm:odd:pr-8 sm:even:border-l sm:even:border-gold/40 sm:even:pl-8">
                {a.url ? (
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-4 hover:[&_.font-display]:text-pink-deep">
                    {body}
                  </a>
                ) : (
                  <div className="flex items-baseline gap-4">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-[12.5px] text-ink-mute">
          Events are subject to change. Please check official websites for the latest information.
        </p>
      </div>
    </section>
  );
}
