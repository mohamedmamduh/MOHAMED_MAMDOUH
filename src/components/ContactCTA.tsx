import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Linkedin, Mail, ExternalLink, Phone } from "lucide-react";

const ContactCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 px-4" id="contact" ref={ref}>
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass-card glow-border p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to <span className="gradient-text">Collaborate?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            I'm relocating to Dubai on April 2, 2026, and available for immediate employment in construction document control and data analytics.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="/Mohamed_Mamdouh_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-mamdouh2020/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-semibold border border-border hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://www.coursera.org/user/mohamedmamdouh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-semibold border border-border hover:bg-secondary/80 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Coursera
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:mamduh.mohamed@yahoo.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> mamduh.mohamed@yahoo.com
            </a>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +971 058 574 5516
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
