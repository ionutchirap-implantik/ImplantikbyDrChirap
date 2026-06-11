import { POLICY_VERSION } from "@/lib/consent/policy-version";
import type { LegalDocument } from "@/lib/legal/types";

export const termsEn: LegalDocument = {
  type: "terms",
  title: "Terms and conditions of use",
  description:
    "These terms and conditions govern access to and use of the implantik.ro website operated by Implantik Chirap SRL. By using the site, you confirm that you have read and understood these terms.",
  lastUpdated: `Last updated: ${POLICY_VERSION}`,
  tocTitle: "Table of contents",
  sections: [
    {
      id: "introduction",
      title: "1. Introduction and acceptance",
      paragraphs: [
        "Welcome to implantik.ro, the official website of the Implantik by Dr. Chirap dental clinic in Iași. The site is operated by Implantik Chirap SRL, tax ID (CUI) 40441553, Trade Register no. J22/216/2019, with registered office at Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581.",
        "By accessing, browsing, or using the site, including contact and appointment forms, you accept these Terms and Conditions. If you do not agree, please do not use the site.",
        "These terms are supplemented by the Privacy Policy and Cookie Policy, which describe personal data processing and cookie use. In case of conflict regarding personal data, the Privacy Policy prevails.",
        "The applicable version is the one published online at the time of access, with the update date shown in the header. International patients or those interested in dental services in Iași are subject to the same terms; communication is in Romanian or English as preferred, and the medical relationship takes place at the clinic premises in Romania under Romanian law.",
      ],
    },
    {
      id: "operator",
      title: "2. Website operator identity",
      paragraphs: [
        "The site operator and provider of medical services promoted through the site is Implantik Chirap SRL. Contact details: implantikdrchirap@gmail.com, phone (0758) 169 234, address Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581.",
        "Medical services are provided at the clinic premises by authorised medical staff, under the coordination of Dr. Ionuț Chirap, administrator and dental physician. The organisational structure includes employed or collaborating medical and administrative staff, in accordance with applicable contracts and authorisations.",
        "Authorisations and professional registrations: authorised dental medical activity; main CAEN code 8623 — dental practice activities; Trade Register registration J22/216/2019; tax ID (CUI) 40441553. Physicians providing services hold private practice authorisations and CMS/CMR registrations as required by law.",
      ],
    },
    {
      id: "use",
      title: "3. Use of the website",
      paragraphs: [
        "The site is intended to inform and facilitate contact/appointments for dental and related services. You agree to use the site lawfully, respectfully, and in accordance with these terms.",
        "It is prohibited to: use the site to transmit illegal, defamatory, fraudulent, or harmful content; attempt unauthorised access to systems or data; abusive automated scraping; introduce malware; use another person’s identity; send spam via forms.",
        "We reserve the right to restrict access for users who breach these rules or affect site security or operation. Forms are protected by Cloudflare Turnstile and server-side rate limiting; repeated abuse may result in temporary IP blocking or rejection of requests.",
        "Site content is intended for users in Romania and, where applicable, individuals interested in the clinic’s services in Iași, including patients from other locations or abroad seeking preliminary information.",
      ],
    },
    {
      id: "medical-disclaimer",
      title: "4. Medical information — not medical advice",
      paragraphs: [
        "Information on implantik.ro (text, illustrative images, service descriptions, general responses, articles, or FAQ sections) is strictly general information and education. It does not replace medical consultation, clinical examination, diagnosis, or an individual treatment plan.",
        "No information on the site should be interpreted as personalised medical advice, treatment recommendation, or guarantee of a clinical outcome. Decisions about dental health should be made together with a doctor after direct evaluation.",
        "Before/after images or clinical cases, where published, illustrate individual situations and do not represent guaranteed results for other patients. Publication of clinical cases is only with the patient’s written consent, after anonymisation of identifying data, in accordance with internal policy and CMSR requirements.",
        "In a medical emergency, contact emergency services or go to the nearest medical facility; the site does not provide online emergency consultations.",
      ],
    },
    {
      id: "appointments",
      title: "5. Appointments, requests, and patient relationship",
      paragraphs: [
        "Contact and appointment forms allow you to submit a request; submission does not automatically guarantee confirmation at a specific date/time. Confirmation is made by clinic reception via phone, e-mail, WhatsApp, or another communicated channel.",
        "Please provide accurate and up-to-date data. For health-related data voluntarily sent via forms, explicit consent as indicated in the form is required, in accordance with the Privacy Policy.",
        "The medical relationship itself (consultation, treatment, billing, informed consent for procedures) is governed by applicable medical legislation and documents signed at the clinic, not only by these website terms.",
        "Cancellation/rescheduling policy: please notify us of rescheduling or cancellation at least 24 hours before the scheduled time, by phone or WhatsApp. Failure to attend without notice (no-show) may affect prioritisation of future appointments. Prices shown on the site or communicated are indicative until clinical assessment; final prices are those in the agreed treatment plan. Payment is made at the clinic under conditions communicated by reception.",
      ],
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual property",
      paragraphs: [
        "Site content (text, structure, graphic elements, logo, photographs, video materials, the name Implantik by Dr. Chirap) is protected by copyright and trademark law. Rights belong to Implantik Chirap SRL or licensors as applicable.",
        "Viewing and temporary downloading of content is permitted solely for personal, non-commercial use. Reproduction, distribution, modification, republication, or commercial exploitation without prior written consent of the Operator is prohibited.",
        "Third-party marks and names mentioned factually in service descriptions belong to their respective owners. The site uses Google Fonts (Poppins, Inter) under open source licences, licensed or clinic-owned images, and open source software (Next.js, React) under their respective licences.",
      ],
    },
    {
      id: "links",
      title: "7. Third-party links",
      paragraphs: [
        "The site may contain links to third-party websites (social networks, Google Maps, WhatsApp). These links are provided for convenience; we do not control those sites’ content or policies.",
        "You access third-party sites at your own risk. We recommend reading the terms and privacy policies of each site you visit.",
        "Active embeds: Google Maps (Location section) — loaded when you access the page, may transmit technical data to Google; Instagram feed (Home section, if enabled) — lazy-loaded, may set third-party cookies if you view the content. These services are governed by Google and Meta policies.",
      ],
    },
    {
      id: "liability",
      title: "8. Limitation of liability",
      paragraphs: [
        "We make reasonable efforts to ensure information accuracy and technical operation, but we do not guarantee that the site will be permanently available, error-free, or fully up to date at all times.",
        "To the extent permitted by law, Implantik Chirap SRL is not liable for indirect damages, loss of profit or data resulting from use or inability to use the site, technical interruptions, cyberattacks, or third-party actions, except in cases of fraud or gross negligence.",
        "Liability for medical services relates to the medical relationship and legislation applicable to health professionals, not to mere consultation of the website. The clinic holds professional liability (malpractice) insurance as required by law for medical activity.",
        "Force majeure: neither party is liable for failure to perform obligations caused by force majeure events (natural disasters, government restrictions, pandemics, major network outages), subject to reasonable notice to affected users.",
      ],
    },
    {
      id: "personal-data",
      title: "9. Personal data protection",
      paragraphs: [
        "Personal data processing through the site is described in the Privacy Policy. Form data may include special categories of health-related data (GDPR Art. 9) and is processed with enhanced safeguards.",
        "Cookies and tracking technologies are used according to the Cookie Policy and only with your consent for non-essential categories. GTM (GTM-5QFHBCH) and associated tags load only after consent, in accordance with Consent Mode v2.",
        "Lead storage provider: Supabase — form data is stored in a Supabase database, accessible server-side only, with secured keys. To exercise GDPR rights, contact implantikdrchirap@gmail.com.",
      ],
    },
    {
      id: "law",
      title: "10. Applicable law and disputes",
      paragraphs: [
        "These terms are governed by Romanian law. Any dispute arising from or related to use of the site will be resolved amicably where possible by contacting implantikdrchirap@gmail.com.",
        "If no amicable settlement is reached, disputes fall under the jurisdiction of competent courts in Romania, in accordance with rules of private international law applicable to consumers. No arbitration clause is provided; consumers may also use alternative dispute resolution mechanisms provided by law.",
        "If you are a consumer under Romanian law, you benefit from mandatory rights that cannot be limited by these terms.",
      ],
    },
    {
      id: "changes",
      title: "11. Changes to the terms",
      paragraphs: [
        "We reserve the right to amend these terms to reflect legal, operational, or site functionality changes. The updated version will be published on implantik.ro with the new update date.",
        "Continued use of the site after publication of changes constitutes acceptance of the updated terms to the extent permitted by law. For material changes, we will display a visible notice on the site for at least 30 days from publication.",
      ],
    },
    {
      id: "contact",
      title: "12. Contact",
      paragraphs: [
        "For questions about these terms or site operation: Implantik Chirap SRL, Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581; e-mail implantikdrchirap@gmail.com; phone (0758) 169 234; website implantik.ro.",
        "Clinic hours: Monday–Friday, 8:00–19:30. Requests submitted via the website are processed during these hours; responses may also be provided by phone, e-mail, or WhatsApp.",
      ],
    },
  ],
};
