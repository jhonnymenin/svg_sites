import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sala } from "@/components/Sala";
import { Events } from "@/components/Events";
import { FoodBeverage } from "@/components/FoodBeverage";
import { BandMedia } from "@/components/BandMedia";
import { Merch } from "@/components/Merch";
import { Partners } from "@/components/Partners";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main id="main">
        <Hero />
        <Sala />
        <Events />
        <FoodBeverage />
        <BandMedia />
        <Merch />
        <Partners />
      </main>
      <FinalCta />
    </div>
  );
}
