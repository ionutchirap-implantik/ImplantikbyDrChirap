import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScaffoldPage } from "@/components/shared/scaffold-page";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createScaffoldMetadata } from "@/lib/create-scaffold-metadata";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  return createScaffoldMetadata(localeParam as Locale, "echipa", "Echipa", "Our team");
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const title = locale === "ro" ? "Echipa" : "Our team";

  return (
    <>
      <ScaffoldPage title={title} dict={dict} locale={locale} />
      <div className="container-narrow -mt-8 pb-16 text-center">
        <Button asChild variant="outline">
          <Link href={localePath(locale, "/echipa/dr-ionut-chirap")}>
            Dr. Ionuț Chirap
          </Link>
        </Button>
      </div>
    </>
  );
}
