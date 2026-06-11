-- Extindere tabel leads: consimțământ formular, email opțional, preferință contact
ALTER TABLE leads ADD COLUMN IF NOT EXISTS email TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS contact_preference TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS consent_form BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS consent_form_at TIMESTAMPTZ;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS policy_version TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS gclid TEXT;
