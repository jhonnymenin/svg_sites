import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@sgv/brand/motion";
import { Frond, BroadLeaf } from "./Botanicals";

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
        {/* PLACEHOLDER photo */}
        <Image src="/images/microphone.jpg" alt="" fill sizes="120px" className="grade object-cover object-[30%_40%]" />
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
        {/* PLACEHOLDER photo — stand-in for The Good Vibes Mobile */}
        <Image
          src="/images/bus.jpg"
          alt="The Good Vibes Mobile — a vintage orange van parked on a sunny street."
          fill
          sizes="232px"
          className="grade object-cover object-[55%_60%]"
        />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,42,25,.92)_0%,rgba(10,42,25,.55)_34%,transparent_55%)]" />
        <div className="absolute left-4 right-4 top-9 text-paper">
          <p className="display text-[29px] leading-[0.92]">
            The Good
            <br />
            Vibes Mobile
          </p>
          <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.22em] text-ouro">Powered by</p>
          <p className="display text-[20px] leading-none text-paper">Braziliana</p>
        </div>
        <span aria-hidden className="absolute left-1/2 top-[7px] h-[18px] w-[64px] -translate-x-1/2 rounded-full bg-[#111]" />
      </div>
    </div>
  );
}

export function BandMedia() {
  return (
    <div className="grid lg:grid-cols-2">
      {/* ---------------- House Band — yellow ---------------- */}
      <section id="band" aria-labelledby="band-title" className="grain group relative overflow-hidden bg-ouro text-mata">
        {/* band photo, duotoned onto the yellow so the players read as silhouettes */}
        <div aria-hidden className="absolute bottom-0 right-0 h-[58%] w-[78%] mix-blend-multiply sm:inset-y-0 sm:h-auto sm:w-[58%]">
          {/* PLACEHOLDER photo — replace with the Braziliana House Band */}
          <Image
            src="/images/crowd-stage.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 30vw, 60vw"
            className="object-cover object-[62%_50%] [filter:grayscale(1)_contrast(1.35)_brightness(1.2)] transition-transform duration-[1.4s] group-hover:scale-[1.04]"
          />
          {/* lift the blacks to deep mata green, then fade into the yellow */}
          <div className="absolute inset-0 bg-mata-deep mix-blend-lighten" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff_0%,transparent_40%)] sm:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.6)_22%,transparent_55%)]" />
        </div>
        <Frond className="pointer-events-none absolute -bottom-10 left-[36%] h-[70%] w-auto rotate-[18deg] opacity-25" color="var(--ouro-deep)" rib="var(--ouro-deep)" />
        <BroadLeaf className="pointer-events-none absolute -top-10 left-[46%] h-[46%] w-auto rotate-[160deg] opacity-25" color="var(--ouro-deep)" vein="var(--ouro-deep)" />

        <Reveal className="relative px-[var(--gutter)] py-14 sm:py-20 lg:py-20 lg:pr-8">
          <h2 id="band-title" className="display text-[clamp(50px,5vw,80px)] leading-[0.9]">
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
          <a href="#band" className="btn mt-9 bg-mata text-paper hover:bg-folha">
            Meet the band <ArrowRight aria-hidden size={17} className="arrow" />
          </a>
        </Reveal>
      </section>

      {/* ---------------- Media & Experiences — blue ---------------- */}
      <section id="media" aria-labelledby="media-title" className="grain group relative overflow-hidden bg-anil text-paper">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_40%,rgba(255,255,255,.08),transparent_60%)]" />
        <div className="relative flex flex-col gap-10 px-[var(--gutter)] py-14 sm:flex-row sm:items-center sm:justify-between sm:py-20 lg:py-16 lg:pl-12">
          <Reveal className="max-w-[24rem]">
            <h2 id="media-title" className="display text-[clamp(50px,5vw,80px)] leading-[0.9]">
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
            </ul>
            <a href="#media" className="btn mt-8 bg-paper text-anil-deep hover:bg-ouro">
              Explore media <ArrowRight aria-hidden size={17} className="arrow" />
            </a>
          </Reveal>
          <div className="relative mx-auto flex shrink-0 items-end sm:mx-0">
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
