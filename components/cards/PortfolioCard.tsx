import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group relative block overflow-hidden rounded-card border border-border bg-surface"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
        <div className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-accent text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-5" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="mb-2 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-xs text-fg backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-white/60">
          {project.client} · {project.year}
        </p>
      </div>
    </Link>
  );
}
