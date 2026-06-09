import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function createBrandOgImage(title: string, subtitle?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #534AB7 0%, #6B5FD4 50%, #F0997B 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.9, marginBottom: 16 }}>Implantik by Dr. Chirap</div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>{title}</div>
        {subtitle && (
          <div style={{ fontSize: 28, marginTop: 24, opacity: 0.92, maxWidth: 800 }}>{subtitle}</div>
        )}
        <div style={{ fontSize: 22, marginTop: 40, opacity: 0.8 }}>Iași · implantologie & stomatologie</div>
      </div>
    ),
    { ...ogSize }
  );
}
