export type Job = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: Job[] = [
  {
    role: "Founder & Principal",
    company: "Devix Studio",
    period: "2021 — Present",
    description:
      "Running an independent studio for founders and product teams — design and engineering under one roof, from first sketch to production launch.",
  },
  {
    role: "Staff Product Engineer",
    company: "Halcyon",
    period: "2018 — 2021",
    description:
      "Led the front-end architecture and design system through a period of 10x growth, and mentored a team of six across design and engineering.",
  },
  {
    role: "Senior Frontend Engineer",
    company: "Meridian",
    period: "2015 — 2018",
    description:
      "Built customer-facing products and internal tooling, and championed the shift to a component-driven, accessible front end.",
  },
  {
    role: "Product Designer & Developer",
    company: "Freelance",
    period: "2013 — 2015",
    description:
      "Designed and shipped websites and apps for startups and agencies — the years that taught me to wear both hats at once.",
  },
];

export const skills: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "PostgreSQL",
  "Figma",
  "Design Systems",
  "Accessibility",
  "Performance",
  "CI/CD",
];

export const values: { title: string; description: string }[] = [
  {
    title: "Craft over volume",
    description:
      "I take fewer projects so each one gets the attention it deserves. Depth beats a crowded portfolio.",
  },
  {
    title: "Clarity, always",
    description:
      "No jargon, no black boxes. You'll understand what I'm building and why, at every step.",
  },
  {
    title: "Ship, then improve",
    description:
      "Real feedback comes from real users. I get things live early and refine from there.",
  },
  {
    title: "Own the outcome",
    description:
      "I care about whether it worked, not just whether it launched. Your goals are the brief.",
  },
];
