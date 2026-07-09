# Devix — Developer/Designer Portfolio Site (Design Spec)

**Date:** 2026-07-09
**Status:** Approved for planning

## Goal

Recreate the Devix HTML template (reference: `ultimatewebsolutions.net/devix-html`) as a
Next.js application — a modern, dark, high-contrast developer/designer portfolio. "Devix-inspired
with my own polish": match the layout, structure, and feel, but refine typography, motion, and
detail for a distinctive result. Placeholder content throughout, data-driven so it is trivial to swap.

## Tech Stack

- **Next.js 15**, App Router, **TypeScript**
- **Tailwind CSS v4** (single design-token layer for colors/spacing/type)
- **Framer Motion** — scroll reveals, marquee, hover/interaction polish
- **lucide-react** icons
- **next/font** — Space Grotesk (display) + Inter (body)
- Content in typed data modules under `/data/*.ts`
- Images via `next/image` (curated Unsplash) with gradient fallbacks

## Aesthetic

- Canvas: near-black `#0a0a0b`; text: warm off-white `#f4f4f0`; muted grey for secondary
- **Signature accent: electric lime `#c8f560`** (used for CTAs, links-on-hover, highlights, focus rings)
- Oversized editorial headings, generous whitespace, hairline borders (`#1e1e20`)
- Subtle grain/noise overlay; hover-reveal image cards; smooth infinite logo marquee
- Motion is tasteful: fade/slide reveal on scroll, spring hovers, no gratuitous animation

## Design Tokens (Tailwind theme)

- `--color-bg: #0a0a0b`, `--color-surface: #121214`, `--color-border: #1e1e20`
- `--color-fg: #f4f4f0`, `--color-muted: #a1a1aa`, `--color-accent: #c8f560`
- Radius scale, container max-width `1200px`, section vertical rhythm

## Routes / Pages

| Route | Purpose |
|---|---|
| `/` | Home: hero → logo marquee → featured portfolio → services → process → stats → blog preview → testimonials → contact CTA |
| `/about` | Bio, work-experience timeline, skills, values |
| `/services` | Service detail cards + process methodology |
| `/portfolio` | Filterable project grid |
| `/portfolio/[slug]` | Case study: challenge / solution / results / gallery |
| `/pricing` | 3 tiers + feature comparison + CTA |
| `/faq` | Accordion FAQ, grouped by category |
| `/blog` | Article grid |
| `/blog/[slug]` | Article detail (prose) |
| `/contact` | Contact form (service + budget selectors) + contact info |
| `not-found` | Styled 404 |

## Shared Components

Layout: `Navbar` (sticky, mega-dropdown, mobile drawer), `Footer` (newsletter + social + nav).
UI: `Button`, `SectionHeading`, `Marquee`, `RevealOnScroll`, `NoiseOverlay`.
Content: `PortfolioCard`, `ServiceCard`, `ProcessStep`, `StatCounter`, `TestimonialCard`,
`PricingCard`, `FAQItem`, `BlogCard`, `Timeline`, `ContactForm`.

Each component is single-purpose, typed props, and reads from `/data` — no hardcoded content inside
presentational components.

## Data Modules (`/data`)

- `projects.ts` — slug, title, client, tags, cover, summary, challenge, solution, results[], gallery[]
- `services.ts` — icon, title, description, features[]
- `posts.ts` — slug, title, excerpt, cover, date, author, category, body
- `testimonials.ts`, `pricing.ts`, `faqs.ts`, `stats.ts`, `experience.ts`, `logos.ts`, `nav.ts`

## Behavior / Interactions

- Navbar: transparent over hero, solidifies on scroll; dropdown menus; mobile hamburger drawer
- Portfolio grid: client-side tag filter
- FAQ: accessible accordion (one open at a time within a group)
- Forms (contact + newsletter): client-side validation, fake async submit → success state. **No
  network request, no backend.**
- Counters animate when scrolled into view
- All interactive elements keyboard-accessible with visible accent focus rings

## Out of Scope (YAGNI)

No CMS, no backend/API, no real form delivery, no auth, no i18n, no dark/light toggle (dark only),
no e-commerce. Blog/portfolio bodies are static placeholder content.

## Success Criteria

- All routes render and are navigable via nav + footer + internal links
- Responsive: mobile / tablet / desktop, no horizontal overflow
- Lighthouse: no major accessibility violations; images optimized via `next/image`
- `next build` succeeds with no type errors
- Visual result reads as a polished, cohesive dark portfolio consistent with the Devix reference
