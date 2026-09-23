"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Container } from "./Container";

const SE = "https://socialentertainment.net";
const DR_TICKETS = `${SE}/event-details/downtown-rising`;
// Night 1 doors: Fri Sept 25, 2026, 5pm CDT.
const DR_START = Date.UTC(2026, 8, 25, 22, 0, 0);
const DR_END = Date.UTC(2026, 8, 27, 4, 0, 0);

type SeasonEvent = {
  name: string;
  dow: string;
  date: string;
  lineup: string;
  venue: string;
  time: string;
  href?: string;
  logo: string;
  logoW: number;
  logoH: number;
  image: string;
  alt: string;
  focus: string;
};

const SEASON: SeasonEvent[] = [
  {
    name: "Sugar Jam",
    dow: "Sat",
    date: "Oct 3",
    lineup: "HWY 90 & Zeus",
    venue: "Sugar Mill Pond, Youngsville",
    time: "6–9p",
    href: `${SE}/sugar-jam`,
    logo: "/brand/logos/event-sugar-jam.webp",
    logoW: 194,
    logoH: 134,
    image: "/images/sugarjam-dancing-01.jpg",
    alt: "Couples two-stepping under string lights at Sugar Jam",
    focus: "45% 65%",
  },
  {
    name: "Acadiana Eats Festival",
    dow: "Fri–Sat",
    date: "Oct 23–24",
    lineup:
      "Fri 5–10p: Rockin’ Dopsie Jr & the Zydeco Twisters, DJ Lovebenoir · Sat 11a–5p: Mike Dopsie & Zydeco Entourage, Que Beleza, DJ RV",
    venue: "West Village, Scott",
    time: "Fri 5–10p · Sat 11a–5p",
    href: `${SE}/acadianaeatsfestival`,
    logo: "/brand/logos/event-acadiana-eats.webp",
    logoW: 863,
    logoH: 361,
    image: "/images/ae-food-plate-01.jpg",
    alt: "A guest holds up a loaded plate from a festival food booth",
    focus: "50% 45%",
  },
  {
    name: "High Notes",
    dow: "Fri",
    date: "Nov 6",
    lineup: "Lost Bayou Ramblers",
    venue: "Chez La Fête, Downtown Lafayette",
    time: "7–11p",
    href: `${SE}/high-notes`,
    logo: "/brand/logos/event-high-notes.webp",
    logoW: 706,
    logoH: 374,
    image: "/images/chez-high-notes-band-01.jpg",
    alt: "A Cajun band with fiddles and upright bass plays under a blue-lit live oak",
    focus: "50% 60%",
  },
  {
    name: "Egan Cup Invitational",
    dow: "Sat",
    date: "Nov 7",
    lineup: "Ping pong, music, food, cocktails, friendship and community",
    venue: "SGV HQ, Downtown Lafayette",
    time: "9a–5p",
    href: `${SE}/egancup`,
    logo: "/brand/logos/sgv-circle.webp",
    logoW: 1000,
    logoH: 1000,
    image: "/images/egancup-group-01.jpg",
    alt: "Table tennis players pose with trophies at the invitational",
    focus: "50% 55%",
  },
  {
    name: "Holiday Open House",
    dow: "Sat",
    date: "Dec 19",
    lineup: "Live music by the Braziliana House Band — details coming soon",
    venue: "SGV HQ, Downtown Lafayette",
    time: "Time TBA",
    logo: "/brand/logos/braziliana.webp",
    logoW: 1800,
    logoH: 391,
    image: "/images/braziliana-bossa-nova-dance-01.jpg",
    alt: "Couples dancing at a Braziliana Bossa Nova night",
    focus: "50% 60%",
  },
];

function Countdown() {
  const [label, setLabel] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      if (now >= DR_END) return setLabel(null);
      if (now >= DR_START) return setLabel("Happening now");
      const ms = DR_START - now;
      const d = Math.floor(ms / 86_400_000);
      const h = Math.floor((ms % 86_400_000) / 3_600_000);
      setLabel(d > 0 ? `Gates open in ${d}d ${h}h` : `Gates open in ${h}h`);
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);
  if (!label) return null;
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-red px-3.5 py-1.5 text-[12px] font-bold tracking-[0.12em] text-white uppercase">
      <span className="live-dot block h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
      {label}
    </span>
  );
}

const NIGHTS = [
  {
    day: "Fri",
    date: "Sept 25",
    lineup: ["Big Freedia", "Boyfriend", "Void", "Kidd Love", "DJ Ro & DJ Snuz Butt’n"],
  },
  {
    day: "Sat",
    date: "Sept 26",
    lineup: ["Anders Osborne", "Dumpstaphunk", "Flow Tribe", "Skye Isaac", "DJ RV"],
  },
];

function Featured() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16 xl:gap-24">
      <Reveal className="order-2 lg:order-1">
        <div className="flex flex-wrap items-center gap-4">
          <p className="eyebrow text-gold">The main event</p>
          <Countdown />
        </div>
        <h3 className="display mt-6 text-[clamp(56px,7.4vw,120px)] leading-[0.86] text-paper-hi">
          Downtown
          <br />
          <span className="text-gold">Rising</span>
        </h3>
        <p className="mt-6 max-w-[30rem] text-[17px] leading-[1.55] text-cream/80">
          Two nights of music under the Parc International canopy in the heart of downtown Lafayette. 5–11p both
          nights.
        </p>

        <dl className="mt-9 grid gap-px overflow-hidden rounded-[6px] bg-white/10 sm:grid-cols-2">
          {NIGHTS.map((n) => (
            <div key={n.date} className="bg-teal-ink/70 p-5 md:p-6">
              <dt className="flex items-baseline gap-2">
                <span className="text-[12px] font-bold tracking-[0.16em] text-gold uppercase">{n.day}</span>
                <span className="display text-[26px] text-paper-hi">{n.date}</span>
              </dt>
              <dd className="mt-3 text-[15px] leading-[1.6] text-cream/85">
                <span className="font-semibold text-white">{n.lineup[0]}</span>
                {" · "}
                {n.lineup.slice(1).join(" · ")}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-9 flex flex-wrap items-center gap-6">
          <a
            href={DR_TICKETS}
            className="group inline-flex h-[54px] items-center gap-3 rounded-full bg-gold px-7 text-[15px] font-semibold text-ink transition-colors hover:bg-cream"
          >
            Get tickets
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <span className="text-[14px] text-cream/60">Parc International · Downtown Lafayette</span>
        </div>
      </Reveal>

      {/* Collage: pro stage shot, phone-light night, pure joy */}
      <Reveal delay={0.1} className="relative order-1 aspect-[5/4] lg:order-2 lg:aspect-[1/1]">
        <figure className="grain absolute top-0 right-0 h-[74%] w-[88%] overflow-hidden rounded-[4px]">
          <Image
            src="/images/dtr-stage-crowd-01.jpg"
            alt="A packed crowd facing the Parc International stage with Downtown Rising banners"
            fill
            sizes="(min-width: 1024px) 45vw, 88vw"
            className="grade object-cover object-[50%_55%]"
          />
          <figcaption className="absolute right-2 bottom-2 z-[3] text-[10.5px] text-white/70">Photo: Adam Burke</figcaption>
        </figure>
        <figure className="grain absolute bottom-0 left-0 h-[58%] w-[40%] overflow-hidden rounded-[4px] ring-[6px] ring-deep-teal">
          <Image
            src="/images/dtr-crowd-night-02.jpg"
            alt="Crowd with arms raised under the lit Parc International canopy at night"
            fill
            sizes="(min-width: 1024px) 20vw, 40vw"
            className="grade-night object-cover object-[55%_55%]"
          />
        </figure>
        <figure className="grain absolute right-[6%] bottom-[2%] h-[30%] w-[40%] overflow-hidden rounded-[4px] ring-[6px] ring-deep-teal max-sm:hidden">
          <Image
            src="/images/dtr-crowd-joy-01.jpg"
            alt="Festival-goers grinning in a selfie with their lanyards"
            fill
            sizes="(min-width: 1024px) 18vw, 40vw"
            className="grade object-cover object-[45%_40%]"
          />
        </figure>
        {/* eslint-disable-next-line @next/next/no-img-element -- official event mark, sized explicitly */}
        <img
          src="/brand/logos/event-downtown-rising-color.webp"
          alt="Downtown Rising"
          width={900}
          height={781}
          className="absolute top-[-4%] left-[2%] w-[26%] max-w-[150px] rotate-[-6deg] rounded-[6px] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)]"
        />
      </Reveal>
    </div>
  );
}

function SeasonList() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 30 });
  const sy = useSpring(y, { stiffness: 260, damping: 30 });

  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onMouseLeave={() => setHover(null)}
    >
      <ul className="border-t border-white/15">
        {SEASON.map((ev, i) => (
          <li key={ev.name} onMouseEnter={() => setHover(i)} className="border-b border-white/15">
            <RevealItem index={i}>
              <div className="group relative grid grid-cols-[88px_1fr] gap-x-5 gap-y-4 py-6 transition-colors duration-300 hover:bg-white/[0.035] sm:grid-cols-[120px_1fr] md:grid-cols-[170px_96px_1fr_auto] md:items-center md:gap-x-8 md:py-7 lg:grid-cols-[200px_110px_1.1fr_1fr_auto] lg:px-4">
                {/* date */}
                <div>
                  <span className="block text-[12px] font-bold tracking-[0.16em] text-gold uppercase">{ev.dow}</span>
                  <span className="display mt-1 block text-[30px] leading-none whitespace-nowrap text-paper-hi sm:text-[36px] lg:text-[40px]">
                    {ev.date}
                  </span>
                </div>
                {/* logo tile */}
                <div className="row-span-2 flex h-[88px] w-[88px] items-center justify-center self-start justify-self-end rounded-[6px] bg-paper-hi p-2.5 md:row-span-1 md:h-[96px] md:w-[96px] md:justify-self-auto lg:h-[110px] lg:w-[110px] max-md:col-start-2 max-md:row-start-1">
                  {/* eslint-disable-next-line @next/next/no-img-element -- official event marks at their natural ratio */}
                  <img src={ev.logo} alt="" width={ev.logoW} height={ev.logoH} className="max-h-full w-auto max-w-full object-contain" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <h4 className="display text-[28px] leading-[1] text-paper-hi transition-colors group-hover:text-gold md:text-[32px]">
                    {ev.name}
                  </h4>
                  <p className="mt-2 text-[15px] leading-[1.5] text-cream/80 lg:hidden">{ev.lineup}</p>
                  <p className="mt-2 text-[14px] text-cream/55 lg:hidden">
                    {ev.venue} · {ev.time}
                  </p>
                </div>
                <div className="hidden lg:block">
                  <p className="text-[15px] leading-[1.5] text-cream/85">{ev.lineup}</p>
                  <p className="mt-1.5 text-[14px] text-cream/55">
                    {ev.venue} · {ev.time}
                  </p>
                </div>
                <div className="col-span-2 md:col-span-1">
                  {ev.href ? (
                    <a
                      href={ev.href}
                      aria-label={`Get tickets for ${ev.name}`}
                      className="inline-flex h-[44px] items-center gap-2 rounded-full border border-gold/70 px-5 text-[14px] font-semibold whitespace-nowrap text-gold transition-colors hover:bg-gold hover:text-ink"
                    >
                      Tickets <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex h-[44px] items-center rounded-full border border-white/20 px-5 text-[14px] font-medium whitespace-nowrap text-cream/60">
                      Details soon
                    </span>
                  )}
                </div>
              </div>
            </RevealItem>
          </li>
        ))}
      </ul>

      {/* Cursor-follow photo preview (pointer devices only) */}
      <AnimatePresence>
        {hover !== null && !reduce && (
          <motion.div
            key="preview"
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 z-20 hidden h-[240px] w-[320px] [@media(hover:hover)_and_(min-width:1024px)]:block"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-115%" }}
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            {SEASON.map((ev, i) => (
              <div
                key={ev.name}
                className="grain absolute inset-0 overflow-hidden rounded-[4px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] transition-opacity duration-300"
                style={{ opacity: hover === i ? 1 : 0 }}
              >
                <Image src={ev.image} alt="" fill sizes="320px" className="grade object-cover" style={{ objectPosition: ev.focus }} />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Events() {
  return (
    <section id="events" aria-labelledby="events-title" className="tooth relative overflow-hidden bg-deep-teal py-(--band-y)">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-white/15 pb-8">
          <div>
            <p className="eyebrow text-gold">Upcoming events · Fall / Winter 2026</p>
            <h2 id="events-title" className="display mt-4 text-[clamp(44px,6vw,92px)] text-paper-hi">
              The season is <span className="display-italic text-gold">on.</span>
            </h2>
          </div>
          <p className="max-w-[26rem] text-[16px] leading-[1.55] text-cream/75">
            One season. Seven events. Thousands of guests across Acadiana — from downtown Lafayette to Scott,
            Youngsville and beyond.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Featured />
        </div>

        <div className="mt-24 md:mt-32">
          <Reveal className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="display text-[36px] text-paper-hi md:text-[48px]">Coming up</h3>
            <a
              href={SE}
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-gold"
            >
              <span className="stripe-link">View all events</span>
              <span aria-hidden className="arrow">
                →
              </span>
            </a>
          </Reveal>
          <SeasonList />

          <Reveal className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] text-cream/60">
            {/* eslint-disable-next-line @next/next/no-img-element -- official event mark */}
            <img
              src="/brand/logos/event-village-beats.webp"
              alt=""
              width={900}
              height={710}
              className="h-12 w-auto rounded-[4px] bg-paper-hi p-1"
            />
            <p>
              <span className="font-semibold text-cream/85">Just happened · Sept 17 —</span> Village Beats ft. Wayne
              Toups &amp; DJ RV at West Village, Scott. Thank you for dancing with us.{" "}
              <a
                href={`${SE}/event-details/village-beats-ft-wayne-toups`}
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                See the night
              </a>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
