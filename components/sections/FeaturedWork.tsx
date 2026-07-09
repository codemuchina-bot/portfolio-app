import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  const featured = projects.slice(0, 4);
  return (
    <Section>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Recent projects, real results"
            subtitle="A few of the products I've designed and built. Every one shipped and moved a number that mattered."
          />
          <RevealOnScroll>
            <Button href="/portfolio" variant="outline" withArrow>
              All projects
            </Button>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={(i % 2) * 0.1}>
              <PortfolioCard project={project} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
