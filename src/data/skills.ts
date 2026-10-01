// Edit this file to change the skills on the About page.

export interface SkillGroup {
  title: string;
  blurb: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "The part people see and touch.",
    items: ["TypeScript", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    blurb: "The part that stores things and keeps them safe.",
    items: [
      "Nest.js",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "JWT authentication",
    ],
  },
  {
    title: "Tools",
    blurb: "What I use to ship.",
    items: ["Git & GitHub", "VS Code", "Vercel", "Figma", "npm"],
  },
];

export const learningNow = ["Testing", "Accessibility", "Database design"];
