import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Bot, BarChart3, FileText, Terminal, Table2, LayoutDashboard, HardDrive, FileType } from "lucide-react";

const categories = [
  {
    title: "EDMS",
    icon: <Database className="w-5 h-5" />,
    tools: [
      { name: "Oracle Aconex", note: "Accredited Professional", icon: FileText },
      { name: "SharePoint", icon: HardDrive },
    ],
  },
  {
    title: "Automation",
    icon: <Bot className="w-5 h-5" />,
    tools: [
      { name: "Python", icon: Terminal },
      { name: "VBA", icon: Table2 },
      { name: "PowerShell", icon: Terminal },
      { name: "Bulk PDF", icon: FileType },
      { name: "Bulk Rename Utility", icon: FileText },
    ],
  },
  {
    title: "Data Analytics",
    icon: <BarChart3 className="w-5 h-5" />,
    tools: [
      { name: "Excel", note: "VBA / Power Query", icon: Table2 },
      { name: "Power BI", icon: LayoutDashboard },
      { name: "Tableau", icon: BarChart3 },
      { name: "SQL", icon: Database },
    ],
  },
];

const TechStack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 px-4" id="tech" ref={ref}>
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Technical <span className="gradient-text">Stack</span></h2>
          <p className="section-subheading mx-auto">Tools and platforms I work with daily</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-foreground">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.tools.map((tool) => {
                  const ToolIcon = tool.icon;
                  return (
                    <div key={tool.name} className="flex items-center justify-between group">
                      <div className="flex items-center gap-2">
                        <ToolIcon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm text-foreground">{tool.name}</span>
                      </div>
                      {tool.note && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                          {tool.note}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
