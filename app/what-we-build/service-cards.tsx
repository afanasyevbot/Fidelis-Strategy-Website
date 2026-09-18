import Link from "next/link";

const cards = [
  {
    title: "Growth & AI strategy",
    body:
      "I learn how your business runs, identify opportunities to grow or work more efficiently, and bring the recommendations into a tailored growth and systems plan.",
    support: "Priorities, recommended changes, and an implementation direction.",
    motif: (
      <div className="wwb-motif-row" aria-hidden="true">
        <span className="wwb-motif-chip">Business goals</span>
        <span className="wwb-motif-chip">Daily work</span>
        <span className="wwb-motif-chip">Opportunities</span>
        <span className="wwb-motif-arrow">→</span>
        <span className="wwb-motif-chip wwb-motif-chip-accent">The plan</span>
      </div>
    ),
  },
  {
    title: "Custom systems & integrations",
    body:
      "I build custom applications, connect existing tools, and automate the right parts of the workflow. The approach follows the business need, not a predetermined software package.",
    support: "Research tools, portals, reporting, integrations, and automation.",
    motif: (
      <div className="wwb-motif-row" aria-hidden="true">
        <span className="wwb-motif-chip">Existing tools</span>
        <span className="wwb-motif-arrow">→</span>
        <span className="wwb-motif-chip wwb-motif-chip-accent">Custom system</span>
      </div>
    ),
  },
  {
    title: "Continued improvement",
    body:
      "Once the system is in use, we refine the workflow, adjust features, and develop the next improvements around what your business needs.",
    support: "Ongoing work is agreed around the project.",
    motif: (
      <div className="wwb-motif-row" aria-hidden="true">
        <span className="wwb-motif-chip">Use</span>
        <span className="wwb-motif-arrow">→</span>
        <span className="wwb-motif-chip">Learn</span>
        <span className="wwb-motif-arrow">→</span>
        <span className="wwb-motif-chip wwb-motif-chip-accent">Refine</span>
      </div>
    ),
  },
] as const;

export function ServiceCards() {
  return (
    <section className="wwb-services" aria-labelledby="wwb-services-heading">
      <div className="wwb-container">
        <h2 id="wwb-services-heading" className="wwb-services-heading">
          Strategy, systems, and continued improvement.
        </h2>
        <p className="wwb-services-intro">
          Get help finding the right opportunities, putting the changes into practice, and refining what comes next.
        </p>

        <div className="wwb-service-grid">
          {cards.map((card) => (
            <article key={card.title} className="wwb-service-card">
              <div>
                <h3>{card.title}</h3>
                <p className="wwb-service-card-body mt-3">{card.body}</p>
                <p className="wwb-service-card-support mt-3">{card.support}</p>
              </div>
              <div className="wwb-service-motif">{card.motif}</div>
            </article>
          ))}
        </div>

        <p className="wwb-process-link">
          See how Discover, Design, Deploy, and Drive connect the work.{" "}
          <Link href="/process/">Explore the process</Link>
        </p>
      </div>
    </section>
  );
}
