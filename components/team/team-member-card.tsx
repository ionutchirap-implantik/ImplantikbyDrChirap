import Image from "next/image";
import type { TeamMember } from "@/lib/i18n/team";

type TeamMemberCardProps = {
  member: TeamMember;
  readMoreLabel: string;
};

export function TeamMemberCard({ member, readMoreLabel }: TeamMemberCardProps) {
  const paragraphs = member.fullBio.split("\n\n");

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary/15 bg-card shadow-sm">
      <div className="relative aspect-[4/5] w-full shrink-0">
        <Image
          src={member.image}
          alt={member.imageAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{member.jobTitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.shortBio}</p>
        <details className="group mt-4">
          <summary className="cursor-pointer list-none text-sm font-medium text-primary marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">{readMoreLabel}</span>
            <span className="hidden group-open:inline">−</span>
          </summary>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </details>
      </div>
    </article>
  );
}
