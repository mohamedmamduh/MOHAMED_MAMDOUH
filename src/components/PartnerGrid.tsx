import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Stakeholder logos
import massGroupLogo from "@/assets/stakeholders/mass-group-logo-03.png";
import modadLogo from "@/assets/stakeholders/modad-dark-mode.png";
import skyAdLogo from "@/assets/stakeholders/sky-ad-dark-mode.png";
import diaaConsultLogo from "@/assets/stakeholders/diaa-consult-dark-mode.png";
import nbeLogo from "@/assets/stakeholders/the-national-bank-of-egypt.png";
import banqueMisrLogo from "@/assets/stakeholders/banque-misr.png";
import iconicLogo from "@/assets/stakeholders/iconic-dark-mode.webp";
import designersLogo from "@/assets/stakeholders/designers-consultants.png";
import alMassarSubLogo from "@/assets/stakeholders/al-massar-sub-consult.png";
import alMassarSub2Logo from "@/assets/stakeholders/al-massar-sub-consult-2.png";
import alMassarSub3Logo from "@/assets/stakeholders/al-massar-sub-consult-3.png";
import fitOutBMLogo from "@/assets/stakeholders/fit-out-bank-misr-wesal-subcontractor.png";
import fitOutNBELogo from "@/assets/stakeholders/fit-out-nbe-wesal-subcontractor.png";
import alMassarSubcontractorLogo from "@/assets/stakeholders/al-massar-subcontractor.png";
import okoplanLogo from "@/assets/stakeholders/al-massar-sub-consult.png";

const partners = [
  // Clients
  { name: "Banque Misr", type: "Client", logo: banqueMisrLogo },
  { name: "National Bank of Egypt", type: "Client", logo: nbeLogo },
  { name: "ICONIC", type: "Client", logo: iconicLogo },
  // Developers & Contractors
  { name: "Mass Group", type: "Contractor", logo: massGroupLogo },
  { name: "MODAD", type: "Developer", logo: modadLogo },
  { name: "SKY AD", type: "Developer", logo: skyAdLogo },
  // Consultants
  { name: "DiaaConsult", type: "Consultant", logo: diaaConsultLogo },
  { name: "Designers Consultants", type: "Consultant", logo: designersLogo },
  { name: "ÖKOPLAN", type: "Consultant", logo: okoplanLogo },
  // Sub-consultants & Subcontractors
  { name: "Al Massar Sub-consult", type: "Sub-consultant", logo: alMassarSubLogo },
  { name: "Al Massar Sub-consult 2", type: "Sub-consultant", logo: alMassarSub2Logo },
  { name: "Al Massar Sub-consult 3", type: "Sub-consultant", logo: alMassarSub3Logo },
  { name: "Al Massar Subcontractor", type: "Subcontractor", logo: alMassarSubcontractorLogo },
  { name: "Fit Out – Banque Misr", type: "Subcontractor", logo: fitOutBMLogo },
  { name: "Fit Out – NBE", type: "Subcontractor", logo: fitOutNBELogo },
];

const PartnerGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 px-4" id="partners" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Trusted <span className="gradient-text">Stakeholders</span></h2>
          <p className="section-subheading mx-auto">Clients, developers, consultants, and subcontractors I've collaborated with</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="glass-card p-4 flex flex-col items-center text-center gap-2 shadow-md hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.2)] hover:scale-[1.08] transition-all duration-300 group relative hover:z-10"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary/50 flex items-center justify-center p-2">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-xs font-semibold text-foreground leading-tight">{partner.name}</h4>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{partner.type}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerGrid;
