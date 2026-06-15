import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, physicianJsonLd, JsonLd } from "@/lib/json-ld";
import { getSiteUrl } from "@/lib/site-url";
import { SITE } from "@/lib/constants";
import { TEAM_LEAD } from "@/lib/i18n/team";
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
  const isRo = locale === "ro";
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/${locale}/echipa/dr-ionut-chirap`;
  const paragraphs = (isRo ? TEAM_LEAD.fullBioRo : TEAM_LEAD.fullBioEn).split("\n\n");

  return (
    <section className="section-padding">
      <div className="container-narrow grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={SITE.doctorPortraitPath}
            alt={
              isRo
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
          <SectionHeading title={TEAM_LEAD.name} />
          <p className="mt-2 text-sm font-medium text-primary">
            {isRo ? TEAM_LEAD.jobTitleRo : TEAM_LEAD.jobTitleEn}
          </p>
          <p className="mt-4 text-sm font-medium text-muted-foreground">
            {isRo ? TEAM_LEAD.shortBioRo : TEAM_LEAD.shortBioEn}
          </p>
          <div className="mt-6 space-y-4 text-muted-foreground">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <JsonLd
        data={[
          physicianJsonLd(locale),
          breadcrumbJsonLd([
            { name: isRo ? "Acasă" : "Home", url: `${siteUrl}/${locale}` },
            { name: isRo ? "Echipa" : "Team", url: `${siteUrl}/${locale}/echipa` },
            { name: TEAM_LEAD.name, url: pageUrl },
          ]),
        ]}
      />
    </section>
  );
}
