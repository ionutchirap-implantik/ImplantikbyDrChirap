import { POLICY_VERSION } from "@/lib/consent/policy-version";
import type { LegalDocument } from "@/lib/legal/types";

export const termsRo: LegalDocument = {
  type: "terms",
  title: "Termeni și condiții de utilizare",
  description:
    "Prezentele termeni și condiții reglementează accesul și utilizarea site-ului implantik.ro, operat de Implantik Chirap SRL. Prin utilizarea site-ului, confirmați că ați citit și înțeles acești termeni.",
  lastUpdated: `Ultima actualizare: ${POLICY_VERSION}`,
  tocTitle: "Cuprins",
  sections: [
    {
      id: "introducere",
      title: "1. Introducere și acceptare",
      paragraphs: [
        "Bine ați venit pe implantik.ro, site-ul oficial al clinicii Implantik by Dr. Chirap din Iași. Site-ul este operat de Implantik Chirap SRL, CUI 40441553, J22/216/2019, cu sediul în Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581.",
        "Accesând, navigând sau utilizând site-ul, inclusiv formularele de contact și programare, acceptați prezentele Termeni și condiții. Dacă nu sunteți de acord, vă rugăm să nu utilizați site-ul.",
        "Termenii se completează cu Politica de confidențialitate și Politica de cookies, care descriu prelucrarea datelor personale și utilizarea cookie-urilor. În caz de conflict între documente privind datele personale, prevalează Politica de confidențialitate.",
        "Versiunea aplicabilă este cea publicată online la data accesării, cu mențiunea datei de actualizare din antet. [DE COMPLETAT - dacă există condiții suplimentare pentru pacienți internaționali sau turism dentar].",
      ],
    },
    {
      id: "operator",
      title: "2. Identitatea operatorului site-ului",
      paragraphs: [
        "Operatorul site-ului și furnizorul serviciilor medicale promovate prin site este Implantik Chirap SRL. Date de contact: implantikdrchirap@gmail.com, telefon (0758) 169 234, adresă Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581.",
        "Serviciile medicale sunt prestate la sediul clinicii de personal medical autorizat. [DE COMPLETAT - structură organizatorică relevantă, contracte cu medici colaboratori dacă există].",
        "Autorizații și înregistrări profesionale: [DE COMPLETAT - autorizație funcționare clinică, cod CAEN, înregistrări CMS/CMR dacă sunt afișate public].",
      ],
    },
    {
      id: "utilizare",
      title: "3. Utilizarea site-ului",
      paragraphs: [
        "Site-ul are scop informativ și de facilitare a contactului/programărilor pentru servicii stomatologice și conexe. Vă angajați să utilizați site-ul în mod legal, civilizat și în conformitate cu acești termeni.",
        "Este interzis: utilizarea site-ului pentru transmiterea de conținut ilegal, defăimător, fraudulos sau dăunător; încercarea de acces neautorizat la sisteme sau date; scraping automatizat abuziv; introducerea de malware; utilizarea identității altei persoane; transmiterea de spam prin formulare.",
        "Ne rezervăm dreptul de a restricționa accesul utilizatorilor care încalcă aceste reguli sau care afectează securitatea ori funcționarea site-ului. [DE COMPLETAT - procedură internă blocare IP/abuz formulare].",
        "Conținutul site-ului este destinat utilizatorilor din România și, după caz, persoanelor interesate de serviciile clinicii din Iași, inclusiv pacienți din alte localități sau din străinătate care solicită informații preliminare.",
      ],
    },
    {
      id: "disclaimer-medical",
      title: "4. Informații medicale — nu constituie sfat medical",
      paragraphs: [
        "Informațiile prezentate pe implantik.ro (texte, imagini ilustrative, descrieri de servicii, răspunsuri generale, articole sau secțiuni FAQ) au caracter strict informativ și educațional general. Ele nu înlocuiesc consultația medicală, examinarea clinică, diagnosticul sau planul de tratament individual.",
        "Nicio informație de pe site nu trebuie interpretată ca sfat medical personalizat, recomandare de tratament sau garanție a unui rezultat clinic. Deciziile privind sănătatea dentară trebuie luate împreună cu medicul, în urma evaluării directe.",
        "Imaginile de tip before/after sau cazuri clinice, acolo unde sunt publicate, ilustrează situații individuale și nu reprezintă rezultate garantate pentru alți pacienți. [DE COMPLETAT - politica de publicare cazuri și consimțământ pacient].",
        "În caz de urgență medicală, contactați serviciile de urgență sau mergeți la cea mai apropiată unitate medicală; site-ul nu oferă consultații de urgență online.",
      ],
    },
    {
      id: "programari",
      title: "5. Programări, solicitări și relația cu pacientul",
      paragraphs: [
        "Formularele de contact și programare permit transmiterea unei solicitări; trimiterea nu garantează automat confirmarea unei programări la o anumită dată/oră. Confirmarea se face de către recepția clinicii prin telefon, e-mail, WhatsApp sau alt canal comunicat.",
        "Vă rugăm să furnizați date corecte și actualizate. Pentru date privind sănătatea transmise voluntar prin formular, este necesar consimțământul explicit indicat în formular, conform Politicii de confidențialitate.",
        "Relația medicală propriu-zisă (consultație, tratament, facturare, consimțământ informat pentru proceduri) se guvernează de legislația medicală aplicabilă și de documentele semnate la cabinet, nu numai de acești termeni de utilizare a site-ului.",
        "Politica de anulare/reprogramare consultații: [DE COMPLETAT - termene, penalități dacă există, no-show]. Tarifele afișate pe site sau comunicate au caracter orientativ până la evaluarea clinică; prețurile finale sunt cele din planul de tratament agreat. [DE COMPLETAT - referință pagină prețuri și condiții plată].",
      ],
    },
    {
      id: "proprietate",
      title: "6. Proprietate intelectuală",
      paragraphs: [
        "Conținutul site-ului (texte, structură, elemente grafice, logo, fotografii, materiale video, denumirea Implantik by Dr. Chirap) este protejat de legislația privind drepturile de autor și mărcile comerciale. Drepturile aparțin Implantik Chirap SRL sau licențiatorilor, după caz.",
        "Este permisă vizualizarea și descărcarea temporară a conținutului exclusiv pentru uz personal, necomercial. Este interzisă reproducerea, distribuirea, modificarea, republicarea sau exploatarea comercială fără acordul scris prealabil al Operatorului.",
        "Mărci și denumiri ale unor terți menționate factual în descrieri de servicii aparțin titularilor respectivi. [DE COMPLETAT - licențe fonturi, stock photos, software terț dacă relevant].",
      ],
    },
    {
      id: "linkuri",
      title: "7. Linkuri către terți",
      paragraphs: [
        "Site-ul poate conține linkuri către site-uri terțe (rețele sociale, hărți Google, WhatsApp, furnizori de plăți dacă vor fi integrați). Aceste linkuri sunt furnizate pentru comoditate; nu controlăm conținutul sau politicile acelor site-uri.",
        "Accesarea site-urilor terțe se face pe propria răspundere. Vă recomandăm să citiți termenii și politicile de confidențialitate ale fiecărui site vizitat.",
        "Embed-uri (ex. hartă Google Maps, feed Instagram): [DE COMPLETAT - lista embed-urilor active și nota privind datele prelucrate de terți la încărcare].",
      ],
    },
    {
      id: "raspundere",
      title: "8. Limitarea răspunderii",
      paragraphs: [
        "Depunem eforturi rezonabile pentru acuratețea informațiilor de pe site și pentru funcționarea tehnică, însă nu garantăm că site-ul va fi permanent disponibil, lipsit de erori sau complet actualizat în orice moment.",
        "În măsura permisă de lege, Implantik Chirap SRL nu răspunde pentru daune indirecte, pierderi de profit sau de date rezultate din utilizarea sau imposibilitatea utilizării site-ului, din întreruperi tehnice, atacuri cibernetice sau acțiuni ale terților, cu excepția cazurilor de dol sau culpă gravă.",
        "Răspunderea pentru serviciile medicale ține de relația medicală și de legislația aplicabilă profesioniștilor din sănătate, nu de simpla consultare a site-ului. [DE COMPLETAT - poliță asigurare malpraxis și limite aplicabile].",
        "Forța majoră: [DE COMPLETAT - clauză forță majoră dacă se dorește explicit].",
      ],
    },
    {
      id: "date-personale",
      title: "9. Protecția datelor personale",
      paragraphs: [
        "Prelucrarea datelor personale efectuate prin site este descrisă în Politica de confidențialitate. Datele din formulare pot include categorii speciale privind sănătatea (GDPR art. 9) și sunt prelucrate cu măsuri sporite de protecție.",
        "Cookie-urile și tehnologiile de tracking sunt utilizate conform Politicii de cookies și numai cu consimțământul dvs. pentru categoriile non-esențiale.",
        "Furnizor stocare lead-uri: Supabase — [DE COMPLETAT - detalii contractuale și regiune]. Pentru exercitarea drepturilor GDPR, contactați implantikdrchirap@gmail.com.",
      ],
    },
    {
      id: "lege",
      title: "10. Legea aplicabilă și litigii",
      paragraphs: [
        "Prezentele termeni sunt guvernate de legea română. Orice litigiu decurgând din sau în legătură cu utilizarea site-ului va fi soluționat pe cale amiabilă, dacă este posibil, prin contact la implantikdrchirap@gmail.com.",
        "În lipsa unei înțelegeri amiabile, litigiile sunt de competența instanțelor judecătorești competente din România, conform regulilor de drept internațional privat aplicabile consumatorilor. [DE COMPLETAT - sediu arbitraj/mediu alternativ dacă se dorește].",
        "Dacă sunteți consumator în sensul legislației române, beneficiați de drepturile imperativ prevăzute de lege, care nu pot fi limitate prin acești termeni.",
      ],
    },
    {
      id: "modificari",
      title: "11. Modificări ale termenilor",
      paragraphs: [
        "Ne rezervăm dreptul de a modifica acești termeni pentru a reflecta schimbări legale, operaționale sau ale funcționalității site-ului. Versiunea actualizată va fi publicată pe implantik.ro cu noua dată de actualizare.",
        "Continuarea utilizării site-ului după publicarea modificărilor constituie acceptarea termenilor actualizați, în măsura permisă de lege. Pentru modificări substanțiale, putem afișa o notificare pe site. [DE COMPLETAT - procedură de informare].",
      ],
    },
    {
      id: "contact",
      title: "12. Contact",
      paragraphs: [
        "Pentru întrebări privind acești termeni sau funcționarea site-ului: Implantik Chirap SRL, Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581; e-mail implantikdrchirap@gmail.com; telefon (0758) 169 234; site implantik.ro.",
        "Program clinică: [DE COMPLETAT - program recepție pentru solicitări prin site, dacă diferă de programul general].",
      ],
    },
  ],
};
