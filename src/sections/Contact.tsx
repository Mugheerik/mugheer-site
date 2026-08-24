import SectionHeading from "../components/SectionHeading";
import { profile } from "../content/profile";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading
        figure="09"
        title="Contact"
        description="The most direct ways to reach me."
      />

      <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
        <a
          href={`mailto:${profile.email}`}
          className="group flex flex-col gap-2 bg-paper p-7 transition-colors hover:bg-paper-dim"
        >
          <span className="drawing-label">Email</span>
          <span className="font-display text-base font-medium text-ink group-hover:text-blueprint">
            {profile.email}
          </span>
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col gap-2 bg-paper p-7 transition-colors hover:bg-paper-dim"
        >
          <span className="drawing-label">GitHub</span>
          <span className="font-display text-base font-medium text-ink group-hover:text-blueprint">
            github.com/Mugheerik
          </span>
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col gap-2 bg-paper p-7 transition-colors hover:bg-paper-dim"
        >
          <span className="drawing-label">LinkedIn</span>
          <span className="font-display text-base font-medium text-ink group-hover:text-blueprint">
            in/mugheer-islam-khattak
          </span>
        </a>
      </div>
    </section>
  );
}
