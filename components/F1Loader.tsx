"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function F1Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Only show on first visit per session
    const visited = sessionStorage.getItem("f1-loaded");
    if (visited) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("f1-loaded", "true");
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] bg-bg-primary flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Speed lines */}
          <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
                style={{
                  top: `${40 + i * 10}%`,
                  width: "40%",
                }}
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: "100vw", opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeIn",
                }}
              />
            ))}

            {/* Number 44 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 1.1] }}
              transition={{ duration: 0.8, times: [0, 0.3, 0.7, 1] }}
              className="text-6xl font-bold font-mono text-accent/30"
            >
              44
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
