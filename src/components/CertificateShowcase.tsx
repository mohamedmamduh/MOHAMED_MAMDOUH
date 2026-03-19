import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Award, X, ExternalLink } from "lucide-react";

const certificates = [
  { name: "Google Data Analytics Professional Certificate", issuer: "Google", date: "Jun 2022", color: "from-[hsl(199,89%,48%)] to-[hsl(210,78%,55%)]" },
  { name: "Aconex Accredited Professional", issuer: "Oracle University", date: "Mar 2024", color: "from-[hsl(0,84%,50%)] to-[hsl(30,90%,50%)]" },
  { name: "IBM Data Analytics Foundations", issuer: "IBM", date: "2022–2023", color: "from-[hsl(210,80%,45%)] to-[hsl(230,70%,55%)]" },
  { name: "Introduction to Statistics", issuer: "Stanford University", date: "Jul 2022", color: "from-[hsl(0,70%,45%)] to-[hsl(0,50%,35%)]" },
  { name: "Financial Markets", issuer: "Yale University", date: "Oct 2022", color: "from-[hsl(220,60%,40%)] to-[hsl(220,40%,30%)]" },
  { name: "IELTS General Training", issuer: "British Council", date: "", color: "from-[hsl(270,60%,45%)] to-[hsl(290,50%,40%)]" },
];

const CertificateShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20 px-4" id="certificates" ref={ref}>
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Wall of <span className="gradient-text">Excellence</span></h2>
          <p className="section-subheading mx-auto">Certifications from world-class institutions</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <motion.button
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setSelected(i)}
              className="glass-card p-5 text-left hover:glow-border transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-3`}>
                <Award className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                {cert.name}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
              {cert.date && <p className="text-xs text-muted-foreground/70 mt-0.5">{cert.date}</p>}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card glow-border p-8 max-w-lg w-full text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${certificates[selected].color} flex items-center justify-center mx-auto mb-5`}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{certificates[selected].name}</h3>
              <p className="text-muted-foreground">{certificates[selected].issuer}</p>
              {certificates[selected].date && (
                <p className="text-sm text-muted-foreground/70 mt-1">{certificates[selected].date}</p>
              )}
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">Verified Professional Certification</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificateShowcase;
