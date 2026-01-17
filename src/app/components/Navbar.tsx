"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { path: "/", label: "Home" },
    { path: "/leistungen", label: "Leistungen" },
    { path: "/kontakt", label: "Kontakt" },
    { path: "/news", label: "News" },
    { path: "/impressum", label: "Impressum" },
];

export function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Logo - Responsive sizing */}
            <Link href="/" className="fixed top-2 left-4 md:left-6 z-50 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img
                    src="/logo.png"
                    alt="CXZ-IT Logo"
                    className="object-contain w-20 h-20 md:w-[140px] md:h-[140px]"
                />
            </Link>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="fixed top-6 right-4 z-50 md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? (
                    <X className="w-6 h-6 text-yellow-400" />
                ) : (
                    <Menu className="w-6 h-6 text-white" />
                )}
            </button>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden"
                    >
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center justify-center h-full gap-6"
                        >
                            {links.map((link, index) => {
                                const isActive = pathname === link.path;
                                return (
                                    <motion.div
                                        key={link.path}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        <Link
                                            href={link.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={cn(
                                                "text-2xl font-semibold transition-colors duration-200",
                                                isActive ? "text-yellow-400" : "text-gray-400 hover:text-white"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
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
