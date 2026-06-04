import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const alt = "Fidelis Strategy — Grow the top line, with AI.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = {
  mossOlive: "#4A5D3C",
  linen: "#D4C4A0",
  bone: "#FAF5E4",
};

export default async function Image() {
  const logoData = readFileSync(join(process.cwd(), "public", "logo.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "48px",
          background: COLORS.mossOlive,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo */}
        <img
          src={logoBase64}
          width={320}
          height={120}
          style={{ objectFit: "contain" }}
        />

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: COLORS.bone,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Grow the top line, with AI.
          </div>
          <div
            style={{
              fontSize: "26px",
              fontWeight: 300,
              color: COLORS.linen,
              letterSpacing: "0.01em",
            }}
          >
            fidelisstrategy.net
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
