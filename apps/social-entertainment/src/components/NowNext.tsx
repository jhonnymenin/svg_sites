import Image from "next/image";
import { clsx } from "clsx";
import { Rail, RailCard, RailIntro } from "./Rail";

type Status = "In Development" | "Now Open" | "Now Booking" | "Coming Soon" | "In Progress";

/* Ribbon colours: rust = building, mustard = open now, teal = on the way. */
const RIBBON: Record<Status, string> = {
  "In Development": "bg-rust text-cream",
  "Now Open": "bg-mustard text-ink",
  "Now Booking": "bg-mustard text-ink",
  "Coming Soon": "bg-cream text-ink",
  "In Progress": "bg-teal text-cream",
};

/*
  Real photography: Chez La Fête (pro shoot), the Good Vibes Room on a Bossa Nova night,
  the Laffy Taps beer bus (honest stand-in for the Mobile Bus, captioned) and the photo booth.
  PLACEHOLDER: hotel / brewery / smoothie / poetry are stock until renders and site photos arrive.
*/
type Project = { name: string; line: string; status: Status; img: string; pos: string; alt?: string; note?: string; href?: string };
const PROJECTS: Project[] = [
  { name: "Hotel Lafayette", line: "Boutique hospitality in the heart of it all.", status: "In Development", img: "/nownext/hotel.jpg", pos: "50% 40%" },
  {
    name: "Chez La Fête",
    line: "Guesthouse + backyard under the live oak, downtown Lafayette.",
    status: "Now Open",
    img: "/nownext/chez-la-fete.jpg",
    pos: "38% 50%",
    alt: "The live-oak tree deck and neon greenery wall in the Chez La Fête backyard",
    href: "https://chezlafete.com",
  },
  { name: "Bayou Teche Brewery Downtown", line: "Craft beer. Good food. Downtown vibes.", status: "Now Open", img: "/nownext/brewery.jpg", pos: "50% 42%" },
  { name: "Tropical Smoothie #12", line: "More smoothies. More community.", status: "Coming Soon", img: "/nownext/smoothie.jpg", pos: "50% 45%" },
  {
    name: "Sala Braziliana",
    line: "A cultural destination for art, music + story.",
    status: "Coming Soon",
    img: "/nownext/sala-bossa-nova.jpg",
    pos: "45% 50%",
    alt: "Couples dancing to live Bossa Nova in the Good Vibes Room",
    note: "Pictured: Bossa Nova night, Good Vibes Room",
  },
  {
    name: "Good Vibes Mobile Bus",
    line: "Rolling experiences. Community on the go.",
    status: "In Progress",
    img: "/nownext/mobile-bus.jpg",
    pos: "50% 62%",
    alt: "The lime-green Laffy Taps beer bus parked at a festival",
    note: "Pictured: our Laffy Taps beer bus",
  },
  {
    name: "Good Vibes Photo Booth",
    line: "An easy, fun add-on for celebrations and events.",
    status: "Now Booking",
    img: "/nownext/photo-booth.jpg",
    pos: "50% 40%",
    alt: "Two friends tapping the glowing ring-light photo booth",
  },
  { name: "Braziliana Poetry Booth", line: "Words. Culture. Connection.", status: "In Progress", img: "/nownext/poetry.jpg", pos: "45% 45%" },
];

export function NowNext() {
  return (
    <section id="now-next" className="dusty py-14 [--rail-media-h:320px] md:py-20 md:[--rail-media-h:330px]">
      <Rail
        label="Now + Next projects"
        intro={
          <RailIntro
            title={
              <>
                Now +<br className="hidden lg:block" /> Next
              </>
            }
            titleClass="text-[clamp(52px,6vw,84px)] text-teal-hi"
            body="What’s open, what’s coming, and what’s on the horizon."
            cta="View All Projects"
            ctaClass="bg-teal text-cream hover:bg-[#467571]"
          />
        }
      >
        {PROJECTS.map(({ name, line, status, img, pos, alt, note, href }, i) => (
          <RailCard key={name} href={href ?? "#"} index={i} className="w-[236px] md:w-[244px]">
            <article className="relative h-(--rail-media-h) overflow-hidden rounded-[6px] bg-ink-3 ring-1 ring-cream/10">
              <Image
                src={img}
                alt={alt ?? ""}
                fill
                unoptimized
                sizes="244px"
                className="photo-grade object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                style={{ objectPosition: pos }}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,13,11,0.25)_0%,rgba(15,13,11,0)_28%,rgba(15,13,11,0.35)_52%,rgba(15,13,11,0.92)_100%)]"
              />
              {/* status ribbon — a flag with a notched tail */}
              <span
                className={clsx(
                  "absolute left-0 top-3.5 flex items-center gap-2 py-[5px] pl-3 pr-5 font-label text-[12.5px] font-bold uppercase tracking-[0.1em]",
                  RIBBON[status]
                )}
                style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 9px) 50%, 100% 100%, 0 100%)" }}
              >
                {status === "Now Open" || status === "Now Booking" ? <span className="live-dot h-[7px] w-[7px] rounded-full bg-ink" aria-hidden /> : null}
                {status}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                <h3 className="font-label text-[20px] font-semibold uppercase leading-[1.08] tracking-[0.02em] text-cream">
                  {name}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.4] text-cream/75">{line}</p>
                {note ? (
                  <p className="mt-2 font-label text-[11.5px] font-medium uppercase tracking-[0.1em] text-cream/50">{note}</p>
                ) : null}
                <span
                  aria-hidden
                  className="mt-3 block h-[2px] w-8 bg-mustard transition-[width] duration-300 group-hover:w-16"
                />
              </div>
            </article>
          </RailCard>
        ))}
      </Rail>
    </section>
  );
}
