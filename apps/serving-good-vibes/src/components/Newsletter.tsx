"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import { EASE } from "@sgv/brand/motion";

/** Newsletter capture. Client-side only for now — no email platform connected yet. */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");
  const reduce = useReducedMotion();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setState("error");
      return;
    }
    // TODO: connect to the client's email platform.
    setState("done");
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-20">
      <div>
        <p className="eyebrow text-gold">Stay in the loop</p>
        <h2 id="newsletter-title" className="display mt-4 text-[clamp(44px,6.4vw,104px)] text-paper-hi">
          The vibes are just <span className="display-italic text-gold">getting started.</span>
        </h2>
      </div>
      <div>
        <p className="max-w-[28rem] text-[16px] leading-[1.55] text-cream/75">
          Be the first to know about upcoming events, new experiences and special offers. So much more coming in 2027.
        </p>
        <div className="mt-6 min-h-[60px]">
          <AnimatePresence mode="wait" initial={false}>
            {state === "done" ? (
              <motion.p
                key="done"
                role="status"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="flex h-[60px] items-center gap-3 text-[16px] font-medium text-paper-hi"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-ink">
                  <Check size={17} strokeWidth={2.6} />
                </span>
                You’re on the list — see you at the next one.
              </motion.p>
            ) : (
              <motion.form
                key="form"
                noValidate
                onSubmit={onSubmit}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2 rounded-[32px] sm:flex-row sm:rounded-full sm:border sm:border-white/25 sm:p-1.5 sm:focus-within:border-gold"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Your email address"
                  value={email}
                  aria-invalid={state === "error"}
                  aria-describedby={state === "error" ? "newsletter-error" : undefined}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (state === "error") setState("idle");
                  }}
                  className="h-[52px] w-full rounded-full border border-white/25 bg-transparent px-5 text-[16px] text-paper-hi placeholder:text-cream/45 focus:outline-none sm:h-[48px] sm:flex-1 sm:border-0"
                />
                <button
                  type="submit"
                  className="h-[52px] shrink-0 rounded-full bg-gold px-7 text-[15px] font-semibold text-ink transition-colors hover:bg-paper-hi sm:h-[48px]"
                >
                  Subscribe
                </button>
              </motion.form>
            )}
          </AnimatePresence>
          {state === "error" && (
            <p id="newsletter-error" role="alert" className="mt-2 pl-5 text-[14px] font-medium text-gold">
              Please enter a valid email address.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
