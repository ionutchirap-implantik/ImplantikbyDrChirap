import type { ServicePageSlug } from "@/lib/i18n/service-pages/types";

/** Hero images per service route — filenames match URL slugs under /public/images/services/ */
export const SERVICE_HERO_IMAGES: Record<ServicePageSlug, string> = {
  "stomatologie-fara-bariere": "/images/services/stomatologie-fara-bariere.png",
  implantologie: "/images/services/implantologie.png",
  "implant-all-on-4-iasi": "/images/services/implant-all-on-4-iasi.png",
  "chirurgie-orala": "/images/services/chirurgie-orala.png",
  "reabilitari-complexe": "/images/services/reabilitari-complexe.png",
  "protetica-dentara": "/images/services/protetica-dentara.png",
  ortodontie: "/images/services/ortodontie.png",
  stomatologie: "/team/dr-ana-maria-chirap.jpeg",
  "estetica-dentara": "/images/services/estetica-dentara.png",
  "estetica-faciala": "/images/services/estetica-faciala.png",
};

export const TEAM_IMAGES = {
  drIonutChirap: "/team/dr-ionut-chirap.jpeg",
  drAnaMariaChirap: "/team/dr-ana-maria-chirap.jpeg",
} as const;

export const ECHIPA_IMAGES = {
  drAnaMariaChirap: "/echipa/dr-ana-maria-chirap.jpg",
  drRocsanaAnichiforesei: "/echipa/dr-rocsana-anichiforesei.jpg",
  drBiancaMihalcutChirila: "/echipa/dr-bianca-mihalcut-chirila.jpg",
  drIoanaAndriescu: "/echipa/dr-ioana-andriescu.jpg",
} as const;

export const CLINIC_IMAGES = {
  clinic1: "/images/clinic/clinic-1.jpeg",
  clinic2: "/images/clinic/clinic-2.jpeg",
  clinic3: "/images/clinic/clinic-3.jpeg",
} as const;

export function getServiceHeroImage(slug: ServicePageSlug): string {
  return SERVICE_HERO_IMAGES[slug];
}
