import Link from "next/link";
import { site } from "@/data/site";
import { nav } from "@/data/nav";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Work", href: "/portfolio" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative z-[2] border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-accent">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {site.availability}
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold">Stay in the loop</h4>
            <p className="mt-4 text-sm text-muted">
              Occasional notes on building better products. No spam.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
