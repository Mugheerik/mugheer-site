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
    "Production-Oriented Customer Management Platform & Engineering Laboratory",

  description:
    "A full-stack customer management platform built to demonstrate backend engineering, software architecture, PostgreSQL database engineering, authentication, authorization, automated testing, CI/CD, and modern web application development.",

  tech: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Alembic",
    "React",
    "TypeScript",
    "Docker",
    "Pytest",
    "GitHub Actions",
  ],

  status: "Active Engineering Project",

  github: "https://github.com/Mugheerik/customer360-platform",
};

export const otherProjects: Project[] = [
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

export const architectureLayers = [
  "React Web Application",
  "FastAPI API Layer",
  "Authentication & Authorization",
  "Application / Service Layer",
  "Repository / Data Access",
  "SQLAlchemy ORM",
  "PostgreSQL Database",
];

export const engineeringPractices = [
  "Modular Monolith",
  "Clean Architecture Principles",
  "Repository Pattern",
  "Service Layer",
  "Dependency Injection",
  "JWT Authentication",
  "Role-Based Authorization",
  "Transaction Boundaries",
  "Database Migrations",
  "Automated Testing",
  "CI/CD",
  "Docker Development Environment",
];

export const futureDirection = [
  "Background Processing",
  "Scheduled Jobs",
  "Notifications",
  "External Integrations",
  "Cloud Deployment",
  "Event-Driven Processing",
  "Messaging Infrastructure",
  "Operational Analytics",
  "AI-Assisted Workflows",
];