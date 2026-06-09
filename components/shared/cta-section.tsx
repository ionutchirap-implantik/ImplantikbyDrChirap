import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/social/whatsapp-link";
import type { WhatsAppContext } from "@/lib/social/whatsapp";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type CtaSectionProps = {
  title: string;
  text: string;
  dict: Dictionary;
  locale: Locale;
  page: string;
  whatsappContext?: WhatsAppContext;
};

export function CtaSection({
  title,
  text,
  dict,
  locale,
  page,
  whatsappContext = "default",
}: CtaSectionProps) {
  return (
    <section className="section-padding">
      <div className="container-narrow rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12 sm:py-16">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">{text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="secondary" size="lg" asChild>
            <Link href={localePath(locale, "/programare")}>{dict.cta.book}</Link>
          </Button>
          <Button variant="coral" size="lg" asChild>
            <WhatsAppLink
              context={whatsappContext}
              locale={locale}
              page={page}
              location="cta_section"
              className="inline-flex items-center justify-center"
            >
              {dict.cta.whatsapp}
            </WhatsAppLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
