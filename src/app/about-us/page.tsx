"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";

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

function CinematicHeroSection() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white rounded-lg p-6 md:p-8 border-2 border-[#040F2D] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-montserrat font-bold text-5xl md:text-6xl text-[#DFA236]/20">
                  {step.number}
                </span>
                <span className="text-4xl md:text-5xl">
                  {step.icon}
                </span>
              </div>
              
              <h3 className="font-montserrat font-extrabold text-xl md:text-2xl text-[#040F2D] mb-2">
                {step.title}
              </h3>
              
              <h4 className="font-inter font-semibold text-sm md:text-base text-[#DFA236] uppercase tracking-wide mb-4">
                {step.subtitle}
              </h4>
              
              <p className="font-inter text-sm md:text-base text-[#6D8299] leading-relaxed">
                {step.description}
              </p>
            </motion.article>
          ))}
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
  const partners = [
    "MICROSOFT", "GOOGLE", "AWS", "STRIPE", "FIGMA", "NOTION",
    "SLACK", "ZOOM", "HUBSPOT", "SALESFORCE"
  ];

  return (
    <section className="h-screen w-full bg-[#F4F4F9] flex items-center justify-center px-6 overflow-hidden">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#040F2D] uppercase">
            Powered By Partnerships.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-8 md:gap-12 py-4 md:py-8"
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-8 py-4 md:px-12 md:py-8 bg-white rounded-lg border-2 border-[#040F2D] min-w-[200px] md:min-w-[250px] flex items-center justify-center"
                >
                  <span className="font-montserrat font-bold text-lg md:text-xl lg:text-2xl text-[#040F2D] uppercase whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
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