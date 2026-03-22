"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { siteConfig } from "@/lib/content";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Hire Fit", href: "#jd-matcher" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-text-primary font-bold text-lg tracking-tight hover:text-accent transition-colors"
        >
          KB
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-accent bg-accent-subtle"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Feature Flag Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-text-secondary hover:text-text-primary bg-bg-secondary border border-border hover:border-border-hover transition-all"
          >
            <span className="text-text-tertiary">Feature Flag:</span>
            <span>Dark Mode</span>
            <div
              className={`relative w-8 h-4 rounded-full transition-colors ${
                theme === "dark" ? "bg-accent" : "bg-border"
              }`}
            >
              <div
                className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${
                  theme === "dark" ? "translate-x-4" : "translate-x-0.5"
                }`}
              />
            </div>
          </button>

          <a
            href={siteConfig.resumePath}
            download
            className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-bg-primary/95 backdrop-blur-xl z-40">
          <div className="flex flex-col items-center gap-2 pt-12 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3 text-lg text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-mono text-text-secondary bg-bg-secondary border border-border"
              >
                <span>Dark Mode</span>
                <div
                  className={`relative w-8 h-4 rounded-full transition-colors ${
                    theme === "dark" ? "bg-accent" : "bg-border"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${
                      theme === "dark" ? "translate-x-4" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </button>
            </div>
            <a
              href={siteConfig.resumePath}
              download
              className="mt-4 flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
