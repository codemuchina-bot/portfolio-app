import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} to start a project or ask a question.`,
};

const contactDetails = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone}` },
  { icon: MapPin, label: "Location", value: site.location },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start something"
        subtitle="Tell me about your project and I'll reply within a business day with honest, useful thoughts — no sales fluff."
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-8">
              {contactDetails.map((detail) => {
                const DetailIcon = detail.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent">
                      <DetailIcon className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted">{detail.label}</div>
                      <div className="mt-0.5 font-medium">{detail.value}</div>
                    </div>
                  </div>
                );
                return detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="block transition-opacity hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={detail.label}>{content}</div>
                );
              })}

              <div className="rounded-card border border-border bg-surface p-6">
                <div className="inline-flex items-center gap-2 text-sm text-accent">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                  {site.availability}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  I take on a limited number of projects to keep the quality bar
                  high. Reach out early to reserve a slot.
                </p>
              </div>
            </div>

            <div className="rounded-card border border-border bg-surface/50 p-6 md:p-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
