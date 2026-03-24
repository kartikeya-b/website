"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/lib/content";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mkoqalqo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="card-glow bg-gradient-to-b from-bg-secondary/50 to-transparent border border-border rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
        >
          {/* Dot pattern background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] opacity-50" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-4">
                Let&apos;s build something<br />exceptional.
              </h2>
              <p className="text-lg text-text-secondary max-w-xl mx-auto">
                Currently open for Senior PM roles in health-tech, fintech, and B2B SaaS across the UK. If you&apos;re looking for someone to drive your product vision forward, let&apos;s chat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">{siteConfig.email}</span>
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <span className="flex items-center gap-2 text-text-secondary">
                <MapPin size={18} />
                <span className="text-sm">{siteConfig.location}</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-lg mx-auto"
            >
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
                    <Send size={20} className="text-success" />
                  </div>
                  <h3 className="text-lg font-semibold font-display text-text-primary mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-bg-primary/50 border border-border rounded-xl text-text-primary text-sm focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-bg-primary/50 border border-border rounded-xl text-text-primary text-sm focus:outline-none focus:border-accent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-bg-primary/50 border border-border rounded-xl text-text-primary text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full transition-colors disabled:opacity-50 flex items-center justify-center gap-2 text-lg"
                  >
                    {status === "sending" ? (
                      "Sending..."
                    ) : (
                      <>
                        Say Hello <Send size={18} />
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-sm text-red-500 text-center">
                      Something went wrong. Please try emailing me directly.
                    </p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
