import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const alt =
  "Fidelis Strategy — Growth strategy. And the systems built to run it.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = {
  moss: "#4A5D3C",
  mossDeep: "#384729",
  bone: "#FAF5E4",
  linen: "#D4C4A0",
  gold: "#C7A24A",
};

function asset(...p: string[]) {
  return readFileSync(join(process.cwd(), ...p));
}

export default async function Image() {
  const crest = `data:image/png;base64,${asset("public", "logo.png").toString("base64")}`;
  const cinzel = asset("public", "fonts", "Cinzel-700.ttf");
  const interRegular = asset("public", "fonts", "Inter-400.ttf");
  const interBold = asset("public", "fonts", "Inter-700.ttf");

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "84px 96px",
          background: `linear-gradient(145deg, ${COLORS.moss} 0%, ${COLORS.mossDeep} 100%)`,
          fontFamily: "Inter",
          overflow: "hidden",
        }}
      >
        {/* Crest watermark, bleeding off the right edge */}
        <img
          src={crest}
          width={660}
          height={660}
          style={{
            position: "absolute",
            top: -22,
            right: -168,
            opacity: 0.08,
          }}
        />

        {/* Top block: eyebrow, rule, headline, support */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Cinzel",
              fontWeight: 700,
              fontSize: 30,
              letterSpacing: "0.2em",
              color: COLORS.gold,
            }}
          >
            FIDELIS STRATEGY
          </div>

          <div
            style={{
              width: 76,
              height: 5,
              borderRadius: 3,
              background: COLORS.gold,
              marginTop: 30,
              marginBottom: 38,
            }}
          />

          <div
            style={{
              display: "flex",
              fontWeight: 700,
              fontSize: 52,
              lineHeight: 1.14,
              letterSpacing: "-0.015em",
              color: COLORS.bone,
              maxWidth: 690,
            }}
          >
            Growth strategy. And the systems built to run it.
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontWeight: 400,
              fontSize: 28,
              lineHeight: 1.3,
              color: COLORS.linen,
              maxWidth: 690,
            }}
          >
            Custom AI systems for owner-operated businesses.
          </div>
        </div>

        {/* Bottom: URL */}
        <div
          style={{
            display: "flex",
            fontWeight: 500,
            fontSize: 24,
            letterSpacing: "0.04em",
            color: COLORS.linen,
          }}
        >
          fidelisstrategy.net
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cinzel", data: cinzel, weight: 700, style: "normal" },
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
      ],
    }
  );
}
