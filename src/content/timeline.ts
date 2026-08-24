export interface TimelineStage {
  label: string;
  status: "current" | "developing" | "direction";
}

export const careerStages: TimelineStage[] = [
  { label: "Software Engineering", status: "current" },
  { label: "Backend Engineering", status: "current" },
  { label: "Data & Analytics Engineering", status: "current" },
  { label: "Platform Engineering", status: "developing" },
  { label: "Cloud & Distributed Systems", status: "developing" },
  { label: "Intelligent Systems Engineering", status: "direction" },
];

export interface LabArea {
  title: string;
  description: string;
}

export const labAreas: LabArea[] = [
  {
    title: "Architecture",
    description: "System design notes and structural trade-offs.",
  },
  {
    title: "Cloud",
    description: "Infrastructure experiments and platform fundamentals.",
  },
  {
    title: "Distributed Systems",
    description: "Consistency, coordination, and failure modes.",
  },
  {
    title: "Data Engineering",
    description: "Pipelines, modeling, and data quality practices.",
  },
  {
    title: "AI Systems",
    description: "Applied AI integration inside engineered systems.",
  },
  {
    title: "Automation",
    description: "Workflow tooling and operational automation.",
  },
];
