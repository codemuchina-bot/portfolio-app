"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { cn } from "@/lib/cn";
import type { Project } from "@/data/projects";

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              active === cat
                ? "border-accent bg-accent text-black"
                : "border-border text-muted hover:border-accent/40 hover:text-fg",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
