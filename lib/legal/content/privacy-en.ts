import { POLICY_VERSION } from "@/lib/consent/policy-version";
import type { LegalDocument } from "@/lib/legal/types";

export const privacyEn: LegalDocument = {
  type: "privacy",
  title: "Privacy policy",
  description:
    "This policy describes how Implantik Chirap SRL processes personal data of visitors to implantik.ro and individuals who contact us, including health-related data, in accordance with Regulation (EU) 2016/679 (GDPR) and applicable national law.",
  lastUpdated: `Last updated: ${POLICY_VERSION}`,
  tocTitle: "Table of contents",
  sections: [
    {
      id: "introduction",
      title: "1. Introduction and scope",
      paragraphs: [
        "This Privacy Policy applies to the processing of personal data carried out by Implantik Chirap SRL (hereinafter the “Controller”, “we”, or “the clinic”) through the implantik.ro website, contact and appointment forms, telephone communications, e-mail, WhatsApp, or other channels made available by the clinic.",
        "The policy is addressed to website visitors, individuals requesting information, appointments, or consultations, existing or prospective patients, and their legal representatives where applicable.",
        "This document does not replace individual information provided within the medical relationship or specific informed consent for dental procedures. Processing within the medical record is also subject to specific legal obligations in the medical field.",
        "The current version of this policy is identified by the update date shown in the header. For material changes, we will publish the updated version on implantik.ro and, where appropriate, display a notice on the site or re-request consent for cookies and tracking in accordance with the Cookie Policy.",
      ],
    },
    {
      id: "controller",
      title: "2. Data controller identity",
      paragraphs: [
        "The data controller is Implantik Chirap SRL, a Romanian legal entity with registered office at Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581, Romania, registered with the Trade Register under no. J22/216/2019, tax ID (CUI) 40441553.",
        "Contact details for data protection matters: e-mail implantikdrchirap@gmail.com, phone (0758) 169 234, website implantik.ro. GDPR request response hours: Monday–Friday, 8:00–19:30.",
        "Legal representative: Dr. Ionuț Chirap, administrator.",
        "The controller maintains records of processing activities as required by Art. 30 GDPR. Under the GDPR, controllers are not required to register or notify ANSPDCP. Data subjects may contact ANSPDCP as set out in section 11.",
      ],
    },
    {
      id: "dpo",
      title: "3. Data Protection Officer (DPO)",
      paragraphs: [
        "Implantik Chirap SRL has not appointed a Data Protection Officer (DPO) under Art. 37(1) GDPR, as the controller’s core activities do not consist of processing operations which, by their nature, scope, context, and purposes, require regular and systematic monitoring of data subjects on a large scale, and health-related processing takes place within authorised medical activity, under medical staff supervision and specific legal obligations.",
        "The contact point for data protection and exercising GDPR rights is implantikdrchirap@gmail.com with the subject line “Data protection”. We will respond within the statutory period, generally within one month. Requests are handled by the clinic administrator and internally designated authorised staff.",
        "For technical matters relating to cookies, consent, and tracking, please also see the Cookie Policy available on implantik.ro.",
      ],
    },
    {
      id: "data-categories",
      title: "4. Categories of data processed",
      paragraphs: [
        "Depending on your interaction with us, we may process the following categories of data: identification and contact data (name, surname, phone number, e-mail address); data from messages sent via forms or communication channels; data on the service of interest or contact preferences; technical and website usage data (IP address, browser type, pages visited), collected automatically as necessary for site operation and security; marketing and campaign attribution data (UTM parameters, ad click identifiers), only after marketing consent; patient relationship data where applicable (appointments, medical documents, billing).",
        "We do not ordinarily request sensitive data outside the medical context or your request via forms. We do not intentionally collect data about minors through the website, except where a parent or legal representative contacts us on behalf of a minor.",
        "Data sources may include: directly from you (forms, phone, e-mail, WhatsApp, at the clinic); automatically through cookies and similar technologies, with your consent where required; from referrals by existing patients or public professional sources (e.g. medical registers, regulatory authorities), only as permitted by law and necessary for clinic operations.",
      ],
      subsections: [
        {
          id: "form-data",
          title: "4.1. Data provided via forms and communications",
          paragraphs: [
            "Contact and appointment forms on implantik.ro request the minimum data needed to respond or schedule you: name, phone, e-mail (optional), service of interest, optional message, and contact preference.",
            "Data sent via WhatsApp, phone, or e-mail is processed under the same data-minimisation logic. Do not enter detailed medical information in open fields unless necessary; for clinical assessment, an in-clinic consultation remains the appropriate channel.",
            "Telephone calls are not recorded by the clinic. Phone, e-mail, or WhatsApp conversations are documented only to the extent necessary to handle your request or medical relationship, in accordance with internal confidentiality policies.",
          ],
        },
      ],
    },
    {
      id: "health-data",
      title: "5. Health-related data (Art. 9 GDPR)",
      paragraphs: [
        "Certain information you provide may constitute health-related data, a special category under Art. 9 GDPR. This may include mentions of symptoms, prior treatments, allergies, requested dental services, or other clinical details voluntarily included in messages sent via forms, e-mail, WhatsApp, or during consultation.",
        "We process such data only to the extent strictly necessary to: respond to your request; schedule a consultation; carry out a preliminary assessment of suitability for clinic services; conduct the medical relationship where applicable.",
        "Legal bases for processing health-related data, by flow: (a) website forms and pre-consultation requests — explicit consent (Art. 9(2)(a) GDPR) together with Art. 6(1)(b) GDPR (pre-contractual measures); (b) medical records, treatments, and care — legal obligations and medical care (Art. 9(2)(h) GDPR, together with Art. 6(1)(b) and (c) GDPR); (c) billing and tax documents — legal obligations (Art. 6(1)(c) GDPR); (d) post-consultation communications on continuity of care — legitimate interest or explicit consent as applicable, without aggressive advertising or commercial profiling.",
        "We do not use health-related data from website forms for advertising or profiling. Post-consultation communications (appointment reminders, post-treatment instructions, medical follow-up) are carried out only within legal limits, based on the medical relationship or separately given explicit consent, without transmitting medical content to marketing platforms.",
      ],
    },
    {
      id: "purposes-bases",
      title: "6. Processing purposes and legal bases",
      paragraphs: [
        "We process your data for the following main purposes, on the legal bases indicated:",
        "Handling requests and appointments — responding to messages, calls, scheduling consultations (basis: Art. 6(1)(b) GDPR — pre-contractual/contractual measures; for health data in requests: explicit consent Art. 9).",
        "Provision of dental medical services — medical record, treatments, billing, patient relationship (basis: Art. 6(1)(b), (c), (f) GDPR; Art. 9(2)(h) or consent as applicable; specific legal obligations for medical activity, including Law no. 95/2006 on healthcare reform and applicable rules on medical records).",
        "Website security and abuse prevention — anti-spam verification via Cloudflare Turnstile; limited technical data (e.g. IP address) (basis: Art. 6(1)(f) GDPR — legitimate interest).",
        "Website analytics and improvement — aggregated statistics on site usage via Google Analytics 4, only after consent for analytics cookies (basis: Art. 6(1)(a) GDPR).",
        "Digital marketing and conversion measurement — Google Ads, Meta, TikTok, only after consent for marketing cookies (basis: Art. 6(1)(a) GDPR).",
        "Compliance with legal obligations — accounting/tax document archiving, mandatory medical records, responses to authorities (basis: Art. 6(1)(c) GDPR).",
        "Legitimate interests — defending rights in potential disputes, fraud prevention, maintaining necessary internal records (basis: Art. 6(1)(f) GDPR, subject to balancing test).",
      ],
    },
    {
      id: "recipients",
      title: "7. Data recipients and processors",
      paragraphs: [
        "Data may be disclosed, strictly on a legal basis and as necessary, to the following categories of recipients: authorised clinic staff (doctors, assistants, reception, administration) bound by confidentiality; IT and hosting service providers acting as processors; request storage and management platforms; e-mail, telephony, WhatsApp Business providers; online analytics and advertising providers (Google, Meta, TikTok), only after consent; accountants, legal advisers, insurers, public authorities as required by law.",
        "Relevant processors include: (1) Supabase Inc. (USA) — form request storage, configurable project region; transfers protected by SCCs and supplementary measures; (2) Vercel Inc. (USA) — site hosting, limited server logs, server-side Turnstile processing; SCCs; (3) Google Ireland Limited / Google LLC (USA/EEA) — GA4, Google Ads, GTM; SCCs and EU-US Data Privacy Framework where applicable; (4) Meta Platforms Ireland Ltd (USA/EEA) — Meta Pixel; SCCs; (5) TikTok Technology Limited (USA/EEA) — TikTok Pixel; SCCs; (6) Cloudflare Inc. (USA) — Turnstile anti-spam; SCCs; (7) Resend Inc. (USA) — request e-mail notifications, if enabled; SCCs. Processing agreements (DPAs) are entered into or accepted under each provider’s terms.",
        "We do not sell your personal data. We do not transfer data to third parties for their independent marketing purposes without your explicit consent.",
      ],
    },
    {
      id: "transfers",
      title: "8. International data transfers",
      paragraphs: [
        "Certain providers (Google, Meta, TikTok, Supabase, Vercel, Cloudflare, Resend) may process data in countries outside the European Economic Area (EEA), in particular the United States. In such cases, we ensure appropriate safeguards under GDPR Chapter V.",
        "Mechanisms used: European Commission adequacy decisions (including the EU-US Data Privacy Framework where applicable); Standard Contractual Clauses (SCCs) adopted by the European Commission; supplementary technical and organisational measures (encryption in transit, data minimisation, access control). For each provider listed in section 7, extra-EEA transfers rely on SCCs and, where applicable, DPF certification.",
        "You may request further information on safeguards applicable to transfers by contacting us at implantikdrchirap@gmail.com.",
      ],
    },
    {
      id: "retention",
      title: "9. Retention periods",
      paragraphs: [
        "We retain data only for as long as necessary for the purposes for which it was collected, respecting legal deadlines and the principle of data minimisation.",
        "Requests from forms/website: maximum 24 months from the last relevant interaction, then deletion or anonymisation, except where the request has evolved into a patient relationship.",
        "Medical records and clinical documents: according to retention periods set by applicable regulations on medical records, which may exceed 10 years depending on the document type.",
        "Accounting and tax documents: under the Tax Code and accounting legislation — generally 5 years from the end of the financial year for accounting records, and 10 years for certain tax documents.",
        "Technical and security logs (Vercel, rate limiting, Turnstile): maximum 90 days, except where a security investigation requires extended retention.",
        "Marketing data and cookies: according to the cookie policy and your preferences; the `consent-preferences` cookie is stored for up to 12 months or until you withdraw/update your choices; the `implantik_attribution` cookie — maximum 90 days, only with marketing consent.",
        "Upon expiry of periods, data is deleted, anonymised, or securely archived as appropriate. The internal deletion procedure is managed by the clinic administrator, with support from contracted IT providers.",
      ],
    },
    {
      id: "rights",
      title: "10. Data subject rights",
      paragraphs: [
        "Under the GDPR, you have the following rights: right of access; right to rectification; right to erasure (“right to be forgotten”), subject to legal exceptions; right to restriction of processing; right to data portability, for data provided on the basis of consent or contract and processed automatically; right to object to processing based on legitimate interests, including profiling; right not to be subject to a decision based solely on automated processing; right to withdraw consent at any time without affecting the lawfulness of prior processing.",
        "For health-related data, certain rights may be limited by legal obligations regarding medical record retention or the need for continuity of care.",
        "To exercise your rights, send a request to implantikdrchirap@gmail.com stating the right you wish to exercise and information needed to identify you. We may request additional information to verify identity. We respond within one month, extendable by two further months in complex cases, with notice to you.",
        "If processing is based on cookie consent, you can change your preferences at any time via the cookie banner or the “Cookie settings” link in the site footer.",
      ],
    },
    {
      id: "complaint",
      title: "11. Complaint to the supervisory authority",
      paragraphs: [
        "You have the right to lodge a complaint with the Romanian National Supervisory Authority for Personal Data Processing (ANSPDCP) if you believe processing infringes data protection law.",
        "ANSPDCP contact details: B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, Bucharest, www.dataprotection.ro, e-mail anspdcp@anspdcp.ro.",
        "We encourage you to contact us first at implantikdrchirap@gmail.com to try to resolve any concern regarding your data amicably.",
      ],
    },
    {
      id: "security",
      title: "12. Security measures",
      paragraphs: [
        "We implement appropriate technical and organisational measures to protect data against destruction, loss, alteration, disclosure, or unauthorised access. These include, as applicable: role-based access control; encrypted communications (HTTPS); passwords and authentication for internal systems; staff training on confidentiality; minimisation of data collected via forms; separation of development and production environments.",
        "Request storage platform (Supabase): restricted access, encryption in transit, provider-managed backups, administrative access limited to authorised staff.",
        "In the event of a personal data breach, we will act according to our internal procedure: risk assessment within 72 hours, notification to ANSPDCP if there is risk to data subject rights, informing data subjects where required by law. The clinic administrator is responsible for incident management.",
        "The clinic holds professional liability (malpractice) insurance as required by law for medical activity. This covers professional medical liability and does not replace GDPR obligations regarding data security.",
        "The confidentiality obligation under the GDPR correlates with the patient information obligation under Law no. 95/2006 on healthcare reform and Law no. 46/2003 on patients’ rights.",
      ],
    },
    {
      id: "children",
      title: "13. Children and minors",
      paragraphs: [
        "The minimum age for giving one’s own consent regarding information society services is 16, under Law no. 190/2018. For minors below this age, parental/legal guardian consent is required. Appointments for minor patients are made by a parent or legal representative.",
        "If we learn that we have collected data from a minor under 16 without parental/legal guardian consent where required, we will take steps to delete the data to the extent this does not conflict with medical legal obligations. Age verification relies on voluntarily provided information.",
      ],
    },
    {
      id: "changes-contact",
      title: "14. Policy changes and contact",
      paragraphs: [
        "We may update this policy to reflect legislative, technological, or operational changes. The version published on implantik.ro is the applicable one; the update date is shown in the header.",
        "For material changes regarding cookies or tracking, we will update the Cookie Policy, increment `policyVersion` in the `consent-preferences` cookie, and re-request consent via the banner, in line with the site’s technical implementation.",
        "For any questions about this policy or the processing of your data: Implantik Chirap SRL, Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581; e-mail implantikdrchirap@gmail.com; phone (0758) 169 234; website implantik.ro. Hours: Monday–Friday, 8:00–19:30.",
      ],
    },
  ],
};
