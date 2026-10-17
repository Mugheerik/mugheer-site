export type SkillTone = "current" | "supporting";

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
    title: "Languages & Backend",
    label: "Primary Focus",
    tone: "current",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "FastAPI",
      "REST APIs",
      "SQLAlchemy",
      "Pydantic",
      "Alembic",
      "JWT",
      "RBAC",
    ],
  },
  {
    id: "databases",
    figure: "02",
    title: "Databases & Systems",
    label: "Project Experience",
    tone: "current",
    items: [
      "PostgreSQL",
      "Redis",
      "Database Indexing",
      "Caching",
      "Rate Limiting",
      "Tenant Data Isolation",
    ],
  },
  {
    id: "quality",
    figure: "03",
    title: "Testing & Infrastructure",
    label: "Project Experience",
    tone: "current",
    items: [
      "Pytest",
      "HTTPX",
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Linux",
    ],
  },
  {
    id: "frontend",
    figure: "04",
    title: "Frontend & Integration",
    label: "Full-Stack",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "Gemini API Integration",
    ],
  },
  {
    id: "data",
    figure: "05",
    title: "Additional Background",
    label: "Supporting",
    tone: "supporting",
    items: [
      "dbt",
      "ETL / ELT",
      "Data Modeling",
      "Power BI",
      "DAX",
    ],
  },
];
