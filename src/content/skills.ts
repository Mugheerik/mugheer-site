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
    id: "data",

    figure: "02",

    title: "Data & Analytics",

    label: "Current",

    tone: "current",

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
    id: "engineering",

    figure: "03",

    title: "Engineering Practices",

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
    id: "frontend",

    figure: "04",

    title: "Frontend & Applications",

    label: "Current",

    tone: "current",

    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "React Native",
      "Expo",
      "Vite",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
    ],
  },

  {
    id: "future",

    figure: "05",

    title: "Cloud & Intelligent Systems",

    label: "Developing",

    tone: "developing",

    items: [
      "Cloud Architecture",
      "AWS",
      "Infrastructure as Code",
      "Platform Engineering",
      "Distributed Systems",
      "Event-Driven Architecture",
      "Workflow Systems",
      "Automation",
      "AI Integration",
      "System Design",
      "Intelligent Systems",
    ],
  },
];