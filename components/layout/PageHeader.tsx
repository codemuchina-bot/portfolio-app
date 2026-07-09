import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-40 pb-16 md:pt-48 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <Container>
        {eyebrow && (
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            {eyebrow}
          </div>
        )}
        <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted md:text-xl">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
