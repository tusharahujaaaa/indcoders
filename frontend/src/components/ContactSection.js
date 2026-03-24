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
      className="relative py-24 md:py-32 overflow-hidden"
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

      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className={`text-sm font-medium tracking-wide uppercase text-blue-400 font-body mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Get in Touch
          </p>
          <h2
            data-testid="contact-heading"
            className={`font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Let's Connect
          </h2>
          <p className={`text-base md:text-lg text-[#A1A1AA] font-body leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Have an idea or want to collaborate? We would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div
            className={`rounded-2xl border border-white/10 bg-[#111111]/60 p-8 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] font-body mb-2">
                  Name
                </label>
                <Input
                  data-testid="contact-name-input"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-11"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] font-body mb-2">
                  Email
                </label>
                <Input
                  data-testid="contact-email-input"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-11"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] font-body mb-2">
                  Message
                </label>
                <Textarea
                  data-testid="contact-message-input"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your idea..."
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>
              <Button
                type="submit"
                data-testid="contact-submit-btn"
                disabled={loading || sent}
                className="w-full rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 h-11 text-sm"
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
            <div className="rounded-2xl border border-white/10 bg-[#111111]/60 p-8">
              <h3 className="font-heading text-lg font-semibold text-white mb-6">
                Contact Details
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  data-testid="contact-email-link"
                  className="flex items-center gap-3 text-[#A1A1AA] hover:text-white transition-colors font-body text-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Mail size={18} className="text-blue-400" />
                  </div>
                  {CONTACT_INFO.email}
                </a>
                {CONTACT_INFO.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    data-testid={`contact-phone-${phone}`}
                    className="flex items-center gap-3 text-[#A1A1AA] hover:text-white transition-colors font-body text-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Phone size={18} className="text-blue-400" />
                    </div>
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-2xl border border-white/10 bg-[#111111]/60 p-8">
              <h3 className="font-heading text-lg font-semibold text-white mb-6">
                Follow Us
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
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
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
