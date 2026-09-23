"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Container } from "./Container";

const STATS = [
  { n: 7, suffix: "", label: "events this season", color: "var(--red)" },
  { n: 15, suffix: "+", label: "years producing Acadiana events", color: "var(--olive)" },
  { n: 4, suffix: "", label: "cities across South Louisiana", color: "var(--gold)" },
  { n: 22, suffix: "", label: "company-wide partnership slots", color: "var(--deep-teal)" },
];

const MARKS: [string, string, number, number][] = [
  ["event-downtown-rising-color", "Downtown Rising", 900, 781],
  ["event-sugar-jam", "Sugar Jam", 194, 134],
  ["event-acadiana-eats", "Acadiana Eats Festival", 863, 361],
  ["event-high-notes", "High Notes", 706, 374],
  ["event-village-beats", "Village Beats", 900, 710],
  ["braziliana", "Braziliana", 1800, 391],
  ["event-yacht-rock", "Yacht Rock Beer Fest", 900, 837],
  ["event-wineaux", "Wineaux", 649, 647],
];

const LEVELS = ["Presenting / Title", "Headline", "Supporting", "Community"];

function Count({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [v, setV] = useState(to);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 1.2, ease: [0.2, 0.7, 0.2, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {v}
      {suffix}
    </span>
  );
}

export function Partners() {
  return (
    <section id="partners" aria-labelledby="partners-title" className="paper relative py-(--band-y)">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="eyebrow text-red">Partners &amp; sponsors</p>
            <h2 id="partners-title" className="display mt-4 text-[clamp(44px,6vw,96px)] text-deep-teal">
              Put your brand where the <span className="display-italic text-red">vibes</span> are.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[30rem] text-[17px] leading-[1.6] text-ink/75">
              One season. Seven events. Thousands of guests across Acadiana — from downtown Lafayette to Scott,
              Youngsville and beyond. Sponsorships, partnerships, community collaborations and vendor spots are
              still available.
            </p>
          </Reveal>
        </div>

        <dl className="mt-14 grid grid-cols-2 border-t border-ink/15 md:mt-20 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <RevealItem
              key={s.label}
              index={i}
              className="border-b border-ink/15 py-8 pr-4 odd:border-r odd:pr-4 max-lg:even:pl-5 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="display block text-[clamp(64px,8vw,132px)] leading-[0.85]" style={{ color: s.color }}>
                  <Count to={s.n} suffix={s.suffix} />
                </span>
                <span className="mt-3 block max-w-[18ch] text-[15px] leading-[1.4] font-medium text-ink/75">{s.label}</span>
              </dd>
            </RevealItem>
          ))}
        </dl>

        <Reveal className="mt-14">
          <p className="text-[12px] font-semibold tracking-[0.14em] text-olive uppercase">The stages your brand joins</p>
          <ul className="mt-5 grid grid-cols-4 gap-2 sm:gap-3 lg:grid-cols-8">
            {MARKS.map(([file, name, w, h]) => (
              <li
                key={file}
                className="group flex aspect-square items-center justify-center rounded-[6px] bg-paper-hi p-3 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-18px_rgba(29,25,20,0.6)] sm:p-5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- official event marks */}
                <img
                  src={`/brand/logos/${file}.webp`}
                  alt={name}
                  width={w}
                  height={h}
                  loading="lazy"
                  className="max-h-full w-auto max-w-full object-contain grayscale-[0.35] transition-[filter] duration-300 group-hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <p className="text-[12px] font-semibold tracking-[0.14em] text-olive uppercase">Partnership levels</p>
            <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
              {LEVELS.map((l, i) => (
                <li key={l} className="flex items-center gap-2 text-[16px] font-medium text-deep-teal">
                  <span
                    aria-hidden
                    className="block h-3 w-3 rounded-full"
                    style={{ background: ["var(--red)", "var(--gold)", "var(--olive)", "var(--teal)"][i] }}
                  />
                  {l}
                  {i < LEVELS.length - 1 && <span aria-hidden className="mx-2 text-ink/25">/</span>}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-4">
            <a
              href="https://socialentertainment.net/partners-sponsors"
              className="group inline-flex h-[54px] items-center gap-3 rounded-full bg-deep-teal px-7 text-[15px] font-semibold text-paper-hi transition-colors hover:bg-red"
            >
              Become a partner <ArrowUpRight size={18} />
            </a>
            <a
              href="https://socialentertainment.net/vendors"
              className="group inline-flex h-[54px] items-center gap-3 rounded-full border-2 border-deep-teal px-7 text-[15px] font-semibold text-deep-teal transition-colors hover:bg-deep-teal hover:text-paper-hi"
            >
              Vend with us <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
