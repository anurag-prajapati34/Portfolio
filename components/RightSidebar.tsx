import { Icons } from "@/public";
import { FileText } from "lucide-react";
import Image from "next/image";

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
    { label: "Medium", href: "https://medium.com/@anurag-prajapati", icon: Icons.mediumIcon, },
    { label: "Email", href: "mailto:prajapatianurag73240@gmail.com", icon: Icons.gmailIcon, },

];

export const RightSidebar = () => {
    return (
        <div className="flex justify-start py-48 px-10 relative">
            <div className="fixed w-64   px-4 py-3">
                <p className="text-zinc-600 text-[11px] font-semibold tracking-widest mb-4">
                    CONNECT
                </p>

                <div className="flex flex-col gap-1">
                    {links.map(({ label, href, icon: Icon, }) => (
                        <a
                            key={label}
                            href={href}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            className="group flex items-center gap-2.5 py-1.5 text-zinc-500 hover:text-white transition-colors"
                        >
                            <Image src={Icon as string} alt={label} width={20} height={20} className="object-contain" />
                            <span className="text-sm">{label}</span>
                        </a>
                    ))}
                </div>

                <a
                    href="https://drive.google.com/file/d/1Zhse2FAuJFg10ilWlfV11aHXqfc9GTfq/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 mt-6 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 rounded-full py-2 text-sm font-semibold text-white transition-colors"
                >
                    Resume
                    <FileText className="w-3.5 h-3.5" />
                </a>
            </div>
        </div>
    );
};