"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Video, Brain, Palette, ArrowDown, Users, Briefcase, Award, Sparkles, Zap, Target, TrendingUp, Clock, MapPin, CheckCircle2, Star, DollarSign, Rocket } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function YouthHub() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CurriculumSection />
      <MethodologySection />
      <TestimonialsSection />
      <IntakeFormSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("intake-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#040F2D] opacity-80" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-montserrat font-extrabold text-5xl md:text-7xl text-white uppercase mb-6 leading-tight"
        >
          Unleash Your Creative Potential.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-inter text-xl md:text-2xl text-[#F4F4F9] mb-12 leading-relaxed"
        >
          Join Nairobi's elite offline training ground. Master AI, Video, and Design.
        </motion.p>

        <motion.button
          onClick={scrollToForm}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#DFA236] text-[#040F2D] font-montserrat font-semibold text-sm uppercase tracking-wider rounded hover:bg-white transition-all duration-300 active:scale-95"
        >
          Apply For Intake <ArrowDown size={20} />
        </motion.button>
      </div>
    </section>
  );
}

function CurriculumSection() {
  const courses = [
    {
      icon: Video,
      title: "Visual Storytelling",
      description: "Master 4K production, DaVinci Resolve color grading, and drone operations.",
    },
    {
      icon: Brain,
      title: "Prompt Engineering",
      description: "Stop fearing automation. Learn to control LLMs, build AI agents, and automate workflows.",
    },
    {
      icon: Palette,
      title: "Product Design",
      description: "From wireframing in Figma to building in React. Learn end-to-end interface design.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#F4F4F9] flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-extrabold text-4xl md:text-6xl text-[#040F2D] uppercase mb-6">
            Choose Your Weapon.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group bg-white p-8 rounded-lg border-2 border-[#040F2D] hover:border-[#DFA236] hover:shadow-2xl transition-all duration-300"
              >
                <Icon size={48} className="text-[#DFA236] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-montserrat font-bold text-2xl text-[#040F2D] uppercase mb-4">
                  {course.title}
                </h3>
                <p className="font-inter text-[#6D8299] leading-relaxed">
                  {course.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MethodologySection() {
  const features = [
    {
      icon: Clock,
      title: "Hands-On Learning",
      description: "12-week intensive program combining theory with practical application in real-world scenarios.",
    },
    {
      icon: Users,
      title: "In-Person Training",
      description: "Physical studio environment in Westlands with collaborative workspace and peer learning.",
    },
    {
      icon: Briefcase,
      title: "Project-Based Curriculum",
      description: "Build a professional portfolio through structured projects and assignments.",
    },
    {
      icon: Target,
      title: "Career Development",
      description: "Industry-standard skills training and portfolio preparation for creative careers.",
    }
  ];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(223,162,54,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08)_0%,transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-[#DFA236]/10 border-2 border-[#DFA236] rounded-full text-[#DFA236] font-montserrat text-xs font-bold uppercase tracking-widest mb-3"
          >
            Our Approach
          </motion.span>
          
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-[#040F2D] uppercase mb-3 leading-tight">
            Immersive{" "}
            <span className="relative inline-block">
              <span className="text-[#DFA236]">Training</span>
              <motion.svg
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 10"
              >
                <motion.path
                  d="M0,5 Q50,0 100,5 T200,5"
                  fill="none"
                  stroke="#DFA236"
                  strokeWidth="3"
                />
              </motion.svg>
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#DFA236] rounded-xl p-5 cursor-pointer transition-all duration-500 overflow-hidden"
              >
                <motion.div
                  className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-[#DFA236]/10 to-cyan-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DFA236] to-amber-600 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-shadow"
                  >
                    <Icon className="text-white" size={24} />
                  </motion.div>

                  <h3 className="font-montserrat font-bold text-base text-[#040F2D] mb-2 uppercase group-hover:text-[#DFA236] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const benefits = [
    {
      icon: Briefcase,
      title: "Industry-Ready Portfolio",
      description: "Complete 3-5 professional projects during the program. Build real work that demonstrates your capabilities to employers and clients.",
      metric: "Portfolio Projects",
      value: "3-5 Real Projects"
    },
    {
      icon: Rocket,
      title: "Career Launch Support",
      description: "Get guidance on freelancing, job applications, and client acquisition. Learn to position yourself in the creative market.",
      metric: "Career Skills",
      value: "Market Ready"
    },
    {
      icon: TrendingUp,
      title: "Continuous Skill Development",
      description: "Master tools and workflows used by top creative professionals. Stay current with industry-standard technologies and techniques.",
      metric: "Skills Training",
      value: "Industry Standard"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#040F2D] to-[#0a1847] overflow-hidden flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#DFA236]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-black text-5xl md:text-7xl text-white uppercase mb-8 leading-tight">
            Program Benefits &{" "}
            <span className="bg-gradient-to-r from-[#DFA236] via-amber-300 to-cyan-400 bg-clip-text text-transparent">
              Success Framework
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: MapPin, text: "Westlands Studio", sub: "Prime location" },
              { icon: Users, text: "50+ Creatives", sub: "Your network" },
              { icon: Clock, text: "Mon-Sat 9AM-6PM", sub: "Full immersion" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:border-[#DFA236] transition-all duration-300"
                >
                  <Icon className="text-[#DFA236]" size={20} />
                  <div className="text-left">
                    <div className="text-white font-montserrat font-bold text-sm">{item.text}</div>
                    <div className="text-gray-400 font-inter text-xs">{item.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#DFA236] via-amber-400 to-cyan-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition duration-500" />
                
                <div className="relative bg-[#0a1847] border border-white/10 rounded-2xl p-8 h-full backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#DFA236] to-amber-600 flex items-center justify-center shadow-lg"
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                    
                    <div className="text-right">
                      <div className="text-gray-400 font-inter text-xs uppercase tracking-wider">{benefit.metric}</div>
                      <div className="text-[#DFA236] font-montserrat font-bold text-sm">{benefit.value}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-white font-montserrat font-bold text-xl uppercase mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 font-inter leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 className="text-green-400" size={24} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CreativeSpaceSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a1847] to-[#040F2D] overflow-hidden flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#DFA236]/20 via-cyan-400/20 to-cyan-400/20 rounded-3xl blur-xl" />
          
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
            <h3 className="font-montserrat font-black text-3xl md:text-5xl text-white uppercase mb-8 text-center">
              Our Creative Space
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600", label: "Studio" },
                { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600", label: "Collaboration" },
                { img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600", label: "Learning" },
                { img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600", label: "Equipment" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative h-48 md:h-64 rounded-xl overflow-hidden cursor-pointer group"
                >
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040F2D] via-[#040F2D]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-4 left-4 text-white font-montserrat font-bold uppercase tracking-wider text-sm">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IntakeFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("+254");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const countryPhoneData: Record<string, { digits: number; placeholder: string; pattern: string }> = {
    "+1": { digits: 10, placeholder: "2025551234", pattern: "[0-9]{10}" },
    "+7": { digits: 10, placeholder: "9123456789", pattern: "[0-9]{10}" },
    "+20": { digits: 10, placeholder: "1001234567", pattern: "[0-9]{10}" },
    "+27": { digits: 9, placeholder: "821234567", pattern: "[0-9]{9}" },
    "+30": { digits: 10, placeholder: "6912345678", pattern: "[0-9]{10}" },
    "+31": { digits: 9, placeholder: "612345678", pattern: "[0-9]{9}" },
    "+32": { digits: 9, placeholder: "470123456", pattern: "[0-9]{9}" },
    "+33": { digits: 9, placeholder: "612345678", pattern: "[0-9]{9}" },
    "+34": { digits: 9, placeholder: "612345678", pattern: "[0-9]{9}" },
    "+36": { digits: 9, placeholder: "201234567", pattern: "[0-9]{9}" },
    "+39": { digits: 10, placeholder: "3123456789", pattern: "[0-9]{10}" },
    "+40": { digits: 10, placeholder: "712345678", pattern: "[0-9]{9,10}" },
    "+41": { digits: 9, placeholder: "781234567", pattern: "[0-9]{9}" },
    "+43": { digits: 10, placeholder: "6641234567", pattern: "[0-9]{10,11}" },
    "+44": { digits: 10, placeholder: "7400123456", pattern: "[0-9]{10}" },
    "+45": { digits: 8, placeholder: "20123456", pattern: "[0-9]{8}" },
    "+46": { digits: 9, placeholder: "701234567", pattern: "[0-9]{9}" },
    "+47": { digits: 8, placeholder: "40612345", pattern: "[0-9]{8}" },
    "+48": { digits: 9, placeholder: "512345678", pattern: "[0-9]{9}" },
    "+49": { digits: 11, placeholder: "15123456789", pattern: "[0-9]{10,11}" },
    "+51": { digits: 9, placeholder: "987654321", pattern: "[0-9]{9}" },
    "+52": { digits: 10, placeholder: "5512345678", pattern: "[0-9]{10}" },
    "+53": { digits: 8, placeholder: "51234567", pattern: "[0-9]{8}" },
    "+54": { digits: 10, placeholder: "91123456789", pattern: "[0-9]{10}" },
    "+55": { digits: 11, placeholder: "11987654321", pattern: "[0-9]{10,11}" },
    "+56": { digits: 9, placeholder: "912345678", pattern: "[0-9]{9}" },
    "+57": { digits: 10, placeholder: "3001234567", pattern: "[0-9]{10}" },
    "+58": { digits: 10, placeholder: "4121234567", pattern: "[0-9]{10}" },
    "+60": { digits: 10, placeholder: "123456789", pattern: "[0-9]{9,10}" },
    "+61": { digits: 9, placeholder: "412345678", pattern: "[0-9]{9}" },
    "+62": { digits: 11, placeholder: "81234567890", pattern: "[0-9]{10,12}" },
    "+63": { digits: 10, placeholder: "9171234567", pattern: "[0-9]{10}" },
    "+64": { digits: 9, placeholder: "211234567", pattern: "[0-9]{8,10}" },
    "+65": { digits: 8, placeholder: "81234567", pattern: "[0-9]{8}" },
    "+66": { digits: 9, placeholder: "812345678", pattern: "[0-9]{9}" },
    "+81": { digits: 10, placeholder: "9012345678", pattern: "[0-9]{10}" },
    "+82": { digits: 10, placeholder: "1012345678", pattern: "[0-9]{10}" },
    "+84": { digits: 9, placeholder: "912345678", pattern: "[0-9]{9,10}" },
    "+86": { digits: 11, placeholder: "13812345678", pattern: "[0-9]{11}" },
    "+90": { digits: 10, placeholder: "5321234567", pattern: "[0-9]{10}" },
    "+91": { digits: 10, placeholder: "9876543210", pattern: "[0-9]{10}" },
    "+92": { digits: 10, placeholder: "3001234567", pattern: "[0-9]{10}" },
    "+93": { digits: 9, placeholder: "701234567", pattern: "[0-9]{9}" },
    "+94": { digits: 9, placeholder: "712345678", pattern: "[0-9]{9}" },
    "+95": { digits: 9, placeholder: "912345678", pattern: "[0-9]{8,10}" },
    "+98": { digits: 10, placeholder: "9121234567", pattern: "[0-9]{10}" },
    "+212": { digits: 9, placeholder: "612345678", pattern: "[0-9]{9}" },
    "+213": { digits: 9, placeholder: "551234567", pattern: "[0-9]{9}" },
    "+216": { digits: 8, placeholder: "20123456", pattern: "[0-9]{8}" },
    "+218": { digits: 10, placeholder: "912345678", pattern: "[0-9]{9,10}" },
    "+220": { digits: 7, placeholder: "3012345", pattern: "[0-9]{7}" },
    "+221": { digits: 9, placeholder: "701234567", pattern: "[0-9]{9}" },
    "+222": { digits: 8, placeholder: "22123456", pattern: "[0-9]{8}" },
    "+223": { digits: 8, placeholder: "65123456", pattern: "[0-9]{8}" },
    "+224": { digits: 9, placeholder: "601123456", pattern: "[0-9]{9}" },
    "+225": { digits: 10, placeholder: "0102030405", pattern: "[0-9]{10}" },
    "+226": { digits: 8, placeholder: "70123456", pattern: "[0-9]{8}" },
    "+227": { digits: 8, placeholder: "93123456", pattern: "[0-9]{8}" },
    "+228": { digits: 8, placeholder: "90123456", pattern: "[0-9]{8}" },
    "+229": { digits: 8, placeholder: "90123456", pattern: "[0-9]{8}" },
    "+230": { digits: 8, placeholder: "52512345", pattern: "[0-9]{8}" },
    "+231": { digits: 7, placeholder: "770123456", pattern: "[0-9]{7,9}" },
    "+232": { digits: 8, placeholder: "76123456", pattern: "[0-9]{8}" },
    "+233": { digits: 9, placeholder: "201234567", pattern: "[0-9]{9}" },
    "+234": { digits: 10, placeholder: "8021234567", pattern: "[0-9]{10}" },
    "+235": { digits: 8, placeholder: "63012345", pattern: "[0-9]{8}" },
    "+236": { digits: 8, placeholder: "70012345", pattern: "[0-9]{8}" },
    "+237": { digits: 9, placeholder: "671234567", pattern: "[0-9]{9}" },
    "+238": { digits: 7, placeholder: "9911234", pattern: "[0-9]{7}" },
    "+239": { digits: 7, placeholder: "9812345", pattern: "[0-9]{7}" },
    "+240": { digits: 9, placeholder: "222123456", pattern: "[0-9]{9}" },
    "+241": { digits: 7, placeholder: "6012345", pattern: "[0-9]{7}" },
    "+242": { digits: 9, placeholder: "061234567", pattern: "[0-9]{9}" },
    "+243": { digits: 9, placeholder: "991234567", pattern: "[0-9]{9}" },
    "+244": { digits: 9, placeholder: "923123456", pattern: "[0-9]{9}" },
    "+245": { digits: 7, placeholder: "5551234", pattern: "[0-9]{7}" },
    "+246": { digits: 7, placeholder: "2501234", pattern: "[0-9]{7}" },
    "+248": { digits: 7, placeholder: "2512345", pattern: "[0-9]{7}" },
    "+249": { digits: 9, placeholder: "912345678", pattern: "[0-9]{9}" },
    "+250": { digits: 9, placeholder: "720123456", pattern: "[0-9]{9}" },
    "+251": { digits: 9, placeholder: "911234567", pattern: "[0-9]{9}" },
    "+252": { digits: 8, placeholder: "71123456", pattern: "[0-9]{8}" },
    "+253": { digits: 8, placeholder: "77123456", pattern: "[0-9]{8}" },
    "+254": { digits: 9, placeholder: "712345678", pattern: "[0-9]{9}" },
    "+255": { digits: 9, placeholder: "712345678", pattern: "[0-9]{9}" },
    "+256": { digits: 9, placeholder: "712345678", pattern: "[0-9]{9}" },
    "+257": { digits: 8, placeholder: "79123456", pattern: "[0-9]{8}" },
    "+258": { digits: 9, placeholder: "821234567", pattern: "[0-9]{9}" },
    "+260": { digits: 9, placeholder: "955123456", pattern: "[0-9]{9}" },
    "+261": { digits: 9, placeholder: "321234567", pattern: "[0-9]{9}" },
    "+262": { digits: 9, placeholder: "692123456", pattern: "[0-9]{9}" },
    "+263": { digits: 9, placeholder: "712345678", pattern: "[0-9]{9}" },
    "+264": { digits: 9, placeholder: "811234567", pattern: "[0-9]{9}" },
    "+265": { digits: 9, placeholder: "991234567", pattern: "[0-9]{9}" },
    "+266": { digits: 8, placeholder: "50123456", pattern: "[0-9]{8}" },
    "+267": { digits: 8, placeholder: "71123456", pattern: "[0-9]{8}" },
    "+268": { digits: 8, placeholder: "76123456", pattern: "[0-9]{8}" },
    "+269": { digits: 7, placeholder: "3212345", pattern: "[0-9]{7}" },
    "+290": { digits: 4, placeholder: "1234", pattern: "[0-9]{4}" },
    "+291": { digits: 7, placeholder: "7123456", pattern: "[0-9]{7}" },
    "+297": { digits: 7, placeholder: "5601234", pattern: "[0-9]{7}" },
    "+298": { digits: 6, placeholder: "211234", pattern: "[0-9]{6}" },
    "+299": { digits: 6, placeholder: "221234", pattern: "[0-9]{6}" },
    "+350": { digits: 8, placeholder: "57123456", pattern: "[0-9]{8}" },
    "+351": { digits: 9, placeholder: "912345678", pattern: "[0-9]{9}" },
    "+352": { digits: 9, placeholder: "628123456", pattern: "[0-9]{9}" },
    "+353": { digits: 9, placeholder: "851234567", pattern: "[0-9]{9}" },
    "+354": { digits: 7, placeholder: "6111234", pattern: "[0-9]{7}" },
    "+355": { digits: 9, placeholder: "672123456", pattern: "[0-9]{9}" },
    "+356": { digits: 8, placeholder: "79123456", pattern: "[0-9]{8}" },
    "+357": { digits: 8, placeholder: "96123456", pattern: "[0-9]{8}" },
    "+358": { digits: 10, placeholder: "501234567", pattern: "[0-9]{9,10}" },
    "+359": { digits: 9, placeholder: "48123456", pattern: "[0-9]{9}" },
    "+370": { digits: 8, placeholder: "61234567", pattern: "[0-9]{8}" },
    "+371": { digits: 8, placeholder: "21234567", pattern: "[0-9]{8}" },
    "+372": { digits: 8, placeholder: "51234567", pattern: "[0-9]{7,8}" },
    "+373": { digits: 8, placeholder: "62123456", pattern: "[0-9]{8}" },
    "+374": { digits: 8, placeholder: "77123456", pattern: "[0-9]{8}" },
    "+375": { digits: 9, placeholder: "291234567", pattern: "[0-9]{9}" },
    "+376": { digits: 6, placeholder: "312345", pattern: "[0-9]{6}" },
    "+377": { digits: 8, placeholder: "61234567", pattern: "[0-9]{8}" },
    "+378": { digits: 10, placeholder: "66661212", pattern: "[0-9]{8,10}" },
    "+380": { digits: 9, placeholder: "501234567", pattern: "[0-9]{9}" },
    "+381": { digits: 9, placeholder: "601234567", pattern: "[0-9]{8,9}" },
    "+382": { digits: 8, placeholder: "67622901", pattern: "[0-9]{8}" },
    "+383": { digits: 8, placeholder: "43201234", pattern: "[0-9]{8}" },
    "+385": { digits: 9, placeholder: "921234567", pattern: "[0-9]{9}" },
    "+386": { digits: 8, placeholder: "31234567", pattern: "[0-9]{8}" },
    "+387": { digits: 8, placeholder: "61123456", pattern: "[0-9]{8}" },
    "+389": { digits: 8, placeholder: "72123456", pattern: "[0-9]{8}" },
    "+420": { digits: 9, placeholder: "601123456", pattern: "[0-9]{9}" },
    "+421": { digits: 9, placeholder: "912123456", pattern: "[0-9]{9}" },
    "+423": { digits: 7, placeholder: "6601234", pattern: "[0-9]{7}" },
    "+500": { digits: 5, placeholder: "51234", pattern: "[0-9]{5}" },
    "+501": { digits: 7, placeholder: "6221234", pattern: "[0-9]{7}" },
    "+502": { digits: 8, placeholder: "51234567", pattern: "[0-9]{8}" },
    "+503": { digits: 8, placeholder: "70123456", pattern: "[0-9]{8}" },
    "+504": { digits: 8, placeholder: "91234567", pattern: "[0-9]{8}" },
    "+505": { digits: 8, placeholder: "81234567", pattern: "[0-9]{8}" },
    "+506": { digits: 8, placeholder: "83123456", pattern: "[0-9]{8}" },
    "+507": { digits: 8, placeholder: "61234567", pattern: "[0-9]{8}" },
    "+508": { digits: 6, placeholder: "551234", pattern: "[0-9]{6}" },
    "+509": { digits: 8, placeholder: "34101234", pattern: "[0-9]{8}" },
    "+590": { digits: 9, placeholder: "690001234", pattern: "[0-9]{9}" },
    "+591": { digits: 8, placeholder: "71234567", pattern: "[0-9]{8}" },
    "+592": { digits: 7, placeholder: "6091234", pattern: "[0-9]{7}" },
    "+593": { digits: 9, placeholder: "991234567", pattern: "[0-9]{9}" },
    "+594": { digits: 9, placeholder: "694201234", pattern: "[0-9]{9}" },
    "+595": { digits: 9, placeholder: "961456789", pattern: "[0-9]{9}" },
    "+596": { digits: 9, placeholder: "696201234", pattern: "[0-9]{9}" },
    "+597": { digits: 7, placeholder: "7412345", pattern: "[0-9]{7}" },
    "+598": { digits: 8, placeholder: "94231234", pattern: "[0-9]{8}" },
    "+599": { digits: 7, placeholder: "9181234", pattern: "[0-9]{7}" },
    "+670": { digits: 8, placeholder: "77212345", pattern: "[0-9]{8}" },
    "+672": { digits: 6, placeholder: "221234", pattern: "[0-9]{6}" },
    "+673": { digits: 7, placeholder: "7123456", pattern: "[0-9]{7}" },
    "+674": { digits: 7, placeholder: "5551234", pattern: "[0-9]{7}" },
    "+675": { digits: 8, placeholder: "70123456", pattern: "[0-9]{8}" },
    "+676": { digits: 5, placeholder: "77123", pattern: "[0-9]{5}" },
    "+677": { digits: 7, placeholder: "7421234", pattern: "[0-9]{7}" },
    "+678": { digits: 7, placeholder: "5912345", pattern: "[0-9]{7}" },
    "+679": { digits: 7, placeholder: "7012345", pattern: "[0-9]{7}" },
    "+680": { digits: 7, placeholder: "6201234", pattern: "[0-9]{7}" },
    "+681": { digits: 6, placeholder: "720123", pattern: "[0-9]{6}" },
    "+682": { digits: 5, placeholder: "71234", pattern: "[0-9]{5}" },
    "+683": { digits: 4, placeholder: "7290", pattern: "[0-9]{4}" },
    "+685": { digits: 7, placeholder: "7212345", pattern: "[0-9]{7}" },
    "+686": { digits: 8, placeholder: "72001234", pattern: "[0-9]{8}" },
    "+687": { digits: 6, placeholder: "751234", pattern: "[0-9]{6}" },
    "+688": { digits: 5, placeholder: "90123", pattern: "[0-9]{5}" },
    "+689": { digits: 8, placeholder: "87123456", pattern: "[0-9]{8}" },
    "+690": { digits: 4, placeholder: "7290", pattern: "[0-9]{4}" },
    "+691": { digits: 7, placeholder: "3501234", pattern: "[0-9]{7}" },
    "+692": { digits: 7, placeholder: "2351234", pattern: "[0-9]{7}" },
    "+850": { digits: 10, placeholder: "1921234567", pattern: "[0-9]{10}" },
    "+852": { digits: 8, placeholder: "51234567", pattern: "[0-9]{8}" },
    "+853": { digits: 8, placeholder: "66123456", pattern: "[0-9]{8}" },
    "+855": { digits: 9, placeholder: "912345678", pattern: "[0-9]{8,9}" },
    "+856": { digits: 10, placeholder: "2023123456", pattern: "[0-9]{9,10}" },
    "+880": { digits: 10, placeholder: "1812345678", pattern: "[0-9]{10}" },
    "+886": { digits: 9, placeholder: "912345678", pattern: "[0-9]{9}" },
    "+960": { digits: 7, placeholder: "7712345", pattern: "[0-9]{7}" },
    "+961": { digits: 8, placeholder: "71123456", pattern: "[0-9]{7,8}" },
    "+962": { digits: 9, placeholder: "790123456", pattern: "[0-9]{9}" },
    "+963": { digits: 9, placeholder: "944567890", pattern: "[0-9]{9}" },
    "+964": { digits: 10, placeholder: "7912345678", pattern: "[0-9]{10}" },
    "+965": { digits: 8, placeholder: "50012345", pattern: "[0-9]{8}" },
    "+966": { digits: 9, placeholder: "501234567", pattern: "[0-9]{9}" },
    "+967": { digits: 9, placeholder: "712345678", pattern: "[0-9]{9}" },
    "+968": { digits: 8, placeholder: "92123456", pattern: "[0-9]{8}" },
    "+970": { digits: 9, placeholder: "599123456", pattern: "[0-9]{9}" },
    "+971": { digits: 9, placeholder: "501234567", pattern: "[0-9]{9}" },
    "+972": { digits: 9, placeholder: "501234567", pattern: "[0-9]{9}" },
    "+973": { digits: 8, placeholder: "36001234", pattern: "[0-9]{8}" },
    "+974": { digits: 8, placeholder: "33123456", pattern: "[0-9]{8}" },
    "+975": { digits: 8, placeholder: "17123456", pattern: "[0-9]{8}" },
    "+976": { digits: 8, placeholder: "88123456", pattern: "[0-9]{8}" },
    "+977": { digits: 10, placeholder: "9841234567", pattern: "[0-9]{10}" },
    "+992": { digits: 9, placeholder: "917123456", pattern: "[0-9]{9}" },
    "+993": { digits: 8, placeholder: "65123456", pattern: "[0-9]{8}" },
    "+994": { digits: 9, placeholder: "401234567", pattern: "[0-9]{9}" },
    "+995": { digits: 9, placeholder: "555123456", pattern: "[0-9]{9}" },
    "+996": { digits: 9, placeholder: "700123456", pattern: "[0-9]{9}" },
    "+998": { digits: 9, placeholder: "901234567", pattern: "[0-9]{9}" },
  };

  const currentCountryData = countryPhoneData[selectedCountry] || { digits: 10, placeholder: "1234567890", pattern: "[0-9]{10}" };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setPhoneNumber("");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= currentCountryData.digits) {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    const formData = new FormData(form);
    formData.set("whatsapp", `${selectedCountry}${phoneNumber}`);
    
    try {
      await fetch("https://formspree.io/f/mnneyzqa", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      setSubmitted(true);
      form.reset();
      setPhoneNumber("");
      setSelectedCountry("+254");
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="intake-form" className="min-h-screen bg-[#040F2D] flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-white uppercase mb-3">
            Initiate Your Application.
          </h2>
          <p className="font-inter text-sm text-gray-300 max-w-xl mx-auto">
            Take the first step towards mastering your creative discipline.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl space-y-3 shadow-2xl"
        >
          <div>
            <label htmlFor="name" className="block font-montserrat font-semibold text-xs uppercase tracking-wider text-[#040F2D] mb-1.5">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              pattern="[A-Za-z\s]+"
              title="Please enter only letters and spaces"
              className="w-full px-3 py-2 border-2 border-[#040F2D] rounded font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#DFA236]"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="block font-montserrat font-semibold text-xs uppercase tracking-wider text-[#040F2D] mb-1.5">
              WhatsApp
            </label>
            <div className="flex gap-2">
              <select
                id="countryCode"
                name="countryCode"
                value={selectedCountry}
                onChange={handleCountryChange}
                required
                className="w-32 px-3 py-2 border-2 border-[#040F2D] rounded font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#DFA236]"
              >
                <option value="+93">🇦🇫 +93</option>
                <option value="+355">🇦🇱 +355</option>
                <option value="+213">🇩🇿 +213</option>
                <option value="+376">🇦🇩 +376</option>
                <option value="+244">🇦🇴 +244</option>
                <option value="+54">🇦🇷 +54</option>
                <option value="+374">🇦🇲 +374</option>
                <option value="+297">🇦🇼 +297</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+43">🇦🇹 +43</option>
                <option value="+994">🇦🇿 +994</option>
                <option value="+973">🇧🇭 +973</option>
                <option value="+880">🇧🇩 +880</option>
                <option value="+375">🇧🇾 +375</option>
                <option value="+32">🇧🇪 +32</option>
                <option value="+501">🇧🇿 +501</option>
                <option value="+229">🇧🇯 +229</option>
                <option value="+975">🇧🇹 +975</option>
                <option value="+591">🇧🇴 +591</option>
                <option value="+387">🇧🇦 +387</option>
                <option value="+267">🇧🇼 +267</option>
                <option value="+55">🇧🇷 +55</option>
                <option value="+673">🇧🇳 +673</option>
                <option value="+359">🇧🇬 +359</option>
                <option value="+226">🇧🇫 +226</option>
                <option value="+257">🇧🇮 +257</option>
                <option value="+855">🇰🇭 +855</option>
                <option value="+237">🇨🇲 +237</option>
                <option value="+1">🇨🇦 +1</option>
                <option value="+238">🇨🇻 +238</option>
                <option value="+236">🇨🇫 +236</option>
                <option value="+235">🇹🇩 +235</option>
                <option value="+56">🇨🇱 +56</option>
                <option value="+86">🇨🇳 +86</option>
                <option value="+57">🇨🇴 +57</option>
                <option value="+269">🇰🇲 +269</option>
                <option value="+242">🇨🇬 +242</option>
                <option value="+243">🇨🇩 +243</option>
                <option value="+506">🇨🇷 +506</option>
                <option value="+385">🇭🇷 +385</option>
                <option value="+53">🇨🇺 +53</option>
                <option value="+357">🇨🇾 +357</option>
                <option value="+420">🇨🇿 +420</option>
                <option value="+45">🇩🇰 +45</option>
                <option value="+253">🇩🇯 +253</option>
                <option value="+593">🇪🇨 +593</option>
                <option value="+20">🇪🇬 +20</option>
                <option value="+503">🇸🇻 +503</option>
                <option value="+240">🇬🇶 +240</option>
                <option value="+291">🇪🇷 +291</option>
                <option value="+372">🇪🇪 +372</option>
                <option value="+268">🇸🇿 +268</option>
                <option value="+251">🇪🇹 +251</option>
                <option value="+679">🇫🇯 +679</option>
                <option value="+358">🇫🇮 +358</option>
                <option value="+33">🇫🇷 +33</option>
                <option value="+241">🇬🇦 +241</option>
                <option value="+220">🇬🇲 +220</option>
                <option value="+995">🇬🇪 +995</option>
                <option value="+49">🇩🇪 +49</option>
                <option value="+233">🇬🇭 +233</option>
                <option value="+30">🇬🇷 +30</option>
                <option value="+299">🇬🇱 +299</option>
                <option value="+502">🇬🇹 +502</option>
                <option value="+224">🇬🇳 +224</option>
                <option value="+245">🇬🇼 +245</option>
                <option value="+592">🇬🇾 +592</option>
                <option value="+509">🇭🇹 +509</option>
                <option value="+504">🇭🇳 +504</option>
                <option value="+852">🇭🇰 +852</option>
                <option value="+36">🇭🇺 +36</option>
                <option value="+354">🇮🇸 +354</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+62">🇮🇩 +62</option>
                <option value="+98">🇮🇷 +98</option>
                <option value="+964">🇮🇶 +964</option>
                <option value="+353">🇮🇪 +353</option>
                <option value="+972">🇮🇱 +972</option>
                <option value="+39">🇮🇹 +39</option>
                <option value="+225">🇨🇮 +225</option>
                <option value="+81">🇯🇵 +81</option>
                <option value="+962">🇯🇴 +962</option>
                <option value="+7">🇰🇿 +7</option>
                <option value="+254">🇰🇪 +254</option>
                <option value="+686">🇰🇮 +686</option>
                <option value="+383">🇽🇰 +383</option>
                <option value="+965">🇰🇼 +965</option>
                <option value="+996">🇰🇬 +996</option>
                <option value="+856">🇱🇦 +856</option>
                <option value="+371">🇱🇻 +371</option>
                <option value="+961">🇱🇧 +961</option>
                <option value="+266">🇱🇸 +266</option>
                <option value="+231">🇱🇷 +231</option>
                <option value="+218">🇱🇾 +218</option>
                <option value="+423">🇱🇮 +423</option>
                <option value="+370">🇱🇹 +370</option>
                <option value="+352">🇱🇺 +352</option>
                <option value="+853">🇲🇴 +853</option>
                <option value="+389">🇲🇰 +389</option>
                <option value="+261">🇲🇬 +261</option>
                <option value="+265">🇲🇼 +265</option>
                <option value="+60">🇲🇾 +60</option>
                <option value="+960">🇲🇻 +960</option>
                <option value="+223">🇲🇱 +223</option>
                <option value="+356">🇲🇹 +356</option>
                <option value="+692">🇲🇭 +692</option>
                <option value="+222">🇲🇷 +222</option>
                <option value="+230">🇲🇺 +230</option>
                <option value="+52">🇲🇽 +52</option>
                <option value="+691">🇫🇲 +691</option>
                <option value="+373">🇲🇩 +373</option>
                <option value="+377">🇲🇨 +377</option>
                <option value="+976">🇲🇳 +976</option>
                <option value="+382">🇲🇪 +382</option>
                <option value="+212">🇲🇦 +212</option>
                <option value="+258">🇲🇿 +258</option>
                <option value="+95">🇲🇲 +95</option>
                <option value="+264">🇳🇦 +264</option>
                <option value="+674">🇳🇷 +674</option>
                <option value="+977">🇳🇵 +977</option>
                <option value="+31">🇳🇱 +31</option>
                <option value="+687">🇳🇨 +687</option>
                <option value="+64">🇳🇿 +64</option>
                <option value="+505">🇳🇮 +505</option>
                <option value="+227">🇳🇪 +227</option>
                <option value="+234">🇳🇬 +234</option>
                <option value="+850">🇰🇵 +850</option>
                <option value="+47">🇳🇴 +47</option>
                <option value="+968">🇴🇲 +968</option>
                <option value="+92">🇵🇰 +92</option>
                <option value="+680">🇵🇼 +680</option>
                <option value="+970">🇵🇸 +970</option>
                <option value="+507">🇵🇦 +507</option>
                <option value="+675">🇵🇬 +675</option>
                <option value="+595">🇵🇾 +595</option>
                <option value="+51">🇵🇪 +51</option>
                <option value="+63">🇵🇭 +63</option>
                <option value="+48">🇵🇱 +48</option>
                <option value="+351">🇵🇹 +351</option>
                <option value="+974">🇶🇦 +974</option>
                <option value="+40">🇷🇴 +40</option>
                <option value="+7">🇷🇺 +7</option>
                <option value="+250">🇷🇼 +250</option>
                <option value="+685">🇼🇸 +685</option>
                <option value="+378">🇸🇲 +378</option>
                <option value="+239">🇸🇹 +239</option>
                <option value="+966">🇸🇦 +966</option>
                <option value="+221">🇸🇳 +221</option>
                <option value="+381">🇷🇸 +381</option>
                <option value="+248">🇸🇨 +248</option>
                <option value="+232">🇸🇱 +232</option>
                <option value="+65">🇸🇬 +65</option>
                <option value="+421">🇸🇰 +421</option>
                <option value="+386">🇸🇮 +386</option>
                <option value="+677">🇸🇧 +677</option>
                <option value="+252">🇸🇴 +252</option>
                <option value="+27">🇿🇦 +27</option>
                <option value="+82">🇰🇷 +82</option>
                <option value="+211">🇸🇸 +211</option>
                <option value="+34">🇪🇸 +34</option>
                <option value="+94">🇱🇰 +94</option>
                <option value="+249">🇸🇩 +249</option>
                <option value="+597">🇸🇷 +597</option>
                <option value="+46">🇸🇪 +46</option>
                <option value="+41">🇨🇭 +41</option>
                <option value="+963">🇸🇾 +963</option>
                <option value="+886">🇹🇼 +886</option>
                <option value="+992">🇹🇯 +992</option>
                <option value="+255">🇹🇿 +255</option>
                <option value="+66">🇹🇭 +66</option>
                <option value="+670">🇹🇱 +670</option>
                <option value="+228">🇹🇬 +228</option>
                <option value="+676">🇹🇴 +676</option>
                <option value="+216">🇹🇳 +216</option>
                <option value="+90">🇹🇷 +90</option>
                <option value="+993">🇹🇲 +993</option>
                <option value="+688">🇹🇻 +688</option>
                <option value="+256">🇺🇬 +256</option>
                <option value="+380">🇺🇦 +380</option>
                <option value="+971">🇦🇪 +971</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+598">🇺🇾 +598</option>
                <option value="+998">🇺🇿 +998</option>
                <option value="+678">🇻🇺 +678</option>
                <option value="+58">🇻🇪 +58</option>
                <option value="+84">🇻🇳 +84</option>
                <option value="+967">🇾🇪 +967</option>
                <option value="+260">🇿🇲 +260</option>
                <option value="+263">🇿🇼 +263</option>
              </select>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={phoneNumber}
                onChange={handlePhoneChange}
                required
                pattern={currentCountryData.pattern}
                maxLength={currentCountryData.digits}
                title={`Please enter exactly ${currentCountryData.digits} digits`}
                placeholder={currentCountryData.placeholder}
                className="flex-1 px-3 py-2 border-2 border-[#040F2D] rounded font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#DFA236]"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1 font-inter">
              Enter {currentCountryData.digits} digits for {selectedCountry}
            </p>
          </div>

          <div>
            <label htmlFor="discipline" className="block font-montserrat font-semibold text-xs uppercase tracking-wider text-[#040F2D] mb-1.5">
              Select Discipline
            </label>
            <select
              id="discipline"
              name="discipline"
              required
              className="w-full px-3 py-2 border-2 border-[#040F2D] rounded font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#DFA236]"
            >
              <option value="">Choose one</option>
              <option value="Video">Video</option>
              <option value="AI">AI</option>
              <option value="Design">Design</option>
            </select>
          </div>

          <div>
            <label htmlFor="portfolio" className="block font-montserrat font-semibold text-xs uppercase tracking-wider text-[#040F2D] mb-1.5">
              Portfolio Link <span className="text-gray-400 font-inter text-xs normal-case">(Optional)</span>
            </label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              placeholder="Link to your Google Drive or Socials"
              className="w-full px-3 py-2 border-2 border-[#040F2D] rounded font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#DFA236]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-montserrat font-semibold text-xs uppercase tracking-wider text-[#040F2D] mb-1.5">
              Why You?
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              placeholder="Tell us about your career goals in 2 sentences"
              required
              className="w-full px-3 py-2 border-2 border-[#040F2D] rounded font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#DFA236] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#DFA236] text-[#040F2D] font-montserrat font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-[#040F2D] hover:text-white transition-all duration-300 active:scale-95 shadow-lg"
          >
            Submit Profile
          </button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center font-inter text-sm"
            >
              ✓ Application submitted successfully!
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}