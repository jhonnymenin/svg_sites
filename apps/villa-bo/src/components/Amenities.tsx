import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { content } from "@/content/site";
import { Icon } from "./Icon";
import { SectionHead } from "./SectionHead";

const a = content.amenities;
const ROMAN = ["i", "ii", "iii", "iv"];
/* A slow descending stagger across the row — reads left to right like steps. */
const OFFSET = ["lg:mt-0", "lg:mt-16", "lg:mt-8", "lg:mt-24"];

export function Amenities() {
  return (
    <section id="amenities" aria-labelledby="amenities-title" className="py-[clamp(80px,10vw,160px)]">
      <div className="frame grid gap-8 lg:grid-cols-12 lg:items-end">
        <SectionHead id="amenities-title" eyebrow={a.eyebrow} title={a.title} className="lg:col-span-7" />
        <p className="balance serif max-w-[34ch] text-[19px] leading-[1.5] text-ink-2 lg:col-span-4 lg:col-start-9 lg:pb-3">
          {a.intro}
        </p>
      </div>

      <ul style={{ scrollPaddingInline: "var(--gutter)" }}
        className="rail mt-14 flex gap-3 overflow-x-auto px-[var(--gutter)] pb-2 lg:frame lg:mt-20 lg:grid lg:grid-cols-4 lg:gap-[clamp(12px,1.4vw,24px)] lg:overflow-visible">
        {a.items.map((item, i) => (
          <li key={item.label} className={`w-[78vw] shrink-0 sm:w-[44vw] lg:w-auto ${OFFSET[i]}`}>
            <RevealItem index={i}>
              <figure className="zoom relative aspect-[3/4] overflow-hidden bg-paper-3">
                <Image src={item.src} alt={item.alt} fill sizes="(min-width:1024px) 24vw, 78vw" className="grade object-cover" style={{ objectPosition: item.pos }} />
              </figure>
              <div className="mt-5 flex items-start gap-4 border-t hairline pt-5">
                <Icon name={item.icon} size={22} className="mt-1 shrink-0 text-terra" />
                <div>
                  <span className="label text-ink-3">{ROMAN[i]}</span>
                  <p className="serif mt-1 text-[22px] leading-[1.15] text-ink">{item.label}</p>
                </div>
              </div>
            </RevealItem>
          </li>
        ))}
      </ul>

      {/* The rest of the house, at a smaller scale: a contact-sheet strip of
          the shared spaces, so the four amenities above stay the headline. */}
      <div className="frame mt-[clamp(64px,8vw,120px)] grid gap-6 lg:grid-cols-12 lg:gap-x-[clamp(24px,3vw,56px)]">
        <Reveal className="lg:col-span-3">
          <p className="label flex items-center gap-4 text-ink-3">
            <span aria-hidden className="h-px w-8 bg-terra" />
            {a.building.label}
          </p>
        </Reveal>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4 lg:col-span-9">
          {a.building.items.map((b, i) => (
            <li key={b.src}>
              <RevealItem index={i}>
                <figure>
                  <div className="zoom relative aspect-[4/3] overflow-hidden bg-paper-3">
                    <Image src={b.src} alt={b.alt} fill sizes="(min-width:1024px) 17vw, (min-width:640px) 24vw, 46vw" className="grade object-cover" style={{ objectPosition: b.pos }} />
                  </div>
                  <figcaption className="mt-3 flex items-baseline gap-3">
                    <span className="num text-[13px] tracking-normal text-terra">{String(i + 1).padStart(2, "0")}</span>
                    <span className="serif text-[17px] leading-tight text-ink">{b.caption}</span>
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
