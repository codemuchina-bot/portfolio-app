import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PricingCard } from "@/components/cards/PricingCard";
import { FAQItem } from "@/components/sections/FAQItem";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { plans } from "@/data/pricing";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent engagement tiers — sprints, monthly partnerships, and fixed-scope projects.",
};

export default function PricingPage() {
  const pricingFaqs = faqs.filter((f) => f.category === "Scope & pricing");
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple pricing, no surprises"
        subtitle="Pick the engagement that fits how you like to work. Every tier includes design and development from one accountable partner."
      />

      <Section>
        <Container>
          <div className="grid items-start gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <RevealOnScroll key={plan.name} delay={i * 0.08}>
                <PricingCard plan={plan} />
              </RevealOnScroll>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            All engagements are billed upfront. Prices in USD, taxes not included.
          </p>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <SectionHeading
            eyebrow="Pricing FAQ"
            title="Questions about cost"
            align="center"
          />
          <div className="mx-auto mt-12 max-w-3xl">
            {pricingFaqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
