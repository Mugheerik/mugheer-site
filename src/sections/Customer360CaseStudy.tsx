import SectionHeading from "../components/SectionHeading";

import {
  architectureLayers,
  engineeringPractices,
  flagshipProject,
  futureDirection,
} from "../content/projects";

export default function Customer360CaseStudy() {
  return (
    <section
      id="customer360"
      className="border-t border-line bg-paper-dim"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 md:px-10">
        <SectionHeading
          figure="04"
          title="Customer360 — Case Study"
          eyebrow="Flagship Project"
          description={flagshipProject.description}
        />

        <div className="mt-12 grid gap-12 lg:mt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="drawing-label">System Architecture</p>

            <div className="relative mt-6 flex flex-col">
              {architectureLayers.map((layer, index) => (
                <div key={layer}>
                  <div className="bracket-frame flex items-center gap-3 border border-line-strong bg-paper px-4 py-4 sm:px-5">
                    <span className="font-mono text-xs text-blueprint">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-display text-sm font-medium text-ink sm:text-base">
                      {layer}
                    </span>
                  </div>

                  {index < architectureLayers.length - 1 && (
                    <div className="flex justify-start pl-7 sm:pl-8">
                      <div
                        className="h-5 w-px bg-line-strong sm:h-6"
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

              <p className="mt-4 leading-relaxed text-ink-muted">
                Customer360 is a production-oriented customer management
                platform and engineering laboratory. The project focuses on
                building a maintainable business application while practicing
                backend architecture, database engineering, authentication,
                testing, CI/CD, and modern full-stack development.
              </p>
            </div>

            <div>
              <p className="drawing-label">
                Current Capabilities
              </p>

              <div className="mt-4 grid gap-3 text-sm text-ink-muted sm:grid-cols-2">
                <div className="border border-line-strong bg-paper p-4">
                  Authentication & Authorization
                </div>

                <div className="border border-line-strong bg-paper p-4">
                  Customer Management
                </div>

                <div className="border border-line-strong bg-paper p-4">
                  Notes & Tasks
                </div>

                <div className="border border-line-strong bg-paper p-4">
                  Activity Timeline
                </div>

                <div className="border border-line-strong bg-paper p-4">
                  Automated Testing
                </div>

                <div className="border border-line-strong bg-paper p-4">
                  CI & Code Quality
                </div>
              </div>
            </div>

            <div>
              <p className="drawing-label">
                Engineering Practices
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
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
              <p className="drawing-label">
                Current Status
              </p>

              <p className="mt-4 leading-relaxed text-ink-muted">
                The platform currently includes an operational FastAPI backend,
                PostgreSQL persistence layer, authentication and authorization,
                customer management functionality, and a React/TypeScript web
                application. The project continues to evolve through
                production-oriented engineering milestones.
              </p>
            </div>

            <div>
              <p className="drawing-label">
                Future Direction{" "}
                <span className="text-ink-faint">
                  — planned exploration
                </span>
              </p>

              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {futureDirection.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink-muted"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-signal"
                      aria-hidden="true"
                    />

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={flagshipProject.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-blueprint px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-blueprint transition-colors hover:bg-blueprint hover:text-paper"
            >
              View Customer360 on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}