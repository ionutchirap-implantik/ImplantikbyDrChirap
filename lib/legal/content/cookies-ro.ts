import { POLICY_VERSION } from "@/lib/consent/policy-version";
import type { LegalDocument } from "@/lib/legal/types";

export const cookiesRo: LegalDocument = {
  type: "cookies",
  title: "Politica de cookies",
  description:
    "Prezenta politică explică ce sunt cookie-urile și tehnologiile similare utilizate pe implantik.ro, categoriile folosite de Implantik Chirap SRL, temeiul legal, modalitatea de gestionare a consimțământului și opțiunile disponibile pentru retragerea acestuia.",
  lastUpdated: `Ultima actualizare: ${POLICY_VERSION}`,
  tocTitle: "Cuprins",
  sections: [
    {
      id: "introducere",
      title: "1. Introducere",
      paragraphs: [
        "Site-ul implantik.ro utilizează cookie-uri și tehnologii similare pentru a asigura funcționarea corectă a site-ului, pentru a înțelege modul de utilizare (analiză) și, numai cu acordul dvs., pentru măsurarea și optimizarea campaniilor de marketing digital.",
        "Prezenta politică completează Politica de confidențialitate și trebuie citită împreună cu aceasta. Operatorul datelor este Implantik Chirap SRL, Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581, CUI 40441553.",
        "Prin „cookie-uri” înțelegem și tehnologii echivalente, precum stocarea locală (localStorage), pixeli de urmărire sau identificatori similari încărcați în browser după consimțământ. [DE COMPLETAT - dacă se utilizează localStorage sau alte tehnologii în afara cookie-urilor clasice, listați-le].",
      ],
    },
    {
      id: "ce-sunt",
      title: "2. Ce sunt cookie-urile",
      paragraphs: [
        "Cookie-urile sunt fișiere text de mici dimensiuni stocate pe dispozitivul dvs. (computer, telefon, tabletă) atunci când vizitați un site. Ele permit site-ului să recunoască dispozitivul sau browserul, să rețină anumite preferințe și să colecteze informații tehnice despre vizită.",
        "Cookie-urile pot fi „de sesiune” (se șterg la închiderea browserului) sau „persistente” (rămân pentru o perioadă definită). Pot fi plasate de site-ul pe care îl vizitați („first-party”) sau de terți („third-party”), de exemplu furnizori de analiză sau publicitate.",
        "Blocarea sau ștergerea cookie-urilor poate afecta funcționalitatea site-ului sau experiența de navigare, în special pentru cookie-urile strict necesare.",
      ],
    },
    {
      id: "operator",
      title: "3. Operatorul și contact",
      paragraphs: [
        "Operatorul care decide utilizarea cookie-urilor pe implantik.ro este Implantik Chirap SRL. Pentru întrebări legate de cookies sau consimțământ: implantikdrchirap@gmail.com, telefon (0758) 169 234.",
        "Responsabil protecția datelor / contact GDPR: [DE COMPLETAT - date contact DPO sau persoană desemnată].",
      ],
    },
    {
      id: "categorii",
      title: "4. Categoriile de cookie-uri utilizate",
      paragraphs: [
        "Clasificăm cookie-urile în trei categorii principale, aliniate bannerului de consimțământ al site-ului:",
        "Strict necesare — esențiale pentru funcționarea site-ului și securitate; nu necesită consimțământ conform legislației aplicabile.",
        "Analitice — ne ajută să înțelegem cum este utilizat site-ul (de ex. Google Analytics 4), pe bază de date agregate sau pseudonimizate; se activează numai după consimțământ.",
        "Marketing — utilizate pentru măsurarea conversiilor, remarketing și atribuirea campaniilor (Google Ads, Meta Pixel, TikTok Pixel); se activează numai după consimțământ.",
        "Mai jos găsiți descrieri detaliate. Tabelul complet cu denumiri, furnizori, scopuri și durate: [DE COMPLETAT - tabel cookie-uri actualizat, inclusiv durata fiecărui cookie first-party și third-party].",
      ],
    },
    {
      id: "necesare",
      title: "5. Cookie-uri strict necesare",
      paragraphs: [
        "Aceste cookie-uri sunt indispensabile pentru: afișarea corectă a paginilor; memorarea preferințelor de limbă; securitatea formularelor și protecția anti-spam; salvarea alegerilor dvs. privind consimțământul pentru cookie-uri.",
        "Cookie-uri first-party cunoscute: `consent-preferences` — stochează categoriile de cookies acceptate/refuzate, marca temporală și versiunea politicii; durată: până la 12 luni; temei: art. 6 alin. (1) lit. f) GDPR (interes legitim) și/sau art. 6 alin. (1) lit. c) în măsura în care stocarea consimțământului este impusă de lege.",
        "Alte cookie-uri strict necesare: [DE COMPLETAT - ex. cookie limbă, sesiune Next.js, Turnstile, atribuire first-party pentru formulare dacă este considerată necesară fără consimțământ marketing].",
        "Nu puteți dezactiva aceste cookie-uri din bannerul nostru fără a afecta funcționarea site-ului, deoarece sunt necesare pentru serviciul solicitat explicit de dvs.",
      ],
    },
    {
      id: "analitice",
      title: "6. Cookie-uri analitice (Google Analytics 4)",
      paragraphs: [
        "Cu consimțământul dvs. pentru categoria „Analitice”, putem utiliza Google Analytics 4 (GA4), administrat prin Google Tag Manager (GTM), pentru a înțelege traficul și interacțiunile pe site (pagini vizitate, durată vizită, evenimente tehnice).",
        "Identificatori: [DE COMPLETAT - GA4 Measurement ID, GTM Container ID]. Furnizor: Google Ireland Limited / Google LLC. Date prelucrate pot include: pseudonim IP, identificatori de dispozitiv/browser, pagini și evenimente. Durata cookie-urilor GA4: [DE COMPLETAT - ex. _ga, _ga_*, durată].",
        "Utilizăm Consent Mode v2: tag-urile Google nu stochează cookie-uri analitice până când nu acceptați categoria analitică. [DE COMPLETAT - setări exacte Consent Mode: ad_storage, analytics_storage, ad_user_data, ad_personalization].",
        "Puteți consulta politica Google: https://policies.google.com/privacy. Transferuri în SUA: [DE COMPLETAT - SCC / EU-US Data Privacy Framework dacă aplicabil].",
      ],
    },
    {
      id: "marketing",
      title: "7. Cookie-uri de marketing",
      paragraphs: [
        "Cu consimțământul dvs. pentru categoria „Marketing”, putem încărca tehnologii de măsurare a conversiilor și remarketing:",
        "Google Ads / GTM — conversii din formulare, apeluri, click-uri WhatsApp; identificatori: [DE COMPLETAT - Google Ads conversion IDs, enhanced conversions dacă sunt activate].",
        "Meta Pixel (Facebook/Instagram) — evenimente de vizită și conversie; ID pixel: [DE COMPLETAT - META_PIXEL_ID]; furnizor Meta Platforms Ireland Ltd. Durata cookie-urilor: [DE COMPLETAT].",
        "TikTok Pixel — evenimente de vizită și conversie; ID pixel: [DE COMPLETAT - TIKTOK_PIXEL_ID]; furnizor TikTok Technology Limited. Durata cookie-urilor: [DE COMPLETAT].",
        "Cookie first-party de atribuire (gclid, fbclid, ttclid, utm_*): [DE COMPLETAT - denumire cookie atribuire, durată, dacă se setează înainte sau după consimțământ marketing].",
        "Fără consimțământ marketing, aceste tehnologii rămân blocate sau funcționează în mod limitat conform Consent Mode, fără stocare de cookie-uri de marketing.",
      ],
    },
    {
      id: "consimtamant",
      title: "8. Mecanismul de consimțământ",
      paragraphs: [
        "La prima vizită (sau după expirarea/ștergerea alegerilor), vi se afișează un banner de cookies cu opțiuni egale de „Accept toate”, „Refuz toate” (sau echivalent) și „Personalizează”.",
        "Puteți accepta sau refuza separat categoriile analitice și marketing. Categoria strict necesară rămâne activă întotdeauna.",
        "Alegerea dvs. este salvată în cookie-ul first-party `consent-preferences` sub forma unui obiect JSON care include: `decided` (boolean), `categories` (necessary: true, analytics: boolean, marketing: boolean), `timestamp` (ISO 8601), `policyVersion` (versiunea politicii la momentul alegerii, în prezent legată de data actualizării politicilor).",
        "Tag-urile de tracking (GTM, GA4, Meta, TikTok) sunt încărcate sau activate numai după consimțământul acordat pentru categoria relevantă. Google Consent Mode este actualizat înainte de orice stocare analitică sau de publicitate.",
        "Dovada consimțământului: [DE COMPLETAT - dacă se păstrează jurnal server-side al consimțământului sau doar cookie client].",
      ],
    },
    {
      id: "retragere",
      title: "9. Retragerea și modificarea consimțământului",
      paragraphs: [
        "Puteți retrage sau modifica consimțământul în orice moment, fără a afecta legalitatea prelucrării efectuate înainte de retragere.",
        "Modalități: (1) linkul „Setări cookies” / „Cookie settings” din subsolul site-ului; (2) ștergerea cookie-urilor din browser, ceea ce va determina reafișarea bannerului la următoarea vizită; (3) solicitare la implantikdrchirap@gmail.com.",
        "La retragerea consimțământului pentru marketing, vom înceta încărcarea pixelilor de marketing și vom șterge cookie-urile de atribuire first-party unde este implementat. [DE COMPLETAT - descrierea exactă a comportamentului la revocare, inclusiv clearAttributionCookie].",
        "Pentru cookie-urile terților deja plasate, este posibil să fie necesară și ștergerea manuală din setările browserului sau utilizarea instrumentelor furnizorilor (Google, Meta, TikTok).",
      ],
    },
    {
      id: "browser",
      title: "10. Setările browserului",
      paragraphs: [
        "Majoritatea browserelor permit gestionarea cookie-urilor din setările de confidențialitate. Puteți bloca cookie-urile terțe, șterge cookie-urile existente sau configura notificări la plasarea cookie-urilor.",
        "Ghiduri utile: Chrome — Settings > Privacy and security > Cookies; Firefox — Settings > Privacy & Security; Safari — Preferences > Privacy; Edge — Settings > Cookies and site permissions.",
        "Blocarea tuturor cookie-urilor poate împiedica salvarea preferințelor de consimțământ și funcționarea optimă a site-ului. [DE COMPLETAT - comportament site când cookies sunt complet dezactivate].",
        "Pentru publicitate personalizată, furnizorii oferă și pagini de opt-out: Google Ads Settings, Meta Ad Preferences, TikTok Ad Settings — [DE COMPLETAT - linkuri finale standardizate].",
      ],
    },
    {
      id: "cookie-consent",
      title: "11. Detalii cookie consent-preferences",
      paragraphs: [
        "Denumire: `consent-preferences`. Tip: first-party, HTTP cookie (JSON serializat și URL-encoded). Scop: memorarea deciziei dvs. privind categoriile de cookies și versiunea politicii acceptate.",
        "Durată maximă: 365 de zile (12 luni) de la ultima salvare. Atribute: `Path=/`, `SameSite=Lax`, `Secure` pe conexiuni HTTPS.",
        "Conținut exemplificativ: {\"decided\":true,\"categories\":{\"necessary\":true,\"analytics\":false,\"marketing\":false},\"timestamp\":\"...\",\"policyVersion\":\"2026-06-09\"}. Valorile reale reflectă alegerile dvs.",
        "La actualizarea majoră a politicii, versiunea `policyVersion` poate fi incrementată și consimțământul poate fi re-solicitat: [DE COMPLETAT - politica de re-consimțământ la schimbarea POLICY_VERSION].",
      ],
    },
    {
      id: "modificari",
      title: "12. Modificări ale politicii",
      paragraphs: [
        "Putem actualiza această politică pentru a reflecta schimbări tehnologice, noi furnizori sau cerințe legale. Versiunea curentă este publicată pe implantik.ro cu data actualizării.",
        "Vă recomandăm să consultați periodic această pagină. Pentru modificări semnificative privind cookie-urile de marketing sau analitice, vom actualiza bannerul de consimțământ sau vom solicita o nouă alegere, după caz. [DE COMPLETAT - procedură internă].",
      ],
    },
    {
      id: "contact",
      title: "13. Contact",
      paragraphs: [
        "Implantik Chirap SRL, Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581; e-mail implantikdrchirap@gmail.com; telefon (0758) 169 234; site implantik.ro.",
        "Pentru exercitarea drepturilor GDPR legate de datele colectate prin cookies, consultați și Politica de confidențialitate, secțiunea privind drepturile persoanelor vizate.",
      ],
    },
  ],
};
