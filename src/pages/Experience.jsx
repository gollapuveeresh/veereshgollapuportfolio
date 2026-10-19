import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, ArrowRight, Download, Building } from "lucide-react";
import { experienceData, freelanceFocus } from "../data/experience";

export default function Experience({ onOpenResume }) {
  return (
    <div className="relative min-h-screen bg-[#080D16] text-[#F8FAFC] pt-28 pb-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#FF5A1F]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#111D2D] rounded-full blur-[130px]" />
        <div className="absolute inset-0 cinematic-grid opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#26364A] pb-10 mb-14">
          <div className="flex items-center gap-2 text-xs font-space tracking-widest text-[#FF5A1F] uppercase font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            <span>CAREER PATHWAY & EDUCATION</span>
          </div>
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white">
            EXPERIENCE & <span className="text-gradient-orange">TIMELINE</span>
          </h1>
          <p className="mt-4 font-space text-sm sm:text-base text-[#A5AFBD] max-w-2xl">
            A chronological timeline documenting enterprise IT engineering at VPD Technologies, academic training in Computer Science & IoT, and technical initiatives.
          </p>

          <div className="mt-6">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111D2D] border border-[#26364A] hover:border-[#FF5A1F] text-xs font-space uppercase tracking-wider text-white transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#FF5A1F]" />
              <span>Download Printable Resume</span>
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Rule */}
          <div className="hidden sm:block absolute top-8 bottom-8 left-[31px] w-[2px] bg-gradient-to-b from-[#FF5A1F] via-[#26364A] to-transparent" />

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 group"
              >
                {/* Timeline Node Indicator */}
                <div className="sm:shrink-0 flex items-center sm:block">
                  <div className="w-16 h-16 rounded-2xl bg-[#111D2D] border border-[#26364A] group-hover:border-[#FF5A1F] flex items-center justify-center text-[#FF5A1F] shadow-xl transition-all duration-300 relative z-10">
                    {item.role.includes("Associate") ? (
                      <Briefcase className="w-7 h-7" />
                    ) : (
                      <GraduationCap className="w-7 h-7" />
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 p-6 sm:p-8 rounded-3xl bg-[#111D2D]/50 border border-[#26364A] group-hover:border-[#FF5A1F]/60 transition-all duration-300 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#26364A]/60 pb-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-space text-[#FF7A36] uppercase tracking-wider mb-1">
                        <span>{item.type}</span>
                        <span>•</span>
                        <span>{item.period}</span>
                      </div>
                      <h2 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wide">
                        {item.role}
                      </h2>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-space tracking-wider uppercase bg-[#080D16] text-[#FF5A1F] border border-[#FF5A1F]/40 w-fit">
                      {item.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-space text-[#A5AFBD]">
                    <div className="flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-[#FF5A1F]" />
                      <span className="text-white font-medium">{item.company}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#FF5A1F]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-sm font-inter text-[#A5AFBD] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Core Responsibilities / Coursework */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-space uppercase tracking-wider text-[#FF5A1F] font-semibold block">
                      Key Highlights & Competencies
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#A5AFBD]">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-4 flex flex-wrap gap-1.5 border-t border-[#26364A]/60">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-space rounded bg-[#080D16] border border-[#26364A] text-[#A5AFBD]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supporting Freelance / Collaboration Focus */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#111D2D]/30 border border-[#26364A] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-space text-[#FF5A1F] uppercase tracking-wider font-semibold">
                SERVICE OFFERINGS
              </span>
              <h3 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wide mt-1">
                AVAILABLE FOR FREELANCE & CONTRACT WORK
              </h3>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF5A1F] hover:bg-[#FF7A36] text-white font-space text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
            >
              <span>Initiate Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-sm text-[#A5AFBD] max-w-2xl leading-relaxed">
            Committed to continuous improvement and applying high engineering standards to web applications and IoT telemetric systems. Open to contracting, technical consultation, and exciting engineering roles.
          </p>
        </div>
      </div>
    </div>
  );
}
