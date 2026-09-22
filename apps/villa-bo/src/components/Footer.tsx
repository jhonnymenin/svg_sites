import { ArrowUp } from "lucide-react";
import { SgvMark } from "@sgv/brand";
import { content } from "@/content/site";

const f = content.footer;

export function Footer() {
  return (
    <footer className="on-dark grain relative overflow-hidden bg-terra-deep text-cream">
      <div className="frame pt-[clamp(64px,8vw,120px)] pb-10">
        <div className="grid gap-12 border-b border-cream/15 pb-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label text-cream/60">{f.explore}</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {content.nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="link-underline text-[14px] text-cream/85 hover:text-cream">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 lg:col-start-6">
            <p className="label text-cream/60">{f.visit}</p>
            <address className="serif mt-5 text-[19px] not-italic leading-[1.4] text-cream">
              {content.practical.address[0]}
              <br />
              {content.practical.address[1]}
              <br />
              {content.practical.address[2]}
            </address>
          </div>
          <div className="lg:col-span-2">
            <p className="label text-cream/60">{f.follow}</p>
            <ul className="mt-5 space-y-3">
              {f.social.map((s) => (
                <li key={s.label}>
                  {/* PLACEHOLDER — social URLs to be supplied by the client. */}
                  <a href={s.href} className="link-underline serif text-[19px] text-cream">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 lg:col-start-11 lg:justify-self-end">
            <SgvMark tone="light" height={40} eyebrow={content.brand.poweredBy} />
          </div>
        </div>

        {/* The closing signature: the name, set large, like lettering on a façade. */}
        <a href="#top" aria-label="Villa BO — back to top" className="group mt-12 block">
          <span
            aria-hidden
            className="block whitespace-nowrap text-center font-display leading-[0.8] tracking-[0.04em] text-cream text-[clamp(64px,19.5vw,330px)]"
            style={{ fontVariationSettings: '"opsz" 72', fontWeight: 300 }}
          >
            VILLA BO
          </span>
          <span className="mt-6 flex items-center justify-between gap-4 text-cream/75">
            <span className="label">{content.brand.tagline}</span>
            <span className="label hidden items-center gap-2 sm:flex">
              {f.backToTop}
              <ArrowUp aria-hidden size={14} strokeWidth={1.25} className="transition-transform duration-500 group-hover:-translate-y-1" />
            </span>
          </span>
        </a>

        <p className="label mt-10 text-cream/45">
          © {new Date().getFullYear()} Villa BO · {f.rights}
        </p>
      </div>
    </footer>
  );
}
