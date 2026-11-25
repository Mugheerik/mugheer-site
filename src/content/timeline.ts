export interface TimelineStage {
  label: string;
  status: "current" | "developing" | "direction";
}

export const careerStages: TimelineStage[] = [
  {
    label: "Data Engineering & Analytics",
    status: "current",
  },
  {
    label: "Reliable Data Pipelines & Data Quality",
    status: "developing",
  },
  {
    label: "Data Warehousing & Pipeline Orchestration",
    status: "direction",
  },
  {
    label: "Data Infrastructure & Distributed Systems",
    status: "direction",
  },
];

export interface LabArea {
  title: string;
  description: string;
}

export const labAreas: LabArea[] = [
  {
    title: "Data Pipelines",
    description: "API ingestion, incremental processing, validation, and reliable loading.",
  },
  {
    title: "Data Quality",
    description: "Freshness, validation rules, pipeline observability, and trustworthy outputs.",
  },
  {
    title: "Data Warehousing",
    description: "Dimensional modeling, analytical SQL, and structured reporting layers.",
  },
  {
    title: "Orchestration",
    description: "Learning workflow scheduling, dependencies, retries, and operational monitoring.",
  },
  {
    title: "Data Infrastructure",
    description: "Cloud data platforms, storage systems, and scalable data processing foundations.",
  },
  {
    title: "Backend Foundations",
    description: "APIs, relational databases, testing, and service reliability.",
  },
];
