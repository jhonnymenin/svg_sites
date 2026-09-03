import { Logo } from "./Logo";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionEyebrow } from "./SectionEyebrow";

const OFFERINGS = [
  "Hospitality",
  "Experiences",
  "Events",
  "Media",
  "Community",
  "Catering",
  "Consulting",
  "Braziliana",
];

export function ServingGoodVibes() {
  return (
    <section id="serving-good-vibes" className="bg-forest py-10 md:py-14">
      <Container>
        <SectionEyebrow index={2} tone="dark" className="mb-8 md:mb-10" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Logo />
            <p className="mt-6 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
              A Major Platform of Social Entertainment
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-[1.5] text-cream/85">
              Serving Good Vibes is our hub for hospitality, experiences,
              events, media, community, catering, consulting, and the
              Braziliana cultural portfolio. It is how we bring ideas to
              life and culture to the community.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center justify-center bg-ochre px-8 py-[11px] font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-150 hover:-translate-y-[1px] hover:bg-gold-bright hover:shadow-[0_4px_0_-1px_rgba(0,0,0,0.35)]"
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Enter Serving Good Vibes
            </a>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="grid grid-cols-2 border-t border-gold/30 sm:grid-cols-4">
              {OFFERINGS.map((label, i) => (
                <div
                  key={label}
                  className="group relative border-r border-b border-gold/30 px-4 py-6 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(4n)]:border-r-0"
                >
                  <span className="font-display text-[11px] font-semibold text-gold/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 flex items-center gap-2 font-display text-[16px] font-bold uppercase leading-tight text-white transition-colors group-hover:text-gold-bright sm:text-[17px]">
                    {label}
                    <span
                      aria-hidden
                      className="translate-x-0 text-[13px] opacity-0 transition-all duration-150 group-hover:translate-x-1 group-hover:opacity-100"
                    >
                      →
                    </span>
                  </h3>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
