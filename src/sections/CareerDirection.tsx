import SectionHeading from "../components/SectionHeading";
import { careerStages } from "../content/timeline";

const statusLabel: Record<string, string> = {
  current: "Current Focus",
  developing: "Developing",
  direction: "Long-Term Direction",
};

export default function CareerDirection() {
  return (
    <section className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionHeading
          figure="06"
          title="Career Direction"
          description="A real trajectory, not a finished one. Earlier stages are established; later stages are where the effort is going."
        />

        <ol className="mt-16 flex flex-col gap-0 md:flex-row md:items-start md:gap-0">
          {careerStages.map((stage, i) => (
            <li key={stage.label} className="relative flex flex-1 md:flex-col">
              <div className="flex flex-col items-start md:items-center md:text-center">
                <div className="flex items-center gap-3 md:w-full md:flex-col md:gap-3">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border font-mono text-xs ${
                      stage.status === "current"
                        ? "border-blueprint text-blueprint bg-blueprint-soft"
                        : stage.status === "developing"
                          ? "border-signal text-signal bg-signal-soft"
                          : "border-line-strong text-ink-faint"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < careerStages.length - 1 && (
                    <span
                      className="h-6 w-px bg-line-strong md:h-px md:w-full md:flex-1"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className="ml-11 mt-2 pb-8 md:ml-0 md:mt-4 md:px-2 md:pb-0">
                  <p className="font-display text-sm font-semibold text-ink">
                    {stage.label}
                  </p>
                  <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-faint">
                    {statusLabel[stage.status]}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
