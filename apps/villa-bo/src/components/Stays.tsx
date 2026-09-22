import Image from "next/image";
import { RevealItem } from "@sgv/brand/motion";
import { content } from "@/content/site";
import { Icon } from "./Icon";
import { SectionHead } from "./SectionHead";

const s = content.stays;

/* Mosaic placements (desktop): a tall anchor frame, a stacked pair, and a
   wide lower band — an apartment read as a sequence of rooms. */
const PLACE = [
  "lg:col-[1/8] lg:row-[1/3] aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto", // living (anchor)
  "lg:col-[8/13] lg:row-[1/2] aspect-[4/3] lg:aspect-auto", // bedroom
  "lg:col-[8/13] lg:row-[2/3] aspect-[4/3] lg:aspect-auto", // chair
  "lg:col-[1/6] lg:row-[3/4] aspect-[4/3] lg:aspect-auto", // balcony
  "lg:col-[6/13] lg:row-[3/4] aspect-[4/3] lg:aspect-auto", // dining
];

export function Stays() {
  return (
    <section id="stay" aria-labelledby="stay-title" className="frame pt-[clamp(72px,10vw,150px)] pb-[clamp(80px,10vw,160px)]">
      <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-[clamp(24px,3vw,56px)]">
        <div className="lg:col-span-4 lg:sticky lg:top-[110px] lg:self-start">
          <SectionHead id="stay-title" eyebrow={s.eyebrow} chapter={s.chapter} title={s.title} intro={s.intro} />

          <ul className="mt-10 border-t hairline sm:grid sm:grid-cols-2 sm:gap-x-8 lg:block">
            {s.features.map((f, i) => (
              <li key={f.label} className="border-b hairline">
                <RevealItem index={i} className="flex items-start gap-4 py-[13px]">
                  <Icon name={f.icon} size={20} className="mt-[1px] shrink-0 text-terra" />
                  <span className="text-[14.5px] leading-[1.45] text-ink-2">{f.label}</span>
                </RevealItem>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 gap-[6px] sm:gap-2 lg:grid-cols-12 lg:grid-rows-[300px_300px_340px] xl:grid-rows-[330px_330px_380px]">
            {s.gallery.map((g, i) => (
              <figure
                key={g.src}
                className={`zoom group relative overflow-hidden bg-paper-3 ${PLACE[i]} ${i === 0 ? "col-span-2" : ""}`}
              >
                {/* PLACEHOLDER — replace with real Villa BO apartment photography. */}
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes={i === 0 ? "(min-width:1024px) 38vw, 100vw" : "(min-width:1024px) 28vw, 50vw"}
                  className="grade object-cover"
                />
                <figcaption className="pointer-events-none absolute left-0 bottom-0 flex items-center gap-3 bg-paper px-3 py-2 label text-ink-2 sm:px-4 sm:py-[10px]">
                  <span className="num text-[13px] tracking-normal text-terra">{String(i + 1).padStart(2, "0")}</span>
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
