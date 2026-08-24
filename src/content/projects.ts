export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  status?: string;
  github?: string;
  demo?: string;
}

export const flagshipProject: Project = {
  id: "customer360",
  name: "Customer360",
  tagline:
    "Flagship Engineering Project — Enterprise Platform Engineering Laboratory",
  description:
    "Customer360 is a long-term platform engineering laboratory exploring how enterprise customer systems can be designed, tested, deployed, and evolved across backend engineering, data platforms, cloud infrastructure, automation, and intelligent systems.",
  tech: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Alembic",
    "Docker",
    "Pytest",
    "GitHub Actions",
    "React",
    "TypeScript",
  ],
  status: "In Active Development",
  github: "https://github.com/Mugheerik/customer360-platform",
};

export const otherProjects: Project[] = [
  {
    id: "healthcare-analytics",
    name: "Healthcare Analytics Dashboard",
    tagline: "Analytics Engineering",
    description:
      "Analytics solution transforming healthcare datasets into structured analytical models and KPI reporting.",
    tech: ["Python", "PostgreSQL", "dbt", "Power BI"],
  },
  {
    id: "stock-market-pipeline",
    name: "Stock Market Analytics Pipeline",
    tagline: "Data Pipeline",
    description:
      "Analytics pipeline for extracting, transforming, modeling, and visualizing financial data.",
    tech: ["Python", "SQL", "PostgreSQL", "dbt", "Power BI"],
  },
  {
    id: "saas-funnel-analytics",
    name: "SaaS Funnel & Revenue Analytics",
    tagline: "Analytics Engineering",
    description:
      "Analytics project focused on customer lifecycle, funnel, and revenue analysis.",
    tech: ["SQL", "dbt", "Power BI"],
  },
  {
    id: "newsbroadcast",
    name: "NewsBroadcast",
    tagline: "Mobile Application",
    description:
      "Cross-platform mobile application developed as a final-year software engineering project.",
    tech: ["React Native", "Expo", "Firebase"],
  },
];

export const architectureLayers = [
  "Frontend",
  "FastAPI API",
  "Application / Service Layer",
  "Domain",
  "Repository / Data Access",
  "PostgreSQL",
];

export const engineeringPractices = [
  "Clean Architecture",
  "Modular Monolith",
  "Repository Pattern",
  "Service Layer",
  "Dependency Injection",
  "JWT Authentication",
  "Authorization",
  "PostgreSQL",
  "Alembic",
  "Automated Testing",
  "CI/CD",
  "Docker",
];

export const futureDirection = [
  "Platform Services",
  "Workflow Automation",
  "Event-Driven Architecture",
  "Cloud Infrastructure",
  "Analytics",
  "AI-Assisted Business Systems",
];
