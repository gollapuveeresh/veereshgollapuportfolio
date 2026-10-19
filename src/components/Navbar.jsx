import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" }
];

export default function Navbar({ onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#080D16]/90 backdrop-blur-md border-b border-[#26364A]/80 shadow-lg shadow-black/20"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Logo / Monogram */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] rounded-lg p-1"
              aria-label="Veeresh Gollapu Home"
            >
              <div className="w-10 h-10 rounded-xl bg-[#111D2D] border border-[#26364A] flex items-center justify-center transition-all duration-300 group-hover:border-[#FF5A1F] group-hover:shadow-[0_0_15px_rgba(255,90,31,0.3)]">
                <span className="font-anton text-lg tracking-wider text-white group-hover:text-[#FF5A1F] transition-colors">
                  VG
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-space text-sm font-semibold tracking-wide text-[#F8FAFC] group-hover:text-white transition-colors">
                  VEERESH GOLLAPU
                </span>
                <span className="text-[10px] font-space tracking-widest text-[#FF5A1F] uppercase font-medium">
                  Software Developer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#111D2D]/70 border border-[#26364A]/80 backdrop-blur-lg">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `relative px-4 py-1.5 text-xs font-inter font-medium tracking-wide transition-all duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-[#A5AFBD] hover:text-[#F8FAFC]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 bg-[#FF5A1F]/15 border border-[#FF5A1F]/40 rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />}
                        {link.name}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Right Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenResume}
                className="px-4 py-2 text-xs font-space tracking-wider uppercase text-[#F8FAFC] hover:text-[#FF5A1F] border border-[#26364A] hover:border-[#FF5A1F] rounded-lg transition-all duration-200 bg-[#111D2D]/60 hover:bg-[#111D2D] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
              >
                Resume
              </button>

              <Link
                to="/contact"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-space font-medium tracking-wider uppercase text-white bg-[#FF5A1F] hover:bg-[#FF7A36] rounded-lg transition-all duration-200 shadow-md shadow-[#FF5A1F]/20 hover:shadow-[#FF5A1F]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Trigger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[#111D2D] border border-[#26364A] text-[#F8FAFC] hover:border-[#FF5A1F] hover:text-[#FF5A1F] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Slide-out Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden bg-[#080D16]/95 backdrop-blur-xl flex flex-col justify-between p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Top Bar inside overlay */}
            <div className="flex items-center justify-between pb-6 border-b border-[#26364A]">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#111D2D] border border-[#FF5A1F] flex items-center justify-center">
                  <span className="font-anton text-lg text-[#FF5A1F]">VG</span>
                </div>
                <span className="font-space font-bold tracking-wide text-white">VEERESH GOLLAPU</span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-lg bg-[#111D2D] border border-[#26364A] flex items-center justify-center text-[#F8FAFC] hover:text-[#FF5A1F] hover:border-[#FF5A1F]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links list */}
            <div className="flex flex-col gap-3 my-auto py-6">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between p-3 text-lg font-space uppercase tracking-wider rounded-xl transition-all duration-200 border ${
                      isActive
                        ? "bg-[#111D2D] border-[#FF5A1F] text-[#FF5A1F] font-semibold"
                        : "border-transparent text-[#A5AFBD] hover:text-white hover:bg-[#111D2D]/50"
                    }`
                  }
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-[#A5AFBD]/40 font-mono">0{idx + 1}</span>
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </NavLink>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#26364A] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenResume) onOpenResume();
                }}
                className="w-full py-3 text-center text-xs font-space tracking-wider uppercase text-white bg-[#111D2D] border border-[#26364A] hover:border-[#FF5A1F] rounded-xl transition-colors"
              >
                View Resume
              </button>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-xs font-space tracking-wider uppercase text-white bg-[#FF5A1F] hover:bg-[#FF7A36] rounded-xl font-medium transition-colors"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
