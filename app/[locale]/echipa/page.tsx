import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { TeamLeadCard } from "@/components/team/team-lead-card";
import { TeamMemberCard } from "@/components/team/team-member-card";
import { JsonLd, physicianJsonLd, teamMemberPhysicianJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { getSiteUrl } from "@/lib/site-url";
import { getTeamContent } from "@/lib/i18n/team";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const content = getTeamContent(locale);

  return buildMetadata({
    title: content.meta.title,
    description: content.meta.description,
    path: "/echipa",
    locale,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const content = getTeamContent(locale);
  const siteUrl = getSiteUrl();
  const teamUrl = `${siteUrl}/${locale}/echipa`;

  const jsonLd = [
    physicianJsonLd(locale),
    ...content.members.map((member) =>
      teamMemberPhysicianJsonLd({
        name: member.name,
        jobTitle: member.jobTitle,
        alumniOf: member.alumniOf,
        medicalSpecialty: member.medicalSpecialty,
        url: teamUrl,
        image: member.imagePlaceholder ? undefined : `${siteUrl}${member.image}`,
      })
    ),
  ];

  return (
    <section className="section-padding">
      <div className="container-narrow space-y-14">
        <SectionHeading title={content.title} subtitle={content.subtitle} align="center" />

        <TeamLeadCard
          locale={locale}
          sectionTitle={content.leadSectionTitle}
          profileLabel={locale === "ro" ? "Cunoaște-l pe Dr. Chirap" : "View Dr. Chirap profile"}
        />

        <section>
          <h2 className="mb-8 font-display text-xl font-semibold text-primary sm:text-2xl">
            {content.teamSectionTitle}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content.members.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                readMoreLabel={content.readMore}
                readLessLabel={content.readLess}
              />
            ))}
          </div>
        </section>

        <p className="text-center text-sm leading-relaxed text-muted-foreground">
          {content.assistantsNote}
        </p>

        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link href={localePath(locale, "/programare")}>{content.ctaLabel}</Link>
          </Button>
        </div>
      </div>

      <JsonLd data={jsonLd} />
    </section>
  );
}
