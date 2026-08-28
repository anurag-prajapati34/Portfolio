
import { BadgeCheck, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export default function Profile() {
    return (
        <div className="w-full text-white font-sans text-start">
            {/* Banner */}
            <div className="relative h-48 w-full bg-gray-800">
                <Image
                    width={192}
                    height={192}
                    src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1200&auto=format&fit=crop"
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="px-4 w-full border border-zinc-900 py-3">
                {/* Avatar + Edit profile row */}
                <div className="relative flex justify-between items-end -mt-16 z-10 ">
                    <div className="w-32 h-32 rounded-full border-4 border-black overflow-hidden bg-gray-900 shrink-0">
                        <Image
                            width={128}
                            height={128}
                            src="https://i.pinimg.com/736x/4f/6d/a2/4f6da24d2d4e73aaed1ea40c1a08f299.jpg"
                            alt="Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* <button className="mt-4 border border-gray-500 text-white font-bold rounded-full px-4 py-1.5 text-sm hover:bg-white/10 transition-colors">
                        Edit profile
                    </button> */}

                </div>

                {/* Name / handle */}
                <div className="mt-3">
                    <div className="flex items-center gap-1">
                        <h1 className="text-lg font-extrabold leading-tight">Anurag Prajapati</h1>
                        <BadgeCheck className="w-5 h-5 text-sky-500" fill="#1d9bf0" stroke="black" />
                    </div>
                    <p className="text-gray-500 text-sm">@anurag_x34</p>
                    <p className="text-sm mt-2">Backend guy who ended up loving the frontend too with the salt of AI.
                        I build things, break them, then fix them slightly better.</p>

                    {/* dotted list */}
                    <ul className="flex flex-col gap-y-2 text-xs text-zinc-400 mt-2 list-disc list-inside marker:text-zinc-500">
                        <li>Everyday learner</li>
                        <li>Left hometown at 20, self-taught my way into Bangalore</li>
                    </ul>
                </div>


                {/* Meta Info Row */}
                <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-zinc-400 pt-1 mt-2">
                    <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Bengaluru, IN</span>
                    </div>
                    {/* <div className="flex items-center gap-1">
                        <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Node.js / TS / Distributed Systems</span>
                    </div> */}
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Building Software since 2022</span>
                    </div>
                </div>




            </div>
        </div >
    );
}