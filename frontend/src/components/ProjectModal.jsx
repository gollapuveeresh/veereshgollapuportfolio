import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080D16]/90 backdrop-blur-md overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#111D2D] border border-[#26364A] rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-[#080D16]/80 text-[#A5AFBD] hover:text-white border border-[#26364A] hover:border-[#FF5A1F] transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image Banner */}
          <div className="relative aspect-video w-full bg-[#080D16] overflow-hidden border-b border-[#26364A]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111D2D] via-transparent to-black/30" />
            <div className="absolute bottom-4 left-6">
              <span className="px-3 py-1 text-xs font-space font-medium rounded-full bg-[#FF5A1F]/20 text-[#FF5A1F] border border-[#FF5A1F]/40 backdrop-blur-md">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-3 text-xs font-space text-[#FF7A36] mb-1">
                <span>PROJECT {project.id}</span>
                <span>•</span>
                <span>{project.status}</span>
              </div>
              <h2 id="modal-project-title" className="font-anton text-3xl sm:text-4xl text-white uppercase tracking-wide">
                {project.title}
              </h2>
              <p className="text-sm font-space text-[#A5AFBD] mt-1">
                {project.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#F8FAFC]/90 leading-relaxed font-inter">
              {project.description}
            </p>

            {/* Architecture Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xs font-space uppercase tracking-wider text-[#FF5A1F] font-semibold">
                  Technical Architecture
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A5AFBD]">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div>
              <h3 className="text-xs font-space uppercase tracking-wider text-[#A5AFBD] font-semibold mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-space rounded-lg bg-[#080D16] border border-[#26364A] text-[#F8FAFC]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 border-t border-[#26364A] flex flex-wrap items-center gap-4">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-space uppercase tracking-wider font-semibold text-white bg-[#080D16] border border-[#26364A] hover:border-[#FF5A1F] rounded-xl transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#FF5A1F]" />
                  <span>View Repository</span>
                </a>
              ) : (
                <div className="flex items-center gap-2 text-xs font-space text-[#A5AFBD]">
                  <AlertCircle className="w-4 h-4 text-[#FF7A36]" />
                  <span>Repository link available upon request</span>
                </div>
              )}

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-space uppercase tracking-wider font-semibold text-white bg-[#FF5A1F] hover:bg-[#FF7A36] rounded-xl transition-colors"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-xs font-space text-[#A5AFBD]/70 italic">
                  Live demo environment provisioned locally
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
