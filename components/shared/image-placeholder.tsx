import { PLACEHOLDERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  className?: string;
  label?: string;
  aspect?: "square" | "video" | "wide";
};

export function ImagePlaceholder({
  className,
  label = PLACEHOLDERS.photo,
  aspect = "video",
}: ImagePlaceholderProps) {
  const aspectClass = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
  }[aspect];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-brand-coral/20",
        aspectClass,
        className
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
        <span className="rounded-lg bg-background/80 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          {label}
        </span>
      </div>
    </div>
  );
}
