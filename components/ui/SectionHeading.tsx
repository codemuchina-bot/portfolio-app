import { cn } from "@/lib/cn";
import { RevealOnScroll } from "./RevealOnScroll";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: Props) {
  return (
    <RevealOnScroll
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-sm font-medium text-accent",
            align === "center" && "justify-center",
          )}
        >
          <span className="size-1.5 rounded-full bg-accent" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-semibold sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
      )}
    </RevealOnScroll>
  );
}
