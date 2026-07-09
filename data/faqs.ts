export type Faq = { category: string; q: string; a: string };

export const faqs: Faq[] = [
  {
    category: "Working together",
    q: "What does a typical engagement look like?",
    a: "Most projects start with a short paid discovery to align on scope, then move into weekly build cycles with async updates and a live call each week. You'll always know what's shipping next and why.",
  },
  {
    category: "Working together",
    q: "Do you work solo or with a team?",
    a: "I run point on every project personally. For larger builds I bring in a small, trusted network of specialists — but you'll always have a single accountable point of contact: me.",
  },
  {
    category: "Working together",
    q: "How do we communicate during a project?",
    a: "A shared Slack channel for the day-to-day, a weekly call for decisions, and a living project doc so nothing lives only in someone's head. I lean toward over-communicating.",
  },
  {
    category: "Scope & pricing",
    q: "How much does a project cost?",
    a: "It depends on scope, but engagements typically start around $4k for a focused sprint and scale up for larger builds. The pricing page has the tiers — a quick call gets you a real estimate.",
  },
  {
    category: "Scope & pricing",
    q: "What if the scope changes mid-project?",
    a: "It usually does, and that's fine. We handle changes transparently: I flag the impact on timeline and cost before anything shifts, and we decide together. No surprise invoices.",
  },
  {
    category: "Scope & pricing",
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Every project includes a post-launch window, and many clients move onto a lighter monthly retainer for maintenance, iteration, and the inevitable 'can we just add…'.",
  },
  {
    category: "Process & tools",
    q: "What's your tech stack?",
    a: "Default is Next.js, TypeScript, and a modern component-driven front end, with a backend chosen to fit the problem. I favor boring, proven tools over the framework of the week.",
  },
  {
    category: "Process & tools",
    q: "Will I own the code and design files?",
    a: "Completely. On final payment you own all source code, design files, and assets outright. Everything lives in your accounts and repositories, not mine.",
  },
];
