import SectionHeading from "../components/SectionHeading";
import { labAreas } from "../content/timeline";

export default function EngineeringLab() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading
        figure="07"
        title="Engineering Lab"
        description="This is where I document experiments, architecture explorations, system designs, cloud experiments, and engineering lessons learned while developing toward platform and intelligent systems engineering. This section will grow over time."
      />

      <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {labAreas.map((area) => (
          <div key={area.title} className="flex flex-col bg-paper p-6">
            <h3 className="font-display text-base font-semibold text-ink">
              {area.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
              {area.description}
            </p>
            <span className="drawing-label mt-4 text-ink-faint">
              Coming Soon
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
