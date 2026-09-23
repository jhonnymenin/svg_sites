import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { SgvMark } from "@sgv/brand";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { JoinCta } from "./JoinCta";

const PARTNERS_URL = "https://socialentertainment.net/partners-sponsors";

/** An official logo file from /brand/logos, sized by height. */
function LogoFile({ file, w, h, height, label }: { file: string; w: number; h: number; height: number; label: string }) {
  return (
    <Image
      src={`/brand/logos/${file}.webp`}
      alt={label}
      width={w}
      height={h}
      sizes={`${Math.ceil((height * w) / h) * 2}px`}
      className="w-auto max-w-full"
      style={{ height }}
    />
  );
}

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' };

/*
 * The Serving Good Vibes family — real logo files wherever the client has
 * supplied one. Chez La Fête and Villa BO have no logo file yet, so they are
 * set typographically (never faked as a mark).
 */
const FAMILY: { name: string; mark: ReactNode }[] = [
  { name: "Social Entertainment", mark: <LogoFile file="se-black" w={241} h={193} height={62} label="Social Entertainment" /> },
  { name: "Serving Good Vibes", mark: <SgvMark height={44} /> },
  {
    name: "Chez La Fête",
    mark: (
      <span className="text-center text-mata" style={serif}>
        <span className="block text-[23px] uppercase leading-none tracking-[0.06em]">Chez La Fête</span>
        <span className="mt-1 block text-[8.5px] uppercase tracking-[0.3em]">Guest house &amp; backyard</span>
      </span>
    ),
  },
  {
    name: "Villa BO",
    mark: (
      <span className="text-center text-mata">
        <span className="display block text-[30px] tracking-[0.2em]">Villa BO</span>
        <span className="block text-[9px] font-bold uppercase tracking-[0.4em]">São Paulo</span>
      </span>
    ),
  },
  {
    name: "Downtown Rising",
    // supplied on a white ground — shown as a stuck-on sticker rather than cut out
    mark: (
      <span className="block rotate-[-3deg] bg-white p-1 shadow-[0_6px_12px_-8px_rgba(0,0,0,.5)]">
        <LogoFile file="event-downtown-rising-color" w={900} h={781} height={70} label="Downtown Rising" />
      </span>
    ),
  },
  { name: "High Notes", mark: <LogoFile file="event-high-notes" w={706} h={374} height={56} label="High Notes" /> },
  { name: "Village Beats", mark: <LogoFile file="event-village-beats" w={900} h={710} height={72} label="Village Beats" /> },
  { name: "Acadiana Eats Festival", mark: <LogoFile file="event-acadiana-eats" w={863} h={361} height={50} label="Acadiana Eats Festival" /> },
  { name: "Sugar Jam", mark: <LogoFile file="event-sugar-jam" w={194} h={134} height={62} label="Sugar Jam at Sugar Mill Pond" /> },
  { name: "Saint John Inn", mark: <LogoFile file="stay-saint-john-inn" w={900} h={751} height={74} label="Saint John Inn" /> },
  { name: "Salty Air Retreat", mark: <LogoFile file="stay-salty-air-retreat" w={900} h={865} height={76} label="Salty Air Retreat — Perdido Key, FL" /> },
  { name: "Sunset Grove", mark: <LogoFile file="stay-sunset-grove" w={491} h={444} height={74} label="Sunset Grove" /> },
];

const OPEN_SLOTS = 4;

export function Partners() {
  return (
    <section id="partners" aria-labelledby="partners-title" className="paper border-t-[6px] border-mata">
      <div className="shell grid grid-cols-3 gap-x-3 py-16 sm:grid-cols-4 sm:py-20 lg:grid-cols-6 lg:gap-x-6">
        <Reveal className="col-span-3 pb-8 sm:col-span-4 lg:col-span-2 lg:pb-0 lg:pr-6">
          <h2 id="partners-title" className="display text-[clamp(40px,3.6vw,56px)] leading-[0.95] text-mata">
            Our partners.
            <br />
            Our impact.
          </h2>
          <p className="mt-4 max-w-[24rem] text-[16px] leading-[1.5] text-ink-soft">
            Braziliana grows out of the Serving Good Vibes family &mdash; the events, stages and stays below. Thank you to
            every partner who believes in culture, community, and good vibes.
          </p>
        </Reveal>

        {FAMILY.map((f, i) => (
          <RevealItem
            key={f.name}
            index={i % 6}
            className="group flex h-[96px] items-center justify-center border-b border-dashed border-ink/15 px-2 sm:h-[116px] lg:h-[132px]"
          >
            <span
              title={f.name}
              className="flex origin-center scale-[.72] items-center justify-center transition-transform duration-300 sm:scale-100 sm:group-hover:scale-[1.06]"
            >
              {f.mark}
            </span>
          </RevealItem>
        ))}

        {Array.from({ length: OPEN_SLOTS }, (_, i) => (
          <RevealItem key={`open-${i}`} index={(FAMILY.length + i) % 6} className={`${i === OPEN_SLOTS - 1 ? "hidden sm:flex" : "flex"} h-[96px] items-center justify-center border-b border-dashed border-ink/15 p-2 sm:h-[116px] lg:h-[132px]`}>
            <a
              href={PARTNERS_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full w-full flex-col items-center justify-center gap-1.5 border-[1.5px] border-dashed border-mata/35 text-center text-mata/70 transition-colors hover:border-urucum hover:bg-urucum/[.04] hover:text-urucum"
            >
              <Plus aria-hidden size={18} strokeWidth={2.4} className="transition-transform duration-300 group-hover:rotate-90" />
              <span className="text-[10.5px] font-bold uppercase leading-tight tracking-[0.16em] sm:text-[11.5px]">
                Your brand here
              </span>
              <span className="sr-only">— partnership packages (opens in a new tab)</span>
            </a>
          </RevealItem>
        ))}

        <div className="col-span-3 flex flex-col gap-6 pt-10 sm:col-span-4 lg:col-span-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pt-12">
          <p className="max-w-[40rem] text-[17px] leading-[1.5] text-ink">
            <strong className="font-semibold text-mata">Put your brand where the vibes are.</strong> One season, seven
            events and thousands of guests across Acadiana &mdash; with Presenting, Headline, Supporting and Community
            partnership levels.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <JoinCta role="Sponsor / Partner" className="btn bg-mata text-paper hover:bg-folha">
              Become a partner
            </JoinCta>
            <a
              href={PARTNERS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.14em] text-mata underline decoration-ouro decoration-2 underline-offset-[6px] hover:text-urucum"
            >
              Partnership packages <ArrowUpRight aria-hidden size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
