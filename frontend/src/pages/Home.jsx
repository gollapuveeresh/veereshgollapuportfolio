import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Download, 
  Cpu, 
  Layers, 
  Code2, 
  Radio, 
  Terminal, 
  ShieldCheck, 
  Mail,
  Video,
  Play
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import { projects } from "../data/projects";
import { useGsapScroll, gsap } from "../utils/useGsapScroll";

export default function Home({ onOpenResume }) {
  const [videoError, setVideoError] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useGsapScroll(() => {
    // Parallax background drift
    gsap.to(".gsap-ambient-glow", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Staggered reveal for Engineering Pillars
    gsap.from(".gsap-pillar-card", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".gsap-pillars-section",
        start: "top 80%",
      },
    });

    // Reveal for Featured Projects
    gsap.from(".gsap-project-item", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".gsap-featured-section",
        start: "top 75%",
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#080D16] text-[#F8FAFC] overflow-hidden pt-24 sm:pt-28">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="gsap-ambient-glow absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#FF5A1F]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#111D2D] rounded-full blur-[120px]" />
        <div className="absolute inset-0 cinematic-grid opacity-25" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 lg:pt-16 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Live Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#111D2D]/90 border border-[#26364A] text-xs font-space tracking-wider uppercase w-fit backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A1F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5A1F]" />
              </span>
              <span className="text-[#A5AFBD]">ROLE:</span>
              <span className="text-white font-semibold">SOFTWARE DEVELOPER</span>
              <span className="text-[#26364A]">|</span>
              <span className="text-[#FF7A36]">VPD TECHNOLOGIES</span>
            </motion.div>

            {/* Oversized Anton Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="font-anton text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95] text-white">
                ENGINEER <br />
                <span className="text-gradient-orange">IN THE MAKING</span>
              </h1>
            </motion.div>

            {/* Factual Editorial Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-base sm:text-lg text-[#A5AFBD] max-w-xl leading-relaxed"
            >
              I’m <span className="text-white font-medium">Veeresh Gollapu</span>, a software developer passionate about building modern digital experiences and practical digital solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/projects"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#FF5A1F] hover:bg-[#FF7A36] text-white font-space font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FF5A1F]/25 hover:shadow-[#FF5A1F]/40 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#111D2D] hover:bg-[#111D2D]/90 border border-[#26364A] hover:border-[#FF5A1F] text-[#F8FAFC] font-space font-semibold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#FF5A1F]" />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Verified Social & Contact strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex items-center gap-6 text-xs font-space text-[#A5AFBD]"
            >
              <span className="text-[#A5AFBD]/60 uppercase tracking-widest text-[11px]">CONNECT:</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF5A1F] transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF5A1F] transition-colors flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <Link
                to="/contact"
                className="hover:text-[#FF5A1F] transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Cinematic Portrait & Video Integration (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-1 bg-gradient-to-b from-[#26364A] via-[#111D2D] to-[#FF5A1F]/30 shadow-2xl">
              <div className="relative rounded-[22px] overflow-hidden bg-[#080D16] aspect-[4/5] group">
                {/* Optional Video / Fallback Portrait */}
                {!videoError && (
                  <video
                    ref={videoRef}
                    poster="/images/veeresh_portrait.jpg"
                    playsInline
                    muted
                    loop
                    onError={() => setVideoError(true)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src="/videos/intro_avatar.mp4" type="video/mp4" />
                  </video>
                )}

                {/* Portrait Display (Acts as poster or primary visual) */}
                {videoError && (
                  <img
                    src="/images/veeresh_portrait.jpg"
                    alt="Veeresh Gollapu — Software Developer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {/* Subtle Electric Orange Rim-Light and Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 border border-[#FF5A1F]/20 rounded-[22px] pointer-events-none" />

                {/* Floating Badge on Portrait */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#111D2D]/85 border border-[#26364A] backdrop-blur-md flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-space text-[#FF7A36] uppercase tracking-wider block">
                      PROFESSIONAL IDENTIFIER
                    </span>
                    <h3 className="font-space font-bold text-sm text-white">
                      VEERESH GOLLAPU
                    </h3>
                    <p className="text-xs text-[#A5AFBD]">
                      B.Tech (CSE - IoT) • Software Developer
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 flex items-center justify-center text-[#FF5A1F]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#FF5A1F]/40 rounded-bl-3xl pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#FF5A1F]/40 rounded-tr-3xl pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Domains of Engineering Section */}
      <section className="gsap-pillars-section relative z-10 py-16 bg-[#111D2D]/40 border-y border-[#26364A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-space tracking-widest text-[#FF5A1F] uppercase font-semibold">
                CORE CAPABILITIES
              </span>
              <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-wide mt-1">
                ENGINEERING PILLARS
              </h2>
            </div>
            <p className="text-sm font-inter text-[#A5AFBD] max-w-md">
              Combining software development with hardware-level IoT communication and scalable databases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="gsap-pillar-card p-8 rounded-2xl bg-[#080D16]/80 border border-[#26364A] hover:border-[#FF5A1F]/60 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#111D2D] border border-[#26364A] group-hover:border-[#FF5A1F] flex items-center justify-center text-[#FF5A1F] mb-6 transition-colors">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-space text-[#FF7A36] uppercase tracking-wider block mb-1">
                01 / FRONTEND & WEB
              </span>
              <h3 className="font-space text-lg font-bold text-white mb-2">
                Modern Web Applications
              </h3>
              <p className="text-sm text-[#A5AFBD] leading-relaxed mb-4">
                Creating responsive, accessible, and high-performance digital experiences utilizing React, modern JavaScript, and Tailwind CSS.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-space text-[#A5AFBD]">
                <span className="px-2 py-0.5 rounded bg-[#111D2D] border border-[#26364A]">React</span>
                <span className="px-2 py-0.5 rounded bg-[#111D2D] border border-[#26364A]">Tailwind</span>
                <span className="px-2 py-0.5 rounded bg-[#111D2D] border border-[#26364A]">JavaScript</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="gsap-pillar-card p-8 rounded-2xl bg-[#080D16]/80 border border-[#26364A] hover:border-[#FF5A1F]/60 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#111D2D] border border-[#26364A] group-hover:border-[#FF5A1F] flex items-center justify-center text-[#FF5A1F] mb-6 transition-colors">
                <Radio className="w-6 h-6" />
              </div>
              <span className="text-xs font-space text-[#FF7A36] uppercase tracking-wider block mb-1">
                02 / EMBEDDED SYSTEMS
              </span>
              <h3 className="font-space text-lg font-bold text-white mb-2">
                IoT Telemetry & Hardware
              </h3>
              <p className="text-sm text-[#A5AFBD] leading-relaxed mb-4">
                Architecting sensor communication networks, ESP32 microcontrollers, and real-time MQTT telemetry streaming.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-space text-[#A5AFBD]">
                <span className="px-2 py-0.5 rounded bg-[#111D2D] border border-[#26364A]">ESP32</span>
                <span className="px-2 py-0.5 rounded bg-[#111D2D] border border-[#26364A]">Python</span>
                <span className="px-2 py-0.5 rounded bg-[#111D2D] border border-[#26364A]">MQTT / Sensors</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="gsap-pillar-card p-8 rounded-2xl bg-[#080D16]/80 border border-[#26364A] hover:border-[#FF5A1F]/60 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#111D2D] border border-[#26364A] group-hover:border-[#FF5A1F] flex items-center justify-center text-[#FF5A1F] mb-6 transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-space text-[#FF7A36] uppercase tracking-wider block mb-1">
                03 / SYSTEMS & DATA
              </span>
              <h3 className="font-space text-lg font-bold text-white mb-2">
                Databases & Backend Logic
              </h3>
              <p className="text-sm text-[#A5AFBD] leading-relaxed mb-4">
                Designing relational schemas in SQL / MySQL, document modeling in MongoDB, and efficient server-side logic in Python and Node.js.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-space text-[#A5AFBD]">
                <span className="px-2 py-0.5 rounded bg-[#111D2D] border border-[#26364A]">SQL / MySQL</span>
                <span className="px-2 py-0.5 rounded bg-[#111D2D] border border-[#26364A]">MongoDB</span>
                <span className="px-2 py-0.5 rounded bg-[#111D2D] border border-[#26364A]">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase Snapshot */}
      <section className="gsap-featured-section relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-space tracking-widest text-[#FF5A1F] uppercase font-semibold">
              CURATED SELECTION
            </span>
            <h2 className="font-anton text-4xl sm:text-5xl text-white uppercase tracking-wide mt-1">
              FEATURED PROJECTS
            </h2>
          </div>
          <Link
            to="/projects"
            className="flex items-center gap-2 text-xs font-space uppercase tracking-wider text-[#FF5A1F] hover:text-[#FF7A36] font-semibold transition-colors"
          >
            <span>View All 4 Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="gsap-project-item group relative rounded-2xl bg-[#111D2D]/60 border border-[#26364A] hover:border-[#FF5A1F]/80 overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden bg-[#080D16]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111D2D] via-transparent to-black/20" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-space bg-[#080D16]/80 text-[#FF5A1F] border border-[#26364A] backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 text-xs font-space text-[#A5AFBD] font-mono">
                  {project.id}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <h3 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-[#FF5A1F] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-space text-[#FF7A36] mt-0.5">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm font-inter text-[#A5AFBD] leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-space rounded bg-[#080D16] border border-[#26364A] text-[#A5AFBD]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#26364A] flex items-center justify-between">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-1.5 text-xs font-space uppercase tracking-wider text-white hover:text-[#FF5A1F] font-semibold transition-colors"
                  >
                    <span>Inspect Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-xs font-space text-[#A5AFBD]/60">Status: {project.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action band */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-[#111D2D]/60 to-[#080D16] border-t border-[#26364A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-space tracking-widest text-[#FF5A1F] uppercase font-semibold">
            FORWARD THINKING
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-wide">
            LET’S ENGINEER MEANINGFUL SOLUTIONS TOGETHER
          </h2>
          <p className="text-sm sm:text-base font-inter text-[#A5AFBD] max-w-xl mx-auto leading-relaxed">
            Whether you have an upcoming engineering role, freelance initiative, or IoT project, I bring dedication and technical curiosity to every build.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-[#FF5A1F] hover:bg-[#FF7A36] text-white font-space font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#FF5A1F]/30"
            >
              Get In Touch
            </Link>
            <Link
              to="/about"
              className="px-8 py-3.5 rounded-xl bg-[#111D2D] hover:bg-[#111D2D]/80 border border-[#26364A] hover:border-[#FF5A1F] text-white font-space font-semibold text-xs tracking-wider uppercase transition-all"
            >
              Read About Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
