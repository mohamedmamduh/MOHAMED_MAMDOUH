import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { Clock, Database, Zap, Users } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./StaggerAnimations";

interface CounterProps {
  from: string;
  to: string;
  label: string;
  icon: React.ReactNode;
}

const parseNumber = (str: string): number | null => {
  const cleaned = str.replace(/[^0-9]/g, "");
  return cleaned ? parseInt(cleaned, 10) : null;
};

const formatNumber = (n: number, template: string): string => {
  const hasComma = template.includes(",");
  const suffix = template.match(/[+%]$/)?.[0] || "";
  const prefix = template.match(/^[^0-9]*/)?.[0] || "";
  let formatted = hasComma ? n.toLocaleString("en-US") : n.toString();
  return prefix + formatted + suffix;
};

const useCountUp = (target: number, duration: number, start: boolean) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic for deceleration effect
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
};

const AnimatedCounter = ({ from, to, label, icon }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [started, setStarted] = useState(false);

  const targetNum = parseNumber(to);
  const canAnimate = targetNum !== null;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setStarted(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const animatedValue = useCountUp(targetNum || 0, 2000, started && canAnimate);

  return (
    <StaggerItem>
      <div
        ref={ref}
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
            <span className={`gradient-text transition-all duration-500 ${started ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
              {canAnimate ? formatNumber(animatedValue, to) : to}
            </span>
          </div>
        </div>
      </div>
    </StaggerItem>
  );
};
