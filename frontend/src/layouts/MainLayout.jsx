import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children, onOpenResume, onReplayIntro }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#080D16] text-[#F8FAFC] selection:bg-[#FF5A1F] selection:text-white font-inter">
      {/* Navigation */}
      <Navbar onOpenResume={onOpenResume} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Footer */}
      <Footer onReplayIntro={onReplayIntro} />
    </div>
  );
}
