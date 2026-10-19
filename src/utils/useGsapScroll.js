import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Hook to execute GSAP animations with automatic context cleanup
 * @param {Function} animationCallback - Callback containing GSAP animations
 * @param {Array} dependencies - React dependency array
 */
export function useGsapScroll(animationCallback, dependencies = []) {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Use gsap.context for bulletproof cleanup and zero memory leaks
    const ctx = gsap.context(() => {
      animationCallback();
    });

    return () => {
      ctx.revert();
    };
  }, dependencies);
}
