/**
 * Simple Discover → Qualify emphasis for the lead-gen showcase.
 * Static motif | no metrics, dashboards, or animation.
 */
export function LeadGenMotif({ className = "" }: { className?: string }) {
  return (
    <div
      className={`lead-gen-motif ${className}`.trim()}
      aria-label="Lead discovery to qualification workflow"
    >
      <span className="lead-gen-from">Discover</span>
      <span className="lead-gen-arrow" aria-hidden="true">→</span>
      <span className="lead-gen-to">Qualify</span>
    </div>
  );
}
