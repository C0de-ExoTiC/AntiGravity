import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CXZ-IT Solutions | AntiGravity",
    description: "Next Level IT für Kusel & Umgebung",
    icons: {
        icon: "/icon.png",
        apple: "/icon.png",
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