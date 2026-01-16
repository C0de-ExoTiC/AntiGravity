"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { TargetGroup } from "./components/TargetGroup";
import { SecuritySection } from "./components/SecuritySection";

const bentoCards = [
    {
        title: "Infrastruktur",
        subtitle: "Das Herz Ihres Netzwerks",
        image: "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?q=80&w=2000&auto=format&fit=crop",
        span: "md:col-span-2 md:row-span-2",
        size: "h-80 md:h-full"
    },
    {
        title: "Security",
        subtitle: "Schutz, der nie schläft",
        image: "https://images.unsplash.com/photo-1740560051549-cc6799220d48?q=80&w=2000&auto=format&fit=crop",
        span: "md:col-span-1",
        size: "h-64"
    },
    {
        title: "KI & Automation",
        subtitle: "Die Zukunft, heute",
        image: "https://images.unsplash.com/photo-1716436329836-208bea5a55e6?q=80&w=2000&auto=format&fit=crop",
        span: "md:col-span-1",
        size: "h-64"
    },
    {
        title: "Cloud Services",
        subtitle: "Grenzenlos arbeiten",
        image: "https://images.unsplash.com/photo-1690627931320-16ac56eb2588?q=80&w=2000&auto=format&fit=crop",
        span: "md:col-span-2",
        size: "h-72"
    },
];

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <main className="min-h-screen bg-black text-white">

            {/* === HERO SECTION === */}
            <section ref={heroRef} className="relative h-[100vh] w-full overflow-hidden">
                {/* Background Image with Parallax Zoom */}
                <motion.div
                    style={{ scale: heroScale }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                        alt="Data Center Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/70" />
                </motion.div>

                {/* Hero Content */}
                <motion.div
                    style={{ opacity: heroOpacity, y: heroY }}
                    className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-7xl md:text-9xl font-black tracking-tighter leading-none text-glow"
                    >
                        CXZ-IT
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mt-4 text-xl md:text-2xl text-gray-300 font-light max-w-xl"
                    >
                        Next Level IT für Kusel & Umgebung. Infrastruktur. Videoüberwachung. Cloud. KI.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="/kontakt">
                            <button className="btn-primary">
                                Beratung starten
                            </button>
                        </Link>
                        <Link href="/leistungen">
                            <button className="btn-secondary">
                                Mehr erfahren
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                >
                    <div className="w-6 h-10 rounded-full border-2 border-yellow-400/30 flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
                        />
                    </div>
                </motion.div>
            </section>

            {/* === BIG STATEMENT SECTION === */}
            <section className="py-32 md:py-48 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-center max-w-5xl mx-auto leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500"
                >
                    Wir bauen das digitale Rückgrat für Ihren Erfolg. Schneller. Sicherer. Kompromisslos.
                </motion.h2>
            </section>

            {/* === TARGET GROUP TOGGLE === */}
            <TargetGroup />

            {/* === SECURITY SECTION === */}
            <SecuritySection />

            {/* === RICH MEDIA BENTO GRID === */}
            <section className="px-6 pb-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
                    {bentoCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`bento-card group ${card.span} ${card.size}`}
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="overlay">
                                <p className="text-sm uppercase tracking-widest text-gray-400 mb-1 group-hover:text-yellow-400 transition-colors">
                                    {card.subtitle}
                                </p>
                                <h3 className="text-2xl md:text-3xl font-bold text-white">
                                    {card.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* === FOOTER === */}
            <footer className="border-t border-white/10 py-12 px-6">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <img
                        src="/logo.png"
                        alt="CXZ-IT Logo"
                        className="w-16 h-16 mx-auto object-contain"
                    />
                    <p className="text-gray-400">© {new Date().getFullYear()} CXZ-IT Solutions.</p>
                    <p className="text-xs text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Ihr IT-Systemhaus für Kusel, Waldmohr, Kaiserslautern & Umgebung. Spezialisiert auf IT-Infrastruktur, Cloud-Lösungen, Videoüberwachung und PC-Notdienst.
                    </p>
                    <div className="flex justify-center gap-6 pt-4">
                        <Link href="/impressum" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">Impressum</Link>
                        <Link href="/datenschutz" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">Datenschutz</Link>
                    </div>
                </div>
            </footer>

        </main>
    );
}