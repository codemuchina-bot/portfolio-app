import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-card border border-border bg-surface p-8">
      <Quote className="size-8 text-accent" />
      <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-fg/90">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
        <Image
          src={item.avatar}
          alt={item.name}
          width={48}
          height={48}
          className="size-12 rounded-full object-cover"
        />
        <div>
          <div className="font-medium">{item.name}</div>
          <div className="text-sm text-muted">{item.title}</div>
        </div>
      </figcaption>
    </figure>
  );
}
