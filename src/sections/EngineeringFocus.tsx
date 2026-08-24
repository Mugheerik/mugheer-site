import SectionHeading from "../components/SectionHeading";
import { skillCategories } from "../content/skills";

export default function EngineeringFocus() {
  return (
    <section id="engineering" className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionHeading
          figure="02"
          title="Engineering Focus"
          description="Not every technology below represents the same level of depth. Labels indicate where each area currently sits."
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-paper p-7">
              <div className="flex items-start justify-between gap-3">
                <span className="drawing-label">FIG. 02.{category.figure}</span>
                <span className="status-tag" data-tone={category.tone}>
                  {category.label}
                </span>
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {category.title}
              </h3>

              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line-strong px-2.5 py-1 font-mono text-xs text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
