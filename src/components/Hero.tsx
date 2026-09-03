"use client";

import { motion, useReducedMotion } from "motion/react";
import { StripeRule } from "./StripeRule";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative w-full overflow-hidden aspect-[4/5] sm:aspect-[3/2] md:aspect-auto md:h-[clamp(420px,33.7vw,485px)]">
      {/*
        Photography placeholder — no hero photograph exists yet in
        /references/assets. This stands in for a golden/blue-hour outdoor
        gathering (string lights, silhouetted palms, warm architecture)
        per docs/DESIGN.md §9. Replace with the real asset via next/image.
      */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, #050b06 0%, #0a2413 34%, #1c2c17 54%, #3d2f14 74%, #6b420f 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,214,140,0.95) 1px, transparent 1.6px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* vertical scrim — nav legibility above, grounding below */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-forest/55 via-transparent to-forest/55"
      />
      {/* mobile: strong bottom scrim for the bottom-anchored text block */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-forest via-forest/65 to-transparent md:hidden"
      />
      {/* desktop: horizontal scrim so the left-aligned text column reads */}
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-gradient-to-r from-forest/95 via-forest/65 to-transparent md:block"
      />

      <div className="relative z-10 flex h-full items-end px-(--gutter) pb-9 md:items-center md:pb-0">
        <motion.div
          className="max-w-[23rem]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.2 : 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <h1 className="font-display text-[clamp(34px,3.4vw,52px)] leading-[1.0] font-bold uppercase tracking-[-0.005em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
            Good people.
            <br />
            Good places.
            <br />
            Good vibes,
            <br />
            every time.
          </h1>

          <StripeRule className="mt-[13px]" width={165} />

          <p className="mt-[17px] max-w-[22rem] text-[15px] leading-[1.35] text-cream/90">
            Serving Good Vibes is a social entertainment company building
            unforgettable experiences through hospitality, events, media and
            community.
          </p>

          <a
            href="#"
            className="mt-5 inline-flex items-center justify-center bg-ochre px-9 py-[10px] font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-gold-bright"
            style={{ borderRadius: "var(--radius-control)" }}
          >
            Explore Our World
          </a>
        </motion.div>
      </div>
    </section>
  );
}
