# Prompt pentru Cursor — Site Implantik by Dr. Chirap (DRAFT)

> Lipește acest text în Cursor ca task. Scopul: un **draft funcțional și premium** pe care să-l pot arăta clientului. Conținutul real (poze, cifre, numere de contact) îl completez ulterior — folosește placeholder-e clar marcate. Nu inventa date despre clinică.

---

## Rol & obiectiv
Ești dezvoltatorul acestui proiect. Construiește un **draft** de site pentru o clinică de implantologie și stomatologie din Iași („Implantik by Dr. Chirap"). Trebuie să arate **premium** (senzație de site de mii de euro) și să se încarce **extrem de rapid**. Nu e un proiect de „umplut cu text" — e o demonstrație de design + structură + funcționalitate de bază.

Construiește **complet** (cu design finisat): pagina Home, pagina Implantologie, pagina „Gen Z / Stomatologie fără bariere", pagina Contact (cu formular) și banner-ul de cookie. **Scaffoldează** restul paginilor (vezi structura) cu layout coerent și placeholder, ca să se vadă întregul.

## Stack (fix)
- Next.js 15 (App Router) + TypeScript strict
- Tailwind CSS + shadcn/ui (folosește componentele shadcn ca bază — nu scrie CSS de mână)
- Supabase pentru formular (insert lead) — dacă nu am chei încă, folosește un Server Action care validează și loghează, cu TODO clar pentru conectarea Supabase
- Pregătit pentru deploy pe Vercel
- Folosește `.cursorrules`, `tailwind.config.ts` și `globals.css` deja existente în proiect. Dacă nu există, creează-le pe baza brandului de mai jos.

## Brand & design — „dentiști prietenoși"
- **Culoare dominantă: MOV.** Primar `purple-600` = `#534AB7` (de calibrat ulterior cu logo-ul real — marchează un singur loc în tokens). Alb pentru aer. Accent cald coral (`#F0997B`) **doar punctual**.
- Tipografie: titluri `font-display` (Poppins, rotunjit, prietenos), text `font-sans` (Inter). Încărcate cu `next/font`.
- Colțuri rotunjite, spațiere amplă, niciodată aglomerat. Cald + profesional: prietenos fără să fie infantil, sigur fără aroganță.
- **FĂRĂ animație de intrare / splash.** Senzația premium vine din tipografie, spațiu, fotografie reală și micro-animații subtile (reveal la scroll, tranziții fine). Conținutul se vede imediat (LCP rapid).
- Mobile-first. Verifică să arate impecabil pe telefon înainte de desktop.
- Imagini: folosește placeholder-e elegante (blocuri/gradient mov sau imagini neutre) cu `next/image`, marcate `[POZĂ REALĂ DE ADĂUGAT]`.

## REGULI OBLIGATORII — conformitate cu Codul deontologic CMSR (NU le încălca)
Acestea sunt non-negociabile. Tot textul generat trebuie să le respecte:
1. **Fără garanții de rezultat** și fără „garantat / 100% / cel mai bun" sau alte superlative. Permis: „rezultate sigure și predictibile".
2. **Fără mențiuni comparative sau denigratoare** față de alte clinici/medici. Comunică doar competența proprie, factual. NU scrie „cazuri pe care alții nu le pot rezolva" — scrie „chirurgie orală și maxilo-facială pentru cazuri complexe".
3. **Fără reclamă la oferte/reduceri/avantaje materiale.** NU crea secțiune de „oferte". **Prețurile transparente SUNT permise** și se afișează (pagina Prețuri / game „de la X lei").
4. **Fără promovare de mărci de produse** (Botox, mărci de implant). Le poți menționa **factual, ca informație pentru pacient**, nu ca reclamă de brand.
5. **Cifre despre număr de pacienți / rezultate**: doar ca placeholder factual și dovedibil. Marchează `[CIFRĂ REALĂ, DOVEDIBILĂ — DE CONFIRMAT]`. Fără procente de succes nedocumentate.
6. **Before/after**: doar cazuistică proprie + consimțământ. Placeholder cu notă `[CAZ PROPRIU + CONSIMȚĂMÂNT PACIENT]`.
7. Ton civilizat, prietenos, factual, fără afirmații care alimentează temeri sau așteptări nefondate.

## Structura paginilor (sitemap)
```
/                         Home (construiește complet)
/implantologie            (construiește complet)
/implant-all-on-4-iasi    (scaffold)
/sinus-lift-iasi          (scaffold)
/reabilitari-complexe     (scaffold — competență chirurgicală, factual)
/chirurgie-orala          (scaffold)
/estetica-faciala         (scaffold — acid hialuronic & botox ca SERVICIU, nu produs; doar dacă e în competența medicului)
/estetica-dentara         (scaffold)
/ortodontie               (scaffold)
/stomatologie             (scaffold)
/turism-dentar            (scaffold — plan de tratament personalizat + logistică pacienți, inclusiv internaționali)
/preturi                  (scaffold — prețuri transparente, permis)
/echipa                   (scaffold) + /echipa/dr-ionut-chirap (E-E-A-T: titluri/competențe REALE)
/cazuri-clinice           (scaffold — cazuistică proprie + consimțământ)
/stomatologie-fara-bariere (construiește complet — pagina Gen Z, vezi mai jos)
/ghiduri                  (scaffold listă + /ghiduri/[slug] cu FAQ schema — AGEO)
/contact + /programare    (construiește complet — formular)
/confidentialitate /cookies /termeni  (pagini legale — text placeholder)
```

## Pagina „Stomatologie fără bariere" (Gen Z) — construiește complet
Ton tânăr, cald, accesibil. Mesaj: „dentiști prietenoși care îți prezintă planul de tratament și găsim soluții împreună — tu iei decizia finală după ce planul e personalizat." Subliniază: fără frică, fără bariere, transparență, pacientul decide. (Aliniat cu consimțământul informat.) În partea de sus, un loc pentru **cifre factuale, dovedibile** `[CIFRĂ REALĂ — DE CONFIRMAT]` prezentate sobru (experiență dovedită, nu superlativ).

## Componente cheie
- **Header**: logo (`[LOGO DE ADĂUGAT]`), navigație, comutator de limbă RO/EN, buton „Programează".
- **Bară fixă mobilă (jos)**: „Sună" + „WhatsApp" — mereu vizibilă pe mobil.
- **Hero** (Home): titlu cald, subtitlu, CTA principal (programare) + secundar (WhatsApp). Micro-animație de reveal, non-blocantă.
- **Secțiuni Home**: servicii (carduri), competență chirurgicală (factual), teaser estetică, teaser „fără bariere/Gen Z", testimoniale + badge rating Google `[RATING REAL]` cu link la profil, FAQ (cu schema), CTA final, footer cu NAP + program + linkuri sociale.
- **Linkuri sociale**: Facebook, Instagram, TikTok — handle-uri `[URL-uri DE CONFIRMAT, standardizate]`.
- **Banner cookie / CMP**: vezi mai jos.

## Formular (Contact / Programare)
- Câmpuri minime: nume, telefon, email (opțional), serviciu de interes, mesaj (opțional). Atribute `autocomplete` corecte (autofill din browser).
- Opțiune: „Vreau o consultație" / „Sunați-mă" / „Scrieți-mi pe WhatsApp".
- Checkbox de **consimțământ** (cu link la confidențialitate) — obligatoriu.
- Submit prin **Server Action** → insert în Supabase (tabel `leads`). Dacă lipsesc cheile, lasă TODO clar.
- **Captură la primul touch**: salvează `gclid`, `gbraid`, `wbraid`, `fbclid`, `ttclid` + `utm_*` într-un cookie first-party și trimite-le cu lead-ul. (Linchpin pentru optimizarea reclamelor.)
- Anti-spam: placeholder pentru Cloudflare Turnstile.
- WhatsApp: link `wa.me` cu mesaj pre-completat. Telefon: link `tel:`. La click pe ambele + la submit formular, `dataLayer.push` cu `whatsapp_click` / `phone_call` / `generate_lead`.

## Tracking & consimțământ
- Pregătește **GTM** (`[GTM_ID]`) + **GA4** (`[GA4_ID]`), dar TOATE pornesc **doar după consimțământ** (Consent Mode v2). Nimic nu se declanșează înainte.
- **Banner CMP** propriu: categorii granulare (necesare / analytics / marketing), **„Refuz" la fel de proeminent ca „Accept"**, link la politica cookies + confidențialitate, stocarea alegerii. Implementează un context React simplu care gateuiește tag-urile.
- Datele formularului = date de sănătate (GDPR Art. 9): minim necesar, fără PII în URL-uri.

## SEO / AGEO / bilingv
- `generateMetadata` per pagină: title cu keyword + „Iași", meta description, Open Graph.
- **JSON-LD**: `Dentist`/`MedicalClinic` (cu `geo`, `openingHours`, `telephone`, `address`, `priceRange`), `Physician` (Dr. Chirap), `MedicalProcedure`/`Service`, `FAQPage`, `BreadcrumbList`.
- `app/sitemap.ts`, `app/robots.ts`, `public/llms.txt`.
- HTML semantic (un singur h1/pagină), `next/image`, alt-text descriptiv.
- **Bilingv RO + EN**: i18n cu rute pe limbă și `hreflang` corect (nu doar un toggle vizual). RO implicit, EN complet. `<html lang>` corect.

## Placeholder-e de marcat clar (le completez eu)
`[LOGO]`, `[MOV REAL din logo]`, `[TELEFON CLINICĂ]`, `[NUMĂR WHATSAPP]`, `[ADRESĂ]`, `[PROGRAM]`, `[URL FB/IG/TikTok]`, `[RATING GOOGLE + link profil]`, `[CIFRE REALE, DOVEDIBILE]`, `[POZE REALE]`, `[BIO + TITLURI/COMPETENȚE Dr. Chirap]`, `[PREȚURI]`, `[GTM_ID]`, `[GA4_ID]`, chei Supabase/Turnstile.

## Livrare (ce înseamnă „gata" pentru draft)
1. Proiect care rulează local (`npm run dev`) fără erori și e gata de deploy pe Vercel.
2. Design system + brand mov aplicat coerent.
3. Home, Implantologie, „Stomatologie fără bariere", Contact (cu formular funcțional până la TODO-ul Supabase) și banner cookie — **complete și finisate**.
4. Restul paginilor scaffoldate cu layout coerent + placeholder.
5. SEO/JSON-LD/i18n/llms.txt în loc. CWV-friendly (Server Components implicit, JS client minim).
6. README scurt cu pașii de setup (env, shadcn, fonturi) și lista de placeholder-e de completat.

Construiește pas cu pas: întâi scaffold + design system + layout/header/footer + banner cookie, apoi Home, apoi paginile complete, apoi restul scaffoldate. Confirmă structura înainte de a începe dacă ceva e neclar.
