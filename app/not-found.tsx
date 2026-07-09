import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="font-display text-8xl font-bold tracking-tight text-accent md:text-9xl">
            404
          </div>
          <h1 className="mt-6 text-3xl font-semibold md:text-4xl">
            This page went missing
          </h1>
          <p className="mt-4 text-lg text-muted">
            The link may be broken or the page may have moved. Let&apos;s get you
            back on track.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/" size="lg" withArrow>
              Back home
            </Button>
            <Button href="/portfolio" size="lg" variant="outline">
              Browse work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
