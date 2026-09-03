import { hero, profile } from "../content/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-graphite-line bg-graphite text-graphite-text"
    >
      <svg
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[520px] opacity-[0.15] lg:block"
        viewBox="0 0 560 640"
        fill="none"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <line
              x1="80"
              y1={100 + i * 100}
              x2="500"
              y2={100 + i * 100}
              stroke="#5B8AA6"
              strokeWidth="1"
            />

            <rect
              x="72"
              y={94 + i * 100}
              width="12"
              height="12"
              stroke="#E8A23D"
              fill="none"
            />

            <rect
              x="494"
              y={94 + i * 100}
              width="12"
              height="12"
              stroke="#5B8AA6"
              fill="none"
            />
          </g>
        ))}

        <line
          x1="78"
          y1="100"
          x2="78"
          y2="500"
          stroke="#5B8AA6"
          strokeWidth="1"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 md:px-10 md:py-36">
        <p className="drawing-label text-graphite-muted">
          <span className="mr-2 text-blueprint">◆</span>
          {profile.location}
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-5 max-w-3xl font-display text-xl text-graphite-text/90 sm:text-2xl md:text-3xl">
          {profile.role}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite-muted sm:text-lg">
          {hero.supportingText}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center border border-blueprint bg-blueprint px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-graphite-text transition-colors hover:bg-blueprint-deep"
          >
            {hero.primaryCta.label}
          </a>

          {hero.secondaryCtas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              target={cta.href.startsWith("http") ? "_blank" : undefined}
              rel={cta.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center justify-center border border-graphite-line px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-graphite-text transition-colors hover:border-blueprint hover:text-blueprint"
            >
              {cta.label}
            </a>
          ))}

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-3 py-3 font-mono text-xs uppercase tracking-[0.12em] text-graphite-muted underline decoration-graphite-line underline-offset-4 transition-colors hover:text-blueprint sm:justify-start"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}