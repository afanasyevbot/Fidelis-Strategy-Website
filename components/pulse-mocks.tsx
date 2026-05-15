/**
 * Live HTML mocks of the Fidelis Pulse dashboards, mirroring the visuals on
 * fidelispulse.com/pulse. Stays in sync with the product because it renders
 * the same React markup rather than a stale PNG.
 *
 * Two mocks compose the hero visual:
 *   - PulseKPIMock    Atlas Logistics KPI overview (operator cockpit)
 *   - PulseActionsMock Cedar Ridge HVAC weekly priorities + AI commentary
 */

const ACCENT = "#8B6F3D";
const ACCENT_SOFT = "rgba(139, 111, 61, 0.10)";
const INK = "#1A1614";
const INK_MUTED = "#6B6256";
const PAPER = "#FAF8F4";
const CARD = "#FFFFFF";
const LINE = "rgba(26, 22, 20, 0.08)";
const GOOD = "#0E8A5F";
const GOOD_BG = "rgba(14, 138, 95, 0.08)";
const GOOD_BORDER = "rgba(14, 138, 95, 0.25)";
const WARN = "#C77700";
const WARN_BG = "rgba(199, 119, 0, 0.10)";
const WARN_BORDER = "rgba(199, 119, 0, 0.30)";

const SERIF = '"Iowan Old Style", "Charter", "Source Serif 4", Georgia, serif';
const SANS = "var(--font-inter), ui-sans-serif, system-ui, sans-serif";

const eyebrow: React.CSSProperties = {
  fontSize: 10,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: INK_MUTED,
  fontWeight: 700,
};

export function PulseKPIMock() {
  return (
    <div
      aria-label="Fidelis Pulse demo: Atlas Logistics KPI overview"
      style={{
        background: CARD,
        border: `1px solid ${LINE}`,
        borderRadius: 8,
        overflow: "hidden",
        fontFamily: SANS,
        color: INK,
        boxShadow:
          "0 24px 60px -22px rgba(26,22,20,0.22), 0 6px 16px -8px rgba(26,22,20,0.08)",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          borderBottom: `1px solid ${LINE}`,
          background: CARD,
          fontSize: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 16,
              height: 16,
              background: ACCENT,
              color: "#fff",
              fontWeight: 700,
              fontSize: 9,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: SERIF,
            }}
          >
            F
          </div>
          <span style={{ fontFamily: SERIF, fontWeight: 600 }}>Fidelis Pulse</span>
        </div>
        <span style={{ color: INK_MUTED }}>·</span>
        <span style={{ color: INK_MUTED }}>Atlas Logistics</span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: 9,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 700,
            padding: "3px 7px",
            background: ACCENT_SOFT,
            color: ACCENT,
            borderRadius: 3,
          }}
        >
          Buyer Ready
        </span>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 18,
          padding: "8px 14px",
          borderBottom: `1px solid ${LINE}`,
          background: CARD,
          fontSize: 12,
        }}
      >
        <span style={{ fontWeight: 600, borderBottom: `2px solid ${ACCENT}`, paddingBottom: 4, marginBottom: -1 }}>
          Overview
        </span>
        <span style={{ color: INK_MUTED }}>Cash &amp; AR</span>
        <span style={{ color: INK_MUTED }}>Sales</span>
        <span style={{ color: INK_MUTED }}>Operations</span>
      </div>

      <div style={{ padding: "16px 18px" }}>
        <div style={eyebrow}>Overview · April 2026</div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
          <PulseScoreGauge score={78} />
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: SERIF,
                fontSize: 17,
                fontWeight: 600,
                letterSpacing: "-0.005em",
              }}
            >
              Business Pulse · Strong
            </div>
            <div style={{ fontSize: 11.5, color: INK_MUTED, marginTop: 2, lineHeight: 1.45 }}>
              Weighted score across cash, margin, growth, and AR health.
            </div>
            <div style={{ fontSize: 11, color: GOOD, fontWeight: 600, marginTop: 4 }}>
              ▲ +4 pts vs last month
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            marginTop: 16,
            paddingTop: 14,
            borderTop: `1px solid ${LINE}`,
          }}
        >
          <Kpi label="Revenue (TTM)" value="$4.8M" delta="+14.0% YoY" tone="good" />
          <Kpi label="Gross margin" value="41.2%" delta="+2.4 pts" tone="good" />
          <Kpi label="Cash runway" value="11.2 mo" delta="Healthy" tone="muted" />
        </div>

        <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${LINE}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={eyebrow}>Revenue · trailing 12 mo</div>
            <div style={{ fontSize: 10, color: INK_MUTED }}>Apr 2025 to Apr 2026</div>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 }}>
            <div style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em" }}>
              $4.8M
            </div>
            <div style={{ fontSize: 11, color: GOOD, fontWeight: 600 }}>▲ $590K</div>
          </div>
          <svg viewBox="0 0 400 50" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 38, marginTop: 4 }}>
            <defs>
              <linearGradient id="pulse-kpi-spark" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={ACCENT} stopOpacity="0.18" />
                <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline
              points="0,38 36,33 72,35 108,28 144,30 180,22 216,24 252,16 288,18 324,11 360,9 400,6"
              fill="none"
              stroke={ACCENT}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polygon
              points="0,38 36,33 72,35 108,28 144,30 180,22 216,24 252,16 288,18 324,11 360,9 400,6 400,50 0,50"
              fill="url(#pulse-kpi-spark)"
            />
          </svg>
        </div>

        <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${LINE}` }}>
          <div style={eyebrow}>Cash position and receivables</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 8 }}>
            <div>
              <div style={{ ...eyebrow, fontSize: 9 }}>Operating cash today</div>
              <div style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, marginTop: 2 }}>$1.62M</div>
            </div>
            <div>
              <div style={{ ...eyebrow, fontSize: 9 }}>AR outstanding</div>
              <div style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, marginTop: 2 }}>$720K</div>
              <div style={{ fontSize: 10.5, color: WARN, fontWeight: 600, marginTop: 2 }}>18% over 60 days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PulseScoreGauge({ score }: { score: number }) {
  const size = 64;
  const stroke = 7;
  const r = (size - stroke) / 2;
  const C = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, score)) / 100;
  const offset = C * (1 - pct);
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={LINE} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={ACCENT}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={offset}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: SERIF,
          fontSize: 19,
          fontWeight: 600,
          letterSpacing: "-0.01em",
        }}
      >
        {score}
      </div>
    </div>
  );
}

function Kpi({ label, value, delta, tone }: { label: string; value: string; delta: string; tone: "good" | "warn" | "muted" }) {
  const color = tone === "good" ? GOOD : tone === "warn" ? WARN : INK_MUTED;
  return (
    <div>
      <div style={{ ...eyebrow, fontSize: 9 }}>{label}</div>
      <div style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 600, marginTop: 2, letterSpacing: "-0.005em" }}>
        {value}
      </div>
      <div style={{ fontSize: 10.5, fontWeight: 600, marginTop: 2, color }}>{delta}</div>
    </div>
  );
}

export function PulseActionsMock() {
  return (
    <div
      aria-label="Fidelis Pulse demo: Cedar Ridge HVAC weekly priorities"
      style={{
        background: CARD,
        border: `1px solid ${LINE}`,
        borderRadius: 8,
        overflow: "hidden",
        fontFamily: SANS,
        color: INK,
        boxShadow:
          "0 32px 70px -22px rgba(26,22,20,0.32), 0 10px 24px -10px rgba(26,22,20,0.14)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          borderBottom: `1px solid ${LINE}`,
          background: CARD,
          fontSize: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 16,
              height: 16,
              background: ACCENT,
              color: "#fff",
              fontWeight: 700,
              fontSize: 9,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: SERIF,
            }}
          >
            F
          </div>
          <span style={{ fontFamily: SERIF, fontWeight: 600 }}>Fidelis Pulse</span>
        </div>
        <span style={{ color: INK_MUTED }}>·</span>
        <span style={{ color: INK_MUTED }}>Cedar Ridge HVAC</span>
        <span style={{ marginLeft: "auto", fontSize: 11, color: INK_MUTED }}>This week</span>
      </div>

      {/* Watch alert */}
      <div style={{ padding: "14px 14px 0" }}>
        <div
          style={{
            background: WARN_BG,
            border: `1px solid ${WARN_BORDER}`,
            borderRadius: 6,
            padding: "10px 12px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              background: WARN,
              color: "#fff",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "3px 7px",
              borderRadius: 3,
              flexShrink: 0,
            }}
          >
            Watch
          </span>
          <span style={{ fontSize: 12.5, flex: 1 }}>Cash will hit $185K by May 22</span>
          <span style={{ fontSize: 11, color: INK_MUTED, flexShrink: 0 }}>in 3 weeks</span>
        </div>
      </div>

      <div style={{ padding: "14px 14px 16px" }}>
        <div style={eyebrow}>Commentary &amp; actions</div>

        <div
          style={{
            marginTop: 8,
            padding: "12px 14px",
            background: PAPER,
            border: `1px solid ${LINE}`,
            borderRadius: 6,
          }}
        >
          <div style={{ ...eyebrow, color: ACCENT }}>Weekly commentary</div>
          <p style={{ margin: "6px 0 0", fontSize: 12.5, lineHeight: 1.55 }}>
            Seasonal trough is hitting two weeks earlier than last year. Service plan pricing has
            not been adjusted since 2024 and a 4 to 6% increase is recoverable now, before peak
            HVAC season. AR aging is the immediate cash lever.
          </p>
          <div style={{ ...eyebrow, color: ACCENT, marginTop: 10 }}>Value implication</div>
          <p style={{ margin: "6px 0 0", fontSize: 12.5, lineHeight: 1.55 }}>
            Tightening collections plus a modest price increase rebuilds cash buffer by mid-July
            without external financing.
          </p>
        </div>

        <div style={{ ...eyebrow, marginTop: 14 }}>60-day action plan</div>
        <ol style={{ margin: "8px 0 0", padding: 0, listStyle: "none" }}>
          <ActionItem n="1" label="Started" tone="good" body="Tighten collections on top 5 commercial accounts" />
          <ActionItem n="2" label="Planned" tone="warn" body="Roll out 4 to 6% service plan price increase" />
          <ActionItem n="3" label="On Track" tone="good" body="Pre-bill summer maintenance contracts by June 1" />
        </ol>
      </div>
    </div>
  );
}

function ActionItem({ n, label, tone, body }: { n: string; label: string; tone: "good" | "warn"; body: string }) {
  const styles =
    tone === "good"
      ? { bg: GOOD_BG, color: GOOD, border: GOOD_BORDER }
      : { bg: WARN_BG, color: WARN, border: WARN_BORDER };
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "6px 0" }}>
      <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 10, color: INK_MUTED, marginTop: 2 }}>{n}</span>
      <span
        style={{
          fontSize: 9,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontWeight: 700,
          padding: "3px 7px",
          borderRadius: 3,
          background: styles.bg,
          color: styles.color,
          border: `1px solid ${styles.border}`,
          flexShrink: 0,
        }}
      >
        {label}
      </span>
      <span style={{ fontSize: 12.5, lineHeight: 1.45 }}>{body}</span>
    </li>
  );
}

/** Composes the two mocks into the same overlapping hero layout
 *  fidelispulse.com/pulse uses. */
export function PulseHeroMocks() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
      <div className="absolute" style={{ left: 0, top: "6%", width: "82%" }}>
        <PulseKPIMock />
      </div>
      <div className="absolute" style={{ right: 0, bottom: 0, width: "72%" }}>
        <PulseActionsMock />
      </div>
    </div>
  );
}
