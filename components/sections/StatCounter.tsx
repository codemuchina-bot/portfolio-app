"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import type { Stat } from "@/data/stats";

export function StatCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, stat.value]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="text-5xl font-semibold tracking-tight text-fg md:text-6xl">
        {display}
        <span className="text-accent">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-sm text-muted">{stat.label}</div>
    </div>
  );
}
