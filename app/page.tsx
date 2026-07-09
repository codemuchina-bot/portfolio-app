import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <FeaturedWork />
      <ServicesSection limit={6} />
      <ProcessSection />
      <StatsSection />
      <BlogPreview />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
