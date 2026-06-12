import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { TEAM_LEAD } from "@/lib/i18n/team";
import { localePath } from "@/lib/i18n/paths";

type TeamLeadCardProps = {
  locale: Locale;
  sectionTitle: string;
  profileLabel: string;
};

export function TeamLeadCard({ locale, sectionTitle, profileLabel }: TeamLeadCardProps) {
  const isRo = locale === "ro";

  return (
    <section>
      <h2 className="mb-6 font-display text-xl font-semibold text-primary sm:text-2xl">
        {sectionTitle}
      </h2>
      <Link
        href={localePath(locale, TEAM_LEAD.href)}
        className="group block overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="grid md:grid-cols-[minmax(0,280px)_1fr]">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-full">
            <Image
              src={TEAM_LEAD.image}
              alt={isRo ? TEAM_LEAD.imageAltRo : TEAM_LEAD.imageAltEn}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 280px"
              priority
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold">{TEAM_LEAD.name}</h3>
            <p className="mt-2 text-sm font-medium text-primary">
              {isRo ? TEAM_LEAD.jobTitleRo : TEAM_LEAD.jobTitleEn}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {isRo ? TEAM_LEAD.shortBioRo : TEAM_LEAD.shortBioEn}
            </p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
              {profileLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
