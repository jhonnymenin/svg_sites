"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SgvMark } from "@sgv/brand";
import { EASE } from "@sgv/brand/motion";
import { content } from "@/content/site";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: the section occupying the band just under the nav wins.
  useEffect(() => {
    const ids = content.nav.map((n) => n.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-terra focus:px-4 focus:py-3 focus:text-cream label"
      >
        {content.skip}
      </a>
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow,height] duration-500 ${
          scrolled ? "bg-paper/92 backdrop-blur-md shadow-[0_1px_0_var(--rule)]" : "bg-paper"
        }`}
      >
        <div
          className={`frame flex items-center justify-between gap-6 transition-[height] duration-500 ${
            scrolled ? "h-[68px]" : "h-[var(--nav-h)]"
          }`}
        >
          <a href="#top" aria-label="Villa BO — back to top" className="shrink-0">
            <Logo size="md" />
          </a>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-[clamp(14px,1.6vw,30px)]">
              {content.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "true" : undefined}
                    className={`link-underline text-[10.5px] font-medium uppercase tracking-[0.16em] whitespace-nowrap transition-colors duration-300 ${
                      active === item.id ? "text-terra" : "text-ink hover:text-terra"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <span className="hidden sm:block">
              <SgvMark eyebrow={content.brand.poweredBy} height={30} tone="dark" />
            </span>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="xl:hidden flex items-center gap-3 py-3 pl-3 text-ink"
            >
              <span className="label-lg">{content.navMenu}</span>
              <span aria-hidden className="flex w-6 flex-col gap-[5px]">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-2/3 self-end bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[60] flex flex-col bg-paper grain"
            initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduce ? 0.2 : 0.7, ease: EASE }}
          >
            <div className="frame flex h-[var(--nav-h)] items-center justify-between">
              <Logo size="md" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-3 pl-3 text-ink"
                autoFocus
              >
                <span className="label-lg">{content.navClose}</span>
                <span aria-hidden className="relative block h-5 w-5">
                  <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
                </span>
              </button>
            </div>
            <nav aria-label="Mobile" className="frame flex-1 overflow-y-auto pt-6 pb-10">
              <ol className="border-t hairline">
                {content.nav.map((item, i) => (
                  <motion.li
                    key={item.id}
                    className="border-b hairline"
                    initial={reduce ? false : { y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: reduce ? 0 : 0.18 + i * 0.045, duration: 0.6, ease: EASE }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-5 py-4 text-ink"
                    >
                      <span className="label w-6 text-terra">{String(i + 1).padStart(2, "0")}</span>
                      <span className="display text-[clamp(30px,8vw,48px)] leading-none">{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ol>
              <div className="mt-10 flex items-end justify-between gap-6">
                <a href="#booking" onClick={() => setOpen(false)} className="btn">
                  {content.hero.cta}
                </a>
                <SgvMark eyebrow={content.brand.poweredBy} height={30} tone="dark" />
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
