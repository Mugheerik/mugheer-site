import SectionHeading from "../components/SectionHeading";
import { flagshipProject, otherProjects } from "../content/projects";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading
        figure="03"
        title="Work"
        eyebrow="Projects"
        description="Selected engineering work, ordered by relevance to the platform-engineering direction this site describes."
      />

      <a
        href="#customer360"
        className="bracket-frame group mt-14 block border border-line-strong bg-graphite p-8 text-graphite-text transition-colors md:p-12"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="drawing-label text-blueprint">Flagship Project</span>
          <span className="status-tag border-blueprint text-blueprint">
            {flagshipProject.status}
          </span>
        </div>

        <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {flagshipProject.name}
        </h3>
        <p className="mt-2 font-mono text-sm text-graphite-muted">
          {flagshipProject.tagline}
        </p>

        <p className="mt-6 max-w-2xl leading-relaxed text-graphite-muted">
          {flagshipProject.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {flagshipProject.tech.map((tech) => (
            <li
              key={tech}
              className="border border-graphite-line px-2.5 py-1 font-mono text-xs text-graphite-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-blueprint underline-offset-4 group-hover:underline">
            Read the case study ↓
          </span>
          <a
            href={flagshipProject.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="border border-graphite-line px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite-text transition-colors hover:border-blueprint hover:text-blueprint"
          >
            GitHub
          </a>
        </div>
      </a>

      <div className="mt-16">
        <p className="drawing-label">Other Projects</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="bracket-frame border border-line-strong p-6"
            >
              <p className="drawing-label">{project.tagline}</p>
              <h4 className="mt-3 font-display text-lg font-semibold text-ink">
                {project.name}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="border border-line-strong px-2 py-0.5 font-mono text-[0.7rem] text-ink-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block font-mono text-xs uppercase tracking-[0.1em] text-blueprint hover:underline"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
