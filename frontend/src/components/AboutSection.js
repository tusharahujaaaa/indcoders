import { ABOUT_CONTENT } from "@/config/siteConfig";
import { Separator } from "@/components/ui/separator";
import { useInView } from "@/hooks/useInView";

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section label */}
        <p className={`text-sm font-medium tracking-wide uppercase text-blue-400 font-body mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          About Us
        </p>

        <h2
          data-testid="about-heading"
          className={`font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {ABOUT_CONTENT.heading}
        </h2>

        <p className={`text-base md:text-lg text-[#A1A1AA] font-body leading-relaxed max-w-3xl mb-16 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {ABOUT_CONTENT.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Our Mission", text: ABOUT_CONTENT.mission, color: "blue" },
            { title: "Our Vision", text: ABOUT_CONTENT.vision, color: "purple" },
            { title: "Why We Exist", text: ABOUT_CONTENT.whyWeExist, color: "cyan" },
          ].map((item, i) => (
            <div
              key={item.title}
              data-testid={`about-card-${i}`}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/60 p-8 hover:border-white/20 transition-all duration-500 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${
                  item.color === "blue"
                    ? "from-transparent via-blue-500 to-transparent"
                    : item.color === "purple"
                    ? "from-transparent via-purple-500 to-transparent"
                    : "from-transparent via-cyan-500 to-transparent"
                } opacity-60`}
              />
              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <Separator className="bg-white/10 mb-4" />
              <p className="text-[#A1A1AA] font-body leading-relaxed text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
