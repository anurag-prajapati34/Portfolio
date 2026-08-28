"use client";

import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";



export default function ClientWrapper({ children }: { children: React.ReactNode }) {

    return <div className="flex h-full relative">
        <LeftSidebar />
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
            {children}
        </div>
        <RightSidebar />
    </div>
}