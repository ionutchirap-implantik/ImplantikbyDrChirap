import { createBrandOgImage } from "@/lib/og/brand-og";

export const runtime = "edge";
export const alt = "Implantik by Dr. Chirap — Clinică stomatologică Iași";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createBrandOgImage(
    "Dentiști prietenoși în Iași",
    "Plan de tratament personalizat, transparență și rezultate sigure și predictibile."
  );
}
