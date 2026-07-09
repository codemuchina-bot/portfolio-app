import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Job } from "@/data/experience";

export function Timeline({ jobs }: { jobs: Job[] }) {
  return (
    <ol className="relative border-l border-border">
      {jobs.map((job, i) => (
        <RevealOnScroll key={job.company + job.period} delay={i * 0.08}>
          <li className="relative ml-6 pb-12 last:pb-0">
            <span className="absolute -left-[1.9rem] top-1.5 size-3 rounded-full border-2 border-accent bg-bg" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-semibold">{job.role}</h3>
              <span className="text-sm text-muted">{job.period}</span>
            </div>
            <div className="mt-0.5 text-accent">{job.company}</div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {job.description}
            </p>
          </li>
        </RevealOnScroll>
      ))}
    </ol>
  );
}
