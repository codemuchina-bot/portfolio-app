import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BlogCard } from "@/components/cards/BlogCard";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <section className="relative border-b border-border pt-36 pb-12 md:pt-44">
          <Container className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
            >
              <ArrowLeft className="size-4" /> All posts
            </Link>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted">
              <span className="rounded-full bg-accent/10 px-2.5 py-1 font-medium text-accent">
                {post.category}
              </span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-muted">{post.excerpt}</p>
            <p className="mt-6 text-sm text-muted">By {post.author}</p>
          </Container>
        </section>

        <Container className="mt-12 max-w-3xl">
          <RevealOnScroll className="relative aspect-[16/9] overflow-hidden rounded-card border border-border">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              className="object-cover"
            />
          </RevealOnScroll>

          <div className="mt-12 space-y-6 text-lg leading-relaxed text-fg/85">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </article>

      <Section className="mt-8 border-t border-border">
        <Container>
          <h2 className="text-2xl font-semibold">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
