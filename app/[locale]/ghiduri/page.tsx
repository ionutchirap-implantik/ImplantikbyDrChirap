import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createScaffoldMetadata } from "@/lib/create-scaffold-metadata";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type PageProps = { params: Promise<{ locale: string }> };

const guides = [
  { slug: "implant-dentar-ghid", titleRo: "Ghid implant dentar", titleEn: "Dental implant guide" },
  { slug: "prima-vizita", titleRo: "Prima vizită la dentist", titleEn: "Your first dental visit" },
  { slug: "ingrijire-post-operator", titleRo: "Îngrijire post-operatorie", titleEn: "Post-operative care" },
] as const;

export async function generateMetadata({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  return createScaffoldMetadata(localeParam as Locale, "ghiduri", "Ghiduri", "Guides");
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const title = locale === "ro" ? "Ghiduri" : "Guides";
  const subtitle =
    locale === "ro"
      ? "Informații pentru pacienți — răspunsuri clare la întrebări frecvente. Nu înlocuiesc consultația medicală."
      : "Information for patients — clear answers to common questions. They do not replace a medical consultation.";

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.slug} href={localePath(locale, `/ghiduri/${guide.slug}`)}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {locale === "ro" ? guide.titleRo : guide.titleEn}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{dict.scaffold.comingSoon}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
