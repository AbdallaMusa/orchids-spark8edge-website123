"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-[100] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <Image
              src="/icons.png"
              alt="SPARK8EDGE Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:scale-105"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="font-['Montserrat'] font-extrabold text-base sm:text-xl text-[#040F2D] uppercase tracking-tight transition-colors group-hover:text-[#DFA236]">
                SPARK8EDGE
              </span>
              <span className="hidden sm:block font-sans font-medium text-[9px] sm:text-[10px] tracking-wide text-gray-500 uppercase">
                Spark your future, ignite your brand
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className="font-['Montserrat'] font-semibold text-sm uppercase tracking-wider text-[#6D8299] hover:text-[#040F2D] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/youth-hub"
              className="font-['Montserrat'] font-semibold text-sm uppercase tracking-wider text-[#6D8299] hover:text-[#040F2D] transition-colors"
            >
              Youth Hub
            </Link>
            <Link
              href="/organization"
              className="font-['Montserrat'] font-semibold text-sm uppercase tracking-wider text-[#6D8299] hover:text-[#040F2D] transition-colors"
            >
              Organization
            </Link>
            <Link
              href="/about-us"
              className="font-['Montserrat'] font-semibold text-sm uppercase tracking-wider text-[#6D8299] hover:text-[#040F2D] transition-colors"
            >
              About Us
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/youth-hub"
              className="px-3 xl:px-4 py-2 bg-[#DFA236] text-[#040F2D] font-['Montserrat'] font-semibold text-xs uppercase tracking-wider rounded hover:bg-[#040F2D] hover:text-[#DFA236] transition-all whitespace-nowrap"
            >
              Join Network
            </Link>
            <Link
              href="/organization"
              className="px-3 xl:px-4 py-2 bg-[#040F2D] text-white font-['Montserrat'] font-semibold text-xs uppercase tracking-wider rounded hover:bg-[#DFA236] hover:text-[#040F2D] transition-all whitespace-nowrap"
            >
              Book Consult
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#040F2D]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#E5E7EB]"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block font-['Montserrat'] font-semibold text-sm uppercase tracking-wider text-[#6D8299] hover:text-[#040F2D]"
              >
                Home
              </Link>
              <Link
                href="/youth-hub"
                onClick={() => setIsOpen(false)}
                className="block font-['Montserrat'] font-semibold text-sm uppercase tracking-wider text-[#6D8299] hover:text-[#040F2D]"
              >
                Youth Hub
              </Link>
              <Link
                href="/organization"
                onClick={() => setIsOpen(false)}
                className="block font-['Montserrat'] font-semibold text-sm uppercase tracking-wider text-[#6D8299] hover:text-[#040F2D]"
              >
                Organization
              </Link>
              <Link
                href="/about-us"
                onClick={() => setIsOpen(false)}
                className="block font-['Montserrat'] font-semibold text-sm uppercase tracking-wider text-[#6D8299] hover:text-[#040F2D]"
              >
                About Us
              </Link>
              <div className="pt-4 space-y-3">
                <Link
                  href="/youth-hub"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-2.5 bg-[#DFA236] text-[#040F2D] font-['Montserrat'] font-semibold text-sm uppercase tracking-wider rounded"
                >
                  Join Network
                </Link>
                <Link
                  href="/organization"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-2.5 bg-[#040F2D] text-white font-['Montserrat'] font-semibold text-sm uppercase tracking-wider rounded"
                >
                  Book Consult
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
