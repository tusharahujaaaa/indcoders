import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from "@/config/siteConfig";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer data-testid="footer" className="relative border-t border-white/5 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-heading text-2xl font-bold text-white tracking-tight mb-4">
              Ind<span className="gradient-text">Coders</span>
            </div>
            <p className="text-[#A1A1AA] font-body text-sm leading-relaxed max-w-sm mb-6">
              Empowering developers through projects, mentorship, and community.
              Building the future of developer education in India.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: SOCIAL_LINKS.github, label: "github" },
                { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "linkedin" },
                { icon: MessageCircle, href: SOCIAL_LINKS.discord, label: "discord" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  data-testid={`footer-social-${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    data-testid={`footer-link-${link.href}`}
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-[#A1A1AA] hover:text-white transition-colors font-body"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  data-testid="footer-email"
                  className="text-sm text-[#A1A1AA] hover:text-white transition-colors font-body"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              {CONTACT_INFO.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone}`}
                    data-testid={`footer-phone-${phone}`}
                    className="text-sm text-[#A1A1AA] hover:text-white transition-colors font-body"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-white/5 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#525252] font-body">
            {new Date().getFullYear()} IndCoders. All rights reserved.
          </p>
          <p className="text-sm text-[#525252] font-body">
            Built with passion by the IndCoders community.
          </p>
        </div>
      </div>
    </footer>
  );
}
