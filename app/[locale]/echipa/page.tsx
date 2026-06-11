import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/shared/section-heading";
import { TEAM_IMAGES } from "@/lib/images/site-images";
import { createScaffoldMetadata } from "@/lib/create-scaffold-metadata";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type PageProps = { params: Promise<{ locale: string }> };

const TEAM = [
  {
    name: "Dr. Ionuț Chirap",
    roleRo: "Medic specialist chirurgie orală și maxilo-facială",
    roleEn: "Oral and maxillofacial surgeon",
    image: TEAM_IMAGES.drIonutChirap,
    href: "/echipa/dr-ionut-chirap",
  },
  {
    name: "Dr. Ana Maria Chirap",
    roleRo: "Medic stomatolog",
    roleEn: "Dentist",
    image: TEAM_IMAGES.drAnaMariaChirap,
    href: null,
  },
  {
    name: "Dr. Mădălina Andriescu",
    roleRo: "Medic stomatolog",
    roleEn: "Dentist",
    image: TEAM_IMAGES.drMadalinaAndriescu,
    href: null,
  },
] as const;

export async function generateMetadata({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  return createScaffoldMetadata(localeParam as Locale, "echipa", "Echipa", "Our team");
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const title = locale === "ro" ? "Echipa" : "Our team";
  const subtitle =
    locale === "ro"
      ? "Medicii Implantik by Dr. Chirap, Iași."
      : "The Implantik by Dr. Chirap team, Iași.";

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading title={title} subtitle={subtitle} align="center" className="mb-12" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => {
            const card = (
              <article className="overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-md">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-lg font-semibold">{member.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {locale === "ro" ? member.roleRo : member.roleEn}
                  </p>
                </div>
              </article>
            );

            return member.href ? (
              <Link key={member.name} href={localePath(locale, member.href)} className="block">
                {card}
              </Link>
            ) : (
              <div key={member.name}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
