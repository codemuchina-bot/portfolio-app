"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Fake async submit — no backend.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("done");
    setEmail("");
  };

  if (status === "done") {
    return (
      <p className="mt-4 flex items-center gap-2 text-sm text-accent">
        <Check className="size-4" /> You&apos;re on the list. Thanks!
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <div className="flex items-center gap-2 rounded-full border border-border bg-bg p-1 focus-within:border-accent/50">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@company.com"
          aria-label="Email address"
          className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted/60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Subscribe"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-black transition-colors hover:bg-accent-dim disabled:opacity-50"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-400">Please enter a valid email.</p>
      )}
    </form>
  );
}
