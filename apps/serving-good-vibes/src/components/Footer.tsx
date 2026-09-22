import { SgvMark } from "@sgv/brand";
import { Container } from "./Container";
import { StripeRule } from "./StripeRule";

const EXPLORE = [
  [
    { label: "Events", href: "#events" },
    { label: "Stays", href: "#stays" },
    { label: "Hospitality", href: "#hospitality" },
  ],
  [
    { label: "Braziliana", href: "#braziliana" },
    { label: "Production & Media", href: "#production-media" },
    { label: "Community & Development", href: "#community" },
  ],
];
const COMPANY = [
  { label: "About Us", href: "#about" },
  { label: "Our Story", href: "#about" },
  { label: "Contact", href: "#contact" },
];
const RESOURCES = [
  [
    { label: "News", href: "#" },
    { label: "Partners", href: "#" },
    { label: "FAQs", href: "#" },
  ],
  [
    { label: "Careers", href: "#" },
    { label: "Press Inquiries", href: "#" },
  ],
];

// Generic social glyphs drawn for this page (lucide v1 ships no brand icons). Links are placeholders.
const SOCIAL = [
  {
    label: "Instagram",
    path: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Facebook",
    path: <path d="M13.2 20v-7h2.4l.4-2.8h-2.8V8.5c0-.8.3-1.4 1.4-1.4H16V4.6c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2.1H8v2.8h2.4v7" fill="currentColor" />,
  },
  {
    label: "YouTube",
    path: (
      <>
        <rect x="3.5" y="6" width="17" height="12" rx="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.5 9.4v5.2l4.4-2.6z" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Spotify",
    path: (
      <>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 10.2c2.8-.8 5.8-.5 8.2.8M8.6 12.9c2.2-.6 4.5-.3 6.4.7M9.2 15.4c1.6-.4 3.2-.2 4.6.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
];

function Head({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-[12px] font-medium uppercase tracking-[0.14em] text-gold">{children}</h3>
  );
}

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-[9px]">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} className="text-[14px] leading-[1.25] text-cream-dim transition-colors duration-150 hover:text-white md:text-[13.5px]">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="ink-tooth relative border-t border-gold/70 bg-ink pt-12 pb-8 text-cream xl:pt-11">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 xl:grid-cols-[1.35fr_1.25fr_0.6fr_1fr_0.8fr] xl:gap-x-8">
          <div className="col-span-2 md:col-span-3 xl:col-span-1">
            <a href="#top" aria-label="Serving Good Vibes — back to top" className="inline-flex items-center gap-4">
              <SgvMark tone="light" height={52} />
              <span className="flex items-center gap-2.5">
                <span aria-hidden className="block h-[28px] w-px bg-white/25" />
                <span className="font-display text-[9.5px] font-medium uppercase leading-[1.3] tracking-[0.16em] text-white/60">
                  A Social
                  <br />
                  Entertainment
                  <br />
                  Company
                </span>
              </span>
            </a>
            <StripeRule className="mt-6 w-[183px]" />
            <p className="mt-5 max-w-[34ch] text-[13.5px] leading-[1.5] text-cream-dim/80">
              Experiences that bring people together — from Lafayette, Louisiana to São Paulo.
            </p>
          </div>

          <nav aria-label="Explore">
            <Head>Explore</Head>
            <div className="mt-4 grid grid-cols-1 gap-y-[9px] sm:grid-cols-2 sm:gap-x-6">
              <LinkList links={EXPLORE[0]} />
              <LinkList links={EXPLORE[1]} />
            </div>
          </nav>

          <nav aria-label="Company">
            <Head>Company</Head>
            <div className="mt-4">
              <LinkList links={COMPANY} />
            </div>
          </nav>

          <nav aria-label="Resources">
            <Head>Resources</Head>
            <div className="mt-4 grid grid-cols-1 gap-y-[9px] sm:grid-cols-2 sm:gap-x-6">
              <LinkList links={RESOURCES[0]} />
              <LinkList links={RESOURCES[1]} />
            </div>
          </nav>

          <div>
            <Head>Follow us</Head>
            <ul className="mt-4 flex gap-2.5">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href="#"
                    aria-label={`Serving Good Vibes on ${s.label}`}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/35 text-cream transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden>
                      {s.path}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 text-[12.5px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Serving Good Vibes. A Social Entertainment Company.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-white">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
