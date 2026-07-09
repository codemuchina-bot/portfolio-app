import Link from "next/link";
import { site } from "@/data/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 text-lg font-semibold tracking-tight ${className ?? ""}`}
    >
      <span className="flex size-7 items-center justify-center rounded-md bg-accent font-display text-sm font-bold text-black">
        D
      </span>
      <span className="font-display">{site.name}</span>
    </Link>
  );
}
