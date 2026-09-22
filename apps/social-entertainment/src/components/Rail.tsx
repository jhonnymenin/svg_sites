"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EASE } from "./Reveal";

/**
 * Editorial rail: an intro column on the left, a horizontal card strip that
 * bleeds off the right edge of the page. On touch it's a native swipe with
 * snap; on pointer devices round arrow buttons page through it.
 */
export function Rail({
  intro,
  label,
  children,
}: {
  intro: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  const page = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-rail-card]");
    const step = card ? card.offsetWidth + 16 : 240;
    const n = Math.max(1, Math.floor((el.clientWidth - 80) / step));
    el.scrollBy({ left: dir * step * n, behavior: "smooth" });
  };

  const arrow =
    "absolute top-[calc(var(--rail-media-h)/2)] z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink shadow-[0_6px_20px_rgba(0,0,0,0.45)] transition-all duration-200 hover:scale-105 hover:bg-mustard md:flex disabled:pointer-events-none disabled:scale-75 disabled:opacity-0";

  return (
    <div className="lg:grid lg:grid-cols-[minmax(250px,22%)_minmax(0,1fr)] lg:items-start">
      <div className="px-(--gutter) lg:pr-10 lg:pl-(--edge)">{intro}</div>

      <div className="relative mt-8 min-w-0 lg:mt-1">
        <div
          ref={scrollerRef}
          role="region"
          aria-label={label}
          tabIndex={0}
          className="rail flex snap-x snap-mandatory gap-3.5 overflow-x-auto scroll-pl-(--gutter) px-(--gutter) pb-2 outline-none md:gap-4 lg:scroll-pl-0 lg:pl-0"
        >
          {children}
          <div className="w-px shrink-0" aria-hidden />
        </div>
        {/* soft fade into the page edge so the strip reads as continuing */}
        <div
          aria-hidden
          className={clsx(
            "pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-ink to-transparent transition-opacity duration-300 md:block",
            atEnd && "opacity-0"
          )}
        />
        <button type="button" aria-label="Previous" onClick={() => page(-1)} disabled={atStart} className={clsx(arrow, "left-3 lg:-left-6")}>
          <ChevronLeft size={22} strokeWidth={2} />
        </button>
        <button type="button" aria-label="Next" onClick={() => page(1)} disabled={atEnd} className={clsx(arrow, "right-[max(16px,calc(var(--edge)-24px))]")}>
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

/** A rail card: rises into place in sequence as it enters the viewport. */
export function RailCard({
  href,
  index,
  className,
  children,
}: {
  href: string;
  index: number;
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={href}
      data-rail-card
      className={clsx("group block shrink-0 snap-start outline-offset-4", className)}
      // same initial on server and client (no hydration mismatch); reduced motion just snaps
      initial={{ y: 22, opacity: 0.35 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : Math.min(index, 6) * 0.07, ease: EASE }}
    >
      {children}
    </motion.a>
  );
}

/** Intro column shared by the black rails. */
export function RailIntro({
  title,
  body,
  cta,
  titleClass,
  ctaClass,
}: {
  title: React.ReactNode;
  body: string;
  cta: string;
  titleClass: string;
  ctaClass: string;
}) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-start lg:justify-start">
      <div>
        <h2 className={clsx("worn font-display uppercase leading-[0.92] tracking-[0.005em]", titleClass)}>{title}</h2>
        <p className="mt-4 max-w-[22rem] text-[16px] leading-[1.5] text-cream/80 lg:max-w-[15.5rem]">{body}</p>
      </div>
      <a
        href="#"
        className={clsx(
          "group inline-flex shrink-0 items-center justify-between gap-6 px-5 py-[13px] font-label text-[15px] font-semibold uppercase tracking-[0.09em] transition-all duration-150 hover:-translate-y-px lg:mt-3",
          ctaClass
        )}
        style={{ borderRadius: 2 }}
      >
        {cta}
        <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </a>
    </div>
  );
}
