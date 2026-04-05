import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const LinkedInBadge = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  useEffect(() => {
    // Load LinkedIn badge script
    const existing = document.querySelector('script[src*="badges/js/profile.js"]');
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="py-16 px-4" ref={sectionRef}>
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="dark"
            data-type="HORIZONTAL"
            data-vanity="mohamed-mamdouh2020"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://ae.linkedin.com/in/mohamed-mamdouh2020?trk=profile-badge"
            >
              Mohamed Mamdouh
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedInBadge;
