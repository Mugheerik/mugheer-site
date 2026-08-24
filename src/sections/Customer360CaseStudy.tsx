import SectionHeading from "../components/SectionHeading";
import {
  architectureLayers,
  engineeringPractices,
  flagshipProject,
  futureDirection,
} from "../content/projects";

export default function Customer360CaseStudy() {
  return (
    <section id="customer360" className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionHeading
          figure="04"
          title="Customer360 — Case Study"
          eyebrow="Flagship Project"
          description={flagshipProject.description}
        />

        <div className="mt-14 grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Architecture schematic */}
          <div>
            <p className="drawing-label">Architecture</p>
            <div className="relative mt-6 flex flex-col items-stretch">
              {architectureLayers.map((layer, i) => (
                <div key={layer}>
                  <div className="bracket-frame flex items-center gap-3 border border-line-strong bg-paper px-5 py-4">
                    <span className="font-mono text-xs text-blueprint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-sm font-medium text-ink">
                      {layer}
                    </span>
                  </div>
                  {i < architectureLayers.length - 1 && (
                    <div className="flex justify-start pl-8">
                      <div
                        className="h-6 w-px bg-line-strong"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <p className="drawing-label">Purpose</p>
              <p className="mt-3 leading-relaxed text-ink-muted">
                Customer360 exists to give real engineering practice a home: a
                system built the way an enterprise customer platform would be,
                so that backend engineering, data platforms, cloud
                infrastructure, and automation can be designed, tested, and
                evolved deliberately — not simulated.
              </p>
            </div>

            <div>
              <p className="drawing-label">Engineering Practices</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {engineeringPractices.map((practice) => (
                  <li
                    key={practice}
                    className="border border-line-strong bg-paper px-2.5 py-1 font-mono text-xs text-ink-muted"
                  >
                    {practice}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="drawing-label">Current Status</p>
              <p className="mt-3 leading-relaxed text-ink-muted">
                The backend foundation is established and the web application
                layer is being developed.
              </p>
            </div>

            <div>
              <p className="drawing-label">
                Future Direction{" "}
                <span className="text-ink-faint">— planned, not built</span>
              </p>
              <ul className="mt-3 space-y-2">
                {futureDirection.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-ink-muted"
                  >
                    <span className="h-1 w-1 bg-signal" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={flagshipProject.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-blueprint px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-blueprint transition-colors hover:bg-blueprint hover:text-paper"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
