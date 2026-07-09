"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Faq } from "@/data/faqs";

export function FAQItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-base font-medium md:text-lg">{faq.q}</span>
        <Plus
          className={`size-5 shrink-0 text-accent transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 leading-relaxed text-muted">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
