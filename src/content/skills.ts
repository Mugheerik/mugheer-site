// Engineering Focus categories. `tone` drives the visual label:
// "current" | "developing" | undefined (plain / working-with)

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
      "Clean Architecture",
      "Repository Pattern",
      "Service Layer",
      "Dependency Injection",
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
      "dbt",
      "Data Modeling",
      "ETL / ELT",
      "Analytics Engineering",
      "Power BI",
      "DAX",
      "Data Quality",
    ],
  },
  {
    id: "devops",
    figure: "03",
    title: "Engineering & DevOps",
    label: "Working With",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "Ruff",
      "Pytest",
      "Pre-commit",
    ],
  },
  {
    id: "cloud",
    figure: "04",
    title: "Cloud & Platform",
    label: "Developing",
    tone: "developing",
    items: [
      "AWS",
      "Cloud Architecture",
      "Infrastructure as Code",
      "Cloud-Native Engineering",
      "Platform Engineering",
      "Distributed Systems",
    ],
  },
  {
    id: "intelligent-systems",
    figure: "05",
    title: "Systems & Intelligent Systems",
    label: "Exploring",
    tone: "developing",
    items: [
      "Go",
      "Event-Driven Architecture",
      "Workflow Systems",
      "Automation",
      "AI Integration",
      "Intelligent Systems",
      "System Design",
    ],
  },
];
