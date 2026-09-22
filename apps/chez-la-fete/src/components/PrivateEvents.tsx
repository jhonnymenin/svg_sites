import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Chapter } from "./Chapter";
import { InquiryForm } from "./InquiryForm";
import { EVENT_TYPES } from "./navData";
import { Parallax } from "./Parallax";

const FEATURES = [
  { title: "Fête House Lounge", body: "Private, enclosed backyard available by request.", icon: LoungeIcon },
  { title: "Fully Stocked Wet Bar", body: "Ice machine, cooler, and everything you need.", icon: BarIcon },
  { title: "Stylish Piano Lounge", body: "Cozy seating, smart TV & integrated sound system.", icon: PianoIcon },
  { title: "Outdoor Restrooms", body: "For your guests’ convenience during events.", icon: DoorIcon },
];

export function PrivateEvents() {
  return (
    <section
      id="private-events"
      aria-labelledby="events-title"
      className="relative overflow-hidden bg-night pt-24 pb-20 text-ivory lg:pt-36 lg:pb-28"
    >
      <div className="frame">
        {/* Opening: headline + a layered pair of images */}
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
          </Reveal>

          <div className="relative lg:col-span-7">
            <Reveal className="-mx-[var(--gutter)] sm:mx-0">
              <div className="relative aspect-[4/3] overflow-hidden bg-night-2 lg:aspect-[16/11]">
                <Parallax amount={6}>
                  {/* PLACEHOLDER — stock reception table; replace with an event set-up at Chez La Fête. */}
                  <Image
                    src="/images/event-table.jpg"
                    alt="A long reception table set with candles and flowers"
                    fill
                    sizes="(min-width:1024px) 55vw, 100vw"
                    className="object-cover [filter:sepia(0.3)_saturate(0.8)_contrast(1.08)_brightness(0.72)]"
                  />
                </Parallax>
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,transparent_30%,rgb(18_15_11/0.55)_100%)]" />
              </div>
            </Reveal>
            <Reveal
              delay={0.15}
              className="absolute -bottom-16 left-0 w-[42%] sm:-left-8 lg:-bottom-24 lg:-left-20 lg:w-[36%]"
            >
              <div className="arch relative aspect-[3/4.2] overflow-hidden border-[6px] border-night bg-night-2 lg:border-[10px]">
                {/* PLACEHOLDER — stock garden ceremony; replace with a wedding at the house. */}
                <Image
                  src="/images/event-ceremony.jpg"
                  alt="A garden wedding ceremony under string lights"
                  fill
                  sizes="(min-width:1024px) 20vw, 42vw"
                  className="object-cover [filter:sepia(0.35)_saturate(0.75)_contrast(1.05)_brightness(0.78)]"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Occasions + inquiry */}
        <div className="mt-32 grid gap-16 lg:mt-44 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="label text-[10.5px] text-gold-bright">We host</p>
            <ul className="mt-6">
              {EVENT_TYPES.map((t, i) => (
                <li key={t}>
                  <RevealItem index={i} className="group flex items-baseline gap-5 border-b border-ivory/12 py-[13px]">
                    <span className="italic-serif w-6 text-[15px] text-gold-bright/80">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-[clamp(24px,2.3vw,31px)] leading-[1.15] transition-transform duration-500 ease-[var(--ease-salon)] group-hover:translate-x-2">
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

        {/* Event features */}
        <ul className="mt-24 grid border-t border-gold/40 sm:grid-cols-2 lg:mt-32 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <li
              key={f.title}
              className={`border-b border-gold/25 lg:border-b-0 ${i % 2 === 1 ? "sm:border-l sm:border-l-gold/25 sm:pl-8" : "sm:pr-8"} ${
                i > 0 ? "lg:border-l lg:border-l-gold/25 lg:pl-8" : "lg:pl-0"
              } lg:pr-6`}
            >
              <RevealItem index={i} className="flex gap-5 py-8 lg:flex-col lg:gap-6 lg:py-10">
                <f.icon />
                <div>
                  <h3 className="label text-[11px] text-gold-bright">{f.title}</h3>
                  <p className="mt-2 max-w-[28ch] text-[14.5px] leading-[1.6] text-ivory/70">{f.body}</p>
                </div>
              </RevealItem>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* Fine-line icons drawn for the house (1.2px stroke, gold). */
const iconProps = {
  width: 40,
  height: 40,
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  className: "shrink-0 text-gold-bright",
  "aria-hidden": true,
} as const;

function LoungeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 36V10M36 36V10M2 10h36" />
      <path d="M4 12c5 5 11 5 16 0 5 5 11 5 16 0" />
      {[8, 13, 20, 27, 32].map((x, i) => (
        <circle key={x} cx={x} cy={[14.6, 16, 13.4, 16, 14.6][i]} r="1.1" fill="currentColor" stroke="none" />
      ))}
      <path d="M11 36v-8h18v8M11 31h18" />
    </svg>
  );
}
function BarIcon() {
  return (
    <svg {...iconProps}>
      <path d="M8 9h18c0 7-4 11-9 11s-9-4-9-11Z" />
      <path d="M17 20v12M11 33h12" />
      <path d="M10 12.5h14" opacity="0.6" />
      <path d="M28 7l6-4M31 15h3" />
    </svg>
  );
}
function PianoIcon() {
  return (
    <svg {...iconProps}>
      <path d="M5 18c0-7 6-12 14-12 6 0 7 4 11 6 3 1.5 5 3 5 6v6H5v-6Z" />
      <path d="M5 24h30v4H5z" />
      {[9, 13, 17, 21, 25, 29].map((x) => (
        <path key={x} d={`M${x} 24v2.4`} />
      ))}
      <path d="M8 28v8M32 28v8M20 28v5" />
    </svg>
  );
}
function DoorIcon() {
  return (
    <svg {...iconProps}>
      <path d="M11 36V14a9 9 0 0 1 18 0v22" />
      <path d="M7 36h26" />
      <path d="M15 36V16a5 5 0 0 1 10 0v20" opacity="0.6" />
      <circle cx="23" cy="26" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
