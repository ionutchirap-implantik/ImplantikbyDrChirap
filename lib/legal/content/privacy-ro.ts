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
        "Versiunea curentă a politicii este identificată prin data de actualizare indicată în antet. Pentru modificări substanțiale, vom publica versiunea actualizată pe implantik.ro și, după caz, vom afișa o notificare pe site sau vom re-solicita consimțământul pentru cookie-uri și tracking, conform Politicii de cookies.",
      ],
    },
    {
      id: "operator",
      title: "2. Identitatea operatorului de date",
      paragraphs: [
        "Operatorul datelor cu caracter personal este Implantik Chirap SRL, persoană juridică română, cu sediul social în Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581, România, înregistrată la Registrul Comerțului sub nr. J22/216/2019, CUI 40441553.",
        "Date de contact pentru aspecte legate de protecția datelor: e-mail implantikdrchirap@gmail.com, telefon (0758) 169 234, site implantik.ro. Program răspuns solicitări GDPR: luni–vineri, 8:00–19:30.",
        "Reprezentant legal: Dr. Ana Maria Chirap, administrator.",
        "Operatorul păstrează evidența activităților de prelucrare prevăzută de art. 30 GDPR. Sub incidența GDPR, operatorii nu au obligația de înregistrare/notificare la ANSPDCP. Persoanele vizate pot contacta ANSPDCP conform secțiunii 11.",
      ],
    },
    {
      id: "dpo",
      title: "3. Responsabil cu protecția datelor (DPO)",
      paragraphs: [
        "Implantik Chirap SRL nu a desemnat un responsabil cu protecția datelor (DPO), conform art. 37 alin. (1) GDPR, deoarece activitatea principală a operatorului nu constă în operațiuni de prelucrare care, prin natura, domeniul, contextul și scopurile acestora, necesită monitorizare sistematică și extinsă a persoanelor vizate, iar prelucrările de date privind sănătatea se realizează în cadrul activității medicale autorizate, sub supravegherea personalului medical și a obligațiilor legale specifice.",
        "Punctul de contact pentru protecția datelor și exercitarea drepturilor GDPR este implantikdrchirap@gmail.com, cu mențiunea „Protecția datelor”. Răspunsul va fi furnizat în termenul legal, de regulă în termen de o lună. Solicitările sunt gestionate de administratorul clinicii și personalul autorizat desemnat intern.",
        "Pentru aspecte tehnice legate de cookie-uri, consimțământ și tracking, puteți consulta și Politica de cookies disponibilă pe implantik.ro.",
      ],
    },
    {
      id: "categorii-date",
      title: "4. Categoriile de date prelucrate",
      paragraphs: [
        "În funcție de interacțiunea dvs. cu noi, putem prelucra următoarele categorii de date: date de identificare și contact (nume, prenume, număr de telefon, adresă de e-mail); date din mesajele transmise prin formulare sau canale de comunicare; date privind serviciul de interes sau preferințele de contact; date tehnice și de utilizare a site-ului (adresă IP, tip browser, pagini vizitate), colectate automat în măsura necesară funcționării și securității site-ului; date de marketing și atribuire a campaniilor (parametri UTM, identificatori de clic), numai după consimțământul pentru marketing; date din relația de pacient, după caz (programări, documente medicale, facturare).",
        "Nu solicităm în mod obișnuit date sensibile în afara contextului medical sau al solicitării dvs. prin formulare. Nu colectăm în mod intenționat date despre minori prin site, cu excepția situațiilor în care un părinte sau reprezentant legal ne contactează în numele minorului.",
        "Sursele datelor pot fi: direct de la dvs. (formulare, telefon, e-mail, WhatsApp, la cabinet); automat prin cookie-uri și tehnologii similare, cu consimțământul dvs. unde este necesar; din recomandări ale pacienților existenți sau din surse profesionale publice (de ex. registre medicale, autorități de reglementare), doar în măsura permisă de lege și necesară activității clinicii.",
      ],
      subsections: [
        {
          id: "date-formulare",
          title: "4.1. Date furnizate prin formulare și comunicări",
          paragraphs: [
            "Formularele de contact și programare de pe implantik.ro solicită date minime necesare pentru a vă răspunde sau a vă programa: nume, telefon, e-mail (opțional), serviciu de interes, mesaj opțional și preferință de contact.",
            "Datele transmise prin WhatsApp, telefon sau e-mail sunt prelucrate în aceeași logică de minim necesar. Nu introduceți în câmpuri deschise informații medicale detaliate dacă nu este necesar; pentru evaluare clinică, consultația la cabinet rămâne canalul adecvat.",
            "Apelurile telefonice nu sunt înregistrate de clinică. Conversațiile telefonice, prin e-mail sau WhatsApp sunt documentate doar în măsura necesară gestionării solicitării sau relației medicale, conform politicilor interne de confidențialitate.",
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
        "Temeiurile legale pentru prelucrarea datelor privind sănătatea, în funcție de flux: (a) formulare site și solicitări pre-consultație — consimțământ explicit (art. 9 alin. (2) lit. a) GDPR) împreună cu art. 6 alin. (1) lit. b) GDPR (măsuri precontractuale); (b) dosar medical, tratamente și îngrijire — obligații legale și îngrijire medicală (art. 9 alin. (2) lit. h) GDPR, coroborat cu art. 6 alin. (1) lit. b) și lit. c) GDPR); (c) facturare și documente fiscale — obligații legale (art. 6 alin. (1) lit. c) GDPR); (d) comunicări post-consultație privind continuitatea îngrijirii — interes legitim sau consimțământ explicit, după caz, fără publicitate agresivă sau profilare comercială.",
        "Nu folosim datele privind sănătatea din formularele site-ului în scopuri de publicitate sau profilare. Comunicările post-consultație (reminder programări, instrucțiuni post-tratament, follow-up medical) se realizează numai în limitele legii, pe baza relației medicale sau a consimțământului explicit acordat separat, fără transmiterea conținutului medical către platforme de marketing.",
      ],
    },
    {
      id: "scopuri-temeiuri",
      title: "6. Scopurile prelucrării și temeiurile legale",
      paragraphs: [
        "Prelucrăm datele dvs. în următoarele scopuri principale, pe baza temeiurilor legale indicate:",
        "Gestionarea solicitărilor și programărilor — răspuns la mesaje, apeluri, programări consultații (temei: art. 6 alin. (1) lit. b) GDPR — măsuri precontractuale/contractuale; pentru date de sănătate din solicitare: consimțământ explicit art. 9).",
        "Furnizarea serviciilor medicale stomatologice — dosar medical, tratamente, facturare, relație cu pacientul (temei: art. 6 alin. (1) lit. b), lit. c), lit. f) GDPR; art. 9 alin. (2) lit. h) sau consimțământ, după caz; obligații legale specifice activității medicale, inclusiv Legea nr. 95/2006 privind reforma în domeniul sănătății și normele aplicabile dosarului medical).",
        "Securitatea site-ului și prevenirea abuzurilor — verificare anti-spam prin Cloudflare Turnstile; date tehnice limitate (ex. adresă IP) (temei: art. 6 alin. (1) lit. f) GDPR — interes legitim).",
        "Analiză și îmbunătățire site — statistici agregate despre utilizarea site-ului prin Google Analytics 4, doar după consimțământul pentru cookie-uri analitice (temei: art. 6 alin. (1) lit. a) GDPR).",
        "Marketing digital și măsurare conversii — Google Ads, Meta, TikTok, doar după consimțământul pentru cookie-uri de marketing (temei: art. 6 alin. (1) lit. a) GDPR).",
        "Îndeplinirea obligațiilor legale — arhivare documente contabile/fiscale, evidențe medicale obligatorii, răspunsuri la autorități (temei: art. 6 alin. (1) lit. c) GDPR).",
        "Interes legitim — apărarea drepturilor în eventuale litigii, prevenirea fraudelor, menținerea evidențelor interne necesare (temei: art. 6 alin. (1) lit. f) GDPR, cu respectarea testului de echilibru).",
      ],
    },
    {
      id: "destinatari",
      title: "7. Destinatarii datelor și împuterniciți",
      paragraphs: [
        "Datele pot fi comunicate, strict pe baza unui temei legal și în limitele necesare, următorilor categorii de destinatari: personal autorizat al clinicii (medici, asistenți, recepție, administrativ) cu obligația confidențialității; furnizori de servicii IT și hosting care acționează ca persoane împuternicite; platforme de stocare și gestionare solicitări; furnizori de servicii de e-mail, telefonie, WhatsApp Business; furnizori de analiză și publicitate online (Google, Meta, TikTok), numai după consimțământ; contabili, consultanți juridici, asiguratori, autorități publice, în măsura impusă de lege.",
        "Lista persoanelor împuternicite relevante: (1) Supabase Inc. (SUA) — stocare solicitări din formulare, regiune configurabilă a proiectului; transferuri protejate prin SCC și măsuri suplimentare; (2) Vercel Inc. (SUA) — hosting site, jurnale server limitate, procesare Turnstile server-side; SCC; (3) Google Ireland Limited / Google LLC (SUA/SEE) — GA4, Google Ads, GTM; SCC și EU-US Data Privacy Framework, după caz; (4) Meta Platforms Ireland Ltd (SUA/SEE) — Meta Pixel; SCC; (5) TikTok Technology Limited (SUA/SEE) — TikTok Pixel; SCC; (6) Cloudflare Inc. (SUA) — Turnstile anti-spam; SCC; (7) Resend Inc. (SUA) — notificări e-mail solicitări, dacă este activ; SCC. Contractele de prelucrare (DPA) sunt încheiate sau acceptate conform condițiilor furnizorilor.",
        "Nu vindem datele dvs. cu caracter personal. Nu transferăm date către terți în scopul lor independent de marketing fără consimțământul dvs. explicit.",
      ],
    },
    {
      id: "transferuri",
      title: "8. Transferuri internaționale de date",
      paragraphs: [
        "Anumiți furnizori (Google, Meta, TikTok, Supabase, Vercel, Cloudflare, Resend) pot prelucra date în state din afara Spațiului Economic European (SEE), în special Statele Unite ale Americii. În astfel de cazuri, ne asigurăm că există garanții adecvate conform cap. V GDPR.",
        "Mecanisme utilizate: decizii de adecvare ale Comisiei Europene (inclusiv EU-US Data Privacy Framework, unde este aplicabil); Clauze Contractuale Standard (SCC) adoptate de Comisia Europeană; măsuri tehnice și organizatorice suplimentare (criptare în tranzit, minimizarea datelor, controlul accesului). Pentru fiecare furnizor menționat la secțiunea 7, transferul extra-SEE se bazează pe SCC și, după caz, pe certificarea DPF.",
        "Puteți solicita informații suplimentare despre garanțiile aplicabile transferurilor contactându-ne la implantikdrchirap@gmail.com.",
      ],
    },
    {
      id: "stocare",
      title: "9. Perioade de stocare",
      paragraphs: [
        "Păstrăm datele doar atât timp cât este necesar pentru scopurile pentru care au fost colectate, respectând termenele legale și principiul minimizării.",
        "Solicitări din formulare/site: maximum 24 de luni de la ultima interacțiune relevantă, apoi ștergere sau anonimizare, cu excepția cazurilor în care solicitarea a evoluat în relație de pacient.",
        "Dosar medical și documente clinice: conform termenelor stabilite prin actele normative aplicabile evidenței medicale, care pot fi mai lungi de 10 ani în funcție de tipul documentului.",
        "Documente contabile și fiscale: conform Codului fiscal și legislației contabile — de regulă 5 ani de la încheierea exercițiului financiar pentru registrele contabile, respectiv 10 ani pentru anumite documente fiscale.",
        "Jurnale tehnice și securitate (Vercel, rate limiting, Turnstile): maximum 90 de zile, cu excepția situațiilor în care o investigație de securitate impune păstrarea prelungită.",
        "Date de marketing și cookie-uri: conform politicii de cookies și preferințelor dvs.; cookie-ul de consimțământ `consent-preferences` este păstrat până la 12 luni sau până la retragerea/actualizarea alegerii; cookie-ul `implantik_attribution` — maximum 90 de zile, numai cu consimțământ marketing.",
        "La expirarea perioadelor, datele sunt șterse, anonimizate sau arhivate securizat, după caz. Procedura internă de ștergere este gestionată de administratorul clinicii, cu suportul furnizorilor IT contractuali.",
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
        "Platforma de stocare a solicitărilor (Supabase): acces restricționat, criptare în tranzit, backup gestionat de furnizor, acces administrativ limitat la personal autorizat.",
        "În cazul unei încălcări a securității datelor cu caracter personal, vom acționa conform procedurii interne: evaluarea riscului în maximum 72 de ore, notificarea ANSPDCP dacă există risc pentru drepturile persoanelor vizate, informarea persoanelor vizate când este impus de lege. Responsabilul de gestionarea incidentelor este administratorul clinicii.",
        "Clinica deține asigurare de răspundere civilă profesională (malpraxis) conform cerințelor legale pentru activitatea medicală. Aceasta acoperă răspunderea profesională medicală, nu înlocuiește obligațiile GDPR privind securitatea datelor.",
        "Obligația de confidențialitate prevăzută de GDPR se corelează cu obligația de informare a pacientului prevăzută de Legea nr. 95/2006 privind reforma în domeniul sănătății și de Legea nr. 46/2003 privind drepturile pacientului.",
      ],
    },
    {
      id: "minori",
      title: "13. Copii și minori",
      paragraphs: [
        "Vârsta minimă pentru exprimarea consimțământului propriu privind serviciile societății informaționale este de 16 ani, conform Legii nr. 190/2018. Pentru minorii sub această vârstă este necesar consimțământul părintelui/tutorelui legal. Programările pentru pacienții minori se realizează de către părinte sau reprezentantul legal.",
        "Dacă aflăm că am colectat date de la un minor sub 16 ani fără consimțământul părintelui/tutorelui legal acolo unde acesta este necesar, vom lua măsuri pentru ștergerea datelor, în măsura în care nu contravin obligațiilor legale medicale. Verificarea vârstei se bazează pe informațiile furnizate voluntar.",
      ],
    },
    {
      id: "modificari-contact",
      title: "14. Modificări ale politicii și contact",
      paragraphs: [
        "Putem actualiza prezenta politică pentru a reflecta modificări legislative, tehnologice sau operaționale. Versiunea publicată pe implantik.ro este cea aplicabilă; data actualizării este indicată în antet.",
        "Pentru modificări substanțiale privind cookie-uri sau tracking, vom actualiza Politica de cookies, vom incrementa `policyVersion` în cookie-ul `consent-preferences` și vom re-solicita consimțământul prin banner, conform implementării tehnice a site-ului.",
        "Pentru orice întrebări privind această politică sau prelucrarea datelor dvs.: Implantik Chirap SRL, Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581; e-mail implantikdrchirap@gmail.com; telefon (0758) 169 234; site implantik.ro. Program: luni–vineri, 8:00–19:30.",
      ],
    },
  ],
};
