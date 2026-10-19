import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CinematicIntro from "./components/CinematicIntro";
import ResumeModal from "./components/ResumeModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Only show cinematic intro if not previously viewed in this browser session
    const hasSeen = sessionStorage.getItem("vg_intro_viewed");
    if (!hasSeen) {
      setShowIntro(true);
    }
  }, []);

  const handleReplayIntro = () => {
    sessionStorage.removeItem("vg_intro_viewed");
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <ScrollToTop />

      {/* Cinematic Opening Sequence */}
      {showIntro && (
        <CinematicIntro
          onComplete={() => {
            setShowIntro(false);
          }}
        />
      )}

      {/* Structured Application Layout */}
      <MainLayout
        onOpenResume={() => setIsResumeOpen(true)}
        onReplayIntro={handleReplayIntro}
      >
        <Routes>
          <Route path="/" element={<Home onOpenResume={() => setIsResumeOpen(true)} />} />
          <Route path="/about" element={<About onOpenResume={() => setIsResumeOpen(true)} />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience onOpenResume={() => setIsResumeOpen(true)} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home onOpenResume={() => setIsResumeOpen(true)} />} />
        </Routes>
      </MainLayout>

      {/* Factual Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </Router>
  );
}
