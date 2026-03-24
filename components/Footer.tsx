"use client";

import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/30 py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-display font-bold text-accent">
            K
          </div>
          <span className="text-sm font-display font-bold text-text-primary">Bahuguna</span>
        </div>

        <p className="text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} Kartikeya Bahuguna. Designed with precision.
        </p>

        <div className="flex items-center gap-6">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary hover:text-accent transition-colors text-sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-text-tertiary hover:text-accent transition-colors text-sm"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <Link
            href="/how-i-built-this"
            className="text-xs text-text-tertiary hover:text-accent transition-colors"
          >
            How I PM&apos;d this website &rarr;
          </Link>
          <span className="text-xs text-text-tertiary font-mono">
            Next.js &middot; Vercel
          </span>
        </div>
      </div>
    </footer>
  );
}
