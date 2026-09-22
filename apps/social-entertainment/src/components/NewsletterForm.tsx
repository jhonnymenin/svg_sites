"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE } from "./Reveal";

/**
 * Email capture UI. No backend is wired yet — submit is handled client-side
 * so the interaction is complete; connect `onSubmit` to the real list
 * provider when it exists.
 */
export function NewsletterForm() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="relative w-full max-w-md md:w-auto">
      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.p
            key="done"
            role="status"
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="flex h-[42px] items-center gap-2 font-display text-[14px] font-bold uppercase tracking-[0.04em] text-ink"
          >
            <span aria-hidden className="flex h-5 w-5 items-center justify-center bg-ink text-[11px] text-mustard">
              ✓
            </span>
            You&apos;re on the list.
          </motion.p>
        ) : (
          <motion.form
            key="form"
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex items-stretch gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              autoComplete="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 border border-ink/20 bg-cream px-4 py-[10px] text-[14px] text-ink placeholder:text-ink/45 transition-shadow focus:outline-none focus:ring-2 focus:ring-ink/40"
              style={{ borderRadius: "var(--radius-control)" }}
            />
            <button
              type="submit"
              className="shrink-0 bg-ink px-6 py-[10px] font-display text-[13px] font-bold uppercase tracking-[0.06em] text-cream transition-all duration-150 hover:-translate-y-[1px] hover:bg-black hover:shadow-[0_4px_0_-1px_rgba(0,0,0,0.5)] active:translate-y-0 active:shadow-none"
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Subscribe
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
