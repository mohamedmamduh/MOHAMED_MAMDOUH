import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Clock, Database, Zap, Users } from "lucide-react";

interface CounterProps {
  from: string;
  to: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
}

const AnimatedCounter = ({ from, to, label, icon, delay }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setVisible(true), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 flex flex-col items-center text-center gap-3 group hover:glow-border transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
        <div className="flex items-center justify-center gap-2 text-lg font-bold">
          <span className="text-muted-foreground line-through opacity-60">{from}</span>
          <span className="text-primary">→</span>
          <span className={`gradient-text transition-all duration-500 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            {to}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ImpactDashboard = () => {
  const metrics = [
    { from: "7 Days", to: "48 Hours", label: "Efficiency", icon: <Clock className="w-5 h-5" />, delay: 0 },
    { from: "0", to: "11,000+", label: "Repository Records", icon: <Database className="w-5 h-5" />, delay: 0.15 },
    { from: "—", to: "80+", label: "Daily Document Flow", icon: <Zap className="w-5 h-5" />, delay: 0.3 },
    { from: "—", to: "7+", label: "Key Entities Managed", icon: <Users className="w-5 h-5" />, delay: 0.45 },
  ];

  return (
    <section className="py-20 px-4" id="impact">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Impact <span className="gradient-text">Dashboard</span></h2>
          <p className="section-subheading mx-auto">Measurable results from real construction projects</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <AnimatedCounter key={m.label} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;
