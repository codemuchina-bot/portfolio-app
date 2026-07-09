import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { stats } from "@/data/stats";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      {/* Ambient accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {site.availability}
          </div>

          <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Design & code that
            <br />
            <span className="text-accent">ships and scales</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted md:text-xl">
            I&apos;m {site.founder}, a {site.role.toLowerCase()} building fast,
            thoughtful digital products for founders and teams who sweat the
            details.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg" withArrow>
              Start a project
            </Button>
            <Button href="/portfolio" size="lg" variant="outline">
              View work
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold tracking-tight md:text-4xl">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <div className="mt-1 text-xs text-muted md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
