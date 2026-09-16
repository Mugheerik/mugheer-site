import SectionHeading from "../components/SectionHeading";

import {
  flagshipProject,
  otherProjects,
} from "../content/projects";

export default function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-6xl px-6 py-20 sm:py-24 md:px-10"
    >
      <SectionHeading
        figure="03"
        title="Selected Work"
        eyebrow="Projects"
        description="A selection of backend, full-stack, and data-focused projects demonstrating practical software engineering experience."
      />

      <div className="bracket-frame mt-12 block border border-line-strong bg-graphite p-6 text-graphite-text sm:p-8 md:mt-14 md:p-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="drawing-label text-blueprint">
            Flagship Engineering Project
          </span>

          <span className="status-tag w-fit border-blueprint text-blueprint">
            {flagshipProject.status}
          </span>
        </div>

        <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {flagshipProject.name}
        </h3>

        <p className="mt-3 font-mono text-xs leading-relaxed text-graphite-muted sm:text-sm">
          {flagshipProject.tagline}
        </p>

        <p className="mt-6 max-w-3xl leading-relaxed text-graphite-muted">
          {flagshipProject.description}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2">
          {flagshipProject.tech.map((tech) => (
            <li
              key={tech}
              className="border border-graphite-line px-2.5 py-1 font-mono text-[0.7rem] text-graphite-muted sm:text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          {flagshipProject.github && (
            <a
              href={flagshipProject.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center border border-blueprint px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-graphite-text transition-colors hover:bg-blueprint hover:text-graphite"
            >
              View TeamFlow on GitHub →
            </a>
          )}
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-4">
          <p className="drawing-label">Other Projects</p>

          <div className="h-px flex-1 bg-line" />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {otherProjects.map((project) => (
            <article
              key={project.id}
              className="bracket-frame flex h-full flex-col border border-line-strong bg-paper p-6 transition-colors hover:border-blueprint sm:p-7"
            >
              <p className="drawing-label text-blueprint">
                {project.tagline}
              </p>

              <h4 className="mt-4 font-display text-xl font-semibold text-ink sm:text-2xl">
                {project.name}
              </h4>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="border border-line-strong px-2 py-1 font-mono text-[0.68rem] text-ink-muted"
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
                  className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.1em] text-blueprint hover:underline"
                >
                  View Project →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}