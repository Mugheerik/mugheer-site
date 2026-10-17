export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  note?: string;
  github?: string;
}

export const featuredProjects: Project[] = [
  {
    id: "linkvault",
    name: "LinkVault",
    tagline: "URL Shortening & Analytics API",
    description:
      "A FastAPI service for authenticated URL management and public redirects, using PostgreSQL as the source of truth and Redis for caching and rate limiting.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GitHub Actions",
    ],
    highlights: [
      "JWT-authenticated URL management and click analytics",
      "Redis redirect caching with PostgreSQL fallback when Redis is unavailable",
      "Redis-backed rate limiting, automated tests, and CI",
      "Local benchmark: cached redirects averaged 6.62 ms vs 9.04 ms for PostgreSQL-backed redirects (100 requests; not a production load test)",
    ],
    github: "https://github.com/Mugheerik/LinkVault",
  },
  {
    id: "teamflow",
    name: "TeamFlow",
    tagline: "Multi-Tenant Task Management API",
    description:
      "A modular FastAPI backend for organizations, memberships, projects, and tasks, built around explicit tenant boundaries and server-side authorization.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "GitHub Actions",
    ],
    highlights: [
      "Organization memberships with OWNER, ADMIN, and MEMBER roles",
      "Server-side RBAC and organization-scoped resource access",
      "PostgreSQL persistence, Alembic migrations, and schema integrity",
      "Automated authentication, authorization, and cross-tenant access tests",
    ],
    github: "https://github.com/Mugheerik/TeamFlow",
  },
  {
    id: "doc-service",
    name: "Doc Service",
    tagline: "AI Document Processing Application",
    description:
      "A full-stack application for uploading documents, tracking processing, and reviewing Gemini-generated analysis through a web interface.",
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Gemini API",
      "Docker Compose",
      "GitHub Actions",
    ],
    highlights: [
      "Authenticated PDF, DOCX, and TXT uploads with per-user document ownership",
      "Asynchronous processing with persisted status and analysis results",
      "Gemini-powered document analysis with error status handling",
      "Frontend/backend integration, health checks, automated backend tests, and CI",
    ],
    note: "Runs locally; not publicly deployed. AI analysis requires a valid Gemini API key and available model quota.",
    github: "https://github.com/Mugheerik/doc-service",
  },
];

export const secondaryProjects: Project[] = [
  {
    id: "cv-intelligence",
    name: "CV Intelligence",
    tagline: "AI-Powered CV Analysis",
    description:
      "A containerized full-stack application for CV uploads, text extraction, Gemini-powered feedback, analysis history, and document management.",
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Gemini API",
      "Docker",
    ],
    highlights: [
      "Authenticated document workflows and persisted analysis history",
      "PostgreSQL, migrations, backend tests, and GitHub Actions CI",
    ],
    github: "https://github.com/Mugheerik/CV-Intelligence",
  },
  {
    id: "reliable-notes-api",
    name: "Reliable Notes API",
    tagline: "Backend REST API",
    description:
      "A focused Python API project covering REST endpoints, PostgreSQL persistence, validation, and automated testing.",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pytest"],
    highlights: ["Authenticated API workflows, persistence, and automated tests"],
    github: "https://github.com/Mugheerik/reliable-notes-api",
  },
  {
    id: "healthcare-analytics",
    name: "Healthcare Analytics Dashboard",
    tagline: "Data & Analytics",
    description:
      "An analytics project using Python, PostgreSQL, dbt, and Power BI to transform healthcare data into analytical models and KPI reporting.",
    tech: ["Python", "PostgreSQL", "SQL", "dbt", "Power BI", "DAX"],
    highlights: [],
  },
  {
    id: "stock-market-pipeline",
    name: "Stock Market Analytics Pipeline",
    tagline: "Data Pipeline & Analytics",
    description:
      "A workflow for preparing, transforming, modeling, and visualizing stock market data.",
    tech: ["Python", "SQL", "PostgreSQL", "dbt", "Power BI"],
    highlights: [],
  },
  {
    id: "saas-funnel-analytics",
    name: "SaaS Funnel & Revenue Analytics",
    tagline: "Analytics Engineering",
    description:
      "An analytics project exploring conversion funnels, customer lifecycle, MRR, churn, ARPU, and business KPIs.",
    tech: ["Python", "SQL", "PostgreSQL", "dbt", "Power BI"],
    highlights: [],
  },
  {
    id: "news-broadcast",
    name: "News Broadcast Updates",
    tagline: "Final-Year Mobile Application",
    description:
      "A university final-year project for hyper-local news, content moderation, real-time updates, Firebase services, and AI-assisted video summarization.",
    tech: ["React Native", "Expo", "JavaScript", "Firebase", "Python", "Flask"],
    highlights: [],
  },
];
