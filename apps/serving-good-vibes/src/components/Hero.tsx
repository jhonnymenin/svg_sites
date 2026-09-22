"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { StripeRule } from "./StripeRule";

const LINES = ["We create", "experiences that", "bring people", "together."];

/**
 * The hanging banner from the approved mockup, rebuilt as type: a cream cloth
 * strung between the trees. Decorative — the words are the brand's refrain.
 */
function Banner() {
  return (
    <div aria-hidden className="pointer-events-none absolute top-0 right-[calc(var(--gutter)+4vw)] z-[5] hidden md:block lg:right-[calc(var(--gutter)+9vw)]">
      <div className="hero-drop">
        <div className="sway relative flex flex-col items-center">
          {/* cords running up out of frame */}
          <div className="flex h-[calc(var(--nav-h)+14px)] w-[132px] justify-between px-[10px] lg:h-[calc(var(--nav-h)+34px)] lg:w-[176px]">
            <span className="block w-px bg-gradient-to-b from-transparent via-[#b99a6e]/50 to-[#d8bf92]/80" />
            <span className="block w-px bg-gradient-to-b from-transparent via-[#b99a6e]/50 to-[#d8bf92]/80" />
          </div>
          {/* rod */}
          <span className="relative z-10 block h-[6px] w-[150px] rounded-full bg-gradient-to-b from-[#a57a45] via-[#5e3f1f] to-[#2a1b0d] lg:w-[198px]" />
          {/* cloth */}
          <div
            className="relative -mt-px w-[140px] px-[14px] pt-4 pb-[18px] lg:w-[186px] lg:px-[18px] lg:pt-[20px] lg:pb-6"
            style={{
              background:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.35 0 0 0 0 0.25 0 0 0 0 0.12 0 0 0 0.16 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\"), linear-gradient(90deg, rgba(0,0,0,0.22), rgba(0,0,0,0) 12%, rgba(255,240,200,0.08) 40%, rgba(0,0,0,0.04) 58%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.26)), radial-gradient(120% 70% at 20% 0%, #f7ecd2 0%, #e9d8b6 55%, #c9ae86 100%)",
              boxShadow: "0 14px 30px -12px rgba(0,0,0,0.7)",
            }}
          >
            <p className="font-display text-[27px] font-bold uppercase leading-[0.9] tracking-[-0.01em] lg:text-[36px]">
              <span className="block text-forest">Good</span>
              <span className="block text-forest">People</span>
              <span className="block text-ochre-card">Good</span>
              <span className="block text-ochre-card">Music</span>
              <span className="block text-brick">Good</span>
              <span className="block text-brick">Vibes</span>
            </p>
            <StripeRule className="mt-3.5 w-full lg:mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Parallax so subtle it is felt, not seen (≤ 6 %).
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate h-[100svh] max-h-[880px] min-h-[680px] overflow-hidden bg-[#040a06] md:h-[min(92svh,1000px)] md:max-h-none lg:h-[min(88svh,800px)] lg:min-h-[620px]"
    >
      {/* PLACEHOLDER PHOTO — "Biergarten at Night" (Wikimedia, CC BY-SA). Replace with an SGV event at dusk. */}
      <motion.div aria-hidden className="absolute inset-x-0 -top-[2%] bottom-[34%] md:bottom-[30%] lg:-top-[4%] lg:-bottom-[8%]" style={{ y: reduce ? 0 : y }}>
        <div className="hero-zoom absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="grade object-cover object-[70%_62%] md:object-[62%_60%] lg:object-[center_55%]"
          />
        </div>
      </motion.div>

      {/* Scrims. Desktop: horizontal for the text column + vertical for nav and crowd. Portrait: vertical only. */}
      <div
        aria-hidden
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,10,6,0.94) 0%, rgba(4,10,6,0.74) 24%, rgba(4,10,6,0.18) 50%, rgba(4,10,6,0) 62%), linear-gradient(180deg, rgba(4,10,6,0.62) 0%, rgba(4,10,6,0) 24%, rgba(4,10,6,0) 60%, rgba(4,10,6,0.66) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,10,6,0.72) 0%, rgba(4,10,6,0) 16%, rgba(4,10,6,0) 36%, rgba(4,10,6,0.78) 52%, #040a06 66%, #040a06 100%)",
        }}
      />

      <Banner />

      <div className="relative z-10 mx-auto flex h-full max-w-(--page-max) items-end px-(--gutter) pb-12 md:pb-16 lg:items-center lg:pt-(--nav-h) lg:pb-0 lg:pl-[calc(var(--gutter)+17px)]">
        <div className="max-w-[620px]">
          <h1
            id="hero-title"
            className="font-display text-[39px] font-bold uppercase leading-[0.98] tracking-[-0.005em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] min-[400px]:text-[42px] md:text-[60px] lg:text-[clamp(52px,4vw,64px)] lg:leading-[0.97]"
          >
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.04em]">
                <span className="hero-line block" style={{ animationDelay: `${180 + i * 80}ms` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <StripeRule className="hero-stripe mt-5 w-[150px] md:w-[183px] lg:mt-[18px]" />

          <p className="hero-fade mt-5 max-w-[26rem] text-[15px] leading-[1.45] text-cream/[0.92] md:max-w-[29rem] md:text-[16.5px] lg:mt-[20px]">
            Serving Good Vibes is a social entertainment company building unforgettable experiences
            through hospitality, events, media and community. We celebrate culture, connection and the
            spirit of good vibes.
          </p>

          <div className="hero-fade mt-7" style={{ animationDelay: "620ms" }}>
            <a
              href="#about"
              className="group inline-flex h-[46px] items-center gap-3 bg-ochre px-7 font-display text-[14px] font-medium uppercase tracking-[0.09em] text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-[2px] hover:bg-gold hover:text-ink hover:shadow-[0_5px_0_-1px_rgba(0,0,0,0.45)] active:translate-y-0 active:shadow-none lg:h-[44px]"
              style={{ borderRadius: 3 }}
            >
              Explore our world
              <span aria-hidden className="micro-arrow">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
