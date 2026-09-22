import type { ReactNode } from "react";
import { SgvMark } from "@sgv/brand";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Wordmark } from "./Wordmark";
import { JoinCta } from "./JoinCta";

/*
 * Partner-logo wall. The Serving Good Vibes family brands are set
 * typographically; every other slot is a clearly-labelled PLACEHOLDER mark
 * (never a real third-party logo) until the client supplies partner artwork.
 */

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' };

const FAMILY: { name: string; mark: ReactNode }[] = [
  {
    name: "Social Entertainment",
    mark: (
      <span className="flex items-center gap-2">
        <span className="font-[family-name:var(--font-sgv)] text-[40px] leading-none tracking-[-0.06em]">SE</span>
        <span className="font-[family-name:var(--font-sgv)] text-[9px] uppercase leading-[1.15] tracking-[0.14em]">
          Social
          <br />
          Entertainment
        </span>
      </span>
    ),
  },
  { name: "Serving Good Vibes", mark: <SgvMark height={46} /> },
  {
    name: "Chez La Fête",
    mark: (
      <span className="text-center" style={serif}>
        <span className="block text-[25px] uppercase leading-none tracking-[0.06em]">Chez La Fête</span>
        <span className="mt-1 block text-[8.5px] uppercase tracking-[0.3em]">Guest house &amp; backyard</span>
      </span>
    ),
  },
  {
    name: "Villa BO",
    mark: (
      <span className="text-center">
        <span className="display block text-[30px] tracking-[0.2em]">Villa BO</span>
        <span className="block text-[9px] font-bold uppercase tracking-[0.4em]">São Paulo</span>
      </span>
    ),
  },
  { name: "Sala Braziliana", mark: <span className="flex flex-col items-center"><span className="text-[8px] font-bold tracking-[0.6em]">SALA</span><Wordmark size={21} accents={false} shadow="rgba(0,0,0,.35)" /></span> },
];

function placeholder(i: number): ReactNode {
  switch (i % 8) {
    case 0:
      return (
        <span className="flex h-[74px] w-[74px] flex-col items-center justify-center rounded-full border-[2.5px] border-current text-center">
          <span className="text-[7px] font-bold tracking-[0.3em]">★ ★ ★</span>
          <span className="display text-[17px] leading-none">Partner</span>
          <span className="text-[7px] font-bold tracking-[0.3em]">LOGO</span>
        </span>
      );
    case 1:
      return <span className="bg-current px-3 py-1.5"><span className="display block text-[22px] tracking-[0.08em] text-paper">Your Logo</span></span>;
    case 2:
      return (
        <span className="text-center" style={serif}>
          <span className="block border-y border-current py-1 text-[17px] uppercase tracking-[0.42em]">Partner</span>
          <span className="mt-1 block text-[8px] uppercase tracking-[0.3em]">Lafayette · LA</span>
        </span>
      );
    case 3:
      return <span className="font-script text-[36px] leading-none">Sponsor</span>;
    case 4:
      return (
        <span className="flex items-center gap-2">
          <span className="flex h-10 w-10 rotate-45 items-center justify-center border-[2.5px] border-current">
            <span className="-rotate-45 text-[11px] font-bold">P</span>
          </span>
          <span className="text-[13px] font-bold uppercase leading-[1.05] tracking-[0.12em]">
            Partner
            <br />
            Name
          </span>
        </span>
      );
    case 5:
      return <span className="display text-[34px] tracking-[0.02em]">LOGO</span>;
    case 6:
      return (
        <span className="text-center italic" style={serif}>
          <span className="block text-[24px] leading-none">the Partner</span>
          <span className="mt-1 block text-[8px] not-italic uppercase tracking-[0.34em]">Community</span>
        </span>
      );
    default:
      return (
        <span className="flex flex-col items-center rounded-b-[26px] border-[2.5px] border-current px-4 pb-3 pt-2 text-center">
          <span className="text-[7px] font-bold tracking-[0.3em]">EST.</span>
          <span className="display text-[18px] leading-none">Sponsor</span>
        </span>
      );
  }
}

export function Partners() {
  const slots = [
    ...FAMILY.map((f) => ({ key: f.name, label: f.name, mark: f.mark, placeholder: false })),
    ...Array.from({ length: 16 }, (_, i) => ({
      key: `p${i}`,
      label: `Partner logo placeholder ${i + 1}`,
      mark: placeholder(i),
      placeholder: true,
    })),
  ];

  return (
    <section id="partners" aria-labelledby="partners-title" className="paper border-t-[6px] border-mata">
      <div className="shell grid grid-cols-3 gap-x-3 py-16 sm:grid-cols-4 sm:py-20 lg:grid-cols-6 lg:gap-x-6">
        <Reveal className="col-span-3 pb-8 sm:col-span-4 lg:col-span-2 lg:row-span-1 lg:pb-0 lg:pr-6">
          <h2 id="partners-title" className="display text-[clamp(40px,3.6vw,56px)] leading-[0.95] text-mata">
            Our partners.
            <br />
            Our impact.
          </h2>
          <p className="mt-4 max-w-[24rem] text-[16px] leading-[1.5] text-ink-soft">
            Thank you to our amazing partners for believing in culture, community, and good vibes.
          </p>
        </Reveal>

        {slots.map((s, i) => (
          <RevealItem
            key={s.key}
            index={i % 6}
            className="group flex h-[88px] items-center justify-center border-b border-dashed border-ink/15 sm:h-[112px] lg:h-[128px]"
          >
            <span
              role="img"
              aria-label={s.label}
              className={`flex shrink-0 scale-[.62] items-center whitespace-nowrap justify-center transition-[color,transform] duration-300 sm:scale-100 sm:group-hover:scale-[1.05] ${
                s.placeholder ? "text-mata/55 group-hover:text-mata" : "text-mata"
              }`}
            >
              {s.mark}
            </span>
          </RevealItem>
        ))}

        <div className="col-span-3 flex items-center justify-center py-8 sm:col-span-3 sm:border-b sm:border-dashed sm:border-ink/15 lg:col-span-1 lg:py-0">
          <JoinCta role="Sponsor / Partner" className="btn bg-mata text-paper hover:bg-folha">
            Become a partner
          </JoinCta>
        </div>
      </div>
    </section>
  );
}
