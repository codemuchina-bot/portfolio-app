import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)}>
      {children}
    </section>
  );
}
