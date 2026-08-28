// ArticleCard.tsx
import { Article } from "@/data/articles";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";



const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "";
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
};

export const ArticleCard = ({ article }: { article: Article }) => {
    const { title, link, pubDate, excerpt, thumbnail, categories } = article;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 border border-zinc-900 hover:border-zinc-800 rounded-xl p-4 transition-colors group"
        >
            {thumbnail && (
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-lg overflow-hidden bg-zinc-950">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                    />
                </div>
            )}

            <div className="min-w-0 flex flex-col">
                <h3 className="text-white font-bold text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-sky-400 transition-colors">
                    {title}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 leading-relaxed line-clamp-2">
                    {excerpt}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-2">
                    <span className="text-zinc-500 text-xs">{formatDate(pubDate)}</span>
                    {
                        categories.map((category) => {
                            return (< span key={category} className="text-zinc-500 text-xs bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-full" >
                                {category}
                            </span>)
                        })
                    }
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-sky-400 ml-auto transition-colors text-end" />
                </div>
            </div>
        </a >
    );
};