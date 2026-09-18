import Link from "next/link";

const examples = [
  {
    id: "repeated-work",
    label: "Repeated work",
    situation:
      "Similar research, reports, or information gathering starts from scratch each time.",
    exploration:
      "What can be reused, where AI could assist, and whether a better process or connected system could reduce the repeated effort.",
  },
  {
    id: "customer-follow-through",
    label: "Customer follow-through",
    situation:
      "Following up with a prospect or customer depends on someone remembering the next step.",
    exploration:
      "A clearer approach to follow-up, defined responsibilities, and reminders or connected tools that support the relationship.",
  },
  {
    id: "scattered-information",
    label: "Scattered information",
    situation:
      "Understanding what needs attention means checking several tools, messages, and spreadsheets.",
    exploration:
      "Which information matters, how it should be organized, and whether an existing report, integration, or custom view would help.",
  },
  {
    id: "growth-opportunities",
    label: "Growth opportunities",
    situation:
      "A business wants to take on more customers or introduce a new service, but is unsure what needs to change to support it.",
    exploration:
      "The commercial opportunity, the capacity and processes it needs, and a growth plan with the right supporting systems.",
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
          Your systems should fit your business, not force your business to fit the software. Here are a few examples of what we could explore, from improving everyday work to supporting growth. Your goals and how your business operates shape the recommendation.
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

          <p className="wwb-examples-selector-label" id="wwb-examples-selector-label">
            Examples to explore
          </p>

          <div
            className="wwb-explorer-tabs"
            role="tablist"
            aria-labelledby="wwb-examples-selector-label"
          >
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
                    <h4>Example situation</h4>
                    <p>{example.situation}</p>
                  </div>
                  <div className="wwb-panel-arrow" aria-hidden="true">→</div>
                  <div className="wwb-panel-block">
                    <h4>What we could explore</h4>
                    <p>{example.exploration}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="wwb-examples-note">
          Illustrative examples, not client results.
        </p>

        <p className="wwb-examples-invite">
          Your situation may look different. You don&apos;t need to fit one of these examples, or know what needs to change, to get started.
        </p>

        <Link href="/brief/" className="wwb-examples-link">
          Let&apos;s explore your business <span aria-hidden>↗</span>
        </Link>
      </div>
    </section>
  );
}
