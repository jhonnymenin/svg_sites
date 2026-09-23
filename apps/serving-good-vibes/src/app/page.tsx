import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Events } from "@/components/Events";
import { Stays } from "@/components/Stays";
import { Braziliana } from "@/components/Braziliana";
import { Hospitality } from "@/components/Hospitality";
import { Media } from "@/components/Media";
import { Community } from "@/components/Community";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-gold px-5 py-2.5 text-[14px] font-semibold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      {/* Brand duotone: luminance mapped from deep teal (#044c58) to cream (#e9d7a5). */}
      <svg aria-hidden width="0" height="0" className="absolute">
        <filter id="sgv-duotone" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0 0 0 1 0" />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.016 0.914" />
            <feFuncG type="table" tableValues="0.298 0.843" />
            <feFuncB type="table" tableValues="0.345 0.647" />
          </feComponentTransfer>
        </filter>
      </svg>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Events />
        <Stays />
        <Braziliana />
        <Hospitality />
        <Media />
        <Community />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
