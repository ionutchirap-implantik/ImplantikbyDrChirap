export type TeamMember = {
  id: string;
  name: string;
  jobTitle: string;
  shortBio: string;
  fullBio: string;
  image: string;
  imageAlt: string;
  href?: string;
  alumniOf: string;
};

export type TeamPageContent = {
  meta: { title: string; description: string };
  title: string;
  subtitle: string;
  leadSectionTitle: string;
  teamSectionTitle: string;
  readMore: string;
  readLess: string;
  assistantsNote: string;
  ctaLabel: string;
  members: TeamMember[];
};
