import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Landmark, Building, Crown, HardHat, Briefcase } from "lucide-react";

const partners = [
  { name: "Egyptian Presidency", type: "Client", icon: Crown },
  { name: "Banque Misr", type: "Client", icon: Landmark },
  { name: "National Bank of Egypt", type: "Client", icon: Landmark },
  { name: "SKY AD. Developments", type: "Client", icon: Building },
  { name: "Mass Group", type: "Contractor", icon: HardHat },
  { name: "S2A General Contracting", type: "Contractor", icon: HardHat },
  { name: "MODAD", type: "Contractor", icon: Building2 },
  { name: "ÖKOPLAN", type: "Consultant", icon: Briefcase },
  { name: "DiaaConsult", type: "Consultant", icon: Briefcase },
];

const PartnerGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 px-4" id="partners" ref={ref}>
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Partner <span className="gradient-text">Network</span></h2>
          <p className="section-subheading mx-auto">Clients, contractors, and consultants I've collaborated with</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {partners.map((partner, i) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-card p-4 flex flex-col items-center text-center gap-2 hover:glow-border transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs md:text-sm font-semibold text-foreground leading-tight">{partner.name}</h4>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{partner.type}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnerGrid;
