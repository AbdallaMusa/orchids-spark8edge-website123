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
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#040F2D] opacity-80" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-montserrat font-extrabold text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-tight"
        >
          The Bridge Between<br />
          <span className="text-[#DFA236]">Talent & Opportunity.</span>
        </motion.h1>
      </div>
    </section>
  );
}

function ScrollytellingSection() {
  const steps = [
    {
      title: "The Flaw.",
      description: "60% of Nairobi's youth are unemployed, yet tech roles go unfilled.",
    },
    {
      title: "The Friction.",
      description: "Corporations are desperate for innovation but can't speak the language of the youth.",
    },
    {
      title: "The Spark.",
      description: "Spark8Edge was born to fix both. We treat our youth hub as the R&D lab for our corporate clients.",
    },
  ];

  return (
    <section className="h-screen w-full bg-[#F4F4F9] flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block px-4 py-2 md:px-6 md:py-3 bg-[#DFA236] rounded mb-3 md:mb-4">
                <span className="font-montserrat font-bold text-lg md:text-xl lg:text-2xl text-[#040F2D] uppercase">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl md:text-3xl lg:text-4xl text-[#040F2D] uppercase mb-3 md:mb-4">
                {step.title}
              </h3>
              <p className="font-inter text-sm md:text-base lg:text-lg text-[#6D8299] leading-relaxed">
                {step.description}
              </p>
              <div className="mt-4 md:mt-6 text-4xl md:text-5xl lg:text-6xl">
                {index === 0 ? "⚠️" : index === 1 ? "🔌" : "⚡"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const team = [
    {
      name: "Vanessa",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
    },
    {
      name: "Kennedy",
      role: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
    },
    {
      name: "Helga",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
    },
    {
      name: "Ivan",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    },
  ];

  return (
    <section className="h-screen w-full bg-white flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#040F2D] uppercase">
            Meet The Architects.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-3 md:mb-4 border-4 border-[#040F2D]">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredIndex === index ? "grayscale-0 scale-110" : "grayscale"
                  }`}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 bg-[#DFA236] bg-opacity-20"
                />
              </div>
              <h3 className="font-montserrat font-bold text-base md:text-lg lg:text-xl text-[#040F2D] uppercase">
                {member.name}
              </h3>
              <p className="font-inter text-xs md:text-sm text-[#6D8299]">{member.role}</p>
            </motion.div>
          ))}
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