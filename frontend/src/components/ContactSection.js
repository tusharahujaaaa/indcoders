import { useState } from "react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/config/siteConfig";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { toast, Toaster } from "sonner";
import { useInView } from "@/hooks/useInView";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        toast.success("Message sent successfully!");
        setTimeout(() => setSent(false), 4000);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      data-testid="contact-section"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <Toaster
        theme="dark"
        position="top-right"
        toastOptions={{
          style: {
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#EDEDED",
          },
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className={`text-sm font-medium tracking-widest uppercase text-blue-400 font-body mb-5 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Get in Touch
          </p>
          <h2
            data-testid="contact-heading"
            className={`font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Let's Build Something Together
          </h2>
          <p className={`text-base md:text-lg text-[#999] font-body leading-[1.8] max-w-xl mx-auto transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Got a project idea, a question, or just want to say hi? Drop us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div
            className={`rounded-2xl border border-white/[0.06] bg-[#111111]/40 p-8 lg:p-10 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <label className="block text-sm font-medium text-[#999] font-body mb-2.5">
                  Name
                </label>
                <Input
                  data-testid="contact-name-input"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-[#555] focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 h-12 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#999] font-body mb-2.5">
                  Email
                </label>
                <Input
                  data-testid="contact-email-input"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-[#555] focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 h-12 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#999] font-body mb-2.5">
                  Message
                </label>
                <Textarea
                  data-testid="contact-message-input"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're thinking..."
                  rows={5}
                  className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-[#555] focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 resize-none rounded-xl"
                />
              </div>
              <Button
                type="submit"
                data-testid="contact-submit-btn"
                disabled={loading || sent}
                className="w-full rounded-full bg-white text-[#0A0A0A] font-semibold hover:bg-gray-100 transition-all duration-300 h-12 text-sm"
              >
                {sent ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    Sent Successfully
                  </span>
                ) : loading ? (
                  "Sending..."
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {/* Info card */}
            <div className="rounded-2xl border border-white/[0.06] bg-[#111111]/40 p-8 lg:p-10">
              <h3 className="font-heading text-lg font-semibold text-white mb-8">
                Reach Out Directly
              </h3>
              <div className="space-y-5">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  data-testid="contact-email-link"
                  className="flex items-center gap-4 text-[#999] hover:text-white transition-colors font-body text-sm group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                    <Mail size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-[#666] mb-0.5">Email</p>
                    <p className="text-[#ccc] group-hover:text-white transition-colors">{CONTACT_INFO.email}</p>
                  </div>
                </a>
                {CONTACT_INFO.phones.map((phone, i) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    data-testid={`contact-phone-${phone}`}
                    className="flex items-center gap-4 text-[#999] hover:text-white transition-colors font-body text-sm group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                      <Phone size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-[#666] mb-0.5">Phone {i + 1}</p>
                      <p className="text-[#ccc] group-hover:text-white transition-colors">{phone}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-2xl border border-white/[0.06] bg-[#111111]/40 p-8 lg:p-10">
              <h3 className="font-heading text-lg font-semibold text-white mb-6">
                Find Us Online
              </h3>
              <div className="flex gap-3">
                {[
                  { icon: Github, label: "GitHub", href: SOCIAL_LINKS.github },
                  { icon: Linkedin, label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
                  { icon: MessageCircle, label: "Discord", href: SOCIAL_LINKS.discord },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    data-testid={`social-link-${social.label.toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#666] hover:text-white hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
