import { Icon } from "@/components/ui/Icon";
import type { ProcessStep as Step } from "@/data/process";

export function ProcessStep({ step, index }: { step: Step; index: number }) {
  return (
    <div className="group relative rounded-card border border-border bg-surface p-8 transition-colors duration-300 hover:border-accent/40">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-medium text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent transition-colors duration-300 group-hover:border-accent/40">
          <Icon name={step.icon} className="size-6" />
        </div>
      </div>
      <h3 className="text-xl font-semibold">{step.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
    </div>
  );
}
