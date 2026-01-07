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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/s-1765820438601.png"
              alt="SPARK8EDGE Logo"
              width={120}
              height={60}
              className="h-10 w-auto transition-transform group-hover:scale-105"
              priority
            />
            <span className="font-['Montserrat'] font-extrabold text-xl text-[#040F2D] uppercase tracking-tight transition-colors group-hover:text-[#DFA236]">
              SPARK8EDGE
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
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

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/youth-hub"
              className="px-4 py-2 bg-[#DFA236] text-[#040F2D] font-['Montserrat'] font-semibold text-xs uppercase tracking-wider rounded hover:bg-[#040F2D] hover:text-[#DFA236] transition-all"
            >
              Join Network
            </Link>
            <Link
              href="/organization"
              className="px-4 py-2 bg-[#040F2D] text-white font-['Montserrat'] font-semibold text-xs uppercase tracking-wider rounded hover:bg-[#DFA236] hover:text-[#040F2D] transition-all"
            >
              Book Consult
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#040F2D]"
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
            className="md:hidden bg-white border-t border-[#E5E7EB]"
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
