import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import VenturesSection from "@/components/home/VenturesSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsSection from "@/components/home/StatsSection";
import GlobalPresence from "@/components/home/GlobalPresence";
import Testimonials from "@/components/home/Testimonials";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <VenturesSection />
      <ServicesGrid />
      <StatsSection />
      <GlobalPresence />
      <Testimonials />
      <ProcessTimeline />
      <ContactSection />
    </>
  );
}
