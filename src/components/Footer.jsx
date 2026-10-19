import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Mail, Play, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer({ onReplayIntro }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080D16] border-t border-[#26364A] text-[#A5AFBD] pt-16 pb-12 overflow-hidden">
      {/* Background glow streak */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FF5A1F]/40 to-transparent" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#FF5A1F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#26364A]/60">
          {/* Col 1: Brand & Status */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#111D2D] border border-[#26364A] flex items-center justify-center">
                <span className="font-anton text-base text-[#FF5A1F]">VG</span>
              </div>
              <span className="font-space text-lg font-bold tracking-wide text-white">
                VEERESH GOLLAPU
              </span>
            </Link>
            <p className="text-sm font-inter text-[#A5AFBD] max-w-md leading-relaxed">
              Software developer passionate about engineering modern digital experiences, IoT telemetry systems, and practical digital solutions.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111D2D] border border-[#26364A] text-xs font-space text-[#F8FAFC]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Associate IT Engineer @ VPD Technologies</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h2 className="text-xs font-space uppercase tracking-widest text-[#F8FAFC] font-semibold mb-4">
              Explore
            </h2>
            <ul className="space-y-2 text-sm font-inter">
              <li>
                <Link to="/" className="hover:text-[#FF5A1F] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FF5A1F] transition-colors">About Story</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-[#FF5A1F] transition-colors">Technical Stack</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#FF5A1F] transition-colors">Featured Projects</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-[#FF5A1F] transition-colors">Experience & Education</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF5A1F] transition-colors">Contact Form</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Interactive */}
          <div>
            <h2 className="text-xs font-space uppercase tracking-widest text-[#F8FAFC] font-semibold mb-4">
              Connect
            </h2>
            <div className="flex flex-col space-y-3 text-sm font-inter">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#FF5A1F] transition-colors group"
              >
                <GithubIcon className="w-4 h-4 text-[#A5AFBD] group-hover:text-[#FF5A1F]" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#FF5A1F] transition-colors group"
              >
                <LinkedinIcon className="w-4 h-4 text-[#A5AFBD] group-hover:text-[#FF5A1F]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:contact@veereshgollapu.dev"
                className="flex items-center gap-2.5 hover:text-[#FF5A1F] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#A5AFBD] group-hover:text-[#FF5A1F]" />
                <span>Email Direct</span>
              </a>

              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="mt-3 inline-flex items-center gap-2 text-xs font-space text-[#FF5A1F] hover:text-[#FF7A36] cursor-pointer pt-2"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Replay Cinematic Intro</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-space text-[#A5AFBD]/70">
          <p>© {new Date().getFullYear()} Veeresh Gollapu. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span>Built with React, Tailwind & Motion</span>
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111D2D] border border-[#26364A] text-white hover:border-[#FF5A1F] hover:text-[#FF5A1F] transition-all cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
