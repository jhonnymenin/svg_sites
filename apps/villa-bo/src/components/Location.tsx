import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Car, Footprints } from "lucide-react";
import { content } from "@/content/site";
import { Icon } from "./Icon";
import { SectionHead } from "./SectionHead";

const l = content.location;

/**
 * Evening in Jardins: the page's one night band. It opens on the view over
 * the neighbourhood's tree canopy, which sinks into the dark band so the
 * heading can sit on the horizon. Distances are set like a timetable — the
 * minutes are the headline, the place is the caption.
 */
export function Location() {
  return (
    <section id="location" aria-labelledby="location-title" className="on-dark bg-night text-cream">
      <figure className="relative h-[clamp(360px,52vw,720px)] overflow-hidden">
        <Image src={l.view.src} alt={l.view.alt} fill sizes="100vw" className="grade-facade object-cover object-[50%_62%]" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, #16110e 0%, rgba(22,17,14,0.72) 24%, rgba(22,17,14,0.12) 58%, rgba(22,17,14,0.3) 100%)",
          }}
        />
        <figcaption className="label absolute top-[clamp(20px,3vw,40px)] right-[var(--gutter)] text-cream/75">{l.viewCaption}</figcaption>
      </figure>

      <div className="frame relative -mt-[clamp(110px,15vw,230px)] grid gap-y-14 pb-[clamp(80px,10vw,160px)] lg:grid-cols-12 lg:gap-x-[clamp(24px,3vw,56px)]">
        <div className="lg:col-span-4">
          <SectionHead id="location-title" eyebrow={l.eyebrow} title={l.title} intro={l.intro} tone="dark" />
        </div>

        <ol className="grid grid-cols-2 border-t border-cream/15 lg:col-span-8 lg:mt-[clamp(150px,15vw,230px)] lg:grid-cols-3">
          {l.places.map((p, i) => {
            const Mode = p.mode === "walk" ? Footprints : Car;
            return (
              <li
                key={p.name}
                className="border-b border-cream/15 max-lg:odd:border-r lg:[&:not(:nth-child(3n))]:border-r"
              >
                <RevealItem index={i} className={`group flex h-full flex-col py-7 sm:px-7 lg:py-10 ${i % 2 === 0 ? "max-sm:pr-4" : "max-sm:pl-4"}`}>
                  <div className="flex flex-col items-start gap-3 text-cream/55 sm:flex-row sm:items-center sm:justify-between">
                    <Icon name={p.icon} size={22} className="text-terra-soft" />
                    <span className="label">{p.category}</span>
                  </div>
                  <div className="mt-8 flex items-end gap-3 sm:mt-10">
                    <span className="num text-[clamp(64px,7vw,104px)] leading-[0.78] text-cream transition-colors duration-500 group-hover:text-terra-soft">
                      {p.minutes}
                    </span>
                    <span className="mb-1 flex flex-col gap-1 text-cream/60">
                      <Mode aria-hidden size={15} strokeWidth={1.1} />
                      <span className="label">{p.mode === "walk" ? l.walk : l.drive}</span>
                    </span>
                  </div>
                  <p className="serif mt-6 text-[19px] leading-[1.15] text-cream sm:text-[23px]">{p.name}</p>
                </RevealItem>
              </li>
            );
          })}
        </ol>

        {/* Getting around — practical facts in the margin column. */}
        <Reveal className="lg:col-span-4">
          <p className="label text-terra-soft">{l.transport.label}</p>
          <ul className="mt-6 space-y-5">
            {l.transport.items.map((t) => (
              <li key={t.name}>
                <p className="serif text-[20px] leading-tight text-cream">{t.name}</p>
                <p className="mt-1 text-[13.5px] leading-[1.5] text-cream/60">{t.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* A day in Jardins — the neighbourhood as an itinerary, read like a
            timeline across the page. */}
        <div className="lg:col-span-8">
          <p className="label text-terra-soft">{l.day.label}</p>
          <ol className="mt-6 grid gap-x-6 gap-y-8 border-t border-cream/15 pt-7 sm:grid-cols-2 xl:grid-cols-4">
            {l.day.steps.map((st, i) => (
              <li key={st.time}>
                <RevealItem index={i}>
                  <p className="flex items-center gap-3">
                    <span className="num text-[15px] tracking-normal text-terra-soft">{String(i + 1).padStart(2, "0")}</span>
                    <span className="label text-cream/55">{st.time}</span>
                  </p>
                  <p className="pretty serif mt-3 text-[18px] leading-[1.4] text-cream/90">{st.text}</p>
                </RevealItem>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
