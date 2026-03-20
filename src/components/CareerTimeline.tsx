import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Briefcase } from "lucide-react";

import alMassarLogo from "@/assets/stakeholders/al-massar-dark-mode.png";
import blueTreeLogo from "@/assets/stakeholders/blue-tree-new-cairo-dark-mode.png";

const jobs = [
  {
    company: "Mass Group",
    location: "New Administrative Capital",
    role: "Senior Document Control Specialist",
    project: "Al Massar (80 Villas)",
    projectLogo: alMassarLogo,
    period: "Feb 2025 – Apr 2026",
    client: "Egyptian Presidency",
    highlights: [
      "Managed 80+ documents/day with correct routing and revision control",
      "Coordinated approvals across 7+ stakeholders",
      "Improved turnaround from 7 days to 48 hours",
    ],
  },
  {
    company: "S2A General Contracting",
    location: "5th Settlement",
    role: "Document Control Specialist",
    project: "Blue Tree",
    projectLogo: blueTreeLogo,
    period: "Sep 2024 – Feb 2025",
    client: "SKY AD. Developments",
    highlights: [
      "Processed high-volume drawings and document packages",
      "Maintained accurate real-time logs for all document types",
    ],
  },
  {
    company: "MODAD",
    location: "El-Shorouk West",
    role: "Document Controller (Aconex)",
    project: "Fit Out Bank Misr Wesal (1)",
    projectLogo: null,
    period: "Sep 2023 – Aug 2024",
    client: "Banque Misr",
    highlights: [
      "Submitted documents via Aconex and tracked against deadlines",
      "Followed up workflows until final approval",
    ],
  },
  {
    company: "MODAD",
    location: "El-Shorouk West",
    role: "Document Controller (Aconex)",
    project: "Fit Out NBE Wesal (1)",
    projectLogo: null,
    period: "Sep 2022 – Aug 2023",
    client: "National Bank of Egypt",
    highlights: [
      "Controlled documentation across multiple stakeholders",
      "Set up project folders, templates, and revision control",
    ],
  },
];

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
            {jobs.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-4`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 glass-card p-5">
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    {job.company} · {job.location}
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{job.role}</h3>

                  {/* Project badge with logo */}
                  <div className="flex items-center gap-2 mt-1.5">
                    {job.projectLogo && (
                      <div className="w-7 h-7 rounded bg-secondary/50 flex items-center justify-center p-0.5 shrink-0">
                        <img src={job.projectLogo} alt={job.project} className="w-full h-full object-contain" loading="lazy" />
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Briefcase className="w-3 h-3 shrink-0" />
                      <span>Project: <span className="text-foreground font-medium">{job.project}</span> · {job.period}</span>
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground mt-1">Client: {job.client}</p>
                  <ul className="mt-3 space-y-1.5">
                    {job.highlights.map((h) => (
                      <li key={h} className="text-xs text-muted-foreground flex gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
