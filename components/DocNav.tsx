/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, User, Briefcase, Mail, } from 'lucide-react';

const DOCK_ITEMS = [
    { label: "Home", href: "/", icon: <Home size={20} /> },
    { label: "About", href: "/about", icon: <User size={20} /> },
    { label: "Projects", href: "/projects", icon: <Briefcase size={20} /> },
    { label: "Connect", href: "https://linkedin.com", icon: <Image src="/linkedin.png" width={20} height={20} alt="GH" className="group-hover:invert transition-all" /> },
    { label: "Source", href: "https://github.com", icon: <Image src="/github.png" width={20} height={20} alt="GH" className="group-hover:invert transition-all" /> },
    { label: "Contact", href: "mailto:hello@shakib.dev", icon: <Mail size={20} /> },
];

export default function DockNav() {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-end h-16 px-4 pb-2 gap-3 backdrop-blur-xl bg-zinc-900/40 border border-white/10 rounded-[2rem] shadow-2xl"
        >
            {DOCK_ITEMS.map((item, i) => (
                <DockIcon key={i} mouseX={mouseX} item={item} />
            ))}
        </motion.nav>
    );
}

function DockIcon({ mouseX, item }: { mouseX: any, item: any }) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() || { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const size = useTransform(distance, [-150, 0, 150], [44, 70, 44]);
    const smoothSize = useSpring(size, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <Link href={item.href} target={item.href.startsWith('http') ? "_blank" : "_self"}>
            <motion.div
                ref={ref}
                style={{ width: smoothSize, height: smoothSize }}
                className="relative flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors group"
            >
                {item.icon}
                {/* Tooltip */}
                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-zinc-800 text-[10px] font-bold px-2 py-1 rounded text-white uppercase tracking-tighter">
                    {item.label}
                </span>
            </motion.div>
        </Link>
    );
}