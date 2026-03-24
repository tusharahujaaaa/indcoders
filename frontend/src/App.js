import "@/App.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import TeamSection from "@/components/TeamSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseSection />
        <WhatWeDoSection />
        <ProjectsSection />
        <TechStackSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
