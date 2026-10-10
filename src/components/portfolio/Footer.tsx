import { useState, useEffect } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { FooterCrystal } from "@/components/footer/FooterCrystal";
import {
  Reveal,
  FadeInStagger,
  FadeInItem,
} from "@/components/animations/Reveal";
import { SOCIAL_LINKS, NAV_ITEMS, EMAIL } from "@/constants";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-background border-t-2 border-border pt-20 pb-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 bg-secondary/5 blur-[120px] pointer-events-none hidden dark:block"
        aria-hidden
      />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Main Content Grid: 3 columns desktop, stack mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16 items-start">

          {/* Left Column: Brand + Availability */}
          <Reveal>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-foreground tracking-tight mb-2">
                  Avinash Singh
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  VAPT | Red Teaming
                </p>
              </div>

              {/* Availability Badge */}
              <div>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-3 px-4 py-2.5 bg-card border-2 border-primary transition-all duration-200 group hover:shadow-[0_0_12px_hsl(var(--primary)/0.4)] dark:border-secondary dark:hover:shadow-[0_0_12px_hsl(var(--secondary)/0.4)] hover:-translate-y-0.5 cursor-pointer text-left"
                  title="Click to get in touch"
                >
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    Open to opportunities
                  </span>
                </button>
              </div>
            </div>
          </Reveal>

          {/* Center Column: Quick Navigation */}
          <Reveal delay={0.1}>
            <div className="space-y-6 lg:pl-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground dark:text-primary">
                Navigate
              </h3>
              <FadeInStagger stagger={0.06}>
                {NAV_ITEMS.map(({ id, label }) => (
                  <FadeInItem key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="block text-lg text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 text-left"
                    >
                      {label}
                    </button>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </div>
          </Reveal>

          {/* Right Column: Crystal Graphic Artwork */}
          <Reveal delay={0.2}>
            <div className="flex flex-col items-center lg:items-end justify-center">
              <div className="relative">
                <FooterCrystal className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[240px] lg:h-[240px]" />
                <div className="absolute inset-0 -z-10 blur-xl opacity-30 bg-primary rounded-full scale-75 dark:opacity-20 dark:bg-primary/30" />
                <div
                  className="absolute inset-0 -z-10 blur-2xl opacity-0 scale-90 bg-secondary rounded-full dark:opacity-25"
                  aria-hidden
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Get In Touch & Social Links Bar */}
        <Reveal delay={0.25}>
          <div className="space-y-4 mb-16">
            <h3 className="text-xs font-mono uppercase tracking-widest text-primary font-bold text-center lg:text-left">
              // Get In Touch
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-card border-2 border-primary transition-all duration-200 hover:translate-y-[-2px] hover:shadow-brutal"
                  aria-label={label}
                >
                  <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary dark:text-secondary" />
                  <span className="font-bold text-xs sm:text-sm uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                    {label}
                  </span>
                </a>
              ))}
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-card border-2 border-primary transition-all duration-200 hover:translate-y-[-2px] hover:shadow-brutal"
                aria-label="Send Email"
              >
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-primary dark:text-secondary" />
                <span className="font-bold text-xs sm:text-sm uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                  Mail
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Divider */}
        <div className="h-px w-full bg-border mb-8" />

        {/* Bottom Meta Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 animate-pulse" />
              <span>Surat, Gujarat, India</span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="font-mono">{time} IST</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <p className="font-mono text-xs sm:text-sm">
              © {new Date().getFullYear()} Avinash Singh. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="p-3 bg-card border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:translate-y-[-2px] hover:shadow-brutal group dark:hover:bg-secondary dark:hover:text-secondary-foreground"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
