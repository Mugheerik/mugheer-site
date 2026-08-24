interface SectionHeadingProps {
  figure: string;
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  figure,
  title,
  eyebrow,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`drawing-label flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span>FIG. {figure}</span>
        <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
        <span>{eyebrow ?? title}</span>
      </div>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-ink-muted ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
