"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SgvMark } from "@sgv/brand";
import { EASE } from "@sgv/brand/motion";
import { Logo } from "./Logo";
import { Fleur } from "./Fleur";
import { NAV, toRoman } from "./navData";



export function Nav() {
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: the section crossing the upper third of the viewport is "here".
  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-ivory/95 backdrop-blur-[2px] transition-[box-shadow] duration-500 ${
        compact ? "shadow-[0_1px_0_rgb(164_125_59/0.35)]" : ""
      }`}
    >
      <div
        className={`frame flex items-center justify-between gap-6 transition-[height] duration-500 ease-[var(--ease-salon)] ${
          compact ? "h-[64px] lg:h-[72px]" : "h-[76px] lg:h-[104px]"
        }`}
      >
        <a href="#top" aria-label="Chez La Fête — back to top" className="shrink-0">
          <Logo size={compact ? "sm" : "md"} />
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-9">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "location" : undefined}
                  className="group relative block py-2 font-sans text-[11.5px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold"
                >
                  {n.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 -bottom-0.5 mx-auto h-px bg-gold transition-all duration-500 ${
                      active === n.id ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 xl:block">
          <SgvMark eyebrow="Part of" height={compact ? 30 : 36} />
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 items-center gap-3 xl:hidden"
        >
          <span className="label text-[10.5px]">Menu</span>
          <span aria-hidden className="flex w-6 flex-col gap-[6px]">
            <span className="h-px w-full bg-ink" />
            <span className="h-px w-2/3 self-end bg-ink" />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="paper fixed inset-0 z-[60] flex flex-col"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="frame flex h-[76px] items-center justify-between">
              <Logo size="md" />
              <button type="button" onClick={() => setOpen(false)} className="flex h-11 items-center gap-3">
                <span className="label text-[10.5px]">Close</span>
                <span aria-hidden className="relative block h-5 w-5">
                  <span className="absolute top-1/2 left-0 h-px w-full rotate-45 bg-ink" />
                  <span className="absolute top-1/2 left-0 h-px w-full -rotate-45 bg-ink" />
                </span>
              </button>
            </div>
            <nav aria-label="Mobile" className="frame flex flex-1 flex-col justify-center pb-10">
              <ol>
                {NAV.map((n, i) => (
                  <motion.li
                    key={n.id}
                    initial={reduce ? false : { y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.08 + i * 0.05, ease: EASE }}
                    className="border-b border-gold/30 first:border-t"
                  >
                    <a
                      href={`#${n.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-5 py-4"
                    >
                      <span className="italic-serif w-6 text-[17px] text-gold">{toRoman(i + 1)}</span>
                      <span className="display text-[34px] sm:text-[44px]">{n.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ol>
              <div className="mt-10 flex items-end justify-between">
                <div className="flex flex-col gap-1 text-[13px] text-ink-soft">
                  <span>811 Lafayette Street</span>
                  <span>(337) 123-4567</span>
                </div>
                <SgvMark eyebrow="Part of" height={32} />
              </div>
              <Fleur className="mx-auto mt-10 h-6 w-auto text-gold" />
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
