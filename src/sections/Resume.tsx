import SectionHeading from "../components/SectionHeading";
import { profile } from "../content/profile";

const certifications = [
  "IBM DevOps & Software Engineering",
  "Google Advanced Data Analytics",
  "Google Business Intelligence",
  "Google Data Analytics",
  "Microsoft Power BI Data Analyst",
  "Google IT Automation with Python",
  "AWS Cloud Practitioner Essentials (course completion)",
];

export default function Resume() {
  return (
    <section id="resume" className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <SectionHeading
          figure="07"
          title="Resume, Education & Certifications"
          description="My academic background and completed professional learning, alongside selected data engineering and software projects."
        />

        <div className="mt-8 flex flex-col items-start gap-6 border border-line-strong bg-paper p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              Data Engineering Resume
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              Mugheer Islam Khattak · PDF
            </p>
          </div>
          <a
            href={profile.resumePath}
            download
            className="shrink-0 border border-blueprint px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-blueprint transition-colors hover:bg-blueprint hover:text-paper"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10 border-l-2 border-blueprint pl-5">
          <p className="drawing-label text-blueprint">Education</p>
          <h3 className="mt-3 font-display text-lg font-semibold text-ink">
            B.S. Software Engineering
          </h3>
          <p className="mt-1 text-sm text-ink-muted">
            COMSATS University Islamabad, Abbottabad Campus · 2021–2025
          </p>
        </div>

        <div className="mt-10">
          <p className="drawing-label text-blueprint">Completed Certifications</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {certifications.map((certification) => (
              <li
                key={certification}
                className="border border-line-strong bg-paper px-4 py-3 text-sm text-ink-muted"
              >
                {certification}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.1em] text-ink-muted">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-line-strong px-4 py-2 transition-colors hover:border-blueprint hover:text-blueprint"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="border border-line-strong px-4 py-2 transition-colors hover:border-blueprint hover:text-blueprint"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="border border-line-strong px-4 py-2 transition-colors hover:border-blueprint hover:text-blueprint"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
