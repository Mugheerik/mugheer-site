# Mugheer Islam Khattak — Personal Engineering Website (V1)

A frontend-only personal site built with **React + TypeScript + Vite +
Tailwind CSS**. No backend, database, auth, or CMS — all content is local
and static, editable directly in source files.

---

## 1. Project structure

```
src/
├── components/        Reusable UI (Nav, Footer, SectionHeading)
├── sections/           One file per page section (Hero, About, Work, ...)
├── content/             ← EDIT HERE for text/data changes
│   ├── profile.ts        Name, role, contact links, hero copy, nav, about
│   ├── projects.ts       Customer360 + other projects, architecture, practices
│   ├── skills.ts         Engineering Focus categories
│   ├── philosophy.ts     Engineering Philosophy principles
│   └── timeline.ts       Career Direction stages + Engineering Lab areas
├── App.tsx              Assembles all sections in order
├── main.tsx              App entry point
└── index.css             Design tokens (colors, fonts) + base styles
public/
├── favicon.svg, og-cover.svg, robots.txt, sitemap.xml
└── Mugheer_Islam_Khattak_Resume.pdf   ← ADD THIS FILE (see §5)
```

Content is intentionally separated from UI components, so future updates
(new project, new skill, tweaked copy) only require editing a file in
`src/content/`, never the component markup.

---

## 2. Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

---

## 3. Build for production

```bash
npm run build      # type-checks, then builds to dist/
npm run preview    # serve the production build locally to sanity-check it
```

Other useful scripts:

```bash
npm run lint          # ESLint
npm run typecheck     # TypeScript, no emit
npm run format         # Prettier — write
npm run format:check  # Prettier — check only
```

All four currently pass with zero errors/warnings.

---

## 4. Editable content files

| File                        | Controls                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| `src/content/profile.ts`    | Name, email, GitHub, LinkedIn, hero text, nav links, About paragraphs                      |
| `src/content/projects.ts`   | Customer360 details, architecture layers, practices, future direction, other project cards |
| `src/content/skills.ts`     | Engineering Focus categories and their Current/Developing/Exploring labels                 |
| `src/content/philosophy.ts` | The five Engineering Philosophy principles                                                 |
| `src/content/timeline.ts`   | Career Direction stages and Engineering Lab area cards                                     |

Colors and fonts live in `src/index.css` under the `@theme` block if you
ever want to adjust the visual system.

---

## 5. Add the resume

The Resume section links to:

```
/public/Mugheer_Islam_Khattak_Resume.pdf
```

Drop your actual PDF at that exact path (same filename) and the
"Download Resume" button works immediately — no code changes needed.
A placeholder note (`public/README_RESUME_PLACEHOLDER.txt`) marks the
spot; delete it once the real file is in place.

---

## 6. Links to double-check before deploying

- **LinkedIn** — already set to the URL you provided:
  `https://www.linkedin.com/in/mugheer-islam-khattak-7a1ab831b/`
  Update in `src/content/profile.ts` if it ever changes.
- **Customer360 GitHub link** — set to
  `https://github.com/Mugheerik/customer360-platform` in
  `src/content/projects.ts`. Update if the repo name/URL differs.
- **Canonical / OG URL** — `index.html` and `public/sitemap.xml` currently
  point to `https://mugheerislamkhattak.dev/` as a placeholder domain.
  Replace with your real deployed domain once you have one.
- Other project cards (Healthcare Analytics, Stock Market Pipeline, SaaS
  Funnel Analytics) have no GitHub link yet since none was provided — add
  one in `src/content/projects.ts` if/when a repo exists.

---

## 7. Deploy as a static site

The production build in `dist/` is plain static HTML/CSS/JS — deploy it
anywhere that serves static files:

**Vercel / Netlify (recommended, zero-config)**

1. Push this repo to GitHub.
2. Import it in Vercel or Netlify.
3. Build command: `npm run build` — Output directory: `dist`.

**GitHub Pages**

1. `npm run build`
2. Deploy the `dist/` folder to the `gh-pages` branch (e.g. with the
   `gh-pages` npm package, or GitHub Actions).

**Any static host (S3, Cloudflare Pages, etc.)**
Just upload the contents of `dist/` after running `npm run build`.

---

## 8. What's intentionally not here (by design, per V1 scope)

No backend, database, authentication, CMS, admin panel, blog backend,
contact API, AI chatbot, analytics, user accounts, Kubernetes, or
microservices. All copy is real content you provided or clearly-marked
placeholders — nothing was fabricated (no invented employers, clients,
awards, statistics, or live URLs).
