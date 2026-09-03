import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionEyebrow } from "./SectionEyebrow";

const SERVICES = [
  { label: "Strategy", detail: "Market insight & brand strategy" },
  { label: "Development", detail: "Real estate & project advisory" },
  { label: "Operations", detail: "Systems, staffing & profitability" },
  { label: "Growth", detail: "Capital strategy & long-term value" },
];

export function SCAdvising() {
  return (
    <section id="sc-advising" className="bg-rust py-10 md:py-14">
      <Container>
        <Reveal className="flex flex-col gap-6 border-b border-cream/25 pb-6 md:flex-row md:items-end md:justify-between md:pb-8">
          <div>
            <SectionEyebrow index={5} tone="dark" className="mb-2" />
            <h2 className="font-display text-[30px] font-bold uppercase leading-none text-white sm:text-[36px] md:text-[40px]">
              SC Advising
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.4] text-cream/90">
            Strategic guidance for brands, real estate, design, operations,
            and growth. We help strong ideas become great businesses.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 divide-y divide-cream/25 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 md:mt-8">
          {SERVICES.map(({ label, detail }, i) => (
            <div key={label} className="py-5 first:pt-0 sm:px-6 sm:py-0 sm:first:pl-0 lg:px-7">
              <span className="font-display text-[13px] font-bold text-cream/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-[18px] font-bold uppercase leading-none text-white">
                {label}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.35] text-cream/85">{detail}</p>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="mt-8 inline-flex items-center justify-center bg-ink px-8 py-[11px] font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-cream transition-all duration-150 hover:-translate-y-[1px] hover:bg-black hover:shadow-[0_4px_0_-1px_rgba(0,0,0,0.5)] md:mt-10"
          style={{ borderRadius: "var(--radius-control)" }}
        >
          Learn More
        </a>
      </Container>
    </section>
  );
}
