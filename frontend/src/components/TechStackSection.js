import { TECH_STACK_DATA } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";
import { Terminal, Database, Cloud, Smartphone, Monitor, Layers } from "lucide-react";

const categoryIcons = {
  Frontend: Monitor,
  Backend: Terminal,
  Database: Database,
  Cloud: Cloud,
  Mobile: Smartphone,
  DevOps: Layers,
};

export default function TechStackSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="techstack"
      ref={ref}
      data-testid="techstack-section"
      className="relative py-28 md:py-40 overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <p className={`text-sm font-medium tracking-widest uppercase text-cyan-400 font-body mb-5 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Our Technologies
          </p>
          <h2
            className={`font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Tech Stack We Master
          </h2>
          <p className={`text-base md:text-lg text-[#999] font-body leading-[1.8] max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            We build with modern, scalable, and reliable technologies to ensure your software is future-proof and performs at the highest level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK_DATA.map((category, i) => {
            const Icon = categoryIcons[category.name] || Terminal;
            return (
              <div
                key={category.name}
                className={`group relative rounded-2xl border border-white/[0.06] bg-[#111111]/40 p-8 hover:border-white/15 transition-all duration-500 flex flex-col items-center text-center ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/10 transition-transform duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-[#A1A1AA] bg-white/[0.04] border border-white/[0.08] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
