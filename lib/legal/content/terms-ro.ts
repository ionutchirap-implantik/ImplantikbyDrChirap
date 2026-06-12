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
        "Acești termeni guvernează utilizarea site-ului. Folosirea formularelor și transmiterea solicitărilor presupun acceptarea lor. Pentru relația medicală efectivă prevalează documentele semnate la cabinet. Dacă nu sunteți de acord, vă rugăm să nu utilizați site-ul.",
        "Termenii se completează cu Politica de confidențialitate și Politica de cookies, care descriu prelucrarea datelor personale și utilizarea cookie-urilor. În caz de conflict între documente privind datele personale, prevalează Politica de confidențialitate.",
        "Versiunea aplicabilă este cea publicată online la data accesării, cu mențiunea datei de actualizare din antet. Pacienții internaționali sau cei interesați de servicii stomatologice în Iași sunt supuși acelorași termeni; comunicarea se realizează în limba română sau engleză, după preferință, iar relația medicală se desfășoară la sediul clinicii din România, conform legislației române.",
      ],
    },
    {
      id: "operator",
      title: "2. Identitatea operatorului site-ului",
      paragraphs: [
        "Operatorul site-ului și furnizorul serviciilor medicale promovate prin site este Implantik Chirap SRL. Date de contact: implantikdrchirap@gmail.com, telefon (0758) 169 234, adresă Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581.",
        "Serviciile medicale sunt prestate la sediul clinicii de personal medical autorizat, sub coordonarea Dr. Ionuț Chirap, administrator și medic stomatolog. Structura organizatorică include personal medical și administrativ angajat sau colaborator, conform contractelor și autorizațiilor în vigoare.",
        "Autorizații și înregistrări profesionale: activitate medicală stomatologică autorizată; cod CAEN principal 8623 — activități de asistență stomatologică; înregistrare Registrul Comerțului J22/216/2019; CUI 40441553. Medicii care prestează servicii dețin autorizații de liberă practică și înregistrări CMSR (Colegiul Medicilor Stomatologi din România), conform cerințelor legale.",
      ],
    },
    {
      id: "utilizare",
      title: "3. Utilizarea site-ului",
      paragraphs: [
        "Site-ul are scop informativ și de facilitare a contactului/programărilor pentru servicii stomatologice și conexe. Vă angajați să utilizați site-ul în mod legal, civilizat și în conformitate cu acești termeni.",
        "Este interzis: utilizarea site-ului pentru transmiterea de conținut ilegal, defăimător, fraudulos sau dăunător; încercarea de acces neautorizat la sisteme sau date; scraping automatizat abuziv; introducerea de malware; utilizarea identității altei persoane; transmiterea de spam prin formulare.",
        "Ne rezervăm dreptul de a restricționa accesul utilizatorilor care încalcă aceste reguli sau care afectează securitatea ori funcționarea site-ului. Formularele sunt protejate prin Cloudflare Turnstile și rate limiting server-side; abuzurile repetate pot duce la blocarea temporară a adresei IP sau la respingerea solicitărilor.",
        "Conținutul site-ului este destinat utilizatorilor din România și, după caz, persoanelor interesate de serviciile clinicii din Iași, inclusiv pacienți din alte localități sau din străinătate care solicită informații preliminare.",
      ],
    },
    {
      id: "disclaimer-medical",
      title: "4. Informații medicale — nu constituie sfat medical",
      paragraphs: [
        "Informațiile prezentate pe implantik.ro (texte, imagini ilustrative, descrieri de servicii, răspunsuri generale, articole sau secțiuni FAQ) au caracter strict informativ și educațional general. Ele nu înlocuiesc consultația medicală, examinarea clinică, diagnosticul sau planul de tratament individual.",
        "Nicio informație de pe site nu trebuie interpretată ca sfat medical personalizat, recomandare de tratament sau garanție a unui rezultat clinic. Deciziile privind sănătatea dentară trebuie luate împreună cu medicul, în urma evaluării directe.",
        "Imaginile de tip before/after sau cazuri clinice, acolo unde sunt publicate, ilustrează situații individuale și nu reprezintă rezultate garantate pentru alți pacienți. Publicarea cazurilor clinice se face numai cu consimțământul scris al pacientului, după anonimizarea datelor de identificare, conform politicii interne și cerințelor CMSR.",
        "În caz de urgență medicală, contactați serviciile de urgență sau mergeți la cea mai apropiată unitate medicală; site-ul nu oferă consultații de urgență online.",
      ],
    },
    {
      id: "programari",
      title: "5. Programări, solicitări și relația cu pacientul",
      paragraphs: [
        "Formularele de contact și programare permit transmiterea unei cereri de contact sau de programare, nu o rezervare fermă; programarea devine efectivă după confirmarea din partea clinicii, prin telefon, e-mail, WhatsApp sau alt canal comunicat.",
        "Vă rugăm să furnizați date corecte și actualizate. Pentru date privind sănătatea transmise voluntar prin formular, este necesar consimțământul explicit indicat în formular, conform Politicii de confidențialitate.",
        "Relația medicală propriu-zisă (consultație, tratament, facturare, consimțământ informat pentru proceduri) se guvernează de legislația medicală aplicabilă și de documentele semnate la cabinet, nu numai de acești termeni de utilizare a site-ului.",
        "Politica de anulare/reprogramare: vă rugăm să anunțați reprogramarea sau anularea cu minimum 24 de ore înainte de ora stabilită, prin telefon sau WhatsApp. Neprezentarea fără anunț (no-show) poate afecta prioritizarea programărilor viitoare. Tarifele afișate pe site sau comunicate au caracter orientativ până la evaluarea clinică; prețurile finale sunt cele din planul de tratament agreat. Plata se efectuează la cabinet, conform condițiilor comunicate de recepție.",
      ],
    },
    {
      id: "proprietate",
      title: "6. Proprietate intelectuală",
      paragraphs: [
        "Conținutul site-ului (texte, structură, elemente grafice, logo, fotografii, materiale video, denumirea Implantik by Dr. Chirap) este protejat de legislația privind drepturile de autor și mărcile comerciale. Drepturile aparțin Implantik Chirap SRL sau licențiatorilor, după caz.",
        "Este permisă vizualizarea și descărcarea temporară a conținutului exclusiv pentru uz personal, necomercial. Este interzisă reproducerea, distribuirea, modificarea, republicarea sau exploatarea comercială fără acordul scris prealabil al Operatorului.",
        "Mărci și denumiri ale unor terți menționate factual în descrieri de servicii aparțin titularilor respectivi. Site-ul utilizează fonturi Google Fonts (Poppins, Inter) conform licențelor open source, imagini licențiate sau proprietatea clinicii, și software open source (Next.js, React) sub licențele respective.",
      ],
    },
    {
      id: "linkuri",
      title: "7. Linkuri către terți",
      paragraphs: [
        "Site-ul poate conține linkuri către site-uri terțe (rețele sociale, Google Maps, WhatsApp). Aceste linkuri sunt furnizate pentru comoditate; nu controlăm conținutul sau politicile acelor site-uri.",
        "Accesarea site-urilor terțe se face pe propria răspundere. Vă recomandăm să citiți termenii și politicile de confidențialitate ale fiecărui site vizitat.",
        "Embed-uri active: hartă Google Maps (secțiunea Locație) — încărcată la accesarea paginii, poate transmite date tehnice către Google; feed Instagram (secțiune Home, dacă este activ) — încărcat lazy, poate seta cookie-uri terțe dacă vizualizați conținutul. Aceste servicii sunt guvernate de politicile Google și Meta.",
      ],
    },
    {
      id: "raspundere",
      title: "8. Limitarea răspunderii",
      paragraphs: [
        "Depunem eforturi rezonabile pentru acuratețea informațiilor de pe site și pentru funcționarea tehnică, însă nu garantăm că site-ul va fi permanent disponibil, lipsit de erori sau complet actualizat în orice moment.",
        "În măsura permisă de lege, Implantik Chirap SRL nu răspunde pentru daune indirecte, pierderi de profit sau de date rezultate din utilizarea sau imposibilitatea utilizării site-ului, din întreruperi tehnice, atacuri cibernetice sau acțiuni ale terților, cu excepția cazurilor de dol sau culpă gravă.",
        "Răspunderea pentru serviciile medicale ține de relația medicală și de legislația aplicabilă profesioniștilor din sănătate, nu de simpla consultare a site-ului. Clinica deține asigurare de răspundere civilă profesională (malpraxis) conform cerințelor legale pentru activitatea medicală.",
        "Forța majoră: niciuna dintre părți nu răspunde pentru neexecutarea obligațiilor cauzată de evenimente de forță majoră (calamități naturale, restricții guvernamentale, pandemii, întreruperi majore ale rețelelor), cu obligația de informare rezonabilă a utilizatorilor afectați.",
      ],
    },
    {
      id: "date-personale",
      title: "9. Protecția datelor personale",
      paragraphs: [
        "Prelucrarea datelor personale efectuate prin site este descrisă în Politica de confidențialitate. Datele din formulare pot include categorii speciale privind sănătatea (GDPR art. 9) și sunt prelucrate cu măsuri sporite de protecție.",
        "Cookie-urile și tehnologiile de tracking sunt utilizate conform Politicii de cookies și numai cu consimțământul dvs. pentru categoriile non-esențiale. GTM (GTM-5QFHBCH) și tag-urile asociate se încarcă numai după consimțământ, conform Consent Mode v2.",
        "Furnizor stocare solicitări: Supabase — datele din formulare sunt stocate în baza de date Supabase, accesibile doar server-side, cu chei securizate. Pentru exercitarea drepturilor GDPR, contactați implantikdrchirap@gmail.com.",
      ],
    },
    {
      id: "lege",
      title: "10. Legea aplicabilă și litigii",
      paragraphs: [
        "Prezentele termeni sunt guvernate de legea română. Orice litigiu decurgând din sau în legătură cu utilizarea site-ului va fi soluționat pe cale amiabilă, dacă este posibil, prin contact la implantikdrchirap@gmail.com.",
        "În lipsa unei înțelegeri amiabile, litigiile sunt de competența instanțelor judecătorești competente din România, conform regulilor de drept internațional privat aplicabile consumatorilor. Nu este prevăzută clauză de arbitraj; consumatorii pot utiliza și mecanismele alternative de soluționare a litigiilor prevăzute de lege.",
        "Dacă sunteți consumator în sensul legislației române, beneficiați de drepturile imperativ prevăzute de lege, care nu pot fi limitate prin acești termeni.",
      ],
    },
    {
      id: "modificari",
      title: "11. Modificări ale termenilor",
      paragraphs: [
        "Ne rezervăm dreptul de a modifica acești termeni pentru a reflecta schimbări legale, operaționale sau ale funcționalității site-ului. Versiunea actualizată va fi publicată pe implantik.ro cu noua dată de actualizare.",
        "Continuarea utilizării site-ului după publicarea modificărilor constituie acceptarea termenilor actualizați, în măsura permisă de lege. Pentru modificări substanțiale, vom afișa o notificare vizibilă pe site timp de minimum 30 de zile de la publicare.",
      ],
    },
    {
      id: "contact",
      title: "12. Contact",
      paragraphs: [
        "Pentru întrebări privind acești termeni sau funcționarea site-ului: Implantik Chirap SRL, Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581; e-mail implantikdrchirap@gmail.com; telefon (0758) 169 234; site implantik.ro.",
        "Program clinică: luni–vineri, 8:00–19:30. Solicitările transmise prin site sunt procesate în acest interval; răspunsul poate fi furnizat și prin telefon, e-mail sau WhatsApp.",
      ],
    },
  ],
};
