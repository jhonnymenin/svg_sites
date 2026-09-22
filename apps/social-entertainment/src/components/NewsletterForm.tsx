"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { EASE } from "./Reveal";

/**
 * Email capture. No backend is wired yet — submit is handled client-side so
 * the interaction is complete; connect `onSubmit` to the list provider.
 */
export function NewsletterForm() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="relative mt-5 min-h-[50px]">
      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.p
            key="done"
            role="status"
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="flex h-[50px] items-center gap-3 font-label text-[17px] font-semibold uppercase tracking-[0.06em] text-cream"
          >
            <span aria-hidden className="flex h-7 w-7 items-center justify-center rounded-full bg-cream text-rust">
              <Check size={16} strokeWidth={3} />
            </span>
            You&apos;re on the list.
          </motion.p>
        ) : (
          <motion.form
            key="form"
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="group/f flex h-[50px] items-stretch bg-cream shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)] focus-within:ring-2 focus-within:ring-mustard"
            style={{ borderRadius: 2 }}
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
              placeholder="Enter your email"
              className="min-w-0 flex-1 bg-transparent px-4 text-[15px] text-ink placeholder:text-ink/50 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex w-[54px] shrink-0 items-center justify-center text-ink transition-colors duration-150 hover:bg-ink hover:text-cream"
            >
              <ArrowRight size={20} strokeWidth={2} />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
