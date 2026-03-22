"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShipLog from "@/components/ShipLog";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import JDMatcher from "@/components/JDMatcher";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ChatBot from "@/components/ChatBot";
import F1Loader from "@/components/F1Loader";

export default function Home() {
  return (
    <>
      <F1Loader />
      {/* Animated blob background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-indigo-900/15 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[150px] animate-blob animation-delay-4000 mix-blend-screen" />
        <div className="absolute inset-0 noise-overlay" />
      </div>
      <Navbar />
      <CommandPalette />
      <main>
        <Hero />
        <ShipLog />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <JDMatcher />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
