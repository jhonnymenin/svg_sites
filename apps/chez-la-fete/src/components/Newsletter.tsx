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
      <div className="relative aspect-[16/8] w-full lg:absolute lg:inset-y-0 lg:left-0 lg:-z-10 lg:aspect-auto lg:w-[34%]">
        {/* The pink "Chez La Fête" neon on the living wall */}
        <Image
          src="/images/chez-detail-neon-01.jpg"
          alt=""
          fill
          sizes="(min-width:1024px) 34vw, 100vw"
          className="object-cover object-[50%_42%] opacity-95"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgb(18_15_11/0.15)_55%,var(--night)_100%)] max-lg:bg-[linear-gradient(0deg,var(--night)_0%,transparent_45%)]" />
      </div>
      <div className="frame grid gap-10 pt-6 pb-20 lg:grid-cols-12 lg:pt-24 lg:items-end lg:py-24">
        <div className="lg:col-span-4 lg:col-start-5">
          <Fleur className="h-6 w-auto text-pink-glow" />
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
                  <p role="alert" className="text-[13px] text-pink-glow">
                    {error}
                  </p>
                ) : null}
                <button type="submit" className="btn btn-pink w-full">
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
