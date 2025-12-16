"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Zap, BarChart3, ArrowDown } from "lucide-react";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Organization() {
  return (
    <>
      <Navbar />
      <main className="overflow-y-scroll">
        <HeroSection />
        <DataGapSection />
        <ServicesSuiteSection />
        <CaseStudiesSection />
        <ConsultationFormSection />
        <Footer />
      </main>
    </>
  );
}

function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#040F2D] opacity-85" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-montserrat font-extrabold text-4xl md:text-5xl lg:text-6xl text-white uppercase mb-4 md:mb-6 leading-tight"
        >
          Future-Proof Your Narrative.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-inter text-lg md:text-xl lg:text-2xl text-[#F4F4F9] mb-8 md:mb-12 leading-relaxed"
        >
          We combine human creativity with AI efficiency to deliver measurable ROI.
        </motion.p>

        <motion.button
          onClick={scrollToForm}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-[#DFA236] text-[#040F2D] font-montserrat font-semibold text-xs md:text-sm uppercase tracking-wider rounded hover:bg-white transition-all duration-300 active:scale-95"
        >
          Request Consultation <ArrowDown size={20} />
        </motion.button>
      </div>
    </section>
  );
}

function DataGapSection() {
  return (
    <section className="h-screen w-full bg-[#F4F4F9] flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#040F2D] uppercase mb-6 md:mb-8">
            AI-Powered PR & Sentiment Intelligence.
          </h2>
          
          <p className="font-inter text-base md:text-lg lg:text-xl text-[#6D8299] leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto">
            Modern audiences trust <strong className="text-[#040F2D]">authentic peer-to-peer content</strong> over traditional press releases. 
            Our advanced <strong className="text-[#040F2D]">AI sentiment analysis technology</strong> tracks real-time market perception, 
            identifies emerging reputation risks, and delivers <strong className="text-[#040F2D]">data-driven PR strategies</strong> that 
            resonate with your target demographics—all while reducing operational costs significantly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-5 md:p-6 rounded-lg border-2 border-[#040F2D] hover:border-[#DFA236] transition-all duration-300 hover:shadow-xl">
              <p className="font-montserrat font-bold text-3xl md:text-4xl text-[#DFA236] mb-2">
                40%
              </p>
              <p className="font-inter text-sm md:text-base text-[#040F2D] font-semibold">
                Cost Reduction
              </p>
              <p className="font-inter text-xs text-[#6D8299] mt-1">
                with AI-driven workflows
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-lg border-2 border-[#040F2D] hover:border-[#DFA236] transition-all duration-300 hover:shadow-xl">
              <p className="font-montserrat font-bold text-3xl md:text-4xl text-[#DFA236] mb-2">
                3x
              </p>
              <p className="font-inter text-sm md:text-base text-[#040F2D] font-semibold">
                Faster Deployment
              </p>
              <p className="font-inter text-xs text-[#6D8299] mt-1">
                vs traditional PR campaigns
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-lg border-2 border-[#040F2D] hover:border-[#DFA236] transition-all duration-300 hover:shadow-xl">
              <p className="font-montserrat font-bold text-3xl md:text-4xl text-[#DFA236] mb-2">
                Real-Time
              </p>
              <p className="font-inter text-sm md:text-base text-[#040F2D] font-semibold">
                Market Insights
              </p>
              <p className="font-inter text-xs text-[#6D8299] mt-1">
                sentiment tracking & analysis
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSuiteSection() {
  const services = [
    {
      icon: Shield,
      title: "AI-Driven Crisis Management",
      description: "Our predictive reputation monitoring technology identifies potential brand threats before they escalate. Using advanced machine learning algorithms and real-time social listening, we detect emerging crises within minutes, enabling proactive response strategies that protect your corporate reputation and minimize negative impact on stakeholder trust.",
      keywords: ["Crisis Management", "Reputation Monitoring", "Brand Protection", "Risk Mitigation"],
    },
    {
      icon: Zap,
      title: "Automated Content Engines",
      description: "Scale your corporate communications with AI-powered content production systems. Our automated workflows generate high-quality video assets, infographics, and multimedia content at unprecedented speed—delivering professional-grade materials in days instead of weeks while maintaining brand consistency and reducing production costs by up to 60%.",
      keywords: ["Content Automation", "Corporate Communications", "Multimedia Production", "Cost Efficiency"],
    },
    {
      icon: BarChart3,
      title: "Impact Analytics",
      description: "Transform raw data into actionable insights with our comprehensive analytics dashboard. Track campaign performance metrics, audience engagement rates, sentiment scores, and ROI in real-time. Our advanced reporting tools provide granular visibility into content reach, emotional resonance, and conversion attribution across all communication channels.",
      keywords: ["Analytics Dashboard", "ROI Tracking", "Performance Metrics", "Data Insights"],
    },
  ];

  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="min-h-screen w-full bg-white flex items-center justify-center px-6 py-20 overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            id="services-heading"
            className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#040F2D] uppercase mb-4 md:mb-6"
          >
            Corporate Intelligence Suite.
          </h2>
          <p className="font-inter text-base md:text-lg text-[#6D8299] leading-relaxed max-w-4xl mx-auto mb-8">
            Our integrated suite of <strong className="text-[#040F2D]">AI-powered communication tools</strong> combines{" "}
            <strong className="text-[#040F2D]">crisis management</strong>, <strong className="text-[#040F2D]">automated content production</strong>, 
            and <strong className="text-[#040F2D]">predictive analytics</strong> to give enterprise organizations complete control over their 
            corporate narrative. From threat detection to content deployment, we deliver end-to-end solutions that scale with your needs.
          </p>
        </motion.header>

        <div className="space-y-6 md:space-y-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group bg-gradient-to-br from-[#F4F4F9] to-white p-6 md:p-8 rounded-xl border-2 border-[#040F2D] hover:border-[#DFA236] hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="p-3 bg-white rounded-lg border-2 border-[#040F2D] group-hover:border-[#DFA236] transition-colors duration-300">
                    <Icon 
                      size={40} 
                      className="text-[#DFA236] group-hover:scale-110 transition-transform duration-500" 
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-bold text-xl md:text-2xl text-[#040F2D] uppercase mb-3 group-hover:text-[#DFA236] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-inter text-[#6D8299] text-sm md:text-base lg:text-lg leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2" role="list" aria-label={`Key features of ${service.title}`}>
                      {service.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          role="listitem"
                          className="inline-block px-3 py-1 bg-white border border-[#6D8299] text-[#040F2D] font-inter text-xs rounded-full group-hover:border-[#DFA236] group-hover:bg-[#DFA236] group-hover:text-white transition-all duration-300"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center"
        >
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#DFA236] text-[#040F2D] font-montserrat font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#040F2D] hover:text-white transition-all duration-300 active:scale-95 shadow-lg hover:shadow-2xl"
            aria-label="Request a consultation about our services"
          >
            Discuss Your Needs <ArrowDown size={20} aria-hidden="true" />
          </button>
          <p className="mt-4 font-inter text-sm text-[#6D8299]">
            Free consultation • Tailored solutions • Measurable ROI
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  const testimonials = [
    {
      quote: "Spark8Edge transformed our product launch. Their youth network created a buzz we simply couldn't buy with traditional ads.",
      author: "Marketing Director",
      company: "FinTech Nairobi",
    },
    {
      quote: "The speed of delivery is unmatched. What used to take 2 weeks now takes 2 days.",
      author: "CEO",
      company: "Logistics Firm",
    },
  ];

  return (
    <section className="h-screen w-full bg-[#F4F4F9] flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#040F2D] uppercase mb-4 md:mb-6">
            Proven Impact.
          </h2>
          <p className="font-inter text-base md:text-lg text-[#6D8299] leading-relaxed max-w-4xl mx-auto">
            Our clients see <strong className="text-[#040F2D]">measurable results</strong> through our{" "}
            <strong className="text-[#040F2D]">data-driven PR campaigns</strong> and{" "}
            <strong className="text-[#040F2D]">AI-powered reputation management</strong> solutions. From accelerating{" "}
            <strong className="text-[#040F2D]">product launches</strong> to reducing{" "}
            <strong className="text-[#040F2D]">content production timelines</strong>, enterprise organizations trust our{" "}
            <strong className="text-[#040F2D]">integrated communication platform</strong> to deliver{" "}
            <strong className="text-[#040F2D]">ROI-focused outcomes</strong> at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white p-6 md:p-8 rounded-lg border-2 border-[#040F2D] hover:border-[#DFA236] hover:shadow-xl transition-all duration-300"
            >
              <p className="font-inter text-base md:text-lg text-[#6D8299] italic mb-4 md:mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-montserrat font-bold text-sm md:text-base text-[#040F2D] uppercase">
                  {testimonial.author}
                </p>
                <p className="font-inter text-xs md:text-sm text-[#6D8299]">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultationFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    
    const emailInput = form.querySelector<HTMLInputElement>("#work-email");
    const email = emailInput?.value || "";
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!executeRecaptcha) {
      setError("reCAPTCHA not available. Please try again.");
      return;
    }

    try {
      const token = await executeRecaptcha("organization_form");
      
      const formData = new FormData(form);
      formData.append("recaptcha_token", token);
      
      await fetch("https://formspree.io/f/mnneyzqa", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      setSubmitted(true);
      form.reset();
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setError("Submission failed. Please try again.");
    }
  };

  return (
    <section id="consultation-form" className="min-h-screen bg-[#040F2D] flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-white uppercase mb-3">
            Initialize Partnership.
          </h2>
          <p className="font-inter text-sm text-gray-300 max-w-xl mx-auto">
            Let's discuss how we can future-proof your narrative.
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
            <label htmlFor="company-name" className="block font-montserrat font-semibold text-xs uppercase tracking-wider text-[#040F2D] mb-1.5">
              Company Name
            </label>
            <input
              type="text"
              id="company-name"
              name="company-name"
              required
              className="w-full px-3 py-2 border-2 border-[#040F2D] rounded font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#DFA236]"
            />
          </div>

          <div>
            <label htmlFor="work-email" className="block font-montserrat font-semibold text-xs uppercase tracking-wider text-[#040F2D] mb-1.5">
              Work Email
            </label>
            <input
              type="email"
              id="work-email"
              name="work-email"
              required
              className="w-full px-3 py-2 border-2 border-[#040F2D] rounded font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#DFA236]"
            />
          </div>

          <div>
            <label htmlFor="objective" className="block font-montserrat font-semibold text-xs uppercase tracking-wider text-[#040F2D] mb-1.5">
              Primary Objective
            </label>
            <select
              id="objective"
              name="objective"
              required
              className="w-full px-3 py-2 border-2 border-[#040F2D] rounded font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#DFA236]"
            >
              <option value="">Choose one</option>
              <option value="Corporate PR">Corporate PR</option>
              <option value="Crisis Management">Crisis Management</option>
              <option value="Content Production">Content Production</option>
              <option value="Hiring Talent">Hiring Talent</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-montserrat font-semibold text-xs uppercase tracking-wider text-[#040F2D] mb-1.5">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              placeholder="Briefly describe your challenge"
              required
              className="w-full px-3 py-2 border-2 border-[#040F2D] rounded font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#DFA236] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#DFA236] text-[#040F2D] font-montserrat font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-[#040F2D] hover:text-white transition-all duration-300 active:scale-95 shadow-lg"
          >
            Submit Brief
          </button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center font-inter text-sm"
            >
              ✓ Brief submitted successfully!
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}