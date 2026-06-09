import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { ConsentProvider } from "@/components/consent/consent-context";
import { CookieBanner } from "@/components/consent/cookie-banner";
import { ConsentScripts } from "@/components/consent/consent-scripts";
import { HtmlLang } from "@/components/shared/html-lang";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { SITE } from "@/lib/constants";
import { medicalClinicJsonLd, JsonLd } from "@/lib/json-ld";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <HtmlLang />
      <ConsentProvider>
        <ConsentScripts />
        <Header dict={dict} locale={locale} />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer dict={dict} locale={locale} />
        <MobileActionBar dict={dict} locale={locale} />
        <CookieBanner dict={dict} locale={locale} />
      </ConsentProvider>
      <JsonLd data={medicalClinicJsonLd(locale)} />
      {!SITE.gtmId.startsWith("[") && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${SITE.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="GTM"
          />
        </noscript>
      )}
    </>
  );
}
