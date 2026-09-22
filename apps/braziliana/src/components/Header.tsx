"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { SgvMark } from "@sgv/brand";
import { EASE } from "@sgv/brand/motion";
import { Wordmark } from "./Wordmark";
import { FlagRule } from "./FlagRule";
import { NAV } from "./nav";

const HOVER = ["bg-folha", "bg-urucum", "bg-anil", "bg-ouro"];

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.href.slice(1))).filter(
      (el): el is HTMLElement => !!el
    );
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.01] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return active;
}

export function Header() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ouro focus:px-4 focus:py-2 focus:text-mata-deep"
      >
        Skip to content
      </a>

      {/* ---------- Masthead (in flow) ---------- */}
      <header className="paper">
        <div className="shell pt-5 pb-0 lg:pt-7">
          <div className="flex items-start justify-between gap-6">
            <a href="#top" className="group block" aria-label="Braziliana — home">
              <Wordmark animate size="clamp(40px, 5.1vw, 74px)" />
              <span className="kicker mt-2 block text-[10px] tracking-[0.26em] text-ink/80 sm:text-[11px] lg:ml-[0.4em]">
                Culture. Community. Good Vibes.
              </span>
            </a>
            <div className="hidden pt-3 sm:block">
              <span className="hidden lg:block">
                <SgvMark height={62} eyebrow="Part of" />
              </span>
              <span className="block lg:hidden">
                <SgvMark height={44} eyebrow="Part of" />
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-3 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] bg-mata text-paper sm:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={20} strokeWidth={2.2} />
            </button>
          </div>

          <nav aria-label="Primary" className="mt-6 hidden lg:block">
            <ul className="flex items-stretch justify-between gap-2 xl:gap-4">
              {NAV.map((n, i) => (
                <li key={n.href} className="flex-1 text-center">
                  <a
                    href={n.href}
                    className="group relative inline-flex min-h-[48px] max-w-[9.5rem] items-center justify-center px-1 pb-3 font-body text-[13px] font-bold uppercase leading-[1.15] tracking-[0.06em] text-ink transition-colors hover:text-mata xl:text-[14px]"
                  >
                    {n.label}
                    <span
                      aria-hidden
                      className={clsx(
                        "absolute inset-x-3 bottom-1 h-[3px] origin-left transition-transform duration-300",
                        HOVER[i % 4],
                        active === n.href.slice(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* tablet: single scrolling row */}
          <nav aria-label="Primary" className="-mx-[var(--gutter)] mt-5 hidden sm:block lg:hidden">
            <ul className="snap-x-strip flex gap-6 overflow-x-auto px-[var(--gutter)] pb-3">
              {NAV.map((n) => (
                <li key={n.href} className="shrink-0">
                  <a href={n.href} className="font-body text-[13px] font-bold uppercase tracking-[0.08em] text-ink">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-4 flex items-center justify-between gap-4 sm:hidden">
            <SgvMark height={32} eyebrow="Part of" />
            <a href="#join" className="btn min-h-[40px] bg-urucum px-4 text-[11px] text-paper">
              Join
            </a>
          </div>
        </div>
        <FlagRule className="mt-4 lg:mt-1" />
      </header>

      {/* ---------- Compact bar (fixed, after scroll) ---------- */}
      <AnimatePresence>
        {compact && !open ? (
          <motion.div
            initial={reduce ? false : { y: -72 }}
            animate={{ y: 0 }}
            exit={reduce ? undefined : { y: -72 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="grain fixed inset-x-0 top-0 z-50 bg-mata text-paper shadow-[0_1px_0_rgba(0,0,0,.3)]"
          >
            <div className="shell flex h-[60px] items-center justify-between gap-4">
              <a href="#top" aria-label="Braziliana — back to top" className="shrink-0">
                <Wordmark size={24} accents={false} onDark shadow="rgba(0,0,0,.55)" />
              </a>
              <nav aria-label="Sections" className="hidden xl:block">
                <ul className="flex gap-5">
                  {NAV.map((n) => (
                    <li key={n.href}>
                      <a
                        href={n.href}
                        className={clsx(
                          "font-body text-[12px] font-bold uppercase tracking-[0.1em] transition-colors hover:text-ouro",
                          active === n.href.slice(1) ? "text-ouro" : "text-paper/80"
                        )}
                      >
                        {n.short}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center gap-3">
                <a href="#join" className="btn min-h-[38px] bg-urucum px-4 text-[11px] text-paper hover:bg-urucum-deep">
                  Join Braziliana
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex h-10 w-10 items-center justify-center text-paper xl:hidden"
                  aria-label="Open menu"
                >
                  <Menu size={22} />
                </button>
              </div>
            </div>
            <FlagRule thin />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* ---------- Full-screen menu ---------- */}
      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={reduce ? undefined : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="grain fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-mata text-paper"
          >
            <div className="shell flex items-center justify-between pt-5">
              <Wordmark size={30} onDark shadow="rgba(0,0,0,.55)" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] bg-paper text-mata"
                aria-label="Close menu"
                autoFocus
              >
                <X size={20} strokeWidth={2.4} />
              </button>
            </div>
            <nav aria-label="Menu" className="shell mt-8 flex-1">
              <ul className="border-t border-paper/15">
                {NAV.map((n, i) => (
                  <motion.li
                    key={n.href}
                    initial={reduce ? false : { y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.04, ease: EASE }}
                    className="border-b border-paper/15"
                  >
                    <a
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between gap-4 py-3 font-display text-[clamp(26px,7.2vw,44px)] uppercase leading-none"
                    >
                      <span>{n.label}</span>
                      <span className="font-body text-[11px] font-bold tracking-[0.2em] text-ouro">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="shell flex items-end justify-between gap-4 py-8">
              <SgvMark tone="light" height={40} eyebrow="Part of" />
              <a href="#join" onClick={() => setOpen(false)} className="btn bg-urucum text-paper">
                Join Braziliana
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
