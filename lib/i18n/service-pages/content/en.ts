import type { ServicePageContent, ServicePageSlug } from "../types";

export const servicePagesEn: Record<ServicePageSlug, ServicePageContent> = {
  implantologie: {
    slug: "implantologie",
    path: "/implantologie",
    meta: {
      title: "Dental implants Iași — personalized plan | Implantik",
      description:
        "Dental implants in Iași with Dr. Ionuț Chirap, oral and maxillofacial surgeon, 7,000+ implants placed. Written treatment plan, transparent pricing. Book a consultation.",
    },
    h1: "Dental implants in Iași",
    intro:
      "A dental implant is the modern solution for replacing one or more missing teeth: an artificial titanium root placed in the bone, with a crown that looks and functions naturally. At Implantik, implantology is led by Dr. Ionuț Chirap, oral and maxillofacial surgeon, with over 7,000 implants placed.",
    sections: [
      {
        title: "When is a dental implant indicated?",
        body:
          "A dental implant is indicated when one tooth, several teeth, or all teeth on an arch are missing. It replaces the tooth without grinding adjacent teeth (as with traditional bridges) and helps prevent bone loss after tooth loss.",
      },
      {
        title: "How treatment works (steps)",
        ordered: true,
        items: [
          "Consultation and investigations — clinical exam and imaging (CT/panoramic, at the radiology centre in the immediate vicinity of the clinic; we coordinate everything).",
          "Written treatment plan — you receive steps, timeline, and costs explained in plain language. You decide.",
          "Implant placement — procedure under local anaesthesia, typically 30–60 minutes per implant.",
          "Healing (osseointegration) — 3–6 months, depending on the case.",
          "Final crown — placement of the definitive prosthetic work.",
        ],
      },
      {
        title: "Implant systems",
        body:
          "We work with internationally established implant systems: Nobel Biocare, Megagen AnyRidge, and AlphaBio. The system is chosen based on the clinical situation and treatment plan, and discussed transparently at consultation.",
      },
      {
        title: 'If you were told you "don\'t have enough bone"',
        body:
          "Insufficient bone volume does not automatically mean implants are impossible. Procedures such as sinus lift and bone grafting can restore the support needed. Dr. Chirap performs these oral surgery procedures in-clinic — see [Oral and maxillofacial surgery](/chirurgie-orala).",
      },
    ],
    faq: [
      {
        question: "How much does a dental implant cost in Iași?",
        answer:
          "Cost depends on the clinical situation and implant system chosen. At Implantik you receive a written treatment plan with transparent costs from the first consultation. See our [pricing page](/preturi) for indicative values.",
      },
      {
        question: "Does implant placement hurt?",
        answer:
          "The procedure is performed under local anaesthesia, so you do not feel pain during it. Post-operative discomfort is usually moderate and subsides within a few days; you receive clear instructions for the recovery period.",
      },
      {
        question: "How long until I have my final tooth?",
        answer:
          "Placement typically takes 30–60 minutes. Osseointegration takes 3–6 months, after which the final crown is fitted. In eligible cases, immediate loading may be possible — you will learn at consultation whether you are a candidate.",
      },
      {
        question: "How long does a dental implant last?",
        answer:
          "With proper hygiene and regular check-ups, dental implants have high longevity documented in the specialist literature. Duration depends on hygiene, smoking, general health, and regular follow-up.",
      },
      {
        question: "Can I have implants if I smoke or have diabetes?",
        answer:
          "In many cases, yes — with careful evaluation and an adapted plan. These situations are discussed individually at consultation.",
      },
    ],
    internalLinks: [
      { label: "All-on-4/6", href: "/implant-all-on-4-iasi" },
      { label: "Oral surgery", href: "/chirurgie-orala" },
      { label: "Pricing", href: "/preturi" },
      { label: "Dr. Chirap", href: "/echipa/dr-ionut-chirap" },
      { label: "Book appointment", href: "/programare" },
    ],
    cta: {
      title: "Book an implantology consultation",
      text: "Receive your plan, written and explained.",
    },
    whatsappContext: "implantologie",
    trackName: "implantologie",
  },

  "implant-all-on-4-iasi": {
    slug: "implant-all-on-4-iasi",
    path: "/implant-all-on-4-iasi",
    meta: {
      title: "All-on-4 Iași — provisional fixed teeth in 24h | Implantik",
      description:
        "Full-arch rehabilitation on 4 or 6 implants in Iași. In eligible cases, provisional fixed teeth within 24 hours. Personalized plan by Dr. Ionuț Chirap, 7,000+ implants placed.",
    },
    h1: "All-on-4 and All-on-6 in Iași — fixed teeth on implants",
    intro:
      "All-on-4 and All-on-6 are full-arch rehabilitation solutions: a complete fixed denture supported by 4 or 6 implants. They are indicated for patients who have lost most of their teeth or wear removable dentures and want fixed teeth. At Implantik, these rehabilitations are planned and performed by Dr. Ionuț Chirap, oral and maxillofacial surgeon.",
    sections: [
      {
        title: "Provisional fixed teeth within 24 hours",
        body:
          "In clinically eligible cases, after implant placement a provisional fixed restoration is fitted within approximately 24 hours — you leave with fixed teeth, not a removable denture, from the first stage. The definitive work is completed after the healing period. Eligibility for immediate loading is determined at consultation based on investigations: it depends on bone quality and the clinical situation.",
      },
      {
        title: "All-on-4 or All-on-6?",
        body:
          "The main difference is the number of implants supporting the restoration (4 vs. 6) — the choice depends on bone volume, the arch treated, and the prosthetic plan. Both options are discussed at consultation, with the advantages and limits of each, and the final decision is yours.",
      },
      {
        title: "Treatment steps",
        ordered: true,
        items: [
          "Consultation + imaging (CT)",
          "Written treatment plan with costs",
          "Implant placement (local anaesthesia; sedation available if needed)",
          "Provisional fixed restoration (in eligible cases, ~24h)",
          "Healing 3–6 months",
          "Definitive restoration",
        ],
      },
      {
        title: "Who it is NOT for (honesty)",
        body:
          "All-on-4/6 is not a universal solution. In some situations other options are more suitable (multiple single implants, implant-supported overdentures). At consultation you receive options with reasoning — not a single “sales” variant.",
      },
    ],
    faq: [
      {
        question: 'What does "fixed teeth in 24 hours" mean?',
        answer:
          "In eligible cases, approximately 24 hours after implant placement a provisional fixed restoration is fitted — functional and aesthetic. The definitive work follows after healing.",
      },
      {
        question: "How much does All-on-4 cost in Iași?",
        answer:
          "Cost depends on the clinical situation, implant system, and type of prosthetic work. You receive the exact cost in the written treatment plan at consultation. Indicative values on our [pricing page](/preturi).",
      },
      {
        question: "Can I have All-on-4 if I have worn a denture for many years?",
        answer:
          "Often, yes. Long-term denture wear leads to bone resorption, but procedures such as bone grafting or strategic implant positioning can make rehabilitation possible. Each case is evaluated individually.",
      },
      {
        question: "How long does the full treatment take?",
        answer:
          "Surgical stage + provisional: days. Definitive work: after 3–6 months of healing. You receive the exact plan with your timeline in writing.",
      },
    ],
    internalLinks: [
      { label: "Implantology", href: "/implantologie" },
      { label: "Oral surgery", href: "/chirurgie-orala" },
      { label: "Pricing", href: "/preturi" },
      { label: "Clinical cases", href: "/cazuri-clinice" },
      { label: "Book appointment", href: "/programare" },
    ],
    cta: {
      title: "Book a consultation",
      text: "We discuss whether All-on-4 or All-on-6 is right for your case — with a written plan and transparent costs.",
    },
    whatsappContext: "implantologie",
    trackName: "implant-all-on-4-iasi",
  },

  "chirurgie-orala": {
    slug: "chirurgie-orala",
    path: "/chirurgie-orala",
    meta: {
      title: "Oral and maxillofacial surgery Iași — Dr. Chirap | Implantik",
      description:
        "Sinus lift, bone grafting, complex extractions, wisdom teeth — performed in Iași by Dr. Ionuț Chirap, oral and maxillofacial surgeon. Book a consultation.",
    },
    h1: "Oral and maxillofacial surgery in Iași",
    intro:
      "Oral and maxillofacial surgery is the specialty that surgically treats conditions of the oral cavity and adjacent structures. At Implantik, procedures are performed by Dr. Ionuț Chirap, oral and maxillofacial surgeon — the same specialist who has placed over 7,000 implants also plans preparatory interventions.",
    sections: [
      {
        title: "Procedures performed in-clinic",
        items: [
          "Sinus lift — restoring bone volume in the lateral maxilla when bone is insufficient for implants.",
          "Bone grafting — augmenting bone in areas with resorption, as preparation for implant placement.",
          "Complex extractions — non-restorable teeth, root fragments, situations requiring surgical technique.",
          "Wisdom teeth (impacted or semi-impacted) — extraction of problematic molars.",
          "Pre-prosthetic surgery — preparing the site for prosthetic work.",
        ],
      },
      {
        title: "What is a sinus lift?",
        body:
          "A sinus lift is a procedure in which the maxillary sinus membrane is elevated and bone material is added to create sufficient support for implants in the posterior maxilla. It is performed under local anaesthesia within oral and maxillofacial surgery. For bone grafting and other preparatory procedures, see also [Implantology](/implantologie) and [Complex rehabilitation](/reabilitari-complexe).",
      },
      {
        title: "Why the specialist matters",
        body:
          "Oral surgery procedures require competence gained through specialization. Dr. Chirap holds specialty certification in oral and maxillofacial surgery, and cases are planned based on imaging investigations, with steps explained to the patient before any decision.",
      },
    ],
    faq: [
      {
        question: "What is a sinus lift?",
        answer:
          "A procedure in which the maxillary sinus membrane is elevated and bone material is added to create sufficient support for implants in the posterior maxilla. Performed under local anaesthesia.",
      },
      {
        question: "How long is recovery after sinus lift?",
        answer:
          "Post-operative discomfort usually lasts a few days, and integration of bone material takes several months — the exact timeline depends on technique and case; you receive it in your treatment plan.",
      },
      {
        question: "Does wisdom tooth extraction hurt?",
        answer:
          "The procedure is performed under local anaesthesia — you do not feel pain during it. Post-operatively, discomfort is manageable with the instructions and medication recommended.",
      },
      {
        question: "Where do I get a CT scan?",
        answer:
          "At the radiology centre in the immediate vicinity of the clinic. We coordinate the investigation for you, and planning is done on your images.",
      },
    ],
    internalLinks: [
      { label: "Implantology", href: "/implantologie" },
      { label: "Complex rehabilitation", href: "/reabilitari-complexe" },
      { label: "Pricing", href: "/preturi" },
      { label: "Dr. Chirap", href: "/echipa/dr-ionut-chirap" },
      { label: "Book appointment", href: "/programare" },
    ],
    cta: {
      title: "Book an oral surgery consultation",
      text: "Individual evaluation, written plan, and steps explained before any decision.",
    },
    whatsappContext: "default",
    trackName: "chirurgie-orala",
  },

  "reabilitari-complexe": {
    slug: "reabilitari-complexe",
    path: "/reabilitari-complexe",
    meta: {
      title: "Full oral rehabilitation Iași — complex cases | Implantik",
      description:
        "Severe bone loss, failed implants, difficult rehabilitations — evaluated and planned in Iași by an oral and maxillofacial surgeon. Step-by-step plan, clearly explained.",
    },
    h1: "Complex oral rehabilitation",
    intro:
      "Some clinical situations require more than standard treatment: severe bone resorption, implants that did not integrate, old work that must be fully redone, fully edentulous arches with little bone. These are cases where surgical competence makes the difference — and exactly the type of cases Dr. Ionuț Chirap evaluates and plans at Implantik.",
    sections: [
      {
        title: "Situations we treat",
        items: [
          "Full oral rehabilitation (both arches) on implants",
          "Failed or non-integrated implants — evaluation and replanning",
          "Advanced bone resorption — reconstruction via grafting/sinus lift",
          "Old, non-functional prosthetic work — full redo",
          "Combined problems (periodontal + prosthetic + surgical) requiring a coordinated plan",
        ],
      },
      {
        title: "How we approach a complex case",
        body:
          "Every complex case starts with complete imaging and an honest evaluation: what is possible, in how many stages, with what alternatives and at what costs. You receive a written plan with options — including the most conservative — and the decision is yours. We do not promise outcomes; we plan predictably and explain each step.",
      },
    ],
    faq: [
      {
        question: "I was told nothing more can be done. Does a second opinion make sense?",
        answer:
          "Yes — you have the right to a second medical opinion, and cases with insufficient bone or failed implants may have surgical solutions worth evaluating. A consultation does not obligate you to anything.",
      },
      {
        question: "Can a failed implant be replaced?",
        answer:
          "In many cases, yes — after the area heals and, if needed, bone support is restored. Individual evaluation determines the timeline.",
      },
      {
        question: "How long does full rehabilitation take?",
        answer:
          "From a few months to over a year, depending on complexity. You receive a realistic timeline in your treatment plan — without unrealistic promises.",
      },
    ],
    internalLinks: [
      { label: "Oral surgery", href: "/chirurgie-orala" },
      { label: "All-on-4/6", href: "/implant-all-on-4-iasi" },
      { label: "Clinical cases", href: "/cazuri-clinice" },
      { label: "Dr. Chirap", href: "/echipa/dr-ionut-chirap" },
      { label: "Book appointment", href: "/programare" },
    ],
    cta: {
      title: "Book an evaluation for a complex case",
      text: "Complete investigation, written plan with options — the decision is yours.",
    },
    whatsappContext: "implantologie",
    trackName: "reabilitari-complexe",
  },

  "protetica-dentara": {
    slug: "protetica-dentara",
    path: "/protetica-dentara",
    meta: {
      title: "Dental prosthetics Iași — crowns, bridges, dentures | Implantik",
      description:
        "Ceramic and zirconia crowns, dental bridges, fixed and removable implant-supported dentures in Iași. Prosthetic work integrated into your treatment plan.",
    },
    h1: "Dental prosthetics in Iași",
    intro:
      "Dental prosthetics means restoring compromised or missing teeth with crowns, bridges, fixed or removable dentures. At Implantik, prosthetics is integrated into your treatment plan — from a single crown to full implant-supported rehabilitation.",
    sections: [
      {
        title: "Work we provide",
        items: [
          "Dental crowns — full ceramic or zirconia, with a natural appearance",
          "Dental bridges — replacing missing teeth supported by adjacent teeth or implants",
          "Crowns and bridges on implants — the prosthetic part of implant treatment",
          "Implant-supported dentures — fixed or removable, stable, without the discomfort of conventional dentures",
          "Veneers and aesthetic restorations — in collaboration with [Cosmetic dentistry](/estetica-dentara)",
        ],
      },
    ],
    faq: [
      {
        question: "Ceramic or zirconia crown — which is better?",
        answer:
          "Each has its own indications: zirconia offers high strength, full ceramic offers top aesthetics in the front zone. The choice is made case by case at consultation, with clear reasoning.",
      },
      {
        question: "Traditional bridge or implant?",
        answer:
          "A traditional bridge requires grinding adjacent teeth; an implant replaces the tooth without touching them. Both are valid solutions — we present differences, advantages, and costs comparatively, and the decision is yours.",
      },
      {
        question: "How long does a dental crown last?",
        answer:
          "Longevity depends on material, hygiene, and regular check-ups — modern crowns have high durability with proper care.",
      },
    ],
    internalLinks: [
      { label: "Implantology", href: "/implantologie" },
      { label: "Cosmetic dentistry", href: "/estetica-dentara" },
      { label: "Pricing", href: "/preturi" },
      { label: "Book appointment", href: "/programare" },
    ],
    cta: {
      title: "Book a prosthetics consultation",
      text: "Work integrated into your treatment plan, with options explained clearly.",
    },
    whatsappContext: "default",
    trackName: "protetica-dentara",
  },

  ortodontie: {
    slug: "ortodontie",
    path: "/ortodontie",
    meta: {
      title: "Braces Iași — metal, sapphire, Spark clear aligners | Implantik",
      description:
        "Orthodontics in Iași for children and adults: metal braces, sapphire braces, and Spark clear aligners. Personalized orthodontic plan, full monitoring.",
    },
    h1: "Orthodontics in Iași — braces and Spark clear aligners",
    intro:
      "Orthodontics corrects tooth position and bite — for function, health, and aesthetics. At Implantik we treat children and adults, with three main treatment options chosen together based on case, age, and lifestyle.",
    sections: [
      {
        title: "Your treatment options",
        items: [
          "Metal braces — the classic, efficient solution for most cases, with the best cost-to-result ratio. Suitable for children and adults.",
          "Sapphire braces — transparent sapphire brackets, visually discreet, for patients who want fixed appliance efficiency with an aesthetic look. A frequent choice for adults.",
          "Spark clear aligners — tooth alignment with transparent, removable aligners made on the Spark system. Practically invisible when speaking, removed for meals and brushing. Suitable for many adults and teenagers — eligibility is determined at the orthodontic consultation.",
        ],
      },
      {
        title: "How orthodontic treatment works",
        ordered: true,
        items: [
          "Orthodontic consultation + investigations",
          "Treatment plan with options suited to your case (with duration and costs)",
          "Appliance placement / aligner delivery",
          "Regular monitoring appointments",
          "Retention — maintaining results after treatment",
        ],
      },
    ],
    faq: [
      {
        question: "What are Spark aligners?",
        answer:
          "Transparent orthodontic aligners made individually on the Spark system, which gradually align teeth without brackets. They are removable — taken out for meals and brushing — and very discreet visually.",
      },
      {
        question: "Clear aligners or fixed braces — what should I choose?",
        answer:
          "It depends on case complexity, discipline (aligners are worn ~22h/day), and preferences. At consultation you receive options suited to your case, with duration and costs compared — the decision is yours.",
      },
      {
        question: "How long does orthodontic treatment take?",
        answer:
          "Typically between 12 and 24 months, depending on the case. You receive your realistic timeline in the orthodontic plan.",
      },
      {
        question: "Are braces only for children?",
        answer:
          "No — tooth alignment can be done at any age, and aesthetic options (sapphire, Spark) make treatment comfortable for adults too.",
      },
      {
        question: "How much do braces cost in Iași?",
        answer:
          "Cost varies between metal, sapphire, and Spark aligners. Indicative values on our [pricing page](/preturi); exact cost comes from your orthodontic plan.",
      },
    ],
    internalLinks: [
      { label: "Pricing", href: "/preturi" },
      { label: "Dentistry without barriers", href: "/stomatologie-fara-bariere" },
      { label: "Book appointment", href: "/programare" },
    ],
    cta: {
      title: "Book an orthodontic consultation",
      text: "Personalized plan with options suited to your case — metal, sapphire, or Spark.",
    },
    whatsappContext: "default",
    trackName: "ortodontie",
  },

  stomatologie: {
    slug: "stomatologie",
    path: "/stomatologie",
    meta: {
      title: "Dentistry Iași — consultations, treatment, hygiene | Implantik",
      description:
        "General dentistry in Iași: consultations, cavity treatment, scaling and professional hygiene. Complete care with a clearly explained treatment plan.",
    },
    h1: "General dentistry and prevention in Iași",
    intro:
      "Oral health starts with basic care: regular check-ups, professional hygiene, and treating small problems in time before they become large ones. At Implantik, general dentistry is the foundation on which we build any treatment plan.",
    sections: [
      {
        title: "Services",
        items: [
          "Consultation and treatment plan — full exam, plain-language explanations, written plan",
          "Cavity treatment — modern aesthetic fillings",
          "Scaling and professional hygiene — removal of tartar and bacterial plaque, professional brushing",
          "Endodontic treatment (root canal) — [TO BE CONFIRMED in-house; if yes, dedicated section or page /endodontie]",
          "Periodontal treatment — [TO BE CONFIRMED; if yes, dedicated page /parodontologie]",
        ],
      },
      {
        title: "Why regular check-ups matter",
        body:
          "A check-up every 6 months and periodic hygiene prevent most costly dental problems. Small cavities are treated simply; untreated, they reach the nerve and require complex treatment. Prevention is the best investment in your smile.",
      },
    ],
    faq: [
      {
        question: "How often should I come for a check-up?",
        answer:
          "Typically every 6 months, for check-up and hygiene. Your dentist may recommend a personalized interval based on your situation.",
      },
      {
        question: "Does scaling hurt?",
        answer:
          "Usually not — there may be temporary sensitivity, especially with heavy deposits, but the procedure is well tolerated.",
      },
      {
        question: "What does the first consultation at Implantik include?",
        answer:
          "Discussion about your situation and goals, clinical exam, determining necessary investigations, and a written treatment plan with steps and costs.",
      },
    ],
    internalLinks: [
      { label: "Pricing", href: "/preturi" },
      { label: "Book appointment", href: "/programare" },
      { label: "Implantology", href: "/implantologie" },
    ],
    cta: {
      title: "Book a dentistry consultation",
      text: "Basic care, written plan, and prevention — the foundation for any treatment.",
    },
    whatsappContext: "stomatologie",
    heroImage: "/team/dr-ana-maria-chirap.jpeg",
    heroImageAlt: "Dr. Ana Maria Chirap, dentist, Implantik Iași",
    heroImageAspect: "portrait",
    trackName: "stomatologie",
  },

  "estetica-dentara": {
    slug: "estetica-dentara",
    path: "/estetica-dentara",
    meta: {
      title: "Cosmetic dentistry Iași — veneers, professional whitening | Implantik",
      description:
        "Dental veneers, full ceramic crowns, and professional whitening in Iași. Natural results, planned together with you, with realistic expectations.",
    },
    h1: "Cosmetic dentistry in Iași",
    intro:
      "Cosmetic dentistry means improving the appearance of your smile — with natural results, not artificial ones. At Implantik, every aesthetic treatment starts with a discussion about what you want and an honest evaluation of what is suitable for you.",
    sections: [
      {
        title: "Treatments",
        items: [
          "Dental veneers — thin ceramic plates on the visible face of teeth: correcting shape, colour, and minor imperfections",
          "Full ceramic crowns — for teeth with major destruction, with natural aesthetics",
          "Professional teeth whitening — performed in-clinic, under medical supervision, protecting enamel and gums",
          "Remodelling and aesthetic restorations — targeted corrections, digitally planned where appropriate",
        ],
      },
      {
        title: "Realistic expectations (honest differentiator)",
        body:
          'A beautiful smile is one that looks natural and functions correctly. At consultation we show what can be achieved in your case, with which options and at what costs — without promises of "guaranteed transformation". You decide, fully informed.',
      },
    ],
    faq: [
      {
        question: "How much do dental veneers cost in Iași?",
        answer:
          "Cost depends on material and number of veneers. Indicative values on our [pricing page](/preturi); exact cost comes from your plan.",
      },
      {
        question: "Veneers or crowns?",
        answer:
          "Veneers are minimally invasive and suitable for aesthetic corrections on intact teeth; crowns are indicated for major destruction. We explain the differences for your case.",
      },
      {
        question: "Does teeth whitening affect enamel?",
        answer:
          "Performed professionally, with certified materials and correct protocol, whitening is a safe procedure. Temporary sensitivity is possible and manageable.",
      },
    ],
    internalLinks: [
      { label: "Prosthetics", href: "/protetica-dentara" },
      { label: "Facial aesthetics", href: "/estetica-faciala" },
      { label: "Pricing", href: "/preturi" },
      { label: "Book appointment", href: "/programare" },
    ],
    cta: {
      title: "Book a cosmetic dentistry consultation",
      text: "Natural results, planned together — with realistic expectations.",
    },
    whatsappContext: "default",
    trackName: "estetica-dentara",
  },

  "estetica-faciala": {
    slug: "estetica-faciala",
    path: "/estetica-faciala",
    meta: {
      title: "Facial aesthetics Iași — hyaluronic acid, botulinum toxin | Implantik",
      description:
        "Facial aesthetic treatments in Iași, performed medically: hyaluronic acid, botulinum toxin, lip volumization. Full information, correct doses, realistic expectations.",
    },
    h1: "Facial aesthetics in Iași — performed medically",
    intro:
      "Facial aesthetics complements smile harmony: minimally invasive treatments, performed medically, with full information and natural results. At Implantik, facial aesthetic procedures are performed by a physician, with certified products and correct protocols. [PHYSICIAN COMPETENCE FOR THESE PROCEDURES — TO BE CONFIRMED AND DISPLAYED]",
    sections: [
      {
        title: "Treatments",
        items: [
          "Hyaluronic acid treatments — lip volumization, correction of grooves and areas with volume loss",
          'Botulinum toxin treatments — softening expression lines (forehead, glabella, "necklace lines")',
          "Brow lift (non-surgical) — discreet repositioning of the brow line",
        ],
      },
      {
        title: "Our approach",
        body:
          'The right result in facial aesthetics is one that does not "show" — you look rested and natural, not transformed. We discuss what you want, explain what can be achieved, doses and duration of effect, and schedule sessions responsibly.',
      },
    ],
    faq: [
      {
        question: "How long does hyaluronic acid last?",
        answer:
          "Typically between 6 and 18 months, depending on product, area, and individual metabolism. Details for your case are provided at consultation.",
      },
      {
        question: "Is botulinum toxin safe?",
        answer:
          "Administered medically, in correct doses and with certified products, it is a procedure with a well-documented safety profile. Full information is part of the consultation.",
      },
      {
        question: "Do the treatments hurt?",
        answer:
          "Discomfort is minimal — fine needles are used and, if needed, topical anaesthesia.",
      },
    ],
    internalLinks: [
      { label: "Cosmetic dentistry", href: "/estetica-dentara" },
      { label: "Pricing", href: "/preturi" },
      { label: "Book appointment", href: "/programare" },
    ],
    cta: {
      title: "Book a facial aesthetics consultation",
      text: "Full information, correct doses, and realistic expectations.",
    },
    whatsappContext: "default",
    trackName: "estetica-faciala",
  },

  "stomatologie-fara-bariere": {
    slug: "stomatologie-fara-bariere",
    path: "/stomatologie-fara-bariere",
    meta: {
      title: "Dentistry without fear, without barriers — Iași | Implantik",
      description:
        "For you, who keeps putting off the dentist: total transparency, plan explained in plain language, zero pressure. You decide — always. Implantik, Iași.",
    },
    h1: "Dentistry without barriers. Without fear. Without pressure.",
    intro:
      "We know why you postpone: fear of pain, fear of unclear costs, fear of being judged. At Implantik we have removed all three. You get plain-language explanations, a written plan with all costs, and the freedom to decide at your own pace. Nobody pressures you. Ever.",
    sections: [
      {
        title: "How it works here",
        ordered: true,
        items: [
          'You come for a conversation, not an "operation" — the first consultation means discussion, exam, and answers. That\'s it.',
          "You receive the written plan — steps, duration, costs. Black on white, no surprises.",
          "You decide — you can choose everything, part of it, or nothing. The plan is yours; so is the pace.",
          "Along the way, we are with you — questions on WhatsApp, explanations at every step.",
        ],
      },
      {
        title: "For the smile in your selfies",
        body:
          'Discreet alignment with Spark clear aligners, professional whitening, veneers — aesthetic options designed for your real life: no visible brackets if you do not want them, treatments visible in the result, not in the process. See [Orthodontics](/ortodontie) and [Cosmetic dentistry](/estetica-dentara).',
      },
    ],
    faq: [
      {
        question: "I am afraid of the dentist. Even of a consultation. Is that ok?",
        answer:
          "Yes, and you are not alone. The first visit is just a conversation — no unwanted treatment, no pressure. Tell us you are anxious and we go at your pace.",
      },
      {
        question: "I am not sure I can afford it. Will I know costs beforehand?",
        answer:
          "Yes — the written plan includes all costs before you decide anything. And you can choose to do treatment in stages.",
      },
      {
        question: "Can I come just to ask questions, without booking treatment?",
        answer: "Yes. The consultation does not obligate you to anything.",
      },
    ],
    internalLinks: [
      { label: "Orthodontics (Spark)", href: "/ortodontie" },
      { label: "Cosmetic dentistry", href: "/estetica-dentara" },
      { label: "Pricing", href: "/preturi" },
    ],
    cta: {
      title: "Message us on WhatsApp",
      text: "No pressure — just answers to your questions.",
    },
    whatsappContext: "genZ",
    trackName: "stomatologie-fara-bariere",
    heroVariant: "accent",
  },
};
