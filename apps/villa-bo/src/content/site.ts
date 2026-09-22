/**
 * Every visible string on the Villa BO landing page lives here, so a PT-BR
 * dictionary can be added later by mirroring this shape (e.g. `content.pt`).
 * Copy follows references/copy/villa-bo.txt verbatim where the spec gives it.
 */

export type IconKey =
  | "design"
  | "pin"
  | "shield"
  | "parcel"
  | "pool"
  | "cowork"
  | "dining"
  | "metro"
  | "pen"
  | "warmth"
  | "leaf"
  | "kitchen"
  | "linen"
  | "towel"
  | "gym"
  | "meeting"
  | "shopping"
  | "museum"
  | "park"
  | "mall"
  | "landmark"
  | "market"
  | "concierge"
  | "wifi"
  | "key"
  | "air"
  | "tv"
  | "washer"
  | "desk"
  | "iron"
  | "toiletries"
  | "walk"
  | "drive"
  | "hospital"
  | "heart"
  | "stethoscope"
  | "cross";

export const en = {
  meta: {
    title: "Villa BO — A boutique stay in Jardins, São Paulo",
    description:
      "Stay. Lifestyle. City Experience. A boutique stay in the heart of Jardins, São Paulo's most desirable address — contemporary design, warm hospitality, steps from Oscar Freire.",
  },

  brand: {
    name: "Villa BO",
    tagline: "Stay. Lifestyle. City Experience.",
    poweredBy: "Powered by",
  },

  nav: [
    { id: "stay", label: "Stay" },
    { id: "design", label: "Design & Hospitality" },
    { id: "location", label: "Location" },
    { id: "amenities", label: "Amenities" },
    { id: "experiences", label: "Experiences" },
    { id: "medical", label: "Medical Tourism" },
    { id: "the-bo", label: "The BO" },
    { id: "practical", label: "Practical Info" },
  ],
  navMenu: "Menu",
  navClose: "Close",
  skip: "Skip to content",

  hero: {
    headline: ["Stay.", "Lifestyle.", "City", "Experience."],
    kicker: "A boutique stay in the heart of Jardins, São Paulo’s most desirable address.",
    cta: "Reserve your stay",
    address: "Rua Gabriel Monteiro da Silva, 35",
    district: "Jardins — São Paulo",
    coords: "23°34′ S · 46°40′ W",
  },

  booking: {
    title: "Reserve your stay",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    guestOptions: ["1 Guest", "2 Guests", "3 Guests", "4 Guests"],
    cta: "Check availability",
    sending: "Checking…",
    errorDates: "Please choose a check-out date after your check-in.",
    errorMissing: "Please choose both dates.",
    successTitle: "Thank you.",
    successBody: (inD: string, outD: string, guests: string) =>
      `We have your request for ${inD} – ${outD}, ${guests.toLowerCase()}. Our concierge will confirm availability shortly.`,
    reset: "Change dates",
  },

  stays: {
    chapter: "01",
    eyebrow: "The stay",
    title: ["Stays at", "Villa BO"],
    intro:
      "Designed for your lifestyle. Built for the city. Enjoy a seamless stay, with balancing comfort, design and convenience.",
    features: [
      { icon: "design", label: "Contemporary design & décor" },
      { icon: "pin", label: "Prime location in Jardins" },
      { icon: "shield", label: "24-hour security & concierge" },
      { icon: "parcel", label: "24-hour delivery reception" },
      { icon: "pool", label: "Pool & fitness center" },
      { icon: "cowork", label: "Coworking & meeting rooms" },
      { icon: "dining", label: "Steps from the best restaurants, bars, cafés & culture" },
      { icon: "metro", label: "Near Oscar Freire metro station" },
    ] as { icon: IconKey; label: string }[],
    gallery: [
      { src: "/images/stay-living.jpg", alt: "Living room with exposed brick wall, leather sofa and armchair", caption: "Living" },
      { src: "/images/stay-bedroom.jpg", alt: "Softly lit bedroom with linen bedding and closed blinds", caption: "Bedroom" },
      { src: "/images/stay-chair.jpg", alt: "Cognac leather armchair beside a bookshelf", caption: "Details" },
      { src: "/images/stay-balcony.jpg", alt: "Balcony with plants and a small bistro table", caption: "Balcony" },
      { src: "/images/stay-dining.jpg", alt: "Dining table in front of a wide window over the city", caption: "Dining" },
    ],
  },

  design: {
    eyebrow: "Design & Hospitality",
    title: ["Design &", "Hospitality"],
    intro: "Villa BO combines contemporary design with warm hospitality to create the perfect stay.",
    attributes: [
      { icon: "pen", label: "Designed for lifestyle" },
      { icon: "warmth", label: "Warm atmosphere" },
      { icon: "leaf", label: "Natural materials" },
      { icon: "kitchen", label: "Complete kitchen" },
      { icon: "linen", label: "Premium linens" },
      { icon: "towel", label: "Premium towels" },
    ] as { icon: IconKey; label: string }[],
    imageMain: { src: "/images/design-linen.jpg", alt: "White towel hanging against dark stone tiles" },
    imageSecondary: { src: "/images/design-kitchen.jpg", alt: "Kitchen worktop with cast iron pan, mortar and spices" },
  },

  amenities: {
    eyebrow: "Amenities",
    title: ["Exclusive", "amenities"],
    intro: "Everything you need. Right where you are.",
    items: [
      { icon: "pool", label: "Swimming Pool", src: "/images/amenity-pool.jpg", alt: "Swimming pool edge with steel ladder and terracotta wall" },
      { icon: "gym", label: "Gym & Fitness", src: "/images/amenity-gym.jpg", alt: "Fitness room with cardio machines under brick arches" },
      { icon: "cowork", label: "Coworking & Meeting Rooms", src: "/images/amenity-cowork.jpg", alt: "Coworking desk along floor-to-ceiling windows with plants" },
      { icon: "meeting", label: "Meeting Rooms for Professionals", src: "/images/amenity-meeting.jpg", alt: "Meeting room with long table, brick walls and tall windows" },
    ] as { icon: IconKey; label: string; src: string; alt: string }[],
  },

  location: {
    eyebrow: "Location",
    title: ["Perfectly", "located"],
    intro: "Live the Jardins lifestyle every day.",
    places: [
      { icon: "shopping", name: "Oscar Freire", category: "Shopping & Fashion", minutes: 3, mode: "walk" },
      { icon: "museum", name: "Jardins Paulista", category: "Museums & Culture", minutes: 5, mode: "walk" },
      { icon: "park", name: "Parque Ibirapuera", category: "Nature & Leisure", minutes: 7, mode: "drive" },
      { icon: "mall", name: "Shopping Cidade São Paulo", category: "Top Shopping", minutes: 8, mode: "drive" },
      { icon: "landmark", name: "Conjunto Nacional", category: "Landmark", minutes: 9, mode: "drive" },
      { icon: "market", name: "St. Marché", category: "Premium Market", minutes: 3, mode: "walk" },
    ] as { icon: IconKey; name: string; category: string; minutes: number; mode: "walk" | "drive" }[],
    walk: "min walk",
    drive: "min drive",
  },

  dining: {
    eyebrow: "Experiences",
    title: ["Restaurants,", "bars & cafés"],
    intro: "The best of São Paulo, just steps away.",
    more: "and many more",
    groups: [
      {
        label: "Restaurants",
        names: ["Fasano", "Paris 6", "Arturito", "Tiquim Brabazon"],
        src: "/images/eat-restaurant.jpg",
        alt: "Candle-dark dining room with window light on set tables",
      },
      {
        label: "Bars",
        names: ["Seen São Paulo", "Le Bar", "TonTon", "Jiquitaia"],
        src: "/images/eat-bar.jpg",
        alt: "Cocktails on a wooden bar table",
      },
      {
        label: "Cafés",
        names: ["Suplicy", "L’Etincelle", "Porto Café", "Santo Grão"],
        src: "/images/eat-cafe.jpg",
        alt: "Pour-over coffee brewing on a café counter",
      },
    ],
  },

  medical: {
    eyebrow: "Medical Tourism",
    title: ["Medical", "tourism"],
    intro: "World-class care in São Paulo.",
    hospitals: [
      { icon: "hospital", name: "Sírio-Libanês" },
      { icon: "cross", name: "Hospital das Clínicas" },
      { icon: "heart", name: "InCor HCFMUSP" },
      { icon: "stethoscope", name: "Hospital Nove de Julho" },
    ] as { icon: IconKey; name: string }[],
  },

  story: {
    chapter: "02",
    eyebrow: "The BO",
    title: ["The story", "behind BO."],
    paragraphs: [
      "BO was the nickname of one of the founders’ fathers.",
      "A man remembered for elegance, integrity and attention to what truly matters.",
      "Villa BO is a tribute to that legacy.",
    ],
    // PLACEHOLDER — replace with the original BO / family photograph supplied by the client.
    image: { src: "/images/story-jardins-map.jpg", alt: "Historic map of Villa América, Jardim América and Jardim Paulista" },
    placeholderNote: "Reserved for the original photograph of BO, supplied by the family.",
    placeholderCaption: "Jardim América & Jardim Paulista — historic city map",
  },

  practical: {
    eyebrow: "Practical Info",
    title: ["Practical", "info"],
    items: [
      { icon: "concierge", label: "24/7 Security & Concierge" },
      { icon: "wifi", label: "High-speed Wi-Fi" },
      { icon: "key", label: "Self Check-in" },
      { icon: "air", label: "Air Conditioning" },
      { icon: "tv", label: "Smart TV" },
      { icon: "kitchen", label: "Fully Equipped Kitchen" },
      { icon: "washer", label: "Washer & Dryer (in unit)" },
      { icon: "desk", label: "Work Space" },
      { icon: "iron", label: "Iron & Ironing Board" },
      { icon: "toiletries", label: "Basic Toiletries" },
    ] as { icon: IconKey; label: string }[],
    locationLabel: "Location",
    address: ["Rua Gabriel Monteiro da Silva, 35", "Jardins, São Paulo — SP", "01441-000"],
    directions: "Get directions",
    directionsHref:
      "https://www.google.com/maps/search/?api=1&query=Rua+Gabriel+Monteiro+da+Silva+35+Jardins+S%C3%A3o+Paulo",
    mapTitle: "Map of Jardins, São Paulo, showing Villa BO near Rua Oscar Freire and Parque Ibirapuera",
    mapNote: "Illustrative · not to scale",
  },

  footer: {
    follow: "Follow us",
    social: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Spotify", href: "#" },
    ],
    explore: "Explore",
    visit: "Visit",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};

export type Content = typeof en;
export const content: Content = en;
