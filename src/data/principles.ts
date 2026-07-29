export interface Principle {
  number: string;
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    number: "01",
    title: "Ship the simplest thing that answers the question.",
    description:
      "Complexity is a tax on every future decision. I default to the smallest change that resolves the actual constraint, and I document what I deliberately left out.",
  },
  {
    number: "02",
    title: "Performance is a feature you can lose overnight.",
    description:
      "Budgets belong in CI. If a regression can be measured, it can be prevented. I treat p75 as the number that matters, not the median.",
  },
  {
    number: "03",
    title: "Accessibility is architecture, not decoration.",
    description:
      "Semantics, focus, and motion are decided when the component is designed, not patched in during QA. Everything is built for keyboard navigation from the start.",
  },
  {
    number: "04",
    title: "Types are a design tool.",
    description:
      "Strong typing at the boundary rejects entire classes of bugs and makes intent clear to the next engineer. I invest in types where the cost of ambiguity is highest.",
  },
  {
    number: "05",
    title: "The interface is the contract.",
    description:
      "Users only meet the surface. I hold that surface to a standard of clarity, honesty, and restraint, even when it means saying no to a feature.",
  },
  {
    number: "06",
    title: "Write the RFC, then the code.",
    description:
      "A decision that cannot survive one page of prose usually cannot survive review either. I invest early in the shared understanding that makes the code obvious.",
  },
];
