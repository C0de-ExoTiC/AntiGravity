import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL('https://cxz-it.de'),
    title: {
        default: 'AntiGravity | Ihr digitales Rückgrat für IT-Erfolg',
        template: '%s | AntiGravity',
    },
    description: 'Professionelle IT-Lösungen für Geschäfts- und Privatkunden. Sicherer. Schneller. Kompromisslos. Entdecken Sie AntiGravity.',
    keywords: ['IT-Dienstleistungen', 'Kusel', 'Waldmohr', 'Kaiserslautern', 'IT-Support', 'Cloud-Lösungen', 'Videoüberwachung', 'Netzwerk', 'AntiGravity', 'CXZ-IT'],
    authors: [{ name: 'CXZ-IT Solutions' }],
    creator: 'CXZ-IT Solutions',
    publisher: 'CXZ-IT Solutions',
    icons: {
        icon: '/icon.png',
        apple: '/icon.png',
        shortcut: '/icon.png',
    },
    openGraph: {
        type: 'website',
        locale: 'de_DE',
        url: 'https://cxz-it.de',
        siteName: 'AntiGravity by CXZ-IT',
        title: 'AntiGravity | Ihr digitales Rückgrat für IT-Erfolg',
        description: 'Professionelle IT-Lösungen für Geschäfts- und Privatkunden. Sicherer. Schneller. Kompromisslos.',
        images: [
            {
                url: '/icon.png',
                width: 512,
                height: 512,
                alt: 'AntiGravity Logo',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'AntiGravity | Ihr digitales Rückgrat für IT-Erfolg',
        description: 'Professionelle IT-Lösungen für Geschäfts- und Privatkunden. Sicherer. Schneller. Kompromisslos.',
        images: ['/icon.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de" className="dark">
            <body className={`${inter.className} bg-black text-white selection:bg-yellow-500/30`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}