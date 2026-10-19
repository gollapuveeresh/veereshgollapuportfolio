import React, { useEffect } from "react";
import { X, Download, Printer, ExternalLink, Briefcase, GraduationCap, Code, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080D16]/90 backdrop-blur-md overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#111D2D] border border-[#26364A] rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#26364A] bg-[#080D16]/80">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FF5A1F]" />
              <span id="resume-title" className="font-space text-sm font-semibold tracking-wider uppercase text-white">
                Curriculum Vitae — Veeresh Gollapu
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-space text-[#A5AFBD] hover:text-white bg-[#111D2D] border border-[#26364A] hover:border-[#FF5A1F] rounded-lg transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-[#A5AFBD] hover:text-white hover:bg-[#26364A]/50 rounded-lg transition-colors cursor-pointer"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto font-inter text-[#F8FAFC] space-y-8 print:p-0 print:max-h-none print:overflow-visible">
            {/* Header / Identity */}
            <div className="border-b border-[#26364A] pb-6">
              <h1 className="font-anton text-4xl sm:text-5xl tracking-wide text-white mb-1 uppercase">
                VEERESH <span className="text-[#FF5A1F]">GOLLAPU</span>
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-space text-[#A5AFBD]">
                <span className="text-[#FF7A36] font-medium">Software Developer</span>
                <span>•</span>
                <span>Associate IT Engineer @ VPD Technologies</span>
                <span>•</span>
                <span>India</span>
              </div>
              <p className="mt-3 text-sm text-[#A5AFBD] leading-relaxed max-w-2xl">
                Software developer passionate about engineering modern digital experiences, IoT hardware-software telemetry systems, and practical digital solutions.
              </p>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="flex items-center gap-2 text-sm font-space uppercase tracking-widest text-[#FF5A1F] font-bold mb-4">
                <Briefcase className="w-4 h-4" />
                <span>Professional Experience</span>
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#080D16]/60 border border-[#26364A]/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-semibold text-white text-base">Associate IT Engineer</h3>
                    <span className="text-xs font-space px-2.5 py-0.5 rounded-full bg-[#FF5A1F]/15 text-[#FF7A36] border border-[#FF5A1F]/30 w-fit">
                      PRESENT
                    </span>
                  </div>
                  <p className="text-xs font-space text-[#A5AFBD] mb-3">VPD Technologies • India</p>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-[#A5AFBD] space-y-1.5 leading-relaxed">
                    <li>Enterprise IT engineering and digital software operations.</li>
                    <li>Technical problem solving, software system workflows, and operational reliability.</li>
                    <li>Collaborating with cross-functional technical teams on system maintenance and deployment.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="flex items-center gap-2 text-sm font-space uppercase tracking-widest text-[#FF5A1F] font-bold mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h2>
              <div className="p-4 rounded-xl bg-[#080D16]/60 border border-[#26364A]/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-semibold text-white text-base">
                    B.Tech in Computer Science and Engineering (IoT)
                  </h3>
                  <span className="text-xs font-space text-[#A5AFBD]">Graduated</span>
                </div>
                <p className="text-xs sm:text-sm text-[#A5AFBD] leading-relaxed">
                  Specialized in Internet of Things (IoT), distributed sensor telemetry, embedded system programming, software engineering, and database management.
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="flex items-center gap-2 text-sm font-space uppercase tracking-widest text-[#FF5A1F] font-bold mb-4">
                <Code className="w-4 h-4" />
                <span>Technical Skills</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-[#080D16]/40 border border-[#26364A]">
                  <span className="font-space text-[#FF7A36] block mb-1">Languages:</span>
                  <span className="text-[#A5AFBD]">Python, Java, C, JavaScript</span>
                </div>
                <div className="p-3 rounded-lg bg-[#080D16]/40 border border-[#26364A]">
                  <span className="font-space text-[#FF7A36] block mb-1">Frontend:</span>
                  <span className="text-[#A5AFBD]">React, HTML5, CSS3, Tailwind CSS</span>
                </div>
                <div className="p-3 rounded-lg bg-[#080D16]/40 border border-[#26364A]">
                  <span className="font-space text-[#FF7A36] block mb-1">Databases:</span>
                  <span className="text-[#A5AFBD]">SQL, MySQL, MongoDB</span>
                </div>
                <div className="p-3 rounded-lg bg-[#080D16]/40 border border-[#26364A]">
                  <span className="font-space text-[#FF7A36] block mb-1">IoT & Tools:</span>
                  <span className="text-[#A5AFBD]">ESP32, Git, VS Code, Node.js, Express.js</span>
                </div>
              </div>
            </div>

            {/* Key Projects Snapshot */}
            <div>
              <h2 className="flex items-center gap-2 text-sm font-space uppercase tracking-widest text-[#FF5A1F] font-bold mb-4">
                <Layers className="w-4 h-4" />
                <span>Featured Engineering Projects</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#080D16]/60 border border-[#26364A]">
                  <h4 className="font-bold text-white text-sm mb-1">FlightFinder</h4>
                  <p className="text-[#A5AFBD] mb-2">MERN flight booking application with real-time seat reservation.</p>
                  <span className="text-[11px] font-space text-[#FF7A36]">React • Node.js • Express • MongoDB</span>
                </div>
                <div className="p-3 rounded-lg bg-[#080D16]/60 border border-[#26364A]">
                  <h4 className="font-bold text-white text-sm mb-1">Smart Home Automation</h4>
                  <p className="text-[#A5AFBD] mb-2">Python & ESP32 distributed telemetry and environmental control.</p>
                  <span className="text-[11px] font-space text-[#FF7A36]">Python • ESP32 • MQTT • WebSockets</span>
                </div>
                <div className="p-3 rounded-lg bg-[#080D16]/60 border border-[#26364A]">
                  <h4 className="font-bold text-white text-sm mb-1">IoT Attendance Monitoring</h4>
                  <p className="text-[#A5AFBD] mb-2">RFID and biometric automated attendance logging system.</p>
                  <span className="text-[11px] font-space text-[#FF7A36]">ESP32 • RFID • Python • MySQL</span>
                </div>
                <div className="p-3 rounded-lg bg-[#080D16]/60 border border-[#26364A]">
                  <h4 className="font-bold text-white text-sm mb-1">IoT Mental Wellness Monitor</h4>
                  <p className="text-[#A5AFBD] mb-2">Real-time physiological sensor telemetry (HRV, GSR) & analytics.</p>
                  <span className="text-[11px] font-space text-[#FF7A36]">Python • IoT Sensors • Flask • Analytics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer inside modal */}
          <div className="p-4 bg-[#080D16] border-t border-[#26364A] flex justify-between items-center text-xs font-space text-[#A5AFBD]">
            <span>Verified Factual Profile</span>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#FF5A1F] hover:bg-[#FF7A36] text-white rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF / Print</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
