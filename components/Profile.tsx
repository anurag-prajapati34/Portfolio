import { Icons, Images } from "@/public";
import { BadgeCheck, Calendar, FileText, MapPin } from "lucide-react";
import Image from "next/image";

export default function Profile() {


    type LinkItem = {
        label: string;
        href: string;
        icon: React.ElementType;
        external?: boolean;
    };

    const links: LinkItem[] = [
        { label: "GitHub", href: "https://github.com/anurag-prajapati34", icon: Icons.githublightIcon, },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/anurag-prajapati34/", icon: Icons.linkedinIcon, },
        { label: "X / Twitter", href: "https://x.com/anurag_x34", icon: Icons.twitterIcon, },
        // { label: "Medium", href: "https://medium.com/@anurag-prajapati", icon: Icons.mediumIcon, },
        { label: "Email", href: "mailto:prajapatianurag73240@gmail.com", icon: Icons.gmailIcon, },

    ];

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
                        Backend Engineer | Full-Stack Developer | AI Engineer
                    </p>

                    <ul className="flex flex-col gap-y-2 text-xs text-zinc-400 mt-2 list-disc list-inside marker:text-zinc-500">
                        <li>Building backend systems and APIs that power real product</li>
                        <li>Shipping end-to-end applications, from architecture to interface</li>
                        {/* <li>Turning AI/LLMs into useful product features</li> */}

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

                {/*contacts section*/}
                <div className="w-full flex items-center gap-4 mt-2 lg:hidden">
                    {links.map(({ label, href, icon: Icon, external }) => (
                        <a
                            key={label}
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="group flex items-center gap-2.5 py-1.5 text-zinc-500 hover:text-white transition-colors"
                        >
                            <Image src={Icon as string} alt={label} width={20} height={20} className="object-contain" />
                        </a>
                    ))}


                    <a
                        href="https://drive.google.com/file/d/1Zhse2FAuJFg10ilWlfV11aHXqfc9GTfq/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 border-b  text-sm font-semibold text-white transition-colors"
                    >
                        Resume
                        <FileText className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>


        </div>
    );
}