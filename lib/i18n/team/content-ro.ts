import type { TeamPageContent } from "./types";

const ROCSANA_COURSES = [
  "The Straight Wire — 2 Year Orthodontic Program | Lecturers: Dr. A. Davide Mirabella, Dr. Enzo Pasciuti, Dr. Luca Lombardo | 2017–2018",
  "Inter-arch Treatment Mechanics — Part II (Class III and Asymmetrical Treatment) | Lecturer: Richard P. McLaughlin | 2018, Varșovia, Polonia",
  "Class II Malocclusions from A to Z | Lecturer: Raffaele Spena | 2019, București",
  "Curs modular de ortodonție — Learning by Doing, Ediția I | 2019",
  "FACE Treatment Philosophy | Lecturers: Dr. Domingo Martin, Renato Cocconi | 2020–2022",
  "Orthognathic Surgery International Course | 2021, San Sebastián, Spania",
];

export const teamRo: TeamPageContent = {
  meta: {
    title: "Echipa medicală Iași — Implantik by Dr. Chirap",
    description:
      "Medicii Implantik: Dr. Ionuț Chirap, chirurg OMF, Dr. Ana Maria Chirap, Dr. Rocsana Anichiforesei și echipa de stomatologie din Iași. Programează o consultație.",
  },
  title: "Echipa",
  subtitle: "Medicii Implantik by Dr. Chirap, Iași.",
  leadSectionTitle: "Coordonator medical",
  teamSectionTitle: "Echipa medicală",
  readMore: "Citește bio complet",
  readLess: "Ascunde",
  assistantsNote:
    "Alături de medici, echipa Implantik include asistente medicale dedicate, care te însoțesc la fiecare vizită.",
  ctaLabel: "Programează o consultație",
  members: [
    {
      id: "ana-maria-chirap",
      name: "Dr. Ana Maria Chirap",
      jobTitle: "Medic stomatolog · Protetică și estetică dentară",
      shortBio:
        "Medic stomatolog, absolventă a Facultății de Medicină Dentară, cu pasiune pentru protetică și estetică dentară. Parte din echipa Implantik.",
      fullBio:
        "Dr. Ana Maria Chirap este absolventă a Facultății de Medicină Dentară, iar activitatea sa profesională este ghidată de dorința de a oferi pacienților tratamente de înaltă calitate, într-un mediu bazat pe încredere, profesionalism și atenție la detalii. Consideră că dezvoltarea continuă este esențială în medicina dentară, motiv pentru care participă constant la cursuri și programe de formare profesională, pentru a integra în practica sa cele mai moderne tehnici și concepte terapeutice.\n\nPasiunea pentru protetică și estetică dentară o motivează să caute permanent cele mai bune soluții pentru fiecare pacient. Îmbină rigurozitatea medicală cu simțul estetic, având ca obiectiv obținerea unor rezultate funcționale, naturale și armonioase. Este o persoană perfecționistă, iar această trăsătură se reflectă în atenția pe care o acordă fiecărui detaliu și în preocuparea constantă pentru calitatea tratamentelor oferite.\n\nCrede că un zâmbet sănătos începe cu o relație bazată pe comunicare și încredere. De aceea, își dorește ca fiecare pacient să beneficieze de o experiență confortabilă, de soluții personalizate și de îngrijire adaptată nevoilor sale, astfel încât să își recapete sănătatea orală și încrederea în propriul zâmbet.",
      image: "/echipa/dr-ana-maria-chirap.jpg",
      imageAlt: "Dr. Ana Maria Chirap — medic stomatolog, Implantik Iași",
      alumniOf: "Facultatea de Medicină Dentară",
      medicalSpecialty: "Dentistry / Prosthodontics",
    },
    {
      id: "rocsana-anichiforesei",
      name: "Dr. Rocsana Anichiforesei",
      jobTitle: "Medic specialist în Ortodonție și Ortopedie Dento-facială",
      shortBio:
        "Medic specialist în Ortodonție și Ortopedie Dento-facială, cu peste 10 ani de experiență. Tratamente individualizate pentru copii și adulți, cu formare internațională continuă.",
      fullBio:
        "Dr. Rocsana Anichiforesei este medic specialist în Ortodonție și Ortopedie Dento-facială, un medic pasionat de transformarea zâmbetelor prin intermediul tratamentelor individualizate.\n\nCu o experiență practică de peste 10 ani, Dr. Rocsana Anichiforesei tratează pacienți copii și adulți de toate vârstele, folosind cele mai moderne tehnici și tehnologii ortodontice.\n\nFiecare caz este analizat cu atenție (radiografii, ședințe foto, scanări), iar planul de tratament este personalizat nevoilor și explicat clar, într-o manieră empatică, transformând vizita la cabinet într-o experiență confortabilă.\n\nPentru Dr. Rocsana Anichiforesei, educația și formarea în ortodonție nu s-au oprit odată cu absolvirea facultății — investește permanent în formarea sa și participă la cele mai bune cursuri de pregătire practică, interne și internaționale, dintre care câteva:",
      image: "/echipa/dr-rocsana-anichiforesei.jpg",
      imageAlt: "Dr. Rocsana Anichiforesei — medic specialist ortodonție, Implantik Iași",
      imagePlaceholder: true,
      alumniOf: "Facultatea de Medicină Dentară",
      medicalSpecialty: "Orthodontics",
      professionalTraining: {
        sectionTitle: "Formare profesională",
        items: ROCSANA_COURSES,
      },
    },
    {
      id: "daciana-matei",
      name: "Dr. Daciana-Mihaela Matei",
      jobTitle: "Medic stomatolog",
      shortBio:
        "Medic stomatolog, absolventă a Facultății de Medicină Dentară, UMF «Grigore T. Popa» Iași. Face parte din povestea Implantik încă din studenție — din 2020 ca voluntar, iar din 2024 ca medic.",
      fullBio:
        "Dr. Daciana-Mihaela Matei a absolvit Facultatea de Medicină Dentară a Universității de Medicină și Farmacie «Grigore T. Popa» din Iași (2018–2024) și s-a format, pas cu pas, chiar în clinica Implantik — unde a activat ca voluntar din 2020, iar din 2024 este medic stomatolog al echipei.\n\nSe concentrează pe stomatologia preventivă și pe tratamentele de zi cu zi: profilaxie (detartraj, periaj profesional), tratamentul cariilor, tratamente endodontice și extracții simple — cu accent pe crearea unui mediu relaxant pentru pacient și pe explicarea clară a fiecărui pas.\n\nParticipă constant la congrese și cursuri de formare continuă (STOMIS Iași 2022, Congress of Dental Medicine Iași 2024, «Repere în Medicina Avansată» 2025, workshop de chirurgie parodontală).",
      image: "/echipa/dr-daciana-matei.jpg",
      imageAlt: "Dr. Daciana-Mihaela Matei — medic stomatolog, Implantik Iași",
      alumniOf: "Universitatea de Medicină și Farmacie Grigore T. Popa Iași",
      medicalSpecialty: "Dentistry",
    },
    {
      id: "bianca-mihalcut-chirila",
      name: "Dr. Bianca-Ioana Mihălcuț-Chirilă",
      jobTitle: "Medic stomatolog",
      shortBio:
        "Medic stomatolog, absolventă UMF «Grigore T. Popa» Iași, parte din echipa Implantik din 2024. Atentă la planul de tratament și la relația cu pacientul.",
      fullBio:
        "Dr. Bianca-Ioana Mihălcuț-Chirilă este medic stomatolog, absolventă a Universității de Medicină și Farmacie «Grigore T. Popa» din Iași, și face parte din echipa Implantik din ianuarie 2024.\n\nActivitatea ei clinică acoperă tratamentele restaurative (obturații), igienizările profesionale, tratamentele endodontice și lucrările protetice — cu accent pe evaluarea atentă a pacientului și pe construirea unui plan de tratament explicat pe înțeles.\n\nImplicarea în proiecte de voluntariat medical pentru comunități vulnerabile i-a modelat felul de a lucra: cu răbdare, empatie și respect pentru fiecare pacient. A participat la congrese internaționale de medicină dentară pentru studenți și tineri medici (STOMIS, DENTis).",
      image: "/echipa/dr-bianca-mihalcut-chirila.jpg",
      imageAlt: "Dr. Bianca-Ioana Mihălcuț-Chirilă — medic stomatolog, Implantik Iași",
      alumniOf: "Universitatea de Medicină și Farmacie Grigore T. Popa Iași",
      medicalSpecialty: "Dentistry",
    },
    {
      id: "ioana-andriescu",
      name: "Dr. Ioana Mădălina Andriescu",
      jobTitle: "Medic stomatolog",
      shortBio:
        "Medic stomatolog, absolventă UMF «Grigore T. Popa» Iași, în echipa Implantik din 2024. Formare continuă în endodonție și protetică pe implanturi.",
      fullBio:
        "Dr. Ioana Mădălina Andriescu a absolvit Universitatea de Medicină și Farmacie «Grigore T. Popa» din Iași (2016–2022) și este medic stomatolog în echipa Implantik din 2024.\n\nAbordează fiecare caz cu atenție la detalii și empatie — de la diagnostic și planul de tratament adaptat, până la realizarea tratamentului — și își dezvoltă constant competențele prin cursuri de specializare: tratament endodontic cu sistem reciproc (2024), noțiuni de protetică pe implanturi (2024), cursul «Structure» (2025).",
      image: "/echipa/dr-ioana-andriescu.jpg",
      imageAlt: "Dr. Ioana Mădălina Andriescu — medic stomatolog, Implantik Iași",
      alumniOf: "Universitatea de Medicină și Farmacie Grigore T. Popa Iași",
      medicalSpecialty: "Dentistry",
    },
  ],
};
