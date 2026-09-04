import { Container } from "./Container";
import { MasterLogo } from "./MasterLogo";
import { Reveal } from "./Reveal";
import { NewsletterForm } from "./NewsletterForm";

const LINKS = ["Food + Drink", "Serving Good Vibes", "Now + Next", "Our People", "SC Advising", "Contact"];

/** lucide-react ships no brand glyphs in this version — minimal inline marks instead. */
const SOCIALS = [
  {
    name: "Instagram",
    path: "M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.55.55.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.13s-.01 3.07-.06 4.13c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.07-.01-4.13-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.07 2 14.7 2 12s.01-3.07.06-4.13c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76a4.9 4.9 0 0 1 1.76-1.15c.64-.25 1.37-.42 2.43-.47C8.93 2.01 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
  },
  {
    name: "Facebook",
    path: "M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-.96.27-1.6 1.65-1.6H17V3.5c-.3-.04-1.3-.13-2.46-.13-2.44 0-4.1 1.49-4.1 4.22v2.35H7.6v3.3h2.84V22h3.06Z",
  },
  {
    name: "YouTube",
    path: "M21.6 7.2s-.2-1.5-.85-2.15c-.8-.86-1.7-.86-2.12-.91C15.7 4 12 4 12 4h-.01s-3.7 0-6.63.14c-.4.05-1.3.05-2.12.91C2.6 5.7 2.4 7.2 2.4 7.2S2.2 9 2.2 10.75v1.5C2.2 14 2.4 15.8 2.4 15.8s.2 1.5.85 2.15c.82.86 1.9.83 2.38.92 1.73.17 7.37.22 7.37.22s3.7-.01 6.63-.15c.4-.05 1.3-.05 2.12-.91.65-.65.85-2.15.85-2.15s.2-1.8.2-3.55v-1.5c0-1.75-.2-3.55-.2-3.55ZM9.98 14.5v-5.4l5.2 2.71-5.2 2.69Z",
  },
];

export function Footer() {
  return (
    <footer className="bg-ink pt-12 md:pt-16">
      <Container>
        <Reveal>
          <p className="max-w-3xl font-display text-[26px] font-bold uppercase leading-[1.05] text-cream sm:text-[34px] md:text-[42px]">
            Building places. Creating experiences.
            <br className="sm:hidden" /> Serving good vibes.
          </p>
        </Reveal>
      </Container>

      <div className="mt-10 bg-mustard py-6 md:mt-12">
        <Container className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-[16px] font-bold uppercase tracking-[0.02em] text-ink">
              Stay in the Loop
            </h3>
            <p className="mt-1 max-w-sm text-[13.5px] leading-[1.35] text-ink/80">
              Updates on openings, events, and everything good.
            </p>
          </div>
          <NewsletterForm />
        </Container>
      </div>

      <Container className="grid grid-cols-2 gap-y-10 py-10 sm:grid-cols-4 md:py-12">
        <div className="col-span-2 sm:col-span-1">
          <MasterLogo />
          <p className="mt-4 max-w-[16rem] text-[12px] leading-[1.5] text-cream/45">
            Social Entertainment builds hospitality brands and real-world
            experiences that bring people together.
          </p>
        </div>

        <div>
          <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-mustard">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5">
            {LINKS.map((l) => (
              <li key={l}>
                <a href="#" className="text-[13px] text-cream/60 transition-colors hover:text-cream">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-mustard">
            Company
          </h4>
          <ul className="mt-4 space-y-2.5">
            {["About Us", "Our Story", "Partner With Us", "Press"].map((l) => (
              <li key={l}>
                <a href="#" className="text-[13px] text-cream/60 transition-colors hover:text-cream">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-mustard">
            Follow Us
          </h4>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map(({ name, path }) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/30 text-cream/70 transition-colors hover:border-cream hover:text-cream"
              >
                <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" aria-hidden>
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-cream/10 py-5">
        <Container className="flex flex-col gap-2 text-[11.5px] text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Social Entertainment. All rights reserved.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-cream/70">Privacy</a>
            <a href="#" className="hover:text-cream/70">Terms</a>
          </span>
        </Container>
      </div>
    </footer>
  );
}
