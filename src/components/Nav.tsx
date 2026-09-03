"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { StripeRule } from "./StripeRule";

const NAV_LINKS = [
  "Events",
  "Stays",
  "Brasiliana",
  "Hospitality",
  "Production & Media",
  "Community & Development",
  "About Us",
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
      className={`absolute inset-x-0 top-0 z-50 transition-colors duration-200 ${
        solid ? "bg-forest/95 border-b border-gold/40" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-14 items-center justify-between lg:h-16">
        <a href="#" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="group relative font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-white"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold transition-[width] duration-150 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="hidden shrink-0 items-center justify-center rounded-[2px] border border-white/55 px-6 py-[10px] font-display text-[13px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:border-white hover:bg-white/10 lg:flex"
        >
          Get in Touch
        </a>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center text-white lg:hidden"
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
            className="fixed inset-0 z-50 flex flex-col bg-forest px-(--gutter) pt-6 pb-8 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo />
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
              {[...NAV_LINKS, "Get in Touch"].map((label, i) => (
                <a
                  key={label}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="border-t border-gold/30 py-4 font-display text-[28px] font-semibold uppercase leading-none text-white last:border-b"
                  style={{ transitionDelay: `${i * 20}ms` }}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="mt-8 flex flex-col items-start gap-6">
              <a
                href="#"
                className="w-full bg-ochre py-4 text-center font-display text-[13px] font-semibold uppercase tracking-[0.06em] text-white"
              >
                Explore Our World
              </a>
              <StripeRule width={130} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
