"use client";

import { Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-tertiary">
          &copy; {new Date().getFullYear()} Kartikeya Bahuguna
        </p>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-text-tertiary hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <span className="text-xs text-text-tertiary">
            Built with Next.js &middot; Deployed on Vercel
          </span>
        </div>
      </div>
    </footer>
  );
}
