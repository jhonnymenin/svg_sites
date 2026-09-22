"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, Mail } from "lucide-react";
import { EASE } from "@sgv/brand/motion";
import { Container } from "./Container";

/** The capture band (§7.10). Client-side only for now — no backend yet. */
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
    <section
      aria-labelledby="newsletter-title"
      className="relative bg-ochre py-7 md:py-8 xl:py-[14px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(60,30,0,0.28), rgba(60,30,0,0) 18%, rgba(60,30,0,0) 82%, rgba(60,30,0,0.28))",
      }}
    >
      <Container className="flex flex-col gap-5 md:gap-6 xl:flex-row xl:items-center xl:justify-between xl:gap-10">
        <div className="flex items-start gap-4 xl:items-center xl:gap-5 xl:pl-[4%]">
          <Mail aria-hidden size={46} strokeWidth={1.1} className="-my-1 hidden shrink-0 text-parchment-hi md:block" />
          <div>
            <h2 id="newsletter-title" className="flex items-center gap-3 font-display text-[22px] font-semibold uppercase leading-none tracking-[0.02em] text-ink md:text-[20px]">
              <Mail aria-hidden size={26} strokeWidth={1.4} className="shrink-0 text-parchment-hi md:hidden" />
              Stay in the loop
            </h2>
            <p className="mt-1.5 max-w-[46ch] text-[14.5px] leading-[1.38] text-ink/[0.8] xl:max-w-[42ch] xl:text-[13.5px]">
              Be the first to know about upcoming events, new experiences and special offers.
            </p>
          </div>
        </div>

        <div className="w-full xl:w-auto xl:pr-[6%]">
          <AnimatePresence mode="wait" initial={false}>
            {state === "done" ? (
              <motion.p
                key="done"
                role="status"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="flex h-[44px] items-center gap-3 font-display text-[15px] font-medium uppercase tracking-[0.06em] text-ink xl:h-[40px] xl:w-[463px]"
              >
                <span className="flex h-7 w-7 items-center justify-center bg-forest text-parchment-hi" style={{ borderRadius: 3 }}>
                  <Check size={16} strokeWidth={2.5} />
                </span>
                You&rsquo;re on the list — see you soon.
              </motion.p>
            ) : (
              <motion.form
                key="form"
                noValidate
                onSubmit={onSubmit}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2 md:flex-row"
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
                  className="h-[46px] w-full border border-black/15 bg-parchment-hi px-4 text-[15px] text-ink placeholder:text-ink/45 focus:border-forest focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest md:flex-1 xl:h-[40px] xl:w-[343px] xl:flex-none"
                  style={{ borderRadius: 3 }}
                />
                <button
                  type="submit"
                  className="h-[46px] shrink-0 bg-forest px-7 font-display text-[14px] font-medium uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-ink xl:h-[40px] xl:w-[112px] xl:px-0"
                  style={{ borderRadius: 3 }}
                >
                  Subscribe
                </button>
              </motion.form>
            )}
          </AnimatePresence>
          {state === "error" && (
            <p id="newsletter-error" role="alert" className="mt-2 text-[13px] font-medium text-brick-deep">
              Please enter a valid email address.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
