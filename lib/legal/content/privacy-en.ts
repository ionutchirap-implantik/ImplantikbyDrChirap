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
        "The current version of this policy is identified by the update date shown in the header. [DE COMPLETAT - internal procedure for notifying data subjects of material changes, if applicable]",
      ],
    },
    {
      id: "controller",
      title: "2. Data controller identity",
      paragraphs: [
        "The data controller is Implantik Chirap SRL, a Romanian legal entity with registered office at Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581, Romania, registered with the Trade Register under no. J22/216/2019, tax ID (CUI) 40441553.",
        "Contact details for data protection matters: e-mail implantikdrchirap@gmail.com, phone (0758) 169 234, website implantik.ro.",
        "Legal representative: [DE COMPLETAT - name and role of legal representative of Implantik Chirap SRL].",
        "Registration with the Romanian National Supervisory Authority for Personal Data Processing (ANSPDCP): [DE COMPLETAT - if operator registration or processing records are required, state number/category and legal basis].",
      ],
    },
    {
      id: "dpo",
      title: "3. Data Protection Officer (DPO)",
      paragraphs: [
        "Where a Data Protection Officer (DPO) or dedicated data protection contact is appointed, contact details are: [DE COMPLETAT - DPO name or GDPR contact person, dedicated e-mail, phone, response hours].",
        "You may submit requests regarding your rights or questions about data processing to implantikdrchirap@gmail.com with the subject line “Data protection”. We will respond within the statutory period, generally within one month.",
        "[DE COMPLETAT - if no DPO is appointed, confirm the legal basis for non-appointment under Art. 37 GDPR and the internal role handling GDPR requests].",
      ],
    },
    {
      id: "data-categories",
      title: "4. Categories of data processed",
      paragraphs: [
        "Depending on your interaction with us, we may process the following categories of data: identification and contact data (name, surname, phone number, e-mail address); data from messages sent via forms or communication channels; data on the service of interest or contact preferences; technical and website usage data (IP address, browser type, pages visited, interaction events); marketing and attribution data (UTM parameters, ad click identifiers, if you have accepted relevant cookies); patient relationship data where applicable (appointments, medical documents, billing).",
        "We do not ordinarily request sensitive data outside the medical context or your request via forms. We do not intentionally collect data about minors through the website, except where a parent or legal representative contacts us on behalf of a minor.",
        "Data sources may include: directly from you (forms, phone, e-mail, WhatsApp, at the clinic); automatically through cookies and similar technologies, with your consent where required; from public or professional sources only as permitted by law and necessary for clinic operations. [DE COMPLETAT - other data sources, if any, e.g. referrals, medical partners].",
      ],
      subsections: [
        {
          id: "form-data",
          title: "4.1. Data provided via forms and communications",
          paragraphs: [
            "Contact and appointment forms on implantik.ro request the minimum data needed to respond or schedule you: name, phone, e-mail (optional), service of interest, optional message, and contact preference.",
            "Data sent via WhatsApp, phone, or e-mail is processed under the same data-minimisation logic. Do not enter detailed medical information in open fields unless necessary; for clinical assessment, an in-clinic consultation remains the appropriate channel.",
            "Call recordings: [DE COMPLETAT - if calls are recorded, legal basis, retention period, and information provided to data subjects].",
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
        "Legal bases for processing health-related data include, as applicable: explicit consent of the data subject (Art. 9(2)(a) GDPR), together with the basis for other operations (e.g. Art. 6(1)(b) or (f) GDPR); legal obligations in the medical field; establishment, exercise, or defence of legal claims where applicable. [DE COMPLETAT - exact list of Art. 9 bases used per flow: website form, medical record, billing, permitted medical marketing].",
        "We do not use health-related data from website forms for advertising or profiling. Any use for commercial communication related to medical services is only within legal limits and, where required, based on explicit consent. [DE COMPLETAT - internal policy on post-consultation communications and medical follow-up].",
      ],
    },
    {
      id: "purposes-bases",
      title: "6. Processing purposes and legal bases",
      paragraphs: [
        "We process your data for the following main purposes, on the legal bases indicated:",
        "Handling requests and appointments — responding to messages, calls, scheduling consultations (basis: Art. 6(1)(b) GDPR — pre-contractual/contractual measures; for health data in requests: explicit consent Art. 9).",
        "Provision of dental medical services — medical record, treatments, billing, patient relationship (basis: Art. 6(1)(b), (c), (f) GDPR; Art. 9(2)(h) or consent as applicable; specific legal obligations for medical activity). [DE COMPLETAT - reference to applicable medical legislation for patient records].",
        "Website security and abuse prevention — anti-spam protection, rate limiting, limited technical logging (basis: Art. 6(1)(f) GDPR — legitimate interest in securing systems). [DE COMPLETAT - Cloudflare Turnstile and server log details].",
        "Website analytics and improvement — aggregated statistics on site usage, only after consent for analytics cookies (basis: Art. 6(1)(a) GDPR).",
        "Digital marketing and conversion measurement — Google Ads, Meta Pixel, TikTok Pixel, campaign attribution, only after consent for marketing cookies (basis: Art. 6(1)(a) GDPR).",
        "Compliance with legal obligations — accounting/tax document archiving, responses to authorities (basis: Art. 6(1)(c) GDPR). [DE COMPLETAT - other specific legal obligations of the clinic].",
        "Legitimate interests — defending rights in potential disputes, fraud prevention, maintaining necessary internal records (basis: Art. 6(1)(f) GDPR, subject to balancing test).",
      ],
    },
    {
      id: "recipients",
      title: "7. Data recipients and processors",
      paragraphs: [
        "Data may be disclosed, strictly on a legal basis and as necessary, to the following categories of recipients: authorised clinic staff (doctors, assistants, reception, administration) bound by confidentiality; IT and hosting service providers acting as processors; lead storage and management platforms; e-mail, telephony, WhatsApp Business providers; online analytics and advertising providers (Google, Meta, TikTok), only after consent; accountants, legal advisers, insurers, public authorities as required by law.",
        "The current list of processors and relevant sub-processors: [DE COMPLETAT - processor table: name, country, service, data types, transfer safeguards]. Known examples at present: Supabase (form lead storage) — [DE COMPLETAT - project region, DPA, sub-processors]; Vercel or other hosting provider — [DE COMPLETAT]; Google (GA4, Ads, GTM) — [DE COMPLETAT - SCC/adequacy]; Meta Platforms — [DE COMPLETAT]; TikTok — [DE COMPLETAT]; Cloudflare Turnstile — [DE COMPLETAT].",
        "We do not sell your personal data. We do not transfer data to third parties for their independent marketing purposes without your explicit consent.",
      ],
    },
    {
      id: "transfers",
      title: "8. International data transfers",
      paragraphs: [
        "Certain providers (e.g. Google, Meta, TikTok, Supabase) may process data in countries outside the European Economic Area (EEA). In such cases, we ensure appropriate safeguards under GDPR Chapter V.",
        "Mechanisms used, as applicable: European Commission adequacy decisions; Standard Contractual Clauses (SCCs); supplementary security measures recommended by authorities. [DE COMPLETAT - for each provider with extra-EEA transfer: mechanism, SCC version, TIA assessment if available].",
        "You may request further information on safeguards applicable to transfers by contacting us at implantikdrchirap@gmail.com.",
      ],
    },
    {
      id: "retention",
      title: "9. Retention periods",
      paragraphs: [
        "We retain data only for as long as necessary for the purposes for which it was collected, respecting legal deadlines and the principle of data minimisation.",
        "Leads and requests from forms/website: [DE COMPLETAT - exact period, e.g. 12/24/36 months from last interaction, deletion criteria].",
        "Medical records and clinical documents: according to medical legislation and applicable retention periods — [DE COMPLETAT - legal and internal practical term].",
        "Accounting and tax documents: under the Tax Code and accounting legislation — [DE COMPLETAT - period, typically 5/10 years].",
        "Technical and security logs: [DE COMPLETAT - retention duration for server logs, Turnstile, backups].",
        "Marketing data and cookies: according to the cookie policy and your preferences; the `consent-preferences` cookie is stored for up to 12 months or until you withdraw/update your choices.",
        "Upon expiry of periods, data is deleted, anonymised, or securely archived as appropriate. [DE COMPLETAT - internal deletion/archiving procedure and responsible person].",
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
        "Lead storage platform (Supabase): [DE COMPLETAT - specific measures: RLS, encryption, backup, administrative access].",
        "In the event of a personal data breach, we will act according to the internal notification procedure: [DE COMPLETAT - breach procedure, ANSPDCP and data subject notification deadlines, incident lead].",
        "Professional liability / cyber insurance: [DE COMPLETAT - if a policy exists, provider, coverage relevant to data].",
      ],
    },
    {
      id: "children",
      title: "13. Children and minors",
      paragraphs: [
        "The implantik.ro website is not intended for children under 16 to independently provide data. Medical services for minors may be requested by a parent or legal guardian.",
        "If we learn that we have collected data from a minor without parental consent where required, we will take steps to delete the data to the extent this does not conflict with medical legal obligations. [DE COMPLETAT - internal procedure for age verification and parental consent].",
      ],
    },
    {
      id: "changes-contact",
      title: "14. Policy changes and contact",
      paragraphs: [
        "We may update this policy to reflect legislative, technological, or operational changes. The version published on implantik.ro is the applicable one; the update date is shown in the header.",
        "For material changes, we will display a notice on the website or take other reasonable steps to inform you. [DE COMPLETAT - whether consent will be re-requested upon changes to cookies/tracking policy].",
        "For any questions about this policy or the processing of your data: Implantik Chirap SRL, Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581; e-mail implantikdrchirap@gmail.com; phone (0758) 169 234; website implantik.ro.",
      ],
    },
  ],
};
