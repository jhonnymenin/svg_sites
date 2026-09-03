import { CalendarCheck2, Home, ConciergeBell, Video, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "./Container";

type Pillar = {
  label: string;
  body: string;
  link: string;
  Icon: LucideIcon;
  color: string;
};

const PILLARS: Pillar[] = [
  {
    label: "Events",
    body: "Festivals, gatherings and celebrations built to bring people together.",
    link: "Explore Events",
    Icon: CalendarCheck2,
    color: "#61110c",
  },
  {
    label: "Stays",
    body: "Properties crafted for comfort, connection and a little inspiration.",
    link: "Explore Stays",
    Icon: Home,
    color: "#1f4536",
  },
  {
    label: "Hospitality",
    body: "Food, beverage and service experiences that make every moment feel special.",
    link: "Explore Hospitality",
    Icon: ConciergeBell,
    color: "#a8690f",
  },
  {
    label: "Production & Media",
    body: "Content and storytelling that moves people and builds community.",
    link: "Explore Media",
    Icon: Video,
    color: "#04101b",
  },
  {
    label: "Community & Development",
    body: "Investing in the people, culture and future of the neighborhoods we call home.",
    link: "Explore Impact",
    Icon: Users,
    color: "#61110c",
  },
];

export function Pillars() {
  return (
    <section className="bg-parchment pt-4 pb-[18px] md:pt-[16px] md:pb-[18px]">
      <Container>
        <div className="flex items-center gap-6">
          <span className="hidden h-px flex-1 bg-gold/55 sm:block" aria-hidden />
          <h2 className="shrink-0 text-center font-display text-[26px] leading-[1.05] font-bold uppercase text-forest sm:text-[34px] md:text-[42px] md:leading-[1.0]">
            Five Ways We Spread Good Vibes
          </h2>
          <span className="hidden h-px flex-1 bg-gold/55 sm:block" aria-hidden />
        </div>

        <div className="mt-2 grid grid-cols-1 divide-y divide-gold/25 md:grid-cols-5 md:items-start md:divide-y-0">
          {PILLARS.map(({ label, body, link, Icon, color }) => (
            <div
              key={label}
              className="flex items-center gap-4 py-5 first:pt-6 md:flex-col md:items-center md:gap-0 md:py-0 md:text-center md:first:pt-0"
            >
              <Icon
                size={44}
                strokeWidth={2.5}
                color={color}
                className="shrink-0"
                aria-hidden
              />
              <div className="md:contents">
                <h3 className="font-display text-[17px] leading-[1.15] font-semibold uppercase tracking-[0.01em] text-forest md:mt-[17px] md:text-[19px]">
                  {label}
                </h3>
                <p className="mt-1 max-w-[15rem] text-[13.5px] leading-[1.4] text-ink/75 md:mt-[22px] md:text-[14px] md:leading-[1.42]">
                  {body}
                </p>
                <a
                  href="#"
                  className="group mt-1 inline-flex items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[0.08em] md:mt-4"
                  style={{ color }}
                >
                  {link}
                  <span
                    aria-hidden
                    className="transition-transform duration-150 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
