-- Implantik Supabase schema + RLS
-- Run in Supabase SQL editor. SERVICE_ROLE_KEY must stay server-only.

-- leads: form submissions (health data — GDPR Art. 9)
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT NOT NULL,
  message TEXT,
  intent TEXT NOT NULL,
  locale TEXT NOT NULL,
  attribution JSONB DEFAULT '{}',
  fbclid TEXT,
  ttclid TEXT,
  event_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- No public read/write — inserts only via service role (Server Actions)
CREATE POLICY "leads_no_anon_access" ON leads
  FOR ALL TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- conversion_events: deduplication for Meta CAPI / TikTok Events API
CREATE TABLE IF NOT EXISTS conversion_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id TEXT NOT NULL UNIQUE,
  event_name TEXT NOT NULL,
  lead_id UUID REFERENCES leads(id),
  payload JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE conversion_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "conversion_events_no_anon_access" ON conversion_events
  FOR ALL TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- consultations & treatment_plans: reserved for future use
CREATE TABLE IF NOT EXISTS consultations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_ref TEXT NOT NULL,
  scheduled_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "consultations_patient_isolation" ON consultations
  FOR ALL TO authenticated
  USING (auth.uid()::text = patient_ref)
  WITH CHECK (auth.uid()::text = patient_ref);

CREATE TABLE IF NOT EXISTS treatment_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_ref TEXT NOT NULL,
  plan_data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE treatment_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "treatment_plans_patient_isolation" ON treatment_plans
  FOR ALL TO authenticated
  USING (auth.uid()::text = patient_ref)
  WITH CHECK (auth.uid()::text = patient_ref);
