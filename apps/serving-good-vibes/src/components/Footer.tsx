import { SgvMark } from "@sgv/brand";
import { Container } from "./Container";
import { Newsletter } from "./Newsletter";

const SE = "https://socialentertainment.net";

const COLS = [
  {
    head: "Explore",
    links: [
      { label: "Events", href: "#events" },
      { label: "Stays", href: "#stays" },
      { label: "Braziliana", href: "#braziliana" },
      { label: "Hospitality", href: "#hospitality" },
      { label: "Production & Media", href: "#production-media" },
      { label: "Community & Development", href: "#community" },
    ],
  },
  {
    head: "Book",
    links: [
      { label: "Holiday events", href: "#spaces" },
      { label: "Good Vibes Photo Booth", href: "#hospitality" },
      { label: "Chez La Fête", href: "https://chezlafete.com" },
      { label: "Downtown Rising tickets", href: `${SE}/event-details/downtown-rising` },
    ],
  },
  {
    head: "Work with us",
    links: [
      { label: "Partners & sponsors", href: `${SE}/partners-sponsors` },
      { label: "Vendors", href: `${SE}/vendors` },
      { label: "Social Entertainment", href: SE },
    ],
  },
];

// Generic social glyphs (lucide v1 ships no brand icons). Profile URLs pending from the client.
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
    path: (
      <path
        d="M13.2 20v-7h2.4l.4-2.8h-2.8V8.5c0-.8.3-1.4 1.4-1.4H16V4.6c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2.1H8v2.8h2.4v7"
        fill="currentColor"
      />
    ),
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
];

export function Footer() {
  return (
    <footer id="contact" className="tooth relative bg-night pt-(--band-y) text-cream">
      <Container>
        <Newsletter />
      </Container>

      <div aria-hidden className="stripe-edge mt-20 w-full md:mt-28" />

      <Container className="pt-14 pb-10 md:pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <a href="#top" aria-label="Serving Good Vibes — back to top" className="inline-block">
              <SgvMark variant="stacked" tone="light" height={96} />
            </a>
            <p className="mt-6 text-[12px] font-semibold tracking-[0.16em] text-cream/55 uppercase">
              Hospitality · Production · Community &amp; Development
            </p>
            <a href={SE} className="mt-6 inline-flex items-center gap-3 text-[13px] text-cream/60 hover:text-cream">
              {/* eslint-disable-next-line @next/next/no-img-element -- parent-company mark */}
              <img src="/brand/logos/se-white.webp" alt="" width={241} height={193} className="h-9 w-auto opacity-80" />
              A Social Entertainment company
            </a>
          </div>

          {COLS.map((c) => (
            <nav key={c.head} aria-label={c.head}>
              <h3 className="text-[12px] font-semibold tracking-[0.16em] text-gold uppercase">{c.head}</h3>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="group text-[15px] text-cream/75 transition-colors hover:text-paper-hi">
                      <span className="stripe-link">{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="display-italic text-[20px] text-cream/85">Pardon our progress. Come join the vibes.</p>
          <ul className="flex gap-2.5">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href="#"
                  aria-label={`Serving Good Vibes on ${s.label}`}
                  className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/25 text-cream transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-ink"
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden>
                    {s.path}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-[13px] text-white/40 md:flex-row md:justify-between">
          <p>© 2026 Serving Good Vibes · servinggoodvibes.com</p>
          <p>Downtown Lafayette, Louisiana</p>
        </div>
      </Container>
    </footer>
  );
}
