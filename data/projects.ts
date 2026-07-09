export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  tags: string[];
  cover: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "northwind-commerce",
    title: "Rebuilding Northwind's storefront",
    client: "Northwind",
    year: "2025",
    category: "Web App",
    tags: ["Next.js", "E-commerce", "Design System"],
    cover:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A headless commerce rebuild that cut load times in half and lifted conversion across every device.",
    challenge:
      "Northwind's legacy storefront was slow, hard to update, and losing mobile shoppers at checkout. Every content change required an engineer, and Core Web Vitals were deep in the red.",
    solution:
      "We rebuilt on Next.js with a headless CMS and a component-driven design system. Checkout was reimagined as a three-step flow, images were optimized end-to-end, and the marketing team got a visual editor for everything above the fold.",
    results: [
      { label: "Faster loads", value: "-52%" },
      { label: "Mobile conversion", value: "+34%" },
      { label: "Lighthouse", value: "98" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "quantum-analytics",
    title: "A dashboard traders actually trust",
    client: "Quantum",
    year: "2025",
    category: "Product Design",
    tags: ["Dashboard", "Data Viz", "React"],
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Real-time analytics for a fintech platform, designed for clarity under pressure.",
    challenge:
      "Quantum's power users were drowning in data but starved for insight. The old dashboard buried the numbers that mattered and choked on live updates.",
    solution:
      "A ground-up information architecture, a restrained data-viz language, and a streaming data layer that stays smooth at 60fps. Every chart earns its place on the screen.",
    results: [
      { label: "Time to insight", value: "-41%" },
      { label: "Daily active use", value: "+28%" },
      { label: "Support tickets", value: "-60%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "lumen-mobile",
    title: "Lumen's onboarding, reimagined",
    client: "Lumen",
    year: "2024",
    category: "Mobile",
    tags: ["React Native", "UX", "Motion"],
    cover:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A first-run experience that turned curious downloads into committed users.",
    challenge:
      "Most people who installed Lumen never finished setup. The onboarding was long, wordy, and asked for too much, too soon.",
    solution:
      "We cut the flow to three delightful steps, deferred permissions until they made sense, and added just enough motion to make progress feel effortless.",
    results: [
      { label: "Activation", value: "+47%" },
      { label: "Setup time", value: "-3 min" },
      { label: "Day-7 retention", value: "+22%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "vertex-brand",
    title: "A brand system for Vertex",
    client: "Vertex",
    year: "2024",
    category: "Branding",
    tags: ["Branding", "Design System", "Web"],
    cover:
      "https://images.unsplash.com/photo-1600703136783-bdb5ea365239?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A confident identity and marketing site for a developer-tools startup.",
    challenge:
      "Vertex had a great product and no visual identity to match. Every touchpoint looked like it came from a different company.",
    solution:
      "A flexible wordmark, a bold monochrome-plus-accent palette, and a documented system that the team can extend on their own — plus a marketing site to launch it.",
    results: [
      { label: "Launch signups", value: "5.2k" },
      { label: "Press pickups", value: "18" },
      { label: "Bounce rate", value: "-30%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "halcyon-platform",
    title: "Scaling Halcyon's platform",
    client: "Halcyon",
    year: "2023",
    category: "Web App",
    tags: ["Architecture", "Next.js", "Performance"],
    cover:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Re-architecting a growing SaaS so it could handle 10x the traffic without the wobble.",
    challenge:
      "Halcyon was growing fast and their monolith was showing it — slow deploys, flaky pages, and an on-call team that dreaded launch days.",
    solution:
      "We split the app into well-bounded services, moved to incremental static regeneration, and built an observability layer so problems surface before customers feel them.",
    results: [
      { label: "P95 latency", value: "-64%" },
      { label: "Deploy time", value: "-70%" },
      { label: "Uptime", value: "99.98%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "cobalt-design-system",
    title: "One design system, every team",
    client: "Cobalt",
    year: "2023",
    category: "Design System",
    tags: ["Design System", "React", "Docs"],
    cover:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A component library and token pipeline that got five product teams speaking the same language.",
    challenge:
      "Cobalt's products had drifted apart. Buttons behaved differently in every app and shipping a consistent change took weeks.",
    solution:
      "A single source of truth: design tokens flowing from Figma to code, an accessible component library, and living documentation the whole company actually reads.",
    results: [
      { label: "Design debt", value: "-45%" },
      { label: "Ship speed", value: "2.3x" },
      { label: "A11y score", value: "100" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];
