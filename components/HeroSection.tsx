"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Cpu, Database, Server, GitBranch } from 'lucide-react';

const fader: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HeroSection() {
  return (
    <motion.section 
      id="home" 
      initial="hidden" animate="visible"
      className="relative flex flex-col items-center text-center pt-24 pb-12 px-6"
    >
      {/* --- Glassy Status Badge --- */}
      <motion.div 
        variants={fader} custom={1} 
        className="backdrop-blur-md bg-white/5 border border-white/10 px-4 py-2 rounded-full shadow-xl mb-8 group cursor-default"
      >
        <div className="flex items-center gap-3">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 group-hover:text-white transition-colors">
            Available for Worldwide Projects
          </span>
        </div>
      </motion.div>

      {/* --- Main Headline with Glass Text Effect --- */}
      <motion.div variants={fader} custom={2} className="relative z-10">
        <h2 className="text-zinc-500 text-xl md:text-2xl font-medium tracking-tight mb-4">
          Software Engineer & <span className="text-white">Full-Stack Architect</span>
        </h2>
        <h1 className="text-6xl md:text-[140px] font-black tracking-tighter leading-[0.8] italic uppercase mb-8">
          <span className="text-white drop-shadow-2xl">Digital</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-700 to-zinc-900">Experience</span>
        </h1>
      </motion.div>

      {/* --- Glassy Tech Stats Panel --- */}
      <motion.div 
        variants={fader} custom={3}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        <GlassTag icon={<Cpu size={14}/>} text="Next.js 15" />
        <GlassTag icon={<Database size={14}/>} text="Prisma & SQL" />
        <GlassTag icon={<Server size={14}/>} text="Dockerized" />
        <GlassTag icon={<GitBranch size={14}/>} text="CI/CD" />
      </motion.div>

      {/* --- Professional Description --- */}
      <motion.p 
        variants={fader} custom={4} 
        className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed mb-12"
      >
        Specializing in building high-performance, scalable web applications using <span className="text-white">Modern JavaScript Stacks</span>. I bridge the gap between complex backend logic and seamless user experiences.
      </motion.p>

      {/* --- Glass CTA Buttons --- */}
      <motion.div variants={fader} custom={5} className="flex flex-col sm:flex-row gap-6">
        <Link 
          href="mailto:contact@shakib.dev" 
          className="group relative px-10 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Get In Touch <ArrowUpRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
        
        <Link 
          href="#work" 
          className="backdrop-blur-md bg-white/5 border border-white/10 px-10 py-4 text-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white/10 transition-all"
        >
          View Case Studies
        </Link>
      </motion.div>
    </motion.section>
  );
}

function GlassTag({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="backdrop-blur-sm bg-zinc-900/30 border border-white/5 px-3 py-1.5 rounded-xl flex items-center gap-2 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
      <span className="text-emerald-500">{icon}</span>
      {text}
    </div>
  );
}