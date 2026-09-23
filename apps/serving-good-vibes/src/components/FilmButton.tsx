"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Play, X } from "lucide-react";
import { EASE } from "@sgv/brand/motion";
import { cn } from "./cn";

/**
 * "Watch the film" — opens the 2026 launch film in a full-screen player
 * with sound and native controls. Esc / backdrop / close button dismiss it.
 */
export function FilmButton({
  className,
  variant = "hero",
  children,
}: {
  className?: string;
  variant?: "hero" | "plain";
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const trigger = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    close.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab") {
        // two focusables: close + video — keep focus inside
        const els = [close.current, video.current].filter(Boolean) as HTMLElement[];
        const i = els.indexOf(document.activeElement as HTMLElement);
        e.preventDefault();
        els[(i + (e.shiftKey ? -1 : 1) + els.length) % els.length]?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    const t = trigger.current;
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      t?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group inline-flex items-center gap-3 text-left",
          variant === "hero" && "text-white",
          className
        )}
      >
        <span className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-white/50 transition-[background-color,border-color,transform] duration-300 group-hover:scale-105 group-hover:border-gold group-hover:bg-gold">
          <Play size={18} className="translate-x-[1px] fill-current transition-colors group-hover:text-ink" strokeWidth={0} />
        </span>
        {children ?? (
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold">Watch the film</span>
            <span className="block text-[12.5px] text-white/60">2 min · sound on</span>
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Serving Good Vibes — the film"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-night/95 p-4 backdrop-blur-sm md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <button
              ref={close}
              type="button"
              aria-label="Close film"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-ink md:top-6 md:right-6"
            >
              <X size={22} />
            </button>
            <motion.div
              className="w-full max-w-[1280px]"
              initial={reduce ? false : { y: 24, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="stripe-edge mb-3 w-[120px]" aria-hidden />
              <video
                ref={video}
                src="/video/sgv-film-720.mp4"
                poster="/video/sgv-film-poster.jpg"
                preload="none"
                controls
                autoPlay
                playsInline
                className="aspect-video w-full bg-black"
              />
              <p className="mt-3 text-[13px] text-cream/60">
                Serving Good Vibes — Fall/Winter 2026. “The vibes are just getting started.”
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
