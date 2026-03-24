import { BUILDING_CONTENT } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";

const phaseColors = {
  Now: "bg-blue-500",
  Next: "bg-purple-500",
  Soon: "bg-cyan-500",
  Vision: "bg-white",
};

const phaseTextColors = {
  Now: "text-blue-400",
  Next: "text-purple-400",
  Soon: "text-cyan-400",
  Vision: "text-white",
};

export default function BuildingSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="building"
      ref={ref}
      data-testid="building-section"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mb-20">
          <p className={`text-sm font-medium tracking-widest uppercase text-cyan-400 font-body mb-5 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            The Road Ahead
          </p>
          <h2
            data-testid="building-heading"
            className={`font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {BUILDING_CONTENT.heading}
          </h2>
          <p className={`text-base md:text-lg text-[#999] font-body leading-[1.8] transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {BUILDING_CONTENT.subtitle}
          </p>
        </div>

        {/* Timeline layout */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-cyan-500/20" />

          <div className="space-y-8">
            {BUILDING_CONTENT.items.map((item, i) => (
              <div
                key={item.title}
                data-testid={`building-card-${i}`}
                className={`relative flex items-start gap-6 md:gap-10 transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex flex-col items-center shrink-0">
                  <div className={`w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/10 bg-[#0A0A0A] flex items-center justify-center`}>
                    <div className={`w-3 h-3 rounded-full ${phaseColors[item.phase]}`} />
                  </div>
                </div>

                {/* Content card */}
                <div className="group flex-1 rounded-2xl border border-white/[0.06] bg-[#111111]/40 p-7 lg:p-8 hover:border-white/15 transition-all duration-300 -mt-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-code font-medium tracking-widest uppercase ${phaseTextColors[item.phase]}`}>
                      {item.phase}
                    </span>
                    <span className="h-[1px] flex-1 bg-white/[0.06]" />
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#999] font-body text-sm leading-[1.8]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
