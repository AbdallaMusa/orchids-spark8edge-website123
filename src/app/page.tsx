"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Sparkles, Target, Zap, Users, Award } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <SplitHeroSection />
        <NexusSection />
        <StatsSection />
        <ServicesAccordionSection />
        <MarketGapSection />
        <NewsletterSection />
        <Footer />
      </main>
    </>
  );
}

function SplitHeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] w-full flex flex-col md:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex-1 min-h-[50vh] md:min-h-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#DFA236] opacity-40 transition-opacity duration-500" />
        
        <div className="relative z-10 text-center px-6 py-12 max-w-xl">
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#040F2D] uppercase mb-4 leading-tight">
            Empowering Kenya's Next Generation
          </h1>
          <p className="font-inter text-lg text-[#040F2D] mb-8 font-semibold">
            World-Class Training in AI, Content Creation & Digital Innovation
          </p>
          
          <Link
            href="/youth-hub"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#040F2D] text-white font-montserrat font-semibold text-sm uppercase tracking-wider rounded hover:bg-[#DFA236] hover:text-[#040F2D] transition-all duration-300 active:scale-95"
          >
            Discover Programs <ArrowRight size={20} />
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex-1 min-h-[50vh] md:min-h-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#040F2D] opacity-70 transition-opacity duration-500" />
        
        <div className="relative z-10 text-center px-6 py-12 max-w-xl">
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase mb-4 leading-tight">
            Strategic Brand Intelligence
          </h1>
          <p className="font-inter text-lg text-[#DFA236] mb-8 font-semibold">
            AI-Enhanced PR & Reputation Management for Modern Enterprises
          </p>
          
          <Link
            href="/organization"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#DFA236] text-[#040F2D] font-montserrat font-semibold text-sm uppercase tracking-wider rounded hover:bg-white hover:text-[#040F2D] transition-all duration-300 active:scale-95"
          >
            View Services <ArrowRight size={20} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

function NexusSection() {
  return (
    <section className="min-h-screen w-full bg-[#F4F4F9] flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-[#040F2D] uppercase mb-6">
            Where Talent Meets Opportunity
          </h2>
          <p className="font-inter text-lg md:text-xl text-[#6D8299] max-w-3xl mx-auto leading-relaxed">
            Spark8Edge bridges East Africa's creative ecosystem with global markets. We cultivate exceptional talent through cutting-edge training while delivering enterprise-grade brand solutions powered by artificial intelligence and human creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative p-10 bg-white rounded-lg border-4 border-transparent transition-all duration-500 overflow-hidden"
          >
            <Sparkles size={48} className="text-[#DFA236] mb-6" />
            <h3 className="font-montserrat font-bold text-2xl text-[#040F2D] uppercase mb-4">Youth Development</h3>
            <p className="font-inter text-[#6D8299] text-lg leading-relaxed">
              Intensive bootcamps in emerging technologies, creative production, and business strategy designed to transform ambitious youth into industry leaders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative p-10 bg-white rounded-lg border-4 border-transparent transition-all duration-500 overflow-hidden"
          >
            <Target size={48} className="text-[#040F2D] mb-6" />
            <h3 className="font-montserrat font-bold text-2xl text-[#040F2D] uppercase mb-4">Enterprise Solutions</h3>
            <p className="font-inter text-[#6D8299] text-lg leading-relaxed">
              Intelligent PR systems, strategic communications, and curated talent networks that give organizations competitive advantage in the digital age.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "Pioneering the intersection of African creativity and global technology standards",
    },
    {
      icon: Users,
      title: "Youth Empowerment",
      description: "Building bridges between untapped potential and transformative opportunities",
    },
    {
      icon: Sparkles,
      title: "Excellence Driven",
      description: "Delivering world-class training and services that exceed international benchmarks",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#040F2D] via-[#1a2847] to-[#040F2D] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #DFA236 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-white uppercase mb-6">
            Our Foundation
          </h2>
          <p className="font-inter text-lg text-[#DFA236] max-w-2xl mx-auto">
            The core principles driving Spark8Edge as we build the future of African talent development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center bg-white/5 backdrop-blur-sm p-8 rounded-lg border-2 border-[#DFA236]/20 transition-all duration-300"
            >
              <div className="inline-block mb-6">
                <value.icon size={64} className="text-[#DFA236]" />
              </div>
              
              <h3 className="font-montserrat font-bold text-2xl text-white uppercase tracking-wider mb-4">
                {value.title}
              </h3>
              
              <p className="font-inter text-base text-[#DFA236]/90 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesAccordionSection() {
  const services = [
    {
      title: "AI & Digital Skills Training",
      subtitle: "Kenya Professional Development",
      description: "Master AI tools, video production, content creation, social media marketing, and digital entrepreneurship at our Nairobi innovation hub.",
      keywords: ["AI Training", "Digital Skills", "Kenya Bootcamps"],
      icon: Sparkles,
    },
    {
      title: "AI-Powered PR & Brand Services",
      subtitle: "Strategic Communications",
      description: "Real-time media monitoring, sentiment analysis, reputation management, and data-driven brand positioning for East African businesses.",
      keywords: ["PR Services", "Brand Management", "AI Marketing"],
      icon: Target,
    },
    {
      title: "Vetted Creative Talent Network",
      subtitle: "Pre-Trained Professionals",
      description: "Connect with AI specialists, content creators, video editors, social media managers, and brand strategists ready to deliver results.",
      keywords: ["Hire Talent", "Creative Professionals", "Outsourcing"],
      icon: Users,
    },
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-white to-[#F4F4F9] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block mb-2">
            <Award size={36} className="text-[#DFA236] mx-auto" />
          </div>
          
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-[#040F2D] uppercase mb-3">
            Digital Transformation Services
          </h2>
          <p className="font-inter text-base text-[#6D8299] max-w-3xl mx-auto">
            World-class AI training, strategic brand intelligence, and curated creative talent for Kenya and East Africa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm p-5 rounded-lg border-2 border-[#040F2D]/20 transition-all duration-300"
            >
              <div className="inline-block mb-3">
                <service.icon size={40} className="text-[#DFA236]" />
              </div>
              
              <span className="inline-block font-inter text-xs uppercase tracking-widest mb-1 text-[#6D8299] font-semibold">
                {service.subtitle}
              </span>
              
              <h3 className="font-montserrat font-bold text-lg text-[#040F2D] uppercase tracking-wider mb-2">
                {service.title}
              </h3>
              
              <p className="font-inter text-sm text-[#6D8299] leading-relaxed mb-3">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {service.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-2 py-0.5 bg-[#DFA236]/10 rounded-full text-xs font-inter uppercase tracking-wide text-[#040F2D]"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketGapSection() {
  const gaps = [
    {
      title: "Capability Acceleration",
      problem: "Technology evolves faster than traditional education. Yesterday's skills become obsolete tomorrow.",
      solution: "Agile, industry-aligned training that evolves with markets.",
    },
    {
      title: "Digital Reputation",
      problem: "Brand perception forms instantly online. Reactive PR strategies arrive too late to control narratives.",
      solution: "Proactive AI monitoring and instant response systems.",
    },
    {
      title: "Hidden Potential",
      problem: "Africa's creative brilliance remains invisible to international markets seeking diverse, affordable talent.",
      solution: "Verified talent marketplace connecting continents.",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-[#F4F4F9] flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-[#040F2D] uppercase mb-6">
            Solving Critical Market Challenges
          </h2>
          <p className="font-inter text-lg text-[#6D8299] max-w-2xl mx-auto">
            Our platform addresses the disconnect between talent, training, and market demand
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gaps.map((gap, index) => (
            <motion.div
              key={gap.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-lg border-2 border-[#040F2D] transition-all duration-300"
            >
              <div>
                <h3 className="font-montserrat font-bold text-xl text-[#040F2D] uppercase mb-4">
                  {gap.title}
                </h3>
              </div>
              
              <p className="font-inter text-[#6D8299] text-base mb-4 italic">
                "{gap.problem}"
              </p>
              <div className="flex items-center gap-2 mt-6">
                <div>
                  <Zap size={20} className="text-[#DFA236]" />
                </div>
                <p className="font-inter font-medium text-[#040F2D] text-base">
                  {gap.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
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
      setEmail("");
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section className="w-full bg-[#DFA236] flex items-center justify-center px-6 py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #040F2D 2px, transparent 2px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center w-full relative z-10"
      >
        <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-[#040F2D] uppercase mb-6">
          Stay Connected to Innovation
        </h2>
        
        <p className="font-inter text-lg md:text-xl text-[#040F2D] mb-12 leading-relaxed">
          Receive curated insights on emerging technologies, creative economy trends, and exclusive opportunities to grow with Africa's innovation ecosystem.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-6 py-4 rounded font-inter text-[#040F2D] border-2 border-[#040F2D] focus:outline-none focus:border-[#040F2D] focus:ring-2 focus:ring-[#040F2D] transition-all"
          />
          
          <button
            type="submit"
            className="px-8 py-4 bg-[#040F2D] text-white font-montserrat font-semibold text-sm uppercase tracking-wider rounded hover:bg-white hover:text-[#040F2D] transition-all duration-300 shadow-lg"
          >
            Subscribe Now
          </button>
        </form>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center font-inter text-sm"
          >
            ✓ Subscribed successfully!
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
