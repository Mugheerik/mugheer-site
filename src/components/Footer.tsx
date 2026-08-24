import { profile } from "../content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-graphite-line bg-graphite text-graphite-text">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold">{profile.name}</p>
            <p className="mt-2 max-w-sm text-sm text-graphite-muted">
              Software Engineer building toward Platform &amp; Intelligent
              Systems Engineering
            </p>
          </div>

          <ul className="flex gap-6 font-mono text-xs uppercase tracking-[0.12em] text-graphite-muted">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-graphite-text"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-graphite-text"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="transition-colors hover:text-graphite-text"
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-graphite-line pt-6 text-xs text-graphite-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}</p>
          <p className="font-mono">
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
