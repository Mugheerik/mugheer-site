import { hero, profile } from "../content/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-graphite-line bg-graphite text-graphite-text"
    >
      {/* Signature schematic: layered connector lines echoing the
          Customer360 architecture diagram, rendered as a quiet watermark. */}
      <svg
        className="pointer-events-none absolute -right-24 top-0 hidden h-full w-[560px] opacity-[0.16] lg:block"
        viewBox="0 0 560 640"
        fill="none"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <line
              x1="120"
              y1={80 + i * 96}
              x2="520"
              y2={80 + i * 96}
              stroke="#5B8AA6"
              strokeWidth="1"
            />
            <rect
              x="112"
              y={80 + i * 96 - 6}
              width="12"
              height="12"
              stroke="#E8A23D"
              fill="none"
            />
            <rect
              x="512"
              y={80 + i * 96 - 6}
              width="12"
              height="12"
              stroke="#5B8AA6"
              fill="none"
            />
          </g>
        ))}
        <line
          x1="118"
          y1="80"
          x2="118"
          y2="560"
          stroke="#5B8AA6"
          strokeWidth="1"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <p className="drawing-label text-graphite-muted">
          <span className="text-blueprint">■</span> Abbottabad, Pakistan
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-5 max-w-2xl font-display text-xl text-graphite-text/90 sm:text-2xl">
          {profile.role}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite-muted">
          {hero.supportingText}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="border border-blueprint bg-blueprint px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-graphite-text transition-colors hover:bg-blueprint-deep"
          >
            {hero.primaryCta.label}
          </a>
          {hero.secondaryCtas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              target={cta.href.startsWith("http") ? "_blank" : undefined}
              rel={cta.href.startsWith("http") ? "noreferrer" : undefined}
              className="border border-graphite-line px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-graphite-text transition-colors hover:border-blueprint hover:text-blueprint"
            >
              {cta.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-[0.12em] text-graphite-muted underline decoration-graphite-line underline-offset-4 transition-colors hover:text-blueprint"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
