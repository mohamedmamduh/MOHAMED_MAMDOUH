import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, ExternalLink } from "lucide-react";
import profileMain from "@/assets/profile-main.png";

const LinkedInBadge = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 px-4" ref={ref}>
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/mohamed-mamdouh2020/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block max-w-sm mx-auto"
          >
            <div className="glass-card glow-border p-6 flex flex-col items-center gap-4 transition-all duration-300 group-hover:border-[#0A66C2]/50 group-hover:shadow-[0_0_30px_-8px_rgba(10,102,194,0.3)]">
              {/* LinkedIn Logo */}
              <div className="flex items-center gap-2 text-[#0A66C2]">
                <Linkedin className="w-6 h-6 fill-[#0A66C2]" />
                <span className="text-sm font-semibold tracking-wide uppercase">LinkedIn</span>
              </div>

              {/* Profile Photo */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border group-hover:border-[#0A66C2]/50 transition-colors">
                <img
                  src={profileMain}
                  alt="Mohamed Mamdouh"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-foreground">Mohamed Mamdouh</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Senior Document Controller | Data Analyst
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Dubai, United Arab Emirates
                </p>
              </div>

              {/* View Profile Button */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0A66C2] text-white text-sm font-semibold group-hover:bg-[#004182] transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
                View Profile
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedInBadge;
