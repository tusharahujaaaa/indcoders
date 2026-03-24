import { TESTIMONIALS_DATA } from "@/config/siteConfig";
import { useInView } from "@/hooks/useInView";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="testimonials"
      ref={ref}
      data-testid="testimonials-section"
      className="relative py-28 md:py-40 overflow-hidden bg-[#050505]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <p className={`text-sm font-medium tracking-widest uppercase text-purple-400 font-body mb-5 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Client Success
          </p>
          <h2
            className={`font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Trusted by Innovators
          </h2>
          <p className={`text-base md:text-lg text-[#999] font-body leading-[1.8] max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Don't just take our word for it. Here's what our partners say about working with IndCoders on their critical IT projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`group relative rounded-2xl border border-white/[0.06] bg-[#111111]/40 p-8 lg:p-10 hover:border-white/15 transition-all duration-500 flex flex-col justify-between ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div>
                <Quote size={32} className="text-purple-500/20 mb-6" />
                <p className="text-[#CCC] font-body text-base leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden flex-shrink-0">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-white/50 text-xl font-heading">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-[#888] font-body mt-0.5">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
