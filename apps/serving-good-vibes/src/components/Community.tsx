import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Container } from "./Container";

const ITEMS = [
  { t: "Community Initiatives", b: "Supporting local organizations and neighborhoods." },
  { t: "Educational Programs", b: "Empowering youth through education and mentorship." },
  { t: "Cultural Programming", b: "Celebrating culture and preserving our heritage." },
  { t: "Economic Development", b: "Creating opportunities and supporting local entrepreneurs." },
  { t: "Volunteer Partnerships", b: "Bringing people together to make a difference." },
];

export function Community() {
  return (
    <section id="community" aria-labelledby="community-title" className="relative overflow-hidden bg-gold py-(--band-y) text-ink">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-red-deep">Community &amp; Development</p>
              <h2 id="community-title" className="display mt-4 text-[clamp(44px,5.6vw,88px)] text-teal-ink">
                Good vibes are <span className="display-italic text-red">built</span> together.
              </h2>
              <p className="mt-6 max-w-[32rem] text-[17px] leading-[1.6] text-ink/80">
                Investing in people, culture and the future of our communities — the neighborhoods, vendors,
                musicians and families that make Acadiana what it is.
              </p>
            </Reveal>
            <ol className="mt-10 border-t border-ink/20">
              {ITEMS.map((it, i) => (
                <li key={it.t} className="border-b border-ink/20">
                  <RevealItem index={i} className="grid grid-cols-[40px_1fr] gap-x-3 py-4 md:grid-cols-[40px_1fr_1.2fr] md:items-baseline md:gap-x-6">
                    <span className="text-[12px] font-bold tabular-nums text-red-deep">0{i + 1}</span>
                    <h3 className="display text-[24px] leading-none text-teal-ink">{it.t}</h3>
                    <p className="col-start-2 mt-1 text-[15px] leading-[1.5] text-ink/75 md:col-start-3 md:mt-0">{it.b}</p>
                  </RevealItem>
                </li>
              ))}
            </ol>
            <Reveal className="mt-8">
              <a
                href="#contact"
                className="group inline-flex h-[52px] items-center gap-3 rounded-full bg-teal-ink px-7 text-[15px] font-semibold text-paper-hi transition-colors hover:bg-red"
              >
                Explore impact
                <span aria-hidden className="arrow">
                  →
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative min-h-[460px] md:min-h-[620px]">
            <figure className="grain absolute top-0 right-0 h-[64%] w-[86%] overflow-hidden rounded-[4px]">
              <Image
                src="/images/sugarjam-crowd-joy-01.jpg"
                alt="A couple laughing in lawn chairs among the crowd at Sugar Jam"
                fill
                sizes="(min-width: 1024px) 40vw, 86vw"
                className="grade object-cover object-[40%_50%]"
              />
            </figure>
            <figure className="grain absolute bottom-0 left-0 h-[48%] w-[62%] overflow-hidden rounded-[4px] ring-[6px] ring-gold">
              <Image
                src="/images/sugarjam-sunset-crowd-01.jpg"
                alt="Golden-hour sun bursting through an oak over a lawn full of people"
                fill
                sizes="(min-width: 1024px) 30vw, 62vw"
                className="grade object-cover object-[55%_55%]"
              />
            </figure>
            <p className="display-italic absolute right-0 bottom-[6%] hidden max-w-[12ch] text-right text-[26px] leading-[1.05] text-teal-ink sm:block md:text-[32px]">
              Sugar Mill Pond, Youngsville
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
