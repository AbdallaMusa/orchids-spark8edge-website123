"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState, useEffect, memo, useMemo } from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="overflow-y-scroll">
        <CinematicHeroSection />
        <ScrollytellingSection />
        <ArchitectsSection />
        <PartnersSection />
        <DualCTASection />
        <Footer />
      </main>
    </>
  );
}

const HERO_FEATURES = [
  { label: "Youth Development Programs" },
  { label: "Corporate Training Solutions" },
  { label: "Talent Recruitment Services" }
] as const;

const CinematicHeroSection = memo(function CinematicHeroSection() {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20 md:py-32"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#040F2D] via-[#040F2D]/95 to-[#040F2D]/90" />
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-6 py-2 bg-[#DFA236]/10 border border-[#DFA236]/30 rounded-full mb-6 md:mb-8"
        >
          <span className="font-inter text-xs md:text-sm text-[#DFA236] uppercase tracking-widest font-semibold">
            About Spark8Edge
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-montserrat font-extrabold text-4xl md:text-6xl lg:text-7xl text-white mb-6 md:mb-8 leading-tight"
        >
          Connecting Youth Talent<br />
          <span className="text-[#DFA236]">With Corporate Innovation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-inter text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12"
        >
          Spark8Edge bridges the gap between ambitious youth seeking tech careers and organizations needing fresh talent. We transform Nairobi&apos;s untapped potential into skilled professionals ready to drive business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base"
        >
          <div className="flex items-center gap-2 text-white">
            <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
            <span className="font-inter">Youth Development Programs</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
            <span className="font-inter">Corporate Training Solutions</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
            <span className="font-inter">Talent Recruitment Services</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ScrollytellingSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      number: "01",
      title: "The Challenge",
      subtitle: "Youth Unemployment Crisis",
      description: "Despite 60% youth unemployment in Nairobi, technology companies struggle to fill critical technical positions. This talent gap represents both a social challenge and a business opportunity.",
      icon: "⚠️",
    },
    {
      number: "02",
      title: "The Barrier",
      subtitle: "Communication Disconnect",
      description: "Organizations seek innovative talent but lack effective channels to reach, engage, and develop young professionals. Traditional recruitment methods fail to bridge this generational divide.",
      icon: "🔌",
    },
    {
      number: "03",
      title: "Our Solution",
      subtitle: "Dual-Impact Model",
      description: "Spark8Edge transforms unemployed youth into skilled professionals while providing corporations with a pipeline of job-ready talent. Our training hub serves as an innovation laboratory for enterprise clients.",
      icon: "⚡",
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveIndex((current) => (current + 1) % steps.length);
            return 0;
          }
          return prev + 1;
        });
      }, 60);

      return () => clearInterval(progressInterval);
    }
  }, [isPaused, steps.length]);

  return (
    <section className="min-h-screen w-full bg-[#F4F4F9] flex items-center justify-center px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#040F2D] mb-4">
            How Spark8Edge Works
          </h2>
          <p className="font-inter text-base md:text-lg text-[#6D8299] max-w-3xl mx-auto">
            Bridging the talent gap through strategic youth development and corporate partnerships
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {steps.map((step, index) => (
                <motion.article
                  key={step.title}
                  className="w-full flex-shrink-0 px-4"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="bg-white rounded-lg p-8 md:p-12 border-2 border-[#040F2D] shadow-xl max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-montserrat font-bold text-6xl md:text-7xl text-[#DFA236]/20">
                        {step.number}
                      </span>
                      <span className="text-5xl md:text-6xl">
                        {step.icon}
                      </span>
                    </div>
                    
                    <h3 className="font-montserrat font-extrabold text-2xl md:text-4xl text-[#040F2D] mb-3">
                      {step.title}
                    </h3>
                    
                    <h4 className="font-inter font-semibold text-base md:text-lg text-[#DFA236] uppercase tracking-wide mb-6">
                      {step.subtitle}
                    </h4>
                    
                    <p className="font-inter text-base md:text-xl text-[#6D8299] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setProgress(0);
                }}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`w-12 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-[#DFA236]" : "bg-[#6D8299]/30"
                }`}>
                  {index === activeIndex && (
                    <motion.div
                      className="h-full bg-[#DFA236] rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center mt-6 gap-4">
            <button
              onClick={() => {
                setActiveIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
                setProgress(0);
              }}
              className="p-3 rounded-full bg-[#040F2D] text-white hover:bg-[#DFA236] hover:text-[#040F2D] transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-3 rounded-full bg-[#040F2D] text-white hover:bg-[#DFA236] hover:text-[#040F2D] transition-all duration-300"
              aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
            >
              {isPaused ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => {
                setActiveIndex((prev) => (prev + 1) % steps.length);
                setProgress(0);
              }}
              className="p-3 rounded-full bg-[#040F2D] text-white hover:bg-[#DFA236] hover:text-[#040F2D] transition-all duration-300"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectsSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen w-full bg-white flex items-center justify-center px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#040F2D] mb-4">
            Meet Our Founder & CEO
          </h2>
          <p className="font-inter text-base md:text-lg text-[#6D8299] max-w-3xl mx-auto">
            Driving social impact through innovative youth empowerment and corporate partnership solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-4 border-[#040F2D] shadow-2xl">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Founder-1765872472689.jpg?width=8000&height=8000&resize=contain"
                alt="Vanessa Mwando - Founder and CEO of Spark8Edge, youth empowerment and corporate training expert"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isHovered ? "scale-105" : "scale-100"
                }`}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-[#040F2D]/80 via-[#040F2D]/20 to-transparent"
              />
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-white mb-1">
                  Vanessa Mwando
                </h3>
                <p className="font-inter text-sm md:text-base text-[#DFA236] font-semibold">
                  Founder & Chief Executive Officer
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-[#040F2D] mb-4">
                Transforming Youth Unemployment Into Corporate Innovation
              </h3>
              <p className="font-inter text-base md:text-lg text-[#6D8299] leading-relaxed mb-4">
                Vanessa Mwando founded Spark8Edge with a clear mission: bridge the critical gap between Nairobi&apos;s unemployed youth and corporations seeking innovative talent. Witnessing 60% youth unemployment alongside unfilled technical positions, she recognized an opportunity to create dual impact.
              </p>
              <p className="font-inter text-base md:text-lg text-[#6D8299] leading-relaxed">
                Her vision transforms talented but overlooked youth into job-ready professionals while providing organizations with a continuous pipeline of skilled, motivated team members who drive business growth and bring fresh perspectives to corporate innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F4F4F9] rounded-lg p-6 border-l-4 border-[#DFA236]">
                <h4 className="font-montserrat font-bold text-lg text-[#040F2D] mb-2">
                  For Youth
                </h4>
                <p className="font-inter text-sm text-[#6D8299]">
                  Free technical training, mentorship programs, and direct pathways to employment with leading organizations seeking diverse talent.
                </p>
              </div>

              <div className="bg-[#F4F4F9] rounded-lg p-6 border-l-4 border-[#040F2D]">
                <h4 className="font-montserrat font-bold text-lg text-[#040F2D] mb-2">
                  For Organizations
                </h4>
                <p className="font-inter text-sm text-[#6D8299]">
                  Access to pre-vetted, trained talent pools, custom training solutions, and innovation lab partnerships that reduce hiring costs.
                </p>
              </div>
            </div>

            <div className="bg-[#DFA236]/10 rounded-lg p-6 border-2 border-[#DFA236]/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💡</span>
                <div>
                  <h4 className="font-montserrat font-bold text-base md:text-lg text-[#040F2D] mb-2">
                    Core Philosophy
                  </h4>
                  <p className="font-inter text-sm md:text-base text-[#040F2D] italic">
                    &quot;Every unemployed youth represents untapped potential. Every organization seeking innovation represents opportunity. Spark8Edge is the catalyst that transforms both into success stories.&quot;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const technologies = [
    { name: "React", category: "Frontend Framework", description: "Component-based UI development for modern web applications" },
    { name: "Next.js", category: "Full-Stack Framework", description: "Server-side rendering & API routes for production apps" },
    { name: "TypeScript", category: "Programming Language", description: "Type-safe JavaScript for enterprise-grade codebases" },
    { name: "Python", category: "Backend & AI", description: "AI automation, data analysis, and backend development" },
    { name: "Node.js", category: "Backend Runtime", description: "Scalable server-side JavaScript for APIs & microservices" },
    { name: "TailwindCSS", category: "UI Framework", description: "Utility-first CSS for rapid, responsive design systems" },
    { name: "PostgreSQL", category: "Database", description: "Relational database management for complex data structures" },
    { name: "MongoDB", category: "NoSQL Database", description: "Flexible document storage for modern applications" },
    { name: "Supabase", category: "Backend Platform", description: "Authentication, storage & real-time database infrastructure" },
    { name: "AWS", category: "Cloud Infrastructure", description: "Enterprise cloud computing & deployment solutions" },
    { name: "Docker", category: "DevOps", description: "Containerization for consistent deployment environments" },
    { name: "Git", category: "Version Control", description: "Collaborative code management & deployment workflows" },
    { name: "Figma", category: "Design Tool", description: "Collaborative interface design & prototyping platform" },
    { name: "DaVinci Resolve", category: "Video Production", description: "Professional color grading & video editing software" },
    { name: "Prompt Engineering", category: "AI Skills", description: "LLM control, AI agents & workflow automation" },
    { name: "REST APIs", category: "Backend Development", description: "API design, integration & third-party service connections" }
  ];

  useEffect(() => {
    if (!isPaused) {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveIndex((current) => (current + 1) % technologies.length);
            return 0;
          }
          return prev + 1;
        });
      }, 60);

      return () => clearInterval(progressInterval);
    }
  }, [isPaused, technologies.length]);

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#040F2D] via-[#040F2D] to-[#0A1A3F] flex items-center justify-center px-6 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Enterprise-Grade Technology Training
            </h2>
            <p className="font-inter text-base md:text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Spark8Edge delivers comprehensive technical education through <strong className="text-[#DFA236]">12-week Youth Hub cohorts</strong> and <strong className="text-[#DFA236]">customized corporate training programs</strong>. Youth participants master full-stack development (React, Next.js, TypeScript), backend systems (Node.js, Python, PostgreSQL, MongoDB), cloud infrastructure (AWS, Docker, Supabase), video production (DaVinci Resolve), AI automation (Prompt Engineering), and professional design (Figma) while building 3-5 portfolio projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#DFA236]/10 via-white/5 to-[#DFA236]/10 border-2 border-[#DFA236]/30 rounded-xl p-8 md:p-12 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-montserrat font-bold text-xl md:text-2xl text-[#DFA236] mb-4 flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  Youth Hub Benefits
                </h3>
                <ul className="space-y-3 text-gray-300 font-inter text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#DFA236] rounded-full mt-2 flex-shrink-0" />
                    <span>Free intensive training with industry-standard tools and frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#DFA236] rounded-full mt-2 flex-shrink-0" />
                    <span>Hands-on project experience building real-world applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#DFA236] rounded-full mt-2 flex-shrink-0" />
                    <span>Career launch support and direct pathways to employment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#DFA236] rounded-full mt-2 flex-shrink-0" />
                    <span>Certification-ready skills across 15+ enterprise technologies</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-montserrat font-bold text-xl md:text-2xl text-[#DFA236] mb-4 flex items-center gap-3">
                  <span className="text-2xl">🏢</span>
                  Organization Benefits
                </h3>
                <ul className="space-y-3 text-gray-300 font-inter text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#DFA236] rounded-full mt-2 flex-shrink-0" />
                    <span>Access job-ready professionals trained in your exact tech stack</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#DFA236] rounded-full mt-2 flex-shrink-0" />
                    <span>Reduce onboarding costs by 40% with pre-trained talent pipelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#DFA236] rounded-full mt-2 flex-shrink-0" />
                    <span>Custom corporate training aligned with business objectives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#DFA236] rounded-full mt-2 flex-shrink-0" />
                    <span>Innovation lab partnerships for rapid prototyping and development</span>
                  </li>
                </ul>
              </div>
            </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="font-montserrat font-bold text-lg md:text-xl text-white mb-4 text-center">
                  Comprehensive Curriculum Coverage
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-[#DFA236]/50 transition-all">
                    <div className="flex items-center gap-2 text-[#DFA236] justify-center">
                      <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
                      <span className="font-inter font-semibold text-sm">Full-Stack Web Development</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-[#DFA236]/50 transition-all">
                    <div className="flex items-center gap-2 text-[#DFA236] justify-center">
                      <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
                      <span className="font-inter font-semibold text-sm">Cloud Infrastructure & DevOps</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-[#DFA236]/50 transition-all">
                    <div className="flex items-center gap-2 text-[#DFA236] justify-center">
                      <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
                      <span className="font-inter font-semibold text-sm">Database Management & APIs</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-[#DFA236]/50 transition-all">
                    <div className="flex items-center gap-2 text-[#DFA236] justify-center">
                      <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
                      <span className="font-inter font-semibold text-sm">AI & Prompt Engineering</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-[#DFA236]/50 transition-all">
                    <div className="flex items-center gap-2 text-[#DFA236] justify-center">
                      <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
                      <span className="font-inter font-semibold text-sm">Video Production & Editing</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-[#DFA236]/50 transition-all">
                    <div className="flex items-center gap-2 text-[#DFA236] justify-center">
                      <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
                      <span className="font-inter font-semibold text-sm">UI/UX Design & Prototyping</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-[#DFA236]/50 transition-all">
                    <div className="flex items-center gap-2 text-[#DFA236] justify-center">
                      <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
                      <span className="font-inter font-semibold text-sm">Content Creation & Storytelling</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-[#DFA236]/50 transition-all">
                    <div className="flex items-center gap-2 text-[#DFA236] justify-center">
                      <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
                      <span className="font-inter font-semibold text-sm">Digital Marketing & SEO</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-[#DFA236]/50 transition-all">
                    <div className="flex items-center gap-2 text-[#DFA236] justify-center">
                      <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
                      <span className="font-inter font-semibold text-sm">Motion Graphics & Animation</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-[#DFA236]/50 transition-all">
                    <div className="flex items-center gap-2 text-[#DFA236] justify-center">
                      <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
                      <span className="font-inter font-semibold text-sm">Project Management & Agile</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-[#DFA236]/50 transition-all">
                    <div className="flex items-center gap-2 text-[#DFA236] justify-center">
                      <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
                      <span className="font-inter font-semibold text-sm">Data Analysis & Visualization</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-[#DFA236]/50 transition-all">
                    <div className="flex items-center gap-2 text-[#DFA236] justify-center">
                      <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
                      <span className="font-inter font-semibold text-sm">Brand Strategy & Identity</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="font-inter text-sm md:text-base text-gray-400 italic">
                  Technologies include: React, Next.js, TypeScript, Node.js, Python, TailwindCSS, PostgreSQL, MongoDB, Supabase, AWS, Docker, Git, Figma, DaVinci Resolve, AI Prompt Engineering, Adobe Creative Suite, Google Analytics, SEO Tools, and Business Intelligence platforms
                </p>
              </div>
          </motion.div>
      </div>
    </section>
  );
}

function DualCTASection() {
  return (
    <section className="h-screen w-full flex flex-col md:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex-1 h-1/2 md:h-full flex items-center justify-center overflow-hidden group bg-[#DFA236]"
      >
        <div className="absolute inset-0 bg-[#DFA236] opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 text-center px-6 max-w-xl">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#040F2D] uppercase mb-6 md:mb-8 leading-tight">
            I Want To Build.
          </h2>
          
          <Link
            href="/youth-hub"
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-[#040F2D] text-white font-montserrat font-semibold text-xs md:text-sm uppercase tracking-wider rounded hover:bg-white hover:text-[#040F2D] transition-all duration-300 active:scale-95"
          >
            Join Youth Hub
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex-1 h-1/2 md:h-full flex items-center justify-center overflow-hidden group bg-[#040F2D]"
      >
        <div className="absolute inset-0 bg-[#040F2D] opacity-95 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 text-center px-6 max-w-xl">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-6 md:mb-8 leading-tight">
            I Want To Hire.
          </h2>
          
          <Link
            href="/organization"
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-[#DFA236] text-[#040F2D] font-montserrat font-semibold text-xs md:text-sm uppercase tracking-wider rounded hover:bg-white transition-all duration-300 active:scale-95"
          >
            Hire The Squad
          </Link>
        </div>
      </motion.div>
    </section>
  );
}