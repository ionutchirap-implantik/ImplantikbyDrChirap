import { POLICY_VERSION } from "@/lib/consent/policy-version";
import type { LegalDocument } from "@/lib/legal/types";

export const privacyRo: LegalDocument = {
  type: "privacy",
  title: "Politica de confidențialitate",
  description:
    "Prezenta politică descrie modul în care Implantik Chirap SRL prelucrează datele cu caracter personal ale vizitatorilor site-ului implantik.ro și ale persoanelor care ne contactează, inclusiv date privind sănătatea, în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și legislația națională aplicabilă.",
  lastUpdated: `Ultima actualizare: ${POLICY_VERSION}`,
  tocTitle: "Cuprins",
  sections: [
    {
      id: "introducere",
      title: "1. Introducere și domeniu de aplicare",
      paragraphs: [
        "Prezenta Politică de confidențialitate se aplică prelucrării datelor cu caracter personal efectuate de Implantik Chirap SRL (denumită în continuare „Operatorul”, „noi” sau „clinica”) prin intermediul site-ului implantik.ro, al formularelor de contact și programare, al comunicărilor telefonice, prin e-mail, WhatsApp sau alte canale puse la dispoziție de clinică.",
        "Politica se adresează vizitatorilor site-ului, persoanelor care solicită informații, programări sau consultații, pacienților existenți sau potențiali, precum și reprezentanților legali ai acestora, după caz.",
        "Documentul nu înlocuiește informarea individuală furnizată în cadrul relației medicale sau consimțământul informat specific procedurilor stomatologice. Pentru prelucrările din dosarul medical, se aplică și obligațiile legale specifice domeniului medical.",
        "Versiunea curentă a politicii este identificată prin data de actualizare indicată în antet. [DE COMPLETAT - procedura internă de notificare a modificărilor substanțiale către persoanele vizate, dacă este cazul]",
      ],
    },
    {
      id: "operator",
      title: "2. Identitatea operatorului de date",
      paragraphs: [
        "Operatorul datelor cu caracter personal este Implantik Chirap SRL, persoană juridică română, cu sediul social în Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581, România, înregistrată la Registrul Comerțului sub nr. J22/216/2019, CUI 40441553.",
        "Date de contact pentru aspecte legate de protecția datelor: e-mail implantikdrchirap@gmail.com, telefon (0758) 169 234, site implantik.ro.",
        "Reprezentant legal: [DE COMPLETAT - nume și funcție reprezentant legal Implantik Chirap SRL].",
        "Înregistrare la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP): [DE COMPLETAT - dacă este necesară înregistrarea operatorului sau a evidenței de prelucrare, indicați numărul/categoria și temeiul].",
      ],
    },
    {
      id: "dpo",
      title: "3. Responsabil cu protecția datelor (DPO)",
      paragraphs: [
        "În măsura în care este desemnat un responsabil cu protecția datelor (DPO) sau un punct de contact dedicat pentru protecția datelor, datele de contact sunt: [DE COMPLETAT - nume DPO sau persoană de contact GDPR, e-mail dedicat, telefon, program de răspuns].",
        "Puteți adresa solicitări privind exercitarea drepturilor sau întrebări referitoare la prelucrarea datelor la adresa de e-mail implantikdrchirap@gmail.com, cu mențiunea „Protecția datelor”. Răspunsul va fi furnizat în termenul legal, de regulă în termen de o lună.",
        "[DE COMPLETAT - dacă nu este desemnat DPO, confirmați temeiul legal al ne-desemnării conform art. 37 GDPR și persoana/poziția internă care gestionează solicitările GDPR].",
      ],
    },
    {
      id: "categorii-date",
      title: "4. Categoriile de date prelucrate",
      paragraphs: [
        "În funcție de interacțiunea dvs. cu noi, putem prelucra următoarele categorii de date: date de identificare și contact (nume, prenume, număr de telefon, adresă de e-mail); date din mesajele transmise prin formulare sau canale de comunicare; date privind serviciul de interes sau preferințele de contact; date tehnice și de utilizare a site-ului (adresă IP, tip browser, pagini vizitate, evenimente de interacțiune); date de marketing și atribuire (parametri UTM, identificatori de clic publicitar, dacă ați acceptat cookie-urile relevante); date din relația de pacient, după caz (programări, documente medicale, facturare).",
        "Nu solicităm în mod obișnuit date sensibile în afara contextului medical sau al solicitării dvs. prin formulare. Nu colectăm în mod intenționat date despre minori prin site, cu excepția situațiilor în care un părinte sau reprezentant legal ne contactează în numele minorului.",
        "Sursele datelor pot fi: direct de la dvs. (formulare, telefon, e-mail, WhatsApp, la cabinet); automat prin cookie-uri și tehnologii similare, cu consimțământul dvs. unde este necesar; din surse publice sau profesionale doar în măsura permisă de lege și necesară activității clinicii. [DE COMPLETAT - alte surse de date, dacă există, de ex. recomandări, parteneri medicali].",
      ],
      subsections: [
        {
          id: "date-formulare",
          title: "4.1. Date furnizate prin formulare și comunicări",
          paragraphs: [
            "Formularele de contact și programare de pe implantik.ro solicită date minime necesare pentru a vă răspunde sau a vă programa: nume, telefon, e-mail (opțional), serviciu de interes, mesaj opțional și preferință de contact.",
            "Datele transmise prin WhatsApp, telefon sau e-mail sunt prelucrate în aceeași logică de minim necesar. Nu introduceți în câmpuri deschise informații medicale detaliate dacă nu este necesar; pentru evaluare clinică, consultația la cabinet rămâne canalul adecvat.",
            "Înregistrările apelurilor telefonice: [DE COMPLETAT - dacă există înregistrare apeluri, temeiul, durata păstrării și informarea persoanelor vizate].",
          ],
        },
      ],
    },
    {
      id: "date-sanatate",
      title: "5. Date privind sănătatea (art. 9 GDPR)",
      paragraphs: [
        "Anumite informații pe care ni le furnizați pot constitui date privind sănătatea, categorie specială de date conform art. 9 din GDPR. Aceasta poate include mențiuni despre simptome, tratamente anterioare, alergii, servicii stomatologice solicitate sau alte detalii clinice incluse voluntar în mesajele transmise prin formulare, e-mail, WhatsApp sau în cadrul consultației.",
        "Prelucrăm astfel de date numai în măsura în care este strict necesar pentru: răspunsul la solicitarea dvs.; programarea unei consultații; evaluarea preliminară a compatibilității cu serviciile clinicii; derularea relației medicale, după caz.",
        "Temeiurile legale pentru prelucrarea datelor privind sănătatea includ, după caz: consimțământul explicit al persoanei vizate (art. 9 alin. (2) lit. a) GDPR), împreună cu temeiul pentru celelalte operațiuni (de ex. art. 6 alin. (1) lit. b) sau f) GDPR); obligații legale în domeniul medical; constatarea, exercitarea sau apărarea unui drept în instanță, dacă este cazul. [DE COMPLETAT - lista exactă a temeiurilor art. 9 utilizate pentru fiecare flux: formular site, dosar medical, facturare, marketing medical permis].",
        "Nu folosim datele privind sănătatea din formularele site-ului în scopuri de publicitate sau profilare. Orice utilizare în scop de comunicare comercială legată de servicii medicale se face numai în limitele legii și, unde este necesar, pe baza consimțământului explicit. [DE COMPLETAT - politica internă privind comunicările post-consultație și follow-up medical].",
      ],
    },
    {
      id: "scopuri-temeiuri",
      title: "6. Scopurile prelucrării și temeiurile legale",
      paragraphs: [
        "Prelucrăm datele dvs. în următoarele scopuri principale, pe baza temeiurilor legale indicate:",
        "Gestionarea solicitărilor și programărilor — răspuns la mesaje, apeluri, programări consultații (temei: art. 6 alin. (1) lit. b) GDPR — măsuri precontractuale/contractuale; pentru date de sănătate din solicitare: consimțământ explicit art. 9).",
        "Furnizarea serviciilor medicale stomatologice — dosar medical, tratamente, facturare, relație cu pacientul (temei: art. 6 alin. (1) lit. b), lit. c), lit. f) GDPR; art. 9 alin. (2) lit. h) sau consimțământ, după caz; obligații legale specifice activității medicale). [DE COMPLETAT - referință la legislația medicală aplicabilă dosarului de pacient].",
        "Securitatea site-ului și prevenirea abuzurilor — protecție anti-spam, rate limiting, jurnalizare tehnică limitată (temei: art. 6 alin. (1) lit. f) GDPR — interes legitim în securizarea sistemelor). [DE COMPLETAT - detalii Cloudflare Turnstile și jurnale server].",
        "Analiză și îmbunătățire site — statistici agregate despre utilizarea site-ului, doar după consimțământul pentru cookie-uri analitice (temei: art. 6 alin. (1) lit. a) GDPR).",
        "Marketing digital și măsurare conversii — Google Ads, Meta Pixel, TikTok Pixel, atribuire campanii, doar după consimțământul pentru cookie-uri de marketing (temei: art. 6 alin. (1) lit. a) GDPR).",
        "Îndeplinirea obligațiilor legale — arhivare documente contabile/fiscale, răspunsuri la autorități (temei: art. 6 alin. (1) lit. c) GDPR). [DE COMPLETAT - alte obligații legale specifice clinicii].",
        "Interes legitim — apărarea drepturilor în eventuale litigii, prevenirea fraudelor, menținerea evidențelor interne necesare (temei: art. 6 alin. (1) lit. f) GDPR, cu respectarea testului de echilibru).",
      ],
    },
    {
      id: "destinatari",
      title: "7. Destinatarii datelor și împuterniciți",
      paragraphs: [
        "Datele pot fi comunicate, strict pe baza unui temei legal și în limitele necesare, următorilor categorii de destinatari: personal autorizat al clinicii (medici, asistenți, recepție, administrativ) cu obligația confidențialității; furnizori de servicii IT și hosting care acționează ca persoane împuternicite; platforme de stocare și gestionare lead-uri; furnizori de servicii de e-mail, telefonie, WhatsApp Business; furnizori de analiză și publicitate online (Google, Meta, TikTok), numai după consimțământ; contabili, consultanți juridici, asiguratori, autorități publice, în măsura impusă de lege.",
        "Lista actualizată a persoanelor împuternicite și a sub-împuterniciților relevanți: [DE COMPLETAT - tabel procesatori: denumire, țară, serviciu, tip date, garanții transfer]. Exemple cunoscute în prezent: Supabase (stocare lead-uri din formulare) — [DE COMPLETAT - regiune proiect, DPA, sub-împuterniciți]; Vercel sau alt furnizor hosting — [DE COMPLETAT]; Google (GA4, Ads, GTM) — [DE COMPLETAT - SCC/adequacy]; Meta Platforms — [DE COMPLETAT]; TikTok — [DE COMPLETAT]; Cloudflare Turnstile — [DE COMPLETAT].",
        "Nu vindem datele dvs. cu caracter personal. Nu transferăm date către terți în scopul lor independent de marketing fără consimțământul dvs. explicit.",
      ],
    },
    {
      id: "transferuri",
      title: "8. Transferuri internaționale de date",
      paragraphs: [
        "Anumiți furnizori (de ex. Google, Meta, TikTok, Supabase) pot prelucra date în state din afara Spațiului Economic European (SEE). În astfel de cazuri, ne asigurăm că există garanții adecvate conform cap. V GDPR.",
        "Mecanisme utilizate, după caz: decizii de adecvare ale Comisiei Europene; Clauze Contractuale Standard (SCC); măsuri suplimentare de securitate recomandate de autorități. [DE COMPLETAT - pentru fiecare furnizor cu transfer extra-SEE: mecanism, versiune SCC, evaluare TIA dacă există].",
        "Puteți solicita informații suplimentare despre garanțiile aplicabile transferurilor contactându-ne la implantikdrchirap@gmail.com.",
      ],
    },
    {
      id: "stocare",
      title: "9. Perioade de stocare",
      paragraphs: [
        "Păstrăm datele doar atât timp cât este necesar pentru scopurile pentru care au fost colectate, respectând termenele legale și principiul minimizării.",
        "Lead-uri și solicitări din formulare/site: [DE COMPLETAT - perioada exactă, ex. 12/24/36 luni de la ultima interacțiune, criterii de ștergere].",
        "Dosar medical și documente clinice: conform legislației medicale și termenelor de păstrare aplicabile — [DE COMPLETAT - termen legal și practic intern].",
        "Documente contabile și fiscale: conform Codului fiscal și legislației contabile — [DE COMPLETAT - termen, de regulă 5/10 ani].",
        "Jurnale tehnice și securitate: [DE COMPLETAT - durată retenție loguri server, Turnstile, backup-uri].",
        "Date de marketing și cookie-uri: conform politicii de cookies și preferințelor dvs.; cookie-ul de consimțământ `consent-preferences` este păstrat până la 12 luni sau până la retragerea/actualizarea alegerii.",
        "La expirarea perioadelor, datele sunt șterse, anonimizate sau arhivate securizat, după caz. [DE COMPLETAT - procedura internă de ștergere/arhivare și responsabil].",
      ],
    },
    {
      id: "drepturi",
      title: "10. Drepturile persoanelor vizate",
      paragraphs: [
        "În condițiile GDPR, aveți următoarele drepturi: dreptul de acces; dreptul la rectificare; dreptul la ștergere („dreptul de a fi uitat”), cu excepțiile legale; dreptul la restricționarea prelucrării; dreptul la portabilitatea datelor, pentru date furnizate în baza consimțământului sau contractului, prelucrate automat; dreptul de opoziție la prelucrări bazate pe interes legitim, inclusiv profilarea; dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrare automată; dreptul de a vă retrage consimțământul în orice moment, fără a afecta legalitatea prelucrării anterioare.",
        "Pentru datele privind sănătatea, anumite drepturi pot fi limitate de obligațiile legale privind păstrarea dosarului medical sau de necesitatea continuității îngrijirii medicale.",
        "Pentru exercitarea drepturilor, trimiteți o solicitare la implantikdrchirap@gmail.com, indicând dreptul pe care doriți să îl exercitați și datele necesare identificării. Putem solicita informații suplimentare pentru confirmarea identității. Răspundem în termen de o lună, prelungibil cu încă două luni în cazuri complexe, cu informarea dvs.",
        "Dacă prelucrarea se bazează pe consimțământul pentru cookie-uri, puteți modifica preferințele oricând din bannerul de cookies sau din linkul „Setări cookies” din subsolul site-ului.",
      ],
    },
    {
      id: "plangere",
      title: "11. Plângere la autoritatea de supraveghere",
      paragraphs: [
        "Aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), dacă considerați că prelucrarea încalcă legislația privind protecția datelor.",
        "Date de contact ANSPDCP: B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București, www.dataprotection.ro, e-mail anspdcp@anspdcp.ro.",
        "Vă încurajăm să ne contactați în prealabil la implantikdrchirap@gmail.com pentru a încerca rezolvarea amiabilă a oricărei preocupări legate de datele dvs.",
      ],
    },
    {
      id: "securitate",
      title: "12. Măsuri de securitate",
      paragraphs: [
        "Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele împotriva distrugerii, pierderii, modificării, dezvăluirii sau accesului neautorizat. Acestea includ, după caz: controlul accesului pe bază de rol; comunicații criptate (HTTPS); parole și autentificare pentru sistemele interne; instruirea personalului privind confidențialitatea; minimizarea datelor colectate prin formulare; separarea mediilor de dezvoltare și producție.",
        "Platforma de stocare a lead-urilor (Supabase): [DE COMPLETAT - măsuri specifice: RLS, criptare, backup, acces administrativ].",
        "În cazul unei încălcări a securității datelor cu caracter personal, vom acționa conform procedurii interne de notificare: [DE COMPLETAT - procedură breach, termene notificare ANSPDCP și persoane vizate, responsabil incident].",
        "Asigurare de răspundere profesională / cyber: [DE COMPLETAT - dacă există poliță, furnizor, acoperire relevantă pentru date].",
      ],
    },
    {
      id: "minori",
      title: "13. Copii și minori",
      paragraphs: [
        "Site-ul implantik.ro nu este destinat în mod direct copiilor sub 16 ani pentru colectarea autonomă de date. Serviciile medicale pentru minori pot fi solicitate de un părinte sau tutore legal.",
        "Dacă aflăm că am colectat date de la un minor fără consimțământul parental acolo unde acesta este necesar, vom lua măsuri pentru ștergerea datelor, în măsura în care nu contravin obligațiilor legale medicale. [DE COMPLETAT - procedură internă verificare vârstă și consimțământ parental].",
      ],
    },
    {
      id: "modificari-contact",
      title: "14. Modificări ale politicii și contact",
      paragraphs: [
        "Putem actualiza prezenta politică pentru a reflecta modificări legislative, tehnologice sau operaționale. Versiunea publicată pe implantik.ro este cea aplicabilă; data actualizării este indicată în antet.",
        "Pentru modificări substanțiale, vom afișa o notificare pe site sau vom lua alte măsuri rezonabile de informare. [DE COMPLETAT - dacă se re-solicită consimțământul la schimbarea politicii de cookies/tracking].",
        "Pentru orice întrebări privind această politică sau prelucrarea datelor dvs.: Implantik Chirap SRL, Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581; e-mail implantikdrchirap@gmail.com; telefon (0758) 169 234; site implantik.ro.",
      ],
    },
  ],
};
