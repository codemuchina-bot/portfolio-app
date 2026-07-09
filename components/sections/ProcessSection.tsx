import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProcessStep } from "@/components/sections/ProcessStep";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <Section className="border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A process that stays out of the way"
          subtitle="No black boxes and no surprises — just a clear path from idea to launch."
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <RevealOnScroll key={step.title} delay={i * 0.08}>
              <ProcessStep step={step} index={i} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
