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
      { src: "/images/bo/stay-studio.jpg", alt: "Villa BO studio: bed against an exposed brick wall, round black table and a glass door to the balcony", caption: "The studio", pos: "50% 55%" },
      { src: "/images/bo/stay-bedroom.jpg", alt: "Bed with white linen, colourful cushions and a cognac leather butterfly chair", caption: "Bedroom", pos: "62% 50%" },
      { src: "/images/bo/stay-kitchenette.jpg", alt: "Kitchenette along the brick wall with black stone counter, wooden shelves and a cooktop", caption: "Kitchenette", pos: "40% 50%" },
      { src: "/images/bo/stay-balcony.jpg", alt: "Brick-walled balcony looking over the rooftops and towers of Jardins", caption: "Balcony", pos: "60% 50%" },
      { src: "/images/bo/stay-dine.jpg", alt: "Round black table with a leather pouf, smart TV and coffee corner on the brick wall", caption: "Dine & work", pos: "45% 60%" },
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
    imageMain: { src: "/images/bo/design-bedroom.jpg", alt: "Bedroom framed by white walls: brick headboard wall, warm reading lamps and a patterned rug" },
    imageSecondary: { src: "/images/bo/design-kitchen.jpg", alt: "Kitchenette detail: oak shelves with glasses and cups against the brick wall above a black stone counter" },
  },

  amenities: {
    eyebrow: "Amenities",
    title: ["Exclusive", "amenities"],
    intro: "Everything you need. Right where you are.",
    items: [
      { icon: "pool", label: "Swimming Pool", src: "/images/bo/amenity-pool.jpg", alt: "Rooftop pool with sun loungers and the São Paulo skyline", pos: "38% 60%" },
      { icon: "gym", label: "Gym & Fitness", src: "/images/bo/amenity-gym.jpg", alt: "Wood-panelled gym with cardio machines and windows onto the trees", pos: "40% 55%" },
      { icon: "cowork", label: "Coworking & Meeting Rooms", src: "/images/bo/amenity-cowork.jpg", alt: "Coworking counter with lit shelves, leather stools and glass partitions", pos: "55% 55%" },
      { icon: "meeting", label: "Meeting Rooms for Professionals", src: "/images/bo/amenity-meeting.jpg", alt: "Meeting room with a long oak table, brick wall and screen", pos: "60% 55%" },
    ] as { icon: IconKey; label: string; src: string; alt: string; pos: string }[],
    building: {
      label: "Around the building",
      items: [
        { src: "/images/bo/building-rooftop.jpg", alt: "Rooftop deck with sun loungers on the lawn and a city view", caption: "Rooftop", pos: "55% 60%" },
        { src: "/images/bo/building-lounge.jpg", alt: "Lounge with a linen sofa, oak tables and large art panels", caption: "Lounge", pos: "60% 50%" },
        { src: "/images/bo/building-kitchen.jpg", alt: "Gourmet kitchen with a marble island, oven and cooktop", caption: "Gourmet kitchen", pos: "45% 55%" },
        { src: "/images/bo/building-lobby.jpg", alt: "Double-height lobby with marble, oak slats and a garden behind the glass", caption: "Lobby", pos: "55% 50%" },
      ],
    },
  },

  location: {
    eyebrow: "Location",
    title: ["Perfectly", "located"],
    intro: "Live the Jardins lifestyle every day.",
    view: { src: "/images/bo/location-view.jpg", alt: "View over the tree canopy of Jardins towards the São Paulo skyline" },
    viewCaption: "Jardins, from above",
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
      },
      {
        label: "Bars",
        names: ["Seen São Paulo", "Le Bar", "TonTon", "Jiquitaia"],
      },
      {
        label: "Cafés",
        names: ["Suplicy", "L’Etincelle", "Porto Café", "Santo Grão"],
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
    rules: {
      label: "Good to know",
      items: [
        "Villa BO is in a residential building, not a hotel — please respect the building’s rules.",
        "Send a photo ID (CPF or passport) before arrival so your access can be released. Access desk: Mon–Fri 8am–11pm · weekends & holidays 10am–8pm.",
        "Basic supplies are included and not replenished during the stay. Extra cleaning on request, with 24 hours’ notice.",
        "No smoking in the apartment, on the balcony or in common areas.",
        "Quiet hours from 10pm, out of respect for the residents.",
      ],
    },
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
