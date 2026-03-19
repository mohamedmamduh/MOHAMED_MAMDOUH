import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  { name: "Aconex Accredited Professional", issuer: "Oracle University", date: "Mar 2024" },
  { name: "Google Data Analytics Professional Certificate", issuer: "Google", date: "Jun 2022" },
  { name: "IBM Data Analytics Foundations", issuer: "IBM", date: "2022–2023" },
  { name: "Introduction to Statistics", issuer: "Stanford University", date: "Jul 2022" },
  { name: "Financial Markets", issuer: "Yale University", date: "Oct 2022" },
  { name: "IELTS General Training", issuer: "British Council", date: "" },
];

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 px-4" id="education" ref={ref}>
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Education & <span className="gradient-text">Certifications</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground">Education</h3>
            </div>
            <div>
              <p className="font-semibold text-foreground">B.Sc. Agricultural Science</p>
              <p className="text-sm text-muted-foreground">Al-Azhar University · 2016 – 2020</p>
              <p className="text-xs text-muted-foreground mt-2">
                Qualified as an Agricultural Engineer with a solid foundation in engineering fundamentals, technical site development, and industrial operational standards.
              </p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                  {cert.date && (
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{cert.date}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
