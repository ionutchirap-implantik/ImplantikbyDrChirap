import type { Locale } from "@/lib/i18n/config";
import { cookiesEn } from "@/lib/legal/content/cookies-en";
import { cookiesRo } from "@/lib/legal/content/cookies-ro";
import { privacyEn } from "@/lib/legal/content/privacy-en";
import { privacyRo } from "@/lib/legal/content/privacy-ro";
import { termsEn } from "@/lib/legal/content/terms-en";
import { termsRo } from "@/lib/legal/content/terms-ro";
import type { LegalDocument, LegalDocumentType } from "@/lib/legal/types";

const documents: Record<Locale, Record<LegalDocumentType, LegalDocument>> = {
  ro: {
    privacy: privacyRo,
    cookies: cookiesRo,
    terms: termsRo,
  },
  en: {
    privacy: privacyEn,
    cookies: cookiesEn,
    terms: termsEn,
  },
};

export function getLegalDocument(
  locale: Locale,
  type: LegalDocumentType
): LegalDocument {
  return documents[locale][type];
}

export type { LegalDocument, LegalDocumentType, LegalSection } from "@/lib/legal/types";
