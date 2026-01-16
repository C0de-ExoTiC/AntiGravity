"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
    "Kristallklare 4K-Aufnahmen bei Tag & Nacht",
    "Intelligente KI-Erkennung (Mensch vs. Tier/Auto)",
    "Live-Zugriff per App – weltweit & verschlüsselt",
    "Keine Abo-Gebühren (Lokale Speicherung)"
];

export function SecuritySection() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: Text & Features */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div>
                        <span className="inline-block px-4 py-2 mb-6 text-sm font-mono tracking-widest text-yellow-400 border border-yellow-500/30 rounded-full bg-yellow-500/5">
                            FÜR PRIVAT & GEWERBE
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                            Sicherheit kennt <span className="text-yellow-400">keinen Unterschied.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                            Ob Industriehalle oder Einfamilienhaus – wir installieren Profi-Technik, die funktioniert.
                        </p>
                    </div>

                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 md:gap-4 text-base md:text-lg"
                            >
                                <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" />
                                <span className="text-gray-200">{feature}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="pt-4">
                        <Link href="/kontakt" className="btn-primary">
                            Sicherheits-Check anfragen <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-yellow-500/20 aspect-square group">
                        {/* Gold overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-transparent z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1665848383782-1ea74efde68f?q=80&w=2000&auto=format&fit=crop"
                            alt="Dome Überwachungskamera"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 bg-black/80 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-4 md:p-6">
                        <p className="text-yellow-400 font-bold text-lg">100% DSGVO-konform</p>
                        <p className="text-gray-400 text-sm">Lokale Speicherung. Ihre Daten.</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
