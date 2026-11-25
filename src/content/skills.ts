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
    id: "languages",
    figure: "01",
    title: "Languages",
    label: "Core",
    tone: "current",
    items: ["Python", "SQL", "TypeScript", "JavaScript"],
  },
  {
    id: "data-engineering",
    figure: "02",
    title: "Data Engineering",
    label: "Primary Focus",
    tone: "current",
    items: [
      "API Ingestion",
      "ETL / ELT",
      "Data Validation",
      "Incremental Processing",
      "Data Quality",
      "Data Modeling",
      "dbt",
      "Pandas",
    ],
  },
  {
    id: "databases",
    figure: "03",
    title: "Databases & Analytics",
    label: "Applied",
    tone: "current",
    items: [
      "PostgreSQL",
      "SQL",
      "Relational Modeling",
      "Database Migrations",
      "Power BI",
      "DAX",
      "Power Query",
    ],
  },
  {
    id: "backend",
    figure: "04",
    title: "Backend Engineering",
    label: "Supporting",
    tone: "supporting",
    items: [
      "FastAPI",
      "REST APIs",
      "SQLAlchemy",
      "Pydantic",
      "Alembic",
      "Authentication",
      "RBAC",
      "Redis",
    ],
  },
  {
    id: "quality",
    figure: "05",
    title: "Testing & Delivery",
    label: "Applied",
    tone: "current",
    items: [
      "pytest",
      "HTTPX",
      "Ruff",
      "Docker",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Linux",
    ],
  },
  {
    id: "visualization",
    figure: "06",
    title: "Visualization & Applications",
    label: "Supporting",
    items: ["Streamlit", "Plotly", "Power BI", "React", "Next.js"],
  },
];
