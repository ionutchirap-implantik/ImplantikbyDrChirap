import { createBrandOgImage } from "@/lib/og/brand-og";

export const runtime = "edge";
export const alt = "Implantologie în Iași — Implantik by Dr. Chirap";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createBrandOgImage(
    "Implantologie în Iași",
    "Plan de tratament individual, explicat pas cu pas."
  );
}
