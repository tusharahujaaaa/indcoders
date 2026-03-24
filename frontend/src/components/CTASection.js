import { CTA_CONTENT } from "@/config/siteConfig";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function CTASection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

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
      ref={ref}
      data-testid="cta-section"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/[0.03] to-transparent" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2
          data-testid="cta-heading"
          className={`font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {CTA_CONTENT.heading}
        </h2>
        <p
          className={`text-base md:text-lg text-[#999] font-body leading-[1.8] max-w-2xl mx-auto mb-10 transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {CTA_CONTENT.subtitle}
        </p>
        <div className={`transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <button
            data-testid="cta-get-started-btn"
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center gap-3 rounded-full bg-white text-[#0A0A0A] font-semibold hover:bg-gray-100 transition-all duration-300 px-10 py-4 text-sm shadow-[0_0_40px_-8px_rgba(255,255,255,0.12)]"
          >
            {CTA_CONTENT.buttonText}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
