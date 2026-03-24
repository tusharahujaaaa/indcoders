import { HERO_CONTENT } from "@/config/siteConfig";
import { ArrowDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/8 blur-[100px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in">
          <Sparkles size={14} className="text-blue-400" />
          <span className="text-sm font-medium text-[#A1A1AA] font-body">
            Developer Community
          </span>
        </div>

        {/* Title */}
        <h1
          data-testid="hero-title"
          className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 animate-fade-in-up"
        >
          {HERO_CONTENT.title}
          <br />
          <span className="gradient-text">{HERO_CONTENT.titleAccent}</span>
        </h1>

        {/* Subtitle */}
        <p
          data-testid="hero-subtitle"
          className="text-base md:text-lg text-[#A1A1AA] font-body leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200"
        >
          {HERO_CONTENT.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <button
            data-testid="hero-explore-btn"
            onClick={() => scrollTo("about")}
            className="rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 px-8 py-3 text-sm shadow-lg shadow-white/10"
          >
            Explore
          </button>
          <button
            data-testid="hero-contact-btn"
            onClick={() => scrollTo("contact")}
            className="rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-md px-8 py-3 text-sm font-semibold"
          >
            Contact Us
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ArrowDown size={20} className="text-[#525252]" />
        </div>
      </div>
    </section>
  );
}
