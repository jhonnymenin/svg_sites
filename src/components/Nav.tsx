"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { MasterLogo } from "./MasterLogo";

const NAV_LINKS = [
  { label: "Food + Drink", href: "#food-drink" },
  { label: "Serving Good Vibes", href: "#serving-good-vibes" },
  { label: "Now + Next", href: "#now-next" },
  { label: "Our People", href: "#our-people" },
  { label: "SC Advising", href: "#sc-advising" },
  { label: "Contact", href: "#" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        solid ? "bg-ink/95 border-b border-mustard/40" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-[64px] items-center justify-between lg:h-[68px]">
        <a href="#" className="shrink-0 transition-opacity hover:opacity-80">
          <MasterLogo />
        </a>

        <nav className="hidden items-center gap-x-5 xl:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="group relative font-display text-[12.5px] font-bold uppercase tracking-[0.04em] text-white"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-mustard transition-[width] duration-150 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 xl:flex">
          <span aria-hidden className="h-5 w-px bg-white/25" />
          <a
            href="#"
            className="flex items-center justify-center bg-rust px-5 py-[9px] font-display text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-all duration-150 hover:-translate-y-[1px] hover:bg-rust-deep hover:shadow-[0_4px_0_-1px_rgba(0,0,0,0.35)]"
            style={{ borderRadius: "2px" }}
          >
            Partner With Us
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
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
            transition={{ duration: reduce ? 0.15 : 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-ink px-(--gutter) pt-6 pb-8 xl:hidden"
          >
            <div className="flex items-center justify-between">
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

            <nav className="mt-10 flex flex-1 flex-col overflow-y-auto">
              {[...NAV_LINKS, { label: "Partner With Us", href: "#" }].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="border-t border-mustard/30 py-4 font-display text-[26px] font-semibold uppercase leading-none text-white last:border-b"
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
