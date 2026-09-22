"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { SgvMark } from "@sgv/brand";
import { EASE } from "@sgv/brand/motion";
import { StripeRule } from "./StripeRule";

export const NAV_LINKS = [
  { label: "Events", href: "#events" },
  { label: "Stays", href: "#stays" },
  { label: "Braziliana", href: "#braziliana" },
  { label: "Hospitality", href: "#hospitality" },
  { label: "Production & Media", href: "#production-media" },
  { label: "Community & Development", href: "#community" },
  { label: "About Us", href: "#about" },
];

/** Logo + the parent-company relationship, set as a small stacked descriptor (§7.2). */
function Lockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3.5 lg:gap-4">
      <SgvMark
        tone="light"
        height={compact ? 38 : 46}
        style={{ transition: "all 300ms" }}
      />
      <span
        className={clsx(
          "flex items-center gap-2.5 transition-opacity duration-300",
          compact && "lg:opacity-0"
        )}
      >
        <span aria-hidden className="block h-[26px] w-px bg-white/25" />
        <span className="font-display text-[9px] font-medium uppercase leading-[1.3] tracking-[0.16em] text-white/60 lg:text-[9.5px]">
          A Social
          <br />
          Entertainment
          <br />
          Company
        </span>
      </span>
    </span>
  );
}

const menuList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
};
const menuItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const reduce = useReducedMotion();

  // Transparent over the hero; solidifies to forest once the hero has passed.
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const limit = hero ? hero.offsetHeight - 80 : 500;
      setSolid(window.scrollY > limit);
      if (window.scrollY < limit) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Scroll spy — the section under the header owns the gold underline.
  useEffect(() => {
    const els = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => !!el
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -75% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={clsx(
          "relative transition-[background-color,height,box-shadow] duration-[220ms]",
          solid
            ? "h-[62px] bg-forest/[0.96] shadow-[0_1px_0_color-mix(in_srgb,var(--gold)_55%,transparent)] backdrop-blur-[2px]"
            : "h-[72px] bg-transparent lg:h-(--nav-h)"
        )}
      >
        <div className="mx-auto flex h-full max-w-(--page-max) items-center justify-between gap-6 px-(--gutter)">
          <a href="#top" aria-label="Serving Good Vibes — back to top" className="shrink-0">
            <Lockup compact={solid} />
          </a>

          <div className="flex items-center gap-7 2xl:gap-9">
            <nav aria-label="Primary" className="hidden xl:block">
              <ul className="flex items-center gap-x-[26px] 2xl:gap-x-9">
                {NAV_LINKS.map(({ label, href }) => {
                  const isActive = active === href.slice(1);
                  return (
                    <li key={href}>
                      <a
                        href={href}
                        aria-current={isActive ? "location" : undefined}
                        className="group relative block py-2 font-display text-[13.5px] font-medium uppercase tracking-[0.06em] text-white"
                      >
                        {label}
                        <span
                          aria-hidden
                          className={clsx(
                            "absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gold transition-transform duration-[160ms]",
                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                          )}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <a
              href="#contact"
              className="hidden h-[40px] items-center border border-white/55 px-5 font-display text-[13px] font-medium uppercase tracking-[0.07em] text-white transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-ink sm:inline-flex"
              style={{ borderRadius: 2 }}
            >
              Get in Touch
            </a>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen(true)}
              className="-mr-2 flex h-11 w-11 items-center justify-center text-white xl:hidden"
            >
              <Menu size={26} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={reduce ? { opacity: 0 } : { y: "-100%" }}
            animate={reduce ? { opacity: 1 } : { y: 0 }}
            exit={reduce ? { opacity: 0 } : { y: "-100%" }}
            transition={{ duration: reduce ? 0.15 : 0.3, ease: EASE }}
            className="ink-tooth fixed inset-0 z-50 flex flex-col overflow-y-auto bg-forest px-(--gutter) pb-8 xl:hidden"
          >
            <div className="flex h-[72px] shrink-0 items-center justify-between">
              <Lockup />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="-mr-2 flex h-11 w-11 items-center justify-center text-white"
              >
                <X size={26} strokeWidth={1.6} />
              </button>
            </div>

            <motion.ul
              className="mt-8 flex flex-col"
              variants={menuList}
              initial={reduce ? false : "hidden"}
              animate="show"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <motion.li key={href} variants={menuItem} className="border-t border-gold/40 last:border-b">
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between py-[13px] font-display text-[26px] font-semibold uppercase leading-[1.05] text-cream sm:text-[30px]"
                  >
                    {label}
                    <span aria-hidden className="micro-arrow text-[18px] text-gold">
                      →
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-auto pt-10"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.35, ease: EASE }}
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-between bg-ochre px-5 py-4 font-display text-[15px] font-medium uppercase tracking-[0.1em] text-white"
                style={{ borderRadius: 3 }}
              >
                Get in Touch <ArrowRight size={18} strokeWidth={2} />
              </a>
              <StripeRule className="mt-5 w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
