import Image from "next/image";
import { ArrowRight, MapPin, Music2 } from "lucide-react";
import { Reveal, RevealItem } from "@sgv/brand/motion";

/* The recurring series from the approved copy spec — named, not illustrated. */
const SERIES = [
  "Annual Braziliana/SGV Benefit",
  "Annual Braziliana Summer Fest",
  "Workshops & Talks",
  "Community Initiatives",
];

/* Real moments from Braziliana nights — proof, shown as pasted prints. */
const PAST = [
  {
    title: "DTA! ft. Braziliana",
    note: "Dancing under the string lights, band in the gazebo",
    img: "/images/event-dta-braziliana.jpg",
    alt: "A crowd dances on a brick plaza at dusk under string lights while the band plays in the gazebo.",
    pos: "object-[40%_70%]",
    ratio: "aspect-[4/3]",
    tilt: "-rotate-[1.6deg]",
    wrap: "lg:col-span-2",
    sizes: "(min-width: 1024px) 36vw, 78vw",
  },
  {
    title: "Bossa Nova @ The Collective",
    note: "Congas, flags and a full room",
    img: "/images/event-bossa-nova-collective.jpg",
    alt: "A vocalist sings between green congas and a drum kit, Brazilian and US flags hanging above.",
    pos: "object-[48%_62%]",
    ratio: "aspect-[4/3.4]",
    tilt: "rotate-[1.8deg]",
    wrap: "",
    sizes: "(min-width: 1024px) 18vw, 78vw",
  },
  {
    title: "Community, in full color",
    note: "Carnaval Courtyard at Chez La Fête",
    img: "/images/community-facepaint.jpg",
    alt: "A smiling guest in full blue-and-orange festival face paint and strings of beads.",
    pos: "object-[50%_30%]",
    ratio: "aspect-[4/3.4]",
    tilt: "-rotate-[1.2deg]",
    wrap: "",
    sizes: "(min-width: 1024px) 18vw, 78vw",
  },
];

function NextUp() {
  return (
    <article
      aria-labelledby="next-title"
      className="group relative flex flex-col bg-mata text-paper shadow-[0_30px_50px_-30px_rgba(0,0,0,.7)]"
    >
      <div className="relative aspect-[4/4.1] overflow-hidden sm:aspect-[16/11] lg:aspect-[4/4.3]">
        <Image
          src="/images/band-bossa-nova-duo.jpg"
          alt="The Braziliana House Band: a guitarist-singer in a green shirt and a percussionist on green congas, backlit by sheer curtains."
          fill
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="grade-live object-cover object-[62%_20%] transition-transform duration-[1.4s] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]"
        />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(0deg,var(--mata)_0%,rgba(15,58,35,.35)_32%,transparent_55%)]" />
        {/* date stub */}
        <div className="absolute left-4 top-4 flex flex-col items-center bg-ouro px-4 pb-2.5 pt-2 text-mata-deep shadow-[0_8px_18px_-10px_rgba(0,0,0,.7)] sm:left-5 sm:top-5">
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.3em]">Sat</span>
          <span className="display text-[44px] leading-[0.9]">19</span>
          <span className="font-body text-[11px] font-bold uppercase tracking-[0.3em]">Dec</span>
        </div>
        <span className="absolute right-4 top-5 rotate-[4deg] border-2 border-paper/85 bg-mata/30 px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-paper sm:right-5">
          Details coming soon
        </span>
      </div>
      <div className="relative px-5 pb-6 pt-1 sm:px-7 sm:pb-7">
        <p className="kicker text-[11px] text-ouro">Next up</p>
        <h3 id="next-title" className="display mt-2 text-[clamp(40px,3.4vw,54px)] leading-[0.9]">
          Holiday Open House
        </h3>
        <ul className="mt-4 grid gap-2 text-[15px] leading-snug text-paper/85">
          <li className="flex items-start gap-2.5">
            <Music2 aria-hidden size={16} className="mt-0.5 shrink-0 text-ouro" />
            Live music by the Braziliana House Band
          </li>
          <li className="flex items-start gap-2.5">
            <MapPin aria-hidden size={16} className="mt-0.5 shrink-0 text-ouro" />
            SGV HQ &middot; Downtown Lafayette
          </li>
        </ul>
      </div>
    </article>
  );
}

export function Events() {
  return (
    <section id="events" aria-labelledby="events-title" className="paper overflow-hidden border-t border-ink/10 bg-paper-2">
      <div className="shell grid grid-cols-1 gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24 xl:gap-10">
        <Reveal className="lg:col-span-3">
          <h2 id="events-title" className="display text-[clamp(56px,6vw,88px)] text-mata">
            Events
          </h2>
          <p className="mt-5 max-w-[22rem] text-[18px] font-medium leading-[1.4] text-ink">
            Bringing people together through unforgettable experiences.
          </p>
          <p className="kicker mt-8 text-[11px] text-ink/60">Our series</p>
          <ul className="losango-list mt-3 grid gap-2 text-[16px] text-ink-soft">
            {SERIES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <a href="#join" className="btn mt-8 bg-mata text-paper hover:bg-folha">
            Get event updates <ArrowRight aria-hidden size={17} className="arrow" />
          </a>
        </Reveal>

        <RevealItem index={0} className="lg:col-span-4">
          <NextUp />
        </RevealItem>

        <div className="lg:col-span-5">
          <p className="kicker flex items-center gap-3 text-[11px] text-ink/60">
            Past moments
            <span aria-hidden className="h-px flex-1 bg-ink/20" />
          </p>
          <ul
            className="snap-x-strip -mx-[var(--gutter)] mt-6 flex gap-5 overflow-x-auto px-[var(--gutter)] pb-6 pt-3 lg:mx-0 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-8 lg:overflow-visible lg:p-0"
            aria-label="Past Braziliana moments"
          >
            {PAST.map((p, i) => (
              <li key={p.title} className={`w-[74vw] max-w-[340px] shrink-0 lg:w-auto lg:max-w-none ${p.wrap}`}>
                <RevealItem index={i + 1}>
                  <figure
                    className={`print group ${i === 0 ? "print-tape" : ""} ${p.tilt} transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1 hover:rotate-0`}
                  >
                    <div className={`relative overflow-hidden ${p.ratio}`}>
                      <Image
                        src={p.img}
                        alt={p.alt}
                        fill
                        sizes={p.sizes}
                        className={`grade-live object-cover ${p.pos} transition-transform duration-[1.2s] group-hover:scale-[1.05]`}
                      />
                    </div>
                    <figcaption className="px-1 pb-1 pt-2.5">
                      <span className="block font-script text-[24px] leading-none text-urucum">{p.title}</span>
                      <span className="mt-1 block text-[12px] font-semibold uppercase tracking-[0.12em] text-ink/60">
                        {p.note}
                      </span>
                    </figcaption>
                  </figure>
                </RevealItem>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
