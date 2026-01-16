"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase, Home, Server, Shield, Phone, Wrench,
    Wifi, HardDrive, Smartphone, MonitorSpeaker
} from "lucide-react";

const businessServices = [
    {
        title: "Managed IT & Wartung",
        description: "Laufende Betreuung Ihrer Systeme. Sie arbeiten, wir kümmern uns.",
        icon: <Server className="w-6 h-6" />
    },
    {
        title: "Telefonanlagen & VoIP",
        description: "Professionelle Erreichbarkeit. Moderne Cloud-Telefonie.",
        icon: <Phone className="w-6 h-6" />
    },
    {
        title: "Netzwerk & Server",
        description: "Rack-Lösungen, Virtualisierung und High-Availability.",
        icon: <HardDrive className="w-6 h-6" />
    },
    {
        title: "Cyber Security",
        description: "Firewalls, Endpoint Protection & Penetration Tests.",
        icon: <Shield className="w-6 h-6" />
    }
];

const privateServices = [
    {
        title: "PC & Laptop Reparatur",
        description: "Hilfe bei Hardware-Defekten, Viren und langsamen Systemen.",
        icon: <Wrench className="w-6 h-6" />
    },
    {
        title: "Smart Home & WLAN",
        description: "Das vernetzte Zuhause sicher und zuverlässig einrichten.",
        icon: <Wifi className="w-6 h-6" />
    },
    {
        title: "Datenrettung",
        description: "Wiederherstellung verlorener Fotos, Videos und Dokumente.",
        icon: <HardDrive className="w-6 h-6" />
    },
    {
        title: "Einrichtungshilfe",
        description: "Drucker, Router, Handy – wir machen alles startklar.",
        icon: <Smartphone className="w-6 h-6" />
    }
];

export function TargetGroup() {
    const [isBusiness, setIsBusiness] = useState(true);
    const services = isBusiness ? businessServices : privateServices;

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Für wen wir <span className="text-yellow-400">arbeiten.</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                    Ob Firma oder Familie – wir haben die passende Lösung.
                </p>

                {/* Toggle Switch */}
                <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-xl">
                    <button
                        onClick={() => setIsBusiness(true)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${isBusiness
                                ? "bg-yellow-400 text-black"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        <Briefcase className="w-5 h-5" />
                        Geschäftskunden
                    </button>
                    <button
                        onClick={() => setIsBusiness(false)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${!isBusiness
                                ? "bg-yellow-400 text-black"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        <Home className="w-5 h-5" />
                        Privatkunden
                    </button>
                </div>
            </div>

            {/* Services Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={isBusiness ? "business" : "private"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-yellow-500/50 hover:bg-white/[0.07] transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
