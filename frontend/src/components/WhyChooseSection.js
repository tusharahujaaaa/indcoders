import { WHY_CHOOSE_FEATURES } from "@/config/siteConfig";
import {
  Code2,
  Users,
  Target,
  Cpu,
  TrendingUp,
  Shield,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const iconMap = {
  Code2,
  Users,
  Target,
  Cpu,
  TrendingUp,
  Shield,
};

const accentColors = [
  "text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/20",
  "text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/20",
  "text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20",
  "text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/20",
  "text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/20",
  "text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20",
];

export default function WhyChooseSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="whychoose"
      ref={ref}
      data-testid="why-choose-section"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mb-20">
          <p className={`text-sm font-medium tracking-widest uppercase text-purple-400 font-body mb-5 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Why IndCoders
          </p>
          <h2
            data-testid="why-choose-heading"
            className={`font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Why Businesses Choose Us
          </h2>
          <p className={`text-base md:text-lg text-[#999] font-body leading-[1.8] transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            We do not just write code — we build solutions that drive your business forward. Here is what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_CHOOSE_FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Code2;
            return (
              <div
                key={feature.title}
                data-testid={`feature-card-${i}`}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111111]/40 p-7 lg:p-8 hover:border-white/15 transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + i * 70}ms` }}
              >
                <div className={`w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 transition-all duration-300 ${accentColors[i]}`}>
                  <Icon size={18} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#999] font-body text-sm leading-[1.8]">
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
