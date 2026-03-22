// Stakeholder logos
import alMassarLogo from "@/assets/stakeholders/al-massar-dark-mode.png";
import blueTreeLogo from "@/assets/stakeholders/blue-tree-new-cairo-dark-mode.png";
import massGroupLogo from "@/assets/stakeholders/mass-group-logo-03.png";
import modadLogo from "@/assets/stakeholders/modad-dark-mode.png";
import skyAdLogo from "@/assets/stakeholders/sky-ad-dark-mode.png";
import nbeLogo from "@/assets/stakeholders/the-national-bank-of-egypt.png";
import banqueMisrLogo from "@/assets/stakeholders/banque-misr.png";
import diaaConsultLogo from "@/assets/stakeholders/diaa-consult-dark-mode.png";
import gcGeoLogo from "@/assets/stakeholders/gc-geo-consultant.png";
import smartDesignLogo from "@/assets/stakeholders/al-massar-sub-consult-2.png";
import dmgLogo from "@/assets/stakeholders/al-massar-sub-consult-3.png";
import designersLogo from "@/assets/stakeholders/designers-consultants.png";
import iconicLogo from "@/assets/stakeholders/iconic-dark-mode.webp";
import eicLogo from "@/assets/stakeholders/fit-out-bank-misr-wesal-subcontractor.png";
import fitOutNBESubLogo from "@/assets/stakeholders/fit-out-nbe-wesal-subcontractor.png";
import s2aLogo from "@/assets/stakeholders/s2a-general-contracting.jpg";

// Software logos
import adobeCC from "@/assets/software/adobe-creative-cloud.png";
import adobeAcrobat from "@/assets/software/adobe_acrobat-dc-pro.png";
import autoCad from "@/assets/software/auto-cad.png";
import bulkPdf from "@/assets/software/bulk-pdf.png";
import bulkRename from "@/assets/software/bulk_rename_utility-app-logo.png";
import cmdPrompt from "@/assets/software/command-prompt-.png";
import excel from "@/assets/software/excel.png";
import word from "@/assets/software/m365-word.avif";
import powershell from "@/assets/software/powershell.png";
import python from "@/assets/software/python.png";
import sharepoint from "@/assets/software/share-point.png";
import sql from "@/assets/software/sql.png";
import aconexSw from "@/assets/software/aconex.png";
import powerBi from "@/assets/software/power-bi.png";
import tableau from "@/assets/software/tableau.png";
import access from "@/assets/software/microsoft_office_access.png";
import powerpoint from "@/assets/software/microsoft_office_powerpoint.png";

// Certificate badges
import aconexBadge from "@/assets/certificates/aconex-accredited-professional-badge.jpg";
import googleProfessional from "@/assets/certificates/certificate-google-google-data-analytics-professional-certificate.jpeg";

export interface LogoItem {
  name: string;
  image: string;
}

export interface JobEntry {
  company: string;
  companyLogo: string | null;
  location: string;
  role: string;
  project: string;
  projectLogo: string | null;
  period: string;
  client: string;
  stakeholderLogos: LogoItem[];
  softwareLogos: LogoItem[];
  certBadges: LogoItem[];
  highlights: string[];
}

export const jobs: JobEntry[] = [
  {
    company: "Mass Group",
    companyLogo: massGroupLogo,
    location: "New Administrative Capital",
    role: "Senior Document Control Specialist",
    project: "Al Massar (80 Villas)",
    projectLogo: alMassarLogo,
    period: "Feb 2025 – Apr 2026",
    client: "Egyptian Presidency",
    stakeholderLogos: [
      { name: "GC GEO CONSULTANT", image: gcGeoLogo },
      { name: "Al Massar", image: alMassarLogo },
      { name: "Smart Design", image: smartDesignLogo },
      { name: "DMG", image: dmgLogo },
      { name: "Designers Consultants", image: designersLogo },
      { name: "Mass Group", image: massGroupLogo },
    ],
    softwareLogos: [
      { name: "Adobe Creative Cloud", image: adobeCC },
      { name: "Adobe Acrobat DC PRO", image: adobeAcrobat },
      { name: "AutoCAD", image: autoCad },
      { name: "Bulk PDF", image: bulkPdf },
      { name: "Bulk Rename Utility", image: bulkRename },
      { name: "Command Prompt", image: cmdPrompt },
      { name: "Excel", image: excel },
      { name: "Word", image: word },
      { name: "PowerShell", image: powershell },
      { name: "Python", image: python },
      { name: "SharePoint", image: sharepoint },
      { name: "SQL", image: sql },
    ],
    certBadges: [
      { name: "Google Data Analytics", image: googleProfessional },
    ],
    highlights: [
      "Managed 80+ documents/day with correct routing and revision control",
      "Coordinated approvals across 7+ stakeholders",
      "Improved turnaround from 7 days to 48 hours",
    ],
  },
  {
    company: "S2A General Contracting",
    companyLogo: s2aLogo,
    location: "5th Settlement",
    role: "Document Control Specialist",
    project: "Blue Tree",
    projectLogo: blueTreeLogo,
    period: "Sep 2024 – Feb 2025",
    client: "SKY AD. Developments",
    stakeholderLogos: [
      { name: "S2A General Contracting", image: s2aLogo },
      { name: "Blue Tree", image: blueTreeLogo },
      { name: "SKY AD", image: skyAdLogo },
    ],
    softwareLogos: [
      { name: "Excel", image: excel },
      { name: "Word", image: word },
      { name: "Adobe Acrobat DC PRO", image: adobeAcrobat },
      { name: "Power BI", image: powerBi },
      { name: "PowerPoint", image: powerpoint },
    ],
    certBadges: [
      { name: "Google Data Analytics", image: googleProfessional },
    ],
    highlights: [
      "Processed high-volume drawings and document packages",
      "Maintained accurate real-time logs for all document types",
    ],
  },
  {
    company: "MODAD",
    companyLogo: modadLogo,
    location: "El-Shorouk West",
    role: "Document Controller (Aconex)",
    project: "Fit Out Bank Misr Wesal (1)",
    projectLogo: null,
    period: "Sep 2023 – Aug 2024",
    client: "Banque Misr",
    stakeholderLogos: [
      { name: "MODAD", image: modadLogo },
      { name: "ICONIC", image: iconicLogo },
      { name: "Banque Misr", image: banqueMisrLogo },
      { name: "EIC", image: eicLogo },
    ],
    softwareLogos: [
      { name: "Aconex", image: aconexSw },
      { name: "Excel", image: excel },
      { name: "Adobe Acrobat DC PRO", image: adobeAcrobat },
    ],
    certBadges: [
      { name: "Aconex Accredited", image: aconexBadge },
    ],
    highlights: [
      "Submitted documents via Aconex and tracked against deadlines",
      "Followed up workflows until final approval",
    ],
  },
  {
    company: "MODAD",
    companyLogo: modadLogo,
    location: "El-Shorouk West",
    role: "Document Controller (Aconex)",
    project: "Fit Out NBE Wesal (1)",
    projectLogo: null,
    period: "Sep 2022 – Aug 2023",
    client: "National Bank of Egypt",
    stakeholderLogos: [
      { name: "DiaaConsult", image: diaaConsultLogo },
      { name: "Fit Out NBE Subcontractor", image: fitOutNBESubLogo },
      { name: "MODAD", image: modadLogo },
      { name: "National Bank of Egypt", image: nbeLogo },
    ],
    softwareLogos: [
      { name: "Excel", image: excel },
      { name: "Tableau", image: tableau },
      { name: "Access", image: access },
    ],
    certBadges: [],
    highlights: [
      "Controlled documentation across multiple stakeholders",
      "Set up project folders, templates, and revision control",
    ],
  },
];
