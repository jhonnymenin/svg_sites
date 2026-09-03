import Image from "next/image";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionEyebrow } from "./SectionEyebrow";

const PEOPLE = [
  { img: "/people/p1.jpg", offset: "md:mt-0" },
  { img: "/people/p2.jpg", offset: "md:mt-10" },
  { img: "/people/p3.jpg", offset: "md:mt-0" },
  { img: "/people/p4.jpg", offset: "md:mt-14" },
  { img: "/people/p5.jpg", offset: "md:mt-4" },
];

export function OurPeople() {
  return (
    <section id="our-people" className="paper-grain bg-parchment py-10 md:py-14">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionEyebrow index={4} tone="light" className="mb-2" />
            <h2 className="font-display text-[30px] font-bold uppercase leading-none text-ink sm:text-[36px] md:text-[42px]">
              Our People
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.4] text-ink/75">
            A team of builders, doers, creators, and curators who lead with
            heart and deliver with excellence.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rail mt-8 flex gap-4 overflow-x-auto px-(--gutter) -mx-(--gutter) md:mt-14 md:gap-5 md:overflow-visible md:px-0 md:mx-0">
            {PEOPLE.map(({ img, offset }, i) => (
              <div key={img} className={`group w-[150px] shrink-0 sm:w-[180px] md:w-[19%] ${offset}`}>
                <div
                  className="relative aspect-[3/4] overflow-hidden"
                  style={{ borderRadius: "var(--radius-card)" }}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover grayscale-[55%] transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                    style={{ objectPosition: "50% 25%" }}
                  />
                </div>
                <span aria-hidden className="mt-2 block h-[2px] w-6 bg-rust" />
                <span className="mt-1 block font-display text-[11px] font-semibold uppercase tracking-[0.08em] text-ink/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <a
          href="#"
          className="mt-8 inline-flex items-center justify-center border border-ink px-8 py-[11px] font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-ink transition-all duration-150 hover:-translate-y-[1px] hover:bg-ink hover:text-cream md:mt-10"
          style={{ borderRadius: "var(--radius-control)" }}
        >
          Meet the Team
        </a>
      </Container>
    </section>
  );
}
