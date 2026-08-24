export interface Principle {
  figure: string;
  title: string;
  statement: string;
}

export const principles: Principle[] = [
  {
    figure: "01",
    title: "Build for evolution",
    statement:
      "Systems should be designed to change without requiring constant architectural rewrites.",
  },
  {
    figure: "02",
    title: "Engineering quality is a feature",
    statement:
      "Testing, documentation, automation, maintainability, and reliability are part of the product.",
  },
  {
    figure: "03",
    title: "Technology should solve problems",
    statement:
      "New technologies should be adopted because they solve real engineering problems, not simply because they are popular.",
  },
  {
    figure: "04",
    title: "Learn through building",
    statement:
      "Engineering knowledge becomes meaningful when concepts are applied, tested, deployed, and explained.",
  },
  {
    figure: "05",
    title: "AI as leverage",
    statement:
      "AI should accelerate engineering work while engineers remain responsible for architecture, verification, security, and operational decisions.",
  },
];
