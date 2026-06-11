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
   - `LEAD_NOTIFY_FROM` — expeditor verificat (ex. `Implantik <notificari@implantik.ro>`)

### Supabase

Rulează migrările din `supabase/migrations/` în SQL Editor (proiect Supabase), apoi setează `NEXT_PUBLIC_SUPABASE_URL` și `SUPABASE_SERVICE_ROLE_KEY` (cheia service role rămâne exclusiv server-side).

## Deploy Vercel

1. Push pe GitHub
2. Import proiect în Vercel
3. Adaugă variabilele din `.env.example` (inclusiv Resend și Supabase)
4. Deploy

## Social media (Prompt #2)

- **Link hub:** `/ro/social` — rute cu UTM către programare, servicii, WhatsApp
- **OG images:** `app/opengraph-image.tsx` + per pagină cheie (`implantologie`, `stomatologie-fara-bariere`)
- **WhatsApp contextual:** mesaje diferite per pagină + tracking `whatsapp_click` / `Contact`
- **Tracking:** GTM + Meta/TikTok via consent; `event_id` pentru deduplicare CAPI
- **Instagram:** secțiune lazy pe Home (placeholder până la token)

Vezi `SECURITY-AUDIT.md` pentru auditul de securitate.

## CMSR

Tot conținutul respectă regulile deontologice: fără garanții, superlative, oferte promoționale sau promovare de mărci.
