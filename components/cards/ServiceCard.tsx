import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative flex flex-col rounded-card border border-border bg-surface p-8 transition-colors duration-300 hover:border-accent/40"
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent transition-colors duration-300 group-hover:border-accent/40">
          <Icon name={service.icon} className="size-6" />
        </div>
        <ArrowUpRight className="size-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
      <h3 className="text-xl font-semibold">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
      <ul className="mt-6 space-y-2 border-t border-border pt-6">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-sm text-muted">
            <Check className="size-4 shrink-0 text-accent" />
            {feature}
          </li>
        ))}
      </ul>
    </Link>
  );
}
