import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Clock, MapPin, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import { submitContactMessage } from "../services/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null); // { type: 'success' | 'error', message: string, data?: any }

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Full name is required.";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      errs.subject = "Subject is required.";
    }
    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Please provide at least 15 characters for context.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await submitContactMessage(formData);
      setSubmitResult({
        type: "success",
        message: "Your message has been validated and recorded. In this frontend version, data is dispatched through the modular API service layer ready for the upcoming FastAPI service integration.",
        data: response.data
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      setSubmitResult({
        type: "error",
        message: "An issue occurred connecting to the service interface. Please reach out directly via email."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080D16] text-[#F8FAFC] pt-28 pb-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#FF5A1F]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#111D2D] rounded-full blur-[130px]" />
        <div className="absolute inset-0 cinematic-grid opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#26364A] pb-10 mb-14">
          <div className="flex items-center gap-2 text-xs font-space tracking-widest text-[#FF5A1F] uppercase font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            <span>LET’S COLLABORATE & CONNECT</span>
          </div>
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white">
            GET IN <span className="text-gradient-orange">TOUCH</span>
          </h1>
          <p className="mt-4 font-space text-sm sm:text-base text-[#A5AFBD] max-w-2xl">
            Interested in discussing full-stack web engineering, IoT systems, or freelance opportunities? Send a message or reach out across channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#111D2D]/60 border border-[#26364A] space-y-6">
              <h2 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wide">
                DIRECT CHANNELS
              </h2>

              <p className="text-sm font-inter text-[#A5AFBD] leading-relaxed">
                I am currently open to engineering conversations, technical collaborations, and select freelance projects.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Direct */}
                <a
                  href="mailto:contact@veereshgollapu.dev"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#080D16]/80 border border-[#26364A] hover:border-[#FF5A1F] transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#111D2D] border border-[#26364A] group-hover:border-[#FF5A1F] flex items-center justify-center text-[#FF5A1F] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-space text-[#FF7A36] uppercase tracking-wider block">
                      EMAIL ME DIRECTLY
                    </span>
                    <span className="text-xs sm:text-sm font-space text-white group-hover:text-[#FF5A1F] transition-colors">
                      contact@veereshgollapu.dev
                    </span>
                  </div>
                </a>

                {/* Location & Timezone */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#080D16]/80 border border-[#26364A]">
                  <div className="w-10 h-10 rounded-xl bg-[#111D2D] border border-[#26364A] flex items-center justify-center text-[#FF5A1F]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-space text-[#FF7A36] uppercase tracking-wider block">
                      LOCATION
                    </span>
                    <span className="text-xs sm:text-sm font-space text-white">
                      India (IST / UTC +5:30)
                    </span>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#080D16]/80 border border-[#26364A]">
                  <div className="w-10 h-10 rounded-xl bg-[#111D2D] border border-[#26364A] flex items-center justify-center text-[#FF5A1F]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-space text-[#FF7A36] uppercase tracking-wider block">
                      RESPONSE TIME
                    </span>
                    <span className="text-xs sm:text-sm font-space text-white">
                      Usually within 24 to 48 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-[#26364A]/60">
                <span className="text-xs font-space uppercase tracking-wider text-[#A5AFBD] block mb-3 font-semibold">
                  DEVELOPER PLATFORMS
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#080D16] border border-[#26364A] hover:border-[#FF5A1F] text-xs font-space text-white hover:text-[#FF5A1F] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#080D16] border border-[#26364A] hover:border-[#FF5A1F] text-xs font-space text-white hover:text-[#FF5A1F] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Architecture note */}
            <div className="p-5 rounded-2xl bg-[#111D2D]/30 border border-[#26364A] flex items-start gap-3">
              <Terminal className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
              <div className="text-xs font-space text-[#A5AFBD] leading-relaxed">
                <strong className="text-white block mb-0.5">FastAPI Integration Hook Ready:</strong>
                Form submissions cleanly dispatch to <code className="text-[#FF7A36]">/src/services/api.js</code> configured to consume the upcoming FastAPI & Supabase PostgreSQL endpoints.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111D2D]/60 border border-[#26364A] relative">
              <div className="mb-6">
                <span className="text-xs font-space text-[#FF7A36] uppercase tracking-wider block">
                  COMMUNICATION FORM
                </span>
                <h2 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wide">
                  SEND A DIRECT MESSAGE
                </h2>
              </div>

              {/* Notification Banner */}
              {submitResult && (
                <div
                  className={`p-4 mb-6 rounded-2xl border text-xs sm:text-sm font-space flex items-start gap-3 ${
                    submitResult.type === "success"
                      ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-200"
                      : "bg-rose-950/40 border-rose-500/50 text-rose-200"
                  }`}
                  role="alert"
                >
                  {submitResult.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <strong className="block font-semibold mb-0.5">
                      {submitResult.type === "success" ? "Message Handled" : "Notice"}
                    </strong>
                    <span>{submitResult.message}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-space uppercase tracking-wider text-[#A5AFBD] mb-1.5 font-medium">
                    Your Name <span className="text-[#FF5A1F]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080D16] border text-white font-inter text-sm placeholder-[#A5AFBD]/40 focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] transition-colors ${
                      errors.name ? "border-rose-500" : "border-[#26364A] hover:border-[#FF5A1F]/50"
                    }`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-rose-400 font-space">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-space uppercase tracking-wider text-[#A5AFBD] mb-1.5 font-medium">
                    Your Email <span className="text-[#FF5A1F]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@domain.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080D16] border text-white font-inter text-sm placeholder-[#A5AFBD]/40 focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] transition-colors ${
                      errors.email ? "border-rose-500" : "border-[#26364A] hover:border-[#FF5A1F]/50"
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-rose-400 font-space">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-space uppercase tracking-wider text-[#A5AFBD] mb-1.5 font-medium">
                    Subject <span className="text-[#FF5A1F]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080D16] border text-white font-inter text-sm placeholder-[#A5AFBD]/40 focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] transition-colors ${
                      errors.subject ? "border-rose-500" : "border-[#26364A] hover:border-[#FF5A1F]/50"
                    }`}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-rose-400 font-space">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-space uppercase tracking-wider text-[#A5AFBD] mb-1.5 font-medium">
                    Message <span className="text-[#FF5A1F]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share requirements, context, or collaboration ideas..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#080D16] border text-white font-inter text-sm placeholder-[#A5AFBD]/40 focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] transition-colors resize-y ${
                      errors.message ? "border-rose-500" : "border-[#26364A] hover:border-[#FF5A1F]/50"
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-rose-400 font-space">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#FF5A1F] hover:bg-[#FF7A36] text-white font-space font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FF5A1F]/25 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
