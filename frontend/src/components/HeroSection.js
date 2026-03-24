import { HERO_CONTENT } from "@/config/siteConfig";
import { Sparkles, Terminal } from "lucide-react";

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
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/8 blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/6 blur-[130px]" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-10 animate-fade-in">
          <Terminal size={14} className="text-cyan-400" />
          <span className="text-sm font-medium text-[#A1A1AA] font-body tracking-wide">
            Developer Community
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        </div>

        {/* Title */}
        <h1
          data-testid="hero-title"
          className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 animate-fade-in-up leading-[0.95]"
        >
          {HERO_CONTENT.titleLine1}
          <br />
          <span className="gradient-text">{HERO_CONTENT.titleAccent}</span>
          <br />
          <span className="text-white">{HERO_CONTENT.titleLine2}</span>
        </h1>

        {/* Subtitle */}
        <p
          data-testid="hero-subtitle"
          className="text-base md:text-lg text-[#888] font-body leading-relaxed max-w-xl mx-auto mb-12 animate-fade-in-up animation-delay-200"
        >
          {HERO_CONTENT.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <button
            data-testid="hero-explore-btn"
            onClick={() => scrollTo("about")}
            className="group inline-flex items-center justify-center text-center rounded-full bg-white text-[#0A0A0A] font-semibold hover:bg-gray-100 transition-all duration-300 px-8 py-3.5 text-sm shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)]"
          >
            <span className="inline-flex items-center justify-center gap-2">
              Explore Our Work
              <Sparkles size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
          </button>
          <button
            data-testid="hero-contact-btn"
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center justify-center text-center rounded-full bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md px-8 py-3.5 text-sm font-semibold"
          >
            Talk to Us
          </button>
        </div>
      </div>
    </section>
  );
}
