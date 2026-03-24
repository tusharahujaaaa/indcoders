import { BUILDING_CONTENT } from "@/config/siteConfig";
import { Rocket, ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function BuildingSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="building"
      ref={ref}
      data-testid="building-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className={`text-sm font-medium tracking-wide uppercase text-cyan-400 font-body mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            The Road Ahead
          </p>
          <h2
            data-testid="building-heading"
            className={`font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {BUILDING_CONTENT.heading}
          </h2>
          <p className={`text-base md:text-lg text-[#A1A1AA] font-body leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {BUILDING_CONTENT.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BUILDING_CONTENT.items.map((item, i) => (
            <div
              key={item.title}
              data-testid={`building-card-${i}`}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/60 p-8 hover:border-white/20 transition-all duration-500 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all duration-300">
                  <Rocket size={18} className="text-cyan-400" />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-[#525252] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-[#A1A1AA] font-body text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
