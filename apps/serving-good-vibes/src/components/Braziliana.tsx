import Image from "next/image";
import { Reveal, RevealItem } from "@sgv/brand/motion";
import { Container } from "./Container";
import { cn } from "./cn";

type Tile = { caption: string; note: string; image: string; alt: string; focus: string; className: string };

const TILES: Tile[] = [
  {
    caption: "Sala Braziliana",
    note: "Bossa Nova nights in the Good Vibes Room",
    image: "/images/braziliana-bossa-nova-dance-01.jpg",
    alt: "Couples dancing in the Good Vibes Room under red lampshades and a Brazilian flag",
    focus: "50% 60%",
    className: "col-span-2 row-span-2 aspect-[4/3] md:aspect-auto",
  },
  {
    caption: "Events & Cultural Exchange",
    note: "DTA! ft. Braziliana",
    image: "/images/braziliana-dta-dance-01.jpg",
    alt: "A crowd dancing on a brick plaza in front of a gazebo stage at dusk",
    focus: "45% 65%",
    className: "aspect-square",
  },
  {
    caption: "Food & Beverage",
    note: "Plates with Louisiana roots",
    image: "/images/plp-plate-plantains-01.jpg",
    alt: "A plate lunch of rice and beans with plantain chips",
    focus: "45% 50%",
    className: "aspect-square",
  },
  {
    caption: "Good Vibes Mobile",
    note: "The bar that comes to you",
    image: "/images/party-laffy-taps-bus-01.jpg",
    alt: "A lime-green VW bus fitted with beer taps",
    focus: "55% 55%",
    className: "aspect-square",
  },
  {
    caption: "Merch & Subscriptions",
    note: "Wear the vibes",
    image: "/images/plp-crew-portrait-01.jpg",
    alt: "A smiling man in a straw hat wearing a green Serving Good Vibes t-shirt",
    focus: "50% 38%",
    className: "aspect-square",
  },
];

export function Braziliana() {
  return (
    <section id="braziliana" aria-labelledby="braziliana-title" className="tooth relative overflow-hidden bg-olive-deep py-(--band-y)">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:items-center lg:gap-16 xl:gap-24">
          <Reveal>
            <h2 id="braziliana-title" className="sr-only">
              Braziliana
            </h2>
            <div className="rounded-[6px] bg-paper-hi px-5 py-6 md:px-7 md:py-8">
              {/* eslint-disable-next-line @next/next/no-img-element -- official Braziliana logo */}
              <img
                src="/brand/logos/braziliana.webp"
                alt="Braziliana"
                width={1800}
                height={391}
                className="h-auto w-full"
              />
            </div>
            <p className="display mt-9 text-[clamp(34px,3.6vw,52px)] leading-[0.98] text-paper-hi">
              Culture. Community. <span className="text-gold">Good vibes.</span>
            </p>
            <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.6] text-cream/80">
              Honoring Brazilian culture and Louisiana roots through food, music, art and experiences that bring
              people together.
            </p>
            <a
              href="#braziliana"
              className="group mt-8 inline-flex h-[52px] items-center gap-3 rounded-full bg-gold px-7 text-[15px] font-semibold text-ink transition-colors hover:bg-cream"
            >
              Explore Braziliana
              <span aria-hidden className="arrow">
                →
              </span>
            </a>
          </Reveal>

          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
            {TILES.map((t, i) => (
              <li key={t.caption} className={cn("relative", t.className)}>
                <RevealItem index={i} className="h-full">
                  <a href="#braziliana" className="group grain relative block h-full min-h-full overflow-hidden rounded-[4px]">
                    <Image
                      src={t.image}
                      alt={t.alt}
                      fill
                      sizes={i === 0 ? "(min-width: 1024px) 30vw, 100vw" : "(min-width: 1024px) 15vw, 50vw"}
                      className="grade object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transition-none"
                      style={{ objectPosition: t.focus }}
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 z-[1] bg-gradient-to-t from-[#1d2616]/90 via-[#1d2616]/20 to-transparent"
                    />
                    <span className="absolute inset-x-0 bottom-0 z-[3] p-3.5 md:p-4">
                      <span
                        aria-hidden
                        className="stripes-h mb-2.5 block h-[10px] w-6 transition-[width] duration-500 group-hover:w-14"
                      />
                      <span
                        className={cn(
                          "display block leading-[1] text-paper-hi",
                          i === 0 ? "text-[30px] md:text-[40px]" : "text-[19px] md:text-[21px]"
                        )}
                      >
                        {t.caption}
                      </span>
                      <span className="mt-1 block text-[12.5px] text-cream/75 max-sm:hidden">{t.note}</span>
                    </span>
                  </a>
                </RevealItem>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
