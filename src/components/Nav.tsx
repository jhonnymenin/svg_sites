"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { Container } from "./Container";
import { MasterLogo } from "./MasterLogo";
import { EASE } from "./Reveal";

const NAV_LINKS = [
  { label: "Food + Drink", href: "#food-drink" },
  { label: "Serving Good Vibes", href: "#serving-good-vibes" },
  { label: "Now + Next", href: "#now-next" },
  { label: "Our People", href: "#our-people" },
  { label: "SC Advising", href: "#sc-advising" },
  { label: "Contact", href: "#" },
];

const menuList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } },
};
const menuItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE } },
};

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: whichever section crosses a band near the top of the viewport
  // (just under the header) owns the underline, so a section you just
  // navigated to is the one highlighted. Nothing is active while the hero is on screen.
  useEffect(() => {
    const els = NAV_LINKS.map((l) => l.href.slice(1))
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
        else if (window.scrollY < 300) setActive("");
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: [0, 0.01] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        solid ? "border-mustard/40 bg-ink/95" : "border-transparent"
      )}
    >
      <Container
        className={clsx(
          "flex items-center justify-between transition-[height] duration-300",
          solid ? "h-[58px]" : "h-[64px] lg:h-[68px]"
        )}
      >
        <a href="#" className="shrink-0 transition-opacity hover:opacity-80">
          <MasterLogo />
        </a>

        <nav className="hidden items-center gap-x-5 xl:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = href !== "#" && active === href.slice(1);
            return (
              <a
                key={label}
                href={href}
                aria-current={isActive ? "true" : undefined}
                className="group relative font-display text-[12.5px] font-bold uppercase tracking-[0.04em] text-white"
              >
                {label}
                <span
                  className={clsx(
                    "absolute -bottom-1 left-0 h-[2px] bg-mustard transition-[width] duration-200",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 xl:flex">
          <span aria-hidden className="h-5 w-px bg-white/25" />
          <a
            href="#"
            className="flex items-center justify-center bg-rust px-5 py-[9px] font-display text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-all duration-150 hover:-translate-y-[1px] hover:bg-rust-deep hover:shadow-[0_4px_0_-1px_rgba(0,0,0,0.35)] active:translate-y-0 active:shadow-none"
            style={{ borderRadius: "2px" }}
          >
            Partner With Us
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center text-white xl:hidden"
        >
          <Menu size={26} strokeWidth={1.75} />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { y: "-100%" }}
            animate={reduce ? { opacity: 1 } : { y: 0 }}
            exit={reduce ? { opacity: 0 } : { y: "-100%" }}
            transition={{ duration: reduce ? 0.15 : 0.32, ease: EASE }}
            className="fixed inset-0 z-50 flex flex-col bg-ink px-(--gutter) pt-5 pb-8 xl:hidden"
          >
            <div className="flex h-[54px] items-center justify-between">
              <MasterLogo />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center text-white"
              >
                <X size={26} strokeWidth={1.75} />
              </button>
            </div>

            <motion.nav
              className="mt-8 flex flex-1 flex-col overflow-y-auto"
              variants={menuList}
              initial={reduce ? false : "hidden"}
              animate="show"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  variants={menuItem}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-t border-mustard/30 py-4 font-display text-[26px] font-semibold uppercase leading-none text-white last:border-b"
                >
                  {label}
                  <span aria-hidden className="text-[16px] text-mustard">
                    →
                  </span>
                </motion.a>
              ))}
            </motion.nav>

            <motion.a
              href="#"
              onClick={() => setOpen(false)}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.35, ease: EASE }}
              className="mt-6 flex w-full items-center justify-center bg-rust py-4 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-white"
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Partner With Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
