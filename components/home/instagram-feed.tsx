"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { SOCIAL_HANDLE, SOCIAL_URLS } from "@/lib/social/utm";

type InstagramFeedProps = {
  title: string;
  followLabel: string;
  placeholderNote: string;
};

function InstagramFeedInner({ title, followLabel, placeholderNote }: InstagramFeedProps) {
  const hasToken = Boolean(process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN);

  return (
    <section className="section-padding bg-secondary/10">
      <div className="container-narrow">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
          <Link
            href={SOCIAL_URLS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Instagram className="h-4 w-4" />
            {followLabel} {SOCIAL_HANDLE}
          </Link>
        </div>

        {hasToken ? (
          <p className="mt-6 rounded-xl border border-dashed p-4 text-sm text-muted-foreground">
            [TODO: Conectează Instagram Basic Display / Graph API — token configurat]
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-gradient-to-br from-primary/25 to-brand-coral/20"
                aria-hidden
              />
            ))}
          </div>
        )}

        <p className="mt-4 text-xs text-muted-foreground">{placeholderNote}</p>
      </div>
    </section>
  );
}

export const InstagramFeed = dynamic(() => Promise.resolve(InstagramFeedInner), {
  ssr: false,
  loading: () => null,
});
