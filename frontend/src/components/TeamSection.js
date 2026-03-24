import { TEAM_DATA } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";

export default function TeamSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      id="team"
      ref={ref}
      data-testid="team-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <p className={`text-sm font-medium tracking-wide uppercase text-purple-400 font-body mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Our Team
        </p>
        <h2
          data-testid="team-heading"
          className={`font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Meet the People Behind IndCoders
        </h2>
        <p className={`text-base md:text-lg text-[#A1A1AA] font-body leading-relaxed max-w-2xl mb-16 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          A small but passionate team building something meaningful.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {TEAM_DATA.map((member, i) => (
            <div
              key={member.name + i}
              data-testid={`team-card-${i}`}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/60 hover:border-white/20 transition-all duration-500 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-400 font-body mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-[#A1A1AA] font-body leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
