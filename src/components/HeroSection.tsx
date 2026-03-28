import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Download, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import profileMain from "@/assets/profile-main.png";
import profileCasual from "@/assets/profile-casual.png";
import profileFormal from "@/assets/profile-formal.png";
import { useState, useEffect } from "react";

const photos = [profileMain, profileCasual, profileFormal];

const HeroSection = () => {
  const [activePhoto, setActivePhoto] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-8"
        >
          {/* Profile Image - Pop-out Carousel */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* SVG clip definition - circle bottom, open top */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="popout-clip" clipPathUnits="objectBoundingBox">
                  {/* Top rectangle (0,0 to 1,0.45) + bottom circle arc */}
                  <path d="M 0,0 L 1,0 L 1,0.45 
                    A 0.5,0.5 0 0,1 0,0.45 Z" />
                </clipPath>
              </defs>
            </svg>

            {/* Pop-out container */}
            <div className="relative w-56 h-72 md:w-72 md:h-[22rem] lg:w-80 lg:h-[26rem]">
              {/* The circular frame ring - positioned at bottom */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 rounded-full border-2 border-primary/30 shadow-[0_8px_40px_-4px_hsl(var(--primary)/0.35)]"
                style={{
                  width: '85%',
                  paddingBottom: '85%',
                  bottom: '0',
                }}
              />
              
              {/* The image with pop-out clip */}
              <div className="absolute inset-0 flex items-end justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhoto}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full h-full"
                    style={{
                      clipPath: 'url(#popout-clip)',
                      filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.35)) drop-shadow(0 2px 6px rgba(0,0,0,0.25))",
                    }}
                  >
                    <img
                      src={photos[activePhoto]}
                      alt="Mohamed Mamdouh"
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2.5 justify-center mt-5">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`rounded-full transition-all duration-300 ${
                    activePhoto === i
                      ? "w-8 h-2.5 bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                      : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Name */}
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="gradient-text">MOHAMED</span>{" "}
              <span className="text-foreground">MAMDOUH</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-3 font-medium">
              Senior Document Controller <span className="text-primary">|</span> Data Analyst
            </p>
          </div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold"
          >
            <MapPin className="w-4 h-4" />
            Relocating to Dubai · April 2, 2026
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl text-muted-foreground leading-relaxed"
          >
            I help companies master large-scale project documentation by leveraging my engineering background and advanced data analytics skills. I build fast, audit-ready systems that empower teams to retrieve any project information in seconds.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/Document_Control_Mohamed_Mamdouh_UAE_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-mamdouh2020/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold border border-border hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://www.coursera.org/user/mohamedmamdouh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold border border-border hover:bg-secondary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Coursera
            </a>
          </motion.div>

          {/* Contact row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <a href="mailto:mamduh.mohamed@yahoo.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" /> mamduh.mohamed@yahoo.com
            </a>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> +971 058 574 5516
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
