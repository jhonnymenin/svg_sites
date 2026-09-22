import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Chapter } from "./Chapter";
import { BookingBar } from "./BookingBar";
import { Parallax } from "./Parallax";

const AMENITIES = [
  "4 spacious bedrooms, 2 bathrooms",
  "Sleeps up to 10 guests",
  "Resort-style pool & outdoor lounge",
  "Private backyard with yard games, BBQ grill, tree deck, ping pong & more",
  "Sophisticated Bar Bijou & curated vinyl collection",
  "Prep kitchen for cooking or catering",
  "Handicap accessible throughout",
  "Street & gated parking + bikes for exploring Downtown Lafayette",
];

export function Stays() {
  return (
    <section id="stays" aria-labelledby="stays-title" className="paper relative pt-24 pb-20 lg:pt-36 lg:pb-24">
      <div className="frame">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
          {/* Intro (mobile order: intro → pictures → amenities) */}
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:pr-6">
            <Reveal>
              <Chapter
                id="stays-title"
                numeral="I."
                title="Stays"
                kicker="Your home away from home in Downtown Lafayette"
              />
              <p className="mt-8 max-w-[44ch] font-display text-[22px] leading-[1.4] text-ink-soft">
                Chez La Fête is a historic estate that blends European charm with modern comfort. Perfect for
                weekend getaways, family vacations, or business retreats.
              </p>
            </Reveal>
          </div>

          {/* Image composition: arched window, a room glimpse, the garden after dark */}
          <div className="relative lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
            <div className="grid grid-cols-12 gap-3 sm:gap-5">
              <Reveal className="col-span-7 sm:col-span-7">
                <figure>
                  <div className="arch relative aspect-[3/4.3] overflow-hidden bg-linen">
                    <Parallax>
                      {/* PLACEHOLDER — stock canopy bedroom; replace with Chez La Fête's primary bedroom. */}
                      <Image
                        src="/images/stay-bedroom.jpg"
                        alt="A canopy bed dressed in white linen beneath tall French windows"
                        fill
                        sizes="(min-width:1024px) 34vw, 58vw"
                        className="grade object-cover object-[50%_60%]"
                      />
                    </Parallax>
                  </div>
                  <figcaption className="italic-serif mt-3 text-[15px] text-ink-mute">The bedrooms — four, each its own.</figcaption>
                </figure>
              </Reveal>
              <div className="col-span-5 flex flex-col gap-3 pt-20 sm:gap-5 sm:pt-32">
                <Reveal delay={0.1}>
                  <figure>
                    <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                      {/* PLACEHOLDER — stock candlelit bar; replace with Bar Bijou. */}
                      <Image
                        src="/images/stay-bar.jpg"
                        alt="Candlelight glowing on a dark bar top"
                        fill
                        sizes="(min-width:1024px) 24vw, 40vw"
                        className="grade object-cover transition-transform duration-[1.4s] ease-[var(--ease-salon)] hover:scale-[1.04]"
                      />
                    </div>
                    <figcaption className="italic-serif mt-3 text-[15px] text-ink-mute">Bar Bijou</figcaption>
                  </figure>
                </Reveal>
                <Reveal delay={0.2}>
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden bg-linen">
                      {/* PLACEHOLDER — stock string-lit terrace; replace with the backyard & pool at night. */}
                      <Image
                        src="/images/stay-garden.jpg"
                        alt="String lights over an outdoor lounge at dusk"
                        fill
                        sizes="(min-width:1024px) 24vw, 40vw"
                        className="grade-night object-cover transition-transform duration-[1.4s] ease-[var(--ease-salon)] hover:scale-[1.04]"
                      />
                    </div>
                    <figcaption className="italic-serif mt-3 text-[15px] text-ink-mute">The garden, after dark</figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:pr-6">
            <ul className="border-t border-gold/35 lg:mt-10">
              {AMENITIES.map((a, i) => (
                <li key={a}>
                  <RevealItem index={i} className="flex gap-5 border-b border-gold/35 py-[14px]">
                    <span className="italic-serif w-6 shrink-0 pt-px text-[16px] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-[1.5] text-ink">{a}</span>
                  </RevealItem>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <Reveal className="-mx-[var(--gutter)] mt-20 sm:mx-0 lg:mt-24">
          <BookingBar />
        </Reveal>
      </div>
    </section>
  );
}
