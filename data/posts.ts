export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "shipping-fast-without-breaking-things",
    title: "Shipping fast without breaking things",
    excerpt:
      "Speed and stability aren't opposites. Here's the workflow I use to move quickly and still sleep at night.",
    cover:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    date: "2026-06-18",
    author: "Alex Rivera",
    category: "Engineering",
    readingTime: "6 min read",
    body: [
      "Every team says they want to ship fast. Fewer are willing to build the guardrails that make fast safe. The two goals feel like a tradeoff, but in practice the fastest teams I've worked with are also the most disciplined.",
      "It starts with small, reversible changes. When a pull request touches one thing and can be rolled back in a single click, review is quick and the blast radius of a mistake is tiny. Large branches that sit for a week are where velocity goes to die.",
      "The second ingredient is tests you trust. Not a thousand brittle unit tests — a focused suite that covers the paths that would actually hurt if they broke. When the suite is green, you deploy without a meeting.",
      "Finally, make production observable. If you can see a regression the moment it lands, you can move fast precisely because you'll catch the rare thing that slips through. Speed without visibility is just gambling.",
    ],
  },
  {
    slug: "design-tokens-that-scale",
    title: "Design tokens that actually scale",
    excerpt:
      "A design system lives or dies by its tokens. A practical guide to structuring them so they grow with you.",
    cover:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
    date: "2026-05-27",
    author: "Alex Rivera",
    category: "Design",
    readingTime: "8 min read",
    body: [
      "Tokens are the atoms of a design system, and like atoms, the way you name and layer them determines everything that can be built on top. Get the foundation wrong and every component inherits the mistake.",
      "The trick is separating primitive tokens from semantic ones. Primitives are raw values — a specific hex, a pixel scale. Semantics give them meaning: 'surface', 'accent', 'danger'. Components should only ever reference semantics.",
      "This indirection feels like overhead until the day you rebrand. Then you change a handful of semantic mappings and the entire product shifts with you — no find-and-replace across a hundred files.",
      "Keep the semantic layer small and opinionated. If every team can invent a new token, you don't have a system, you have a spreadsheet.",
    ],
  },
  {
    slug: "the-case-for-boring-technology",
    title: "The case for boring technology",
    excerpt:
      "The most exciting thing you can do for your product is choose technology nobody will blog about.",
    cover:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=80",
    date: "2026-05-09",
    author: "Alex Rivera",
    category: "Engineering",
    readingTime: "5 min read",
    body: [
      "There's a pull toward the new. A fresh framework, a novel database, the paradigm everyone is tweeting about. Sometimes it's the right call. Usually it's a tax you'll pay for years.",
      "Boring technology has a superpower: you already know how it fails. The edge cases are documented, the community has hit the walls before you, and hiring someone who knows it is easy.",
      "Spend your innovation budget where it differentiates you — the actual product — not on re-learning how to run a database in production. Save the novelty for the parts your customers can feel.",
    ],
  },
  {
    slug: "writing-interfaces-that-explain-themselves",
    title: "Writing interfaces that explain themselves",
    excerpt:
      "The best UI needs no tutorial. A few principles for designing screens that teach as you use them.",
    cover:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80",
    date: "2026-04-21",
    author: "Alex Rivera",
    category: "Design",
    readingTime: "7 min read",
    body: [
      "If your product needs a tour on first launch, that's a hint the interface isn't carrying its weight. Great UI is legible: a new user can look at it and form a correct guess about what everything does.",
      "Legibility comes from constraint. Fewer choices, clearer hierarchy, and copy that says exactly what will happen when you click. Every extra option is a small tax on comprehension.",
      "Motion helps too, when it's honest. A transition that shows where a panel came from teaches the mental model for free. A transition that's just decoration adds noise.",
    ],
  },
  {
    slug: "how-i-scope-a-new-project",
    title: "How I scope a new project",
    excerpt:
      "Most projects fail in the estimate, not the execution. Here's how I turn a vague brief into a plan.",
    cover:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    date: "2026-03-30",
    author: "Alex Rivera",
    category: "Process",
    readingTime: "6 min read",
    body: [
      "A brief is a wish. A scope is a plan. The gap between them is where budgets get blown and relationships get strained, so I spend real time closing it before anyone writes code.",
      "The first move is to find the smallest version that's still valuable. What's the one flow that, if it worked beautifully, would justify the whole engagement? Everything else is a later phase.",
      "Then I list the assumptions out loud. Not because I'll be right about all of them, but because writing them down turns silent risk into a conversation we can have on day one instead of week six.",
    ],
  },
  {
    slug: "motion-with-a-purpose",
    title: "Motion with a purpose",
    excerpt:
      "Animation isn't decoration. Used well, it's one of the strongest tools you have for guiding attention.",
    cover:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    date: "2026-03-11",
    author: "Alex Rivera",
    category: "Design",
    readingTime: "5 min read",
    body: [
      "Bad animation is the first thing users turn off and the first thing that makes a product feel cheap. Good animation is invisible — it just makes the experience feel right.",
      "The difference is intent. Every movement should answer a question: where did this come from, what just changed, what should I look at now. If it doesn't answer one of those, it's probably noise.",
      "Respect people who ask for less. Honor reduced-motion preferences, keep durations short, and never let a flourish stand between a user and the thing they came to do.",
    ],
  },
];
