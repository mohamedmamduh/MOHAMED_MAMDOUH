import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Award, GraduationCap } from "lucide-react";

// Google Certificates
import googleCapstone from "@/assets/certificates/certificate-google-data-analytics-capstone-complete-a-case-study.jpeg";
import googleProfessional from "@/assets/certificates/certificate-google-google-data-analytics-professional-certificate.jpeg";
import googleFoundations from "@/assets/certificates/certificate-google-foundations-data,-data,-everywhere.jpeg";
import googleAskQuestions from "@/assets/certificates/certificate-google-ask-questions-to-make-data-driven-decisions.jpeg";
import googlePrepare from "@/assets/certificates/certificate-google-prepare-data-for-exploration.jpeg";
import googleProcess from "@/assets/certificates/certificate-google-process-data-from-dirty-to-clean.jpeg";
import googleAnalyze from "@/assets/certificates/certificate-google-analyze-data-to-answer-questions.jpeg";
import googleShare from "@/assets/certificates/certificate-google-share-data-through-the-art-of-visualization.jpeg";
import googleR from "@/assets/certificates/certificate-google-data-analysis-with-r-programming.jpeg";
import googleAI from "@/assets/certificates/certificate-google-introduction-to-ai.jpeg";

// IBM Certificates
import ibmIntro from "@/assets/certificates/certificate-ibm-introduction-to-data-analytics.jpeg";
import ibmExcel from "@/assets/certificates/certificate-ibm-excel-basics-for-data-analysis.jpeg";
import ibmVisualization from "@/assets/certificates/certificate-ibm-data-visualization-and-dashboards-with-excel-and-cognos.jpeg";
import ibmAssessment from "@/assets/certificates/certificate-ibm-assessment-for-data-analysis-and-visualization-foundations.jpeg";

// Oracle
import aconexBadge from "@/assets/certificates/aconex-accredited-professional-badge.jpg";

// University Certificates
import stanfordStats from "@/assets/certificates/certificate-stanford-university-introduction-to-statistics.jpeg";
import amsterdamLean from "@/assets/certificates/certificate-university-of-amsterdam-data-analytics-for-lean-six-sigma.jpeg";

// Other
import metaSocial from "@/assets/certificates/certificate-meta-introduction-to-social-media-marketing.jpeg";

interface Certificate {
  name: string;
  issuer: string;
  image: string;
  featured?: boolean;
  subCourses?: string[];
}

const groups: { issuer: string; color: string; certs: Certificate[] }[] = [
  {
    issuer: "Google",
    color: "from-[hsl(199,89%,48%)] to-[hsl(142,70%,45%)]",
    certs: [
      {
        name: "Google Data Analytics Professional Certificate",
        issuer: "Google · 6-Month Program",
        image: googleProfessional,
        featured: true,
        subCourses: [
          "Foundations: Data, Data, Everywhere",
          "Ask Questions to Make Data-Driven Decisions",
          "Prepare Data for Exploration",
          "Process Data from Dirty to Clean",
          "Analyze Data to Answer Questions",
          "Share Data Through the Art of Visualization",
          "Data Analysis with R Programming",
          "Capstone: Complete a Case Study",
        ],
      },
      { name: "Foundations: Data, Data, Everywhere", issuer: "Google", image: googleFoundations },
      { name: "Ask Questions to Make Data-Driven Decisions", issuer: "Google", image: googleAskQuestions },
      { name: "Prepare Data for Exploration", issuer: "Google", image: googlePrepare },
      { name: "Process Data from Dirty to Clean", issuer: "Google", image: googleProcess },
      { name: "Analyze Data to Answer Questions", issuer: "Google", image: googleAnalyze },
      { name: "Share Data Through the Art of Visualization", issuer: "Google", image: googleShare },
      { name: "Data Analysis with R Programming", issuer: "Google", image: googleR },
      { name: "Capstone: Complete a Case Study", issuer: "Google", image: googleCapstone },
      { name: "Introduction to Generative AI", issuer: "Google", image: googleAI },
    ],
  },
  {
    issuer: "Oracle",
    color: "from-[hsl(0,84%,50%)] to-[hsl(30,90%,50%)]",
    certs: [
      { name: "Aconex Accredited Professional", issuer: "Oracle University", image: aconexBadge, featured: true },
    ],
  },
  {
    issuer: "IBM",
    color: "from-[hsl(210,80%,45%)] to-[hsl(230,70%,55%)]",
    certs: [
      { name: "Introduction to Data Analytics", issuer: "IBM", image: ibmIntro },
      { name: "Excel Basics for Data Analysis", issuer: "IBM", image: ibmExcel },
      { name: "Data Visualization & Dashboards with Excel and Cognos", issuer: "IBM", image: ibmVisualization },
      { name: "Assessment for Data Analysis & Visualization Foundations", issuer: "IBM", image: ibmAssessment },
    ],
  },
  {
    issuer: "Universities",
    color: "from-[hsl(0,70%,45%)] to-[hsl(220,60%,40%)]",
    certs: [
      { name: "Introduction to Statistics", issuer: "Stanford University", image: stanfordStats },
      { name: "Data Analytics for Lean Six Sigma", issuer: "University of Amsterdam", image: amsterdamLean },
    ],
  },
  {
    issuer: "Meta",
    color: "from-[hsl(220,90%,55%)] to-[hsl(260,80%,55%)]",
    certs: [
      { name: "Introduction to Social Media Marketing", issuer: "Meta", image: metaSocial },
    ],
  },
];

const allCerts = groups.flatMap((g) => g.certs);

const CertificateShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (cert: Certificate) => {
    const idx = allCerts.findIndex((c) => c.name === cert.name && c.issuer === cert.issuer);
    setLightboxIndex(idx);
  };

  const navigate = (dir: -1 | 1) => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + dir + allCerts.length) % allCerts.length);
  };

  return (
    <section className="py-20 px-4" id="certificates" ref={ref}>
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5" />
            {allCerts.length} Professional Credentials
          </div>
          <h2 className="section-heading">Academic & Professional <span className="gradient-text">Credentials</span></h2>
          <p className="section-subheading mx-auto">Verified credentials from world-class institutions — click any certificate for full view</p>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass-card glow-border p-6 md:p-8 mb-14"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">B.Sc. Agricultural Science</h3>
              <p className="text-sm text-primary font-medium">Al-Azhar University · 2016 – 2020</p>
              <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                Qualified as an Agricultural Engineer with a solid foundation in engineering fundamentals, technical site development, and industrial operational standards — providing the analytical mindset that powers my document control and data analytics career.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certificate Groups */}
        <div className="space-y-14">
          {groups.map((group, gi) => (
            <motion.div
              key={group.issuer}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-1.5 rounded-full bg-gradient-to-r ${group.color}`} />
                <h3 className="text-xl font-bold text-foreground">{group.issuer}</h3>
                <span className="text-sm text-muted-foreground font-medium">({group.certs.length})</span>
              </div>

              {/* Bento Grid: featured certs get col-span-2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {group.certs.map((cert, ci) => (
                  <motion.button
                    key={`${cert.name}-${ci}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.1 + ci * 0.04 }}
                    onClick={() => openLightbox(cert)}
                    className={`group cursor-pointer rounded-xl overflow-hidden border-2 border-white/10 hover:border-primary/50 bg-secondary/20 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] transition-all duration-400 text-left ${
                      cert.featured ? "sm:col-span-2 md:col-span-2" : ""
                    }`}
                  >
                    <div className={`overflow-hidden ${cert.featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold text-foreground leading-snug line-clamp-2">{cert.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                      {/* Sub-courses for the Google Professional Certificate */}
                      {cert.subCourses && (
                        <div className="mt-3 border-t border-border/50 pt-3">
                          <p className="text-[10px] uppercase tracking-wider text-primary font-semibold mb-2">8-Course Program Includes:</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            {cert.subCourses.map((course, idx) => (
                              <p key={idx} className="text-[11px] text-muted-foreground flex items-start gap-1.5">
                                <span className="text-primary mt-0.5 shrink-0">✓</span>
                                {course}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-2 -right-2 z-10 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigate(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => navigate(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <img
                src={allCerts[lightboxIndex].image}
                alt={allCerts[lightboxIndex].name}
                className="max-h-[75vh] w-auto rounded-xl border-2 border-white/10 object-contain shadow-2xl"
              />

              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-foreground">{allCerts[lightboxIndex].name}</h3>
                <p className="text-sm text-muted-foreground">{allCerts[lightboxIndex].issuer}</p>
                <p className="text-xs text-muted-foreground/60 mt-1">{lightboxIndex + 1} / {allCerts.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificateShowcase;
