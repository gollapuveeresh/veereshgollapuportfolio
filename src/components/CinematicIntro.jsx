import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CinematicIntro({ onComplete }) {
  const [stage, setStage] = useState("A"); // "A", "B", "C", "DONE"
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      handleFinish();
      return;
    }

    // Check if user already saw intro in current session
    const hasSeen = sessionStorage.getItem("vg_intro_viewed");
    if (hasSeen === "true") {
      handleFinish();
      return;
    }

    // Sequence timing
    const timerA = setTimeout(() => {
      setStage("B");
    }, 1100);

    const timerB = setTimeout(() => {
      setStage("C");
    }, 2400);

    const timerC = setTimeout(() => {
      handleFinish();
    }, 3600);

    return () => {
      clearTimeout(timerA);
      clearTimeout(timerB);
      clearTimeout(timerC);
    };
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem("vg_intro_viewed", "true");
    setStage("DONE");
    if (onComplete) onComplete();
  };

  const handleSkip = () => {
    setSkipped(true);
    handleFinish();
  };

  if (stage === "DONE" || skipped) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="cinematic-intro-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080D16] text-[#F8FAFC] select-none overflow-hidden"
      >
        {/* Subtle background ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF5A1F]/10 rounded-full blur-[140px]" />
          <div className="absolute inset-0 cinematic-grid opacity-30" />
        </div>

        {/* Skip Intro Button */}
        <button
          onClick={handleSkip}
          className="absolute top-8 right-8 z-50 flex items-center gap-2 px-4 py-2 text-xs font-space tracking-wider uppercase text-[#A5AFBD] hover:text-[#FF5A1F] border border-[#26364A] hover:border-[#FF5A1F] rounded-full transition-all duration-300 backdrop-blur-md bg-[#111D2D]/60 cursor-pointer"
          aria-label="Skip cinematic introduction"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {/* Central Stage Container */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl">
          {/* Stage A: Light Sweep & Minimal Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 relative"
          >
            {/* Animated Laser Sweep Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: stage === "A" ? 180 : 320, opacity: [0, 1, 0.8] }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#FF5A1F] to-transparent mx-auto mb-6"
            />

            {/* VG Monogram Badge */}
            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl border border-[#26364A] bg-[#111D2D]/90 shadow-2xl backdrop-blur-xl group">
              <span className="font-anton text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-white via-[#F8FAFC] to-[#FF5A1F]">
                VG
              </span>
              <div className="absolute inset-0 rounded-2xl border border-[#FF5A1F]/30 animate-pulse pointer-events-none" />
            </div>
          </motion.div>

          {/* Stage B: Staggered Name Reveal */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={stage !== "A" ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-anton text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase"
            >
              VEERESH <span className="text-[#FF5A1F]">GOLLAPU</span>
            </motion.h1>
          </div>

          {/* Subtitle: SOFTWARE DEVELOPER with Space Grotesk */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={stage === "B" || stage === "C" ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-3 text-xs sm:text-sm font-space tracking-[0.25em] text-[#A5AFBD] uppercase"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-[#FF5A1F] animate-ping" />
              <span>SOFTWARE DEVELOPER</span>
              <span className="text-[#26364A]">/</span>
              <span className="text-[#FF7A36]">IoT & WEB</span>
            </motion.div>
          </div>

          {/* Stage C: Smooth Transition Indicator */}
          {stage === "C" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 text-xs font-space tracking-widest text-[#A5AFBD]/70 uppercase"
            >
              Entering Portfolio...
            </motion.div>
          )}
        </div>

        {/* Bottom Status bar */}
        <div className="absolute bottom-6 left-0 right-0 px-8 flex justify-between items-center text-[11px] font-space text-[#A5AFBD]/50 tracking-wider">
          <span>PORTFOLIO v2.0</span>
          <span>CURATED EXPERIENCE</span>
          <span>EST. 2026</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
