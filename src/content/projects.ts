export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
  note?: string;
}

export const featuredProjects: Project[] = [
  {
    id: "envirotrack",
    name: "EnviroTrack",
    tagline: "Reliable Environmental Data Platform",
    description:
      "An automated weather-data pipeline that ingests forecast data from Open-Meteo, preserves raw responses, validates and normalizes hourly records, and loads structured data into PostgreSQL. A live dashboard presents pipeline outputs and data-quality information.",
    tech: [
      "Python",
      "SQL",
      "PostgreSQL",
      "Open-Meteo API",
      "Streamlit",
      "Plotly",
      "Docker",
      "pytest",
    ],
    features: [
      "Raw JSON snapshots for traceability and reproducibility",
      "Validation and normalization of hourly forecast records",
      "Idempotent incremental PostgreSQL upserts",
      "Pipeline-run tracking, data-quality metrics, and freshness checks",
      "Request timeouts, retry handling, and automated tests",
      "Hosted PostgreSQL database and deployed Streamlit dashboard",
      "Scheduled ingestion using Windows Task Scheduler",
    ],
    github: "https://github.com/Mugheerik/EnviroTrack",
    demo: "https://envirotrack-abbottabad.streamlit.app/",
  },
  {
    id: "healthcare-analytics",
    name: "Healthcare Analytics Platform",
    tagline: "Analytics Engineering & BI",
    description:
      "A healthcare analytics project combining Python-based data preparation, PostgreSQL, dbt transformations, dimensional modeling, and Power BI reporting.",
    tech: ["Python", "Pandas", "PostgreSQL", "SQL", "dbt", "Power BI", "DAX"],
    features: [
      "Organizes analytical data around admissions, patients, hospitals, and dates",
      "Uses fact and dimension tables for healthcare KPI analysis",
      "Includes reporting for admissions, length of stay, billing, and patient metrics",
    ],
    github: "https://github.com/Mugheerik/healthcare-analytics-platform",
  },
  {
    id: "stock-market-pipeline",
    name: "Stock Market Analytics Pipeline",
    tagline: "Data Transformation & Reporting",
    description:
      "A data workflow that prepares and models stock-related datasets for analysis, using Python, PostgreSQL, dbt, SQL, and Power BI.",
    tech: ["Python", "SQL", "PostgreSQL", "dbt", "Power BI"],
    features: [
      "Python-based data preparation and structured PostgreSQL storage",
      "dbt transformations for analytical outputs",
      "Stock summaries and sector-level aggregates",
      "Power BI dashboards for stock and sector performance",
    ],
    github: "https://github.com/Mugheerik/stock-market-analytics-pipeline",
  },
  {
    id: "saas-funnel-analytics",
    name: "SaaS Funnel & Revenue Analytics",
    tagline: "Analytics Engineering",
    description:
      "An analytics project focused on subscription performance, revenue, customer activity, churn, and funnel conversion.",
    tech: ["Python", "SQL", "PostgreSQL", "dbt", "Power BI"],
    features: [
      "Fact and dimension models for subscription and customer activity",
      "Metrics including MRR, revenue growth, active customers, ARPU, and churn",
      "Funnel conversion and business KPI reporting",
    ],
    github: "https://github.com/Mugheerik/saas-funnel-analytics",
  },
];

export const secondaryProjects: Project[] = [
  {
    id: "customer360",
    name: "Customer360",
    tagline: "Customer Management Platform",
    description:
      "A full-stack customer management application for records, notes, tasks, and activity history, built with a FastAPI backend, React frontend, and PostgreSQL.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Docker",
    ],
    features: [
      "JWT authentication and role-based authorization",
      "Relational persistence and database migrations",
      "Automated tests, Docker, and GitHub Actions CI",
    ],
    github: "https://github.com/Mugheerik/customer360-platform",
  },
  {
    id: "teamflow",
    name: "TeamFlow",
    tagline: "Multi-Tenant Task Management API",
    description:
      "A backend API for organizations, memberships, projects, and tasks, focused on organization-scoped resources and secure server-side authorization.",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "pytest", "Docker"],
    features: [
      "Owner, Admin, and Member role-based access control",
      "Tenant-aware data access, constraints, and indexes",
      "Cross-tenant authorization tests and GitHub Actions CI",
    ],
    github: "https://github.com/Mugheerik/TeamFlow",
  },
  {
    id: "doc-service",
    name: "Doc Service",
    tagline: "AI-Assisted Document Processing",
    description:
      "An application for authenticated PDF, DOCX, and TXT uploads, asynchronous processing, and Gemini-powered analysis.",
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Gemini API",
      "Docker Compose",
    ],
    features: [
      "Document text extraction and processing-status tracking",
      "PostgreSQL persistence and user-level resource ownership",
      "Migrations, health checks, automated tests, and CI",
    ],
    github: "https://github.com/Mugheerik/doc-service",
    note: "Runs locally; no public demo is available.",
  },
  {
    id: "linkvault",
    name: "LinkVault",
    tagline: "URL Shortening & Analytics API",
    description:
      "A URL-shortening service with authenticated link management, PostgreSQL persistence, Redis caching, rate limiting, and click analytics.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    features: [
      "Authenticated URL management and expiration",
      "Redis redirect caching with PostgreSQL fallback",
      "Rate limiting, cache invalidation, and automated tests",
    ],
    github: "https://github.com/Mugheerik/LinkVault",
  },
  {
    id: "news-broadcast",
    name: "News Broadcast Updates",
    tagline: "Final-Year Mobile Application",
    description:
      "A community-driven local news application developed as a team university project, with community submissions, administrator moderation, Firebase services, and AI-assisted video summarization.",
    tech: ["React Native", "Expo", "Firebase", "Cloud Firestore", "Python", "Flask"],
    features: [
      "Community-submitted local news",
      "Administrator content moderation",
      "Firebase-backed application services",
      "AI-assisted video summarization",
    ],
    github: "https://github.com/Mugheerik/newsbroadcast",
  },
];
