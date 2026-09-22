"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { EASE } from "@sgv/brand/motion";

export const ROLES = ["Cultural Exchange", "Event Participant", "Sponsor / Partner"] as const;
export type Role = (typeof ROLES)[number];

/** Anything on the page can pre-tick a role and jump to the form. */
export function requestJoin(role?: Role) {
  window.dispatchEvent(new CustomEvent<Role | undefined>("bz:join", { detail: role }));
  document.getElementById("join")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Join Braziliana — client-side only for now (no backend yet). On submit it
 * swaps to a thank-you state; wire `onSubmit` to the CRM when it exists.
 */
export function JoinForm() {
  const id = useId();
  const reduce = useReducedMotion();
  const [roles, setRoles] = useState<Set<Role>>(new Set());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const on = (e: Event) => {
      const role = (e as CustomEvent<Role | undefined>).detail;
      if (role) setRoles((r) => new Set(r).add(role));
    };
    window.addEventListener("bz:join", on);
    return () => window.removeEventListener("bz:join", on);
  }, []);

  const toggle = (r: Role) =>
    setRoles((prev) => {
      const next = new Set(prev);
      if (next.has(r)) next.delete(r);
      else next.add(r);
      return next;
    });

  const first = name.trim().split(/\s+/)[0];

  return (
    <div className="on-paper relative bg-paper px-6 pb-7 pt-8 text-ink shadow-[0_40px_70px_-30px_rgba(0,0,0,.65)] sm:px-8 lg:px-9">
      {/* paper grain + a strip of tape — the card is pasted onto the photo */}
      <span aria-hidden className="pointer-events-none absolute inset-0 opacity-25 mix-blend-multiply [background-image:var(--fibers),var(--grain)] [background-size:600px_600px,220px_220px]" />
      <span
        aria-hidden
        className="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 -rotate-3 bg-[#e9d9b0]/85 shadow-[0_1px_2px_rgba(0,0,0,.15)]"
      />
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          {done ? (
            <motion.div
              key="done"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="flex min-h-[420px] flex-col justify-center"
              role="status"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-folha text-paper">
                <Check size={28} strokeWidth={3} />
              </span>
              <p className="mt-6 font-script text-[44px] leading-none text-urucum">Bem-vindo{first ? `, ${first}` : ""}!</p>
              <p className="display mt-3 text-[34px] text-mata">You&rsquo;re part of Braziliana.</p>
              <p className="mt-4 max-w-[30ch] text-[16px] leading-snug text-ink-soft">
                We&rsquo;ll be in touch at <strong className="font-semibold text-ink">{email}</strong> with ways to get
                involved{roles.size ? ` as ${[...roles].join(", ").toLowerCase()}` : ""}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setDone(false);
                  setName("");
                  setEmail("");
                  setRoles(new Set());
                }}
                className="mt-8 self-start text-[13px] font-bold uppercase tracking-[0.14em] text-mata underline decoration-ouro decoration-2 underline-offset-4"
              >
                Add someone else
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
              aria-labelledby={`${id}-title`}
            >
              <h2 id={`${id}-title`} className="display text-[clamp(34px,3.1vw,44px)] text-mata">
                Join Braziliana
              </h2>
              <p className="mt-3 text-[16px] leading-[1.35] text-ink-soft">
                Be part of something bigger.
                <br />
                Choose how you want to get involved.
              </p>

              <fieldset className="mt-5">
                <legend className="text-[15px] font-semibold text-ink">I want to join as:</legend>
                <div className="mt-2.5 grid gap-1.5">
                  {ROLES.map((r) => {
                    const checked = roles.has(r);
                    return (
                      <label key={r} className="group flex cursor-pointer items-center gap-3 py-1 text-[16px] font-medium">
                        <span className="relative flex h-[22px] w-[22px] shrink-0 items-center justify-center">
                          <input
                            type="checkbox"
                            name="role"
                            value={r}
                            checked={checked}
                            onChange={() => toggle(r)}
                            className="peer absolute inset-0 cursor-pointer appearance-none rounded-[2px] border-2 border-ink/55 bg-[#fbf5e8] transition-colors checked:border-folha checked:bg-folha group-hover:border-folha"
                          />
                          <Check
                            aria-hidden
                            size={15}
                            strokeWidth={3.4}
                            className="pointer-events-none relative text-paper opacity-0 transition-opacity peer-checked:opacity-100"
                          />
                        </span>
                        {r}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-5 grid gap-3">
                <div>
                  <label htmlFor={`${id}-name`} className="sr-only">
                    Full Name
                  </label>
                  <input
                    id={`${id}-name`}
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 w-full rounded-[2px] border-[1.5px] border-ink/35 bg-[#fbf5e8] px-4 text-[16px] text-ink placeholder:text-ink/50 transition-colors focus:border-mata focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mata"
                  />
                </div>
                <div>
                  <label htmlFor={`${id}-email`} className="sr-only">
                    Email Address
                  </label>
                  <input
                    id={`${id}-email`}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 w-full rounded-[2px] border-[1.5px] border-ink/35 bg-[#fbf5e8] px-4 text-[16px] text-ink placeholder:text-ink/50 transition-colors focus:border-mata focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mata"
                  />
                </div>
              </div>

              <button type="submit" className="btn mt-5 h-[54px] w-full bg-urucum text-[15px] text-paper hover:bg-urucum-deep">
                Join Braziliana <ArrowRight aria-hidden size={18} className="arrow" />
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
