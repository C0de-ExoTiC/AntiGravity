'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
                isScrolled ? "glass border-b-white/10" : "bg-transparent border-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-2xl font-bold tracking-tighter text-white">
                CXZ<span className="text-primary">.IT</span>
            </div>

            <div className="hidden md:flex gap-8 text-sm font-medium text-white/80">
                <Link href="#" className="hover:text-primary transition-colors">Home</Link>
                <Link href="#" className="hover:text-primary transition-colors">Services</Link>
                <Link href="#" className="hover:text-primary transition-colors">About</Link>
                <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
            </div>

            <button className="px-4 py-2 text-sm font-bold text-black bg-primary rounded-full hover:bg-white transition-colors">
                Get Started
            </button>
        </motion.nav>
    );
}
