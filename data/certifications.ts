export interface Certification {
  title: string;
  issuer: string;
  issuerLogo: string;
  issueDate: string;
  credentialUrl?: string;
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issuerLogo: "/logos/aws.png",
    issueDate: "2023-09-21",
    credentialUrl:
      "https://www.credly.com/badges/3b3b3bba-3b3b-4b3b-9b3b-3b3b3b3b3b3b",
  },
];
