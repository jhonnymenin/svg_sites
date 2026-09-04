"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { EASE } from "./Reveal";

const stack = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);

  // Scroll-linked drift: the photograph settles a few percent as the page
  // leaves the hero — felt, not seen. Wrapper is oversized so nothing uncovers.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden aspect-[4/5] sm:aspect-[3/2] md:aspect-auto md:h-[clamp(420px,33.7vw,485px)]"
    >
      {/*
        TEMPORARY PHOTOGRAPHY PLACEHOLDER — /public/hero/placeholder-dusk.jpg
        Not the client's photograph. A freely-licensed (Unsplash license,
        "Outdoor cafe with string lights at dusk") photo standing in for the
        real "architectural/hospitality collage" asset per the LP spec —
        string lights, warm architecture, a person, blue-hour sky. Swap the
        file — and the object-position classes below if the crop changes —
        for the real hero photograph when it's supplied.
      */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 -top-[8%] -bottom-[8%]"
        style={{ y: reduce ? 0 : drift }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <Image
            src="/hero/placeholder-dusk.jpg"
            alt=""
            fill
            priority
            unoptimized
            className="object-cover object-[30%_30%] md:object-[50%_36%]"
          />
        </motion.div>
      </motion.div>

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
          variants={stack}
          initial={reduce ? false : "hidden"}
          animate="show"
        >
          <motion.h1
            variants={item}
            className="font-display text-[clamp(32px,3.4vw,50px)] leading-[0.98] font-bold uppercase tracking-[-0.005em] text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.65)]"
          >
            We build places
            <br />
            people want to be
          </motion.h1>

          <motion.span variants={item} aria-hidden className="mt-3 block h-[3px] w-16 bg-rust" />

          <motion.p
            variants={item}
            className="mt-3 font-display text-[11.5px] font-semibold uppercase tracking-[0.07em] text-mustard md:text-[12.5px]"
          >
            Businesses. Investments. Experiences. Development. Community.
          </motion.p>

          <motion.p variants={item} className="mt-2 max-w-[22rem] text-[14px] leading-[1.35] text-cream/90">
            We create and grow hospitality brands and real-world experiences
            that bring people together and make a lasting impact.
          </motion.p>

          <motion.div variants={item} className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#food-drink"
              className="inline-flex items-center justify-center bg-rust px-8 py-[10px] font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-150 hover:-translate-y-[1px] hover:bg-rust-deep hover:shadow-[0_4px_0_-1px_rgba(0,0,0,0.35)] active:translate-y-0 active:shadow-none"
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Explore Portfolio
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-white"
            >
              <span className="relative">
                Learn Our Story
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-mustard transition-[width] duration-200 group-hover:w-full" />
              </span>
              <span aria-hidden className="transition-transform duration-150 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
