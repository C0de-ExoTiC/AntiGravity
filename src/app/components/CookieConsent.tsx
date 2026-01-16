"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setShowBanner(true);
        }
        setIsLoaded(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setShowBanner(false);
        // Reload to activate tracking scripts
        window.location.reload();
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setShowBanner(false);
    };

    // Don't render anything until client-side hydration is complete
    if (!isLoaded) return null;

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="max-w-4xl mx-auto bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
                            <div className="flex-shrink-0 p-3 bg-yellow-500/20 rounded-xl">
                                <Cookie className="w-6 h-6 text-yellow-400" />
                            </div>

                            <div className="flex-1 space-y-2">
                                <h3 className="text-lg font-bold text-white">Cookie-Einstellungen</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Wir nutzen Cookies und ähnliche Technologien, um Ihre Erfahrung zu verbessern,
                                    den Traffic zu analysieren und für Werbezwecke. Mehr dazu in unserer{" "}
                                    <Link href="/datenschutz" className="text-yellow-400 hover:text-yellow-300 underline">
                                        Datenschutzerklärung
                                    </Link>.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                <button
                                    onClick={handleDecline}
                                    className="px-5 py-2.5 text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
                                >
                                    Ablehnen
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="px-5 py-2.5 text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-300 rounded-xl transition-colors"
                                >
                                    Akzeptieren
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Hook to check if cookies are accepted
export function useCookieConsent(): boolean {
    const [hasConsent, setHasConsent] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        setHasConsent(consent === "accepted");
    }, []);

    return hasConsent;
}
