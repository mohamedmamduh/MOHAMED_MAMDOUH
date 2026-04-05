import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./StaggerAnimations";

const faqs = [
  {
    q: "What is your experience with Oracle Aconex?",
    a: "I'm an Aconex Accredited Professional (Oracle University, March 2024). I've managed full document lifecycles on Aconex — from setting up workflow schemes, mail registers, and transmittal templates to tracking submittals, RFIs, and correspondence across multiple stakeholders on fit-out banking projects.",
  },
  {
    q: "How do you handle high-volume document flow?",
    a: "On the Al Massar 80 Villas Project, I processed 80+ documents daily with correct routing and revision control. I leverage automation (Python, VBA, PowerShell) to eliminate bottlenecks and use structured Excel logs for real-time tracking across 11,000+ records.",
  },
  {
    q: "What sets you apart from other Document Controllers?",
    a: "I combine traditional document control expertise with data analytics and automation skills. While most controllers work manually, I write Python scripts to batch-process 1,000+ files, build Excel search engines with VSTACK/FILTER formulas, and use Power BI dashboards for project oversight.",
  },
  {
    q: "Are you available for immediate relocation?",
    a: "Yes. I am already in Dubai and an immediate joiner. I hold the necessary qualifications and am available for immediate employment.",
  },
  {
    q: "What types of projects have you worked on?",
    a: "I've worked on high-profile projects including the Egyptian Presidency's Al Massar Villas, Banque Misr fit-out projects, and National Bank of Egypt branches — managing documentation for clients, contractors, and consultants simultaneously.",
  },
  {
    q: "Can you work with both manual and digital EDMS systems?",
    a: "Absolutely. I'm proficient in Oracle Aconex, SharePoint, and custom Excel-based tracking systems. I adapt to whatever platform the project requires while always looking for ways to improve efficiency through automation.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4" id="faq">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-subheading mx-auto">Common questions from recruiters and hiring managers</p>
        </div>

        <StaggerContainer className="space-y-3">
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform flex-shrink-0 ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-5 pb-5"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed pl-7">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FAQ;
