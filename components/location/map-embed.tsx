import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MapEmbedProps = {
  title: string;
  className?: string;
  aspect?: "compact" | "large";
};

export function MapEmbed({ title, className, aspect = "compact" }: MapEmbedProps) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border shadow-sm", className)}>
      <iframe
        title={title}
        src={SITE.mapsEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className={cn(
          "w-full border-0",
          aspect === "large" ? "aspect-[16/10] min-h-[320px]" : "aspect-video min-h-[200px]"
        )}
      />
    </div>
  );
}
