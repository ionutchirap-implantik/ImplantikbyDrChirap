import type { Locale } from "@/lib/i18n/config";
import { teamEn } from "./content-en";
import { teamRo } from "./content-ro";
import type { TeamPageContent } from "./types";

export type { TeamMember, TeamPageContent } from "./types";

export const TEAM_LEAD = {
  name: "Dr. Ionuț Chirap",
  jobTitleRo: "Medic specialist chirurgie orală și maxilo-facială",
  jobTitleEn: "Oral and maxillofacial surgeon",
  shortBioRo:
    "Medic specialist în chirurgie orală și maxilo-facială, cu peste 7.000 de implanturi inserate. Coordonează implantologia și cazurile complexe la Implantik.",
  shortBioEn:
    "Oral and maxillofacial surgeon with over 7,000 implants placed. Leads implantology and complex cases at Implantik.",
  image: "/team/dr-ionut-chirap.jpeg",
  imageAltRo: "Dr. Ionuț Chirap — chirurg oral și maxilo-facial, Implantik Iași",
  imageAltEn: "Dr. Ionuț Chirap — oral and maxillofacial surgeon, Implantik Iași",
  href: "/echipa/dr-ionut-chirap",
  alumniOfRo: "Universitatea de Medicină și Farmacie Grigore T. Popa Iași",
  alumniOfEn: "Grigore T. Popa University of Medicine and Pharmacy Iași",
} as const;

export function getTeamContent(locale: Locale): TeamPageContent {
  return locale === "ro" ? teamRo : teamEn;
}
