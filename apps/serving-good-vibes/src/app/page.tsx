import {
  Camera,
  GraduationCap,
  HandCoins,
  Handshake,
  HeartHandshake,
  Mic,
  Palette,
  PencilLine,
  RadioTower,
  Target,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Events } from "@/components/Events";
import { Stays } from "@/components/Stays";
import { Braziliana } from "@/components/Braziliana";
import { Hospitality } from "@/components/Hospitality";
import { Strip, type StripItem } from "@/components/Strip";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

// Item names come from the copy deck; the one-line descriptions follow the approved mockup
// (the deck lists names only) — confirm wording with the client.
const MEDIA: StripItem[] = [
  { title: "Video and Photography", body: "Cinematic storytelling for brands, events and campaigns.", Icon: Camera },
  { title: "Podcast", body: "Original podcasts that spark conversations and build community.", Icon: Mic },
  { title: "Live Streaming", body: "Bringing events to audiences near and far.", Icon: RadioTower },
  { title: "Brand Content", body: "Creative content that connects brands with people.", Icon: PencilLine },
  { title: "Media Strategy", body: "Strategy and storytelling that drive impact and engagement.", Icon: Target },
];

const COMMUNITY: StripItem[] = [
  { title: "Community Initiatives", body: "Supporting local organizations and neighborhoods.", Icon: HeartHandshake },
  { title: "Educational Programs", body: "Empowering youth through education and mentorship.", Icon: GraduationCap },
  { title: "Cultural Programming", body: "Celebrating culture and preserving our heritage.", Icon: Palette },
  { title: "Economic Development", body: "Creating opportunities and supporting local entrepreneurs.", Icon: HandCoins },
  { title: "Volunteer Partnerships", body: "Bringing people together to make a difference.", Icon: Handshake },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] bg-gold px-4 py-2 font-display text-[13px] uppercase tracking-[0.08em] text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Pillars />
        <Events />
        <Stays />
        <Braziliana />
        <Hospitality />
        <Strip
          id="production-media"
          title="Production & Media"
          items={MEDIA}
          cta={{ label: "Explore media", href: "#production-media" }}
          variant="media"
        />
        <Strip
          id="community"
          title="Community & Development"
          titleLines={["Community &", "Development"]}
          items={COMMUNITY}
          cta={{ label: "Explore impact", href: "#community" }}
          variant="community"
        />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
