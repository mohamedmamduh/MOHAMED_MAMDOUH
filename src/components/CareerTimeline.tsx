import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Briefcase, Award } from "lucide-react";

import alMassarLogo from "@/assets/stakeholders/al-massar-dark-mode.png";
import blueTreeLogo from "@/assets/stakeholders/blue-tree-new-cairo-dark-mode.png";
import massGroupLogo from "@/assets/stakeholders/mass-group-logo-03.png";
import modadLogo from "@/assets/stakeholders/modad-dark-mode.png";
import skyAdLogo from "@/assets/stakeholders/sky-ad-dark-mode.png";
import nbeLogo from "@/assets/stakeholders/the-national-bank-of-egypt.png";
import banqueMisrLogo from "@/assets/stakeholders/banque-misr.png";
import diaaConsultLogo from "@/assets/stakeholders/diaa-consult-dark-mode.png";
import okoplanLogo from "@/assets/stakeholders/al-massar-sub-consult.png";

// Certification badges
import aconexBadge from "@/assets/certificates/aconex-accredited-professional-badge.jpg";
import googleProfessional from "@/assets/certificates/certificate-google-google-data-analytics-professional-certificate.jpeg";

interface StakeholderLogo {
  name: string;
  logo: string;
}

interface CertBadge {
  name: string;
  image: string;
}

const jobs = [
{
  company: "Mass Group",
  companyLogo: massGroupLogo,
  location: "New Administrative Capital",
  role: "Senior Document Control Specialist",
  project: "Al Massar (80 Villas)",
  projectLogo: alMassarLogo,
  period: "Feb 2025 – Apr 2026",
  client: "Egyptian Presidency",
  stakeholders: [
  { name: "DiaaConsult", logo: diaaConsultLogo },
  { name: "ÖKOPLAN", logo: okoplanLogo }] as
  StakeholderLogo[],
  certBadges: [
  { name: "Aconex Accredited", image: aconexBadge },
  { name: "Google Data Analytics", image: googleProfessional }] as
  CertBadge[],
  highlights: [
  "Managed 80+ documents/day with correct routing and revision control",
  "Coordinated approvals across 7+ stakeholders",
  "Improved turnaround from 7 days to 48 hours"]

},
{
  company: "S2A General Contracting",
  companyLogo: null,
  location: "5th Settlement",
  role: "Document Control Specialist",
  project: "Blue Tree",
  projectLogo: blueTreeLogo,
  period: "Sep 2024 – Feb 2025",
  client: "SKY AD. Developments",
  stakeholders: [
  { name: "SKY AD", logo: skyAdLogo }] as
  StakeholderLogo[],
  certBadges: [
  { name: "Google Data Analytics", image: googleProfessional }] as
  CertBadge[],
  highlights: [
  "Processed high-volume drawings and document packages",
  "Maintained accurate real-time logs for all document types"]

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
  stakeholders: [
  { name: "Banque Misr", logo: banqueMisrLogo }] as
  StakeholderLogo[],
  certBadges: [
  { name: "Aconex Accredited", image: aconexBadge }] as
  CertBadge[],
  highlights: [
  "Submitted documents via Aconex and tracked against deadlines",
  "Followed up workflows until final approval"]

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
  stakeholders: [
  { name: "NBE", logo: nbeLogo }] as
  StakeholderLogo[],
  certBadges: [
  { name: "Aconex Accredited", image: aconexBadge }] as
  CertBadge[],
  highlights: [
  "Controlled documentation across multiple stakeholders",
  "Set up project folders, templates, and revision control"]

}];


const CareerTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 px-4" id="career" ref={ref}>
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Career <span className="gradient-text">Journey</span></h2>
          <p className="section-subheading mx-auto">5+ years in construction document control</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-8">
            {jobs.map((job, i) =>
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-4`}>
              
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 glass-card p-5">
                  {/* Company header with logo */}
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold mb-1">
                    {job.companyLogo ?
                  <div className="w-5 h-5 rounded bg-secondary/50 flex items-center justify-center p-0.5 shrink-0">
                        <img src={job.companyLogo} alt={job.company} className="w-full h-full object-contain" loading="lazy" />
                      </div> :

                  <Building2 className="w-3.5 h-3.5" />
                  }
                    {job.company} · {job.location}
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{job.role}</h3>

                  {/* Project badge with logo */}
                  <div className="flex items-center gap-2 mt-1.5">
                    {job.projectLogo &&
                  <div className="w-7 h-7 rounded bg-secondary/50 flex items-center justify-center p-0.5 shrink-0">
                        <img src={job.projectLogo} alt={job.project} className="w-full h-full object-contain" loading="lazy" />
                      </div>
                  }
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Briefcase className="w-3 h-3 shrink-0" />
                      <span>Project: <span className="text-foreground font-medium">{job.project}</span> · {job.period}</span>
                    </p>
                  </div>

                  {/* Client & Stakeholder logos row */}
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Client:</span>
                    {job.stakeholders.map((s) =>
                  <div
                    key={s.name}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-secondary/40 border border-border/50 hover:scale-[1.15] transition-all duration-300 cursor-default"
                    title={s.name}>
                    
                        <div className="w-5 h-5 rounded flex items-center justify-center shrink-0">
                          <img src={s.logo} alt={s.name} className="w-full h-full object-contain" loading="lazy" />
                        </div>
                        <span className="text-[10px] text-foreground font-medium">{s.name}</span>
                      </div>
                  )}
                  </div>

                  {/* Certification badges */}
                  {job.certBadges.length > 0 &&
                <div className="flex items-center gap-2 mt-2.5 flex-wrap">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium flex items-center gap-1">
                        <Award className="w-3 h-3" /> Certs:
                      </span>
                      {job.certBadges.map((badge) => {}










                  )}
                    </div>
                }

                  <ul className="mt-3 space-y-1.5">
                    {job.highlights.map((h) =>
                  <li key={h} className="text-xs text-muted-foreground flex gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {h}
                      </li>
                  )}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default CareerTimeline;