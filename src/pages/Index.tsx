import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImpactDashboard from "@/components/ImpactDashboard";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import CertificateShowcase from "@/components/CertificateShowcase";
import PartnerGrid from "@/components/PartnerGrid";
import CareerTimeline from "@/components/CareerTimeline";
import Education from "@/components/Education";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ImpactDashboard />
      <CaseStudies />
      <TechStack />
      <CertificateShowcase />
      <PartnerGrid />
      <CareerTimeline />
      <Education />
      <FAQ />
      <ContactCTA />
      <footer className="py-10 text-center text-xs text-muted-foreground border-t border-border">
        © 2026 Mohamed Mamdouh. Built for Dubai opportunities.
      </footer>
    </div>
  );
};

export default Index;
