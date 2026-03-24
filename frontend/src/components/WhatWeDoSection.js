import { SERVICES_DATA } from "@/config/siteConfig";
import { BookOpen, Hammer, Handshake, Compass } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const iconMap = {
  BookOpen,
  Hammer,
  HandshakeIcon: Handshake,
  Compass,
};

export default function WhatWeDoSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="whatwedo"
      ref={ref}
      data-testid="whatwedo-section"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <p className={`text-sm font-medium tracking-widest uppercase text-blue-400 font-body mb-5 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          What We Do
        </p>
        <h2
          data-testid="whatwedo-heading"
          className={`font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          How We Help You Grow
        </h2>
        <p className={`text-base md:text-lg text-[#999] font-body leading-[1.8] max-w-2xl mb-20 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          From your first line of code to your first shipped product — we have got you covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service, i) => {
            const Icon = iconMap[service.icon] || BookOpen;
            return (
              <div
                key={service.title}
                data-testid={`service-card-${i}`}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111111]/40 p-8 hover:border-white/15 transition-all duration-500 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                    <Icon size={22} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#999] font-body text-sm leading-[1.8]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
