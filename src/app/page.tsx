import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import StatementSection from "@/components/StatementSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactFooterSection from "@/components/ContactFooterSection";

export default function Home() {
  return (
    <main className="relative min-h-dvh w-full bg-background text-foreground">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <StatementSection />
      <ContactFooterSection />
    </main>
  );
}
