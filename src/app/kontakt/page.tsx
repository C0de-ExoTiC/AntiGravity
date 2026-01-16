"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Kontakt() {
    return (
        <main className="bg-black min-h-screen text-white pt-32 pb-20 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6">Let's Talk.</h1>
                        <p className="text-xl text-gray-400 max-w-md">Bereit für das nächste Level? Erzählen Sie uns von Ihrem Projekt.</p>
                    </div>
                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10"><Phone className="w-6 h-6 text-yellow-400" /></div>
                            <div><h3 className="text-lg font-bold mb-1">Telefon</h3><p className="text-2xl text-gray-200">+49 173 9179752</p></div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10"><Mail className="w-6 h-6 text-yellow-400" /></div>
                            <div><h3 className="text-lg font-bold mb-1">E-Mail</h3><p className="text-2xl text-gray-200">kontakt@cxz-it.de</p></div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10"><MapPin className="w-6 h-6 text-yellow-400" /></div>
                            <div><h3 className="text-lg font-bold mb-1">Anschrift</h3><p className="text-xl text-gray-300">Lessingstr. 6a<br />66914 Waldmohr</p></div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2"><label className="text-sm text-gray-400">Name</label><input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-yellow-400 focus:outline-none" placeholder="Name" /></div>
                            <div className="space-y-2"><label className="text-sm text-gray-400">Firma</label><input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-yellow-400 focus:outline-none" placeholder="Firma" /></div>
                        </div>
                        <div className="space-y-2"><label className="text-sm text-gray-400">E-Mail</label><input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-yellow-400 focus:outline-none" placeholder="E-Mail" /></div>
                        <div className="space-y-2"><label className="text-sm text-gray-400">Nachricht</label><textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-yellow-400 focus:outline-none" placeholder="Nachricht..." /></div>
                        <button type="button" className="w-full btn-primary">Nachricht senden <Send size={18} /></button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
