import { PROJECTS_DATA } from "@/config/siteConfig";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function ProjectsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      data-testid="projects-section"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <p className={`text-sm font-medium tracking-widest uppercase text-cyan-400 font-body mb-5 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Our Portfolio
        </p>
        <h2
          data-testid="projects-heading"
          className={`font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Projects We Have Delivered
        </h2>
        <p className={`text-base md:text-lg text-[#999] font-body leading-[1.8] max-w-2xl mb-20 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Real solutions built for real businesses — on time, on budget, and built to scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((project, i) => (
            <div
              key={project.title}
              data-testid={`project-card-${i}`}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111111]/40 p-8 hover:border-white/15 transition-all duration-500 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

              <div className="relative z-10">
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-[#999] font-body text-sm leading-[1.8] mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-white/5 border border-white/10 text-[#A1A1AA] hover:bg-white/10 text-xs font-body rounded-full px-3"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      data-testid={`project-github-${i}`}
                      className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors font-body"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      <span>Source</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      data-testid={`project-live-${i}`}
                      className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors font-body"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
