# Devix Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Devix-inspired dark developer/designer portfolio as a Next.js 15 app with all template pages, data-driven placeholder content, and tasteful motion.

**Architecture:** App Router pages compose shared presentational components that read from typed `/data` modules. A single Tailwind v4 token layer defines the dark palette + electric-lime accent. Framer Motion provides scroll reveal, marquee, and hover polish. No backend — forms validate client-side and fake success.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, lucide-react, next/font (Space Grotesk + Inter).

## Global Constraints

- Dark theme only. Canvas `#0a0a0b`, surface `#121214`, border `#1e1e20`, fg `#f4f4f0`, muted `#a1a1aa`, accent `#c8f560`.
- Fonts: Space Grotesk (display, headings), Inter (body). Loaded via `next/font/google`.
- All content comes from `/data/*.ts` — presentational components take typed props, never hardcode copy.
- Container max-width `1200px` (`max-w-6xl mx-auto px-6`). Section rhythm: `py-24 md:py-32`.
- No network/backend. Forms: client validation → fake async → success state.
- Every interactive element keyboard-accessible with `focus-visible` accent ring.
- Per-task verification: `npx tsc --noEmit` passes and the touched route(s) render in `next dev`. Final task runs `next build`.
- Commit after each task with `git add -A && git commit -m "..."`.

---

### Task 1: Scaffold app, tokens, base layout

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`
- Create: `app/globals.css` (Tailwind import + `@theme` tokens + noise/base styles)
- Create: `app/layout.tsx` (fonts, `<html>`/`<body>`, metadata, Navbar/Footer slots later)
- Create: `lib/cn.ts` (className merge helper)

**Interfaces:**
- Produces: CSS vars `--color-{bg,surface,border,fg,muted,accent}`; Tailwind utilities `bg-bg text-fg text-muted border-border bg-accent text-accent`; font vars `--font-display`, `--font-sans`; `cn(...classes)` helper.

- [ ] Scaffold with `npx create-next-app@latest . --ts --tailwind --app --no-src-dir --import-alias "@/*"` (accept defaults; app already has git + files, so create in a temp dir and merge, or answer prompts to not overwrite `docs/`). Alternatively install manually: `next react react-dom`, dev `typescript @types/*`, `tailwindcss @tailwindcss/postcss`, `framer-motion lucide-react clsx tailwind-merge`.
- [ ] In `app/globals.css`: `@import "tailwindcss";` then `@theme { --color-bg:#0a0a0b; --color-surface:#121214; --color-border:#1e1e20; --color-fg:#f4f4f0; --color-muted:#a1a1aa; --color-accent:#c8f560; --font-display: var(--font-space-grotesk); --font-sans: var(--font-inter); }`. Add base: `body{background:var(--color-bg);color:var(--color-fg);font-family:var(--font-sans)}`, selection accent, thin scrollbar, subtle grain via a fixed `::before` radial/noise overlay.
- [ ] `app/layout.tsx`: load `Space_Grotesk` and `Inter` with CSS variables; set `<html lang="en" className="{vars}">`; metadata title/description; render `{children}` (Navbar/Footer wired in Task 4).
- [ ] `lib/cn.ts`: `export const cn = (...a) => twMerge(clsx(a))`.
- [ ] Verify: `npx tsc --noEmit`; `next dev` shows a styled blank page on dark bg. Commit.

---

### Task 2: Data modules (all placeholder content)

**Files:**
- Create: `data/nav.ts`, `data/projects.ts`, `data/services.ts`, `data/posts.ts`, `data/testimonials.ts`, `data/pricing.ts`, `data/faqs.ts`, `data/stats.ts`, `data/experience.ts`, `data/logos.ts`, `data/site.ts`

**Interfaces (exact exported types — later tasks depend on these):**
- `data/site.ts`: `export const site = { name, role, email, phone, location, socials: {label,href}[] }`
- `data/nav.ts`: `export type NavItem = { label:string; href:string; children?: {label,href,desc?}[] }; export const nav: NavItem[]`
- `data/projects.ts`: `export type Project = { slug:string; title:string; client:string; year:string; tags:string[]; cover:string; summary:string; challenge:string; solution:string; results:{label:string;value:string}[]; gallery:string[] }; export const projects: Project[]` (6+ items)
- `data/services.ts`: `export type Service = { slug:string; icon:string; title:string; description:string; features:string[] }; export const services: Service[]` (icon = lucide name string)
- `data/posts.ts`: `export type Post = { slug:string; title:string; excerpt:string; cover:string; date:string; author:string; category:string; readingTime:string; body:string[] }; export const posts: Post[]` (6+)
- `data/testimonials.ts`: `export type Testimonial = { quote:string; name:string; title:string; avatar:string }; export const testimonials`
- `data/pricing.ts`: `export type Plan = { name:string; price:string; period:string; description:string; features:string[]; featured?:boolean; cta:string }; export const plans`
- `data/faqs.ts`: `export type Faq = { category:string; q:string; a:string }; export const faqs`
- `data/stats.ts`: `export type Stat = { value:number; suffix:string; label:string }; export const stats`
- `data/experience.ts`: `export type Job = { role:string; company:string; period:string; description:string }; export const experience`
- `data/logos.ts`: `export const logos: string[]` (brand names for marquee)

- [ ] Write each module with realistic placeholder content. Images: use `https://images.unsplash.com/...` URLs (project covers, blog covers, avatars) — pick stable photo IDs.
- [ ] Verify: `npx tsc --noEmit`. Commit.

---

### Task 3: UI primitives

**Files:**
- Create: `components/ui/Button.tsx`, `components/ui/SectionHeading.tsx`, `components/ui/RevealOnScroll.tsx`, `components/ui/Marquee.tsx`, `components/ui/NoiseOverlay.tsx`, `components/ui/Icon.tsx`

**Interfaces:**
- `Button`: props `{ href?:string; variant?:'primary'|'ghost'|'outline'; size?:'sm'|'md'; children; className? }`. Renders `<Link>` if href else `<button>`. Primary = lime bg / black text; outline = border; ghost = text.
- `SectionHeading`: `{ eyebrow?:string; title:string; subtitle?:string; align?:'left'|'center' }`.
- `RevealOnScroll`: `'use client'`; wraps children in `motion.div` with fade+`y` reveal on `whileInView`, `once:true`. Props `{ delay?:number; className? }`.
- `Marquee`: `'use client'`; `{ items:string[]; className? }` infinite horizontal scroll (Framer Motion or CSS keyframes).
- `NoiseOverlay`: fixed pointer-events-none grain layer.
- `Icon`: `{ name:string; className? }` maps lucide-react dynamic icon by name (fallback to a default).

- [ ] Implement all six. Keep client/server boundaries correct (`'use client'` only where hooks/motion used).
- [ ] Verify: `npx tsc --noEmit`. Commit.

---

### Task 4: Navbar, Footer, layout wiring

**Files:**
- Create: `components/layout/Navbar.tsx` (`'use client'`), `components/layout/Footer.tsx`, `components/layout/MobileDrawer.tsx`
- Modify: `app/layout.tsx` to render `<Navbar/>{children}<Footer/>` + `<NoiseOverlay/>`

**Interfaces:**
- Consumes: `nav` from `data/nav.ts`, `site` from `data/site.ts`, `Button`, `Icon`.
- Navbar: sticky; transparent at top, adds `bg-bg/80 backdrop-blur border-b border-border` after scroll (`useState`+scroll listener); desktop dropdown on hover for items with `children`; mobile hamburger toggles `MobileDrawer`.
- Footer: newsletter input (client validation, fake success), nav columns, socials, copyright.

- [ ] Implement Navbar + MobileDrawer + Footer; wire into layout.
- [ ] Verify: `npx tsc --noEmit`; nav + footer visible on every route; dropdowns and mobile drawer work. Commit.

---

### Task 5: Content components

**Files:**
- Create: `components/cards/PortfolioCard.tsx`, `ServiceCard.tsx`, `BlogCard.tsx`, `TestimonialCard.tsx`, `PricingCard.tsx`
- Create: `components/sections/ProcessStep.tsx`, `StatCounter.tsx` (`'use client'`), `Timeline.tsx`, `FAQItem.tsx` (`'use client'`)

**Interfaces:**
- `PortfolioCard({ project: Project })` — image, hover-reveal overlay, tags, links to `/portfolio/[slug]`.
- `ServiceCard({ service: Service })`, `BlogCard({ post: Post })`, `TestimonialCard({ item: Testimonial })`, `PricingCard({ plan: Plan })`.
- `StatCounter({ stat: Stat })` — counts up via Framer `useInView` + animation.
- `Timeline({ jobs: Job[] })`, `ProcessStep({ index, title, description, icon })`, `FAQItem({ faq: Faq })` accordion.

- [ ] Implement all. Reuse `RevealOnScroll`, `Icon`, `Button`, `next/image`.
- [ ] Verify: `npx tsc --noEmit`. Commit.

---

### Task 6: Home page

**Files:** Create `app/page.tsx` + `components/sections/Hero.tsx`, `LogoMarquee.tsx`, `FeaturedWork.tsx`, `ServicesSection.tsx`, `ProcessSection.tsx`, `StatsSection.tsx`, `BlogPreview.tsx`, `TestimonialsSection.tsx`, `ContactCTA.tsx`

- [ ] Compose: Hero (oversized headline, role, dual CTA, accent detail) → LogoMarquee → FeaturedWork (3–4 projects) → ServicesSection → ProcessSection (Plan/Code/Test/Deploy) → StatsSection → BlogPreview (3 posts) → TestimonialsSection → ContactCTA.
- [ ] Verify: `/` renders full, responsive, animated. `npx tsc --noEmit`. Commit.

---

### Task 7: About page

**Files:** Create `app/about/page.tsx`
- [ ] Bio/intro, `Timeline` from `experience`, skills grid, values, CTA. Verify `/about`. Commit.

### Task 8: Services page

**Files:** Create `app/services/page.tsx`
- [ ] Hero + `ServiceCard` grid from `services` + ProcessSection + CTA. Verify `/services`. Commit.

### Task 9: Portfolio list + detail

**Files:** Create `app/portfolio/page.tsx` (`'use client'` for tag filter), `app/portfolio/[slug]/page.tsx`
- [ ] List: tag filter buttons + `PortfolioCard` grid. Detail: `generateStaticParams` from projects; hero, meta, challenge/solution, `results` stat row, gallery, next-project link; `notFound()` on bad slug. Verify both. Commit.

### Task 10: Pricing page

**Files:** Create `app/pricing/page.tsx`
- [ ] `PricingCard` row from `plans` (featured highlighted) + comparison + FAQ teaser + CTA. Verify `/pricing`. Commit.

### Task 11: FAQ page

**Files:** Create `app/faq/page.tsx`
- [ ] Group `faqs` by category, render `FAQItem` accordions + contact CTA. Verify `/faq`. Commit.

### Task 12: Blog list + detail

**Files:** Create `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`
- [ ] List: `BlogCard` grid. Detail: `generateStaticParams`; cover, meta, prose `body`, author, related posts; `notFound()` on bad slug. Verify both. Commit.

### Task 13: Contact page + form

**Files:** Create `app/contact/page.tsx`, `components/sections/ContactForm.tsx` (`'use client'`)
- [ ] Form fields: name, email, service `<select>` (from services), budget `<select>`, message. Client validation, fake async submit, success state. Contact info from `site`. Verify `/contact`. Commit.

### Task 14: 404, metadata, final polish, build

**Files:** Create `app/not-found.tsx`; touch pages for per-route `metadata`.
- [ ] Styled 404 with home link. Add `metadata` exports to each page. Sweep responsive/overflow, focus rings, alt text.
- [ ] Run `npm run build` — must succeed with zero type errors. Fix any issues.
- [ ] Commit.

---

## Self-Review

- **Spec coverage:** All 11 routes (Task 1,4,6–14), tokens/aesthetic (Task 1), data-driven content (Task 2), all shared components (Tasks 3–5), interactions — sticky nav, filter, accordion, counters, fake forms (Tasks 4,5,9,11,13), out-of-scope respected (no backend). ✓
- **Placeholder scan:** Tasks reference concrete files/types; content is generated in Task 2, not deferred. ✓
- **Type consistency:** Component props reference the exact `data` types defined in Task 2 (`Project`, `Service`, `Post`, `Plan`, `Faq`, `Stat`, `Job`, `Testimonial`). ✓
