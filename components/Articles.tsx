import { articles } from "@/data/articles";
import { ArrowUpRight } from "lucide-react";
import { ArticleCard } from "./ArticleCard";
import { SectionHeading } from "./SectionHeading";

export default async function Articles() {


    return (
        <div id="articles" className="w-full text-white font-sans text-start mt-8">
            <SectionHeading title="Articles" />
            <div className="flex flex-col gap-4 mt-6">
                {articles.slice(0, 5).map((article) => (
                    <ArticleCard key={article.link} article={article} />
                ))}
            </div>
            <div className="flex w-full justify-center items-center mt-2">
                <a
                    href="https://medium.com/@anurag-prajapati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-1 items-center rounded-xl px-4 py-1 "
                >
                    <p className="
                     text-zinc-400 hover:text-white transition-colors text-sm
                    "> View all</p>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 hover:text-white transition-colors text-sm text-end" />
                </a>
            </div>
        </div>
    );
}