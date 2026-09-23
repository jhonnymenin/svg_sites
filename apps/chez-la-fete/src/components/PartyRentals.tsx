"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE, Reveal } from "@sgv/brand/motion";
import { ArrowUpRight } from "lucide-react";
import { Chapter } from "./Chapter";

/* TODO(client): swap for a dedicated add-ons page when one exists. */
export const SOCIAL_ENTERTAINMENT_URL = "https://socialentertainment.net";

const SERVICES = [
  {
    name: "Photo booth rentals",
    note: "The Good Vibes Photo Booth",
    img: "/images/photobooth-action-01.jpg",
    pos: "45% 40%",
    alt: "Two friends tapping the glowing ring-light screen of the Good Vibes Photo Booth under purple light",
  },
  {
    name: "Mobile beer service",
    note: "The beer bus, parked in the courtyard",
    img: "/images/party-laffy-taps-event-01.jpg",
    pos: "60% 55%",
    alt: "The lime-green Laffy Taps beer bus serving at a Chez La Fête courtyard event",
  },
  {
    name: "Karaoke setup",
    note: "Mic, screen & sound",
    img: "/images/chez-comedy-night-01.jpg",
    pos: "45% 45%",
    alt: "A performer at the microphone in front of the fairy-lit live oak on the Courtyard Stage",
  },
  {
    name: "Catering options",
    note: "Grazing tables to seated dinners",
    img: "/images/chez-event-grazing-01.jpg",
    pos: "55% 60%",
    alt: "A long grazing table of breads, cheeses and fruit on white linen at Chez La Fête",
  },
  {
    name: "Custom event planning services",
    note: "One team, start to finish",
    img: "/images/chez-event-reception-01.jpg",
    pos: "40% 55%",
    alt: "A dusk reception in the courtyard: guests at bistro tables beside the pavilion and a green VW bus",
  },
];

export function PartyRentals() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const s = SERVICES[active];

  return (
    <section id="party-rentals" aria-labelledby="rentals-title" className="paper relative py-24 lg:py-36">
      <div className="frame grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <Chapter
            id="rentals-title"
            numeral="III."
            title={
              <>
                Party Rentals
                <br />
                <span className="whitespace-nowrap">&amp; Add-ons</span>
              </>
            }
            kicker="Elevate every occasion."
            size="md"
          />
          <p className="mt-8 max-w-[38ch] text-[16px] leading-[1.7] text-ink-soft">
            Through our partnership with Social Entertainment, we offer add-on services to make your stay or
            event truly unforgettable.
          </p>
          <a
            href={SOCIAL_ENTERTAINMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost-ink mt-10 hidden lg:inline-flex"
          >
            Learn More About Add-ons
            <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={1.3} />
          </a>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10 lg:col-span-8">
          {/* Image frame that follows the list */}
          <div className="md:order-2">
            <div className="relative aspect-[4/5] overflow-hidden bg-linen md:sticky md:top-32">
              <AnimatePresence initial={false}>
                <motion.div
                  key={s.img}
                  className="absolute inset-0"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: EASE }}
                >
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="(min-width:1024px) 34vw, (min-width:768px) 50vw, 100vw"
                    style={{ objectPosition: s.pos }}
                    className="grade-phone object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-[linear-gradient(0deg,rgb(18_15_11/0.7),transparent)] p-5 pt-16 text-ivory">
                <span className="italic-serif text-[20px]">{s.note}</span>
                <span className="label text-[10px] text-ivory/75">
                  {String(active + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* Typographic index */}
          <ul className="border-t border-gold/40 md:order-1" aria-label="Add-on services">
            {SERVICES.map((item, i) => {
              const on = i === active;
              return (
                <li key={item.name} className="border-b border-gold/40">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className="group flex w-full items-baseline gap-5 py-5 text-left lg:py-6"
                  >
                    <span className={`italic-serif w-6 shrink-0 text-[16px] transition-colors ${on ? "text-pink-deep" : "text-ink-mute"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-[clamp(25px,2.5vw,36px)] leading-[1.08] transition-all duration-500 ease-[var(--ease-salon)] ${
                        on ? "translate-x-1 text-ink" : "text-ink/55 group-hover:text-ink"
                      }`}
                    >
                      {item.name}
                    </span>
                  </button>
                </li>
              );
            })}
            <li className="pt-6">
              <p className="text-[13px] leading-relaxed text-ink-mute">
                Available to guests of the house and to private events — from the Serving Good Vibes family.
              </p>
              <a href={SOCIAL_ENTERTAINMENT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-ink mt-8 w-full sm:w-auto lg:hidden">
                Learn More About Add-ons
                <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={1.3} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
