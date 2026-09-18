function FlowRow({ items }: { items: string[] }) {
  return (
    <div className="process-flow" aria-hidden="true">
      {items.map((item, index) => (
        <span key={item} className="process-flow-item">
          {index > 0 ? <span className="process-flow-arrow" aria-hidden="true">→</span> : null}
          <span className="process-flow-label">{item}</span>
        </span>
      ))}
    </div>
  );
}

export function DiscoverDiagram() {
  return (
    <div className="process-visual process-visual-discover" aria-hidden="true">
      <div className="process-visual-stack">
        {["Business goals", "Everyday work", "Current tools"].map((label) => (
          <span key={label} className="process-visual-tag">{label}</span>
        ))}
      </div>
      <span className="process-visual-down" aria-hidden="true">↓</span>
      <p className="process-visual-result">Opportunities worth pursuing</p>
    </div>
  );
}

export function DesignDiagram() {
  return (
    <div className="process-visual process-visual-design" aria-hidden="true">
      <p className="process-visual-design-eyebrow">How the plan is structured</p>
      <div className="process-visual-plan">
        <p className="process-visual-plan-title">Growth &amp; systems plan</p>
        <ul className="process-visual-plan-list">
          <li>Opportunities &amp; priorities</li>
          <li>Recommended changes</li>
          <li>Implementation approach</li>
        </ul>
      </div>
    </div>
  );
}

export function DeployDiagram() {
  return (
    <div className="process-visual process-visual-deploy" aria-hidden="true">
      <FlowRow items={["Build", "Review together", "Introduce"]} />
      <p className="process-visual-note">Feedback shapes the solution before introduction.</p>
    </div>
  );
}

export function DriveDiagram() {
  return (
    <div className="process-visual process-visual-drive" aria-hidden="true">
      <FlowRow items={["Use the system", "Learn from feedback", "Refine what matters"]} />
      <p className="process-visual-note">An ongoing cycle, agreed around your needs.</p>
    </div>
  );
}

export function ProcessDiagram({ stage }: { stage: "discover" | "design" | "deploy" | "drive" }) {
  switch (stage) {
    case "discover":
      return <DiscoverDiagram />;
    case "design":
      return <DesignDiagram />;
    case "deploy":
      return <DeployDiagram />;
    case "drive":
      return <DriveDiagram />;
  }
}
