"use client";

import { Zap, Shield, MousePointer2 } from 'lucide-react';

const features = [
  {
    title: "Lightning Fast Development",
    desc: "I build high-performance web applications with optimized code ensuring blazing-fast load times.",
    icon: <Zap className="text-emerald-500" />,
    points: ["< 1s Load Time", "SEO Optimized", "Performance First"]
  },
  {
    title: "Secure & Scalable Solutions",
    desc: "Robust backend architectures designed to scale seamlessly under heavy user traffic.",
    icon: <Shield className="text-blue-500" />,
    points: ["Enterprise Security", "Cloud Ready", "Auto Scaling"]
  },
  {
    title: "User-Centric Design",
    desc: "Creating intuitive interfaces that prioritize user experience and accessibility.",
    icon: <MousePointer2 className="text-purple-500" />,
    points: ["WCAG Compliant", "Mobile First", "Intuitive UX"]
  }
];

export default function Features() {
  return (
    <section className="py-32 px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
          Top-Notch Solutions, <br /> Delivered with <span className="text-emerald-500">Precision</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
            <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">{f.desc}</p>
            <ul className="space-y-2">
              {f.points.map((p, j) => (
                <li key={j} className="text-[11px] font-bold text-emerald-500/80 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-500 rounded-full" /> {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}