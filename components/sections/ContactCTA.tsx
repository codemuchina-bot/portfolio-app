import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { site } from "@/data/site";

export function ContactCTA() {
  return (
    <Section className="border-t border-border">
      <Container>
        <RevealOnScroll className="relative overflow-hidden rounded-[2rem] border border-border bg-surface px-8 py-16 text-center md:px-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-full -z-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px]"
          />
          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold md:text-5xl">
              Have a project in mind? Let&apos;s build it.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
              Tell me what you&apos;re working on. I&apos;ll get back to you within a
              day with honest thoughts on how to make it real.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg" withArrow>
                Start a project
              </Button>
              <Button href={`mailto:${site.email}`} size="lg" variant="outline">
                {site.email}
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
