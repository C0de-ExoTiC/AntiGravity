"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
    { path: "/", label: "Home" },
    { path: "/leistungen", label: "Leistungen" },
    { path: "/kontakt", label: "Kontakt" },
    { path: "/impressum", label: "Impressum" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <>
            {/* Dezentes Logo in der Ecke */}
            <Link href="/" className="fixed top-2 left-6 z-50 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img
                    src="/logo.png"
                    alt="CXZ-IT Logo"
                    className="object-contain"
                    style={{ width: '140px', height: '140px' }}
                />
            </Link>

            {/* Navigation */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
                <ul className="flex items-center gap-1 p-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20">
                    {links.map((link) => {
                        const isActive = pathname === link.path;

                        return (
                            <li key={link.path} className="relative">
                                <Link
                                    href={link.path}
                                    className={cn(
                                        "relative block px-4 py-2 text-sm font-medium transition-colors duration-200",
                                        isActive ? "text-black" : "text-gray-400 hover:text-white"
                                    )}
                                >
                                    {/* Active Background Animation */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-active"
                                            className="absolute inset-0 bg-yellow-400 rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
