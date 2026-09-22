import { CalendarCheck, ConciergeBell, House, UsersRound, Video, type LucideIcon } from "lucide-react";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Container } from "./Container";
import { MicroLink } from "./MicroLink";

type Pillar = {
  label: string;
  body: string;
  link: string;
  href: string;
  Icon: LucideIcon;
  hue: string;
};

const PILLARS: Pillar[] = [
  {
    label: "Events",
    body: "Signature festivals, community gatherings and unforgettable moments.",
    link: "Explore events",
    href: "#events",
    Icon: CalendarCheck,
    hue: "var(--hue-events)",
  },
  {
    label: "Stays",
    body: "Distinctive properties designed for comfort, connection and inspiration.",
    link: "Explore stays",
    href: "#stays",
    Icon: House,
    hue: "var(--hue-stays)",
  },
  {
    label: "Hospitality",
    body: "Extraordinary hospitality experiences, food, beverages and services that make every moment special.",
    link: "Explore hospitality",
    href: "#hospitality",
    Icon: ConciergeBell,
    hue: "var(--hue-hospitality)",
  },
  {
    label: "Production & Media",
    body: "Stories that move people and content that creates impact.",
    link: "Explore media",
    href: "#production-media",
    Icon: Video,
    hue: "var(--hue-media)",
  },
  {
    label: "Community & Development",
    body: "Investing in people, culture and the future of our communities.",
    link: "Explore impact",
    href: "#community",
    Icon: UsersRound,
    hue: "var(--hue-community)",
  },
];

/** "Five ways" — the one centred display title on the page, flanked by gold hairlines (§6.2, §7.3). */
export function Pillars() {
  return (
    <section id="about" aria-labelledby="pillars-title" className="paper relative py-(--band-y)">
      <Container>
        <Reveal className="flex items-center gap-4 md:gap-6">
          <span aria-hidden className="hairline hidden h-px flex-1 sm:block" />
          <h2
            id="pillars-title"
            className="text-balance font-display text-[32px] font-bold uppercase leading-[0.98] text-forest sm:text-center md:text-[40px] xl:text-[46px]"
          >
            Five ways we serve good vibes
          </h2>
          <span aria-hidden className="hairline h-px min-w-8 flex-1" />
        </Reveal>

        <ul className="mt-8 grid grid-cols-1 md:mt-10 md:grid-cols-2 md:gap-x-10 lg:mt-9 lg:grid-cols-5 lg:gap-x-0">
          {PILLARS.map(({ label, body, link, href, Icon, hue }, i) => (
            <li
              key={label}
              className="border-t border-gold/45 md:[&:nth-child(-n+2)]:border-t-0 lg:border-t-0 max-md:first:border-t-0"
            >
              <RevealItem index={i} className="h-full">
                <div className="group/p grid h-full grid-cols-[44px_1fr] gap-x-4 py-6 md:py-7 lg:flex lg:flex-col lg:items-center lg:px-5 lg:py-0 lg:text-center xl:px-7">
                  <Icon
                    aria-hidden
                    size={42}
                    strokeWidth={1.6}
                    className="row-span-3 mt-[-3px] transition-transform duration-300 ease-out group-hover/p:-translate-y-1 lg:mt-0 lg:mb-[18px] lg:h-[46px] lg:w-[46px]"
                    style={{ color: hue }}
                  />
                  <h3 className="self-center font-display text-[21px] font-semibold uppercase leading-[1.1] tracking-[0.01em] text-forest lg:min-h-[2.2em] lg:text-[20px] xl:text-[22px] lg:self-auto">
                    {label}
                  </h3>
                  <p className="mt-2.5 max-w-[34ch] text-[15px] leading-[1.5] text-ink/[0.78] lg:mt-[14px] lg:max-w-[26ch] lg:text-[14.5px] lg:text-balance">
                    {body}
                  </p>
                  <div className="mt-4 lg:mt-auto lg:pt-[20px]">
                    <MicroLink href={href} className="text-[12.5px]" style={{ color: hue }}>
                      {link}
                    </MicroLink>
                  </div>
                </div>
              </RevealItem>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
