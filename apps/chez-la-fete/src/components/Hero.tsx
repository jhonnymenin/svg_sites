"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { EASE } from "@sgv/brand/motion";
import { Fleur } from "./Fleur";
import { LoopVideo } from "./LoopVideo";

const LINES = ["Lafayette’s", "Premier", "Downtown", "Urban Oasis"];

/**
 * Stay + celebrate, told honestly: the professional daylight portrait of the
 * cottage (the stay), and — hung in an arched window over it — a loop of real
 * Friday nights in the courtyard (the celebration). No faked dusk.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "10%"]);
  const archY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-22%"]);

  const rise = (i: number) =>
    reduce
      ? {}
      : {
          initial: { y: 28, opacity: 0.2 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 1.1, delay: 0.1 + i * 0.1, ease: EASE },
        };

  return (
    <section
      ref={ref}
      id="top"
      aria-label="Welcome"
      className="paper relative z-10 isolate lg:h-[calc(100svh-104px)] lg:min-h-[700px] lg:max-h-[900px]"
    >
      {/* ---------- The house by day ---------- */}
      <motion.div
        initial={reduce ? false : { clipPath: "inset(0 0 0 100%)" }}
        animate={{ clipPath: "inset(0 0 0 0%)" }}
        transition={{ duration: 1.4, delay: 0.05, ease: EASE }}
        className="absolute inset-y-0 right-0 left-[47%] hidden overflow-hidden bg-linen lg:block"
      >
        <motion.div className="absolute inset-x-0 -top-[6%] -bottom-[6%]" style={{ y: photoY }}>
          <Image
            src="/images/chez-exterior-street-01.jpg"
            alt="Chez La Fête from Lafayette Street: a white cottage with blue shutters under live oaks, its hot-pink gate door set in a hand-painted magnolia fence beside the ‘Bienvenue’ panel"
            fill
            priority
            sizes="(min-width:1024px) 56vw, 100vw"
            className="object-cover object-[22%_60%]"
          />
        </motion.div>
        {/* hairline caption on the photograph */}
        <p className="absolute top-5 right-5 hidden items-center gap-3 bg-ivory/90 px-3 py-2 text-ink lg:flex">
          <span className="label text-[9.5px] tracking-[0.26em]">811 Lafayette Street</span>
        </p>
      </motion.div>

      {/* ---------- The house after dark: arched window with the courtyard loop ---------- */}
      <motion.div
        style={{ y: archY }}
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7, ease: EASE }}
        className="absolute right-[var(--gutter)] bottom-[-72px] z-10 hidden w-[clamp(200px,17vw,260px)] lg:block"
      >
        <ArchLoop />
      </motion.div>

      {/* ---------- Words ---------- */}
      <div className="frame relative flex h-full flex-col pt-10 sm:pt-14 lg:justify-center lg:pt-0">
        <div className="lg:max-w-[44%] lg:pr-6">
          <motion.div {...rise(0)} className="flex items-center gap-4">
            <Fleur className="h-5 w-auto text-gold" />
            <span className="h-px w-10 bg-gold/60" />
            <span className="label text-[10.5px] text-ink sm:text-[11px]">Guest House &amp; Event Venue</span>
          </motion.div>

          <h1 className="display mt-6 text-[clamp(44px,4.9vw,80px)] leading-[0.95] text-ink lg:mt-8">
            {LINES.map((l, i) => (
              <span key={l} className="block overflow-hidden pb-[0.04em]">
                <motion.span className="block" {...rise(i + 1)}>
                  {i === 3 ? (
                    <>
                      Urban <span className="text-pink-deep">Oasis</span>
                    </>
                  ) : (
                    l
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            {...rise(5)}
            className="mt-6 max-w-[30ch] font-display text-[21px] leading-[1.35] text-ink-soft sm:text-[23px] lg:mt-8"
          >
            A Parisian-inspired guest house &amp; event venue in the heart of Downtown Lafayette.
          </motion.p>

          {/* Mobile: the photo + arch sit between the promise and the CTAs */}
          <div className="relative -mx-[var(--gutter)] mt-9 lg:hidden">
            <MobilePhoto />
          </div>

          <motion.div {...rise(6)} className="mt-16 flex flex-col gap-3 sm:mt-20 sm:flex-row sm:gap-4 lg:mt-10">
            <a href="#book" className="btn btn-pink">
              Check Stay Availability
            </a>
            <a href="#inquire" className="btn btn-ghost-ink">
              Inquire About Events
            </a>
          </motion.div>

          {/* Dual business model, stated as two doors */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.1 }}
            className="mt-10 flex flex-col gap-3 border-t border-gold/40 pt-5 pb-2 sm:flex-row sm:gap-10 lg:mt-12"
          >
            <a href="#stays" className="group flex items-baseline gap-3">
              <span className="italic-serif text-[17px] text-gold">I.</span>
              <span className="label text-[10.5px] text-ink-soft transition-colors group-hover:text-pink-deep">
                Stay — sleeps 10
              </span>
            </a>
            <a href="#private-events" className="group flex items-baseline gap-3">
              <span className="italic-serif text-[17px] text-gold">II.</span>
              <span className="label text-[10.5px] text-ink-soft transition-colors group-hover:text-pink-deep">
                Celebrate — the courtyard &amp; house
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArchLoop({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <div className="arch relative aspect-[3/4.6] overflow-hidden bg-salon shadow-[0_30px_60px_-30px_rgb(22_19_15/0.55)] ring-[6px] ring-ivory lg:ring-8">
        <LoopVideo
          src="/video/chez-loop-vertical"
          poster="/video/chez-loop-vertical-poster.jpg"
          still="/images/chez-high-notes-band-02.jpg"
          stillAlt="A Cajun fiddle band playing under the blue-lit live oak in the courtyard at night"
          sizes="(min-width:1024px) 260px, 40vw"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,rgb(22_19_15/0.75),transparent)]"
        />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-3 text-center lg:pb-4">
          <span className={`script neon block whitespace-nowrap ${compact ? "text-[21px] sm:text-[28px]" : "text-[30px] lg:text-[34px]"}`}>
            Après le soleil
          </span>
          <span className="label mt-1 block text-[7.5px] tracking-[0.18em] sm:text-[8.5px] sm:tracking-[0.24em] text-ivory/85 lg:text-[9px]">The Courtyard Stage</span>
        </div>
      </div>
    </div>
  );
}

function MobilePhoto() {
  return (
    <div className="relative">
      <div className="relative aspect-[4/3.4] overflow-hidden bg-linen sm:aspect-[16/10.5]">
        <Image
          src="/images/chez-exterior-street-01.jpg"
          alt="Chez La Fête from Lafayette Street: a white cottage with blue shutters, its hot-pink gate door set in a hand-painted magnolia fence"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[17%_60%]"
        />
      </div>
      <div className="absolute right-[var(--gutter)] -bottom-10 w-[36%] max-w-[230px]">
        <ArchLoop compact />
      </div>
    </div>
  );
}
