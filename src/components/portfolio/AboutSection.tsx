import {
  Brain,
  Code2,
  Download,
  Globe2,
  GraduationCap,
  Heart,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";
import { WiStars } from "react-icons/wi";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/animations/Reveal";
import SecurityIllustration from "./SecurityIllustration";

const AboutSection = () => {
  const interests = [
    {
      icon: Brain,
      label: "Continuous Learning",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: ShieldCheck,
      label: "VAPT & Red Teaming",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      icon: Lightbulb,
      label: "Problem Solving",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      icon: Users,
      label: "Penetration Testing",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      icon: Heart,
      label: "Linux & Networks",
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
    {
      icon: Globe2,
      label: "Security Automation",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-24 px-4 flex flex-col justify-center"
    >
      <div className="container mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4 inline-flex items-center gap-3">
              About Me
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              Testing, challenging, and securing real-world systems
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="h-full neobrutalist-card p-4 sm:p-6 md:p-8 relative overflow-hidden group bg-card transition-all flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-primary" />
                  Who I Am
                </h3>
                <div className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    I'm a{" "}
                    <span className="font-semibold text-foreground">
                      VAPT & Red Team Security Analyst
                    </span>{" "}
                    focused on offensive security,
                    Linux, network security, and automation. I am building
                    practical skills through labs, projects, and verified
                    cybersecurity learning.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <Link to="/resume">
                  <button className="neobrutalist-button neobrutalist-button-primary px-6 py-2.5 flex items-center gap-2 group">
                    <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                    <span className="relative z-10">View Resume</span>
                  </button>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-1 lg:row-span-2">
            <div className="h-full neobrutalist-card p-0 overflow-hidden relative group bg-background/50 flex flex-col items-center justify-center min-h-[300px] lg:min-h-[520px]">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50" />
              <div className="w-full h-full p-6 flex items-center justify-center relative z-10 scale-110 group-hover:scale-125 transition-transform duration-700">
                <SecurityIllustration variant="about" className="w-full h-auto" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="lg:col-span-2">
            <div className="h-full neobrutalist-card p-4 sm:p-6 md:p-8 relative group transition-all bg-card">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-secondary" />
                Education
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-2 relative pl-4 border-l-2 border-primary/20">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-none bg-primary shadow-brutal" />
                  <p className="text-foreground font-semibold">M.Tech in Cyber Security</p>
                  <p className="text-sm text-foreground/60">
                    Marwadi University, Rajkot
                  </p>
                  <span className="stat-badge text-xs inline-block mt-2">
                    Ongoing
                  </span>
                </div>
                <div className="space-y-2 relative pl-4 border-l-2 border-secondary/20">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-none bg-secondary shadow-brutal" />
                  <p className="text-foreground font-semibold">B.Tech in Computer Science Engineering</p>
                  <p className="text-sm text-foreground/60">
                    Uka Tarsadia University · 2023 – Apr 2026
                  </p>
                  <span className="stat-badge text-xs inline-block mt-2">
                    CGPA: 8.34
                  </span>
                </div>
                <div className="space-y-2 relative pl-4 border-l-2 border-primary/20">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-none bg-primary shadow-brutal" />
                  <p className="text-foreground font-semibold">Diploma in Computer Engineering</p>
                  <p className="text-sm text-foreground/60">
                    Shree Dhanvantary College of Engineering, Surat · 2020 – 2023
                  </p>
                  <span className="stat-badge text-xs inline-block mt-2">
                    CGPA: 7.74
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="md:col-span-3">
            <div className="neobrutalist-card p-4 sm:p-6 md:p-8 bg-card border border-border transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-3">
                  <WiStars size={24} className="text-primary shrink-0" />
                  Security Focus
                </h3>
                <span className="text-[10px] sm:text-xs text-foreground/40 tracking-wide uppercase">
                  Focus Areas & Values
                </span>
              </div>

              <div className="grid gap-3 sm:gap-4 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                {interests.map((interest) => {
                  const Icon = interest.icon;

                  return (
                    <div
                      key={interest.label}
                      className="
                        flex items-center gap-3
                        px-3 py-3 sm:px-4
                        rounded-none
                        border-2 border-border
                        bg-card
                        transition-all duration-300
                        hover:translate-y-[-2px]
                        hover:shadow-brutal
                        hover:border-primary
                      "
                    >
                      <div
                        className={`
                          p-2 rounded-none border border-border
                          ${interest.color} ${interest.bg}
                          transition-all duration-300
                          shrink-0
                        `}
                      >
                        <Icon size={18} />
                      </div>
                      <span
                        className="
                          text-sm font-medium
                          text-foreground/70
                          leading-tight
                          break-words
                        "
                      >
                        {interest.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 pt-6 border-t border-border grid gap-4 sm:grid-cols-4 text-sm text-foreground/70">
                <p><span className="font-bold text-foreground">Certifications:</span> Cyber Job Simulation, Fundamentals Foundations, and FutureLearn credentials.</p>
                <p><span className="font-bold text-foreground">GitHub:</span> AVII-VERSE security-focused repositories and project labs.</p>
                <p><span className="font-bold text-foreground">Medium:</span> Security writeups on EDR Evasion, Persistence, and Router Security.</p>
                <p><span className="font-bold text-foreground">Languages:</span> English, Hindi, Gujarati</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
