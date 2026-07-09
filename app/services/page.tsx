import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Icon } from "@/components/ui/Icon";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Design, engineering, and strategy services — from product builds to brand systems and technical consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to ship, in one place"
        subtitle="Design, engineering, and the strategy that ties them together. Pick a piece or take the whole journey."
      />

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, i) => (
              <RevealOnScroll key={service.slug} delay={(i % 2) * 0.08}>
                <div
                  id={service.slug}
                  className="scroll-mt-24 rounded-card border border-border bg-surface p-8 md:p-10"
                >
                  <div className="flex size-14 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                    <Icon name={service.icon} className="size-7" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold">{service.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-fg/90"
                      >
                        <Check className="size-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      <ProcessSection />
      <ContactCTA />
    </>
  );
}
