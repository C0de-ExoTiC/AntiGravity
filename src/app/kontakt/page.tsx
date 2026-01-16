"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";
import Link from "next/link";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Kontakt() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Fehler beim Senden");
            }

            setStatus("success");
            setFormData({ name: "", company: "", email: "", message: "" });
        } catch (error) {
            setStatus("error");
            setErrorMessage(
                error instanceof Error ? error.message : "Ein unerwarteter Fehler ist aufgetreten."
            );
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (status === "error") setStatus("idle");
    };

    return (
        <main className="bg-black min-h-screen text-white pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-8xl font-black tracking-tight mb-6">Let's Talk.</h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-md">Bereit für das nächste Level? Erzählen Sie uns von Ihrem Projekt.</p>
                    </div>
                    <div className="space-y-6 md:space-y-8">
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="p-3 md:p-4 bg-white/5 rounded-2xl border border-white/10"><Phone className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" /></div>
                            <div><h3 className="text-base md:text-lg font-bold mb-1">Telefon</h3><p className="text-xl md:text-2xl text-gray-200">+49 173 9179752</p></div>
                        </div>
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="p-3 md:p-4 bg-white/5 rounded-2xl border border-white/10"><Mail className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" /></div>
                            <div><h3 className="text-base md:text-lg font-bold mb-1">E-Mail</h3><p className="text-xl md:text-2xl text-gray-200">kontakt@cxz-it.de</p></div>
                        </div>
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="p-3 md:p-4 bg-white/5 rounded-2xl border border-white/10"><MapPin className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" /></div>
                            <div><h3 className="text-base md:text-lg font-bold mb-1">Anschrift</h3><p className="text-lg md:text-xl text-gray-300">Lessingstr. 6a<br />66914 Waldmohr</p></div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-white/5 border border-white/10 p-6 md:p-8 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-xl"
                >
                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center h-full min-h-[300px] text-center space-y-6"
                        >
                            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                                <CheckCircle className="w-10 h-10 text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Nachricht gesendet!</h3>
                                <p className="text-gray-400">Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.</p>
                            </div>
                            <button
                                onClick={() => setStatus("idle")}
                                className="btn-secondary"
                            >
                                Neue Nachricht senden
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                                    <p className="text-red-300 text-sm">{errorMessage}</p>
                                </motion.div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors"
                                        placeholder="Ihr Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Firma</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors"
                                        placeholder="Ihre Firma (optional)"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">E-Mail *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors"
                                    placeholder="ihre@email.de"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Nachricht *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                                    placeholder="Beschreiben Sie Ihr Anliegen..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Wird gesendet...
                                    </>
                                ) : (
                                    <>
                                        Nachricht senden <Send size={18} />
                                    </>
                                )}
                            </button>
                            <p className="text-xs text-gray-500 text-center">
                                Mit dem Absenden stimmen Sie unserer <Link href="/datenschutz" className="text-yellow-400 hover:text-yellow-300 underline">Datenschutzerklärung</Link> zu.
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </main>
    );
}

