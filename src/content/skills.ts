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
    id: "languages",
    figure: "01",
    title: "Languages",
    label: "Core",
    tone: "current",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    id: "backend",
    figure: "02",
    title: "Backend Development",
    label: "Primary Focus",
    tone: "current",
    items: [
      "FastAPI",
      "REST APIs",
      "SQLAlchemy",
      "Pydantic",
      "Alembic",
      "JWT",
      "Authentication",
      "RBAC",
    ],
  },
  {
    id: "databases",
    figure: "03",
    title: "Databases & Systems",
    label: "Backend",
    tone: "current",
    items: [
      "PostgreSQL",
      "Redis",
      "SQL",
      "Indexing",
      "Caching",
      "Rate Limiting",
      "Tenant Isolation",
    ],
  },
  {
    id: "quality",
    figure: "04",
    title: "Testing & Development",
    label: "Applied",
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
    figure: "05",
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
    figure: "06",
    title: "Additional Background",
    label: "Supporting",
    items: ["dbt", "ETL / ELT", "Data Modeling", "Power BI", "DAX"],
  },
];
