import Image from "next/image";
import { Building, ChartNoAxesColumnIncreasing, Crosshair, Settings, type LucideIcon } from "lucide-react";
import { Reveal, RevealItem } from "./Reveal";
import { SCBadge } from "./marks";
import { TornEdge } from "./TornEdge";

const SERVICES: { label: string; detail: string; Icon: LucideIcon }[] = [
  { label: "Strategy", detail: "Market insight & brand strategy", Icon: Crosshair },
  { label: "Development", detail: "Real estate & project advisory", Icon: Building },
  { label: "Operations", detail: "Systems, staffing & profitability", Icon: Settings },
  { label: "Growth", detail: "Capital strategy & long-term value", Icon: ChartNoAxesColumnIncreasing },
];

export function SCAdvising() {
  return (
    <section id="sc-advising" className="paper relative px-[max(10px,calc(var(--edge)-28px))] pt-4 pb-10 md:pb-14">
      <Reveal>
        <div className="dusty-teal relative overflow-hidden rounded-[16px] px-6 py-9 text-cream shadow-[0_0_0_1px_rgba(0,0,0,0.25)] sm:px-9 lg:grid lg:grid-cols-[auto_minmax(300px,420px)_1fr] lg:items-center lg:gap-x-10 lg:px-11 lg:py-10">
          {/* palm silhouette, printed in a darker teal — same cut-out as the hero, inked flat */}
          <Image
            src="/images/collage-palm.webp"
            alt=""
            width={599}
            height={1354}
            unoptimized
            aria-hidden
            className="pointer-events-none absolute -right-8 top-6 w-[180px] opacity-40 brightness-0 lg:-right-4 lg:top-[-10px] lg:w-[200px]"
          />

          <div className="flex items-center gap-5 lg:block">
            <SCBadge className="w-[92px] shrink-0 sm:w-[112px] lg:w-[150px]" />
            <h2 className="worn font-display text-[clamp(40px,4.6vw,60px)] uppercase leading-[0.95] tracking-[0.005em] lg:hidden">
              SC Advising
            </h2>
          </div>

          <div className="relative mt-5 lg:mt-0">
            <h2 className="worn hidden font-display text-[clamp(40px,4.2vw,60px)] uppercase leading-[0.95] tracking-[0.005em] lg:block">
              SC Advising
            </h2>
            <p className="max-w-[26rem] text-[16px] leading-[1.55] text-cream/85 lg:mt-3 lg:text-[17px]">
              Strategic guidance for brands, real estate, design, operations, and growth. We help strong ideas become
              great businesses.
            </p>
            <a
              href="#"
              className="group mt-6 inline-flex items-center gap-5 border border-cream/80 bg-ink px-5 py-[11px] font-label text-[15px] font-semibold uppercase tracking-[0.09em] text-cream transition-colors duration-150 hover:bg-cream hover:text-ink"
              style={{ borderRadius: 2 }}
            >
              Learn More
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <ul className="relative mt-9 grid grid-cols-1 gap-x-6 gap-y-6 border-t border-cream/15 pt-8 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 lg:pr-24">
            {SERVICES.map(({ label, detail, Icon }, i) => (
              <li key={label}>
                <RevealItem index={i} className="group flex items-start gap-3.5 lg:flex-col lg:gap-3">
                  <Icon
                    size={34}
                    strokeWidth={1.25}
                    className="shrink-0 text-cream/85 transition-colors duration-300 group-hover:text-mustard"
                  />
                  <div>
                    <h3 className="font-label text-[18px] font-semibold uppercase leading-none tracking-[0.06em]">
                      {label}
                    </h3>
                    <p className="mt-1.5 text-[14.5px] leading-[1.4] text-cream/70">{detail}</p>
                  </div>
                </RevealItem>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <TornEdge side="bottom" seed={17} />
    </section>
  );
}
