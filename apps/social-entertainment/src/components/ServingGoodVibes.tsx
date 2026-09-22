import {
  CirclePlay,
  ClipboardList,
  ConciergeBell,
  CookingPot,
  Sunset,
  Ticket,
  TreePalm,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SgvMark } from "@sgv/brand";
import { Reveal, RevealItem } from "./Reveal";
import { ShakaBadge } from "./marks";

const OFFERINGS: { label: string; Icon: LucideIcon }[] = [
  { label: "Hospitality", Icon: ConciergeBell },
  { label: "Experiences", Icon: TreePalm },
  { label: "Events", Icon: Ticket },
  { label: "Media", Icon: CirclePlay },
  { label: "Community", Icon: Users },
  { label: "Catering", Icon: CookingPot },
  { label: "Consulting", Icon: ClipboardList },
  { label: "Braziliana", Icon: Sunset },
];

export function ServingGoodVibes() {
  return (
    <section id="serving-good-vibes" className="dusty px-[max(10px,calc(var(--edge)-28px))] pb-2">
      <Reveal>
        <div className="paper relative overflow-hidden rounded-[14px] px-5 py-8 shadow-[0_0_0_1px_rgba(0,0,0,0.4)] sm:px-8 md:py-10 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-x-12 lg:px-12 lg:py-11">
          {/* mustard halftone corner — a printed registration flourish */}
          <div
            aria-hidden
            className="halftone pointer-events-none absolute -right-6 -top-6 h-40 w-56 opacity-70"
            style={{
              ["--pitch" as string]: "11px",
              ["--size" as string]: "2px",
              maskImage: "radial-gradient(circle at 100% 0, #000 20%, transparent 70%)",
            }}
          />

          <div className="group absolute right-4 top-5 w-[96px] sm:right-8 sm:top-8 sm:w-[132px] lg:static lg:w-[196px]">
            <div className="transition-transform duration-700 ease-out group-hover:rotate-[-14deg]">
              <ShakaBadge />
            </div>
          </div>

          <div className="relative">
            <h2 className="worn pr-[104px] font-display text-[clamp(44px,5.4vw,80px)] uppercase leading-[0.92] tracking-[0.005em] text-rust sm:pr-[150px] lg:pr-0">
              Serving Good Vibes
            </h2>
            <p className="mt-4 max-w-[40rem] text-[16px] sm:pr-[150px] lg:pr-0 leading-[1.55] text-ink/80 md:text-[17px]">
              Serving Good Vibes is our hub for hospitality, experiences, events, media, community, catering,
              consulting, and the Braziliana cultural portfolio. It is how we bring ideas to life and culture to
              the community.
            </p>

            <ul className="mt-7 grid grid-cols-4 gap-x-2 gap-y-6 sm:grid-cols-8 lg:max-w-[46rem]">
              {OFFERINGS.map(({ label, Icon }, i) => (
                <li key={label}>
                  <RevealItem index={i} className="group/item flex flex-col items-center gap-2 text-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-all duration-300 group-hover/item:-translate-y-1 group-hover/item:bg-ink group-hover/item:text-mustard">
                      <Icon size={27} strokeWidth={1.5} />
                    </span>
                    <span className="font-label text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink md:text-[13px]">
                      {label}
                    </span>
                  </RevealItem>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9 flex flex-col items-start gap-5 border-t border-ink/15 pt-7 sm:flex-row sm:items-center sm:justify-between lg:mt-0 lg:flex-col lg:items-stretch lg:justify-center lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <SgvMark tone="dark" height={50} eyebrow="A Social Entertainment platform" />
            <a
              href="#"
              className="group inline-flex w-full items-center justify-between gap-8 bg-teal px-6 py-4 font-label text-[17px] font-semibold uppercase leading-[1.15] tracking-[0.09em] text-cream shadow-[3px_3px_0_var(--color-ink)] transition-all duration-150 hover:-translate-x-px hover:-translate-y-px hover:bg-[#467571] hover:shadow-[5px_5px_0_var(--color-ink)] sm:w-auto lg:w-[250px]"
              style={{ borderRadius: 2 }}
            >
              <span>
                Enter Serving <br className="hidden lg:block" />
                Good Vibes
              </span>
              <span aria-hidden className="text-[20px] transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
