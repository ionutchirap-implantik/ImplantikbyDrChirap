import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, physicianJsonLd, JsonLd } from "@/lib/json-ld";
import { getSiteUrl } from "@/lib/site-url";
import { SITE } from "@/lib/constants";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isValidLocale, type Locale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;

  return buildMetadata({
    title:
      locale === "ro"
        ? "Chirurg oro-maxilofacial Iași — Dr. Ionuț Chirap | Implantik"
        : "Oral surgeon Iași — Dr. Ionuț Chirap | Implantik",
    description:
      locale === "ro"
        ? "Dr. Ionuț Chirap — medic specialist chirurgie orală și maxilo-facială, peste 7.000 de implanturi inserate. Implant dentar, All-on-4 și reabilitări complexe în Iași. Programează o consultație."
        : "Dr. Ionuț Chirap — oral and maxillofacial surgeon with over 7,000 implants placed. Dental implants, All-on-4, and complex rehabilitation in Iași, Romania. Book a consultation.",
    path: "/echipa/dr-ionut-chirap",
    locale,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const about = dict.home.about;
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/${locale}/echipa/dr-ionut-chirap`;

  return (
    <section className="section-padding">
      <div className="container-narrow grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={SITE.doctorPortraitPath}
            alt={
              locale === "ro"
                ? "Dr. Ionuț Chirap — chirurg oral și maxilo-facial, implant dentar Iași"
                : "Dr. Ionuț Chirap — oral and maxillofacial surgeon, dental implants Iași"
            }
            width={800}
            height={800}
            className="h-full w-full object-cover object-top"
            priority
          />
        </div>
        <div>
          <SectionHeading title="Dr. Ionuț Chirap" />
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>{about.text}</p>
          </div>
        </div>
      </div>
      <JsonLd
        data={[
          physicianJsonLd(locale),
          breadcrumbJsonLd([
            { name: locale === "ro" ? "Acasă" : "Home", url: `${siteUrl}/${locale}` },
            { name: locale === "ro" ? "Echipa" : "Team", url: `${siteUrl}/${locale}/echipa` },
            { name: "Dr. Ionuț Chirap", url: pageUrl },
          ]),
        ]}
      />
    </section>
  );
}
