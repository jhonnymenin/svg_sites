import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { HeroCollage } from "./HeroCollage";

const KICKER = ["Businesses", "Investments", "Experiences", "Development", "Community"];

export function Hero() {
  return (
    <section id="top" className="paper relative overflow-hidden pt-(--header-h)">
      <div className="relative mx-auto max-w-(--page-max) lg:min-h-[calc(var(--header-h)+470px)] xl:min-h-[calc(min(100vw,var(--page-max))*0.416)]">
        <div className="relative z-10 px-(--gutter) pt-[46px] pb-4 sm:pt-16 lg:w-[46%] lg:pt-14 lg:pb-14 xl:w-[53%] xl:pt-[clamp(56px,5vw,84px)] xl:pb-16">
          <h1 className="worn font-display uppercase leading-[0.93] tracking-[0.004em] text-ink">
            <span className="sr-only">We build places people want to be</span>
            {/*
              One set of word groups, re-broken per breakpoint with <br>s:
              mobile "We build / places people / want to be", ≥640 the two-line
              poster setting. (No display-toggled duplicates: toggling display
              would restart the CSS reveal.)
            */}
            <span aria-hidden className="block text-[clamp(50px,14.6vw,76px)] sm:text-[clamp(54px,10.4vw,96px)] lg:text-[70px] xl:text-[clamp(56px,6.3vw,100px)]">
              {[
                { t: "We build", br: "sm:hidden lg:block xl:hidden" },
                { t: "places", br: "hidden sm:block lg:hidden xl:block" },
                { t: "people", br: "sm:hidden lg:block xl:hidden" },
                { t: "want to be", br: "" },
              ].map(({ t, br }, i) => (
                <Fragment key={t}>
                  <span className="inline-block overflow-hidden pb-[0.04em] align-top">
                    <span className="hero-line" style={{ animationDelay: `${120 + i * 90}ms` }}>
                      {t}
                    </span>
                  </span>{" "}
                  {br ? <br className={br} /> : null}
                </Fragment>
              ))}
            </span>
          </h1>

          <p
            className="hero-fade mt-5 max-w-[34rem] font-label text-[17px] font-semibold uppercase leading-[1.35] tracking-[0.06em] text-ink sm:mt-6 xl:text-[18px]"
            style={{ animationDelay: "480ms" }}
          >
            {KICKER.map((w, i) => (
              <Fragment key={w}>
                <span className="whitespace-nowrap">
                  {w}
                  <span className="text-rust">.</span>
                </span>
                {i < KICKER.length - 1 ? " " : null}
              </Fragment>
            ))}
          </p>
          <p
            className="hero-fade mt-2.5 max-w-[30rem] text-[17px] leading-[1.5] text-ink/80 xl:text-[18px]"
            style={{ animationDelay: "560ms" }}
          >
            We create and grow hospitality brands and real-world experiences that bring people together and make a
            lasting impact.
          </p>

          <div className="hero-fade mt-7 flex flex-wrap gap-3 sm:mt-8" style={{ animationDelay: "680ms" }}>
            <a
              href="#food-drink"
              className="group inline-flex w-full items-center justify-between gap-5 bg-rust sm:w-auto px-6 py-[15px] font-label text-[16px] font-semibold uppercase tracking-[0.09em] text-cream shadow-[3px_3px_0_var(--color-ink)] transition-all duration-150 hover:-translate-x-px hover:-translate-y-px hover:bg-rust-hi hover:shadow-[5px_5px_0_var(--color-ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              style={{ borderRadius: 2 }}
            >
              Explore Portfolio
              <ArrowRight size={19} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#since-sep"
              className="group inline-flex w-full items-center justify-between gap-5 border-[1.5px] sm:w-auto border-ink px-6 py-[13.5px] font-label text-[16px] font-semibold uppercase tracking-[0.09em] text-ink transition-colors duration-150 hover:bg-ink hover:text-cream"
              style={{ borderRadius: 2 }}
            >
              Learn Our Story
              <ArrowRight size={19} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <HeroCollage className="mx-auto mt-4 aspect-[0.92] w-full max-w-[560px] sm:mt-6 sm:aspect-[1.37] sm:max-w-[900px] lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:w-[60%] lg:max-w-none xl:w-[57%]" />
      </div>
    </section>
  );
}
