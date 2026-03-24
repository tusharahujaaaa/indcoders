import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/config/siteConfig";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Button } from "@/components/ui/button";

const sectionIds = NAV_LINKS.map((l) => l.href);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            data-testid="navbar-logo"
            onClick={() => scrollTo("hero")}
            className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity"
          >
            Ind<span className="gradient-text">Coders</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                data-testid={`nav-link-${link.href}`}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-white bg-white/10"
                    : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              data-testid="nav-join-btn"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center justify-center text-center rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 px-6 py-2 text-sm"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            data-testid="mobile-menu"
            className="md:hidden pb-6 animate-fade-in"
          >
            <div className="flex flex-col gap-1 bg-[#111111]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  data-testid={`mobile-nav-${link.href}`}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.href
                      ? "text-white bg-white/10"
                      : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                data-testid="mobile-join-btn"
                onClick={() => scrollTo("contact")}
                className="mt-2 inline-flex items-center justify-center text-center rounded-full bg-white text-black font-semibold py-3 px-6 text-sm hover:bg-gray-200 transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
