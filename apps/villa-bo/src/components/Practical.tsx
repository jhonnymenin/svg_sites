import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { content } from "@/content/site";
import { Icon } from "./Icon";
import { JardinsMap } from "./JardinsMap";
import { SectionHead } from "./SectionHead";

const p = content.practical;

export function Practical() {
  return (
    <section id="practical" aria-labelledby="practical-title" className="frame py-[clamp(80px,10vw,160px)]">
      <div className="grid gap-y-16 lg:grid-cols-12 lg:gap-x-[clamp(24px,3vw,56px)]">
        <div className="lg:col-span-6">
          <SectionHead id="practical-title" eyebrow={p.eyebrow} title={p.title} />

          <ul className="mt-12 grid grid-cols-2 gap-x-5 border-t hairline sm:gap-x-10">
            {p.items.map((it, i) => (
              <li key={it.label} className="border-b hairline">
                <RevealItem index={i} className="flex h-full items-center gap-3 py-[13px] sm:gap-4">
                  <Icon name={it.icon} size={19} className="shrink-0 text-terra" />
                  <span className="text-[13px] leading-[1.35] text-ink-2 sm:text-[14.5px]">{it.label}</span>
                </RevealItem>
              </li>
            ))}
          </ul>

          <Reveal className="mt-12">
            <address className="not-italic">
              <p className="label text-terra">{p.locationLabel}</p>
              <p className="serif mt-4 text-[26px] leading-[1.25] text-ink sm:text-[30px]">
                {p.address[0]}
                <br />
                <span className="text-ink-2">{p.address[1]}</span>
                <br />
                <span className="text-ink-3">{p.address[2]}</span>
              </p>
            </address>
            <a
              href={p.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline label-lg mt-6 inline-flex items-center gap-2 text-terra"
            >
              {p.directions}
              <ArrowUpRight aria-hidden size={15} strokeWidth={1.25} />
            </a>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6 lg:self-start lg:sticky lg:top-[110px]" delay={0.1}>
          <figure className="border border-[var(--rule)] bg-paper-2 p-2 sm:p-3">
            <JardinsMap />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
