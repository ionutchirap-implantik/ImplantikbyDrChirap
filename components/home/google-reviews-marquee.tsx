"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { GOOGLE_REVIEWS } from "@/lib/google-reviews";

export function GoogleReviewsMarquee() {
  const items = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20" />
      <div className="flex w-max animate-marquee gap-4 pause-on-hover">
        {items.map((review, i) => (
          <Card
            key={`${review.id}-${i}`}
            className="w-[min(100vw-3rem,22rem)] shrink-0 border-primary/10 shadow-sm"
          >
            <CardContent className="pt-6">
              <div className="mb-3 flex text-brand-coral" aria-hidden>
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium">— {review.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
