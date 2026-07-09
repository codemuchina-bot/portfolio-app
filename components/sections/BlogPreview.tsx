import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BlogCard } from "@/components/cards/BlogCard";
import { posts } from "@/data/posts";

export function BlogPreview() {
  const latest = posts.slice(0, 3);
  return (
    <Section className="border-t border-border">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Writing"
            title="Notes from the workshop"
            subtitle="Thoughts on building products, design systems, and the craft of shipping."
          />
          <RevealOnScroll>
            <Button href="/blog" variant="outline" withArrow>
              All posts
            </Button>
          </RevealOnScroll>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {latest.map((post, i) => (
            <RevealOnScroll key={post.slug} delay={i * 0.08}>
              <BlogCard post={post} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
