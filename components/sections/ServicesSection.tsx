import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export function ServicesSection({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <Section className="border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="What I do"
          title="One partner, end to end"
          subtitle="Design and engineering under one roof — so nothing gets lost in the handoff between them."
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => (
            <RevealOnScroll key={service.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
