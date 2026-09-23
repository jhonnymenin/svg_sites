import { Mail } from "lucide-react";
import { SELogo } from "./marks";
import { NewsletterForm } from "./NewsletterForm";

const SE = "https://socialentertainment.net";
const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#since-sep" },
      { label: "Our Brands", href: "#food-drink" },
      { label: "Careers", href: "#" },
      { label: "News", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Partners + Sponsors", href: `${SE}/partners-sponsors` },
      { label: "Vendors", href: `${SE}/vendors` },
      { label: "Investors", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
];

/** lucide-react ships no brand glyphs — minimal inline marks. Links are placeholders until profiles are confirmed. */
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
    name: "LinkedIn",
    path: "M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96ZM3 9.75h3.96V21H3V9.75Zm6.44 0h3.8v1.54h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.63 4.74 6.06V21h-3.95v-5.07c0-1.21-.02-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.68V21H9.44V9.75Z",
  },
];

const heading = "font-label text-[16px] font-semibold uppercase tracking-[0.1em] text-cream";
const link = "text-[14.5px] text-cream/65 transition-colors hover:text-cream";

export function Footer() {
  return (
    <footer id="contact" className="dusty text-cream">
      <div className="mx-auto grid max-w-(--page-max) grid-cols-2 gap-x-6 gap-y-10 px-(--gutter) pt-14 pb-12 md:grid-cols-4 lg:grid-cols-[auto_1fr_0.8fr_0.8fr_1.1fr_minmax(300px,1.4fr)] lg:gap-x-10 lg:pt-12">
        <a href="#top" aria-label="Back to top" className="col-span-2 block w-[112px] md:col-span-1 lg:w-[118px]">
          <SELogo alt="" className="w-full" />
        </a>

        <div className="col-span-2 md:col-span-1">
          <p className="font-label text-[17px] font-medium uppercase leading-[1.45] tracking-[0.06em] text-cream/85">
            Building places.
            <br />
            Creating experiences.
            <br />
            Serving good vibes.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {SOCIALS.map(({ name, path }) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center text-cream/75 transition-colors hover:text-mustard"
              >
                <svg viewBox="0 0 24 24" width={19} height={19} fill="currentColor" aria-hidden>
                  <path d={path} />
                </svg>
              </a>
            ))}
            <a
              href="mailto:hello@socialentertainment.net"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center text-cream/75 transition-colors hover:text-mustard"
            >
              <Mail size={20} strokeWidth={1.75} />
            </a>
          </div>
        </div>

        {COLUMNS.map(({ title, links }) => (
          <nav key={title} aria-label={title}>
            <h3 className={heading}>{title}</h3>
            <ul className="mt-4 space-y-2.5">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={link}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="col-span-2 lg:col-span-1">
          <h3 className={heading}>Let&apos;s Connect</h3>
          <address className="mt-4 space-y-2.5 text-[14.5px] not-italic leading-[1.45] text-cream/65">
            <p>
              201 Settlers Trace Blvd.
              <br />
              Lafayette, LA 70508
            </p>
            <p>
              <a href="mailto:hello@socialentertainment.net" className="transition-colors hover:text-cream">
                hello@socialentertainment.net
              </a>
            </p>
            <p>
              <a href="tel:+13371234567" className="font-label text-[18px] tracking-[0.04em] text-cream/90 transition-colors hover:text-cream">
                337.123.4567
              </a>
            </p>
          </address>
        </div>

        <div className="paper col-span-2 bg-rust! bg-blend-multiply p-6 lg:col-span-1 lg:-my-2 lg:p-7" style={{ borderRadius: 3 }}>
          <h3 className="font-display text-[30px] uppercase leading-none tracking-[0.01em] text-cream">Stay in the Loop</h3>
          <p className="mt-2 text-[15px] leading-[1.45] text-cream/85">Updates on openings, events, and everything good.</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-(--page-max) flex-col gap-3 px-(--gutter) py-5 text-[13px] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Social Entertainment. All rights reserved.</span>
          <span className="flex gap-6">
            <a href="#" className="hover:text-cream/80">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cream/80">
              Terms of Use
            </a>
            <a href="#" className="hover:text-cream/80">
              Site Map
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
