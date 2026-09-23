"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SgvMark } from "@sgv/brand";
import { EASE } from "@sgv/brand/motion";
import { cn } from "./cn";

export const NAV_LINKS = [
  { label: "Events", href: "#events" },
  { label: "Stays", href: "#stays" },
  { label: "Braziliana", href: "#braziliana" },
  { label: "Hospitality", href: "#hospitality" },
  { label: "Production & Media", href: "#production-media" },
  { label: "Community", href: "#community" },
  { label: "Partners", href: "#partners" },
];

const menuList = { hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } } };
const menuItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const limit = hero ? hero.offsetHeight - 90 : 500;
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

  useEffect(() => {
    const els = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => !!el
    );
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-25% 0px -70% 0px" }
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
        className={cn(
          "relative transition-[background-color,height] duration-300",
          solid ? "h-[64px] bg-night/[0.94] backdrop-blur-md" : "h-[76px] bg-transparent lg:h-(--nav-h)"
        )}
      >
        <div className="mx-auto flex h-full max-w-(--page-max) items-center justify-between gap-6 px-(--gutter)">
          <a href="#top" aria-label="Serving Good Vibes — back to top" className="shrink-0">
            <SgvMark tone="light" height={solid ? 30 : 38} />
          </a>

          <div className="flex items-center gap-6 2xl:gap-9">
            <nav aria-label="Primary" className="hidden xl:block">
              <ul className="flex items-center gap-x-6 2xl:gap-x-8">
                {NAV_LINKS.map(({ label, href }) => {
                  const isActive = active === href.slice(1);
                  return (
                    <li key={href}>
                      <a
                        href={href}
                        aria-current={isActive ? "location" : undefined}
                        className="group relative block py-2 text-[14px] font-medium text-white/85 transition-colors hover:text-white"
                      >
                        {label}
                        <span
                          aria-hidden
                          className={cn(
                            "stripes-h absolute -bottom-0.5 left-0 h-[5px] w-full origin-left transition-transform duration-300",
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
              className="hidden h-[42px] items-center rounded-full bg-gold px-5 text-[14px] font-semibold text-ink transition-colors duration-200 hover:bg-cream sm:inline-flex"
            >
              Get in touch
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
        <span
          aria-hidden
          className={cn(
            "stripes-v absolute inset-x-0 bottom-0 h-[3px] origin-left transition-transform duration-500",
            solid ? "scale-x-100" : "scale-x-0"
          )}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduce ? 0.15 : 0.45, ease: EASE }}
            className="tooth fixed inset-0 z-50 flex flex-col overflow-y-auto bg-deep-teal px-(--gutter) pb-8 xl:hidden"
          >
            <div className="flex h-[76px] shrink-0 items-center justify-between">
              <SgvMark tone="light" height={34} />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="-mr-2 flex h-11 w-11 items-center justify-center text-white"
              >
                <X size={26} strokeWidth={1.6} />
              </button>
            </div>

            <motion.ul className="mt-6 flex flex-col" variants={menuList} initial={reduce ? false : "hidden"} animate="show">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.li key={href} variants={menuItem}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 border-b border-white/15 py-3.5"
                  >
                    <span className="w-6 text-[12px] font-medium tabular-nums text-gold">0{i + 1}</span>
                    <span className="display text-[34px] text-cream sm:text-[44px]">{label}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-auto pt-10"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.35, ease: EASE }}
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-between rounded-full bg-gold px-6 py-4 text-[16px] font-semibold text-ink"
              >
                Get in touch <ArrowUpRight size={20} strokeWidth={2} />
              </a>
              <p className="mt-5 text-center text-[13px] text-cream/60">Pardon our progress. Come join the vibes.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
