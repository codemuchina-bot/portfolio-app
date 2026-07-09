"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "section";
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  y = 24,
}: Props) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
