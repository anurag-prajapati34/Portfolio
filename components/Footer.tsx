// Footer.tsx
"use client";

import { ArrowUp } from "lucide-react";

export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w-full text-zinc-500 font-sans mt-16 border-t border-zinc-900">
            <div className="max-w-3xl mx-auto px-4 py-10 flex flex-col items-center text-center gap-4">
                <div className="flex items-center gap-2 text-xs">
                    <span className="text-zinc-400">Got any idea? Opportunity? or just want to chat? let&apos;s connect</span>
                </div>

                <span className="text-white font-medium">Anurag Prajapati</span>.

                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-white transition-colors mt-2 group"
                >
                    Back to top
                    <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
            </div>
        </footer>
    );
};