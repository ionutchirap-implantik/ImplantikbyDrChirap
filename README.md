# Implantik by Dr. Chirap

Draft site pentru clinică de implantologie și stomatologie din Iași.

## Stack

- Next.js 15 (App Router) + TypeScript strict
- Tailwind CSS + shadcn/ui
- Supabase (TODO — formular leads)
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
- `lib/actions/submit-lead.ts` — Server Action formular (log + TODO Supabase)
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
| Supabase keys | `.env.local` + `submit-lead.ts` |
| Turnstile keys | `.env.local` + `contact-form.tsx` |
| Texte legale | `/confidentialitate`, `/cookies`, `/termeni` |

## Deploy Vercel

1. Push pe GitHub
2. Import proiect în Vercel
3. Adaugă variabilele din `.env.example`
4. Deploy

## CMSR

Tot conținutul respectă regulile deontologice: fără garanții, superlative, oferte promoționale sau promovare de mărci.
