# Security Audit — Implantik by Dr. Chirap

**Data:** 2026-06-09  
**Scope:** Next.js 15 app, formular leads, tracking, Supabase (pregătit), GDPR Art. 9 (date sănătate)

---

## Rezumat

| Severitate | Găsite | Reparate în cod |
|------------|--------|-----------------|
| Critic     | 2      | 2               |
| Înalt      | 5      | 5               |
| Mediu      | 4      | 0 (recomandări) |
| Scăzut     | 3      | 0 (recomandări) |

---

## Critic — REPARAT

### C1. PII în log-uri server (leads)
- **Descriere:** `submit-lead.ts` loga întreg obiectul lead (nume, telefon) în consolă.
- **Remediere:** Log redactat doar în `development`; fără PII în producție.

### C2. Lipsă RLS pe tabele Supabase
- **Descriere:** Schema Supabase neconfigurată; risc expunere leads la acces anonim.
- **Remediere:** `supabase/migrations/001_rls_policies.sql` — RLS activat, politici deny-all pentru `anon` pe `leads` și `conversion_events`; izolare pacient pe `consultations` / `treatment_plans`.

---

## Înalt — REPARAT

### H1. Lipsă headere de securitate
- **Remediere:** CSP, HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` în `next.config.ts`.

### H2. Validare formular doar pe client
- **Remediere:** Zod strict server-side, `sanitizeText`, limite max length, enum-uri pentru `service` și `intent`.

### H3. Lipsă rate limiting pe submit lead
- **Remediere:** `lib/security/rate-limit.ts` — max 5 cereri/IP/oră în Server Action.

### H4. Turnstile neimplementat pe server
- **Remediere:** Widget client + `verifyTurnstileToken()` server-side când `TURNSTILE_SECRET_KEY` e setat.

### H5. Attribution JSON nesigur (JSON.parse pe input user)
- **Remediere:** `safeParseAttribution()` — whitelist chei UTM/click IDs, max 256 caractere.

---

## Mediu — RECOMANDĂRI

### M1. Rate limit în memorie (non-persistent)
- **Risc:** La redeploy/restart contorul se resetează; ineficient la scale multi-instance.
- **Recomandare:** Redis / Upstash Rate Limit sau Vercel KV în producție.

### M2. Supabase încă neconectat
- **Recomandare:** Rulează migrarea SQL, conectează `submit-lead.ts` cu `createClient` service role. Verifică că `NEXT_PUBLIC_SUPABASE_ANON_KEY` nu poate citi `leads`.

### M3. CSP `unsafe-inline` pentru scripturi
- **Context:** Necesar pentru GTM consent bootstrap și Next.js. 
- **Recomandare:** Nonce-based CSP când GTM e configurat final; testează cu [securityheaders.com](https://securityheaders.com).

### M4. `npm audit` — vulnerabilități moderate în dependențe transitive
- **Recomandare:** Rulează `npm audit` periodic; actualizează Next.js/eslint la patch-uri noi.

---

## Scăzut — RECOMANDĂRI

### S1. HSTS pe localhost / dev
- **Notă:** Headerul e setat global; inofensiv în dev, activ pe Vercel (HTTPS).

### S2. Lipsă webhook signature validation
- **Notă:** Nu există încă webhooks CAPI/TikTok în repo.
- **Recomandare:** La implementare Edge Functions, validează semnătura + secret în header.

### S3. Instagram token în `NEXT_PUBLIC_*`
- **Notă:** Dacă se folosește Graph API, tokenul trebuie **server-only** (Route Handler), nu `NEXT_PUBLIC_`.

---

## Verificări conforme

| Verificare | Status |
|------------|--------|
| `.env*` în `.gitignore` | ✅ |
| `SERVICE_ROLE_KEY` fără `NEXT_PUBLIC_` | ✅ |
| Secrete CAPI/TikTok doar server/env | ✅ (placeholder, nu în client) |
| Tracking blocat fără consimțământ | ✅ Consent Mode v2 + CMP |
| Refuz oprește GTM/pixeli | ✅ `loadTrackingScripts` doar după grant |
| PII în URL-uri | ✅ Form POST, fără query params |
| `fbclid` / `ttclid` în lead | ✅ Cookie first-party + câmpuri dedicate |
| `event_id` deduplicare | ✅ Server + dataLayer |
| Lockfile commis | ✅ `package-lock.json` |

---

## Pași post-deploy

1. Completează `.env.local` / Vercel env (fără a commita).
2. Rulează `supabase/migrations/001_rls_policies.sql`.
3. Configurează GTM server-side container cu Meta CAPI + TikTok Events API.
4. Activează Turnstile în producție.
5. Re-rulează audit după conectarea Supabase și GTM.
