/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useMemo, useLayoutEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import {
  Mail, ArrowUpRight, Code2, Terminal, Database, Box, Globe,
  Cpu, Layers, LucideSnowflake as LinkedinIcon, Home, User
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import DockNav from '@/components/DocNav';
import Stats from '@/components/Stats';
import TechStack from '@/components/TechStack';
import Features from '@/components/Features';
import Hero from '@/components/Hero';

// --- Global Animation Variants (for Hero Content) ---
const fader: Variants = {
  hidden: { opacity: 0, y: 30 },
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

export default function ShakibPortfolio() {
  return (
    <div className="min-h-screen bg-[#070707] text-zinc-400 font-sans selection:bg-emerald-500/30 selection:text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full" />
      </div>

      <main className="max-w-6xl mx-auto px-6 py-32 space-y-48">
        {/* --- Hero Section (Component 1) --- */}
        <HeroSection />
        <Hero/>
        <Stats />
        <TechStack />
        <Features />
        {/* --- Optional: Add more content here, like Projects or Skills --- */}
        <div className="h-screen" /> {/* Placeholder just for scrolling */}
      </main>

      {/* --- Floating Bottom Dock (Component 2 - with Zoom Effect) --- */}
      <DockNav />
    </div>
  );
}

// ==========================================
// --- COMPONENT 1: HERO SECTION ---
// ==========================================
<HeroSection />

// ==========================================
// --- COMPONENT 2: FLOATING DOCK NAV ---
// ==========================================
// This is where the magic zoom effect happens.
