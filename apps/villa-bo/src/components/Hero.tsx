"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { content } from "@/content/site";

const t = content.hero;

/**
 * Arrival. Split composition like the approved mockup — the tower at dusk
 * carries the promise, the street façade carries the address — but the
 * headline is set as a quiet column of light serif, and each line rises on
 * load via CSS (so it is visible even if JS never hydrates).
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const towerY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const facadeY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "7%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", reduce ? "0px" : "-60px"]);

  return (
    <section ref={ref} id="top" aria-labelledby="hero-title" className="relative bg-paper">
      <div className="grid lg:h-[clamp(640px,calc(100svh-var(--nav-h)),960px)] lg:grid-cols-[1.42fr_1fr] lg:gap-[6px]">
        {/* ── Tower at dusk ─────────────────────────────── */}
        <div className="relative h-[min(88svh,760px)] min-h-[560px] overflow-hidden bg-night lg:h-auto lg:min-h-0">
          <motion.div style={{ y: towerY }} className="absolute inset-[-2%_0_-14%_0]">
            <div className="hero-zoom absolute inset-0">
            {/* PLACEHOLDER — replace with Villa BO tower photographed at dusk. */}
            <Image
              src="/images/hero-tower.jpg"
              alt="A slender residential tower against a terracotta and violet dusk sky"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="grade-dusk object-cover object-[30%_60%] lg:object-[20%_62%]"
            />
            </div>
          </motion.div>
          {/* Legibility veils: warm night from the left and from below. */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(95deg, rgba(22,17,14,0.72) 0%, rgba(22,17,14,0.42) 38%, rgba(22,17,14,0) 66%), linear-gradient(0deg, rgba(22,17,14,0.78) 0%, rgba(22,17,14,0) 42%), linear-gradient(180deg, rgba(22,17,14,0.35) 0%, rgba(22,17,14,0) 22%)",
            }}
          />

          <motion.div
            style={{ y: textY }}
            className="relative z-10 flex h-full flex-col justify-between px-[var(--gutter)] pt-[clamp(36px,9vh,110px)] pb-[clamp(28px,5.5vh,64px)] text-cream lg:pb-[calc(clamp(28px,5vh,56px)+58px)]"
          >
            <h1 id="hero-title" className="display text-[clamp(60px,10vw,96px)] leading-[0.9] lg:text-[clamp(72px,7.6vw,128px)]">
              {t.headline.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                  <span
                    className={`hero-line block ${i === 3 ? "italic" : ""}`}
                    style={{ animationDelay: `${120 + i * 110}ms` }}
                  >
                    {i === 3 ? (
                      <>
                        {/* optical kern: the italic E's arm otherwise touches the x */}
                        <span className="mr-[0.045em]">{line.charAt(0)}</span>
                        {line.slice(1)}
                      </>
                    ) : (
                      line
                    )}
                  </span>
                </span>
              ))}
            </h1>

            <div className="hero-fade max-w-[440px]" style={{ animationDelay: "680ms" }}>
              <p className="balance serif text-[19px] leading-[1.45] text-cream/90 sm:text-[21px]">{t.kicker}</p>
              <a href="#booking" className="btn on-dark mt-8">
                {t.cta}
                <ArrowRight aria-hidden size={16} strokeWidth={1.25} className="arrow" />
              </a>
            </div>
          </motion.div>

          <p
            aria-hidden
            className="hero-fade label absolute bottom-[calc(clamp(28px,5vh,56px)+58px)] right-[var(--gutter)] z-10 hidden text-cream/70 md:block lg:hidden xl:block [writing-mode:vertical-rl] rotate-180"
            style={{ animationDelay: "900ms" }}
          >
            {t.coords}
          </p>
        </div>

        {/* ── Street façade ─────────────────────────────── */}
        <div className="relative hidden overflow-hidden bg-night lg:block">
          <motion.div style={{ y: facadeY }} className="absolute inset-[-2%_0_-8%_0]">
            <div className="hero-zoom absolute inset-0">
            {/* PLACEHOLDER — replace with the Villa BO building photographed from Rua Gabriel Monteiro da Silva. */}
            <Image
              src="/images/hero-building.jpg"
              alt="Contemporary residential façade with dark frames and warm-lit balconies"
              fill
              priority
              sizes="40vw"
              className="grade-facade object-cover object-[40%_50%]"
            />
            </div>
          </motion.div>
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "linear-gradient(0deg, rgba(22,17,14,0.62) 0%, rgba(22,17,14,0) 34%)" }}
          />
          <div className="hero-fade absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-6 px-10 pb-[calc(clamp(28px,5vh,56px)+58px)] text-cream" style={{ animationDelay: "820ms" }}>
            <div>
              <p className="label text-cream/65">{t.district}</p>
              <p className="serif mt-2 text-[20px] leading-tight">{t.address}</p>
            </div>
            <span aria-hidden className="mb-2 h-px w-16 bg-cream/50" />
          </div>
        </div>
      </div>

      {/* Mobile / tablet: the façade becomes an address plate under the tower. */}
      <div className="frame grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-end gap-5 pt-5 lg:hidden">
        <div className="relative aspect-[4/5] overflow-hidden bg-night">
          {/* PLACEHOLDER — Villa BO façade. */}
          <Image
            src="/images/hero-building.jpg"
            alt="Contemporary residential façade with dark frames and warm-lit balconies"
            fill
            sizes="45vw"
            className="grade-facade object-cover object-[35%_50%]"
          />
        </div>
        <div className="pb-1">
          <p className="label text-terra">{t.district}</p>
          <p className="serif mt-3 text-[22px] leading-[1.15] text-ink sm:text-[28px]">{t.address}</p>
          <p className="label mt-4 text-ink-3">{t.coords}</p>
        </div>
      </div>
    </section>
  );
}
