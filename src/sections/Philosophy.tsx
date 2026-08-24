import SectionHeading from "../components/SectionHeading";
import { principles } from "../content/philosophy";

export default function Philosophy() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading
        figure="05"
        title="Engineering Philosophy"
        description="A short set of working principles that shape how systems get built here."
      />

      <div className="mt-14 divide-y divide-line border-y border-line">
        {principles.map((principle) => (
          <div
            key={principle.figure}
            className="grid gap-3 py-7 sm:grid-cols-[100px_1fr] sm:gap-8"
          >
            <span className="font-mono text-sm text-ink-faint">
              {principle.figure}
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {principle.title}
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink-muted">
                {principle.statement}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
