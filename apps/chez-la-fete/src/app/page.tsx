import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stays } from "@/components/Stays";
import { PrivateEvents } from "@/components/PrivateEvents";
import { PartyRentals } from "@/components/PartyRentals";
import { CityEvents } from "@/components/CityEvents";
import { SisterStays } from "@/components/SisterStays";
import { PracticalInfo } from "@/components/PracticalInfo";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-ink focus:px-4 focus:py-3 focus:text-ivory"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Stays />
        <PrivateEvents />
        <PartyRentals />
        <CityEvents />
        <SisterStays />
        <PracticalInfo />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
