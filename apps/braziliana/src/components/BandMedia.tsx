import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@sgv/brand/motion";
import { Frond, BroadLeaf } from "./Botanicals";
import { Logo } from "./Logo";
import { BandLoop } from "./BandLoop";

function PodcastSeal() {
  const text = "The Good Vibes/Braziliana Podcast • On air • ";
  return (
    <div className="relative h-[150px] w-[150px] sm:h-[176px] sm:w-[176px]">
      <svg viewBox="0 0 200 200" aria-hidden className="bz-spin absolute inset-0 h-full w-full">
        <defs>
          <path id="seal-ring" d="M100 100 m-82 0 a82 82 0 1 1 164 0 a82 82 0 1 1 -164 0" />
        </defs>
        <circle cx="100" cy="100" r="99" fill="var(--ouro)" />
        <text fill="var(--anil-deep)" style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14.2, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          <textPath href="#seal-ring">{text.toUpperCase()}</textPath>
        </text>
      </svg>
      <div className="absolute inset-[19%] overflow-hidden rounded-full ring-2 ring-anil-deep">
        <Image src="/images/podcast-mic.jpg" alt="" fill sizes="140px" className="grade-live object-cover object-[48%_30%]" />
      </div>
      <style>{`
        @keyframes bzSpin { to { transform: rotate(360deg); } }
        .bz-spin { animation: bzSpin 28s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .bz-spin { animation: none; } }
      `}</style>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative w-[210px] rotate-[4deg] rounded-[34px] bg-[#111] p-[9px] shadow-[0_30px_50px_-20px_rgba(0,0,0,.7)] transition-transform duration-500 group-hover:rotate-[1deg] sm:w-[232px]">
      <div className="relative aspect-[9/18.5] overflow-hidden rounded-[26px] bg-mata">
        <Image
          src="/images/good-vibes-mobile.jpg"
          alt="The Good Vibes Mobile — a lime-green vintage VW bus, trees reflected in its windows."
          fill
          sizes="232px"
          className="grade-live object-cover object-[12%_70%]"
        />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,42,25,.92)_0%,rgba(10,42,25,.55)_34%,transparent_55%)]" />
        <div className="absolute left-4 right-4 top-9 text-paper">
          <p className="display text-[29px] leading-[0.92]">
            The Good
            <br />
            Vibes Mobile
          </p>
          <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.22em] text-ouro">Powered by</p>
          <Logo plate height={19} className="mt-1 -rotate-2" />
        </div>
        <span aria-hidden className="absolute left-1/2 top-[7px] h-[18px] w-[64px] -translate-x-1/2 rounded-full bg-[#111]" />
      </div>
    </div>
  );
}

export function BandMedia() {
  return (
    <div>
      {/* ---------------- House Band — yellow ---------------- */}
      <section id="band" aria-labelledby="band-title" className="grain group relative overflow-hidden bg-ouro text-mata">
        <Frond className="pointer-events-none absolute -bottom-10 left-[36%] h-[70%] w-auto rotate-[18deg] opacity-25" color="var(--ouro-deep)" rib="var(--ouro-deep)" />
        <BroadLeaf className="pointer-events-none absolute -top-10 left-[46%] h-[46%] w-auto rotate-[160deg] opacity-25" color="var(--ouro-deep)" vein="var(--ouro-deep)" />

        <div className="shell relative grid grid-cols-1 gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-24">
        <Reveal className="relative lg:col-span-5">
          <h2 id="band-title" className="display text-[clamp(52px,6vw,96px)] leading-[0.88]">
            Braziliana
            <br />
            House Band
          </h2>
          <p className="mt-6 max-w-[17rem] text-[19px] font-semibold leading-[1.4] text-mata sm:max-w-[20rem]">
            The sound of Brazil.
            <br />
            The soul of our community.
            <br />
            The energy of our community.
          </p>
          <p className="mt-6 max-w-[19rem] border-l-[3px] border-urucum pl-3 text-[15px] font-semibold leading-snug text-mata">
            Catch them live at the Holiday Open House &mdash; Sat, Dec 19.
          </p>
          <a href="#events" className="btn mt-7 bg-mata text-paper hover:bg-folha">
            Meet the band <ArrowRight aria-hidden size={17} className="arrow" />
          </a>
        </Reveal>

        {/* the band live at DTA! — a moving print pasted onto the yellow */}
        <figure className="print print-tape relative mx-auto w-full max-w-[640px] rotate-[1.6deg] transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:rotate-[0.4deg] sm:p-2.5 lg:col-span-7 lg:mx-0 lg:max-w-[720px] lg:justify-self-end">
          <div className="relative aspect-video overflow-hidden bg-mata">
            <BandLoop />
          </div>
          <figcaption className="flex items-baseline justify-between gap-4 px-1 pt-2.5">
            <span className="font-script text-[22px] leading-none text-urucum sm:text-[26px]">Live at DTA! ft. Braziliana</span>
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.18em] text-ink/50 sm:block">Golden hour &middot; Downtown</span>
          </figcaption>
        </figure>
        </div>
      </section>

      {/* ---------------- Media & Experiences — blue ---------------- */}
      <section id="media" aria-labelledby="media-title" className="grain group relative overflow-hidden bg-anil text-paper">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_40%,rgba(255,255,255,.08),transparent_60%)]" />
        <div className="shell relative grid grid-cols-1 gap-14 py-14 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-24">
          <Reveal className="max-w-[26rem] lg:col-span-5 lg:col-start-8">
            <h2 id="media-title" className="display text-[clamp(52px,6vw,96px)] leading-[0.88]">
              Media &amp;
              <br />
              Experiences
            </h2>
            <p className="mt-6 text-[19px] font-medium leading-[1.4] text-paper/90">
              Stories that inspire.
              <br />
              Connections that last.
            </p>
            <ul className="losango-list mt-5 grid gap-1.5 text-[16px] text-paper/85">
              <li>The Good Vibes Mobile</li>
              <li>The Good Vibes/Braziliana Podcast</li>
              <li>The Good Vibes Photo Booth</li>
            </ul>
            <a href="#media" className="btn mt-8 bg-paper text-anil-deep hover:bg-ouro">
              Explore media <ArrowRight aria-hidden size={17} className="arrow" />
            </a>
          </Reveal>
          <div className="relative mx-auto flex shrink-0 items-end pb-6 lg:order-first lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:mx-0 lg:justify-self-center">
            {/* photo booth print pasted beside the phone */}
            <figure className="print absolute -right-[58px] top-10 z-0 w-[104px] rotate-[8deg] p-[5px] transition-transform duration-500 group-hover:rotate-[4deg] sm:-right-[190px] sm:w-[170px] sm:p-[7px]">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/photobooth.jpg"
                  alt="Two friends tap the glowing ring-light screen of the Good Vibes Photo Booth."
                  fill
                  sizes="170px"
                  className="grade-live object-cover object-[35%_40%]"
                />
              </div>
              <figcaption className="px-0.5 pt-1.5 font-script text-[15px] leading-none text-urucum sm:text-[18px]">Photo Booth</figcaption>
            </figure>
            <Phone />
            <div className="absolute -bottom-8 -left-20 sm:-left-24">
              <PodcastSeal />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
