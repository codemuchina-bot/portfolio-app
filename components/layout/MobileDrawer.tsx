"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { nav } from "@/data/nav";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";

export function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Flatten nav + children into a single list of links.
  const links = nav.flatMap((item) =>
    item.children ? item.children : [{ label: item.label, href: item.href }],
  );
  const seen = new Set<string>();
  const uniqueLinks = links.filter((l) =>
    seen.has(l.href) ? false : (seen.add(l.href), true),
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-[85%] max-w-sm flex-col border-l border-border bg-surface p-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                onClick={onClose}
                className="flex size-10 items-center justify-center rounded-full border border-border"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-1">
              {uniqueLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="rounded-xl px-4 py-3 text-lg font-medium text-fg transition-colors hover:bg-surface-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <Button href="/contact" onClick={onClose} className="w-full" withArrow>
                Start a project
              </Button>
              <p className="mt-6 text-sm text-muted">{site.email}</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
