import { createBrandOgImage } from "@/lib/og/brand-og";

export const runtime = "edge";
export const alt = "Stomatologie fără bariere — Implantik by Dr. Chirap";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createBrandOgImage(
    "Stomatologie fără bariere",
    "Plan clar. Fără presiune. Decizia ta."
  );
}
