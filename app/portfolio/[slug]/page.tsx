import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="relative border-b border-border pt-36 pb-16 md:pt-44">
        <Container>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="size-4" /> All projects
          </Link>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8 text-sm">
            <div>
              <div className="text-muted">Client</div>
              <div className="mt-1 font-medium">{project.client}</div>
            </div>
            <div>
              <div className="text-muted">Year</div>
              <div className="mt-1 font-medium">{project.year}</div>
            </div>
            <div>
              <div className="text-muted">Type</div>
              <div className="mt-1 font-medium">{project.category}</div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="mt-12">
        <RevealOnScroll className="relative aspect-[16/9] overflow-hidden rounded-card border border-border">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </RevealOnScroll>
      </Container>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold">The challenge</h2>
              <p className="mt-4 leading-relaxed text-muted">{project.challenge}</p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-2xl font-semibold">The solution</h2>
              <p className="mt-4 leading-relaxed text-muted">{project.solution}</p>
            </RevealOnScroll>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 rounded-card border border-border bg-surface p-8 sm:grid-cols-3 md:p-12">
            {project.results.map((result) => (
              <div key={result.label} className="text-center sm:text-left">
                <div className="text-4xl font-semibold tracking-tight text-accent md:text-5xl">
                  {result.value}
                </div>
                <div className="mt-2 text-sm text-muted">{result.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {project.gallery.map((src, i) => (
              <RevealOnScroll
                key={src}
                delay={(i % 2) * 0.1}
                className="relative aspect-[4/3] overflow-hidden rounded-card border border-border"
              >
                <Image
                  src={src}
                  alt={`${project.title} detail ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="text-sm text-muted">Next project</div>
              <div className="mt-1 text-2xl font-semibold">{next.title}</div>
            </div>
            <Button href={`/portfolio/${next.slug}`} variant="outline" withArrow>
              View project
            </Button>
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
