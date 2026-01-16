import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL('https://cxz-it.de'),
    title: {
        default: 'CXZ-IT | Ihr digitales Rückgrat für IT-Erfolg',
        template: '%s | CXZ-IT',
    },
    description: 'Professionelle IT-Lösungen für Geschäfts- und Privatkunden. Sicherer. Schneller. Kompromisslos. Entdecken Sie CXZ-IT.',
    keywords: ['IT-Dienstleistungen', 'Kusel', 'Waldmohr', 'Kaiserslautern', 'IT-Support', 'Cloud-Lösungen', 'Videoüberwachung', 'Netzwerk', 'CXZ-IT'],
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
        siteName: 'CXZ-IT Solutions',
        title: 'CXZ-IT | Ihr digitales Rückgrat für IT-Erfolg',
        description: 'Professionelle IT-Lösungen für Geschäfts- und Privatkunden. Sicherer. Schneller. Kompromisslos.',
        images: [
            {
                url: '/icon.png',
                width: 512,
                height: 512,
                alt: 'CXZ-IT Logo',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'CXZ-IT | Ihr digitales Rückgrat für IT-Erfolg',
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
            <head>
                {/* Google Ads Conversion Tracking */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-16787386382"
                    strategy="afterInteractive"
                />
                <Script id="google-ads" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16787386382');
                    `}
                </Script>
            </head>
            <body className={`${inter.className} bg-black text-white selection:bg-yellow-500/30`}>
                <Navbar />
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}