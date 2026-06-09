"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { submitLead, type LeadFormState } from "@/lib/actions/submit-lead";
import { getAttributionForLead } from "@/lib/tracking/attribution";
import { pushDataLayer } from "@/lib/tracking/data-layer";
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
  const t = dict.contact;
  const f = dict.form;

  useEffect(() => {
    if (state.success) {
      pushDataLayer({ event: "generate_lead", form_name: "contact" });
    }
  }, [state.success]);

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="locale" value={locale} />
      <input
        type="hidden"
        name="attribution"
        value={JSON.stringify(getAttributionForLead())}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{t.name}</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder={t.name}
          />
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
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t.email}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={t.email}
        />
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
          {Object.entries(f.services).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">{t.intent}</legend>
        {(
          [
            ["consultation", t.intentConsultation],
            ["call", t.intentCall],
            ["whatsapp", t.intentWhatsapp],
          ] as const
        ).map(([value, label]) => (
          <label key={value} className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="intent"
              value={value}
              defaultChecked={value === "consultation"}
              className="h-4 w-4 accent-primary"
            />
            {label}
          </label>
        ))}
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="message">{t.message}</Label>
        <Textarea id="message" name="message" placeholder={t.message} />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-primary accent-primary"
        />
        <Label htmlFor="consent" className="text-sm leading-relaxed text-muted-foreground">
          {t.consent}{" "}
          <Link
            href={localePath(locale, "/confidentialitate")}
            className="text-primary underline"
          >
            {dict.footer.privacy}
          </Link>
        </Label>
      </div>

      {/* TODO: Cloudflare Turnstile widget — add TURNSTILE_SITE_KEY */}
      <div className="rounded-xl border border-dashed border-muted-foreground/30 px-4 py-3 text-xs text-muted-foreground">
        [Cloudflare Turnstile — DE CONFIGURAT]
      </div>

      {state.message === "success" && (
        <p className="rounded-xl bg-secondary px-4 py-3 text-sm text-secondary-foreground">
          {t.success}
        </p>
      )}
      {state.message === "validation_error" && (
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
