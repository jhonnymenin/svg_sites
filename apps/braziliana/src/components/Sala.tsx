import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Logo } from "./Logo";
import { LineBranch } from "./Botanicals";

/* Hand-drawn line pictograms, one stroke weight, drawn for Sala's four uses. */
const ico = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function Pandeiro() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className="h-11 w-11">
      <g {...ico}>
        <circle cx="24" cy="24" r="15" />
        <circle cx="24" cy="24" r="11" strokeDasharray="1.5 3.2" />
        {[0, 72, 144, 216, 288].map((a) => (
          <rect key={a} x="21.5" y="6.8" width="5" height="3.2" rx="1" transform={`rotate(${a} 24 24)`} />
        ))}
        <path d="M36 36 L43 43" />
      </g>
    </svg>
  );
}
function Easel() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className="h-11 w-11">
      <g {...ico}>
        <rect x="11" y="7" width="26" height="22" />
        <path d="M15 25 L21 17 L25 22 L28 18 L33 25" />
        <circle cx="30" cy="12.5" r="2" />
        <path d="M16 29 L11 43 M32 29 L37 43 M24 29 L24 41" />
      </g>
    </svg>
  );
}
function Toast() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className="h-11 w-11">
      <g {...ico}>
        <path d="M10 8 H20 L19 20 C18.5 24 11.5 24 11 20 Z" transform="rotate(-12 15 16)" />
        <path d="M28 8 H38 L37 20 C36.5 24 29.5 24 29 20 Z" transform="rotate(12 33 16)" />
        <path d="M16 24 L18 40 M13 41 H22" transform="rotate(-12 15 16)" />
        <path d="M32 24 L30 40 M26 41 H35" transform="rotate(12 33 16)" />
        <path d="M24 4 V8 M19 5.5 L21 8.5 M29 5.5 L27 8.5" />
      </g>
    </svg>
  );
}
function Roda() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className="h-11 w-11">
      <g {...ico}>
        <circle cx="24" cy="10" r="3.6" />
        <circle cx="10" cy="22" r="3.6" />
        <circle cx="38" cy="22" r="3.6" />
        <path d="M17 42 C17 34 20 30 24 30 C28 30 31 34 31 42" />
        <path d="M18 20 C20 16 22 15 24 15 C26 15 28 16 30 20" />
        <path d="M4 36 C4 30 6.5 27.5 10 27.5 C12 27.5 13.5 28.5 14.6 30" />
        <path d="M44 36 C44 30 41.5 27.5 38 27.5 C36 27.5 34.5 28.5 33.4 30" />
        <circle cx="24" cy="24" r="2.2" />
      </g>
    </svg>
  );
}

const USES = [
  { label: "Live Music", Icon: Pandeiro, color: "text-urucum" },
  { label: "Art Exhibitions", Icon: Easel, color: "text-anil" },
  { label: "Private Events", Icon: Toast, color: "text-folha" },
  { label: "Cultural Gatherings", Icon: Roda, color: "text-ouro-deep" },
];

export function Sala() {
  return (
    <section id="sala" aria-labelledby="sala-title" className="paper overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* photo — bleeds to the left edge */}
        <div className="group relative h-[78vw] max-h-[560px] overflow-hidden sm:h-[520px] lg:h-auto lg:max-h-none lg:min-h-[680px]">
          <Image
            src="/images/sala-good-vibes-room.jpg"
            alt="The Good Vibes Room on a Bossa Nova night — wood ceiling, a rattan lamp and red lampshades, guests dancing on patterned rugs while the band plays by the window."
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="grade-night object-cover object-[62%_60%] transition-transform duration-[1.6s] ease-out group-hover:scale-[1.03]"
          />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,42,25,.6),transparent_42%)]" />
          <p className="absolute bottom-5 left-[var(--gutter)] font-body text-[11px] font-bold uppercase tracking-[0.24em] text-paper/90">
            The Good Vibes Room &middot; Downtown Lafayette
          </p>
        </div>

        {/* feature panel */}
        <div className="relative px-[var(--gutter)] py-14 sm:py-20 lg:py-20 lg:pl-[clamp(40px,5vw,96px)]">
          <LineBranch className="pointer-events-none absolute -right-20 bottom-0 hidden h-[62%] w-auto opacity-60 sm:block" />
          <Reveal className="relative max-w-[560px]">
            <h2 id="sala-title">
              <span className="kicker block text-[13px] tracking-[0.5em] text-ink">Sala</span>{" "}
              <Logo height="clamp(50px, 5vw, 76px)" sizes="(min-width: 1024px) 350px, 240px" className="mt-3" />
            </h2>
            <p className="kicker mt-4 flex items-center gap-3 text-[12px] tracking-[0.38em] text-ink sm:text-[13px]">
              A cultural living room
              <span aria-hidden className="inline-block h-2 w-2 rotate-45 bg-ouro" />
            </p>

            <p className="display mt-9 text-[clamp(28px,2.6vw,38px)] text-urucum">425 Jefferson Street</p>
            <p className="mt-4 max-w-[30rem] text-[17px] leading-[1.55] text-ink-soft sm:text-[18px]">
              Our home is the Good Vibes Room downtown &mdash; a cultural living room: intimate, vibrant, and perfect for
              smaller gatherings. A space for art, music, community, and unforgettable experiences.
            </p>
            <p className="mt-3 max-w-[30rem] text-[15px] italic leading-[1.5] text-ink-soft/90">
              Bossa nova nights happen right here &mdash; the band by the window, dancing on the rugs.
            </p>
          </Reveal>

          <ul className="relative mt-10 grid max-w-[540px] grid-cols-2 border-y border-ink/15 sm:grid-cols-4">
            {USES.map(({ label, Icon, color }, i) => (
              <li
                key={label}
                className={`border-ink/15 ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t sm:border-t-0" : ""} sm:border-l sm:first:border-l-0`}
              >
                <RevealItem index={i} className="group flex flex-col items-center gap-3 px-2 py-6 text-center">
                  <span className={`${color} transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-6`}>
                    <Icon />
                  </span>
                  <span className="text-[12px] font-bold uppercase leading-tight tracking-[0.12em] text-ink">{label}</span>
                </RevealItem>
              </li>
            ))}
          </ul>

          <a href="#sala" className="btn relative mt-10 bg-mata text-paper hover:bg-folha">
            Discover Sala Braziliana <ArrowRight aria-hidden size={17} className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
