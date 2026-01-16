"use client";
import { motion } from "framer-motion";
import { Building2, User, MapPin, Phone, Mail } from "lucide-react";

export default function Impressum() {
    return (
        <main className="bg-black min-h-screen text-white pt-32 pb-20 px-6 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
                        <span className="text-yellow-400">Impressum</span>
                    </h1>
                    <p className="text-gray-400 text-lg">Angaben gemäß § 5 TMG</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl space-y-10"
                >
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-yellow-500/10 rounded-xl">
                                <Building2 className="w-6 h-6 text-yellow-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-yellow-400 mb-1">Firmenname</h2>
                                <p className="text-xl text-white">CXZ-IT Solutions</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-yellow-500/10 rounded-xl">
                                <User className="w-6 h-6 text-yellow-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-yellow-400 mb-1">Inhaber</h2>
                                <p className="text-xl text-white">Anthony Schley</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-yellow-500/10 rounded-xl">
                                <MapPin className="w-6 h-6 text-yellow-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-yellow-400 mb-1">Anschrift</h2>
                                <p className="text-xl text-white">Lessingstr. 6a<br />66914 Waldmohr</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-yellow-500/10 rounded-xl">
                                <Phone className="w-6 h-6 text-yellow-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-yellow-400 mb-1">Telefon</h2>
                                <p className="text-xl text-white">+49 173 9179752</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-yellow-500/10 rounded-xl">
                                <Mail className="w-6 h-6 text-yellow-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-yellow-400 mb-1">E-Mail</h2>
                                <p className="text-xl text-white">kontakt@cxz-it.de</p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-white/10" />

                    <div className="space-y-4 text-gray-400">
                        <h3 className="text-lg font-bold text-yellow-400">Haftungsausschluss</h3>
                        <p className="leading-relaxed">
                            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
                            Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
