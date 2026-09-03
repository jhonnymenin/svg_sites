"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden aspect-[4/5] sm:aspect-[3/2] md:aspect-auto md:h-[clamp(420px,33.7vw,485px)]">
      {/*
        TEMPORARY PHOTOGRAPHY PLACEHOLDER — /public/hero/placeholder-dusk.jpg
        Not the client's photograph. A freely-licensed (Unsplash license,
        "Outdoor cafe with string lights at dusk") photo standing in for the
        real "architectural/hospitality collage" asset per the LP spec —
        string lights, warm architecture, a person, blue-hour sky. Swap the
        file — and the object-position classes below if the crop changes —
        for the real hero photograph when it's supplied.
      */}
      <Image
        src="/hero/placeholder-dusk.jpg"
        alt=""
        fill
        priority
        unoptimized
        className="object-cover object-[30%_30%] md:object-[50%_36%]"
      />

      {/* short top scrim, full width — nav legibility only, the sky here runs pale */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/75 to-transparent md:h-24"
      />
      {/* left-side overlay — the only scrim carrying real weight, sized to the text column */}
      <div
        aria-hidden
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,11,7,0.93) 0%, rgba(15,11,7,0.74) 18%, rgba(15,11,7,0.34) 34%, rgba(15,11,7,0) 52%)",
        }}
      />
      {/* mobile: bottom-anchored text needs a bottom scrim instead of a left one */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-ink via-ink/60 to-transparent md:hidden"
      />

      <div className="relative z-10 flex h-full items-end px-(--gutter) pb-9 md:pb-[18px]">
        <motion.div
          className="max-w-[26rem]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.2 : 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <h1 className="font-display text-[clamp(32px,3.4vw,50px)] leading-[0.98] font-bold uppercase tracking-[-0.005em] text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.65)]">
            We build places
            <br />
            people want to be
          </h1>

          <span aria-hidden className="mt-3 block h-[3px] w-16 bg-rust" />

          <p className="mt-3 font-display text-[12.5px] font-semibold uppercase tracking-[0.07em] text-mustard">
            Businesses. Investments. Experiences. Development. Community.
          </p>

          <p className="mt-2 max-w-[22rem] text-[14px] leading-[1.35] text-cream/90">
            We create and grow hospitality brands and real-world experiences
            that bring people together and make a lasting impact.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#food-drink"
              className="inline-flex items-center justify-center bg-rust px-8 py-[10px] font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-150 hover:-translate-y-[1px] hover:bg-rust-deep hover:shadow-[0_4px_0_-1px_rgba(0,0,0,0.35)]"
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Explore Portfolio
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-white"
            >
              Learn Our Story
              <span aria-hidden className="transition-transform duration-150 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
