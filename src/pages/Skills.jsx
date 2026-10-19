import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Coffee, 
  Cpu, 
  Atom, 
  FileCode, 
  Layout, 
  Palette, 
  Database, 
  Server, 
  Layers, 
  GitBranch, 
  Terminal, 
  TerminalSquare, 
  Radio, 
  Boxes, 
  Network,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { skillCategories } from "../data/skills";

// Icon mapping helper
const iconMap = {
  Code: Code,
  Coffee: Coffee,
  Cpu: Cpu,
  Atom: Atom,
  FileCode: FileCode,
  Layout: Layout,
  Palette: Palette,
  Database: Database,
  Server: Server,
  Layers: Layers,
  GitBranch: GitBranch,
  Terminal: Terminal,
  TerminalSquare: TerminalSquare,
  Radio: Radio,
  Boxes: Boxes,
  Network: Network
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const displayedCategories =
    selectedFilter === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedFilter);

  return (
    <div className="relative min-h-screen bg-[#080D16] text-[#F8FAFC] pt-28 pb-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#FF5A1F]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-[#111D2D] rounded-full blur-[130px]" />
        <div className="absolute inset-0 cinematic-grid opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-b border-[#26364A] pb-10 mb-12">
          <div className="flex items-center gap-2 text-xs font-space tracking-widest text-[#FF5A1F] uppercase font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            <span>TECHNICAL PROFICIENCIES & TOOLS</span>
          </div>
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white">
            SKILLS & <span className="text-gradient-orange">TECHNOLOGY</span>
          </h1>
          <p className="mt-4 font-space text-sm sm:text-base text-[#A5AFBD] max-w-2xl">
            A structured breakdown of core languages, frontend tooling, databases, developer environments, and IoT microcontroller ecosystems.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-space tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  selectedFilter === cat
                    ? "bg-[#FF5A1F] text-white font-semibold shadow-md shadow-[#FF5A1F]/20"
                    : "bg-[#111D2D] text-[#A5AFBD] border border-[#26364A] hover:border-[#FF5A1F] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {displayedCategories.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, delay: groupIdx * 0.05 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#111D2D]/40 border border-[#26364A] space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#26364A]/60 pb-4">
                  <div>
                    <span className="text-xs font-space text-[#FF7A36] uppercase tracking-wider block">
                      GROUP 0{groupIdx + 1}
                    </span>
                    <h2 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wide">
                      {group.category}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm font-inter text-[#A5AFBD] max-w-lg">
                    {group.description}
                  </p>
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill, skillIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    return (
                      <div
                        key={skill.name}
                        className="p-5 rounded-2xl bg-[#080D16]/80 border border-[#26364A] hover:border-[#FF5A1F]/60 transition-all duration-300 group flex flex-col justify-between"
                      >
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-[#111D2D] border border-[#26364A] group-hover:border-[#FF5A1F] flex items-center justify-center text-[#FF5A1F] transition-colors">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-space tracking-wider uppercase bg-[#111D2D] text-[#A5AFBD] border border-[#26364A]">
                            {skill.level}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-space text-lg font-bold text-white group-hover:text-[#FF5A1F] transition-colors">
                            {skill.name}
                          </h3>
                          <p className="text-xs text-[#A5AFBD] mt-1 leading-relaxed">
                            {skill.highlight}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Factual Disclaimer & CTA banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#111D2D] via-[#080D16] to-[#111D2D] border border-[#26364A] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-space text-[#FF5A1F] uppercase tracking-wider font-semibold">
              EXPERIENCE APPLICATION
            </span>
            <h3 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wide">
              APPLIED IN REAL PROJECT ARCHITECTURES
            </h3>
            <p className="text-xs sm:text-sm text-[#A5AFBD] max-w-xl">
              All listed tools and technologies have been deployed across real-world web apps, IoT automation hardware, and enterprise IT engineering.
            </p>
          </div>
          <Link
            to="/projects"
            className="shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5A1F] hover:bg-[#FF7A36] text-white font-space text-xs uppercase tracking-wider font-semibold transition-colors shadow-lg shadow-[#FF5A1F]/20"
          >
            <span>See Them In Action</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
