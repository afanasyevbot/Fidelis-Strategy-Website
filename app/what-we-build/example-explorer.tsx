import Link from "next/link";

const examples = [
  {
    id: "research",
    label: "Research & information",
    challenge: "Similar information is researched again for each assignment.",
    improvement:
      "A reusable research workflow that organizes relevant information and supports the next piece of work.",
    support: "AI can assist with research and organization, with review built around the task.",
  },
  {
    id: "workflows",
    label: "Customer & team workflows",
    challenge:
      "An inquiry or accepted estimate needs several handoffs before the next person has what they need.",
    improvement:
      "A clearer sequence of steps, shared information, and reminders that help the work move forward.",
    support:
      "The first improvement may be the process itself, supported by automation or connected tools.",
  },
  {
    id: "reporting",
    label: "Reporting & visibility",
    challenge: "Answering an operating question means gathering information from several places.",
    improvement:
      "A focused view of the information needed to understand what requires attention.",
    support: "Start with the decision the report needs to support, then choose the information and tools.",
  },
  {
    id: "applications",
    label: "Applications & connected tools",
    challenge: "An important part of the work does not fit the software already in place.",
    improvement:
      "A portal, internal application, or connection between tools shaped around the actual requirement.",
    support: "Build where it adds value; improve or connect existing software where that is the better fit.",
  },
] as const;

export function ExampleExplorer() {
  return (
    <section className="wwb-examples" aria-labelledby="wwb-examples-heading">
      <div className="wwb-container">
        <h2 id="wwb-examples-heading" className="wwb-examples-heading">
          What could work better in your business?
        </h2>
        <p className="wwb-examples-intro">
          Your systems should fit your business—not force your business to fit the software. That can mean improving the process itself, connecting what already exists, or building something new.
        </p>

        <div className="wwb-explorer">
          {examples.map((example, index) => (
            <input
              key={example.id}
              type="radio"
              name="wwb-example"
              id={`wwb-example-${example.id}`}
              className="wwb-tab-input"
              defaultChecked={index === 0}
            />
          ))}

          <div className="wwb-explorer-tabs" role="tablist" aria-label="Example improvements">
            {examples.map((example) => (
              <label
                key={example.id}
                htmlFor={`wwb-example-${example.id}`}
                className="wwb-tab-btn"
                role="tab"
                aria-controls={`wwb-panel-${example.id}`}
              >
                {example.label}
              </label>
            ))}
          </div>

          <div className="wwb-explorer-panels">
            {examples.map((example, index) => (
              <article
                key={example.id}
                id={`wwb-panel-${example.id}`}
                className={`wwb-panel wwb-panel-${index}`}
                role="tabpanel"
                aria-labelledby={`wwb-example-${example.id}`}
              >
                <div className="wwb-panel-grid">
                  <div className="wwb-panel-block">
                    <h4>Current challenge</h4>
                    <p>{example.challenge}</p>
                  </div>
                  <div className="wwb-panel-arrow" aria-hidden="true">→</div>
                  <div className="wwb-panel-block">
                    <h4>Possible improvement</h4>
                    <p>{example.improvement}</p>
                  </div>
                </div>
                <p className="wwb-panel-support">{example.support}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="wwb-examples-note">
          Illustrative examples. The right approach is determined through discovery.
        </p>

        <Link href="/case-studies/" className="wwb-examples-link">
          See examples of systems I&apos;ve built <span aria-hidden>↗</span>
        </Link>
      </div>
    </section>
  );
}
