/**
 * Every visible string on the Villa BO landing page lives here, so a PT-BR
 * dictionary can be added later by mirroring this shape (e.g. `content.pt`).
 * Copy follows references/copy/villa-bo.txt verbatim where the spec gives it.
 * Operational facts (address, size, beds, check-in times, house rules,
 * building amenities, neighbourhood guide) come from the live booking listing
 * (bstay.com.br/pt/apartment/BD07J, read 2026-09-23) and override the spec
 * where they conflict. The operator is deliberately not named on the site.
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
    address: "Alameda Gabriel Monteiro da Silva, 130",
    district: "Jardins — São Paulo",
    coords: "23°34′ S · 46°40′ W",
  },

  booking: {
    title: "Reserve your stay",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    guestOptions: ["1 Guest", "2 Guests"],
    note: "Check-in from 3 pm · Check-out by 12 pm · Up to 2 guests",
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
    body: "A one-bedroom apartment where contemporary design meets the warmth of a home — the exclusivity of a boutique stay, with the ease of your own place in the city.",
    specs: [
      { value: "37", unit: "m²", label: "Area" },
      { value: "1", unit: "", label: "Bedroom" },
      { value: "1", unit: "", label: "Queen bed" },
      { value: "2", unit: "", label: "Guests" },
    ],
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
      { src: "/images/villa/stay-studio.jpg", alt: "Villa BO studio: bed against an exposed brick wall, round black table and a glass door to the balcony", caption: "The studio", pos: "50% 55%" },
      { src: "/images/villa/stay-bedroom.jpg", alt: "Bed with white linen, colourful cushions and a cognac leather butterfly chair", caption: "Bedroom", pos: "62% 50%" },
      { src: "/images/villa/stay-kitchenette.jpg", alt: "Kitchenette along the brick wall with black stone counter, wooden shelves and a cooktop", caption: "Kitchenette", pos: "40% 50%" },
      { src: "/images/villa/stay-balcony.jpg", alt: "Brick-walled balcony looking over the rooftops and towers of Jardins", caption: "Balcony", pos: "60% 50%" },
      { src: "/images/villa/stay-dine.jpg", alt: "Round black table with a leather pouf, smart TV and coffee corner on the brick wall", caption: "Dine & work", pos: "45% 60%" },
    ],
  },

  design: {
    eyebrow: "Design & Hospitality",
    title: ["Design &", "Hospitality"],
    intro: "Villa BO combines contemporary design with warm hospitality to create the perfect stay.",
    attributes: [
      { icon: "pen", label: "Designed for lifestyle", note: "A dedicated work corner, smart TV and high-speed Wi-Fi" },
      { icon: "warmth", label: "Warm atmosphere", note: "Brick, leather and warm lamps; blackout blinds for real sleep" },
      { icon: "leaf", label: "Natural materials", note: "Oak, brick and stone, with a balcony onto the city" },
      { icon: "kitchen", label: "Complete kitchen", note: "Fitted kitchenette, cooktop, microwave, coffee maker, wine glasses" },
      { icon: "linen", label: "Premium linens", note: "A queen bed dressed in high-quality bed linen" },
      { icon: "towel", label: "Premium towels", note: "Full towel set and a high-pressure rain shower" },
    ] as { icon: IconKey; label: string; note: string }[],
    imageMain: { src: "/images/villa/design-bedroom.jpg", alt: "Bedroom framed by white walls: brick headboard wall, warm reading lamps and a patterned rug" },
    imageSecondary: { src: "/images/villa/design-kitchen.jpg", alt: "Kitchenette detail: oak shelves with glasses and cups against the brick wall above a black stone counter" },
  },

  amenities: {
    eyebrow: "Amenities",
    title: ["Exclusive", "amenities"],
    intro: "Everything you need. Right where you are.",
    items: [
      { icon: "pool", label: "Swimming Pool", src: "/images/villa/amenity-pool.jpg", alt: "Rooftop pool with sun loungers and the São Paulo skyline", pos: "38% 60%" },
      { icon: "gym", label: "Gym & Fitness", src: "/images/villa/amenity-gym.jpg", alt: "Wood-panelled gym with cardio machines and windows onto the trees", pos: "40% 55%" },
      { icon: "cowork", label: "Coworking & Meeting Rooms", src: "/images/villa/amenity-cowork.jpg", alt: "Coworking counter with lit shelves, leather stools and glass partitions", pos: "55% 55%" },
      { icon: "meeting", label: "Meeting Rooms for Professionals", src: "/images/villa/amenity-meeting.jpg", alt: "Meeting room with a long oak table, brick wall and screen", pos: "60% 55%" },
    ] as { icon: IconKey; label: string; src: string; alt: string; pos: string }[],
    building: {
      label: "Around the building",
      also: ["Dry sauna", "Solarium", "Shared laundry", "24-hour delivery reception"],
      alsoLabel: "Also in the building",
      items: [
        { src: "/images/villa/building-rooftop.jpg", alt: "Rooftop deck with sun loungers on the lawn and a city view", caption: "Solarium", pos: "55% 60%" },
        { src: "/images/villa/building-lounge.jpg", alt: "Lounge with a linen sofa, oak tables and large art panels", caption: "Lounge & TV room", pos: "60% 50%" },
        { src: "/images/villa/building-kitchen.jpg", alt: "Gourmet kitchen with a marble island, oven and cooktop", caption: "Gourmet kitchen", pos: "45% 55%" },
        { src: "/images/villa/building-lobby.jpg", alt: "Double-height lobby with marble, oak slats and a garden behind the glass", caption: "Lobby", pos: "55% 50%" },
      ],
    },
  },

  location: {
    eyebrow: "Location",
    title: ["Perfectly", "located"],
    intro: "Live the Jardins lifestyle every day.",
    view: { src: "/images/villa/location-view.jpg", alt: "View over the tree canopy of Jardins towards the São Paulo skyline" },
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
    transport: {
      label: "Getting around",
      items: [
        { name: "Oscar Freire & Consolação", detail: "Metro stations nearby" },
        { name: "Congonhas Airport", detail: "About 10 km away" },
        { name: "By car", detail: "No on-site parking — street or nearby car parks" },
      ],
    },
    day: {
      label: "A day in Jardins",
      steps: [
        { time: "Morning", text: "Coffee and brunch at Santo Grão." },
        { time: "Late morning", text: "Rua Oscar Freire — for shopping, or just the windows and the movement." },
        { time: "Afternoon", text: "The MIS, Museu da Imagem e do Som, or the garden of the Museu da Casa Brasileira." },
        { time: "Evening", text: "Casa Santa Luzia for cheeses and wine, then dinner under the fig tree at Figueira Rubaiyat." },
      ],
    },
  },

  dining: {
    eyebrow: "Experiences",
    title: ["Restaurants,", "bars & cafés"],
    intro: "The best of São Paulo, just steps away.",
    more: "and many more",
    groups: [
      {
        label: "Restaurants",
        names: ["Fasano", "Figueira Rubaiyat", "Paris 6", "Arturito", "Tiquim Brabazon"],
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
      { icon: "washer", label: "Washing Machine (in unit)" },
      { icon: "desk", label: "Work Space" },
      { icon: "iron", label: "Iron & Ironing Board" },
      { icon: "toiletries", label: "Basic Toiletries" },
      { icon: "linen", label: "Bed Linen & Towels" },
      { icon: "leaf", label: "Balcony with City View" },
    ] as { icon: IconKey; label: string }[],
    times: [
      { value: "3 pm", label: "Check-in", detail: "Arrivals until 10 pm" },
      { value: "12 pm", label: "Check-out", detail: "Express check-out" },
      { value: "10 pm", label: "Quiet hours", detail: "Until 8 am" },
    ],
    rules: {
      label: "Good to know",
      items: [
        "Villa BO is a furnished apartment in a residential building, not a hotel — please respect the building’s rules. Visitors are not allowed in the building or the apartment during your stay.",
        "After booking, send a photo ID (RG, CNH or passport), date of birth and CPF or passport number for every guest, so the building can release your access. On the morning of arrival you receive the apartment number, door code and Wi-Fi details by message.",
        "Bed linen, towels and basic bath and kitchen supplies are provided and not replenished during the stay. Extra cleaning on request, with 24 hours’ notice.",
        "Non-smoking throughout. No parties or events, no pets. Children are welcome; cots are not available.",
        "Stays of 28 nights or more are welcome. Renovation noise from neighbouring flats is possible on weekdays 8 am–5 pm and Saturdays 8 am–12 pm.",
      ],
    },
    locationLabel: "Location",
    address: ["Alameda Gabriel Monteiro da Silva, 130", "Jardim América, São Paulo — SP", "01442-000"],
    directions: "Get directions",
    directionsHref:
      "https://www.google.com/maps/search/?api=1&query=-23.562157%2C-46.67426",
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
