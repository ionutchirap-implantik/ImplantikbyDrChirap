import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/config";

type LogoProps = {
  locale: Locale;
};

export function Logo({ locale }: LogoProps) {
  return (
    <Link href={localePath(locale)} className="flex items-center gap-2">
      <Image
        src={SITE.logoPath}
        alt={SITE.name}
        width={140}
        height={40}
        className="h-9 w-auto object-contain"
        priority
      />
      <span className="sr-only">{SITE.name}</span>
    </Link>
  );
}
