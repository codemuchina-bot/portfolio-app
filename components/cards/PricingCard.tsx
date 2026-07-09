import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { Plan } from "@/data/pricing";

export function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-card border p-8",
        plan.featured
          ? "border-accent/50 bg-surface shadow-[0_0_60px_-20px_rgba(200,245,96,0.35)]"
          : "border-border bg-surface",
      )}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-black">
          Most popular
        </span>
      )}
      <h3 className="text-lg font-semibold">{plan.name}</h3>
      <div className="mt-4 flex items-baseline gap-1.5">
        <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
        <span className="text-sm text-muted">{plan.period}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{plan.description}</p>
      <ul className="mt-8 space-y-3 border-t border-border pt-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 size-4 shrink-0 text-accent" />
            <span className="text-fg/90">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-2">
        <Button
          href="/contact"
          variant={plan.featured ? "primary" : "outline"}
          className="w-full"
          withArrow
        >
          {plan.cta}
        </Button>
      </div>
    </div>
  );
}
