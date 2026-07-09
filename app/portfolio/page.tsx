import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies of products designed and built by Devix — web apps, dashboards, mobile, and brand systems.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Projects that shipped and paid off"
        subtitle="Real products for real teams. Filter by type and dig into the case studies."
      />
      <Section>
        <Container>
          <PortfolioGrid projects={projects} />
        </Container>
      </Section>
      <ContactCTA />
    </>
  );
}
