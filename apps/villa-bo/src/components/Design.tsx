import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { content } from "@/content/site";
import { Icon } from "./Icon";
import { SectionHead } from "./SectionHead";

const d = content.design;

export function Design() {
  return (
    <section id="design" aria-labelledby="design-title" className="grain relative bg-paper-2">
      <div className="frame grid gap-y-16 py-[clamp(80px,10vw,160px)] lg:grid-cols-12 lg:gap-x-[clamp(24px,3vw,56px)]">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <Reveal className="relative pr-[18%] pb-[22%] lg:pr-[14%]">
            <div className="zoom relative aspect-[4/5] overflow-hidden bg-paper-3">
              {/* PLACEHOLDER — replace with Villa BO bathroom / linen detail. */}
              <Image src={d.imageMain.src} alt={d.imageMain.alt} fill sizes="(min-width:1024px) 34vw, 82vw" className="grade object-cover object-[78%_38%]" />
            </div>
            <div className="zoom absolute bottom-0 right-0 aspect-[4/3] w-[64%] overflow-hidden border-[8px] border-paper-2 bg-paper-3 lg:-right-[6%]">
              {/* PLACEHOLDER — replace with Villa BO kitchen detail. */}
              <Image src={d.imageSecondary.src} alt={d.imageSecondary.alt} fill sizes="(min-width:1024px) 22vw, 50vw" className="grade object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7 lg:self-center">
          <SectionHead id="design-title" eyebrow={d.eyebrow} title={d.title} intro={d.intro} />

          <ol className="mt-12 grid grid-cols-2 border-t hairline">
            {d.attributes.map((a, i) => (
              <li
                key={a.label}
                className={`border-b hairline ${i % 2 === 0 ? "border-r pr-4 sm:pr-8" : "pl-4 sm:pl-8"}`}
              >
                <RevealItem index={i} className="group flex h-full flex-col gap-6 py-7 sm:flex-row sm:items-center sm:gap-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-terra/35 text-terra transition-colors duration-500 group-hover:bg-terra group-hover:text-cream">
                    <Icon name={a.icon} size={21} />
                  </span>
                  <span>
                    <span className="num block text-[13px] tracking-normal text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                    <span className="serif mt-1 block text-[21px] leading-[1.15] text-ink sm:text-[23px]">{a.label}</span>
                  </span>
                </RevealItem>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
