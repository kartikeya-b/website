"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check for touch device
    if (window.matchMedia("(hover: none)").matches) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHover = () => cursor.classList.add("hovering");
    const removeHover = () => cursor.classList.remove("hovering");

    document.addEventListener("mousemove", move);

    // Add hover effect to interactive elements
    const observe = () => {
      document
        .querySelectorAll("a, button, [role='button'], input, textarea, select, .card-glow")
        .forEach((el) => {
          el.addEventListener("mouseenter", addHover);
          el.addEventListener("mouseleave", removeHover);
        });
    };

    observe();
    // Re-observe on DOM changes
    const observer = new MutationObserver(observe);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
}
