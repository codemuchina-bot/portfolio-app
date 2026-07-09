"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { services } from "@/data/services";

const budgets = ["< $5k", "$5k – $15k", "$15k – $50k", "$50k+", "Not sure yet"];

const fieldClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent/60";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(form.get("name") || "").trim()) next.name = "Please tell me your name.";
    const email = String(form.get("email") || "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email.";
    if (!String(form.get("message") || "").trim())
      next.message = "A few words about the project, please.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("loading");
    // Fake async submit — no backend.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="flex flex-col items-center justify-center rounded-card border border-accent/40 bg-surface p-12 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-accent text-black">
          <Check className="size-7" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold">Message sent</h3>
        <p className="mt-3 max-w-sm text-muted">
          Thanks for reaching out — I&apos;ll get back to you within one business
          day. Talk soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" placeholder="Jane Doe" className={fieldClass} />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            className={fieldClass}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium">
            What do you need?
          </label>
          <select id="service" name="service" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium">
            Budget
          </label>
          <select id="budget" name="budget" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          About the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What are you building, and what does success look like?"
          className={`${fieldClass} resize-none`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-black transition-colors hover:bg-accent-dim disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" && <Loader2 className="size-4 animate-spin" />}
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
