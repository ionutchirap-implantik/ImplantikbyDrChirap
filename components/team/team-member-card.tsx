import Image from "next/image";
import type { TeamMember } from "@/lib/i18n/team";

type TeamMemberCardProps = {
  member: TeamMember;
  readMoreLabel: string;
  readLessLabel: string;
};

function memberInitials(name: string): string {
  const parts = name.replace(/^Dr\.\s*/i, "").split(/\s+/).filter(Boolean);
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function TeamMemberCard({
  member,
  readMoreLabel,
  readLessLabel,
}: TeamMemberCardProps) {
  const paragraphs = member.fullBio.split("\n\n");

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary/15 bg-card shadow-sm">
      <div className="relative aspect-[4/5] w-full shrink-0">
        {member.imagePlaceholder ? (
          <div className="flex h-full w-full flex-col items-center justify-center bg-primary px-6 text-center">
            <span className="font-display text-5xl font-semibold tracking-wide text-primary-foreground/90">
              {memberInitials(member.name)}
            </span>
          </div>
        ) : (
          <Image
            src={member.image}
            alt={member.imageAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{member.jobTitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.shortBio}</p>
        <details className="group mt-4">
          <summary className="cursor-pointer list-none text-sm font-medium text-primary marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">{readMoreLabel}</span>
            <span className="hidden group-open:inline">{readLessLabel}</span>
          </summary>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </details>
        {member.professionalTraining ? (
          <details className="group mt-3">
            <summary className="cursor-pointer list-none text-sm font-medium text-primary marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">{member.professionalTraining.sectionTitle}</span>
              <span className="hidden group-open:inline">{readLessLabel}</span>
            </summary>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {member.professionalTraining.items.map((item) => (
                <li key={item.slice(0, 48)}>{item}</li>
              ))}
            </ul>
          </details>
        ) : null}
      </div>
    </article>
  );
}
