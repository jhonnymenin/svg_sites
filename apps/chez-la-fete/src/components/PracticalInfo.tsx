import { Reveal, RevealItem } from "@sgv/brand/motion";
import { ArrowUpRight } from "lucide-react";
import { Chapter } from "./Chapter";
import { LafayetteMap } from "./LafayetteMap";

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=811+Lafayette+Street,+Lafayette,+LA+70501";

const INFO: { label: string; lines: React.ReactNode[] }[] = [
  { label: "Address", lines: ["811 Lafayette Street", "Lafayette, LA 70501"] },
  { label: "Directions", lines: ["Easy access to I-10"] },
  { label: "Check-in / Check-out", lines: ["Check-in 4:00 PM", "Check-out 11:00 AM"] },
  { label: "Parking", lines: ["Complimentary street & gated parking", "+ bikes available"] },
  { label: "Policies", lines: ["No smoking", "No pets"] },
  {
    label: "Contact",
    lines: [
      <a key="t" href="tel:+13371234567" className="hover:text-gold">
        (337) 123-4567
      </a>,
      <a key="m" href="mailto:stay@chezlafete.com" className="hover:text-gold">
        stay@chezlafete.com
      </a>,
    ],
  },
];

export function PracticalInfo() {
  return (
    <section id="practical-info" aria-labelledby="info-title" className="relative bg-ivory-deep py-24 lg:py-36">
      <div className="frame grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <Chapter
              id="info-title"
              numeral="VI."
              title={
                <>
                  Practical
                  <br />
                  Info
                </>
              }
              kicker="Everything you need to know."
            />
          </Reveal>
          <dl className="mt-12 grid grid-cols-1 border-t border-gold/40 sm:grid-cols-2 sm:gap-x-8">
            {INFO.map((item, i) => (
              <RevealItem key={item.label} index={i} className="border-b border-gold/40 py-5">
                <dt className="label text-[10px] text-gold">{item.label}</dt>
                <dd className="mt-2 font-display text-[19.5px] leading-[1.35] text-ink">
                  {item.lines.map((l, k) => (
                    <span key={k} className="block">
                      {l}
                    </span>
                  ))}
                </dd>
              </RevealItem>
            ))}
          </dl>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label mt-8 inline-flex items-center gap-3 text-[11px] text-ink link-underline"
          >
            Get Directions
            <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={1.3} />
          </a>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7 lg:pl-6">
          <figure>
            {/* Engraved double frame */}
            <div className="border border-ink/45 p-[5px]">
              <div className="relative aspect-square overflow-hidden border border-gold/60 bg-linen sm:aspect-[4/3]">
                <LafayetteMap className="absolute inset-0 hidden h-full w-full sm:block" />
                {/* Mobile: a closer crop around the house so labels stay legible */}
                <LafayetteMap idPrefix="map-m" viewBox="175 160 440 440" className="absolute inset-0 h-full w-full sm:hidden" />
              </div>
            </div>
            <figcaption className="italic-serif mt-4 text-[15px] text-ink-mute">
              Downtown Lafayette — an illustrated plan, not to scale.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
