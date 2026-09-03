import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Nav />
        <Hero />
      </div>
      <Pillars />
    </main>
  );
}
