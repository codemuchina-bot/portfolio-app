export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Sprint",
    price: "$4k",
    period: "per week",
    description: "A focused burst of work for a specific goal — a redesign, a feature, an audit.",
    features: [
      "1 week, one clear objective",
      "Daily async updates",
      "Design + development",
      "Source files & handoff",
      "1 round of revisions",
    ],
    cta: "Book a sprint",
  },
  {
    name: "Partner",
    price: "$12k",
    period: "per month",
    description: "An ongoing engagement for teams that need a senior builder in their corner.",
    features: [
      "Dedicated weekly capacity",
      "Design, build & strategy",
      "Slack + weekly calls",
      "Roadmap & scoping support",
      "Unlimited revisions",
      "Priority turnaround",
    ],
    featured: true,
    cta: "Become a partner",
  },
  {
    name: "Project",
    price: "Custom",
    period: "fixed scope",
    description: "A defined project with a fixed scope, timeline, and price agreed up front.",
    features: [
      "Full discovery & scoping",
      "Fixed timeline & budget",
      "Design system included",
      "Deployment & launch support",
      "30 days post-launch support",
    ],
    cta: "Request a quote",
  },
];
