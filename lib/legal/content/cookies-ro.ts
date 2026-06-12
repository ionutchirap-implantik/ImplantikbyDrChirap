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
        "Prin „cookie-uri” înțelegem și tehnologii echivalente, precum pixeli de urmărire sau identificatori similari încărcați în browser după consimțământ. Site-ul nu utilizează localStorage pentru stocarea preferințelor de consimțământ; acestea sunt păstrate exclusiv în cookie-ul HTTP `consent-preferences`.",
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
        "Implantik Chirap SRL nu a desemnat un responsabil cu protecția datelor (DPO) conform art. 37 GDPR. Punctul de contact pentru protecția datelor și exercitarea drepturilor GDPR este implantikdrchirap@gmail.com, cu mențiunea „Protecția datelor”. Program răspuns: luni–vineri, 8:00–19:30.",
      ],
    },
    {
      id: "categorii",
      title: "4. Categoriile de cookie-uri utilizate",
      paragraphs: [
        "Clasificăm cookie-urile în trei categorii principale, aliniate bannerului de consimțământ al site-ului:",
        "Strict necesare — esențiale pentru funcționarea site-ului și securitate; nu necesită consimțământ conform legislației aplicabile.",
        "Analitice — ne ajută să înțelegem cum este utilizat site-ul (Google Analytics 4 via GTM), pe bază de date agregate sau pseudonimizate; se activează numai după consimțământ.",
        "Marketing — utilizate pentru măsurarea conversiilor, remarketing și atribuirea campaniilor (Google Ads, Meta Pixel, TikTok Pixel); se activează numai după consimțământ.",
        "Tabel cookie-uri: | Denumire | Furnizor | Categorie | Scop | Durată | | consent-preferences | Implantik (first-party) | Necesare | Preferințe consimțământ CMP | 12 luni | | cf-turnstile-* / __cf_bm | Cloudflare | Necesare | Anti-spam Turnstile | sesiune–30 zile | | _ga | Google | Analitice | Identificator GA4 | 2 ani | | _ga_* | Google | Analitice | Stare sesiune GA4 | 2 ani | | _gcl_* | Google | Marketing | Atribuire Google Ads | 90 zile | | _fbp | Meta | Marketing | Identificator browser Meta | 90 zile | | _ttp / tt_* | TikTok | Marketing | Identificator TikTok | 13 luni | | implantik_attribution | Implantik (first-party) | Marketing | Parametri UTM/gclid/fbclid/ttclid | 90 zile | Cookie-urile analitice și de marketing sunt plasate numai după consimțământul acordat pentru categoria respectivă.",
      ],
    },
    {
      id: "necesare",
      title: "5. Cookie-uri strict necesare",
      paragraphs: [
        "Cookie-urile strict necesare sunt esențiale pentru furnizarea serviciului solicitat de utilizator (funcționarea site-ului, securitate, reținerea limbii) și pentru memorarea opțiunii exprimate privind consimțământul. Acestea nu necesită consimțământ, conform legislației aplicabile.",
        "Cookie-uri first-party cunoscute: `consent-preferences` — stochează categoriile de cookies acceptate/refuzate, marca temporală și versiunea politicii; durată: până la 12 luni.",
        "Alte cookie-uri strict necesare: cookie-uri Cloudflare Turnstile (`cf-turnstile-response`, `__cf_bm`) — verificare anti-bot la trimiterea formularelor; durată: sesiune sau până la 30 de zile. Preferința de limbă (ro/en) este gestionată prin rutare URL (`/[locale]`), fără cookie dedicat de limbă. Cookie-ul `implantik_attribution` nu este strict necesar — se setează numai după consimțământ marketing.",
        "Nu puteți dezactiva aceste cookie-uri din bannerul nostru fără a afecta funcționarea site-ului, deoarece sunt necesare pentru serviciul solicitat explicit de dvs.",
      ],
    },
    {
      id: "analitice",
      title: "6. Cookie-uri analitice (Google Analytics 4)",
      paragraphs: [
        "Cu consimțământul dvs. pentru categoria „Analitice”, putem utiliza Google Analytics 4 (GA4), administrat prin Google Tag Manager (GTM-5QFHBCH), pentru a înțelege traficul și interacțiunile pe site (pagini vizitate, durată vizită, evenimente tehnice).",
        "Identificatori: Google Tag Manager GTM-5QFHBCH; Google Analytics 4 (Measurement ID configurat în GTM). Furnizor: Google Ireland Limited / Google LLC. Date prelucrate pot include: pseudonim IP, identificatori de dispozitiv/browser, pagini și evenimente. Durata cookie-urilor GA4: `_ga` — 2 ani; `_ga_*` — 2 ani (stare sesiune GA4).",
        "Utilizăm Consent Mode v2: tag-urile Google nu stochează cookie-uri analitice până când nu acceptați categoria analitică. Setări implicite (înainte de consimțământ): `analytics_storage: denied`, `ad_storage: denied`, `ad_user_data: denied`, `ad_personalization: denied`, `security_storage: granted`. La acceptare analitică: `analytics_storage: granted`. La acceptare marketing: `ad_storage`, `ad_user_data`, `ad_personalization: granted`.",
        "Puteți consulta politica Google: https://policies.google.com/privacy. Transferuri în SUA: Clauze Contractuale Standard (SCC) și, după caz, EU-US Data Privacy Framework.",
      ],
    },
    {
      id: "marketing",
      title: "7. Cookie-uri de marketing",
      paragraphs: [
        "Cu consimțământul dvs. pentru categoria „Marketing”, putem încărca tehnologii de măsurare a conversiilor și remarketing:",
        "Google Ads / GTM (GTM-5QFHBCH) — conversii din formulare, apeluri, click-uri WhatsApp și hărți; cookie-uri `_gcl_au`, `_gcl_aw` și similare; durată: până la 90 de zile. Enhanced conversions pot fi activate în GTM, transmițând date hash-uite doar cu consimțământ.",
        "Meta Pixel (Facebook/Instagram) — evenimente de vizită și conversie; pixel ID configurat în variabilele de mediu ale site-ului; furnizor Meta Platforms Ireland Ltd. Cookie `_fbp` — durată: până la 90 de zile.",
        "TikTok Pixel — evenimente de vizită și conversie; pixel ID configurat în variabilele de mediu ale site-ului; furnizor TikTok Technology Limited. Cookie-uri `_ttp`, `tt_*` — durată: până la 13 luni.",
        "Cookie first-party de atribuire `implantik_attribution` — stochează parametri gclid, gbraid, wbraid, fbclid, ttclid, utm_source, utm_medium, utm_campaign, utm_term, utm_content; durată: 90 de zile; setat exclusiv după consimțământ marketing, la detectarea parametrilor în URL; utilizat pentru transmiterea datelor de atribuire odată cu solicitările din formulare.",
        "Fără consimțământ marketing, aceste tehnologii rămân blocate sau funcționează în mod limitat conform Consent Mode, fără stocare de cookie-uri de marketing.",
      ],
    },
    {
      id: "consimtamant",
      title: "8. Mecanismul de consimțământ",
      paragraphs: [
        "La prima vizită (sau după expirarea/ștergerea alegerilor), vi se afișează un banner de cookies cu opțiuni egale de „Accept toate”, „Refuz toate” (sau echivalent) și „Personalizează”.",
        "Puteți accepta sau refuza separat categoriile analitice și marketing. Categoria strict necesară rămâne activă întotdeauna.",
        "Alegerea dvs. este salvată în cookie-ul first-party `consent-preferences` sub forma unui obiect JSON care include: `decided` (boolean), `categories` (necessary: true, analytics: boolean, marketing: boolean), `timestamp` (ISO 8601), `policyVersion` (versiunea politicii la momentul alegerii, legată de constanta POLICY_VERSION).",
        "Tag-urile de tracking (GTM GTM-5QFHBCH, GA4, Meta, TikTok) sunt încărcate sau activate numai după consimțământul acordat pentru categoria relevantă. Google Consent Mode v2 este actualizat prin `gtag('consent', 'update', ...)` înainte de orice stocare analitică sau de publicitate.",
        "Prin exprimarea unei alegeri în banner, confirmați că aveți cel puțin 16 ani sau acționați cu acordul reprezentantului legal.",
        "Alegerea exprimată în banner este stocată împreună cu data/ora exprimării și versiunea politicii în vigoare la acel moment. În cazul trimiterii formularului, consimțământul exprimat este înregistrat împreună cu solicitarea, cu dată, oră și versiunea politicii, ca dovadă a consimțământului.",
      ],
    },
    {
      id: "retragere",
      title: "9. Retragerea și modificarea consimțământului",
      paragraphs: [
        "Puteți retrage sau modifica consimțământul în orice moment, fără a afecta legalitatea prelucrării efectuate înainte de retragere.",
        "Modalități: (1) linkul „Setări cookies” / „Cookie settings” din subsolul site-ului; (2) ștergerea cookie-urilor din browser, ceea ce va determina reafișarea bannerului la următoarea vizită; (3) solicitare la implantikdrchirap@gmail.com.",
        "La retragerea consimțământului pentru marketing, site-ul apelează funcția `clearAttributionCookie()`, șterge cookie-ul `implantik_attribution`, elimină scripturile Meta Pixel și TikTok Pixel din pagină și actualizează Consent Mode v2 la `ad_storage: denied`, `ad_user_data: denied`, `ad_personalization: denied`. La retragerea consimțământului analitic, `analytics_storage` este setat la `denied` și scripturile GTM pot fi eliminate dacă nici marketingul nu este activ.",
        "Pentru cookie-urile terților deja plasate, este posibil să fie necesară și ștergerea manuală din setările browserului sau utilizarea instrumentelor furnizorilor (Google, Meta, TikTok).",
      ],
    },
    {
      id: "browser",
      title: "10. Setările browserului",
      paragraphs: [
        "Majoritatea browserelor permit gestionarea cookie-urilor din setările de confidențialitate. Puteți bloca cookie-urile terțe, șterge cookie-urile existente sau configura notificări la plasarea cookie-urilor.",
        "Ghiduri utile: Chrome — Settings > Privacy and security > Cookies; Firefox — Settings > Privacy & Security; Safari — Preferences > Privacy; Edge — Settings > Cookies and site permissions.",
        "Blocarea tuturor cookie-urilor poate împiedica salvarea preferințelor de consimțământ și funcționarea formularelor (inclusiv Turnstile). Site-ul rămâne vizibil, însă bannerul de cookies va apărea la fiecare vizită, iar formularele pot fi respinse dacă verificarea anti-spam eșuează.",
        "Pentru publicitate personalizată, furnizorii oferă pagini de opt-out: Google — https://adssettings.google.com; Meta — https://www.facebook.com/settings/ads/; TikTok — https://www.tiktok.com/setting/advertising.",
      ],
    },
    {
      id: "cookie-consent",
      title: "11. Detalii cookie consent-preferences",
      paragraphs: [
        "Denumire: `consent-preferences`. Tip: first-party, HTTP cookie (JSON serializat și URL-encoded). Scop: memorarea deciziei dvs. privind categoriile de cookies și versiunea politicii acceptate.",
        "Durată maximă: 365 de zile (12 luni) de la ultima salvare. Atribute: `Path=/`, `SameSite=Lax`, `Secure` pe conexiuni HTTPS.",
        "Conținut exemplificativ: {\"decided\":true,\"categories\":{\"necessary\":true,\"analytics\":false,\"marketing\":false},\"timestamp\":\"...\",\"policyVersion\":\"2026-06-12\"}. Valorile reale reflectă alegerile dvs.",
        "La actualizarea majoră a politicii, constanta POLICY_VERSION este incrementată; dacă `policyVersion` din cookie diferă de versiunea curentă, bannerul de consimțământ este reafișat și vi se solicită o nouă alegere, fără a prelua automat consimțământul anterior.",
      ],
    },
    {
      id: "modificari",
      title: "12. Modificări ale politicii",
      paragraphs: [
        "Putem actualiza această politică pentru a reflecta schimbări tehnologice, noi furnizori sau cerințe legale. Versiunea curentă este publicată pe implantik.ro cu data actualizării.",
        "Vă recomandăm să consultați periodic această pagină. Pentru modificări semnificative privind cookie-urile de marketing sau analitice, vom actualiza bannerul de consimțământ, vom incrementa POLICY_VERSION și vom solicita o nouă alegere.",
      ],
    },
    {
      id: "contact",
      title: "13. Contact",
      paragraphs: [
        "Implantik Chirap SRL, Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581; e-mail implantikdrchirap@gmail.com; telefon (0758) 169 234; site implantik.ro. Program: luni–vineri, 8:00–19:30.",
        "Pentru exercitarea drepturilor GDPR legate de datele colectate prin cookies, consultați și Politica de confidențialitate, secțiunea privind drepturile persoanelor vizate.",
      ],
    },
  ],
};
