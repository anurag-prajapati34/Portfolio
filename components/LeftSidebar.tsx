
"use client";

import { useEffect, useRef, useState } from "react";

type IndexItem = {
    id: string;
    label: string;
};

const sections: IndexItem[] = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "articles", label: "Articles" },
];

export const LeftSidebar = () => {
    const [activeId, setActiveId] = useState<string>(sections[0].id);
    const [indicator, setIndicator] = useState({ top: 0, height: 0 });
    const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    useEffect(() => {
        const visibilityMap = new Map<string, boolean>();
        const topMap = new Map<string, number>();

        const pickActive = () => {
            const visibleIds = sections
                .map((s) => s.id)
                .filter((id) => visibilityMap.get(id))
                .sort((a, b) => (topMap.get(a) ?? 0) - (topMap.get(b) ?? 0));

            if (visibleIds.length > 0) {
                setActiveId(visibleIds[0]);
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    visibilityMap.set(entry.target.id, entry.isIntersecting);
                    topMap.set(entry.target.id, entry.boundingClientRect.top);
                });
                pickActive();
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0,
            }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);


    useEffect(() => {
        const activeEl = itemRefs.current[activeId];
        if (activeEl) {
            setIndicator({ top: activeEl.offsetTop, height: activeEl.offsetHeight });
        }
    }, [activeId]);

    const handleClick = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="w-full flex justify-end py-48 px-10 relative">
            <div className="fixed">
                <nav className="relative pl-4 w-40">
                    <p className="text-zinc-600 text-[11px] font-semibold tracking-widest mb-4">
                        INDEX
                    </p>

                    {/* track line */}
                    <div className="absolute left-0 top-8 bottom-0 w-px bg-zinc-800" />

                    {/* sliding indicator */}
                    <div
                        className="absolute left-0 w-px bg-white transition-all duration-300 ease-out"
                        style={{ top: indicator.top, height: indicator.height }}
                    />

                    <ul className="flex flex-col gap-1">
                        {sections.map(({ id, label }) => {
                            const isActive = activeId === id;
                            return (
                                <li key={id}>
                                    <button
                                        ref={(el) => {
                                            itemRefs.current[id] = el;
                                        }}
                                        onClick={() => handleClick(id)}
                                        className={`text-left w-full py-1.5 text-sm transition-colors ${isActive
                                            ? "text-white font-semibold"
                                            : "text-zinc-500 hover:text-zinc-300"
                                            }`}
                                    >
                                        {label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
};