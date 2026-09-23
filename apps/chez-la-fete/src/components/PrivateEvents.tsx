import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Chapter } from "./Chapter";
import { InquiryForm } from "./InquiryForm";
import { EVENT_TYPES } from "./navData";
import { Parallax } from "./Parallax";

const FEATURES = [
  {
    title: "Fest House Lounge",
    body: "A private lounge opening onto the enclosed backyard, available by request.",
    img: "/images/chez-fest-house-lounge-01.jpg",
    alt: "The Fest House Lounge: a wall of framed festival posters above a mustard velvet sofa, the rustic wet bar beyond",
    pos: "68% 60%",
  },
  {
    title: "Fully Stocked Wet Bar",
    body: "Ice machine, cooler, and everything you need.",
    img: "/images/chez-wet-bar-01.jpg",
    alt: "A rustic pallet-wood wet bar with a wine rack, a hot-pink door and a ‘Welcome to Chez La Fête!’ chalkboard",
    pos: "50% 60%",
  },
  {
    title: "Stylish Piano Lounge",
    body: "Cozy seating, smart TV & integrated sound system.",
    img: "/images/chez-piano-lounge-01.jpg",
    alt: "A walnut upright piano beside a mustard velvet sofa under a salon wall of festival posters",
    pos: "40% 55%",
  },
  {
    title: "Outdoor Restrooms",
    body: "For your guests’ convenience during events.",
    img: "/images/chez-outdoor-pavilion-01.jpg",
    alt: "The backyard pavilion with curtains and planters beside the yellow doors of the outdoor restrooms",
    pos: "82% 60%",
  },
];

export function PrivateEvents() {
  return (
    <section
      id="private-events"
      aria-labelledby="events-title"
      className="on-dark relative overflow-hidden bg-salon pt-24 pb-20 text-ivory lg:pt-36 lg:pb-28"
    >
      <div className="frame">
        {/* Opening: the Courtyard Stage by day, and the same oak by night */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5 lg:pt-10">
            <Chapter
              id="events-title"
              numeral="II."
              title={
                <>
                  Private
                  <br />
                  Events
                </>
              }
              kicker="Your event. Our privilege."
              tone="ivory"
            />
            <p className="mt-8 max-w-[40ch] font-display text-[22px] leading-[1.42] text-ivory/80">
              From intimate celebrations to memorable corporate retreats, Chez La Fête offers a one-of-a-kind
              setting for unforgettable events in Lafayette, LA.
            </p>
            <p className="mt-8 hidden max-w-[42ch] text-[14.5px] leading-[1.7] text-ivory/60 lg:block">
              The house, the gravel courtyard with its yellow umbrellas, and the Courtyard Stage wrapped around
              an ancient live oak — take one room or the whole address.
            </p>
          </Reveal>

          <div className="relative lg:col-span-7">
            <Reveal className="-mx-[var(--gutter)] sm:mx-0">
              <figure>
                <div className="relative aspect-[4/3.2] overflow-hidden bg-salon-2 lg:aspect-[16/11.5]">
                  <Parallax amount={6}>
                    <Image
                      src="/images/chez-backyard-courtyard-stage-01.jpg"
                      alt="The Courtyard Stage by day: a raised deck built around an ancient live oak, planters and lanterns along its edge"
                      fill
                      sizes="(min-width:1024px) 55vw, 100vw"
                      className="object-cover object-[45%_55%]"
                    />
                  </Parallax>
                </div>
                <figcaption className="mt-3 px-[var(--gutter)] text-right text-[13px] text-ivory/55 sm:px-0">
                  <span className="italic-serif text-[16px]">The Courtyard Stage, by day —</span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal
              delay={0.15}
              className="absolute -bottom-20 left-0 w-[44%] sm:-left-8 lg:-bottom-28 lg:-left-20 lg:w-[38%]"
            >
              <figure>
                <div className="arch relative aspect-[3/4.2] overflow-hidden border-[6px] border-salon bg-night lg:border-[10px]">
                  <Image
                    src="/images/chez-courtyard-night-01.jpg"
                    alt="The same courtyard at night: the live oak uplit, the stage glowing orange, guests at picnic tables under an umbrella"
                    fill
                    sizes="(min-width:1024px) 22vw, 44vw"
                    className="grade-phone object-cover object-[40%_55%]"
                  />
                </div>
                <figcaption className="script mt-1 pl-3 text-[30px] text-pink-glow lg:text-[34px]">
                  …and by night.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Occasions + inquiry */}
        <div className="mt-40 grid gap-16 lg:mt-48 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="label text-[10.5px] text-gold-bright">We host</p>
            <ul className="mt-6">
              {EVENT_TYPES.map((t, i) => (
                <li key={t}>
                  <RevealItem index={i} className="group flex items-baseline gap-5 border-b border-ivory/12 py-[13px]">
                    <span className="italic-serif w-6 text-[15px] text-gold-bright/80">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-[clamp(24px,2.3vw,31px)] leading-[1.15] transition-[transform,color] duration-500 ease-[var(--ease-salon)] group-hover:translate-x-2 group-hover:text-pink-glow">
                      {t}
                    </span>
                  </RevealItem>
                </li>
              ))}
            </ul>
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <p className="label text-[10.5px] text-gold-bright">Plan your event</p>
            <p className="mt-3 mb-10 font-display text-[30px] leading-[1.1]">
              <span className="italic-serif">Tell us what you are celebrating.</span>
            </p>
            <InquiryForm />
          </Reveal>
        </div>

        {/* Event features — the actual rooms */}
        <div className="mt-24 border-t border-gold/40 pt-10 lg:mt-32 lg:pt-14">
          <div className="flex items-baseline justify-between gap-6">
            <h3 className="label text-[10.5px] text-gold-bright">Event features</h3>
            <p className="italic-serif hidden text-[16px] text-ivory/55 sm:block">Four spaces made for a party.</p>
          </div>
          <ul className="rail -mx-[var(--gutter)] mt-8 flex gap-5 overflow-x-auto px-[var(--gutter)] pb-2 lg:mx-0 lg:mt-10 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:px-0">
            {FEATURES.map((f, i) => (
              <li key={f.title} className={`w-[72%] shrink-0 sm:w-[44%] lg:w-auto ${i % 2 === 1 ? "lg:pt-16" : ""}`}>
                <RevealItem index={i}>
                  <figure className="group">
                    <div className="relative aspect-[4/5] overflow-hidden bg-salon-2">
                      <Image
                        src={f.img}
                        alt={f.alt}
                        fill
                        sizes="(min-width:1024px) 22vw, (min-width:640px) 44vw, 72vw"
                        style={{ objectPosition: f.pos }}
                        className="object-cover transition-transform duration-[1.3s] ease-[var(--ease-salon)] group-hover:scale-[1.05]"
                      />
                    </div>
                    <figcaption className="mt-5">
                      <span className="flex items-baseline gap-3">
                        <span className="italic-serif text-[15px] text-gold-bright/80">{String(i + 1).padStart(2, "0")}</span>
                        <span className="label text-[11px] text-ivory">{f.title}</span>
                      </span>
                      <span className="mt-2 block max-w-[30ch] pl-8 text-[14.5px] leading-[1.6] text-ivory/65">{f.body}</span>
                    </figcaption>
                  </figure>
                </RevealItem>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
