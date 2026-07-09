import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FAQItem } from "@/components/sections/FAQItem";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about working with Devix.",
};

export default function FAQPage() {
  const categories = Array.from(new Set(faqs.map((f) => f.category)));
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions, answered"
        subtitle="The things people usually want to know before we start. Can't find it here? Just ask."
      />

      <Section>
        <Container>
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category} className="grid gap-8 lg:grid-cols-[280px_1fr]">
                <RevealOnScroll>
                  <h2 className="text-xl font-semibold lg:sticky lg:top-24">
                    {category}
                  </h2>
                </RevealOnScroll>
                <div>
                  {faqs
                    .filter((f) => f.category === category)
                    .map((faq) => (
                      <FAQItem key={faq.q} faq={faq} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
