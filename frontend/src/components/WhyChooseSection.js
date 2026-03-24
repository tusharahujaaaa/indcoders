import { WHY_CHOOSE_FEATURES } from "@/config/siteConfig";
import {
  Code2,
  Users,
  Heart,
  Target,
  GraduationCap,
  GitBranch,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const iconMap = {
  Code2,
  Users,
  Heart,
  Target,
  GraduationCap,
  GitBranch,
};

export default function WhyChooseSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="whychoose"
      ref={ref}
      data-testid="why-choose-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <p className={`text-sm font-medium tracking-wide uppercase text-purple-400 font-body mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Why IndCoders
        </p>
        <h2
          data-testid="why-choose-heading"
          className={`font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Why Choose Us
        </h2>
        <p className={`text-base md:text-lg text-[#A1A1AA] font-body leading-relaxed max-w-2xl mb-16 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Here is what sets IndCoders apart from the rest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_CHOOSE_FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Code2;
            return (
              <div
                key={feature.title}
                data-testid={`feature-card-${i}`}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/60 p-8 hover:border-white/20 hover:bg-[#111111]/80 transition-all duration-500 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#A1A1AA] font-body text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
