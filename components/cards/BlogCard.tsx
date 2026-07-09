import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/data/posts";
import { formatDate } from "@/lib/format";

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-card border border-border bg-surface transition-colors duration-300 hover:border-accent/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-xs text-muted">
          <span className="rounded-full bg-accent/10 px-2.5 py-1 font-medium text-accent">
            {post.category}
          </span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-5 text-xs text-muted">{formatDate(post.date)}</div>
      </div>
    </Link>
  );
}
