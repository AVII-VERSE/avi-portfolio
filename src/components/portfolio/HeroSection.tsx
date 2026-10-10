import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import SecurityAnalystCharacter from "./SecurityAnalystCharacter";

interface HeroSectionProps {
  onSectionClick: (section: string) => void;
}

const HERO_TEXTS = [
  "VAPT | Red Teaming",
  "Linux and Network Security",
  "Security Automation with Python",
  "Offensive security with an ethical mindset.",
] as const;

const HeroSection = ({ onSectionClick }: HeroSectionProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const text = HERO_TEXTS[currentIndex];
    let timeoutId: NodeJS.Timeout;

    if (currentText.length < text.length) {
      timeoutId = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1));
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setCurrentText("");
        setCurrentIndex((prev) => (prev + 1) % HERO_TEXTS.length);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, currentIndex]);

  return (
    <section
      id="hero"
      className="min-h-[100svh] flex items-center justify-center relative overflow-hidden px-0 pb-20 pt-28 text-center sm:pt-32 lg:pb-16"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 3xl:gap-16 4xl:gap-20 items-center">
          <div className="text-center md:text-left">
            <Reveal>
              <p className="text-primary font-mono text-lg mb-4 tracking-widest uppercase">
                Hello, I'm
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-hero font-black text-foreground mb-4">
                Avinash Singh
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="text-hero-sub font-bold text-muted-foreground mb-8 min-h-12 flex items-center justify-center lg:justify-start">
                <span className="typewriter">{currentText}</span>
              </h3>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="max-w-2xl mx-auto md:mx-0">
                <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
                  Aspiring VAPT and Red Team Security Analyst focused on Linux, network security, and security automation. I use an ethical, practical approach to understand how real-world systems can be tested, challenged, and secured.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-10 sm:mt-12">
                <button
                  onClick={() => onSectionClick("projects")}
                  className="neobrutalist-button neobrutalist-button-primary px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg group"
                >
                  <span className="relative z-10">View Security Work</span>
                </button>
                <button
                  onClick={() => onSectionClick("contact")}
                  className="neobrutalist-button neobrutalist-button-secondary px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg group"
                >
                  <span className="relative z-10">Get In Touch</span>
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="flex items-center justify-center">
              <SecurityAnalystCharacter />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 animate-float cursor-pointer" onClick={() => onSectionClick("about")}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Scroll</span>
          <ChevronDown
            size={24}
            className="text-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;