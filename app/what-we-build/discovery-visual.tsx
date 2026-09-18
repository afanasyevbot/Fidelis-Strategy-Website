export function DiscoveryVisual() {
  const inputs = ["Your goals", "Your processes", "Your tools"];

  return (
    <div className="wwb-discovery" aria-hidden="true">
      <div className="wwb-discovery-layout">
        <div className="wwb-discovery-inputs">
          {inputs.map((label) => (
            <div key={label} className="wwb-discovery-input">{label}</div>
          ))}
        </div>

        <div className="wwb-discovery-connectors" aria-hidden="true">
          <span>→</span>
          <span>→</span>
          <span>→</span>
        </div>

        <div className="wwb-discovery-mobile-arrow" aria-hidden="true">↓</div>

        <div className="wwb-discovery-plan">
          <p className="wwb-discovery-plan-title">A tailored growth &amp; systems plan</p>
          <p className="wwb-discovery-plan-sub">What to improve. What to build. Where to start.</p>
        </div>
      </div>
    </div>
  );
}
