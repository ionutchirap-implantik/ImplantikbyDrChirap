import type { Locale } from "@/lib/i18n/config";
import { teamEn } from "./content-en";
import { teamRo } from "./content-ro";
import type { TeamPageContent } from "./types";

export type { TeamMember, TeamPageContent } from "./types";

export const TEAM_LEAD = {
  name: "Dr. Ionuț Chirap",
  jobTitleRo: "Medic specialist în chirurgie orală și maxilo-facială · Coordonatorul clinicii",
  jobTitleEn: "Oral and Maxillofacial Surgeon · Clinic coordinator",
  shortBioRo:
    "Medic specialist în chirurgie orală și maxilo-facială, cu peste 7.000 de implanturi inserate. Coordonatorul clinicii; coordonează implantologia și cazurile complexe la Implantik.",
  shortBioEn:
    "Oral and maxillofacial surgery specialist with over 7,000 implants placed. Clinic coordinator; leads implantology and complex cases at Implantik.",
  fullBioRo:
    "Dr. Ionuț Chirap este medic specialist în chirurgie orală și maxilo-facială, cu o formare academică complexă, fiind absolvent atât al Facultății de Medicină Generală, cât și al Facultății de Medicină Dentară. Această dublă specializare îi oferă o perspectivă completă asupra sănătății pacientului și îi permite să abordeze cazurile cu profesionalism și precizie.\n\nDe-a lungul carierei, a participat la numeroase cursuri și programe de perfecționare, fiind preocupat constant de actualizarea cunoștințelor și de integrarea celor mai moderne tehnici și tratamente în practica sa. Experiența acumulată în mulți ani de activitate îi conferă siguranță în diagnostic și eficiență în tratamente și în cazurile complexe.\n\nCu numeroase colaborări în toată Moldova, a reușit să trateze multiple cazuri dintre cele mai complicate și laborioase.\n\nPrin seriozitate, atenție la detalii și empatie față de pacienți, Dr. Ionuț Chirap își construiește relațiile profesionale pe încredere și respect. Este dedicat oferirii unor servicii medicale de înaltă calitate, punând întotdeauna pe primul loc sănătatea și confortul pacientului.",
  fullBioEn:
    "Dr. Ionuț Chirap is a specialist in oral and maxillofacial surgery, with complex academic training as a graduate of both the Faculty of General Medicine and the Faculty of Dental Medicine. This dual specialisation gives him a complete perspective on patient health and allows him to approach cases with professionalism and precision.\n\nThroughout his career, he has participated in numerous courses and continuing education programmes, constantly focused on updating his knowledge and integrating the most modern techniques and treatments into his practice. Experience accumulated over many years of activity gives him confidence in diagnosis and efficiency in treatments, including complex cases.\n\nWith numerous collaborations throughout Moldova, he has successfully treated many of the most complicated and demanding cases.\n\nThrough seriousness, attention to detail, and empathy towards patients, Dr. Ionuț Chirap builds professional relationships on trust and respect. He is dedicated to providing high-quality medical services, always putting patient health and comfort first.",
  image: "/team/dr-ionut-chirap.jpeg",
  imageAltRo: "Dr. Ionuț Chirap — chirurg oral și maxilo-facial, Implantik Iași",
  imageAltEn: "Dr. Ionuț Chirap — oral and maxillofacial surgeon, Implantik Iași",
  href: "/echipa/dr-ionut-chirap",
  alumniOfRo: "Universitatea de Medicină și Farmacie Grigore T. Popa Iași",
  alumniOfEn: "Grigore T. Popa University of Medicine and Pharmacy Iași",
  medicalSpecialty: "Oral and Maxillofacial Surgery",
} as const;

export function getTeamContent(locale: Locale): TeamPageContent {
  return locale === "ro" ? teamRo : teamEn;
}
