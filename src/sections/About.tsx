import SectionHeading from "../components/SectionHeading";
import { about } from "../content/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-16">
        <SectionHeading figure="01" title="About" />

        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-ink-muted">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className={i === 0 ? "text-lg text-ink" : ""}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
