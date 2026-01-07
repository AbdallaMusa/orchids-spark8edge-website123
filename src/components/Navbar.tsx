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
        <div className="flex justify-between items-center h-20 md:h-24">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
              <Image
                src="/icons.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-extrabold text-xl md:text-2xl text-[#040F2D] uppercase leading-none">
                SPARK8EDGE
              </span>
              <span className="font-inter text-[10px] md:text-sm lg:text-base text-[#6D8299] font-medium mt-1">
                Spark your future, ignite your brand
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-montserrat font-semibold text-sm uppercase text-[#6D8299] hover:text-[#040F2D]">Home</Link>
            <Link href="/youth-hub" className="font-montserrat font-semibold text-sm uppercase text-[#6D8299] hover:text-[#040F2D]">Youth Hub</Link>
            <Link href="/organization" className="font-montserrat font-semibold text-sm uppercase text-[#6D8299] hover:text-[#040F2D]">Organization</Link>
            <Link href="/about-us" className="font-montserrat font-semibold text-sm uppercase text-[#6D8299] hover:text-[#040F2D]">About Us</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/youth-hub" className="px-4 py-2 bg-[#DFA236] text-[#040F2D] font-montserrat font-semibold text-xs uppercase rounded">Join Network</Link>
            <Link href="/organization" className="px-4 py-2 bg-[#040F2D] text-white font-montserrat font-semibold text-xs uppercase rounded">Book Consult</Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-[#040F2D]">
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
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="block font-montserrat font-semibold text-sm uppercase text-[#6D8299]">Home</Link>
              <Link href="/youth-hub" onClick={() => setIsOpen(false)} className="block font-montserrat font-semibold text-sm uppercase text-[#6D8299]">Youth Hub</Link>
              <Link href="/organization" onClick={() => setIsOpen(false)} className="block font-montserrat font-semibold text-sm uppercase text-[#6D8299]">Organization</Link>
              <Link href="/about-us" onClick={() => setIsOpen(false)} className="block font-montserrat font-semibold text-sm uppercase text-[#6D8299]">About Us</Link>
              <div className="pt-4 space-y-2">
                <Link href="/youth-hub" onClick={() => setIsOpen(false)} className="block w-full text-center py-3 bg-[#DFA236] text-[#040F2D] font-montserrat font-semibold text-sm uppercase rounded">Join Network</Link>
                <Link href="/organization" onClick={() => setIsOpen(false)} className="block w-full text-center py-3 bg-[#040F2D] text-white font-montserrat font-semibold text-sm uppercase rounded">Book Consult</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
