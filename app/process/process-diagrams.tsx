export function DiscoverDiagram() {
  const inputs = ["Business goals", "Everyday work", "Current tools"];

  return (
    <div className="process-diagram-inner process-diagram-discover" aria-hidden="true">
      <div className="process-diagram-discover-grid">
        <div className="process-diagram-inputs">
          {inputs.map((label) => (
            <div key={label} className="process-diagram-chip">{label}</div>
          ))}
        </div>
        <div className="process-diagram-connectors" aria-hidden="true">
          <span>→</span>
          <span>→</span>
          <span>→</span>
        </div>
        <div className="process-diagram-mobile-arrow" aria-hidden="true">↓</div>
        <div className="process-diagram-output">
          <p className="process-diagram-output-title">Opportunities worth pursuing</p>
        </div>
      </div>
    </div>
  );
}

export function DesignDiagram() {
  const sections = ["Opportunities & priorities", "Recommended changes", "Implementation approach"];

  return (
    <div className="process-diagram-inner process-diagram-design" aria-hidden="true">
      <p className="process-diagram-design-caption">How the plan is structured</p>
      <div className="process-diagram-plan">
        <p className="process-diagram-plan-title">Growth &amp; systems plan</p>
        <div className="process-diagram-plan-sections">
          {sections.map((section) => (
            <div key={section} className="process-diagram-plan-section">{section}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DeployDiagram() {
  return (
    <div className="process-diagram-inner process-diagram-deploy" aria-hidden="true">
      <p className="process-diagram-deploy-label">Feedback shapes the solution</p>
      <div className="process-diagram-deploy-flow">
        <div className="process-diagram-deploy-step">Build</div>
        <span className="process-diagram-deploy-arrow" aria-hidden="true">→</span>
        <div className="process-diagram-deploy-step process-diagram-deploy-step-accent">Review together</div>
        <span className="process-diagram-deploy-arrow" aria-hidden="true">→</span>
        <div className="process-diagram-deploy-step">Introduce</div>
      </div>
      <div className="process-diagram-deploy-loop" aria-hidden="true">
        <span className="process-diagram-deploy-loop-arrow">←</span>
        <span className="process-diagram-deploy-loop-label">Refine before introduction</span>
      </div>
    </div>
  );
}

export function DriveDiagram() {
  const steps = ["Use the system", "Learn from feedback", "Refine what matters"];

  return (
    <div className="process-diagram-inner process-diagram-drive" aria-hidden="true">
      <div className="process-diagram-drive-flow">
        {steps.map((step, index) => (
          <div key={step} className="process-diagram-drive-item">
            <div className="process-diagram-chip process-diagram-chip-accent">{step}</div>
            {index < steps.length - 1 ? (
              <span className="process-diagram-drive-arrow" aria-hidden="true">→</span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="process-diagram-drive-cycle" aria-hidden="true">
        <span className="process-diagram-drive-cycle-arrow">↺</span>
        <span className="process-diagram-drive-cycle-label">Ongoing cycle</span>
      </div>
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
