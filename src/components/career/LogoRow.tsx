import type { LogoItem } from "./careerData";

interface LogoRowProps {
  label: string;
  items: LogoItem[];
  icon: React.ReactNode;
}

const LogoRow = ({ label, items, icon }: LogoRowProps) => {
  if (items.length === 0) return null;

  return (
    <div className="flex items-center gap-2 mt-2.5 flex-wrap">
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium flex items-center gap-1">
        {icon} {label}:
      </span>
      {items.map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-1.5 bg-secondary/50 px-1.5 py-0.5 rounded border border-border/50 group/logo hover:border-primary/50 transition-colors"
        >
          <div className="w-4 h-4 overflow-hidden rounded-[2px] bg-white flex items-center justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <span className="text-[10px] text-foreground font-medium whitespace-nowrap">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LogoRow;
