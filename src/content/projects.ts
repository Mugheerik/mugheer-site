export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  note?: string;
}

export const featuredProjects: Project[] = [
  {
    id: "linkvault",
    name: "LinkVault",
    tagline: "URL Shortening & Analytics API",
    description:
      "A backend-focused URL shortening service built as a modular monolith, using PostgreSQL as the source of truth and Redis for redirect caching and rate limiting.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GitHub Actions",
    ],
    features: [
      "JWT-authenticated URL management",
      "Redis redirect caching with PostgreSQL fallback",
      "Redis-backed rate limiting and cache invalidation",
      "Click analytics with daily aggregation",
      "Automated tests and GitHub Actions CI",
      "Locally benchmarked PostgreSQL and Redis redirect paths",
    ],
    github: "https://github.com/Mugheerik/LinkVault",
  },
  {
    id: "teamflow",
    name: "TeamFlow",
    tagline: "Multi-Tenant Task Management API",
    description:
      "A multi-tenant task management API focused on organization-scoped resources, server-side authorization, and secure backend design.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "GitHub Actions",
    ],
    features: [
      "Organization and membership management",
      "OWNER, ADMIN, and MEMBER role-based access control",
      "Server-side authorization and tenant data isolation",
      "PostgreSQL persistence and Alembic migrations",
      "Automated API and cross-tenant authorization tests",
    ],
    github: "https://github.com/Mugheerik/TeamFlow",
  },
  {
    id: "doc-service",
    name: "Doc Service",
    tagline: "AI Document Processing Application",
    description:
      "A full-stack application for uploading documents, tracking asynchronous processing, and reviewing Gemini-generated analysis. Runs locally with Docker Compose and is not publicly deployed.",
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
    features: [
      "Authenticated PDF, DOCX, and TXT uploads",
      "User-level document ownership and access control",
      "Background processing with persisted status and results",
      "Gemini-powered document analysis",
      "Integrated frontend, backend, and PostgreSQL workflow",
      "Container health checks, automated tests, and CI",
    ],
    github: "https://github.com/Mugheerik/doc-service",
    note: "Runs locally; no public demo is available.",
  },
];

export const secondaryProjects: Project[] = [
  {
    id: "cv-intelligence",
    name: "CV Intelligence",
    tagline: "AI-Powered CV Analysis",
    description:
      "A full-stack application for uploading CVs, extracting content, generating AI-powered feedback, and reviewing analysis history.",
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Gemini API",
      "Docker",
    ],
    features: [
      "Authentication and document management",
      "Text extraction and AI analysis",
      "Persistent analysis history",
      "Dockerized development and GitHub Actions CI",
    ],
    github: "https://github.com/Mugheerik/CV-Intelligence",
  },
  {
    id: "reliable-notes-api",
    name: "Reliable Notes API",
    tagline: "Backend API",
    description:
      "A focused REST API project covering authenticated note management, PostgreSQL persistence, validation, automated tests, and maintainable backend structure.",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pytest"],
    features: ["Authenticated API", "Relational persistence", "Automated tests"],
    github: "https://github.com/Mugheerik/reliable-notes-api",
  },
  {
    id: "healthcare-analytics",
    name: "Healthcare Analytics Dashboard",
    tagline: "Data & Analytics",
    description:
      "A data analytics project using Python, PostgreSQL, dbt, and Power BI to transform healthcare data into analytical models and KPI reporting.",
    tech: ["Python", "PostgreSQL", "SQL", "dbt", "Power BI", "DAX"],
    features: ["Data transformation", "Analytical modeling", "KPI reporting"],
  },
  {
    id: "stock-market-pipeline",
    name: "Stock Market Analytics Pipeline",
    tagline: "Data Pipeline & Analytics",
    description:
      "A data workflow covering preparation, transformation, modeling, and visualization of stock market trends and performance metrics.",
    tech: ["Python", "SQL", "PostgreSQL", "dbt", "Power BI"],
    features: ["Data preparation", "Transformation", "Visualization"],
  },
  {
    id: "saas-funnel-analytics",
    name: "SaaS Funnel & Revenue Analytics",
    tagline: "Analytics Engineering",
    description:
      "An analytics project focused on customer lifecycle, conversion funnels, and revenue metrics including MRR, churn, and ARPU.",
    tech: ["Python", "SQL", "PostgreSQL", "dbt", "Power BI"],
    features: ["Funnel analysis", "Revenue metrics", "Business KPIs"],
  },
  {
    id: "news-broadcast",
    name: "News Broadcast Updates",
    tagline: "Final-Year Mobile Application",
    description:
      "A community-driven hyper-local news platform developed as a BS Software Engineering final-year project, with location-based news, content moderation, Firebase services, and AI-assisted video summarization.",
    tech: ["React Native", "Expo", "JavaScript", "Firebase", "Python", "Flask"],
    features: [
      "Location-based community news",
      "Content moderation",
      "Firebase-backed application services",
      "AI-assisted video summarization",
    ],
  },
];
