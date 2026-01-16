"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
    {
        id: "01",
        title: "Infrastruktur & Netzwerk",
        headline: "Das Fundament Ihrer IT.",
        description: "Von der strukturierten Verkabelung bis zum Managed Switch. Wir bauen Hochleistungs-Netzwerke mit Ubiquiti & Cisco Hardware.",
        features: ["Glasfaser & Kupfer", "Server-Schränke", "WLAN-Ausleuchtung"],
        img: "https://images.unsplash.com/photo-1624965439943-09e0238644e2?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Sicherheit & Überwachung",
        headline: "Sicherheit, die nicht schläft.",
        description: "Videoüberwachung und Zutrittskontrolle für Gewerbe und Privat. KI-gestützte Erkennung vermeidet Fehlalarme.",
        features: ["2K/4K Kameras", "Kennzeichenerkennung", "DSGVO-konform"],
        img: "https://images.unsplash.com/photo-1481597262637-0545b18186ea?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "PC-Service & Hardware",
        headline: "Reparatur & Aufrüstung.",
        description: "Ihr Rechner ist langsam oder defekt? Wir reparieren PCs und Laptops aller Marken. Schnell, lokal und transparent.",
        features: ["Datenrettung", "Virenentfernung", "Hardware-Upgrade"],
        img: "https://images.unsplash.com/photo-1692049065982-fc40fa2d4403?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "04",
        title: "Cloud & Modern Work",
        headline: "Büro überall.",
        description: "Microsoft 365, Teams und Cloud-Speicher. Wir machen Ihr Unternehmen standortunabhängig und sichern Ihre Daten automatisch.",
        features: ["Microsoft 365 Migration", "Teams Telefonie", "Automatisches Backup"],
        img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "05",
        title: "Telefonanlagen (VoIP)",
        headline: "Professionell kommunizieren.",
        description: "Schluss mit ISDN. Wir installieren moderne VoIP-Telefonanlagen (3CX / Starface), die auf dem Handy genauso funktionieren wie im Büro.",
        features: ["Digitale Warteschleifen", "Smartphone-App", "Homeoffice-Ready"],
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "06",
        title: "Webdesign & Hosting",
        headline: "Ihr digitaler Auftritt.",
        description: "Moderne, schnelle Webseiten, die auf jedem Handy gut aussehen. Wir kümmern uns um Design, Hosting und Ihre Domain.",
        features: ["Responsive Design", "SEO-Optimierung", "Domain-Verwaltung"],
        img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "07",
        title: "Smart Home",
        headline: "Das intelligente Zuhause.",
        description: "Komfort und Effizienz. Steuern Sie Licht, Heizung und Rollläden per App. Wir vernetzen Ihr Eigenheim sicher und intuitiv.",
        features: ["Lichtsteuerung", "Smarte Thermostate", "Sprachsteuerung"],
        img: "https://images.unsplash.com/photo-1672718985175-be33c65e17f8?q=80&w=2000&auto=format&fit=crop"
    }
];

export default function Leistungen() {
    return (
        <main className="bg-black min-h-screen text-white pt-32 pb-20">
            <section className="text-center max-w-4xl mx-auto px-6 mb-32">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
                >
                    Unsere <span className="text-yellow-400">Expertise.</span>
                </motion.h1>
                <p className="text-xl text-gray-400">Präzision in jedem Kabel. Intelligenz in jedem System.</p>
            </section>

            <div className="space-y-32 px-6 max-w-[1400px] mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
                    >
                        <div className="flex-1 space-y-8">
                            <span className="text-yellow-400 font-mono text-sm tracking-widest border border-yellow-500/30 px-3 py-1 rounded-full bg-yellow-500/5">
                                SERVICE {service.id}
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight">{service.headline}</h2>
                            <p className="text-xl text-gray-400 leading-relaxed">{service.description}</p>
                            <ul className="space-y-4 pt-4">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-medium">
                                        <CheckCircle2 className="text-yellow-400" /> {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-8">
                                <Link href="/kontakt" className="btn-primary">
                                    Jetzt anfragen <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-square md:aspect-[4/3] group">
                                <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay z-10" />
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Section */}
            <section className="mt-32 py-24 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Bereit für <span className="text-yellow-400">Next Level IT?</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Erzählen Sie uns von Ihrem Projekt. Wir melden uns innerhalb von 24 Stunden.
                    </p>
                    <Link href="/kontakt" className="btn-primary inline-flex">
                        Kontakt aufnehmen <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
