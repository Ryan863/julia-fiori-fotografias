import { Navbar } from "@/components/Navbar";
import { LandingPageShell } from "@/components/LandingPageShell";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { StudioSection } from "@/components/StudioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactLocationSection } from "@/components/ContactLocationSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <LandingPageShell>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <StudioSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactLocationSection />
      </LandingPageShell>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
