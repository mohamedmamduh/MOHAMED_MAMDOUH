import { StaggerContainer, StaggerItem } from "./StaggerAnimations";

// Stakeholder logos
import massGroupLogo from "@/assets/stakeholders/mass-group-logo-03.png";
import modadLogo from "@/assets/stakeholders/modad-dark-mode.png";
import skyAdLogo from "@/assets/stakeholders/sky-ad-dark-mode.png";
import diaaConsultLogo from "@/assets/stakeholders/diaa-consult-dark-mode.png";
import nbeLogo from "@/assets/stakeholders/the-national-bank-of-egypt.png";
import banqueMisrLogo from "@/assets/stakeholders/banque-misr.png";
import iconicLogo from "@/assets/stakeholders/iconic-dark-mode.webp";
import designersLogo from "@/assets/stakeholders/designers-consultants.png";
import alMassarSubLogo from "@/assets/stakeholders/gc-geo-consultant.png";
import alMassarSub2Logo from "@/assets/stakeholders/al-massar-sub-consult-2.png";
import alMassarSub3Logo from "@/assets/stakeholders/al-massar-sub-consult-3.png";
import fitOutBMLogo from "@/assets/stakeholders/fit-out-bank-misr-wesal-subcontractor.png";
import fitOutNBELogo from "@/assets/stakeholders/fit-out-nbe-wesal-subcontractor.png";
import alMassarSubcontractorLogo from "@/assets/stakeholders/al-massar-subcontractor.png";
import okoplanLogo from "@/assets/stakeholders/okoplan-logo.png";
import s2aLogo from "@/assets/stakeholders/s2a-general-contracting.jpg";

const partners = [
  { name: "Banque Misr", type: "Client", logo: banqueMisrLogo },
  { name: "National Bank of Egypt", type: "Client", logo: nbeLogo },
  { name: "ICONIC", type: "Client", logo: iconicLogo },
  { name: "Mass Group", type: "Contractor", logo: massGroupLogo },
  { name: "S2A General Contracting", type: "Contractor", logo: s2aLogo },
  { name: "MODAD", type: "Developer", logo: modadLogo },
  { name: "SKY AD", type: "Developer", logo: skyAdLogo },
  { name: "DiaaConsult", type: "Consultant", logo: diaaConsultLogo },
  { name: "Designers Consultants", type: "Consultant", logo: designersLogo },
  { name: "ÖKOPLAN", type: "Consultant", logo: okoplanLogo },
  { name: "GC GEO CONSULTANT", type: "Sub-consultant", logo: alMassarSubLogo },
  { name: "Smart Design For Engineering Works &Information Technology", type: "Sub-consultant", logo: alMassarSub2Logo },
  { name: "DMG Design & Project Management Group", type: "Sub-consultant", logo: alMassarSub3Logo },
  { name: "GREEN MASS", type: "Subcontractor", logo: alMassarSubcontractorLogo },
  { name: "EIC Engineering Industries Company", type: "Subcontractor", logo: fitOutBMLogo },
  { name: "ALPHA Industries & Construction", type: "Subcontractor", logo: fitOutNBELogo },
];

const PartnerGrid = () => {
  return (
    <section className="py-20 px-4" id="partners">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Trusted <span className="gradient-text">Stakeholders</span></h2>
          <p className="section-subheading mx-auto">Clients, developers, consultants, and subcontractors I've collaborated with</p>
        </div>

        <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {partners.map((partner) => (
            <StaggerItem key={partner.name}>
              <div className="glass-card p-4 flex flex-col items-center text-center gap-2 shadow-md hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.2)] hover:scale-[1.08] transition-all duration-300 group relative hover:z-10 h-full">
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
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PartnerGrid;
