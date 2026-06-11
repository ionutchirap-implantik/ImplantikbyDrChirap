import { ContactForm } from "@/components/forms/contact-form";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

type HomeCtaSectionProps = {
  dict: Dictionary;
  locale: Locale;
};

export function HomeCtaSection({ dict, locale }: HomeCtaSectionProps) {
  const c = dict.home.finalCta;

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-12">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">{c.title}</h2>
            <p className="mt-4 text-primary-foreground/90 leading-relaxed">{c.text}</p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h3 className="font-display text-xl font-semibold">{dict.contact.formTitle}</h3>
            <div className="mt-6">
              <ContactForm dict={dict} locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
