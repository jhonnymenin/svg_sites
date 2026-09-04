"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "./Container";
import { EASE, Reveal } from "./Reveal";
import { SectionEyebrow } from "./SectionEyebrow";

export function Rail({
  title,
  index,
  cta,
  tone = "light",
  children,
}: {
  title: string;
  index: number;
  cta?: { label: string; href: string };
  tone?: "light" | "dark";
  children: React.ReactNode;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Track scroll extremes so the arrows read as real controls, not decoration.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setAtStart(el.scrollLeft <= 2);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
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

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-rail-card]");
    const step = card ? card.offsetWidth + 14 : 320;
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" });
  };

  const titleColor = tone === "light" ? "text-ink" : "text-white";
  const arrow = clsx(
    "flex h-8 w-8 items-center justify-center border transition-all duration-150 disabled:pointer-events-none disabled:opacity-25",
    tone === "light"
      ? "border-ink/25 text-ink hover:bg-ink hover:text-cream"
      : "border-white/30 text-white hover:bg-white hover:text-ink"
  );

  return (
    <div>
      <Reveal>
        <Container className="flex items-end justify-between gap-6">
          <div>
            <SectionEyebrow index={index} tone={tone} className="mb-2" />
            <h2 className={clsx("font-display text-[28px] font-bold uppercase leading-none sm:text-[32px] md:text-[36px]", titleColor)}>
              {title}
            </h2>
          </div>
          <div className="hidden shrink-0 items-center gap-4 sm:flex">
            {cta && (
              <a
                href={cta.href}
                className={clsx(
                  "group inline-flex items-center gap-2 font-display text-[12.5px] font-bold uppercase tracking-[0.06em]",
                  titleColor
                )}
              >
                {cta.label}
                <span aria-hidden className="transition-transform duration-150 group-hover:translate-x-1">
                  →
                </span>
              </a>
            )}
            <div className="flex items-center gap-2">
              <button type="button" aria-label="Scroll left" onClick={() => scrollBy(-1)} disabled={atStart} className={arrow}>
                <ChevronLeft size={16} strokeWidth={2.25} />
              </button>
              <button type="button" aria-label="Scroll right" onClick={() => scrollBy(1)} disabled={atEnd} className={arrow}>
                <ChevronRight size={16} strokeWidth={2.25} />
              </button>
            </div>
          </div>
        </Container>
      </Reveal>

      <div
        ref={scrollerRef}
        className="rail mt-5 flex gap-3.5 overflow-x-auto scroll-px-(--gutter) px-(--gutter) pb-1 [scroll-snap-type:x_mandatory] md:mt-6 md:gap-4"
      >
        {children}
        {/* trailing spacer so the last card can snap fully into view */}
        <div className="w-px shrink-0" aria-hidden />
      </div>

      {cta && (
        <Container className="mt-4 sm:hidden">
          <a href={cta.href} className={clsx("inline-flex items-center gap-2 font-display text-[12.5px] font-bold uppercase tracking-[0.06em]", titleColor)}>
            {cta.label} <span aria-hidden>→</span>
          </a>
        </Container>
      )}
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
      className={clsx("group block shrink-0 [scroll-snap-align:start]", className)}
      initial={reduce ? false : { y: 18, opacity: 0.4 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: reduce ? 0 : 0.5, delay: Math.min(index, 6) * 0.07, ease: EASE }}
    >
      {children}
    </motion.a>
  );
}
