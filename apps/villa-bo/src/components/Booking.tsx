"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, CalendarDays, Check, ChevronDown } from "lucide-react";
import { EASE } from "@sgv/brand/motion";
import { content } from "@/content/site";

const b = content.booking;

function iso(d: Date) {
  const tz = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - tz).toISOString().slice(0, 10);
}
function addDays(isoDate: string, n: number) {
  const d = new Date(`${isoDate}T12:00:00`);
  d.setDate(d.getDate() + n);
  return iso(d);
}
function pretty(isoDate: string) {
  if (!isoDate) return "";
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function DateField({
  label,
  value,
  min,
  onChange,
  invalid,
}: {
  label: string;
  value: string;
  min?: string;
  onChange: (v: string) => void;
  invalid?: boolean;
}) {
  const id = useId();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="group relative flex min-h-[84px] flex-col justify-center px-5 py-4 transition-colors duration-300 focus-within:bg-paper-2/70 hover:bg-paper-2/50 lg:px-7">
      <label htmlFor={id} className="label text-ink-3">
        {label}
      </label>
      <div className="mt-2 flex items-center justify-between gap-3">
        <span className={`serif text-[20px] leading-none ${value ? "text-ink" : "text-ink-3/80"}`}>
          {value ? pretty(value) : "Select date"}
        </span>
        <CalendarDays aria-hidden size={17} strokeWidth={1.1} className="shrink-0 text-terra" />
      </div>
      <input
        ref={ref}
        id={id}
        type="date"
        required
        value={value}
        min={min}
        aria-invalid={invalid || undefined}
        onChange={(e) => onChange(e.target.value)}
        onClick={() => {
          try {
            ref.current?.showPicker?.();
          } catch {
            /* some browsers only allow showPicker on user gesture — ignore */
          }
        }}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
      />
    </div>
  );
}

export function Booking() {
  const reduce = useReducedMotion();
  const [today, setToday] = useState<string>("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(b.guestOptions[1]);
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const guestsId = useId();

  useEffect(() => {
    // Client-only so SSR markup never disagrees about "today".
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(iso(new Date()));
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) return setError(b.errorMissing);
    if (checkOut <= checkIn) return setError(b.errorDates);
    setError(null);
    setState("sending");
    // Client-side only: no booking engine is wired yet.
    window.setTimeout(() => setState("done"), reduce ? 0 : 900);
  };

  return (
    <section
      id="booking"
      aria-labelledby="booking-title"
      className="relative z-20 frame -mt-0 pt-8 lg:-mt-[58px] lg:pt-0"
    >
      <div className="relative border border-[var(--rule)] bg-paper shadow-[0_40px_80px_-60px_rgba(29,24,20,0.55)]">
        <AnimatePresence mode="wait" initial={false}>
          {state !== "done" ? (
            <motion.form
              key="form"
              noValidate
              onSubmit={submit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: reduce ? 0 : -8 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="grid grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr_0.9fr_auto]"
            >
              <div className="col-span-2 flex items-center justify-between gap-4 border-b border-[var(--rule)] px-5 py-5 lg:col-span-1 lg:flex-col lg:items-start lg:justify-center lg:border-b-0 lg:border-r lg:px-8">
                <h2 id="booking-title" className="display text-[28px] italic leading-none text-terra lg:text-[30px]">
                  {b.title}
                </h2>
                <p className="label hidden text-ink-3 sm:block lg:mt-3">Jardins · São Paulo</p>
              </div>

              <div className="border-b border-r border-[var(--rule)] lg:border-b-0">
                <DateField
                  label={b.checkIn}
                  value={checkIn}
                  min={today || undefined}
                  invalid={!!error && !checkIn}
                  onChange={(v) => {
                    setCheckIn(v);
                    if (checkOut && checkOut <= v) setCheckOut(addDays(v, 1));
                    setError(null);
                  }}
                />
              </div>
              <div className="border-b border-[var(--rule)] lg:border-b-0 lg:border-r">
                <DateField
                  label={b.checkOut}
                  value={checkOut}
                  min={checkIn ? addDays(checkIn, 1) : today || undefined}
                  invalid={!!error && (!checkOut || checkOut <= checkIn)}
                  onChange={(v) => {
                    setCheckOut(v);
                    setError(null);
                  }}
                />
              </div>

              <div className="relative col-span-2 flex min-h-[84px] flex-col justify-center px-5 py-4 transition-colors duration-300 focus-within:bg-paper-2/70 hover:bg-paper-2/50 lg:col-span-1 lg:px-7">
                <label htmlFor={guestsId} className="label text-ink-3">
                  {b.guests}
                </label>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <span className="serif text-[20px] leading-none text-ink">{guests}</span>
                  <ChevronDown aria-hidden size={17} strokeWidth={1.1} className="text-terra" />
                </div>
                <select
                  id={guestsId}
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                >
                  {b.guestOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="btn h-full min-h-[64px] w-full px-9 disabled:cursor-wait lg:min-h-[96px]"
                >
                  {state === "sending" ? b.sending : b.cta}
                  <ArrowRight aria-hidden size={16} strokeWidth={1.25} className="arrow" />
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="done"
              role="status"
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:min-h-[96px] lg:px-8 lg:py-6"
            >
              <div className="flex items-start gap-5 sm:items-center">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-terra text-terra">
                  <Check aria-hidden size={18} strokeWidth={1.25} />
                </span>
                <p className="serif text-[19px] leading-snug text-ink-2">
                  <span className="display mr-2 text-[26px] italic text-terra">{b.successTitle}</span>
                  {b.successBody(pretty(checkIn), pretty(checkOut), guests)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setState("idle")}
                className="link-underline label-lg shrink-0 self-start text-terra sm:self-auto"
              >
                {b.reset}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-3 flex min-h-[1.3em] flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p aria-live="polite" className="label text-terra">
          {error}
        </p>
        {state !== "done" ? <p className="label text-ink-3">{b.note}</p> : null}
      </div>
    </section>
  );
}
