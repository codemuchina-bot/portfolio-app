export type Service = {
  slug: string;
  icon: string; // lucide-react icon name
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "product-engineering",
    icon: "Code2",
    title: "Product Engineering",
    description:
      "Full-stack development that turns a spec into a fast, resilient product. React, Next.js, TypeScript and a backend that won't buckle under growth.",
    features: [
      "Next.js & React architecture",
      "Type-safe APIs & databases",
      "Performance & Core Web Vitals",
      "Testing & CI/CD pipelines",
    ],
  },
  {
    slug: "product-design",
    icon: "PenTool",
    title: "Product & UI Design",
    description:
      "Interfaces that feel obvious. I design systems, flows and screens that ship — not just pretty mockups that die in Figma.",
    features: [
      "Design systems & tokens",
      "Interaction & motion design",
      "Prototyping & user testing",
      "Handoff-ready specs",
    ],
  },
  {
    slug: "brand-identity",
    icon: "Sparkles",
    title: "Brand & Identity",
    description:
      "A cohesive visual voice across web, product and marketing. Logo, type, color and the guidelines to keep it consistent.",
    features: [
      "Logo & wordmark",
      "Typography & color systems",
      "Brand guidelines",
      "Marketing site design",
    ],
  },
  {
    slug: "technical-consulting",
    icon: "Compass",
    title: "Technical Consulting",
    description:
      "A senior pair of eyes on your architecture, roadmap and team. Audits, planning and hands-on guidance when you need it.",
    features: [
      "Architecture & code audits",
      "Tech stack selection",
      "Team mentoring",
      "Roadmap & scoping",
    ],
  },
  {
    slug: "web-performance",
    icon: "Gauge",
    title: "Performance & SEO",
    description:
      "Make it fast and make it found. I fix the bottlenecks, shrink the bundles and tune the technical SEO that moves the needle.",
    features: [
      "Lighthouse & CWV audits",
      "Bundle & image optimization",
      "Technical SEO",
      "Analytics & instrumentation",
    ],
  },
  {
    slug: "automation",
    icon: "Workflow",
    title: "Automation & Integrations",
    description:
      "Connect the tools your business already runs on. Custom integrations, workflows and internal tooling that saves real hours.",
    features: [
      "Third-party API integrations",
      "Internal tools & dashboards",
      "Workflow automation",
      "Webhooks & background jobs",
    ],
  },
];
