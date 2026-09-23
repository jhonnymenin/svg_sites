"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { FilmButton } from "./FilmButton";

const LINES: { text: string; accent?: boolean }[] = [
  { text: "We create" },
  { text: "experiences that" },
  { text: "bring people" },
  { text: "together.", accent: true },
];

const TICKER = [
  ["Downtown Rising", "Sept 25–26", "Parc International"],
  ["Sugar Jam", "Oct 3", "Sugar Mill Pond"],
  ["Acadiana Eats Festival", "Oct 23–24", "West Village"],
  ["High Notes", "Nov 6", "Chez La Fête"],
  ["Egan Cup Invitational", "Nov 7", "SGV HQ"],
  ["Holiday Open House", "Dec 19", "SGV HQ"],
];

/** Picks the landscape or portrait loop once mounted; never autoplays under reduced motion. */
function HeroVideo() {
  const reduce = useReducedMotion();
  const [src, setSrc] = useState<null | "wide" | "tall">(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia("(max-aspect-ratio: 4/5)");
    const pick = () => setSrc(mq.matches ? "tall" : "wide");
    pick();
    mq.addEventListener("change", pick);
    return () => mq.removeEventListener("change", pick);
  }, [reduce]);

  const base = src === "tall" ? "/video/sgv-hero-loop-mobile" : "/video/sgv-hero-loop";

  return (
    <>
      <picture>
        <source media="(max-aspect-ratio: 4/5)" srcSet="/video/sgv-hero-loop-mobile-poster.jpg" />
        <img
          src="/video/sgv-hero-loop-poster.jpg"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
        />
      </picture>
      {src && (
        <video
          key={src}
          className="absolute inset-0 h-full w-full object-cover object-[50%_60%] transition-opacity duration-1000"
          style={{ opacity: playing ? 1 : 0 }}
          poster={`${base}-poster.jpg`}
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          onPlaying={() => setPlaying(true)}
          aria-hidden
        >
          <source src={`${base}.webm`} type="video/webm" />
          <source src={`${base}.mp4`} type="video/mp4" />
        </video>
      )}
    </>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex h-[100svh] min-h-[640px] flex-col overflow-hidden bg-night md:min-h-[760px] lg:max-h-[1000px]"
    >
      <motion.div aria-hidden className="absolute inset-0 -z-10" style={{ y: reduce ? 0 : y }}>
        <div className="settle grain absolute inset-0">
          <HeroVideo />
        </div>
      </motion.div>

      {/* Scrims — protect the type, keep the phone-light sea bright */}
      <div
        aria-hidden
        className="absolute inset-0 -z-[5]"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,25,29,0.7) 0%, rgba(2,25,29,0.05) 22%, rgba(2,25,29,0) 45%, rgba(2,25,29,0.55) 72%, rgba(2,25,29,0.96) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-[5] md:hidden"
        style={{ background: "linear-gradient(180deg, rgba(2,25,29,0) 18%, rgba(2,25,29,0.62) 38%, rgba(2,25,29,0.8) 70%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-[5] hidden md:block"
        style={{ background: "linear-gradient(90deg, rgba(2,25,29,0.78) 0%, rgba(2,25,29,0.35) 38%, rgba(2,25,29,0) 62%)" }}
      />

      <motion.div
        className="relative mx-auto flex w-full max-w-(--page-max) flex-1 flex-col justify-end px-(--gutter) pt-28 pb-10 md:pb-14 lg:pb-16"
        style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : fade }}
      >
        <p className="eyebrow fade-up flex items-center gap-3 text-gold" style={{ animationDelay: "120ms" }}>
          <span aria-hidden className="stripes-v block h-[6px] w-9" />
          <span className="sm:hidden">A Social Entertainment company</span>
          <span className="max-sm:hidden">Hospitality · Production · Community &amp; Development</span>
        </p>

        <h1
          id="hero-title"
          className="display mt-5 text-[clamp(50px,8.6vw,132px)] text-paper-hi [text-shadow:0_4px_40px_rgba(0,0,0,0.35)] md:mt-6"
        >
          {LINES.map((l, i) => (
            <span key={l.text} className="block overflow-hidden pb-[0.06em]">
              <span
                className={l.accent ? "rise block text-gold" : "rise block"}
                style={{ animationDelay: `${220 + i * 90}ms` }}
              >
                {l.text}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-7 flex flex-col gap-8 md:mt-9 lg:flex-row lg:items-end lg:justify-between">
          <p
            className="fade-up max-w-[34rem] text-[16px] leading-[1.55] text-cream/90 md:text-[18px]"
            style={{ animationDelay: "640ms" }}
          >
            A lifestyle-driven experience company rooted in hospitality, events and consulting — because how people
            feel is just as important as how something is executed.
          </p>
          <div className="fade-up flex flex-wrap items-center gap-x-8 gap-y-5" style={{ animationDelay: "780ms" }}>
            <a
              href="#about"
              className="group inline-flex h-[54px] items-center gap-3 rounded-full bg-gold px-7 whitespace-nowrap text-[15px] font-semibold text-ink transition-colors duration-200 hover:bg-cream"
            >
              Explore our world
              <span aria-hidden className="arrow">
                →
              </span>
            </a>
            <FilmButton />
          </div>
        </div>
      </motion.div>

      {/* Season ticker — the whole fall calendar, moving like a marquee sign */}
      <div className="relative border-t border-white/10 bg-night/70 backdrop-blur-sm">
        <div className="marquee-host flex items-stretch">
          <a
            href="#events"
            className="group relative z-10 flex shrink-0 items-center gap-3 bg-gold px-4 py-3.5 text-[12px] font-bold tracking-[0.14em] text-ink uppercase md:px-6"
          >
            <span className="live-dot block h-2 w-2 rounded-full bg-red" aria-hidden />
            Fall / Winter 2026
          </a>
          <div className="relative flex-1 overflow-hidden" aria-label="Fall/Winter 2026 season">
            <ul className="marquee flex w-max items-center py-3.5" aria-hidden>
              {[...TICKER, ...TICKER].map(([name, date, where], i) => (
                <li key={i} className="flex items-center gap-3 pr-10 text-[14px] whitespace-nowrap text-cream/85">
                  <span className="font-semibold text-white">{name}</span>
                  <span className="text-gold">{date}</span>
                  <span className="text-cream/55">{where}</span>
                  <span aria-hidden className="ml-7 text-gold/60">
                    ✦
                  </span>
                </li>
              ))}
            </ul>
            <p className="sr-only">
              {TICKER.map(([n, d, w]) => `${n}, ${d}, ${w}`).join("; ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
