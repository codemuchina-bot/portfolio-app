import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <Section className="border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="Kind words"
          title="What clients say"
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <RevealOnScroll key={item.name} delay={(i % 2) * 0.1}>
              <TestimonialCard item={item} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
