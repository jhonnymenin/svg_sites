import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Container } from "./Container";

const SERVICES = [
  {
    title: "Party Rentals",
    caption: "Everything you need to host the perfect event — tables, linens, tents, lounges and spreads.",
    image: "/images/chez-event-grazing-01.jpg",
    alt: "A long grazing table of breads, cheeses and fruit on white linens",
    focus: "55% 60%",
  },
  {
    title: "Food & Beverage",
    caption: "Catering and bar service, made with passion — from festival tents to private dinners.",
    image: "/images/fi-bartender-01.jpg",
    alt: "A bartender hands a drink across the bar to a smiling guest",
    focus: "40% 45%",
  },
  {
    title: "Good Vibes Mobile",
    caption: "Bringing the vibes wherever we go — our vintage bus bar pulls up to your party.",
    image: "/images/party-laffy-taps-event-01.jpg",
    alt: "The lime-green vintage bus bar serving guests at a courtyard event",
    focus: "55% 50%",
  },
];

const SPACES = [
  {
    name: "The Good Vibes Room",
    where: "Downtown Lafayette",
    body: "A cultural living room — intimate, vibrant, perfect for smaller gatherings. Home of our Bossa Nova nights.",
    image: "/images/braziliana-house-band-01.jpg",
    alt: "The Braziliana house band playing in the Good Vibes Room — guitar, vocals and green congas",
    focus: "60% 75%",
  },
  {
    name: "Chez La Fête",
    where: "Guesthouse & Backyard",
    body: "For larger parties: the Courtyard Stage under a live oak, yellow umbrellas, Bar Bijou and the Fest House Lounge.",
    image: "/images/chez-courtyard-night-01.jpg",
    alt: "The Chez La Fête courtyard at night with an uplit live oak and glowing stage",
    focus: "50% 55%",
  },
];

export function Hospitality() {
  return (
    <>
      <section id="hospitality" aria-labelledby="hospitality-title" className="paper relative py-(--band-y)">
        <Container>
          <Reveal>
            <p className="eyebrow text-red">Hospitality</p>
            <h2 id="hospitality-title" className="display mt-4 text-[clamp(44px,6vw,92px)] text-deep-teal">
              Smile, you’re <span className="display-italic text-red">on the vibes.</span>
            </h2>
          </Reveal>

          {/* The primary rental: the Good Vibes Photo Booth */}
          <div className="mt-14 grid gap-12 md:mt-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <Reveal className="relative mx-auto aspect-[5/4] w-full max-w-[640px] lg:mx-0">
              <figure className="grain absolute top-0 left-0 h-[92%] w-[56%] overflow-hidden rounded-[4px]">
                <Image
                  src="/images/photobooth-action-01.jpg"
                  alt="Two friends tapping the glowing ring-light photo booth under purple light"
                  fill
                  sizes="(min-width: 1024px) 26vw, 56vw"
                  className="grade object-cover object-[45%_40%]"
                />
              </figure>
              <figure className="grain absolute right-0 bottom-0 h-[72%] w-[46%] rotate-[3deg] overflow-hidden rounded-[4px] ring-[6px] ring-paper">
                <Image
                  src="/images/photobooth-screen-01.jpg"
                  alt="The booth screen showing a branded Serving Good Vibes photo-strip template"
                  fill
                  sizes="(min-width: 1024px) 22vw, 46vw"
                  className="grade object-cover object-[50%_50%]"
                />
              </figure>
              <span aria-hidden className="stripes-v absolute -bottom-5 left-0 h-[8px] w-[40%]" />
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-[12px] font-semibold tracking-[0.14em] text-olive uppercase">Our signature rental</p>
              <h3 className="display mt-3 text-[clamp(40px,4.4vw,68px)] leading-[0.95] text-deep-teal">
                Good Vibes Photo Booth
              </h3>
              <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.6] text-ink/75">
                Capture memories with style. An easy, fun add-on for celebrations and events — ring-light glow,
                instant prints and branded photo strips your guests actually keep.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-medium text-deep-teal">
                <li>Weddings &amp; birthdays</li>
                <li>Corporate &amp; brand activations</li>
                <li>Festivals</li>
              </ul>
              <a
                href="#contact"
                className="group mt-8 inline-flex h-[52px] items-center gap-3 rounded-full bg-red px-7 text-[15px] font-semibold text-paper-hi transition-colors hover:bg-deep-teal"
              >
                Book the photo booth
                <span aria-hidden className="arrow">
                  →
                </span>
              </a>
            </Reveal>
          </div>

          <ul className="mt-24 grid gap-10 sm:grid-cols-3 sm:gap-5 md:mt-32 lg:gap-8">
            {SERVICES.map((s, i) => (
              <li key={s.title}>
                <RevealItem index={i}>
                  <a href="#contact" className="group block">
                    <span className="grain relative block aspect-[4/3] overflow-hidden rounded-[4px] bg-deep-teal">
                      {/* Duotone at rest (deep teal → cream, via the SVG filter in page.tsx); full colour on hover */}
                      <Image
                        src={s.image}
                        alt={s.alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover [filter:url(#sgv-duotone)] transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                        style={{ objectPosition: s.focus }}
                      />
                      <Image
                        src={s.image}
                        alt=""
                        aria-hidden
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                        className="grade object-cover opacity-0 transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
                        style={{ objectPosition: s.focus }}
                      />
                    </span>
                    <span className="display mt-5 block text-[30px] leading-none text-deep-teal">
                      <span className="stripe-link">{s.title}</span>
                    </span>
                    <span className="mt-2 block max-w-[36ch] text-[15px] leading-[1.55] text-ink/70">{s.caption}</span>
                  </a>
                </RevealItem>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Gathering spaces — the holiday push */}
      <section id="spaces" aria-labelledby="spaces-title" className="tooth relative overflow-hidden bg-red py-(--band-y) text-paper-hi">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.9fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow text-gold">Gathering spaces · December 2026</p>
              <h2 id="spaces-title" className="display mt-5 text-[clamp(48px,5.6vw,88px)] leading-[0.9]">
                Book your <span className="display-italic text-gold">holiday</span> event.
              </h2>
              <p className="mt-6 max-w-[28rem] text-[17px] leading-[1.6] text-paper-hi/80">
                Office parties, family dinners, end-of-year toasts. Two rooms downtown, one team that removes the
                stress — catering, bar, rentals and the photo booth included on request.
              </p>
              <a
                href="#contact"
                className="group mt-8 inline-flex h-[52px] items-center gap-3 rounded-full bg-gold px-7 text-[15px] font-semibold text-ink transition-colors hover:bg-paper-hi"
              >
                Check December dates
                <span aria-hidden className="arrow">
                  →
                </span>
              </a>
            </Reveal>

            <ul className="grid gap-10 md:grid-cols-2 md:gap-6">
              {SPACES.map((s, i) => (
                <li key={s.name} className={i === 1 ? "md:mt-24" : undefined}>
                  <RevealItem index={i}>
                    <figure>
                      <div className="grain relative aspect-[4/5] overflow-hidden rounded-[4px]">
                        <Image
                          src={s.image}
                          alt={s.alt}
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                          className="grade-night object-cover"
                          style={{ objectPosition: s.focus }}
                        />
                        <span aria-hidden className="absolute inset-0 z-[1] bg-gradient-to-t from-red-deep/80 via-transparent to-transparent" />
                        <span className="absolute bottom-4 left-4 z-[3] text-[12px] font-semibold tracking-[0.14em] text-gold uppercase">
                          {s.where}
                        </span>
                      </div>
                      <figcaption className="mt-5">
                        <span className="display block text-[34px] leading-none">{s.name}</span>
                        <span className="mt-2 block max-w-[36ch] text-[15px] leading-[1.55] text-paper-hi/75">{s.body}</span>
                      </figcaption>
                    </figure>
                  </RevealItem>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
