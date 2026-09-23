"use client";

import { useRef } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Reveal, RevealItem } from "./Reveal";
import { torn } from "@/lib/torn";
import { TornEdge } from "./TornEdge";

/*
  Since SEP — the heritage strip. Fifteen years of Social Entertainment
  Productions, told with the company's own event photos pasted into the
  collage, and this season's real lineup set like a printed handbill.
  Facts: media/FACTS.md (client marketing drop, Sept 2026).
*/

const SE = "https://socialentertainment.net";

const STATS = [
  { n: "15+", label: "Years producing Acadiana events", color: "text-rust" },
  { n: "7", label: "Events this season", color: "text-teal" },
  { n: "4", label: "Cities across South Louisiana", color: "text-mustard-deep" },
];

type Show = {
  name: string;
  date: string;
  where: string;
  href?: string;
  logo?: { src: string; w: number; h: number; cls?: string };
  past?: boolean;
};

const SEASON: Show[] = [
  {
    name: "Village Beats",
    date: "Sep 17",
    where: "West Village, Scott",
    logo: { src: "/brand/logos/event-village-beats.webp", w: 900, h: 710 },
    past: true,
  },
  {
    name: "Downtown Rising",
    date: "Sep 25–26",
    where: "Parc International",
    href: `${SE}/event-details/downtown-rising`,
    logo: { src: "/brand/logos/event-downtown-rising-color.webp", w: 900, h: 781 },
  },
  {
    name: "Sugar Jam",
    date: "Oct 3",
    where: "Sugar Mill Pond, Youngsville",
    href: `${SE}/sugar-jam`,
    logo: { src: "/brand/logos/event-sugar-jam.webp", w: 194, h: 134, cls: "max-w-[82px]" },
  },
  {
    name: "Acadiana Eats Festival",
    date: "Oct 23–24",
    where: "West Village, Scott",
    href: `${SE}/acadianaeatsfestival`,
    logo: { src: "/brand/logos/event-acadiana-eats.webp", w: 863, h: 361 },
  },
  {
    name: "High Notes",
    date: "Nov 6",
    where: "Chez La Fête",
    href: `${SE}/high-notes`,
    logo: { src: "/brand/logos/event-high-notes.webp", w: 706, h: 374 },
  },
  { name: "Egan Cup Invitational", date: "Nov 7", where: "SGV HQ, Downtown", href: `${SE}/egancup` },
  { name: "Holiday Open House", date: "Dec 19", where: "SGV HQ, Downtown" },
];

/** A torn-edged photo print with a paper border and a strip of tape. */
function Print({
  src,
  width,
  height,
  alt,
  caption,
  seed,
  rot,
  tape,
  className,
  captionClass,
  y,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  seed: number;
  rot: number;
  tape: string;
  className: string;
  captionClass?: string;
  y?: MotionValue<number>;
}) {
  return (
    <motion.figure className={clsx("absolute", className)} style={y ? { y } : undefined}>
      <div style={{ rotate: `${rot}deg` }} className="relative">
        <div
          className="bg-paper-hi p-[2.2%] pb-[9%] shadow-[3px_6px_0_rgba(21,20,18,0.16)]"
          style={{ clipPath: torn(seed, { amp: 1.4, steps: 26 }) }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            unoptimized
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="photo-grade block h-auto w-full"
          />
          <figcaption className={clsx("absolute inset-x-[4%] bottom-[2.2%] font-label text-[clamp(11px,1vw,13.5px)] font-semibold uppercase tracking-[0.12em] text-ink/70", captionClass)}>
            {caption}
          </figcaption>
        </div>
        {/* masking tape */}
        <span
          aria-hidden
          className={clsx(
            "absolute h-[9%] min-h-[18px] w-[22%] bg-mustard/55 mix-blend-multiply shadow-[0_1px_0_rgba(0,0,0,0.06)]",
            tape
          )}
        />
      </div>
    </motion.figure>
  );
}

export function SinceSep() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const k = reduce ? 0 : 1;
  const yBig = useTransform(scrollYProgress, [0, 1], [24 * k, -24 * k]);
  const ySmall = useTransform(scrollYProgress, [0, 1], [60 * k, -50 * k]);

  return (
    <section id="since-sep" className="paper relative pt-14 pb-16 md:pt-20 md:pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-(--page-max) px-(--gutter)">
        <div className="lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-x-[clamp(40px,5vw,96px)]">
          <Reveal>
            <p className="flex items-center gap-3 font-label text-[15px] font-semibold uppercase tracking-[0.16em] text-rust">
              <span aria-hidden className="h-[1.5px] w-10 bg-rust" />
              Since SEP
            </p>
            <h2 className="worn mt-4 font-display text-[clamp(50px,5.6vw,84px)] uppercase leading-[0.9] tracking-[0.004em] text-ink">
              15 years of
              <br />
              Acadiana nights
            </h2>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-[1.55] text-ink/80 xl:text-[18px]">
              For fifteen years, Social Entertainment Productions has put on the festivals, concerts and block
              parties Acadiana gathers around. Now the company evolves:{" "}
              <strong className="font-semibold text-ink">Serving Good Vibes</strong> is the service, experience,
              lifestyle and activation-driven company under the Social Entertainment umbrella.
            </p>

            <dl className="mt-9 grid max-w-[36rem] grid-cols-3 border-y-[1.5px] border-ink">
              {STATS.map(({ n, label, color }, i) => (
                <RevealItem
                  key={label}
                  index={i}
                  className={clsx("py-4 pr-3 sm:py-5 sm:pr-5", i > 0 && "border-l border-ink/25 pl-3 sm:pl-5")}
                >
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <span className={clsx("worn block font-display text-[clamp(44px,5vw,72px)] leading-[0.95]", color)}>
                      {n}
                    </span>
                    <span className="mt-1.5 block font-label text-[13px] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-ink/75 sm:text-[14px]">
                      {label}
                    </span>
                  </dd>
                </RevealItem>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={`${SE}/partners-sponsors`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-between gap-5 bg-rust px-6 py-[15px] font-label text-[16px] font-semibold uppercase tracking-[0.09em] text-cream shadow-[3px_3px_0_var(--color-ink)] transition-all duration-150 hover:-translate-x-px hover:-translate-y-px hover:bg-rust-hi hover:shadow-[5px_5px_0_var(--color-ink)] sm:w-auto"
                style={{ borderRadius: 2 }}
              >
                Partners + Sponsors
                <ArrowUpRight size={19} strokeWidth={2} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={`${SE}/event-details/downtown-rising`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-label text-[16px] font-semibold uppercase tracking-[0.08em] text-ink"
              >
                <span className="live-dot h-2 w-2 rounded-full bg-rust" aria-hidden />
                <span className="border-b-[1.5px] border-ink/30 pb-0.5 transition-colors group-hover:border-ink">
                  Next up: Downtown Rising, Sep 25–26
                </span>
                <ArrowRight size={17} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          {/* pasted prints */}
          <div ref={ref} className="relative mx-auto mt-8 sm:mt-12 aspect-[1/0.78] max-w-[600px] lg:mt-0 lg:max-w-none">
            <div
              aria-hidden
              className="paper absolute left-[20%] top-[8%] h-[78%] w-[76%] bg-teal! bg-blend-multiply"
              style={{ clipPath: torn(61, { amp: 3, steps: 16 }) }}
            />
            <div
              aria-hidden
              className="halftone absolute right-[-2%] bottom-[4%] h-[30%] w-[26%] opacity-80"
              style={{ ["--pitch" as string]: "10px", ["--size" as string]: "2.2px" }}
            />
            <Print
              src="/images/sep-downtown-rising.jpg"
              width={1400}
              height={840}
              alt="A sea of phone lights in front of the Downtown Rising stage at Parc International"
              caption="Downtown Rising 2025"
              seed={71}
              rot={-1.6}
              tape="-top-[3%] left-[40%] rotate-[-4deg]"
              className="right-0 top-[3%] w-[86%]"
              captionClass="text-right"
              y={yBig}
            />
            <Print
              src="/images/sep-sugar-jam.jpg"
              width={1100}
              height={708}
              alt="Couples two-stepping under string lights at Sugar Jam, Sugar Mill Pond"
              caption="Sugar Jam · Sugar Mill Pond"
              seed={83}
              rot={2.4}
              tape="-top-[4%] left-[8%] rotate-[6deg]"
              className="bottom-[2%] left-0 z-[2] w-[50%]"
              y={ySmall}
            />
          </div>
        </div>

        {/* this season — a printed handbill of the real lineup */}
        <div className="mt-16 border-t-[1.5px] border-ink pt-6 md:mt-20 lg:mt-24">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="font-label text-[15px] font-semibold uppercase tracking-[0.16em] text-ink">
              Fall / Winter 2026
            </h3>
            <span className="font-label text-[14px] font-medium uppercase tracking-[0.1em] text-ink/60">
              Downtown Lafayette to Scott, Youngsville + beyond
            </span>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-3">
            {SEASON.map((s, i) => {
              const body = (
                <>
                  <div className="flex h-[64px] items-center sm:h-[76px] lg:h-[84px]">
                    {s.logo ? (
                      <Image
                        src={s.logo.src}
                        alt={s.name}
                        width={s.logo.w}
                        height={s.logo.h}
                        unoptimized
                        className={clsx(
                          "h-auto max-h-full w-auto max-w-[128px] object-contain mix-blend-multiply transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-105",
                          s.logo.cls
                        )}
                      />
                    ) : (
                      <span className="font-display text-[26px] uppercase leading-[0.95] text-ink transition-colors group-hover:text-rust">
                        {s.name}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 font-label text-[17px] font-semibold uppercase tracking-[0.06em] text-ink">
                    {s.date}
                    {s.past ? <span className="ml-2 text-[13px] tracking-[0.1em] text-ink/50">Played</span> : null}
                  </p>
                  <p className="mt-0.5 text-[14px] leading-[1.35] text-ink/65">{s.where}</p>
                </>
              );
              return (
                <li key={s.name} className={clsx(s.past && "opacity-55 max-sm:hidden")}>
                  <RevealItem index={i}>
                    {s.href ? (
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="group block">
                        {body}
                      </a>
                    ) : (
                      <div className="group">{body}</div>
                    )}
                  </RevealItem>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <TornEdge side="bottom" seed={29} />
    </section>
  );
}
