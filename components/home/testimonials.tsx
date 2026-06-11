import { Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { GoogleReviewsMarquee } from "@/components/home/google-reviews-marquee";
import { SITE } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

type TestimonialsProps = {
  dict: Dictionary;
  locale: Locale;
};

export function Testimonials({ dict, locale }: TestimonialsProps) {
  const seeAll =
    locale === "ro" ? "Vezi toate recenziile pe Google" : "See all reviews on Google";

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading title={dict.home.testimonialsTitle} align="center" className="mb-10" />

        <a
          href={SITE.googleReviewsUrl}
          className="mx-auto mb-10 flex w-fit items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm shadow-sm transition-shadow hover:shadow-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex text-brand-coral" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="font-medium">{SITE.googleRating}</span>
          <span className="text-muted-foreground">Google</span>
        </a>

        <GoogleReviewsMarquee />

        <p className="mt-8 text-center">
          <a
            href={SITE.googleReviewsUrl}
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {seeAll}
          </a>
        </p>
      </div>
    </section>
  );
}
