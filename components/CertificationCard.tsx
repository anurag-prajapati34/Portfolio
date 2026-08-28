
import { Certification } from "@/data/certifications";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Image from "next/image";

const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "";
    return date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });
};



export const CertificationCard = ({ certification }: { certification: Certification }) => {
    const { title, issuer, issuerLogo, issueDate, credentialUrl, credentialId } = certification;

    const content = (
        <div className="flex items-center gap-4 border border-zinc-900 hover:border-zinc-800 rounded-xl p-4 transition-colors group">
            <div className="w-11 h-11 shrink-0 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
                <Image
                    src={issuerLogo}
                    alt={issuer}
                    width={26}
                    height={26}
                    className="object-contain"
                />
            </div>

            <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                    <h3 className="text-white font-bold text-sm sm:text-base leading-snug truncate">
                        {title}
                    </h3>
                    <BadgeCheck className="w-4 h-4 text-sky-500 shrink-0" fill="#1d9bf0" stroke="black" />
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">{issuer}</p>
                <p className="text-zinc-500 text-xs mt-1">
                    Issued {formatDate(issueDate)}
                    {credentialId && <span> · ID: {credentialId}</span>}
                </p>
            </div>

            {credentialUrl && (
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-sky-400 transition-colors shrink-0" />
            )}
        </div>
    );

    if (credentialUrl) {
        return (
            <a href={credentialUrl} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return content;
};