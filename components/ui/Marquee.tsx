import { cn } from "@/lib/cn";

type Props = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className }: Props) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div className="flex shrink-0 animate-[marquee_40s_linear_infinite] items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-2xl font-semibold tracking-tight text-muted/60 transition-colors hover:text-fg"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
