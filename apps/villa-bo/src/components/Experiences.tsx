import Image from "next/image";
import { RevealItem } from "@sgv/brand/motion";
import { content } from "@/content/site";
import { Icon } from "./Icon";
import { SectionHead } from "./SectionHead";

const d = content.dining;
const m = content.medical;

/** Restaurants, bars & cafés beside Medical Tourism — as in the mockup, two
 *  arguments sharing one spread, split by a single hairline. */
export function Experiences() {
  return (
    <div className="frame grid gap-y-24 py-[clamp(80px,10vw,160px)] lg:grid-cols-12 lg:gap-x-0">
      <section id="experiences" aria-labelledby="experiences-title" className="lg:col-span-7 lg:pr-[clamp(32px,4vw,72px)]">
        <SectionHead id="experiences-title" eyebrow={d.eyebrow} title={d.title} intro={d.intro} />

        <ul className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-4 lg:gap-5">
          {d.groups.map((g, i) => (
            <li key={g.label}>
              <RevealItem index={i} className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] gap-5 sm:block">
                <figure className="zoom relative aspect-[4/5] overflow-hidden bg-paper-3">
                  {/* PLACEHOLDER — atmosphere only; not photographs of the named venues. */}
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width:1024px) 18vw, (min-width:640px) 30vw, 40vw" className="grade object-cover" />
                </figure>
                <div className="sm:mt-6">
                  <h3 className="label text-terra">{g.label}</h3>
                  <ul className="mt-4 space-y-[6px]">
                    {g.names.map((n) => (
                      <li key={n} className="serif text-[19px] leading-[1.25] text-ink">
                        {n}
                      </li>
                    ))}
                  </ul>
                  <p className="serif mt-3 text-[16px] italic text-ink-3">{d.more}</p>
                </div>
              </RevealItem>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="medical"
        aria-labelledby="medical-title"
        className="lg:col-span-5 lg:border-l lg:border-[var(--rule)] lg:pl-[clamp(32px,4vw,72px)]"
      >
        <SectionHead id="medical-title" eyebrow={m.eyebrow} title={m.title} intro={m.intro} />

        <ol className="mt-14 border-t hairline">
          {m.hospitals.map((h, i) => (
            <li key={h.name} className="border-b hairline">
              <RevealItem index={i} className="group flex items-center gap-5 py-6 sm:py-7">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-terra/35 text-terra transition-colors duration-500 group-hover:bg-terra group-hover:text-cream">
                  <Icon name={h.icon} size={21} />
                </span>
                <span className="serif flex-1 text-[24px] leading-[1.1] text-ink sm:text-[27px]">{h.name}</span>
                <span className="num text-[14px] tracking-normal text-ink-3">{String(i + 1).padStart(2, "0")}</span>
              </RevealItem>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
