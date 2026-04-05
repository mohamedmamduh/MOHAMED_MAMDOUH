import { motion } from "framer-motion";
import { MapPin, Download, Linkedin, Mail, Phone, ExternalLink, MessageCircle } from "lucide-react";
import profileMain from "@/assets/profile-main.png";
import profileCasual from "@/assets/profile-casual.png";
import profileFormal from "@/assets/profile-formal.png";
import { useState, useEffect, useMemo } from "react";

const useTypewriter = (text: string, speed = 50, delay = 0) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayedText.length >= text.length) return;
    const timer = setTimeout(() => {
      setDisplayedText(text.slice(0, displayedText.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [displayedText, text, speed, started]);

  return displayedText;
};

const photos = [profileMain, profileCasual, profileFormal];

const summaryText = "I help companies master large-scale project documentation by leveraging my engineering background and advanced data analytics skills. I build fast, audit-ready systems that empower teams to retrieve any project information in seconds.";

const HeroSection = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  const firstName = useTypewriter("MOHAMED", 80, 500);
  const lastName = useTypewriter("MAMDOUH", 80, 1100);
  const subtitle = useTypewriter("Senior Document Controller | Data Analyst", 40, 1700);
  const summary = useTypewriter(summaryText, 15, 3000);

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
          {/* Profile Image Gallery */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary/30 animate-pulse-glow transition-all duration-300 hover:border-primary/70 hover:shadow-[0_0_25px_-4px_hsl(199_89%_48%/0.5)] hover:scale-105">
              <img
                src={photos[activePhoto]}
                alt="Mohamed Mamdouh"
                className="w-full h-full object-cover object-top transition-opacity duration-500"
              />
            </div>
            {/* Thumbnail selectors */}
            <div className="flex gap-2 justify-center mt-4">
              {photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                    activePhoto === i
                      ? "border-primary scale-110 shadow-lg"
                      : "border-border/50 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={photo} alt="" className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Name - Typewriter */}
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="gradient-text">{firstName}</span>{firstName.length >= "MOHAMED".length ? " " : ""}
              <span className="text-foreground">{lastName}</span>
              <span className="inline-block w-[3px] h-[0.8em] bg-primary/70 align-middle ml-1 animate-pulse" 
                style={{ opacity: (firstName.length + lastName.length) < ("MOHAMED".length + "MAMDOUH".length) ? 1 : 0 }} />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-3 font-medium h-7">
              {subtitle}
              {subtitle.length < "Senior Document Controller | Data Analyst".length && (
                <span className="inline-block w-[2px] h-[0.9em] bg-muted-foreground/70 align-middle ml-0.5 animate-pulse" />
              )}
            </p>
          </div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold"
          >
            <MapPin className="w-4 h-4" />
            Dubai, United Arab Emirates
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </motion.div>

          {/* Summary - Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="max-w-2xl text-muted-foreground leading-relaxed"
          >
            <p>
              {summary}
              {summary.length < summaryText.length && (
                <span className="inline-block w-[2px] h-[0.9em] bg-muted-foreground/50 align-middle ml-0.5 animate-pulse" />
              )}
            </p>
          </motion.div>

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
            <a href="tel:+971585745516" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" /> +971 58 574 5516
            </a>
            <a href="https://wa.me/971585745516" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
