import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImpactDashboard from "@/components/ImpactDashboard";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import CareerTimeline from "@/components/CareerTimeline";
import Education from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ImpactDashboard />
      <CaseStudies />
      <TechStack />
      <CareerTimeline />
      <Education />
      <footer className="py-10 text-center text-xs text-muted-foreground border-t border-border">
        © 2026 Mohamed Mamdouh. Built for Dubai opportunities.
      </footer>
    </div>
  );
};

export default Index;
