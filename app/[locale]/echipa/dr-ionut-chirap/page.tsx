import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { SectionHeading } from "@/components/shared/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { physicianJsonLd, JsonLd } from "@/lib/json-ld";
import { PLACEHOLDERS } from "@/lib/constants";
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
  return (
    <section className="section-padding">
      <div className="container-narrow grid gap-10 lg:grid-cols-2">
        <ImagePlaceholder aspect="square" label="[POZĂ DR. CHIRAP — DE ADĂUGAT]" />
        <div>
          <SectionHeading title="Dr. Ionuț Chirap" />
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>{PLACEHOLDERS.bio}</p>
            <p className="text-sm">[TITLU MEDICAL — DE CONFIRMAT]</p>
            <p className="text-sm">[COMPETENȚE — DE CONFIRMAT]</p>
          </div>
        </div>
      </div>
      <JsonLd data={physicianJsonLd()} />
    </section>
  );
}
