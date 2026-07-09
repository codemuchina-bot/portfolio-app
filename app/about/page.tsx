import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Timeline } from "@/components/sections/Timeline";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { experience, skills, values } from "@/data/experience";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.founder}, ${site.role} and founder of ${site.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Hi, I'm Alex — I design and build products."
        subtitle={`${site.role} based in ${site.location}. I help founders and teams turn ambitious ideas into things people love to use.`}
      />

      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <RevealOnScroll>
              <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
                  alt={site.founder}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  I&apos;ve spent the last decade at the intersection of design and
                  engineering — the place where good ideas either come to life or
                  fall apart in the handoff. I decided to stop letting them fall apart.
                </p>
                <p>
                  Devix is my studio. It&apos;s deliberately small: I take on a
                  handful of projects at a time so each one gets real focus. You work
                  directly with the person doing the work, not a rotating cast of
                  account managers.
                </p>
                <p>
                  When I&apos;m not shipping, I&apos;m usually writing about the craft,
                  mentoring engineers, or trying to convince someone that boring
                  technology is underrated.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <SectionHeading eyebrow="Experience" title="Where I've been" />
          <div className="mt-14 max-w-3xl">
            <Timeline jobs={experience} />
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <SectionHeading eyebrow="Toolkit" title="Things I work with" />
          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <RevealOnScroll key={skill} delay={i * 0.03}>
                <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-fg/90">
                  {skill}
                </span>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <SectionHeading
            eyebrow="Principles"
            title="How I work"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <RevealOnScroll key={value.title} delay={(i % 2) * 0.1}>
                <div className="rounded-card border border-border bg-surface p-8">
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
