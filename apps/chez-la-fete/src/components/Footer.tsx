import { SgvMark } from "@sgv/brand";
import { Logo } from "./Logo";
import { NAV } from "./navData";

/* TODO(client): real About pages and social profile URLs (Chez La Fête has its own channels). */
const ABOUT = ["Our Story", "Gallery", "FAQ"];
const SOCIAL = ["Instagram", "Facebook", "Pinterest"];

export function Footer() {
  return (
    <footer className="paper relative border-t border-gold/40">
      <div className="frame pt-20 pb-10 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo size="lg" />
            <address className="mt-8 text-[14.5px] leading-[1.75] text-ink-soft not-italic">
              811 Lafayette Street
              <br />
              Lafayette, LA 70501
              <br />
              <a href="tel:+13371234567" className="hover:text-pink-deep">
                (337) 123-4567
              </a>
            </address>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5">
            <div>
              <p className="label text-[10px] text-gold">Explore</p>
              <ul className="mt-5 space-y-2.5 text-[14.5px]">
                {NAV.map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} className="hover:text-pink-deep">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-[10px] text-gold">About</p>
              <ul className="mt-5 space-y-2.5 text-[14.5px]">
                {ABOUT.map((a) => (
                  <li key={a}>
                    <a href="#" className="hover:text-pink-deep">
                      {a}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-[10px] text-gold">Follow Us</p>
              <ul className="mt-5 space-y-2.5 text-[14.5px]">
                {SOCIAL.map((s) => (
                  <li key={s}>
                    <a href="#" className="hover:text-pink-deep">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="flex items-start lg:col-span-3 lg:justify-end">
            <SgvMark eyebrow="Part of" height={44} />
          </div>
        </div>

        <p aria-hidden className="script mt-20 text-[clamp(72px,13vw,200px)] leading-[0.9] text-pink/[0.16] select-none">
          À bientôt.
        </p>

        <div className="mt-6 flex flex-col gap-3 border-t border-gold/35 pt-6 text-[12px] text-ink-mute sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Chez La Fête. Part of Serving Good Vibes.</p>
          <p>Photography © Chez La Fête / Serving Good Vibes.</p>
        </div>
      </div>
    </footer>
  );
}
