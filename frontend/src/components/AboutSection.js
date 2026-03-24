import { ABOUT_CONTENT } from "@/config/siteConfig";
import { Separator } from "@/components/ui/separator";
import { Crosshair, Eye, Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const cardIcons = [Crosshair, Eye, Zap];
const cardColors = ["blue", "purple", "cyan"];

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Section divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <p className={`text-sm font-medium tracking-widest uppercase text-blue-400 font-body mb-5 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          About Us
        </p>

        <h2
          data-testid="about-heading"
          className={`font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 max-w-3xl transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {ABOUT_CONTENT.heading}
        </h2>

        <p className={`text-base md:text-lg text-[#999] font-body leading-[1.8] max-w-3xl mb-20 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {ABOUT_CONTENT.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { title: "Our Mission", text: ABOUT_CONTENT.mission },
            { title: "Our Vision", text: ABOUT_CONTENT.vision },
            { title: "Why We Exist", text: ABOUT_CONTENT.whyWeExist },
          ].map((item, i) => {
            const Icon = cardIcons[i];
            const color = cardColors[i];
            return (
              <div
                key={item.title}
                data-testid={`about-card-${i}`}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111111]/40 p-8 lg:p-10 hover:border-white/15 transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                    color === "blue"
                      ? "from-transparent via-blue-500 to-transparent"
                      : color === "purple"
                      ? "from-transparent via-purple-500 to-transparent"
                      : "from-transparent via-cyan-500 to-transparent"
                  } opacity-50 group-hover:opacity-80 transition-opacity`}
                />
                <div className={`w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 ${
                  color === "blue" ? "text-blue-400" : color === "purple" ? "text-purple-400" : "text-cyan-400"
                }`}>
                  <Icon size={18} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <Separator className="bg-white/[0.06] mb-5" />
                <p className="text-[#999] font-body leading-[1.8] text-sm">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
