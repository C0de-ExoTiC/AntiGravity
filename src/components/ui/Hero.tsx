'use client';

import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full opacity-50" />
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    CXZ-IT
                    <span className="block text-4xl md:text-6xl text-primary font-light mt-2">SOLUTIONS</span>
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12"
            >
                Experience the future of IT. Anti-gravity performance for your business.
            </motion.p>

            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
            >
                <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold backdrop-blur-md hover:bg-white/10 hover:border-primary/50 transition-all shadow-[0_0_30px_rgba(0,243,255,0.1)] hover:shadow-[0_0_50px_rgba(0,243,255,0.3)]">
                    Explore Services
                </button>
            </motion.div>
        </section>
    );
}
