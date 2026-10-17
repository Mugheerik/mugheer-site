export interface TimelineStage {
  label: string;
  status: "current" | "developing" | "direction";
}

export const careerStages: TimelineStage[] = [
  {
    label: "Backend & Full-Stack Software Engineering",
    status: "current",
  },
  {
    label: "Backend & Infrastructure Engineering",
    status: "developing",
  },
  {
    label: "Distributed Systems Engineering",
    status: "direction",
  },
  {
    label: "Cloud & AI Infrastructure Architecture",
    status: "direction",
  },
];
