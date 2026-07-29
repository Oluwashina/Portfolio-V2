export interface SkillCategory {
  number: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    number: "01",
    title: "Frontend",
    description:
      "The core stack I ship production applications with: typed throughout, componentised, and tuned for everyday performance.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "State management",
    description:
      "Choosing the lightest tool that fits the problem, from local context up to global state cached on the server.",
    skills: ["Redux Toolkit", "TanStack Query", "Zustand", "Context API"],
  },
  {
    number: "03",
    title: "Forms & validation",
    description:
      "Accessible, typed form flows with validation at the schema level so bad data never reaches the API.",
    skills: ["React Hook Form", "Formik", "Yup"],
  },
  {
    number: "04",
    title: "Backend & data",
    description:
      "Integrating with REST APIs and managed backends. Comfortable working across the network boundary and shaping API contracts.",
    skills: ["REST APIs", "Supabase", "Firebase"],
  },
  {
    number: "05",
    title: "Tooling & delivery",
    description:
      "The everyday tooling that keeps teams shipping: version control, design handoff, project tracking, and modern deployment.",
    skills: ["Git", "Figma", "Jira", "Vercel", "Netlify"],
  },
  {
    number: "06",
    title: "Testing & quality",
    description:
      "Unit and integration testing wired into delivery so regressions get caught before customers do.",
    skills: ["Jest", "React Testing Library", "Vitest"],
  },
];
