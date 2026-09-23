import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Container } from "./Container";

const WAYS = [
  {
    n: "01",
    label: "Events",
    body: "Signature festivals, community gatherings and unforgettable moments.",
    href: "#events",
    color: "var(--red)",
  },
  {
    n: "02",
    label: "Stays",
    body: "Distinctive properties designed for comfort, connection and inspiration.",
    href: "#stays",
    color: "var(--olive)",
  },
  {
    n: "03",
    label: "Hospitality",
    body: "Food, beverages, rentals and services that make every moment special.",
    href: "#hospitality",
    color: "var(--gold)",
  },
  {
    n: "04",
    label: "Production & Media",
    body: "Stories that move people and content that creates impact.",
    href: "#production-media",
    color: "var(--deep-teal)",
  },
  {
    n: "05",
    label: "Community & Development",
    body: "Investing in people, culture and the future of our communities.",
    href: "#community",
    color: "var(--teal)",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="paper relative overflow-hidden py-(--band-y)">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20 xl:gap-28">
          <Reveal>
            <p className="eyebrow text-red">Who we are</p>
            <h2
              id="about-title"
              className="display mt-6 text-[clamp(32px,3.7vw,54px)] leading-[1.02] text-deep-teal"
            >
              We set the tone, remove the stress and deliver moments worth remembering —{" "}
              <span className="display-italic text-red">
                because how people feel is just as important as how something is executed.
              </span>
            </h2>
            <p className="mt-8 max-w-[38rem] text-[17px] leading-[1.6] text-ink/80">
              After 15 years of Social Entertainment Productions, Serving Good Vibes is the service, experience,
              lifestyle and activation-driven company under the Social Entertainment umbrella. Whether we’re
              welcoming guests, producing events or consulting with partners, we create, host and advise on
              experiences that bring people together and strengthen communities.
            </p>
            <p className="mt-6 text-[15px] font-semibold text-deep-teal">
              Events. Experiences. Hospitality. Activations. Community. Lifestyle.
            </p>
          </Reveal>

          {/* Stacked prints — the people who serve the vibes */}
          <Reveal delay={0.1} className="relative mx-auto h-[440px] w-full max-w-[460px] sm:h-[520px] lg:mx-0 lg:h-auto lg:min-h-[600px] lg:max-w-none">
            <figure className="grain absolute top-0 right-0 w-[64%] rotate-[2.5deg] bg-paper-hi p-2.5 pb-10 shadow-[0_24px_50px_-24px_rgba(29,25,20,0.55)] lg:w-[62%]">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/fi-joy-portrait-01.jpg"
                  alt="A joyful woman in tie-dye raising a Fest Vibes cup"
                  fill
                  sizes="(min-width: 1024px) 24vw, 60vw"
                  className="grade object-cover object-[50%_40%]"
                />
              </div>
              <figcaption className="absolute bottom-3 left-3 text-[12px] font-medium text-ink/60">
                Festival International, 2025
              </figcaption>
            </figure>
            <figure className="grain absolute bottom-0 left-0 w-[70%] -rotate-[3deg] bg-paper-hi p-2.5 pb-10 shadow-[0_24px_50px_-24px_rgba(29,25,20,0.55)] lg:bottom-[-4%]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/dtr-staff-bar-01.jpg"
                  alt="Two bar staff in Downtown Rising t-shirts smiling behind the drinks station"
                  fill
                  sizes="(min-width: 1024px) 28vw, 66vw"
                  className="grade object-cover object-[45%_45%]"
                />
              </div>
              <figcaption className="absolute bottom-3 left-3 text-[12px] font-medium text-ink/60">
                Behind the bar, Downtown Rising
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-24 md:mt-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h3 className="display text-[clamp(36px,4.6vw,68px)] text-deep-teal">
              Five ways we serve <span className="text-red">good vibes</span>
            </h3>
          </Reveal>
          <ol className="mt-10 grid border-t border-ink/15 md:grid-cols-2 lg:grid-cols-5">
            {WAYS.map((w, i) => (
              <li key={w.label} className="border-b border-ink/15 md:odd:border-r lg:border-r lg:border-b-0 lg:last:border-r-0">
                <RevealItem index={i} className="h-full">
                  <a href={w.href} className="group relative flex h-full flex-col px-1 pt-8 pb-8 md:px-6 lg:min-h-[300px] lg:px-5 xl:px-7">
                    <span
                      aria-hidden
                      className="absolute top-[-1px] left-0 h-[6px] w-12 transition-[width] duration-500 ease-out group-hover:w-full"
                      style={{ background: w.color }}
                    />
                    <span className="display text-[22px] tabular-nums" style={{ color: w.color }}>
                      {w.n}
                    </span>
                    <span className="display mt-5 text-[28px] leading-[1] text-deep-teal xl:text-[32px]">{w.label}</span>
                    <span className="mt-4 max-w-[30ch] text-[15px] leading-[1.55] text-ink/70">{w.body}</span>
                    <span className="mt-auto inline-flex items-center gap-2 pt-7 text-[14px] font-semibold text-deep-teal">
                      <span className="stripe-link">Explore</span>
                      <span aria-hidden className="arrow">
                        →
                      </span>
                    </span>
                  </a>
                </RevealItem>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
