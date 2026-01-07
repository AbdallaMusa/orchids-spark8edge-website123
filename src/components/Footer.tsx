import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#040F2D] via-[#0a1a3d] to-[#040F2D] text-white py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, #DFA236 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/icons.png"
                alt="SPARK8EDGE Logo"
                width={50}
                height={50}
                className="transition-transform group-hover:scale-105"
              />
              <span className="font-montserrat font-extrabold text-2xl text-[#DFA236] uppercase tracking-wider">
                SPARK8EDGE
              </span>
            </Link>
            <p className="text-[#9DB3CC] text-sm leading-relaxed">
              Spark8Edge connects Africa&apos;s creative talent with global opportunities through elite AI training and strategic brand intelligence. Spark your future, ignite your brand.
            </p>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-widest mb-6 text-white border-b-2 border-[#DFA236] pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/youth-hub" className="group text-[#9DB3CC] hover:text-[#DFA236] text-sm transition-colors flex items-center gap-2">
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  Youth Hub
                </Link>
              </li>
              <li>
                <Link href="/organization" className="group text-[#9DB3CC] hover:text-[#DFA236] text-sm transition-colors flex items-center gap-2">
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  Organization
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="group text-[#9DB3CC] hover:text-[#DFA236] text-sm transition-colors flex items-center gap-2">
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-widest mb-6 text-white border-b-2 border-[#DFA236] pb-2 inline-block">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/youth-hub" className="group text-[#9DB3CC] hover:text-[#DFA236] text-sm transition-colors flex items-center gap-2">
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  AI & Digital Training
                </Link>
              </li>
              <li>
                <Link href="/organization" className="group text-[#9DB3CC] hover:text-[#DFA236] text-sm transition-colors flex items-center gap-2">
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  PR & Brand Intelligence
                </Link>
              </li>
              <li>
                <Link href="/organization" className="group text-[#9DB3CC] hover:text-[#DFA236] text-sm transition-colors flex items-center gap-2">
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  Creative Talent Network
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-widest mb-6 text-white border-b-2 border-[#DFA236] pb-2 inline-block">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#9DB3CC] text-sm group">
                <Mail size={18} className="text-[#DFA236] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:vanessamwando@gmail.com" className="hover:text-[#DFA236] transition-colors break-all">
                  vanessamwando@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#9DB3CC] text-sm group">
                <MapPin size={18} className="text-[#DFA236] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Westlands, Nairobi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#DFA236]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-[#9DB3CC] text-sm">
              © 2025 Spark8Edge. All rights reserved.
            </p>
            <p className="text-center text-[#DFA236] text-xs font-montserrat uppercase tracking-wider font-semibold">
              Spark your future, ignite your brand
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
