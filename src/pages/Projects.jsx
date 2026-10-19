import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import { GithubIcon } from "../components/SocialIcons";
import { projects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ["All", "Web Development", "IoT & Embedded"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-[#080D16] text-[#F8FAFC] pt-28 pb-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#FF5A1F]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-[#111D2D] rounded-full blur-[130px]" />
        <div className="absolute inset-0 cinematic-grid opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#26364A] pb-10 mb-12">
          <div className="flex items-center gap-2 text-xs font-space tracking-widest text-[#FF5A1F] uppercase font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            <span>PORTFOLIO & WORK ARCHIVES</span>
          </div>
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white">
            SELECTED <span className="text-gradient-orange">PROJECTS</span>
          </h1>
          <p className="mt-4 font-space text-sm sm:text-base text-[#A5AFBD] max-w-2xl">
            A showcase of web applications and IoT hardware-software systems engineered with modern technologies and clean architecture.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-space tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#FF5A1F] text-white font-semibold shadow-md shadow-[#FF5A1F]/20"
                    : "bg-[#111D2D] text-[#A5AFBD] border border-[#26364A] hover:border-[#FF5A1F] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-3xl bg-[#111D2D]/50 border border-[#26364A] hover:border-[#FF5A1F]/80 overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Project Image & Overlay */}
                <div className="relative aspect-video overflow-hidden bg-[#080D16]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111D2D] via-transparent to-black/30" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-space bg-[#080D16]/90 text-[#FF5A1F] border border-[#26364A] backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Project ID */}
                  <div className="absolute top-4 right-4 text-xs font-space text-[#A5AFBD] font-mono px-2 py-0.5 rounded bg-[#080D16]/80 border border-[#26364A]">
                    {project.id}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div>
                      <h2 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-[#FF5A1F] transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-xs font-space text-[#FF7A36] mt-0.5">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm font-inter text-[#A5AFBD] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technical Highlights list */}
                    <ul className="space-y-1.5 pt-1 text-xs text-[#A5AFBD]">
                      {project.highlights.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-4 space-y-4 border-t border-[#26364A]/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-space rounded-md bg-[#080D16] border border-[#26364A] text-[#A5AFBD]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom CTA Actions */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-space uppercase tracking-wider text-white hover:text-[#FF5A1F] font-semibold transition-colors cursor-pointer"
                      >
                        <span>Full Specification</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#080D16] border border-[#26364A] text-[#A5AFBD] hover:text-[#FF5A1F] hover:border-[#FF5A1F] transition-colors"
                          title="View Source on GitHub"
                          aria-label={`View GitHub source code for ${project.title}`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal for detailed project view */}
      <ProjectModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
