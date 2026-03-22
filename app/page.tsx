"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShipLog from "@/components/ShipLog";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ChatBot from "@/components/ChatBot";
import F1Loader from "@/components/F1Loader";

export default function Home() {
  return (
    <>
      <F1Loader />
      <Navbar />
      <CommandPalette />
      <main>
        <Hero />
        <ShipLog />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
