export type SkillTone = "current" | "developing";

export interface SkillCategory {
  id: string;

  figure: string;

  title: string;

  label: string;

  tone?: SkillTone;

  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",

    figure: "01",

    title: "Backend Engineering",

    label: "Current",

    tone: "current",

    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Pydantic",
      "Authentication",
      "Authorization",
      "Clean Architecture",
      "Repository Pattern",
      "Service Layer",
      "Dependency Injection",
      "Transaction Management",
      "Automated Testing",
    ],
  },

  {
    id: "frontend",

    figure: "02",

    title: "Frontend & Full-Stack",

    label: "Working With",

    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "React Native",
      "Expo",
    ],
  },

  {
    id: "engineering",

    figure: "03",

    title: "Engineering & DevOps",

    label: "Working With",

    items: [
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Pytest",
      "Ruff",
      "Pre-commit",
      "Dependency Auditing",
      "Semantic Versioning",
      "Linux",
    ],
  },

  {
    id: "data",

    figure: "04",

    title: "Data & Analytics",

    label: "Supporting",

    items: [
      "SQL",
      "PostgreSQL",
      "Python",
      "dbt",
      "Data Modeling",
      "ETL / ELT",
      "Analytics Engineering",
      "Power BI",
      "DAX",
      "Data Transformation",
      "KPI Reporting",
    ],
  },

  {
    id: "cloud",

    figure: "05",

    title: "Cloud & Production",

    label: "Developing",

    tone: "developing",

    items: [
      "Cloud Architecture",
      "AWS",
      "Infrastructure as Code",
      "Platform Engineering",
      "Deployment",
      "Observability",
      "Production Systems",
      "System Design",
    ],
  },

  {
    id: "intelligent",

    figure: "06",

    title: "Distributed & Intelligent Systems",

    label: "Long-Term",

    tone: "developing",

    items: [
      "Distributed Systems",
      "Event-Driven Architecture",
      "Messaging",
      "Workflow Systems",
      "Automation",
      "AI Integration",
      "Intelligent Systems",
    ],
  },
];