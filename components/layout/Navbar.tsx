"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/cn";
import { nav } from "@/data/nav";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors",
                      active ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </Link>
                  {item.children && (
                    <div className="invisible absolute left-0 top-full w-72 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="rounded-2xl border border-border bg-surface p-2 shadow-2xl shadow-black/40">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl px-4 py-3 transition-colors hover:bg-surface-2"
                          >
                            <div className="text-sm font-medium text-fg">
                              {child.label}
                            </div>
                            {child.desc && (
                              <div className="mt-0.5 text-xs text-muted">
                                {child.desc}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Button href="/contact" size="sm" className="hidden sm:inline-flex" withArrow>
              Start a project
            </Button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex size-10 items-center justify-center rounded-full border border-border text-fg lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
