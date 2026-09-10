/** Pulse EKG and Advisor gauge marks. Fill with `currentColor`. */

export function PulseMark({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 50) / 56)}
      viewBox="0 0 56 50"
      fill="none"
      aria-hidden
    >
      <path
        d="M 40 9 L 12 9 L 12 43"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 12 27 L 19.5 27 L 22 19 L 25 36 L 27.5 27 L 46 27"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
    </svg>
  );
}

export function AdvisorMark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 56) / 64)}
      viewBox="0 0 64 56"
      fill="none"
      aria-hidden
    >
      <path
        d="M 12.95 45 A 22 22 0 1 1 51.05 45"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity="0.22"
      />
      <path
        d="M 12.95 45 A 22 22 0 0 1 48.35 19.28"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <circle cx="48.35" cy="19.28" r="3" fill="currentColor" />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontFamily="var(--font-space-grotesk), ui-sans-serif, system-ui"
        fontWeight="700"
        fontSize="18"
        fill="currentColor"
      >
        F
      </text>
    </svg>
  );
}
