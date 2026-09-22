import { ArrowRight } from "lucide-react";
import { SgvMark } from "@sgv/brand";
import { Reveal } from "@sgv/brand/motion";
import { JoinCta } from "./JoinCta";
import { Wordmark } from "./Wordmark";
import { NAV } from "./nav";
import { FlagRule } from "./FlagRule";

/** Loose dry-brush swashes in the flag pigments, painted into the band corners. */
function Swashes({ className, flip = false }: { className?: string; flip?: boolean }) {
  const strokes = [
    { d: "M-20 150 C60 110 130 70 250 20", c: "var(--folha)", w: 34 },
    { d: "M-20 190 C80 150 160 110 270 70", c: "var(--ouro)", w: 22 },
    { d: "M-10 230 C90 196 170 160 280 118", c: "var(--anil)", w: 28 },
    { d: "M0 262 C100 236 190 200 290 166", c: "var(--urucum)", w: 14 },
  ];
  return (
    <svg aria-hidden viewBox="0 0 280 280" className={className} style={flip ? { transform: "scale(-1,-1)" } : undefined}>
      <defs>
        <filter id="dry" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9 0.06" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="9" />
        </filter>
      </defs>
      <g filter="url(#dry)" fill="none" strokeLinecap="round">
        {strokes.map((s) => (
          <path key={s.c} d={s.d} stroke={s.c} strokeWidth={s.w} opacity=".92" />
        ))}
      </g>
    </svg>
  );
}

export function FinalCta() {
  return (
    <>
      <section aria-labelledby="cta-title" className="grain relative overflow-hidden bg-mata text-paper">
        <Swashes className="pointer-events-none absolute -right-20 -top-24 h-[260px] w-[260px] opacity-90 sm:hidden" />
        <Swashes className="pointer-events-none absolute -bottom-36 -left-24 hidden h-[300px] w-[300px] opacity-90 sm:block" />
        <Swashes flip className="pointer-events-none absolute -right-16 -top-28 hidden h-[320px] w-[320px] opacity-90 sm:block" />

        <div className="shell relative grid gap-8 pb-16 pt-28 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-24">
          <Reveal className="lg:col-span-6">
            <h2 id="cta-title" className="leading-none">
              <span className="display block text-[clamp(44px,4.6vw,70px)]">Together, we create</span>
              <span className="-mt-1 block -rotate-2 font-script text-[clamp(64px,7vw,112px)] leading-[1.05] text-ouro">
                Good Vibes.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-3">
            <p className="max-w-[22rem] text-[18px] leading-[1.5] text-paper/85">
              Join Braziliana and be part of a movement that celebrates culture, builds community, and creates positive
              change.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="lg:col-span-3">
            <JoinCta className="btn h-[60px] w-full bg-urucum px-8 text-[15px] text-paper hover:bg-urucum-deep sm:w-auto">
              Join Braziliana <ArrowRight aria-hidden size={18} className="arrow" />
            </JoinCta>
          </Reveal>
        </div>
      </section>

      <footer className="grain relative bg-mata-deep text-paper">
        <FlagRule />
        <div className="shell grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Wordmark size={44} onDark shadow="rgba(0,0,0,.6)" />
            <p className="kicker mt-3 text-[10px] tracking-[0.28em] text-paper/70">Culture. Community. Good Vibes.</p>
            <address className="mt-6 not-italic text-[15px] leading-[1.6] text-paper/80">
              Sala Braziliana
              <br />
              425 Jefferson Street
              <br />
              Lafayette, Louisiana
            </address>
          </div>
          <nav aria-label="Footer" className="lg:col-span-5">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-[15px] text-paper/80 transition-colors hover:text-ouro">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col items-start gap-6 lg:col-span-3 lg:items-end">
            <SgvMark tone="light" height={52} eyebrow="The philanthropic arm of" />
          </div>
        </div>
        <div className="shell flex flex-col gap-2 border-t border-paper/10 py-6 text-[12px] text-paper/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Braziliana · Serving Good Vibes. All rights reserved.</p>
          <p>Photography shown is placeholder imagery.</p>
        </div>
      </footer>
    </>
  );
}
