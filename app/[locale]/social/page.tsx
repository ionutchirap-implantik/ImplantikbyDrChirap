import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  MessageCircle,
  Phone,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { buildUtmUrl } from "@/lib/social/utm";
import { buildWhatsAppUrl } from "@/lib/social/whatsapp";
import { SITE } from "@/lib/constants";
import { WhatsAppLink } from "@/components/social/whatsapp-link";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return buildMetadata({
    title: dict.social.title,
    description: dict.social.subtitle,
    path: "/social",
    locale,
  });
}

const linkIcons = {
  programare: Calendar,
  implantologie: Stethoscope,
  genZ: Users,
  contact: Phone,
  whatsapp: MessageCircle,
} as const;

export default async function SocialPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const t = dict.social;

  const links = [
    {
      key: "programare" as const,
      href: buildUtmUrl("/programare", locale, { source: "social_hub", campaign: "programare" }),
      external: false,
    },
    {
      key: "implantologie" as const,
      href: buildUtmUrl("/implantologie", locale, { source: "social_hub", campaign: "implantologie" }),
      external: false,
    },
    {
      key: "genZ" as const,
      href: buildUtmUrl("/stomatologie-fara-bariere", locale, { source: "social_hub", campaign: "fara_bariere" }),
      external: false,
    },
    {
      key: "contact" as const,
      href: buildUtmUrl("/contact", locale, { source: "social_hub", campaign: "contact" }),
      external: false,
    },
    {
      key: "whatsapp" as const,
      href: buildWhatsAppUrl("social", locale),
      external: true,
    },
  ];

  return (
    <section className="min-h-[80vh] bg-gradient-to-b from-primary/10 to-background px-4 py-12">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <Sparkles className="h-8 w-8" />
        </div>
        <h1 className="mt-6 font-display text-2xl font-semibold">{SITE.name}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t.subtitle}</p>
        <p className="mt-1 text-xs text-muted-foreground">{SITE.social.handle}</p>

        <ul className="mt-10 space-y-3">
          {links.map((link) => {
            const Icon = linkIcons[link.key];
            const label = t.links[link.key];

            if (link.key === "whatsapp") {
              return (
                <li key={link.key}>
                  <WhatsAppLink
                    context="social"
                    locale={locale}
                    page="/social"
                    location="social_hub"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-5 py-4 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </WhatsAppLink>
                </li>
              );
            }

            return (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl border bg-background px-5 py-4 text-sm font-medium shadow-sm transition-transform hover:scale-[1.02] hover:border-primary/30"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex justify-center gap-4 text-xs text-muted-foreground">
          <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href={SITE.social.tiktok} target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
        </div>
      </div>
    </section>
  );
}
