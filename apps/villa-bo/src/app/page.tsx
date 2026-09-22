import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Booking } from "@/components/Booking";
import { Stays } from "@/components/Stays";
import { Design } from "@/components/Design";
import { Amenities } from "@/components/Amenities";
import { Location } from "@/components/Location";
import { Experiences } from "@/components/Experiences";
import { Story } from "@/components/Story";
import { Practical } from "@/components/Practical";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Booking />
        <Stays />
        <Design />
        <Amenities />
        <Location />
        <Experiences />
        <Story />
        <Practical />
      </main>
      <Footer />
    </>
  );
}
