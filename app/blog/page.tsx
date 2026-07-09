import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BlogCard } from "@/components/cards/BlogCard";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building products, design systems, engineering, and the craft of shipping.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes from the workshop"
        subtitle="Essays on design, engineering, and the messy business of turning ideas into products."
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={(i % 3) * 0.08}>
                <BlogCard post={post} />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
