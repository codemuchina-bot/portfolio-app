import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { logos } from "@/data/logos";

export function LogoMarquee() {
  return (
    <section className="border-y border-border py-12">
      <Container>
        <p className="mb-8 text-center text-sm text-muted">
          Trusted by teams building the things you use
        </p>
      </Container>
      <Marquee items={logos} />
    </section>
  );
}
