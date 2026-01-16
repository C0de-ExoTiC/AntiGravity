"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function TrackingScripts() {
    const [hasConsent, setHasConsent] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        setHasConsent(consent === "accepted");
        setIsLoaded(true);
    }, []);

    // Don't render anything until we've checked consent
    if (!isLoaded || !hasConsent) return null;

    return (
        <>
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

            {/* Vercel Speed Insights */}
            <SpeedInsights />
        </>
    );
}
