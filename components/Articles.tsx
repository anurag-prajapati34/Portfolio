// Articles.tsx
import { SectionHeading } from "./SectionHeading";
import { ArticleCard } from "./ArticleCard";
import { articles } from "@/data/articles";

export default async function Articles() {


    return (
        <div id="articles" className="w-full text-white font-sans text-start mt-8">
            <SectionHeading title="Articles" />
            <div className="flex flex-col gap-4 mt-6">
                {articles.slice(0, 5).map((article) => (
                    <ArticleCard key={article.link} article={article} />
                ))}
            </div>
        </div>
    );
}