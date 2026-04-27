import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const alt = "Fidelis Strategy — Grow the top line, with AI.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand palette (mirrors tailwind theme — keep in sync if changed)
const COLORS = {
  deepOlive: "#2A3D2C",
  mossOlive: "#4A5D3C",
  linen: "#D4C4A0",
  bone: "#FAF5E4",
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: COLORS.mossOlive,
          color: COLORS.bone,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top — eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "20px",
            letterSpacing: "0.18em",
            color: COLORS.linen,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <span>Fidelis Strategy</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>Growth Strategy + AI</span>
        </div>

        {/* Headline + sub */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0 22px",
              fontSize: "92px",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              color: COLORS.bone,
              maxWidth: "1000px",
            }}
          >
            <span>Grow the</span>
            <span style={{ fontStyle: "italic", color: COLORS.linen }}>top line</span>
            <span>— with AI.</span>
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 300,
              lineHeight: 1.25,
              color: COLORS.linen,
              maxWidth: "900px",
              letterSpacing: "-0.01em",
            }}
          >
            Growth strategy. AI-powered execution. Built for owner-operated businesses.
          </div>
        </div>

        {/* Bottom — domain */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            color: COLORS.linen,
            letterSpacing: "0.02em",
          }}
        >
          <div style={{ fontWeight: 500 }}>fidelisstrategy.net</div>
          <div style={{ fontStyle: "italic", opacity: 0.85 }}>
            Faithful. Loyal. Trustworthy.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
