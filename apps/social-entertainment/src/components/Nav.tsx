"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { SELogo } from "./marks";
import { EASE } from "./Reveal";

const NAV_LINKS = [
  { label: "Food + Drink", href: "#food-drink" },
  { label: "Serving Good Vibes", href: "#serving-good-vibes" },
  { label: "Now + Next", href: "#now-next" },
  { label: "Our People", href: "#our-people" },
  { label: "SC Advising", href: "#sc-advising" },
  { label: "Contact", href: "#contact" },
];

const menuList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } },
};
const menuItem = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE } },
};

export function Nav() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 120);
      if (window.scrollY < 200) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: whichever section crosses a band just under the header owns
  // the underline. Nothing is active while the hero is on screen.
  useEffect(() => {
    const els = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => !!el
    );
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={clsx(
          "dusty relative transition-[height,box-shadow] duration-300",
          compact ? "h-[56px] shadow-[0_1px_0_rgba(239,230,212,0.08)] lg:h-[62px]" : "h-(--header-h)"
        )}
      >
        {/* Logo tab — hangs below the bar like a printed shop-sign tab, folds up on scroll */}
        <a
          href="#top"
          aria-label="Social Entertainment — home"
          className={clsx(
            "dusty group absolute top-0 z-10 block rounded-b-[18px] transition-all duration-300 ease-out",
            "left-[calc(var(--edge)-12px)] px-3",
            compact ? "pt-[7px] pb-[7px]" : "pt-[7px] pb-[9px] lg:pt-[9px] lg:pb-[13px]"
          )}
        >
          <SELogo
            className={clsx(
              "transition-[width] duration-300 ease-out group-hover:opacity-90",
              compact ? "w-[60px] lg:w-[70px]" : "w-[92px] lg:w-[138px]"
            )}
          />
          {/* concave fillet where the tab meets the bar */}
          <span
            aria-hidden
            className={clsx(
              "absolute left-full top-(--header-h) hidden h-[18px] w-[18px] transition-opacity duration-200 lg:block",
              compact ? "opacity-0" : "opacity-100"
            )}
            style={{
              background:
                "radial-gradient(circle at 100% 100%, transparent 17.5px, var(--color-ink) 18px)",
            }}
          />
        </a>

        <div className="flex h-full items-center justify-end gap-8 pr-(--edge) pl-[calc(var(--edge)+120px)] lg:pl-[calc(var(--edge)+170px)]">
          <nav className="hidden items-center gap-x-7 xl:flex 2xl:gap-x-9" aria-label="Primary">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = active === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={isActive ? "true" : undefined}
                  className={clsx(
                    "group relative py-2 font-label text-[15.5px] font-medium uppercase tracking-[0.07em] transition-colors",
                    isActive ? "text-mustard" : "text-cream/90 hover:text-cream"
                  )}
                >
                  {label}
                  <span
                    className={clsx(
                      "absolute bottom-0 left-0 h-[2px] bg-mustard transition-[width] duration-200",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            className="hidden items-center bg-rust px-5 py-[10px] font-label text-[15px] font-semibold uppercase tracking-[0.08em] text-cream shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)] transition-all duration-150 hover:-translate-y-px hover:bg-rust-hi active:translate-y-0 sm:inline-flex"
            style={{ borderRadius: 2 }}
          >
            Partner With Us
          </a>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="-mr-1.5 flex h-11 w-11 items-center justify-center text-cream xl:hidden"
          >
            <Menu size={26} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduce ? 0.15 : 0.45, ease: EASE }}
            className="dusty fixed inset-0 z-50 flex flex-col px-(--gutter) pb-8 xl:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-(--header-h) items-center justify-between">
              <SELogo className="w-[64px]" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="-mr-1.5 flex h-11 w-11 items-center justify-center text-cream"
              >
                <X size={26} strokeWidth={1.75} />
              </button>
            </div>

            <motion.nav
              className="mt-6 flex flex-1 flex-col overflow-y-auto"
              variants={menuList}
              initial={reduce ? false : "hidden"}
              animate="show"
            >
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  variants={menuItem}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline justify-between border-t border-cream/15 py-3.5 last:border-b"
                >
                  <span className="font-display text-[38px] uppercase leading-none text-cream transition-colors group-active:text-mustard">
                    {label}
                  </span>
                  <span className="font-label text-[13px] font-semibold tracking-[0.1em] text-mustard">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.a>
              ))}
            </motion.nav>

            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.35, ease: EASE }}
              className="mt-6 flex w-full items-center justify-between bg-rust px-5 py-4 font-label text-[16px] font-semibold uppercase tracking-[0.1em] text-cream"
              style={{ borderRadius: 2 }}
            >
              Partner With Us <ArrowRight size={18} strokeWidth={2} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
