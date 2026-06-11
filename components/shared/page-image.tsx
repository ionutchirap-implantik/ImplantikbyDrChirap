import Image from "next/image";
import { cn } from "@/lib/utils";

type PageImageProps = {
  src: string;
  alt: string;
  aspect?: "square" | "video" | "wide";
  className?: string;
  priority?: boolean;
};

export function PageImage({
  src,
  alt,
  aspect = "video",
  className,
  priority = false,
}: PageImageProps) {
  const aspectClass = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
  }[aspect];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl shadow-lg",
        aspectClass,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={priority}
      />
    </div>
  );
}
