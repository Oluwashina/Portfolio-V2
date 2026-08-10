export interface ExperienceEntry {
  period: string;
  title: string;
  company: string;
  description: string;
}

export const experience: ExperienceEntry[] = [
  {
    period: "2024 to Present",
    title: "Frontend Engineer",
    company: "Pandar Resources LLC",
    description:
      "Build scalable frontend features in React and TypeScript, partnering with product, design, and backend to ship production ready work. Improve frontend stability, tune performance, and maintain a shared component library the team ships against.",
  },
  {
    period: "2022 to 2026",
    title: "Software Engineer",
    company: "Crop2Cash",
    description:
      "Led frontend performance overhauls that reduced page load times by 40% and improved user satisfaction metrics by 50%. Shipped mobile first interfaces that raised engagement by 40%, mentored junior engineers, and hardened state management to cut client side bug reports by 30%.",
  },
  {
    period: "2020 to 2021",
    title: "Frontend Engineer",
    company: "Providence Research",
    description:
      "Migrated the legacy frontend to Vue, designed a reusable component library that cut new feature development time by 35%, and optimised data heavy dashboards for 50% faster page loads. Presented technical demos to stakeholders and investors.",
  },
  {
    period: "2019",
    title: "Frontend Engineer Intern",
    company: "Providence Research",
    description:
      "Ran internal workshops on frontend development and introduced Jest unit testing practices that reduced bug reports by 25%.",
  },
];
