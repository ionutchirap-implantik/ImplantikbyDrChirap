import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type RichServiceTextProps = {
  text: string;
  locale: Locale;
  className?: string;
};

/** Renders `[label](/ro/path)` as internal links; strips locale prefix from paths. */
export function RichServiceText({ text, locale, className }: RichServiceTextProps) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) return <span key={i}>{part}</span>;

        const rawPath = match[2].replace(/^\/(ro|en)/, "") || "/";
        return (
          <Link
            key={i}
            href={localePath(locale, rawPath)}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {match[1]}
          </Link>
        );
      })}
    </span>
  );
}
