export const SITE = {
  name: "Implantik by Dr. Chirap",
  shortName: "Implantik",
  tagline: "Clinică dentară, Iași",
  domain: "implantik.ro",
  url: "https://implantik.ro",
  logoPath: "/Logo-Implantik-Dr.-Chirap.png",
  phone: "(0758) 169 234",
  phoneHref: "tel:+40758169234",
  phoneNote: "Disponibile Luni–Vineri, 8:00–19:30",
  whatsapp: "(0758) 169 234",
  whatsappHref: "https://wa.me/40758169234",
  email: "implantikdrchirap@gmail.com",
  emailHref: "mailto:implantikdrchirap@gmail.com",
  address: "Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581",
  addressLocality: "Iași",
  addressCountry: "RO",
  postalCode: "700581",
  geo: { latitude: 47.159767, longitude: 27.568553 },
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
  googleProfileUrl: "https://g.page/implantik?share",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.9023506684193!2d27.568553015614988!3d47.15976687915747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7240aa0941%3A0xe693326141ff6c45!2sImplantik%20by%20Dr.%20Chirap%20Clinica%20Medicina%20Dentara!5e0!3m2!1sen!2sro!4v1620795858505!5m2!1sen!2sro",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=47.159767,27.568553",
  wazeUrl: "https://www.waze.com/ul?ll=47.159767,27.568553&navigate=yes",
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
  logoVector: "[LOGO VECTOR DE PRIMIT]",
  photo: "[POZĂ REALĂ DE ADĂUGAT]",
  stat: "[CIFRĂ REALĂ, DOVEDIBILĂ — DE CONFIRMAT]",
  beforeAfter: "[CAZ PROPRIU + CONSIMȚĂMÂNT PACIENT]",
  bio: "[BIO + TITLURI/COMPETENȚE Dr. Chirap]",
  prices: "[PREȚURI — DE CONFIRMAT]",
  brandPurple: "[MOV EXACT din logo — DE CALIBRAT]",
} as const;
