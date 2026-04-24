import { Eyebrow } from "./eyebrow";

const points = [
  {
    title: "Decks, not deliverables.",
    body: "Most consultants hand you a strategy PDF and walk away. Implementation becomes your problem.",
  },
  {
    title: "Generic, not grown.",
    body: "Templated playbooks get you a templated business. Your ops, pipeline, and stack deserve custom work.",
  },
  {
    title: "Advice without outcomes.",
    body: "Without the systems to execute, recommendations are just expensive suggestions.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-deep-olive text-bone">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>PROBLEM</Eyebrow>
        <h2 className="font-display text-4xl md:text-[42px] mt-6 tracking-tight max-w-3xl">
          The cost of staying still.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {points.map((p) => (
            <div key={p.title}>
              <h3 className="font-display font-medium text-xl text-linen">{p.title}</h3>
              <p className="font-sans text-[15px] text-bone/80 leading-relaxed mt-3">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
