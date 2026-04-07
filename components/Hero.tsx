"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Laptop, Server } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-[#070707]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* --- Left Content --- */}
        <div className="space-y-8">
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10"
          >
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              Expert Frontend Developer & Backend Enthusiast
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[1.1]"
          >
            Crafting Digital <br />
            <span className="text-[#DFFF19]">Masterpieces</span> <br />
            with Code
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-lg text-lg text-zinc-400 leading-relaxed"
          >
            I&apos;m <span className="text-white font-bold">Araby Hossain Abid</span>, a dedicated 
            <span className="text-[#DFFF19]"> Frontend Expert</span> specializing in building exceptional 
            digital experiences while rapidly expanding my mastery into 
            <span className="text-[#DFFF19]"> Backend Development</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="#work" className="group flex items-center gap-2 bg-[#DFFF19] text-black px-8 py-4 rounded-full font-black text-sm uppercase transition-transform hover:scale-105">
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/cv.pdf" className="flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-black text-sm uppercase hover:bg-white/10 transition-all">
              <Download size={18} /> Download CV
            </Link>
          </motion.div>
        </div>

        {/* --- Right Content (Image & Floating Cards) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Outer Glow Circle */}
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-full flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-[12px] border-zinc-900 shadow-[0_0_80px_rgba(223,255,25,0.15)]" />
            
            {/* Main Image Container */}
            <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden border-4 border-zinc-800">
               <Image 
                src="/profile.jpg" // তোমার ছবি এখানে দাও
                alt="Shakib"
                fill
                className="object-cover"
                priority
               />
            </div>

            {/* Floating Skill Card: Backend (Top Right) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 right-0 md:right-10 backdrop-blur-xl bg-zinc-900/60 border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-2xl"
            >
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500">
                <Server size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-500 uppercase">Backend</p>
                <p className="text-sm font-black text-white">Skilled</p>
              </div>
            </motion.div>

            {/* Floating Skill Card: Frontend (Bottom Left) */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 md:left-10 backdrop-blur-xl bg-zinc-900/60 border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-2xl"
            >
              <div className="w-10 h-10 bg-[#DFFF19]/20 rounded-lg flex items-center justify-center text-[#DFFF19]">
                <Laptop size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-500 uppercase">Frontend</p>
                <p className="text-sm font-black text-white">Expertise</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}