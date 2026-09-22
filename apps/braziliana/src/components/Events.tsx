import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealItem } from "@sgv/brand/motion";

/* PLACEHOLDER photos — Brazilian street-festival and capoeira images standing
   in for Braziliana's own event photography. */
const EVENTS = [
  {
    title: "Annual Braziliana/SGV Benefit",
    img: "/images/passista.jpg",
    alt: "A samba dancer in a jewelled golden headdress and green feathers, beaming.",
    pos: "object-[45%_40%]",
    bar: "bg-ouro",
  },
  {
    title: "Annual Braziliana Summer Fest",
    img: "/images/frevo-yellow.jpg",
    alt: "A frevo dancer spins a yellow umbrella under blue street streamers as a crowd dances around her.",
    pos: "object-[42%_50%]",
    bar: "bg-anil",
  },
  {
    title: "Workshops & Talks",
    img: "/images/capoeira.jpg",
    alt: "Two capoeiristas play inside a packed roda while the circle claps and sings.",
    pos: "object-[50%_55%]",
    bar: "bg-urucum",
  },
  {
    title: "Community Initiatives",
    img: "/images/olinda-street.jpg",
    alt: "A street full of neighbours with rainbow umbrellas between colourful colonial houses.",
    pos: "object-[40%_50%]",
    bar: "bg-folha",
  },
];

export function Events() {
  return (
    <section id="events" aria-labelledby="events-title" className="paper overflow-hidden border-t border-ink/10 bg-paper-2">
      <div className="lg:flex lg:items-stretch">
        <div className="shell pb-10 pt-14 sm:pt-20 lg:w-[31%] lg:max-w-none lg:shrink-0 lg:py-20 lg:pr-10 xl:w-[27%]">
          <Reveal>
            <h2 id="events-title" className="display text-[clamp(56px,6vw,88px)] text-mata">
              Events
            </h2>
            <p className="mt-5 max-w-[22rem] text-[18px] font-medium leading-[1.4] text-ink">
              Bringing people together through unforgettable experiences.
            </p>
            <ul className="losango-list mt-6 grid gap-2 text-[16px] text-ink-soft">
              {EVENTS.map((e) => (
                <li key={e.title}>{e.title}</li>
              ))}
            </ul>
            <a href="#events" className="btn mt-8 bg-mata text-paper hover:bg-folha">
              See upcoming events <ArrowRight aria-hidden size={17} className="arrow" />
            </a>
          </Reveal>
        </div>

        <ul
          className="snap-x-strip flex gap-3 overflow-x-auto px-[var(--gutter)] pb-14 lg:grid lg:flex-1 lg:grid-cols-4 lg:gap-2 lg:overflow-visible lg:p-0"
          aria-label="Event series"
        >
          {EVENTS.map((e, i) => (
            <li key={e.title} className="w-[76vw] max-w-[340px] shrink-0 sm:w-[44vw] lg:w-auto lg:max-w-none">
              <RevealItem index={i} className="h-full">
                <figure className="group relative h-[440px] overflow-hidden bg-ink sm:h-[500px] lg:h-full lg:min-h-[560px]">
                  <Image
                    src={e.img}
                    alt={e.alt}
                    fill
                    sizes="(min-width: 1024px) 18vw, 76vw"
                    className={`grade object-cover ${e.pos} transition-transform duration-[1.2s] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]`}
                  />
                  <div aria-hidden className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,14,10,.82)_0%,rgba(12,14,10,.25)_38%,transparent_60%)]" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-paper">
                    <span aria-hidden className={`mb-3 block h-[4px] w-10 ${e.bar} transition-[width] duration-500 group-hover:w-20`} />
                    <span className="font-body text-[11px] font-bold tracking-[0.24em] text-paper/70">0{i + 1}</span>
                    <span className="display mt-1 block text-[28px] leading-[0.95] xl:text-[32px]">{e.title}</span>
                  </figcaption>
                </figure>
              </RevealItem>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
