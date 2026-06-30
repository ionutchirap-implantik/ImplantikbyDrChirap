import type { TeamPageContent } from "./types";

const ROCSANA_COURSES = [
  "The Straight Wire — 2 Year Orthodontic Program | Lecturers: Dr. A. Davide Mirabella, Dr. Enzo Pasciuti, Dr. Luca Lombardo | 2017–2018",
  "Inter-arch Treatment Mechanics — Part II (Class III and Asymmetrical Treatment) | Lecturer: Richard P. McLaughlin | 2018, Warsaw, Poland",
  "Class II Malocclusions from A to Z | Lecturer: Raffaele Spena | 2019, Bucharest",
  "Curs modular de ortodonție — Learning by Doing, Ediția I | 2019",
  "FACE Treatment Philosophy | Lecturers: Dr. Domingo Martin, Renato Cocconi | 2020–2022",
  "Orthognathic Surgery International Course | 2021, San Sebastián, Spain",
];

export const teamEn: TeamPageContent = {
  meta: {
    title: "Medical team Iași — Implantik by Dr. Chirap",
    description:
      "The Implantik team: Dr. Ionuț Chirap, oral and maxillofacial surgeon, Dr. Ana Maria Chirap, Dr. Rocsana Anichiforesei, and dentists in Iași, Romania. Book a consultation.",
  },
  title: "Our team",
  subtitle: "The Implantik by Dr. Chirap team, Iași, Romania.",
  leadSectionTitle: "Lead surgeon",
  teamSectionTitle: "Medical team",
  readMore: "Read full bio",
  readLess: "Show less",
  assistantsNote:
    "Alongside our dentists, the Implantik team includes dedicated dental assistants who support you at every visit.",
  ctaLabel: "Book a consultation",
  members: [
    {
      id: "ana-maria-chirap",
      name: "Dr. Ana Maria Chirap",
      jobTitle: "Dentist — Prosthodontics & Aesthetic Dentistry",
      shortBio:
        "Dentist, graduate of the Faculty of Dental Medicine, with a passion for prosthodontics and aesthetic dentistry. Part of the Implantik team.",
      fullBio:
        "Dr. Ana Maria Chirap is a graduate of the Faculty of Dental Medicine, and her professional activity is guided by the desire to offer patients high-quality treatments in an environment based on trust, professionalism, and attention to detail. She considers continuous development essential in dental medicine, which is why she regularly attends courses and professional training programmes to integrate the most modern techniques and therapeutic concepts into her practice.\n\nHer passion for prosthodontics and aesthetic dentistry motivates her to constantly seek the best solutions for each patient. She combines medical rigour with aesthetic sense, aiming for functional, natural, and harmonious results. She is a perfectionist, and this trait is reflected in the attention she pays to every detail and in her constant concern for the quality of treatments offered.\n\nShe believes that a healthy smile begins with a relationship based on communication and trust. That is why she wants every patient to benefit from a comfortable experience, personalised solutions, and care adapted to their needs, so they can regain oral health and confidence in their own smile.",
      image: "/echipa/dr-ana-maria-chirap.jpg",
      imageAlt: "Dr. Ana Maria Chirap — dentist, Implantik Iași",
      alumniOf: "Faculty of Dental Medicine",
      medicalSpecialty: "Dentistry / Prosthodontics",
    },
    {
      id: "rocsana-anichiforesei",
      name: "Dr. Rocsana Anichiforesei",
      jobTitle: "Orthodontics & Dentofacial Orthopedics Specialist",
      shortBio:
        "Orthodontics and dentofacial orthopedics specialist with over 10 years of experience. Individualised treatments for children and adults, with ongoing international training.",
      fullBio:
        "Dr. Rocsana Anichiforesei is a specialist in Orthodontics and Dentofacial Orthopedics, a physician passionate about transforming smiles through individualised treatments.\n\nWith over 10 years of practical experience, Dr. Rocsana Anichiforesei treats child and adult patients of all ages, using the most modern orthodontic techniques and technologies.\n\nEach case is analysed carefully (X-rays, photo sessions, scans), and the treatment plan is personalised to the patient's needs and explained clearly, in an empathetic manner, making the clinic visit a comfortable experience.\n\nFor Dr. Rocsana Anichiforesei, education and training in orthodontics did not stop with graduation from dental school — she continuously invests in her development and participates in the best practical training courses, domestic and international, including:",
      image: "/echipa/dr-rocsana-anichiforesei.jpg",
      imageAlt: "Dr. Rocsana Anichiforesei — orthodontics specialist, Implantik Iași",
      imagePlaceholder: true,
      alumniOf: "Faculty of Dental Medicine",
      medicalSpecialty: "Orthodontics",
      professionalTraining: {
        sectionTitle: "Professional training",
        items: ROCSANA_COURSES,
      },
    },
    {
      id: "bianca-mihalcut-chirila",
      name: "Dr. Bianca-Ioana Mihălcuț-Chirilă",
      jobTitle: "Dentist",
      shortBio:
        "Dentist, graduate of Grigore T. Popa University of Medicine and Pharmacy Iași, on the Implantik team since 2024. Attentive to treatment planning and the patient relationship.",
      fullBio:
        "Dr. Bianca-Ioana Mihălcuț-Chirilă is a dentist, graduate of Grigore T. Popa University of Medicine and Pharmacy in Iași, and has been part of the Implantik team since January 2024.\n\nHer clinical work covers restorative treatments (fillings), professional hygiene, endodontic care, and prosthetic work — with emphasis on careful patient evaluation and building a treatment plan explained in plain language.\n\nHer involvement in medical volunteer projects for vulnerable communities shaped how she works: with patience, empathy, and respect for every patient. She has attended international dental medicine congresses for students and young doctors (STOMIS, DENTis).",
      image: "/echipa/dr-bianca-mihalcut-chirila.jpg",
      imageAlt: "Dr. Bianca-Ioana Mihălcuț-Chirilă — dentist, Implantik Iași",
      alumniOf: "Grigore T. Popa University of Medicine and Pharmacy Iași",
      medicalSpecialty: "Dentistry",
    },
    {
      id: "ioana-andriescu",
      name: "Dr. Ioana Mădălina Andriescu",
      jobTitle: "Dentist",
      shortBio:
        "Dentist, graduate of Grigore T. Popa University of Medicine and Pharmacy Iași, on the Implantik team since 2024. Continuing education in endodontics and implant prosthetics.",
      fullBio:
        "Dr. Ioana Mădălina Andriescu graduated from Grigore T. Popa University of Medicine and Pharmacy in Iași (2016–2022) and has been a dentist on the Implantik team since 2024.\n\nShe approaches each case with attention to detail and empathy — from diagnosis and an adapted treatment plan to delivering care — and continuously develops her skills through specialization courses: reciproc endodontic treatment (2024), implant prosthetics fundamentals (2024), the «Structure» course (2025).",
      image: "/echipa/dr-ioana-andriescu.jpg",
      imageAlt: "Dr. Ioana Mădălina Andriescu — dentist, Implantik Iași",
      alumniOf: "Grigore T. Popa University of Medicine and Pharmacy Iași",
      medicalSpecialty: "Dentistry",
    },
  ],
};
