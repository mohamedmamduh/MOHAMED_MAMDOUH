import { motion } from "framer-motion";
import { Building2, Briefcase, Award, Monitor, Users } from "lucide-react";
import { jobs } from "./career/careerData";
import LogoRow from "./career/LogoRow";

const CareerTimeline = () => {
  return (
    <section className="py-20 px-4" id="career">
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
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-4`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 glass-card p-5">
                  {/* Company header with logo */}
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold mb-1">
                    {job.companyLogo ? (
                      <div className="w-5 h-5 rounded bg-secondary/50 flex items-center justify-center p-0.5 shrink-0">
                        <img src={job.companyLogo} alt={job.company} className="w-full h-full object-contain" loading="lazy" />
                      </div>
                    ) : (
                      <Building2 className="w-3.5 h-3.5" />
                    )}
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

                  {/* Stakeholder logos */}
                  <LogoRow
                    label="Stakeholders"
                    items={job.stakeholderLogos}
                    icon={<Users className="w-3 h-3" />}
                  />

                  {/* Software logos */}
                  <LogoRow
                    label="Tools"
                    items={job.softwareLogos}
                    icon={<Monitor className="w-3 h-3" />}
                  />

                  {/* Certification badges */}
                  <LogoRow
                    label="Certs"
                    items={job.certBadges}
                    icon={<Award className="w-3 h-3" />}
                  />

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
