"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiExpress, SiPrisma } from 'react-icons/si';

const techs = [
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: "Express.js", icon: <SiExpress className="text-zinc-400" /> },
  { name: "Prisma", icon: <SiPrisma className="text-white" /> },
];

export default function TechStack() {
  return (
    <section className="py-24 flex flex-col items-center">
      <h3 className="text-zinc-500 text-xs font-black uppercase tracking-[0.5em] mb-12">Tech Stack Mastery</h3>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            className="w-28 h-32 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 transition-colors group"
          >
            <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">
              {tech.icon}
            </div>
            <span className="text-[10px] font-bold text-zinc-500 group-hover:text-zinc-200 uppercase tracking-tighter">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}