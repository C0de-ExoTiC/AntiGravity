'use client';

import { motion } from 'framer-motion';
import { Cpu, Eye, Server, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
    delay: number;
}

function ServiceCard({ title, description, icon, className, delay }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className={cn(
                "glass-card p-8 rounded-3xl flex flex-col justify-between group cursor-pointer overflow-hidden relative",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="mb-4 p-4 rounded-2xl bg-white/5 w-fit border border-white/10 group-hover:border-primary/50 text-white group-hover:text-primary transition-colors duration-300">
                {icon}
            </div>

            <div>
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{description}</p>
            </div>

            <div className="mt-4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-primary">
                →
            </div>
        </motion.div>
    );
}

export function BentoGrid() {
    const services = [
        {
            title: "IT Support",
            description: "24/7 Premium Support for your enterprise infrastructure. Zero gravity downtime.",
            icon: <Server size={32} />,
            className: "md:col-span-2",
            delay: 0.1
        },
        {
            title: "AI Solutions",
            description: "Next-gen Artificial Intelligence integration. Automate your future.",
            icon: <Cpu size={32} />,
            className: "md:col-span-1 bg-gradient-to-b from-secondary/10 to-transparent",
            delay: 0.2
        },
        {
            title: "Video Security",
            description: "Advanced surveillance systems with crystal clear analytics.",
            icon: <Eye size={32} />,
            className: "md:col-span-1",
            delay: 0.3
        },
        {
            title: "Cyber Defense",
            description: "Impenetrable security shields for your data assets.",
            icon: <ShieldCheck size={32} />,
            className: "md:col-span-2",
            delay: 0.4
        }
    ];

    return (
        <section className="py-24 px-4 max-w-7xl mx-auto w-full">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            >
                Our <span className="text-secondary">Universe</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
    );
}
