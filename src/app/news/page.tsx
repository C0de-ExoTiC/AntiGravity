import { Metadata } from "next";
import { ExternalLink, Clock, Newspaper } from "lucide-react";
import Parser from "rss-parser";

export const metadata: Metadata = {
    title: "IT-News",
    description: "Aktuelle IT-News und Security-Meldungen aus der Branche.",
};

// Revalidate every 30 minutes
export const revalidate = 1800;

interface FeedItem {
    title?: string;
    link?: string;
    contentSnippet?: string;
    pubDate?: string;
    categories?: string[];
}

async function getHeiseNews(): Promise<FeedItem[]> {
    const parser = new Parser();

    try {
        const feed = await parser.parseURL("https://www.heise.de/rss/heise-atom.xml");
        return feed.items.slice(0, 12) as FeedItem[];
    } catch (error) {
        console.error("Failed to fetch Heise RSS feed:", error);
        return [];
    }
}

function formatDate(dateString?: string): string {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

export default async function NewsPage() {
    const news = await getHeiseNews();

    return (
        <main className="bg-black min-h-screen text-white pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-yellow-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6">
                        <Newspaper className="w-4 h-4" />
                        Powered by Heise
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
                        IT-<span className="text-yellow-400">News</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Aktuelle Meldungen aus der IT-Welt. Bleiben Sie informiert über die neuesten Entwicklungen.
                    </p>
                </div>

                {/* News Grid */}
                {news.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {news.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 flex flex-col"
                            >
                                {/* Category Badge */}
                                {item.categories && item.categories[0] && (
                                    <span className="inline-block self-start px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium mb-4">
                                        {item.categories[0]}
                                    </span>
                                )}

                                {/* Title */}
                                <h2 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors mb-3 line-clamp-2">
                                    {item.title}
                                </h2>

                                {/* Snippet */}
                                <p className="text-sm text-gray-400 line-clamp-3 mb-4 flex-1">
                                    {item.contentSnippet}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Clock className="w-3 h-3" />
                                        {formatDate(item.pubDate)}
                                    </div>
                                    <span className="flex items-center gap-1 text-xs text-yellow-400 group-hover:text-yellow-300 transition-colors">
                                        Weiterlesen <ExternalLink className="w-3 h-3" />
                                    </span>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-400">News konnten nicht geladen werden. Bitte versuchen Sie es später erneut.</p>
                    </div>
                )}

                {/* Attribution */}
                <div className="text-center mt-16 pt-8 border-t border-white/10">
                    <p className="text-sm text-gray-500">
                        News-Quelle:{" "}
                        <a
                            href="https://www.heise.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 hover:text-yellow-300 underline"
                        >
                            heise.de
                        </a>
                        {" "}• Aktualisierung alle 30 Minuten
                    </p>
                </div>
            </div>
        </main>
    );
}
