import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import VenturesSection from "@/components/home/VenturesSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsSection from "@/components/home/StatsSection";
import GlobalPresence from "@/components/home/GlobalPresence";
import GlobalNetwork from "@/components/home/GlobalNetwork";
import Testimonials from "@/components/home/Testimonials";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div aria-hidden className="pointer-events-none h-16 bg-gradient-to-b from-navy to-black" />
      <BrandStory />
      <div aria-hidden className="pointer-events-none h-16 bg-gradient-to-b from-black to-navy" />
      <VenturesSection />
      <ServicesGrid />
      <StatsSection />
      <GlobalPresence />
      <GlobalNetwork />
      <Testimonials />
      <ProcessTimeline />
      <ContactSection />
    </>
  );
}
