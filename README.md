# Implantik by Dr. Chirap

Draft site pentru clinică de implantologie și stomatologie din Iași.

## Stack

- Next.js 15 (App Router) + TypeScript strict
- Tailwind CSS + shadcn/ui
- Supabase (leads) + Resend (notificări email)
- Pregătit pentru Vercel

## Setup local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000) — redirecționează automat la `/ro`.

## Structură

- `app/[locale]/` — rute bilingve RO/EN
- `lib/constants.ts` — placeholder-e de contact și brand
- `lib/actions/submit-lead.ts` — Server Action formular (Supabase + email Resend)
- `components/consent/` — banner CMP + Consent Mode v2
- `globals.css` — token mov `#534AB7` (`--brand-purple`)

## Pagini complete (draft finisat)

- Home `/ro`
- Implantologie `/ro/implantologie`
- Stomatologie fără bariere `/ro/stomatologie-fara-bariere`
- Contact + Programare `/ro/contact`, `/ro/programare`
- Banner cookie CMP

## TODO-uri conținut (mutate din UI)

- [ ] **Stat 7.000+ implanturi** — confirmare dovedibilă de la clinică (`home.stats[0]`)
- [ ] **Bio complet Dr. Chirap** — titluri academice + nr. Colegiul Medicilor (`/echipa/dr-ionut-chirap`, secțiunea About)
- [ ] **Servicii suplimentare** — confirmare cu clinica: urgențe stomatologice și radiologie digitală (carduri în grila de servicii, dacă există)
- [ ] **Cazuri & rezultate** — 3 capturi statice postări Instagram în `components/home/cases-section.tsx` (înlocuiește `[CAPTURĂ POSTARE — DE ÎNLOCUIT]`)
- [ ] **[DE VERIFICAT] Prețuri** — confirmă cu clinica rândurile ambigue din listă (endodonție retratament, scanare bimax, coroane pe implant, protezare provizorie Scutan, Spark aligners) — vezi `lib/i18n/pricing/data-ro.ts`
- [ ] **[ITERAȚIE VIITOARE] Pagini serviciu** — Endodonția și Pedodonția sunt confirmate prin lista de prețuri → de creat pagini dedicate (`/endodontie`, `/pedodontie`) cu linkuri din `/stomatologie` și `/preturi`
- [ ] **[FAZA 2] Pagină dedicată** `/sinus-lift-iasi` — intenția este acoperită acum pe `/chirurgie-orala` (secțiune + FAQ); scaffold-ul rămas are `noindex` și canonical către chirurgie orală
- [ ] **[CONȚINUT CONTINUU] Ghiduri** — 2–4 articole/lună din categoria E a strategiei (`/ghiduri/[slug]`); structura index + rute există, articolele sunt scaffold

## Strategie SEO / AGEO

Document: `docs/Implantik_Strategie_SEO_AGEO_Cuvinte_Cheie.md` (copie în `docs/` din rădăcină).

### MANUAL — nu ține de cod

- **Google Business Profile** — categorii corecte, toate serviciile, poze reale, postări regulate, program, link site; NAP identic peste tot
- **Recenzii** — flux de cerere recenzii (fără stimulente); răspuns la fiecare recenzie Google
- **Citări locale** — NAP identic în directoare (Cylex, Nicelocal, deschis.ro etc.)
- **Keyword Planner + Search Console** — validare volume reale, monitorizare query-uri, CTR, poziții
- **Ghiduri blog** — scriere continuă 2–4/lună (categoria E din strategie)
- **Pagini geo cartiere** — fază 2, doar cu conținut real (Tătărași, Copou etc.)

## Placeholder-e de completat

| Placeholder | Fișier |
|-------------|--------|
| `[LOGO DE ADĂUGAT]` | Header |
| `[MOV REAL din logo]` | `globals.css` → `--brand-purple` |
| `[TELEFON CLINICĂ]` | `lib/constants.ts` |
| `[NUMĂR WHATSAPP]` | `lib/constants.ts` |
| `[ADRESĂ]`, `[PROGRAM]` | `lib/constants.ts` |
| `[URL FB/IG/TikTok]` | `lib/constants.ts` |
| `[RATING REAL]` + profil Google | `lib/constants.ts` |
| `[CIFRE REALE, DOVEDIBILE]` | Home, Gen Z |
| `[POZE REALE]` | Componente `ImagePlaceholder` |
| `[BIO + TITLURI Dr. Chirap]` | `/echipa/dr-ionut-chirap` |
| `[PREȚURI]` | `/preturi` |
| `[GTM_ID]`, `[GA4_ID]` | `.env.local` + `lib/constants.ts` |
| Supabase keys | `.env.local` |
| Resend + email notificări | `.env.local` — vezi secțiunea de mai jos |
| Turnstile keys | `.env.local` + `contact-form.tsx` |
| Texte legale | `/confidentialitate`, `/cookies`, `/termeni` |

## Email notificări lead-uri (Resend)

La fiecare trimitere a formularului, lead-ul se salvează în Supabase și clinica primește un email instant. Dacă pacientul lasă email, primește și o confirmare scurtă.

### Setup Resend

1. Creează cont [Resend](https://resend.com) cu emailul clinicii.
2. Verifică domeniul `implantik.ro` în Resend (SPF/DKIM — instrucțiunile le oferă Resend în dashboard). Până la verificare poți folosi domeniul de test Resend (`onboarding@resend.dev`), dar **emailurile pot ajunge în spam**; verificarea domeniului rezolvă asta.
3. În Vercel (sau `.env.local`), setează:
   - `RESEND_API_KEY` — din dashboard Resend
   - `LEAD_NOTIFY_TO` — inbox-ul clinicii (ex. `implantikdrchirap@gmail.com`)
   - `LEAD_NOTIFY_FROM` — expeditor verificat în Resend (ex. `Implantik <implantikdrchirap@gmail.com>`)

### Supabase

Rulează migrările din `supabase/migrations/` în SQL Editor (proiect Supabase), apoi setează `NEXT_PUBLIC_SUPABASE_URL` și `SUPABASE_SERVICE_ROLE_KEY` (cheia service role rămâne exclusiv server-side).

## Deploy Vercel

1. Push pe GitHub
2. Import proiect în Vercel
3. Adaugă variabilele din `.env.example` (inclusiv Resend și Supabase)
4. Deploy

## Migrare WordPress → Next.js (redirect-uri 301)

Maparea vechi → nou este în `lib/redirects/wordpress-redirects.json` și este aplicată în `next.config.ts` via `buildWordPressRedirects()` (inclusiv variante cu trailing slash, pentru un singur hop 301).

- **Sitemap:** `app/sitemap.ts` listează doar rutele noi (`/ro/...`, `/en/...`).
- **robots.txt:** indexare permisă doar pe producție (`VERCEL_ENV === 'production'`); preview-urile Vercel sunt `disallow: /`.
- **404:** pagină personalizată cu linkuri către servicii, programare și ghiduri.

### Înainte de cut-over (pas uman obligatoriu)

- [ ] Maparea 301 verificată contra **Search Console** (Indexing → Pages) și **sitemap vechi** (`implantik.ro/wp-sitemap.xml`)
- [ ] Orice URL indexat lipsă din mapare adăugat în `lib/redirects/wordpress-redirects.json`

### După cut-over (test automat)

```bash
npm run test:redirects -- https://implantik.ro
# sau
node scripts/test-redirects.mjs https://implantik.ro
```

Scriptul verifică status 301/308, header `Location` corect și că destinația răspunde 200.

## Social media (Prompt #2)

- **Link hub:** `/ro/social` — rute cu UTM către programare, servicii, WhatsApp
- **OG images:** `app/opengraph-image.tsx` + per pagină cheie (`implantologie`, `stomatologie-fara-bariere`)
- **WhatsApp contextual:** mesaje diferite per pagină + tracking `whatsapp_click` / `Contact`
- **Tracking:** GTM + Meta/TikTok via consent; `event_id` pentru deduplicare CAPI
- **Instagram:** secțiune lazy pe Home (placeholder până la token)

Vezi `SECURITY-AUDIT.md` pentru auditul de securitate.

## CMSR

Tot conținutul respectă regulile deontologice: fără garanții, superlative, oferte promoționale sau promovare de mărci.
