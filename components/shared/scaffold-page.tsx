import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "./image-placeholder";
import { SectionHeading } from "./section-heading";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";
import { PLACEHOLDERS } from "@/lib/constants";

type ScaffoldPageProps = {
  title: string;
  description?: string;
  dict: Dictionary;
  locale: Locale;
};

export function ScaffoldPage({ title, description, dict, locale }: ScaffoldPageProps) {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title={title}
          subtitle={description || dict.scaffold.placeholder}
        />
        <ImagePlaceholder className="mt-10" aspect="wide" />
        <div className="mt-8 rounded-2xl border border-dashed border-primary/30 bg-secondary/20 p-6 text-sm text-muted-foreground">
          <p>{dict.scaffold.comingSoon}</p>
          <p className="mt-2">{PLACEHOLDERS.prices}</p>
        </div>
        <Button asChild className="mt-8" variant="outline">
          <Link href={localePath(locale)}>{dict.scaffold.backHome}</Link>
        </Button>
      </div>
    </div>
  );
}
