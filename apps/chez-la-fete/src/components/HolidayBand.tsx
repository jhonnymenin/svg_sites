"use client";

import Image from "next/image";
import { Reveal } from "@sgv/brand/motion";
import { HOLIDAY_TYPES, PREFILL_EVENT } from "./navData";
import { Parallax } from "./Parallax";

/** Scroll to the inquiry form with the right occasion already chosen. */
function prefill(type: string) {
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: type }));
}

/**
 * Seasonal booking moment. Chez La Fête takes the larger holiday parties;
 * the Good Vibes Room downtown is offered for smaller gatherings.
 */
export function HolidayBand() {
  return (
    <section aria-labelledby="holiday-title" className="relative isolate overflow-hidden bg-night text-ivory">
      <div className="grid lg:grid-cols-12">
        {/* Picture: the courtyard at blue hour, string lights on */}
        <div className="relative lg:col-span-7">
          <div className="relative aspect-[4/3.1] overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[640px]">
            <Parallax amount={6}>
              <Image
                src="/images/chez-courtyard-night-02.jpg"
                alt="The courtyard at blue hour: yellow umbrellas, string lights and bistro tables in a soft haze"
                fill
                sizes="(min-width:1024px) 58vw, 100vw"
                className="grade-phone object-cover object-[50%_55%]"
              />
            </Parallax>
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(0deg,var(--night)_0%,transparent_40%)] lg:bg-[linear-gradient(270deg,var(--night)_0%,rgb(18_15_11/0.2)_26%,transparent_50%)]"
            />
          </div>
          {/* Inset: guests under the fairy-lit oak */}
          <Reveal
            delay={0.15}
            className="absolute right-[var(--gutter)] -bottom-16 w-[34%] max-w-[230px] lg:right-[-60px] lg:bottom-14 lg:w-[30%] lg:max-w-[250px]"
          >
            <div className="arch relative aspect-[3/4.1] overflow-hidden ring-[6px] ring-night">
              <Image
                src="/images/chez-event-guests-lights-01.jpg"
                alt="Three smiling guests in front of the fairy-lit live oak at dusk"
                fill
                sizes="(min-width:1024px) 250px, 34vw"
                className="object-cover object-[45%_45%]"
              />
            </div>
          </Reveal>
        </div>

        {/* Words */}
        <Reveal className="frame relative z-10 pt-24 pb-20 lg:col-span-5 lg:w-auto lg:max-w-none lg:py-28 lg:pr-[var(--gutter)] lg:pl-[calc(var(--gutter)+60px)]">
          <p className="script neon text-[46px] leading-none sm:text-[54px]">Joyeuses Fêtes</p>
          <p className="label mt-6 text-[10.5px] text-sun">Now booking November &amp; December</p>
          <h2 id="holiday-title" className="display mt-4 text-[clamp(36px,3.6vw,54px)]">
            Book Your Holiday Event
          </h2>
          <p className="mt-6 max-w-[42ch] font-display text-[20px] leading-[1.45] text-ivory/85">
            Office parties, family reunions, a réveillon for the whole crew. Chez La Fête takes the larger
            parties — the house, the courtyard and the Courtyard Stage.
          </p>
          <div className="mt-8 border-l-2 border-pink pl-5">
            <p className="text-[14.5px] leading-[1.7] text-ivory/70">
              <span className="text-ivory">Something smaller?</span> The Good Vibes Room downtown is our cultural
              living room — intimate, vibrant, perfect for smaller gatherings.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#inquire" onClick={() => prefill(HOLIDAY_TYPES[0])} className="btn btn-pink">
              Book Your Holiday Event
            </a>
            <a href="#inquire" onClick={() => prefill(HOLIDAY_TYPES[1])} className="btn btn-ghost-light">
              Ask About the Good Vibes Room
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
