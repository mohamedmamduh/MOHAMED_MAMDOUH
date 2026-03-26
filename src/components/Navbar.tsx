import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import profileLogo from "@/assets/profile-logo.png";

const links = [
  { label: "Impact", href: "#impact" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Certificates", href: "#certificates" },
  { label: "Partners", href: "#partners" },
  { label: "Career", href: "#career" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={profileLogo} alt="Mohamed Mamdouh" className="w-8 h-8 rounded-full object-cover border border-border/50 shadow-sm" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="/Document_Control_Mohamed_Mamdouh_UAE_CV.pdf"
            download
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Download className="w-3.5 h-3.5" /> CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a href="/Document_Control_Mohamed_Mamdouh_UAE_CV.pdf" download className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
            <Download className="w-3.5 h-3.5" /> Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
