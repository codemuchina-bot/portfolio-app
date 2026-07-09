import { Container, Section } from "@/components/ui/Container";
import { StatCounter } from "@/components/sections/StatCounter";
import { stats } from "@/data/stats";

export function StatsSection() {
  return (
    <Section className="border-t border-border">
      <Container>
        <div className="grid grid-cols-2 gap-y-12 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
