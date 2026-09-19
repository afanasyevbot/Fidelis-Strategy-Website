import Link from "next/link";

const cards = [
  {
    title: "Growth & AI strategy",
    body:
      "I learn how your business runs, identify opportunities to grow or work more efficiently, and bring the recommendations into a tailored growth and systems plan.",
    support: "Priorities, recommended changes, and an implementation direction.",
  },
  {
    title: "Custom systems & integrations",
    body:
      "I build custom applications, connect existing tools, and automate the right parts of the workflow. The approach follows the business need, not a predetermined software package.",
    support: "Research tools, portals, reporting, integrations, and automation.",
  },
  {
    title: "Continued improvement",
    body:
      "Once the system is in use, we refine the workflow, adjust features, and develop the next improvements around what your business needs.",
    support: "Ongoing work is agreed around the project.",
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
              <h3>{card.title}</h3>
              <p className="wwb-service-card-body mt-3">{card.body}</p>
              <p className="wwb-service-card-support mt-3">{card.support}</p>
            </article>
          ))}
        </div>

        <div className="wwb-method-invite">
          <h3 className="wwb-method-invite-heading">Connected through the Fidelis 4D Method.</h3>
          <p className="wwb-method-invite-body">
            Discover the opportunity. Design the approach. Deploy the solution. Drive continued improvement. The structure stays clear while the recommendations and systems are shaped around your business.
          </p>
          <Link href="/process/" className="wwb-method-invite-link">
            Explore the 4D method <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
