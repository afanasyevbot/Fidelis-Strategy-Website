/**
 * Hero — lone pine animation.
 *
 * Inspired by: a solitary white pine emerging from morning mist.
 * Pure SVG + CSS. No JS, no video file needed.
 *
 * Sequence:
 *   0.0s  roots spread
 *   0.4s  trunk draws upward
 *   2.2s  lowest branch tier spreads (widest)
 *   → each tier fills in upward, getting narrower
 *   3.8s+ foliage clusters bloom at branch tips (staggered)
 *   6.0s  slow canopy sway begins, loops forever
 *
 * Tree is anchored right of center (trunk at x≈1180) leaving the
 * left half open for headline copy. On mobile it reads as ambient texture.
 */
export function HeroAnimation() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <style>{`
        @keyframes drawTree {
          to { stroke-dashoffset: 0; }
        }
        @keyframes bloomFoliage {
          0%   { opacity: 0; transform: scale(0) translateY(4px); }
          65%  { opacity: 1; transform: scale(1.08) translateY(0); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-0.7deg); }
          50%       { transform: rotate(0.5deg); }
        }
        @keyframes fogDrift {
          0%   { opacity: 0.55; transform: scaleX(1); }
          50%  { opacity: 0.65; transform: scaleX(1.04); }
          100% { opacity: 0.55; transform: scaleX(1); }
        }

        /* shared line base */
        .pl { fill: none; stroke-dasharray: 1; stroke-linecap: round; }

        /* roots */
        .r1 { animation: drawTree 1.0s ease-out 0.0s both; }
        .r2 { animation: drawTree 1.0s ease-out 0.1s both; }
        .r3 { animation: drawTree 1.2s ease-out 0.05s both; }

        /* trunk */
        .tk { animation: drawTree 2.0s cubic-bezier(0.25,0.1,0.25,1) 0.4s both; }

        /* branch tiers — bottom-up reveal */
        .t6l { animation: drawTree 1.1s ease-out 2.2s both; }
        .t6r { animation: drawTree 1.1s ease-out 2.3s both; }
        .t5l { animation: drawTree 1.0s ease-out 2.8s both; }
        .t5r { animation: drawTree 1.0s ease-out 2.9s both; }
        .t4l { animation: drawTree 0.9s ease-out 3.3s both; }
        .t4r { animation: drawTree 0.9s ease-out 3.4s both; }
        .t3l { animation: drawTree 0.8s ease-out 3.7s both; }
        .t3r { animation: drawTree 0.8s ease-out 3.75s both; }
        .t2l { animation: drawTree 0.7s ease-out 4.1s both; }
        .t2r { animation: drawTree 0.7s ease-out 4.15s both; }
        .t1l { animation: drawTree 0.6s ease-out 4.4s both; }
        .t1r { animation: drawTree 0.6s ease-out 4.45s both; }
        .t0  { animation: drawTree 0.5s ease-out 4.7s both; }

        /* foliage clusters */
        .fc {
          transform-box: fill-box;
          transform-origin: center;
          transform: scale(0);
          opacity: 0;
          animation: bloomFoliage 0.6s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .f1  { animation-delay: 3.6s; }
        .f2  { animation-delay: 3.65s; }
        .f3  { animation-delay: 3.2s; }
        .f4  { animation-delay: 3.25s; }
        .f5  { animation-delay: 3.9s; }
        .f6  { animation-delay: 3.95s; }
        .f7  { animation-delay: 4.2s; }
        .f8  { animation-delay: 4.25s; }
        .f9  { animation-delay: 4.5s; }
        .f10 { animation-delay: 4.55s; }
        .f11 { animation-delay: 4.75s; }
        .f12 { animation-delay: 4.8s; }
        .f13 { animation-delay: 4.85s; }

        /* canopy sways as one group after everything blooms */
        .canopy {
          transform-box: fill-box;
          transform-origin: 1180px 880px;
          animation: sway 11s ease-in-out 6.2s infinite;
        }

        /* ground fog */
        .fog {
          animation: fogDrift 18s ease-in-out 0s infinite;
        }
      `}</style>

      <defs>
        {/* Deep vignette */}
        <radialGradient id="vig" cx="50%" cy="50%" r="72%">
          <stop offset="0%"   stopColor="#4A5D3C" stopOpacity="0" />
          <stop offset="100%" stopColor="#1A2A1C" stopOpacity="0.65" />
        </radialGradient>

        {/* Warm ambient glow behind the tree */}
        <radialGradient id="glow" cx="74%" cy="55%" r="36%">
          <stop offset="0%"   stopColor="#4A5D3C" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#2A3D2C" stopOpacity="0" />
        </radialGradient>

        {/* Ground fog — horizontal band at bottom */}
        <linearGradient id="fogGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#2A3D2C" stopOpacity="0" />
          <stop offset="100%" stopColor="#1A2A1C" stopOpacity="0.55" />
        </linearGradient>

        {/* Side fades — fade tree toward edges so it feels emergent */}
        <linearGradient id="fadeR" x1="0" y1="0" x2="1" y2="0">
          <stop offset="70%"  stopColor="#2A3D2C" stopOpacity="0" />
          <stop offset="100%" stopColor="#2A3D2C" stopOpacity="0.70" />
        </linearGradient>
      </defs>

      {/* Base overlays */}
      <rect width="1600" height="900" fill="url(#vig)" />
      <rect width="1600" height="900" fill="url(#glow)" />

      {/* ─── ROOTS ─── */}
      <g stroke="#D4C4A0" strokeOpacity="0.18" strokeWidth="1.8">
        <path className="pl r1" pathLength="1" strokeDashoffset="1"
          d="M 1180,900 C 1118,906 1050,916 970,932" />
        <path className="pl r2" pathLength="1" strokeDashoffset="1"
          d="M 1183,898 C 1242,906 1306,918 1378,934" />
        <path className="pl r3" pathLength="1" strokeDashoffset="1"
          d="M 1156,904 C 1094,912 1016,924 924,946" />
      </g>

      {/* ─── TRUNK ─── */}
      <path
        className="pl tk"
        pathLength="1" strokeDashoffset="1"
        d="M 1182,910 C 1179,808 1185,706 1181,600 C 1177,510 1182,430 1180,248"
        stroke="#D4C4A0" strokeOpacity="0.28" strokeWidth="3.2"
      />

      {/* ─── EVERYTHING ABOVE GROUND SWAYS TOGETHER ─── */}
      <g className="canopy">

        {/* TIER 6 — widest, lowest ~y=748 */}
        <g stroke="#D4C4A0" strokeOpacity="0.20" strokeWidth="2.2" fill="none" strokeLinecap="round">
          <path className="pl t6l" pathLength="1" strokeDashoffset="1"
            d="M 1180,748 C 1135,718 1042,712 888,755" />
          <path className="pl t6r" pathLength="1" strokeDashoffset="1"
            d="M 1182,748 C 1228,718 1320,712 1472,755" />
        </g>
        {/* tier 6 foliage */}
        <ellipse className="fc f3" cx="888"  cy="748" rx="46" ry="22" fill="#D4C4A0" fillOpacity="0.14" />
        <ellipse className="fc f4" cx="1472" cy="748" rx="44" ry="21" fill="#D4C4A0" fillOpacity="0.14" />

        {/* TIER 5 — ~y=645 */}
        <g stroke="#D4C4A0" strokeOpacity="0.22" strokeWidth="2.0" fill="none" strokeLinecap="round">
          <path className="pl t5l" pathLength="1" strokeDashoffset="1"
            d="M 1180,645 C 1138,616 1056,610 926,646" />
          <path className="pl t5r" pathLength="1" strokeDashoffset="1"
            d="M 1182,645 C 1224,616 1306,610 1434,646" />
        </g>
        <ellipse className="fc f1" cx="926"  cy="640" rx="42" ry="20" fill="#D4C4A0" fillOpacity="0.15" />
        <ellipse className="fc f2" cx="1434" cy="640" rx="40" ry="20" fill="#D4C4A0" fillOpacity="0.15" />

        {/* TIER 4 — ~y=545 */}
        <g stroke="#D4C4A0" strokeOpacity="0.22" strokeWidth="1.9" fill="none" strokeLinecap="round">
          <path className="pl t4l" pathLength="1" strokeDashoffset="1"
            d="M 1180,545 C 1142,518 1068,514 964,546" />
          <path className="pl t4r" pathLength="1" strokeDashoffset="1"
            d="M 1182,545 C 1220,518 1294,514 1398,546" />
        </g>
        <ellipse className="fc f5" cx="964"  cy="540" rx="38" ry="18" fill="#B4B09A" fillOpacity="0.16" />
        <ellipse className="fc f6" cx="1398" cy="540" rx="36" ry="18" fill="#B4B09A" fillOpacity="0.16" />

        {/* TIER 3 — ~y=452 */}
        <g stroke="#D4C4A0" strokeOpacity="0.23" strokeWidth="1.7" fill="none" strokeLinecap="round">
          <path className="pl t3l" pathLength="1" strokeDashoffset="1"
            d="M 1180,452 C 1146,428 1082,424 1002,450" />
          <path className="pl t3r" pathLength="1" strokeDashoffset="1"
            d="M 1182,452 C 1216,428 1280,424 1360,450" />
        </g>
        <ellipse className="fc f7" cx="1002" cy="446" rx="34" ry="16" fill="#D4C4A0" fillOpacity="0.17" />
        <ellipse className="fc f8" cx="1360" cy="446" rx="32" ry="16" fill="#D4C4A0" fillOpacity="0.17" />

        {/* TIER 2 — ~y=365 */}
        <g stroke="#D4C4A0" strokeOpacity="0.24" strokeWidth="1.5" fill="none" strokeLinecap="round">
          <path className="pl t2l" pathLength="1" strokeDashoffset="1"
            d="M 1180,365 C 1150,344 1098,342 1042,362" />
          <path className="pl t2r" pathLength="1" strokeDashoffset="1"
            d="M 1182,365 C 1212,344 1264,342 1318,362" />
        </g>
        <ellipse className="fc f9"  cx="1042" cy="358" rx="28" ry="13" fill="#B4B09A" fillOpacity="0.18" />
        <ellipse className="fc f10" cx="1318" cy="358" rx="26" ry="13" fill="#B4B09A" fillOpacity="0.18" />

        {/* TIER 1 — ~y=288 */}
        <g stroke="#D4C4A0" strokeOpacity="0.24" strokeWidth="1.3" fill="none" strokeLinecap="round">
          <path className="pl t1l" pathLength="1" strokeDashoffset="1"
            d="M 1180,288 C 1156,270 1118,270 1086,284" />
          <path className="pl t1r" pathLength="1" strokeDashoffset="1"
            d="M 1182,288 C 1206,270 1244,270 1276,284" />
        </g>
        <ellipse className="fc f11" cx="1086" cy="280" rx="20" ry="10" fill="#D4C4A0" fillOpacity="0.20" />
        <ellipse className="fc f12" cx="1276" cy="280" rx="20" ry="10" fill="#D4C4A0" fillOpacity="0.20" />

        {/* CROWN — top tuft */}
        <path className="pl t0" pathLength="1" strokeDashoffset="1"
          d="M 1181,248 C 1178,220 1180,196 1180,178"
          stroke="#D4C4A0" strokeOpacity="0.24" strokeWidth="1.2" fill="none" strokeLinecap="round"
        />
        <ellipse className="fc f13" cx="1180" cy="168" rx="18" ry="24" fill="#D4C4A0" fillOpacity="0.22" />

      </g>{/* end .canopy */}

      {/* ─── ATMOSPHERIC LAYERS (drawn on top) ─── */}

      {/* Ground fog band */}
      <rect className="fog" x="0" y="780" width="1600" height="120" fill="url(#fogGrad)" />

      {/* Right-edge fade so tree feels like it's emerging */}
      <rect width="1600" height="900" fill="url(#fadeR)" />

      {/* Faint horizontal mist streak across midground */}
      <rect x="0" y="820" width="1600" height="18"
        fill="#D4C4A0" fillOpacity="0.04"
        style={{ filter: "blur(6px)" }}
      />
    </svg>
  );
}
