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
  id: "teamflow",

  name: "TeamFlow",

  tagline:
    "Multi-Tenant Project Management API & Backend Engineering System",

  description:
    "A production-oriented backend system built to demonstrate API design, authentication, authorization, PostgreSQL database engineering, migrations, automated testing, Docker-based development, and CI/CD.",

  tech: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Alembic",
    "JWT",
    "Pytest",
    "Docker",
    "GitHub Actions",
  ],

  status: "Current Engineering Project",

  github: "https://github.com/Mugheerik/TeamFlow",
};

export const otherProjects: Project[] = [
  {
    id: "reliable-notes-api",

    name: "Reliable Notes API",

    tagline: "Backend API Engineering",

    description:
      "A focused backend API project built to practice reliable REST API design, PostgreSQL persistence, validation, testing, and maintainable Python backend architecture.",

    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Pytest",
    ],

    github: "https://github.com/Mugheerik",
  },

  {
    id: "linkvault",

    name: "LinkVault",

    tagline: "Backend Application",

    description:
      "A backend-focused application built around persistent data, API design, validation, and practical software engineering patterns.",

    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Pytest",
    ],

    github: "https://github.com/Mugheerik",
  },

  {
    id: "healthcare-analytics",

    name: "Healthcare Analytics Dashboard",

    tagline: "Analytics Engineering",

    description:
      "End-to-end healthcare analytics project using Python, PostgreSQL, dbt, and Power BI to transform healthcare data into structured analytical models and operational KPI reporting.",

    tech: [
      "Python",
      "PostgreSQL",
      "SQL",
      "dbt",
      "Power BI",
      "DAX",
    ],
  },

  {
    id: "stock-market-pipeline",

    name: "Stock Market Analytics Pipeline",

    tagline: "Data Pipeline & Analytics",

    description:
      "Analytics workflow covering data preparation, transformation, modeling, and visualization to analyze stock market trends and performance metrics.",

    tech: [
      "Python",
      "SQL",
      "PostgreSQL",
      "dbt",
      "Power BI",
    ],
  },

  {
    id: "saas-funnel-analytics",

    name: "SaaS Funnel & Revenue Analytics",

    tagline: "Analytics Engineering",

    description:
      "Analytics project focused on customer lifecycle, conversion funnels, revenue performance, and business KPIs including MRR, churn, and ARPU.",

    tech: [
      "Python",
      "SQL",
      "PostgreSQL",
      "dbt",
      "Power BI",
    ],
  },

  {
    id: "news-broadcast",

    name: "News Broadcast Updates",

    tagline: "Final Year Mobile Application",

    description:
      "A community-driven hyper-local news platform developed as a BS Software Engineering final-year project, featuring location-based news, content moderation, real-time updates, Firebase services, and AI-assisted video summarization.",

    tech: [
      "React Native",
      "Expo",
      "JavaScript",
      "Firebase",
      "Python",
      "Flask",
    ],
  },
];