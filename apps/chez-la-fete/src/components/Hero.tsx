"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { EASE } from "@sgv/brand/motion";
import { Fleur } from "./Fleur";

const LINES = ["Lafayette’s", "Premier Downtown", "Urban Oasis"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, reduce ? 1.04 : 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-18%"]);

  // Entrance: never starts from opacity 0 on the headline so it is legible
  // even if hydration is slow; it rises from a soft 0.2.
  const rise = (i: number) =>
    reduce
      ? {}
      : {
          initial: { y: 28, opacity: 0.2 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 1.1, delay: 0.15 + i * 0.12, ease: EASE },
        };

  return (
    <section
      ref={ref}
      id="top"
      aria-label="Welcome"
      className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-night text-ivory h-[calc(100svh-76px)] lg:h-[calc(100svh-104px)] lg:max-h-[940px]"
    >
      <motion.div className="absolute inset-x-0 top-0 bottom-[34%] -z-10 sm:bottom-0" style={{ y, scale }}>
        {/* Static zoom from the left edge crops a lamp post out of frame on wide screens */}
        <div className="absolute inset-0 lg:origin-[8%_70%] lg:scale-[1.2]">
        {/* PLACEHOLDER — stock night exterior; replace with the client's own
            photograph of the lit cottage & string-lit garden at 811 Lafayette St. */}
        <Image
          src="/images/hero.jpg"
          alt="The string-lit garden path leading to a glowing guest cottage at night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_60%] [filter:sepia(0.38)_saturate(0.72)_contrast(1.1)_brightness(0.8)_hue-rotate(-8deg)] lg:object-[center_62%]"
        />
        </div>
      </motion.div>
      {/* Legibility: a night wash that leans left on desktop, rises from the bottom on mobile */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(18_15_11/0.3)_0%,rgb(18_15_11/0)_22%,rgb(18_15_11/0.7)_52%,rgb(18_15_11/1)_66%)] sm:bg-[linear-gradient(180deg,rgb(18_15_11/0.35)_0%,rgb(18_15_11/0.1)_30%,rgb(18_15_11/0.78)_78%,rgb(18_15_11/0.92)_100%)] lg:bg-[linear-gradient(90deg,rgb(18_15_11/0.86)_0%,rgb(18_15_11/0.55)_38%,rgb(18_15_11/0.08)_70%),linear-gradient(0deg,rgb(18_15_11/0.6)_0%,transparent_35%)]"
      />

      <motion.div style={{ y: textY }} className="frame relative w-full pb-10 sm:pb-14 lg:pb-[clamp(56px,9vh,110px)]">
        <motion.div {...rise(0)} className="flex items-center gap-4">
          <Fleur className="h-5 w-auto text-gold-bright" />
          <span className="h-px w-10 bg-gold-bright/70" />
          <span className="label text-[10.5px] text-ivory/85 sm:text-[11px]">Guest House &amp; Event Venue</span>
        </motion.div>

        <h1 className="display mt-7 text-[clamp(38px,6vw,90px)] leading-[0.96] text-ivory [text-shadow:0_2px_30px_rgb(0_0_0/0.25)]">
          {LINES.map((l, i) => (
            <span key={l} className="block overflow-hidden pb-[0.04em]">
              <motion.span className="block" {...rise(i + 1)}>
                {l}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          {...rise(4)}
          className="mt-7 max-w-[34ch] font-display text-[21px] leading-[1.35] text-ivory/90 sm:text-[24px] lg:max-w-[40ch]"
        >
          A Parisian-inspired guest house &amp; event venue in the heart of Downtown Lafayette.
        </motion.p>

        <motion.div {...rise(5)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a href="#book" className="btn btn-gold">
            Check Stay Availability
          </a>
          <a href="#inquire" className="btn btn-ghost-light">
            Inquire About Events
          </a>
        </motion.div>

        {/* Dual business model, stated as two doors */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="mt-12 hidden items-end justify-between border-t border-ivory/20 pt-5 md:flex"
        >
          <div className="flex gap-14">
            <a href="#stays" className="group flex items-baseline gap-3">
              <span className="italic-serif text-[17px] text-gold-bright">I.</span>
              <span className="label text-[10.5px] text-ivory/80 transition-colors group-hover:text-ivory">
                Stay — 4 bedrooms, sleeps 10
              </span>
            </a>
            <a href="#private-events" className="group flex items-baseline gap-3">
              <span className="italic-serif text-[17px] text-gold-bright">II.</span>
              <span className="label text-[10.5px] text-ivory/80 transition-colors group-hover:text-ivory">
                Celebrate — weddings, dinners &amp; retreats
              </span>
            </a>
          </div>
          <span className="italic-serif text-[30px] leading-none text-gold-pale">Bienvenue</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
