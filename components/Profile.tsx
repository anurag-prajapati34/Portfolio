import { Images } from "@/public";
import { BadgeCheck, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export default function Profile() {
    return (
        <div className="w-full text-white font-sans text-start">
            {/* Banner */}
            <div className="relative h-48 w-full bg-gray-800">
                <Image
                    src="https://i.pinimg.com/1200x/3c/b1/21/3cb121100344af53350cd5d484218b6d.jpg"
                    alt="Banner"
                    fill
                    priority
                    quality={95}
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div className="px-4 w-full border border-zinc-900 py-3">
                <div className="relative flex justify-between items-end -mt-16 z-10">
                    <div className="relative w-32 h-32 rounded-full border-4 border-black overflow-hidden bg-gray-900 shrink-0">
                        <Image
                            src={Images.profileImage}
                            alt="Avatar"
                            fill
                            quality={95}
                            sizes="128px"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Name / handle */}
                <div className="mt-3">
                    <div className="flex items-center gap-1">
                        <h1 className="text-lg font-extrabold leading-tight">Anurag Prajapati</h1>
                        <BadgeCheck className="w-5 h-5 text-sky-500" fill="#1d9bf0" stroke="black" />
                    </div>
                    <p className="text-gray-500 text-sm">@anurag_x34</p>
                    <p className="text-sm mt-2">
                        Backend-heavy full-stack engineer, building AI-integrated products
                    </p>

                    <ul className="flex flex-col gap-y-2 text-xs text-zinc-400 mt-2 list-disc list-inside marker:text-zinc-500">
                        <li>Backend-first, but I ship the full product — API to UI</li>
                        <li>Learning, Building, Improving and moving forward</li>
                    </ul>
                </div>

                {/* Meta Info Row */}
                <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-zinc-400 pt-1 mt-2">
                    <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Bengaluru, IN</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Building Software since 2022</span>
                    </div>
                </div>
            </div>
        </div>
    );
}