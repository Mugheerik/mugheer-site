export interface TimelineStage {
  label: string;
  status: "current" | "developing" | "direction";
}

export const careerStages: TimelineStage[] = [
  { label: "Backend Software Engineering", status: "current" },
  { label: "Backend & Infrastructure Engineering", status: "developing" },
  { label: "Distributed Systems Engineering", status: "direction" },
  { label: "Cloud & AI Infrastructure Architecture", status: "direction" },
];

export interface LabArea {
  title: string;
  description: string;
}

export const labAreas: LabArea[] = [
  {
    title: "Cloud Infrastructure",
    description: "Building practical cloud and production engineering skills.",
  },
  {
    title: "Distributed Systems",
    description: "Learning system behavior, failure modes, and coordination.",
  },
  {
    title: "AI Infrastructure",
    description: "Exploring reliable infrastructure for AI-enabled applications.",
  },
];
