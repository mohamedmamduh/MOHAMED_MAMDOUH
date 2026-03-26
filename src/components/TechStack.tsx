import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// EDMS
import aconexIcon from "@/assets/software/aconex.png";
import sharePointIcon from "@/assets/software/share-point.png";

// Automation
import pythonIcon from "@/assets/software/python.png";
import powershellIcon from "@/assets/software/powershell.png";
import bulkPdfIcon from "@/assets/software/bulk-pdf.png";
import bulkRenameIcon from "@/assets/software/bulk_rename_utility-app-logo.png";
import cmdIcon from "@/assets/software/command-prompt-.png";

// Data Analytics
import excelIcon from "@/assets/software/excel.png";
import powerBiIcon from "@/assets/software/power-bi.png";
import tableauIcon from "@/assets/software/tableau.png";
import sqlIcon from "@/assets/software/sql.png";

// Additional Software
import adobeAcrobatIcon from "@/assets/software/adobe_acrobat-dc-pro.png";
import adobeCCIcon from "@/assets/software/adobe-creative-cloud.png";
import wordIcon from "@/assets/software/m365-word.avif";
import accessIcon from "@/assets/software/microsoft_office_access.png";
import powerpointIcon from "@/assets/software/microsoft_office_powerpoint.png";
import autocadIcon from "@/assets/software/auto-cad.png";

// AI & LLMs
import claudeIcon from "@/assets/software/claude-ai.png";
import geminiIcon from "@/assets/software/gemini-ai.png";
import chatgptIcon from "@/assets/software/chatgpt.png";
import perplexityIcon from "@/assets/software/perplexity-ai.png";

const categories = [
  {
    title: "EDMS",
    description: "Document Management Systems",
    tools: [
      { name: "Oracle Aconex", note: "Accredited Professional", icon: aconexIcon },
      { name: "SharePoint", icon: sharePointIcon },
      { name: "Adobe Acrobat Pro", icon: adobeAcrobatIcon },
    ],
  },
  {
    title: "Automation",
    description: "Scripting & Batch Processing",
    tools: [
      { name: "Python", icon: pythonIcon },
      { name: "PowerShell", icon: powershellIcon },
      { name: "Command Prompt", icon: cmdIcon },
      { name: "Bulk PDF", icon: bulkPdfIcon },
      { name: "Bulk Rename Utility", icon: bulkRenameIcon },
    ],
  },
  {
    title: "Data Analytics",
    description: "Analysis & Visualization",
    tools: [
      { name: "Excel", note: "VBA / Power Query", icon: excelIcon },
      { name: "Power BI", icon: powerBiIcon },
      { name: "Tableau", icon: tableauIcon },
      { name: "SQL", icon: sqlIcon },
    ],
  },
  {
    title: "Office & Design",
    description: "Productivity & Drafting",
    tools: [
      { name: "Word", icon: wordIcon },
      { name: "PowerPoint", icon: powerpointIcon },
      { name: "Access", icon: accessIcon },
      { name: "Adobe CC", icon: adobeCCIcon },
      { name: "AutoCAD", icon: autocadIcon },
    ],
  },
  {
    title: "AI & LLMs",
    description: "Artificial Intelligence Tools",
    tools: [
      { name: "Claude", icon: claudeIcon },
      { name: "Gemini", icon: geminiIcon },
      { name: "ChatGPT", icon: chatgptIcon },
      { name: "Perplexity", icon: perplexityIcon },
    ],
  },
];

const TechStack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 px-4" id="tech" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Technical <span className="gradient-text">Ecosystem</span></h2>
          <p className="section-subheading mx-auto">Software & tools powering my document control workflow</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-5"
            >
              <div className="mb-4">
                <h3 className="font-bold text-foreground text-lg">{cat.title}</h3>
                <p className="text-xs text-muted-foreground">{cat.description}</p>
              </div>
              <div className="space-y-3">
                {cat.tools.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3 group hover:scale-[1.05] transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-secondary/80 flex items-center justify-center p-1.5 shadow-sm shrink-0">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-sm text-foreground font-medium block truncate">{tool.name}</span>
                      {tool.note && (
                        <span className="text-[10px] text-primary font-medium">{tool.note}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
