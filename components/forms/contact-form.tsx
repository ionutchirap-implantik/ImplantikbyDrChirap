"use client";

import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { FORM_SERVICES } from "@/lib/constants";
import { POLICY_VERSION } from "@/lib/consent/policy-version";
import { submitLead, type LeadFormState } from "@/lib/actions/submit-lead";
import { getAttributionForLead } from "@/lib/tracking/attribution";
import { TurnstileWidget } from "@/components/forms/turnstile-widget";
import { trackLead } from "@/lib/tracking/data-layer";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

const initialState: LeadFormState = { success: false, message: "" };

type ContactFormProps = {
  dict: Dictionary;
  locale: Locale;
};

export function ContactForm({ dict, locale }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const [consentChecked, setConsentChecked] = useState(false);
  const [consentTouched, setConsentTouched] = useState(false);
  const t = dict.contact;
  const f = dict.form;

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (state.success) {
      trackLead("contact", state.eventId);
    }
  }, [state.success, state.eventId]);

  const showConsentError =
    (consentTouched || state.message === "validation_error") && !consentChecked;

  return (
    <form
      action={formAction}
      className="space-y-5"
      onSubmit={(e) => {
        if (!consentChecked) {
          e.preventDefault();
          setConsentTouched(true);
        }
      }}
    >
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="policy_version" value={POLICY_VERSION} />
      <input
        type="hidden"
        name="attribution"
        value={JSON.stringify(getAttributionForLead())}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="lastName">{t.lastName}</Label>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            required
            placeholder={t.lastName}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="firstName">{t.firstName}</Label>
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            required
            placeholder={t.firstName}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">{t.phone}</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder={t.phone}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t.email}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={t.emailPlaceholder}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact_preference">{t.contactPreference}</Label>
        <select
          id="contact_preference"
          name="contact_preference"
          defaultValue=""
          className={cn(
            "flex h-11 w-full rounded-xl border border-input bg-transparent px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
        >
          <option value="">{t.contactPreferencePlaceholder}</option>
          {(["consultation", "call", "whatsapp"] as const).map((key) => (
            <option key={key} value={key}>
              {f.contactPreferences[key]}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">{t.service}</Label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className={cn(
            "flex h-11 w-full rounded-xl border border-input bg-transparent px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
        >
          <option value="" disabled>
            {f.selectService}
          </option>
          {FORM_SERVICES.map((key) => (
            <option key={key} value={key}>
              {f.services[key]}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t.message}</Label>
        <Textarea id="message" name="message" placeholder={t.message} />
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <input type="hidden" name="consent" value={consentChecked ? "on" : ""} />
          <input
            id="consent"
            type="checkbox"
            checked={consentChecked}
            onChange={(e) => {
              setConsentChecked(e.target.checked);
              setConsentTouched(true);
            }}
            className="mt-1 h-4 w-4 shrink-0 rounded border-primary accent-primary"
          />
          <Label htmlFor="consent" className="text-sm leading-relaxed text-muted-foreground">
            {t.consentBefore}{" "}
            <Link
              href={localePath(locale, "/confidentialitate")}
              className="text-primary underline"
            >
              {dict.footer.privacy}
            </Link>
            , {t.consentAfter}
          </Label>
        </div>
        {showConsentError ? (
          <p className="text-sm text-destructive">{t.consentError}</p>
        ) : null}
      </div>

      {turnstileSiteKey ? (
        <TurnstileWidget siteKey={turnstileSiteKey} />
      ) : (
        <div className="rounded-xl border border-dashed border-muted-foreground/30 px-4 py-3 text-xs text-muted-foreground">
          [Cloudflare Turnstile — DE CONFIGURAT în .env.local]
        </div>
      )}

      {state.message === "success" && (
        <p className="rounded-xl bg-secondary px-4 py-3 text-sm text-secondary-foreground">
          {t.success}
        </p>
      )}
      {(state.message === "validation_error" ||
        state.message === "rate_limited" ||
        state.message === "captcha_failed" ||
        state.message === "server_error") && (
        <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {t.error}
        </p>
      )}

      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? "..." : t.submit}
      </Button>
    </form>
  );
}
