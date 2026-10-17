import SectionHeading from "../components/SectionHeading";
import { featuredProjects, secondaryProjects } from "../content/projects";

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof featuredProjects)[number] | (typeof secondaryProjects)[number];
  featured?: boolean;
}) {
  return (
    <article
      className={`bracket-frame flex h-full flex-col border border-line-strong bg-paper p-6 transition-colors hover:border-blueprint sm:p-7 ${
        featured ? "bg-paper" : ""
      }`}
    >
      <p className="drawing-label text-blueprint">{project.tagline}</p>
      <h3 className="mt-4 font-display text-xl font-semibold text-ink sm:text-2xl">
        {project.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="border border-line-strong px-2 py-1 font-mono text-[0.68rem] text-ink-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.highlights.length > 0 && (
        <ul className="mt-5 space-y-2 text-sm leading-relaxed text-ink-muted">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="text-blueprint" aria-hidden="true">—</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {project.note && (
        <p className="mt-4 border-l-2 border-signal pl-3 text-xs leading-relaxed text-ink-muted">
          {project.note}
        </p>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.1em] text-blueprint hover:underline"
        >
          View Repository →
        </a>
      )}
    </article>
  );
}

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
        description="Completed applications demonstrating backend APIs, data ownership, caching, authorization, automated testing, and full-stack integration."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className={project.id === "linkvault" ? "lg:col-span-2" : ""}
          >
            <ProjectCard project={project} featured />
          </div>
        ))}
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-4">
          <p className="drawing-label">Additional Projects</p>
          <div className="h-px flex-1 bg-line" />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
