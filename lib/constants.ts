const CLINIC_ADDRESS = {
  formatted: "Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581",
  street: "Strada Milcov nr. 2, bl. 1206, sc. D",
  locality: "Iași",
  country: "RO",
  postalCode: "700581",
  geo: { latitude: 47.1598596, longitude: 27.5710137 },
  googlePlaceId: "0x40cafb7240aa0941:0xe693326141ff6c45",
} as const;

const mapsAddressQuery = encodeURIComponent(CLINIC_ADDRESS.formatted);
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/5TvStSpTFQvoSzhy9" as const;

export const SITE = {
  name: "Implantik by Dr. Chirap",
  shortName: "Implantik",
  tagline: "Clinică dentară, Iași",
  domain: "implantik.ro",
  url: "https://implantik.ro",
  logoPath: "/logo.png",
  logoPdfPath: "/logo.pdf",
  phone: "(0758) 169 234",
  phoneHref: "tel:+40758169234",
  phoneNote: "Disponibile Luni–Vineri, 8:00–19:30",
  whatsapp: "(0758) 169 234",
  whatsappHref: "https://wa.me/40758169234",
  email: "implantikdrchirap@gmail.com",
  emailHref: "mailto:implantikdrchirap@gmail.com",
  address: CLINIC_ADDRESS.formatted,
  streetAddress: CLINIC_ADDRESS.street,
  addressLocality: CLINIC_ADDRESS.locality,
  addressCountry: CLINIC_ADDRESS.country,
  postalCode: CLINIC_ADDRESS.postalCode,
  geo: CLINIC_ADDRESS.geo,
  hours: "Luni–Vineri 8:00–19:30; Sâmbătă & Duminică: Închis",
  openingHours: ["Mo-Fr 08:00-19:30"],
  priceRange: "$$",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-5QFHBCH",
  gtmServerUrl: process.env.NEXT_PUBLIC_GTM_SERVER_URL ?? "[GTM_SERVER_URL]",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "[GA4_ID]",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "[META_PIXEL_ID]",
  metaCapiToken: "[META_CAPI_TOKEN]",
  tiktokPixelId: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ?? "[TIKTOK_PIXEL_ID]",
  tiktokEventsToken: "[TIKTOK_EVENTS_TOKEN]",
  googleRating: "[RATING REAL]",
  googleProfileUrl: GOOGLE_MAPS_URL,
  mapsUrl: GOOGLE_MAPS_URL,
  // Iframe embed (același pin ca mapsUrl)
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1356.4488081514626!2d27.571013699999998!3d47.159859600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7240aa0941%3A0xe693326141ff6c45!2sImplantik%20by%20Dr.%20Chirap%20Clinica%20Medicina%20Dentara!5e0!3m2!1sen!2sro!4v1781158209675!5m2!1sen!2sro",
  mapsDirectionsUrl: GOOGLE_MAPS_URL,
  wazeUrl: `https://www.waze.com/ul?q=${mapsAddressQuery}&ll=${CLINIC_ADDRESS.geo.latitude},${CLINIC_ADDRESS.geo.longitude}&navigate=yes`,
  social: {
    handle: "@implantikbydr.chirap",
    facebook: "https://www.facebook.com/implantik",
    instagram: "https://www.instagram.com/implantikbydr.chirap/",
    tiktok: "https://www.tiktok.com/@implantikbydrchirap",
  },
  legal: {
    company: "Implantik Chirap SRL",
    regCom: "J22/216/2019",
    cui: "40441553",
    copyrightFrom: 2019,
  },
} as const;

export const FORM_SERVICES = [
  "stomatologie",
  "implantologie",
  "chirurgie",
  "ortodontie",
  "estetica_dentara",
  "estetica_faciala",
] as const;

export type FormService = (typeof FORM_SERVICES)[number];

export const PLACEHOLDERS = {
  logoVector: "/logo.pdf",
  photo: "[POZĂ REALĂ DE ADĂUGAT]",
  stat: "[CIFRĂ REALĂ, DOVEDIBILĂ — DE CONFIRMAT]",
  beforeAfter: "[CAZ PROPRIU + CONSIMȚĂMÂNT PACIENT]",
  bio: "[BIO + TITLURI/COMPETENȚE Dr. Chirap]",
  prices: "[PREȚURI — DE CONFIRMAT]",
  brandPurple: "[MOV EXACT din logo — DE CALIBRAT]",
} as const;
