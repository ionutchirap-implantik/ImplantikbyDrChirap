import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { physicianJsonLd, JsonLd } from "@/lib/json-ld";
import { PLACEHOLDERS, SITE } from "@/lib/constants";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isValidLocale, type Locale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;

  return buildMetadata({
    title: `Dr. Ionuț Chirap — ${locale === "ro" ? "Echipa" : "Team"} Iași`,
    description: PLACEHOLDERS.bio,
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

  return (
    <section className="section-padding">
      <div className="container-narrow grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={SITE.doctorPortraitPath}
            alt="Dr. Ionuț Chirap"
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
      <JsonLd data={physicianJsonLd(locale)} />
    </section>
  );
}
