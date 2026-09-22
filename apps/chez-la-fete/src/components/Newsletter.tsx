"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@sgv/brand/motion";
import { Fleur } from "./Fleur";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Please enter a valid email address.");
    setError(null);
    setDone(true);
  }

  return (
    <section aria-labelledby="news-title" className="on-dark relative isolate overflow-hidden bg-night text-ivory">
      <div className="absolute inset-y-0 left-0 -z-10 w-full lg:w-[34%]">
        {/* PLACEHOLDER — stock candlelit bar; replace with an evening detail of the house. */}
        <Image src="/images/stay-bar.jpg" alt="" fill sizes="(min-width:1024px) 46vw, 100vw" className="grade-night object-cover opacity-45 lg:opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgb(18_15_11/0.2)_50%,var(--night)_100%)] max-lg:bg-night/40" />
      </div>
      <div className="frame grid gap-10 py-20 lg:grid-cols-12 lg:items-end lg:py-24">
        <div className="lg:col-span-4 lg:col-start-5">
          <Fleur className="h-6 w-auto text-gold-bright" />
          <h2 id="news-title" className="display mt-6 text-[clamp(38px,3.8vw,54px)]">
            Stay in the Know
          </h2>
          <p className="mt-5 max-w-[40ch] font-display text-[21px] leading-[1.4] text-ivory/80">
            Be the first to know about special offers, exclusive events, and news from Chez La Fête.
          </p>
        </div>
        <div className="lg:col-span-3 lg:col-start-10">
          <AnimatePresence mode="wait" initial={false}>
            {done ? (
              <motion.p
                key="ok"
                role="status"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="border-b border-gold/60 pb-4 font-display text-[24px] leading-snug"
              >
                <span className="italic-serif">À bientôt.</span> You’re on the list.
              </motion.p>
            ) : (
              <motion.form key="f" onSubmit={submit} noValidate exit={{ opacity: 0 }} className="flex flex-col gap-5">
                <label className="block">
                  <span className="label text-[10px] text-ivory/65">Email</span>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="field mt-1"
                    aria-invalid={!!error}
                  />
                </label>
                {error ? (
                  <p role="alert" className="text-[13px] text-gold-pale">
                    {error}
                  </p>
                ) : null}
                <button type="submit" className="btn btn-gold w-full">
                  Subscribe
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
