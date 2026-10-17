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

export interface LabArea {
  title: string;
  description: string;
}

export const labAreas: LabArea[] = [
  {
    title: "Backend Architecture",
    description: "API design, data ownership, and maintainable application structure.",
  },
  {
    title: "Cloud & Production",
    description: "Cloud fundamentals, deployment practices, and service reliability.",
  },
  {
    title: "Distributed Systems",
    description: "Learning about coordination, consistency, and failure handling.",
  },
  {
    title: "Data Engineering",
    description: "Data pipelines, modeling, and data quality practices.",
  },
  {
    title: "AI Integration",
    description: "Integrating AI APIs into useful, tested application workflows.",
  },
  {
    title: "Automation",
    description: "Development workflows, CI, and operational automation.",
  },
];
