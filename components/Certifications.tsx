
import { certifications } from "@/data/certifications";
import { CertificationCard } from "./CertificationCard";
import { SectionHeading } from "./SectionHeading";

export default function Certifications() {
    if (certifications.length === 0) return null;

    return (
        <div id="certifications" className="w-full text-white font-sans text-start mt-10">
            <SectionHeading title="Certifications" />
            <div className="flex flex-col gap-3 mt-6">
                {certifications.map((cert) => (
                    <CertificationCard key={cert.title} certification={cert} />
                ))}
            </div>
        </div>
    );
}