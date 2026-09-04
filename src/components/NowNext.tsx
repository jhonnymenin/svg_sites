import Image from "next/image";
import { Rail, RailCard } from "./Rail";

type Status = "In Development" | "Now Open" | "Coming Soon" | "In Progress";

const STATUS_STYLE: Record<Status, string> = {
  "In Development": "bg-teal text-white",
  "Now Open": "bg-mustard text-ink",
  "Coming Soon": "bg-rust text-white",
  "In Progress": "bg-cream text-ink",
};

const PROJECTS: { name: string; status: Status; img: string; pos: string }[] = [
  { name: "Hotel Lafayette", status: "In Development", img: "/nownext/hotel.jpg", pos: "50% 40%" },
  { name: "Bayou Teche Brewery Downtown", status: "Now Open", img: "/nownext/brewery.jpg", pos: "50% 42%" },
  { name: "Tropical Smoothie #12", status: "Coming Soon", img: "/nownext/smoothie.jpg", pos: "50% 45%" },
  { name: "Sala Braziliana", status: "Coming Soon", img: "/nownext/sala.jpg", pos: "50% 55%" },
  { name: "Good Vibes Mobile Bus", status: "In Progress", img: "/nownext/bus.jpg", pos: "50% 85%" },
  { name: "Braziliana Poetry Booth", status: "In Progress", img: "/nownext/poetry.jpg", pos: "50% 45%" },
];

export function NowNext() {
  return (
    <section id="now-next" className="bg-ink py-10 md:py-14">
      <Rail title="Now + Next" index={3} cta={{ label: "View All Projects", href: "#" }} tone="dark">
        {PROJECTS.map(({ name, status, img, pos }, i) => (
          <RailCard key={name} href="#" index={i} className="w-[230px] sm:w-[250px] md:w-[270px]">
            <div
              className="relative aspect-[4/5] overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-1"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <Image
                src={img}
                alt={name}
                fill
                unoptimized
                className="photo-grade object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07]"
                style={{ objectPosition: pos }}
              />
              <span
                className={`absolute left-3 top-3 px-2.5 py-1 font-display text-[10.5px] font-bold uppercase tracking-[0.05em] ${STATUS_STYLE[status]}`}
              >
                {status}
              </span>
            </div>
            <div className="mt-2.5 flex items-start justify-between gap-2 border-t border-white/12 pt-2">
              <h3 className="font-display text-[15px] font-bold uppercase leading-[1.15] text-white">
                {name}
              </h3>
              <span
                aria-hidden
                className="mt-1 shrink-0 -translate-x-1 text-mustard opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
              >
                →
              </span>
            </div>
          </RailCard>
        ))}
      </Rail>
    </section>
  );
}
