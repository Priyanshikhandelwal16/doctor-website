import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import ConditionsSection from "@/components/home/ConditionsSection";
import StatsSection from "@/components/home/StatsSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TechnologySection from "@/components/home/TechnologySection";
import AwardsSection from "@/components/home/AwardsSection";
import FAQSection from "@/components/home/FAQSection";
import AppointmentCTA from "@/components/ui/AppointmentCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TrustSection />
      <ConditionsSection />
      <ProcessSection />
      <TestimonialsSection />
      <TechnologySection />
      <AwardsSection />
      <FAQSection />
      <AppointmentCTA />
    </>
  );
}
