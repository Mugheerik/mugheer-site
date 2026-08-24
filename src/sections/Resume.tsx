import SectionHeading from "../components/SectionHeading";
import { profile } from "../content/profile";

export default function Resume() {
  return (
    <section id="resume" className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionHeading figure="08" title="Resume" />

        <div className="mt-10 flex flex-col items-start gap-6 border border-line-strong bg-paper p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              Mugheer_Islam_Khattak_Resume.pdf
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              Place the file at{" "}
              <code className="font-mono text-xs text-blueprint">
                /public{profile.resumePath}
              </code>{" "}
              to enable this link.
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

        <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.1em] text-ink-muted">
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
