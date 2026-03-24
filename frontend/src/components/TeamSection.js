import { TEAM_DATA } from "@/config/siteConfig";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";

export default function TeamSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      id="team"
      ref={ref}
      data-testid="team-section"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <p className={`text-sm font-medium tracking-widest uppercase text-purple-400 font-body mb-5 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Our Team
        </p>
        <h2
          data-testid="team-heading"
          className={`font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          The People Behind This
        </h2>
        <p className={`text-base md:text-lg text-[#999] font-body leading-[1.8] max-w-2xl mb-20 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Small team, big ambitions. Everyone here builds.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {TEAM_DATA.map((member, i) => (
            <div
              key={member.name + i}
              data-testid={`team-card-${i}`}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111111]/40 hover:border-white/15 transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />
                {/* Role badge */}
                <div className="absolute bottom-4 left-5">
                  <Badge
                    variant="secondary"
                    className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-body rounded-full px-3 py-1"
                  >
                    {member.role}
                  </Badge>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 lg:p-7">
                <h3 className="font-heading text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-400 font-code mb-4">
                  {member.tagline}
                </p>
                <p className="text-sm text-[#999] font-body leading-[1.8]">
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
