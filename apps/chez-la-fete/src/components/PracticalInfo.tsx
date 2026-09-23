import Image from "next/image";
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
      <a key="t" href="tel:+13371234567" className="hover:text-pink-deep">
        (337) 123-4567
      </a>,
      <a key="m" href="mailto:stay@chezlafete.com" className="hover:text-pink-deep">
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

        <Reveal delay={0.1} className="relative lg:col-span-7 lg:pl-6">
          <figure>
            {/* Engraved double frame */}
            <div className="border border-ink/45 p-[5px]">
              <div className="relative aspect-square overflow-hidden border border-gold/60 bg-linen sm:aspect-[4/3]">
                <LafayetteMap className="absolute inset-0 hidden h-full w-full sm:block" />
                {/* Mobile: a closer crop around the house so labels stay legible */}
                <LafayetteMap idPrefix="map-m" viewBox="175 160 440 440" className="absolute inset-0 h-full w-full sm:hidden" />
              </div>
            </div>
            <figcaption className="italic-serif mt-4 max-w-[52%] text-[15px] text-ink-mute max-sm:max-w-none">
              Downtown Lafayette — an illustrated plan, not to scale.
            </figcaption>
          </figure>
          {/* Postcard: the sign out front, pinned to the corner of the map */}
          <div className="relative mt-10 ml-auto w-[78%] rotate-2 sm:absolute sm:-right-3 sm:-bottom-16 sm:mt-0 sm:w-[40%] lg:-right-8 lg:w-[36%]">
            <div className="bg-ivory p-2 shadow-[0_24px_40px_-24px_rgb(22_19_15/0.55)] ring-1 ring-ink/15">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/chez-detail-sign-01.jpg"
                  alt="The street sign out front: ‘Welcome to Chez La Fête — Guesthouse & Backyard, 811, ChezLaFete.com’"
                  fill
                  sizes="(min-width:1024px) 22vw, (min-width:640px) 40vw, 78vw"
                  className="object-cover object-[35%_55%]"
                />
              </div>
              <p className="script px-1 pt-1 text-[24px] text-pink-deep">You’ve arrived.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
