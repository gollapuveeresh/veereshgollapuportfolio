import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Compass, ArrowRight, Download, Terminal, Cpu, Sparkles } from "lucide-react";
import { freelanceFocus } from "../data/experience";

export default function About({ onOpenResume }) {
  return (
    <div className="relative min-h-screen bg-[#080D16] text-[#F8FAFC] pt-28 pb-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#FF5A1F]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-[#111D2D] rounded-full blur-[130px]" />
        <div className="absolute inset-0 cinematic-grid opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Title Banner */}
        <div className="border-b border-[#26364A] pb-10 mb-16">
          <div className="flex items-center gap-2 text-xs font-space tracking-widest text-[#FF5A1F] uppercase font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            <span>BIOGRAPHY & BACKGROUND</span>
          </div>
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white">
            ABOUT <span className="text-gradient-orange">VEERESH GOLLAPU</span>
          </h1>
          <p className="mt-4 font-space text-sm sm:text-base text-[#A5AFBD] max-w-2xl">
            Software developer with an academic foundation in IoT and professional role as an Associate IT Engineer at VPD Technologies.
          </p>
        </div>

        {/* Two-Column Editorial Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 space-y-6">
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#26364A] via-[#111D2D] to-[#FF5A1F]/40 shadow-2xl">
                <div className="relative rounded-[22px] overflow-hidden bg-[#080D16] aspect-[4/5]">
                  <img
                    src="/images/veeresh_portrait.jpg"
                    alt="Veeresh Gollapu Portrait"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#111D2D]/90 border border-[#26364A] backdrop-blur-md">
                    <span className="text-[10px] font-space text-[#FF7A36] uppercase tracking-wider block">
                      LOCATION & STATUS
                    </span>
                    <span className="text-xs font-space text-white font-medium">
                      India • Open for Freelance Collaboration
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Resume CTA under portrait */}
              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111D2D] border border-[#26364A] hover:border-[#FF5A1F] text-white font-space text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#FF5A1F]" />
                <span>View Complete CV / Resume</span>
              </button>
            </div>
          </div>

          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            {/* Story Section */}
            <div className="space-y-6 font-inter text-[#A5AFBD] leading-relaxed text-base sm:text-lg">
              <h2 className="font-anton text-3xl sm:text-4xl text-white uppercase tracking-wide">
                AN INTERSECTION OF SOFTWARE & EMBEDDED SYSTEMS
              </h2>
              <p>
                I am a dedicated software developer driven by a passion for building practical, resilient, and responsive digital solutions. With a firm grasp of both frontend and backend concepts, I enjoy solving problems at the confluence of code logic and real-world system behavior.
              </p>
              <p>
                My educational background is in <strong className="text-white font-medium">Computer Science and Engineering with a specialization in the Internet of Things (IoT)</strong>. This background provided me with a strong foundation in algorithmic reasoning, distributed sensors, embedded firmware with microcontrollers such as the ESP32, and networking protocols.
              </p>
              <p>
                Currently, I apply and expand my technical capabilities as an <strong className="text-white font-medium">Associate IT Engineer at VPD Technologies</strong>. In this role, I focus on software systems operations, troubleshooting, and enterprise IT engineering.
              </p>
            </div>

            {/* Factual Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Card 1: Education */}
              <div className="p-6 rounded-2xl bg-[#111D2D]/60 border border-[#26364A] hover:border-[#FF5A1F]/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#080D16] border border-[#26364A] flex items-center justify-center text-[#FF5A1F] mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-space text-[#FF7A36] uppercase tracking-wider block mb-1">
                  ACADEMIC DEGREE
                </span>
                <h3 className="font-space font-bold text-white text-base mb-2">
                  B.Tech in CSE (IoT)
                </h3>
                <p className="text-xs sm:text-sm text-[#A5AFBD] leading-relaxed">
                  Focus on Computer Science fundamentals, IoT architecture, microcontroller interfacing, and database systems.
                </p>
              </div>

              {/* Card 2: Current Professional Role */}
              <div className="p-6 rounded-2xl bg-[#111D2D]/60 border border-[#26364A] hover:border-[#FF5A1F]/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#080D16] border border-[#26364A] flex items-center justify-center text-[#FF5A1F] mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-space text-[#FF7A36] uppercase tracking-wider block mb-1">
                  CURRENT ROLE
                </span>
                <h3 className="font-space font-bold text-white text-base mb-2">
                  Associate IT Engineer
                </h3>
                <p className="text-xs sm:text-sm text-[#A5AFBD] leading-relaxed">
                  VPD Technologies. Engaged in IT engineering infrastructure, system reliability, and software operations.
                </p>
              </div>
            </div>

            {/* Freelance & Continuous Learning */}
            <div className="p-8 rounded-2xl bg-[#111D2D]/40 border border-[#26364A] space-y-6">
              <div>
                <span className="text-xs font-space text-[#FF5A1F] uppercase tracking-wider font-semibold">
                  ASPIRATIONS & FREELANCING
                </span>
                <h3 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wide mt-1">
                  CONTINUOUS LEARNING & COLLABORATION
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#A5AFBD] leading-relaxed">
                Technology moves forward rapidly, and continuous learning is core to my mindset. Outside of my primary responsibilities, I actively explore emerging frontend paradigms, cloud backends, and freelance development projects that solve tangible challenges.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {freelanceFocus.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#080D16]/60 border border-[#26364A]">
                    <h4 className="text-xs font-space font-bold text-white uppercase mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#A5AFBD] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation back to other sections */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF5A1F] hover:bg-[#FF7A36] text-white font-space text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <span>Explore Technical Skills</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111D2D] border border-[#26364A] hover:border-[#FF5A1F] text-white font-space text-xs uppercase tracking-wider transition-colors"
              >
                <span>View Projects Gallery</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
