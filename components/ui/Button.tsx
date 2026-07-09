import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

const base =
  "group inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-black hover:bg-accent-dim hover:-translate-y-0.5 shadow-[0_0_0_0_rgba(200,245,96,0.4)] hover:shadow-[0_8px_30px_-6px_rgba(200,245,96,0.5)]",
  outline:
    "border border-border text-fg hover:border-accent hover:text-accent hover:-translate-y-0.5",
  ghost: "text-muted hover:text-fg",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-base px-8 py-4",
};

function Inner({ children, withArrow }: { children: React.ReactNode; withArrow?: boolean }) {
  return (
    <>
      {children}
      {withArrow && (
        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );
}

type ButtonAsLink = BaseProps & { href: string } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof BaseProps | "href"
  >;
type ButtonAsButton = BaseProps & { href?: undefined } & Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof BaseProps
  >;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", withArrow, className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, withArrow: _w, className: _c, children: _ch, ...rest } =
      props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        <Inner withArrow={withArrow}>{children}</Inner>
      </Link>
    );
  }

  const { variant: _v, size: _s, withArrow: _w, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      <Inner withArrow={withArrow}>{children}</Inner>
    </button>
  );
}
