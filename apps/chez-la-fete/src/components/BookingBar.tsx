"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@sgv/brand/motion";
import { Fleur } from "./Fleur";

const fmt = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

/** Stay availability request — client-side only until a booking engine is connected. */
export function BookingBar() {
  const uid = useId();
  const today = new Date().toISOString().slice(0, 10);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const nights =
    checkIn && checkOut
      ? Math.round((+new Date(checkOut) - +new Date(checkIn)) / 86_400_000)
      : 0;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!checkIn || !checkOut) return setError("Please choose both your check-in and check-out dates.");
    if (nights < 1) return setError("Check-out must be at least one night after check-in.");
    setError(null);
    setSent(true);
  }

  return (
    <div id="book" className="on-dark relative scroll-mt-28 bg-teal-deep text-ivory">
      <div className="grid gap-8 px-6 py-9 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.6fr)] lg:items-end lg:gap-12 lg:px-12 lg:py-11">
        <div>
          <p className="label text-[10.5px] text-gold-bright">Reserve the house</p>
          <p className="mt-3 font-display text-[28px] leading-[1.05] sm:text-[32px]">
            <span className="italic-serif">Check availability</span>
          </p>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {sent ? (
            <motion.div
              key="done"
              role="status"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <Fleur className="mt-1 h-7 w-auto shrink-0 text-gold-bright" />
                <div>
                  <p className="font-display text-[26px] leading-tight">Merci — your dates are noted.</p>
                  <p className="mt-2 max-w-[52ch] text-[14.5px] leading-relaxed text-ivory/75">
                    {fmt(checkIn)} to {fmt(checkOut)} · {nights} night{nights > 1 ? "s" : ""} · {guests}{" "}
                    guest{guests === "1" ? "" : "s"}. Our host will confirm availability and rates within a day.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="label self-start text-[10.5px] text-gold-bright link-underline sm:self-auto"
              >
                Change dates
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
              className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.8fr_auto] lg:items-end"
              aria-describedby={error ? `${uid}-err` : undefined}
            >
              <label className="block">
                <span className="label text-[10px] text-ivory/65">Check-in</span>
                <input
                  type="date"
                  className="field mt-1"
                  min={today}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  required
                />
              </label>
              <label className="block">
                <span className="label text-[10px] text-ivory/65">Check-out</span>
                <input
                  type="date"
                  className="field mt-1"
                  min={checkIn || today}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  required
                />
              </label>
              <label className="block sm:col-span-2 lg:col-span-1">
                <span className="label text-[10px] text-ivory/65">Guests</span>
                <select className="field mt-1" value={guests} onChange={(e) => setGuests(e.target.value)}>
                  {Array.from({ length: 10 }, (_, i) => String(i + 1)).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === "1" ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" className="btn btn-pink w-full sm:col-span-2 lg:col-span-1 lg:w-auto">
                Check Availability
              </button>
              {error ? (
                <p id={`${uid}-err`} role="alert" className="text-[13.5px] text-pink-glow sm:col-span-2 lg:col-span-4">
                  {error}
                </p>
              ) : null}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
