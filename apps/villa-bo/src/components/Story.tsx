import Image from "next/image";
import { Reveal } from "@sgv/brand/motion";
import { content } from "@/content/site";

const s = content.story;

/**
 * The emotional centre of the page. Terracotta field, a quiet tribute in
 * light serif, and a framed image. The family photograph of BO has not been
 * supplied yet, so the frame holds a duotone historic map of the Jardins
 * instead — clearly labelled, and never a stand-in face.
 */
export function Story() {
  return (
    <section id="the-bo" aria-labelledby="story-title" className="on-dark grain relative overflow-hidden bg-terra text-cream">
      <div className="frame grid gap-y-16 py-[clamp(88px,11vw,176px)] lg:grid-cols-12 lg:gap-x-[clamp(24px,3vw,56px)]">
        <div className="lg:col-span-5 lg:self-center">
          <Reveal>
            <p className="label flex items-center gap-4 text-cream/70">
              <span className="num text-[15px] tracking-normal text-cream">{s.chapter}</span>
              <span>{s.eyebrow}</span>
              <span aria-hidden className="h-px flex-1 bg-cream/25" />
            </p>
            <h2 id="story-title" className="display mt-8 text-[clamp(56px,6.6vw,104px)] text-cream">
              <span className="block">{s.title[0]}</span>
              <span className="block italic">{s.title[1]}</span>
            </h2>
          </Reveal>

          <div className="mt-12 max-w-[26ch] space-y-6 sm:max-w-[30ch]">
            {s.paragraphs.map((p, i) => (
              <Reveal key={p} delay={0.08 * i}>
                <p className={`pretty serif leading-[1.4] ${i === 2 ? "text-[24px] italic text-cream sm:text-[27px]" : "text-[20px] text-cream/85 sm:text-[22px]"}`}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
          <figure>
            <div className="relative bg-cream p-3 sm:p-5 shadow-[0_50px_90px_-60px_rgba(20,8,4,0.8)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-terra-deep sm:aspect-[5/6]">
                {/* PLACEHOLDER — replace with the original BO / family photograph supplied by the client (do not alter faces). */}
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="(min-width:1024px) 44vw, 92vw"
                  className="object-cover object-[46%_50%] opacity-90 mix-blend-screen grayscale contrast-[1.25] brightness-[0.95]"
                />
                <div aria-hidden className="absolute inset-0 bg-[#efe3d1] mix-blend-multiply" />
                <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-terra-ink/20" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 bg-gradient-to-t from-terra-ink/85 to-transparent p-5 pt-20 sm:p-7 sm:pt-24">
                  <p className="serif max-w-[24ch] text-[17px] italic leading-snug text-cream sm:text-[19px]">{s.placeholderNote}</p>
                  <span className="label shrink-0 border border-cream/50 px-2 py-1 text-cream/85">Placeholder</span>
                </div>
              </div>
            </div>
            <figcaption className="label mt-4 text-cream/65">{s.placeholderCaption}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
