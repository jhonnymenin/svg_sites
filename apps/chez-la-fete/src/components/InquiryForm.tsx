"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@sgv/brand/motion";
import { Fleur } from "./Fleur";
import { EVENT_TYPES, HOLIDAY_TYPES, PREFILL_EVENT } from "./navData";


const GUESTS = ["Up to 20", "20 – 50", "50 – 100", "100 – 150", "150+"];

type Errors = Partial<Record<"type" | "name" | "email", string>>;

/** Private event inquiry — client-side only until a CRM/inbox is connected. */
export function InquiryForm() {
  const [sent, setSent] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const today = new Date().toISOString().slice(0, 10);
  const typeRef = useRef<HTMLSelectElement>(null);

  // The holiday band pre-selects its occasion before scrolling here.
  useEffect(() => {
    const onPrefill = (e: Event) => {
      const type = (e as CustomEvent<string>).detail;
      setSent(null);
      requestAnimationFrame(() => {
        if (typeRef.current) typeRef.current.value = type;
      });
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!d.get("type")) next.type = "Choose the kind of event.";
    if (!String(d.get("name") ?? "").trim()) next.name = "Tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(d.get("email") ?? ""))) next.email = "Enter a valid email.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(String(d.get("name")).trim().split(" ")[0]);
  }

  return (
    <div id="inquire" className="on-dark scroll-mt-28">
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div
            key="done"
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex min-h-[420px] flex-col items-start justify-center border-y border-gold/40 py-14"
          >
            <Fleur className="h-10 w-auto text-gold-bright" />
            <p className="display mt-8 text-[clamp(34px,4vw,52px)]">Merci, {sent}.</p>
            <p className="mt-5 max-w-[46ch] font-display text-[21px] leading-[1.45] text-ivory/80">
              Your inquiry is with our events team. Expect a personal reply — with availability and a few
              ideas — within one business day.
            </p>
            <button
              type="button"
              onClick={() => setSent(null)}
              className="label mt-10 text-[10.5px] text-gold-bright link-underline"
            >
              Send another inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={submit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-x-8 gap-y-8 sm:grid-cols-2"
          >
            <Field label="Event type" error={errors.type}>
              <select ref={typeRef} name="type" className="field" defaultValue="" aria-invalid={!!errors.type}>
                <option value="" disabled>
                  Select an option
                </option>
                {EVENT_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
                {HOLIDAY_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
                <option>Something else</option>
              </select>
            </Field>
            <Field label="Event date">
              <input type="date" name="date" min={today} className="field" />
            </Field>
            <Field label="Guest count">
              <select name="guests" className="field" defaultValue="">
                <option value="" disabled>
                  Estimated guests
                </option>
                {GUESTS.map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </Field>
            <Field label="Your name" error={errors.name}>
              <input name="name" autoComplete="name" placeholder="Full name" className="field" aria-invalid={!!errors.name} />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                className="field"
                aria-invalid={!!errors.email}
              />
            </Field>
            <Field label="Phone">
              <input name="phone" type="tel" autoComplete="tel" placeholder="Phone number" className="field" />
            </Field>
            <Field label="Tell us about your event" className="sm:col-span-2">
              <textarea
                name="message"
                rows={3}
                placeholder="Your message…"
                className="field resize-none leading-relaxed"
              />
            </Field>
            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[40ch] text-[13px] leading-relaxed text-ivory/55">
                We reply personally, usually within one business day.
              </p>
              <button type="submit" className="btn btn-pink w-full sm:w-auto">
                Send Inquiry
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="label text-[10px] text-ivory/65">{label}</span>
      <span className="mt-1 block">{children}</span>
      {error ? (
        <span role="alert" className="mt-2 block text-[12.5px] text-pink-glow">
          {error}
        </span>
      ) : null}
    </label>
  );
}
