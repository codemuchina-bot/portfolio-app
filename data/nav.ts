export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Work",
    href: "/portfolio",
    children: [
      { label: "All Projects", href: "/portfolio", desc: "Browse the full case-study archive" },
      { label: "Services", href: "/services", desc: "How I can help your team" },
      { label: "Pricing", href: "/pricing", desc: "Engagement tiers & estimates" },
    ],
  },
  {
    label: "Studio",
    href: "/about",
    children: [
      { label: "About", href: "/about", desc: "Background, experience & values" },
      { label: "FAQ", href: "/faq", desc: "Common questions, answered" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
