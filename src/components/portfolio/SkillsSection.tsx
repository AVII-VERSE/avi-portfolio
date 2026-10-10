import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Braces,
  Bug,
  Crosshair,
  DatabaseZap,
  FileCheck2,
  Globe2,
  KeyRound,
  LockKeyhole,
  Network,
  ScanLine,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  Swords,
  TestTube2,
  Terminal,
  Workflow,
} from "lucide-react";
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiLinux,
  SiGnubash,
  SiBurpsuite,
  SiWireshark,
  SiMetasploit,
  SiOwasp,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { Reveal, FadeInStagger, FadeInItem } from "@/components/animations/Reveal";
import { useTheme } from "@/contexts/ThemeContext";
import DotGrid from "@/components/animations/DotGrid";

const BRAND_COLORS: Record<string, string> = {
  Python: "#3776AB",
  TypeScript: "#3178C6",
  React: "#61DAFB",
  Linux: "#FCC624",
  Bash: "#4EAA25",
  "Burp Suite": "#FF6633",
  Wireshark: "#1679A7",
  Metasploit: "#2596CD",
  Kali: "#557C94",
  OWASP: "#000000",
  Git: "#F05032",
  GitHub: "#FFFFFF",
};


const categories = [
  { name: "Offensive Security", items: ["VAPT", "Red Teaming", "OWASP Top 10", "Vulnerability Assessment", "Penetration Testing", "Security Automation"] },
  { name: "Systems & Networks", items: ["Linux", "Network Security", "TCP/IP", "HTTP/HTTPS", "DNS", "Authentication", "Cryptography"] },
  { name: "Programming", items: ["Python", "Bash", "JavaScript", "HTML", "CSS", "React", "TypeScript"] },
  { name: "Tools & Testing", items: ["Burp Suite", "Nmap", "Wireshark", "SQLMap", "Metasploit", "Git", "GitHub"] },
];

const allSkills = [
  { name: "VAPT", icon: ShieldCheck },
  { name: "Red Teaming", icon: Swords },
  { name: "OWASP Top 10", icon: SiOwasp },
  { name: "Vulnerability Assessment", icon: ScanSearch },
  { name: "Penetration Testing", icon: Crosshair },
  { name: "Security Automation", icon: Workflow },
  { name: "Linux", icon: SiLinux },
  { name: "Network Security", icon: Network },
  { name: "TCP/IP", icon: Network },
  { name: "HTTP/HTTPS", icon: Globe2 },
  { name: "DNS", icon: Workflow },
  { name: "Authentication", icon: KeyRound },
  { name: "Cryptography", icon: LockKeyhole },
  { name: "Python", icon: SiPython },
  { name: "Bash", icon: SiGnubash },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Burp Suite", icon: SiBurpsuite },
  { name: "Nmap", icon: ScanLine },
  { name: "Wireshark", icon: SiWireshark },
  { name: "SQLMap", icon: DatabaseZap },
  { name: "Metasploit", icon: SiMetasploit },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Pytest", icon: TestTube2 },
  { name: "Playwright", icon: Bug },
  { name: "Vitest", icon: FileCheck2 },
  { name: "Bandit", icon: ShieldAlert },
  { name: "pip-audit", icon: ScanSearch },
  { name: "Trivy", icon: ShieldAlert },
  { name: "Semgrep", icon: Braces },
];

const SkillsSection = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="section-title text-center">My Skills</h2>
        </Reveal>

        <Reveal>
          <div className="skills-shell mt-16 p-6 md:p-8 relative overflow-hidden bg-background border border-border">
            <div className="absolute inset-0 bg-background backdrop-blur-[1px] z-0" />
            <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.15]">
              <DotGrid
                className="w-full h-full p-0"
                dotSize={4.5}
                gap={16}
                baseColor={theme === "light" ? "#9f1239" : "#7f1d1d"}
                activeColor={theme === "light" ? "#d97706" : "#f59e0b"}
                proximity={120}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
              />
            </div>
            <div className="relative z-[2] flex flex-col md:flex-row gap-8">
              {/* Tab Selector */}
              <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 shrink-0">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={cn(
                      "px-5 py-3 text-sm font-bold uppercase tracking-wider transition-all border-2",
                      activeCategory === cat.name
                        ? "bg-primary text-primary-foreground border-primary translate-y-0.5"
                        : "bg-card hover:translate-y-[-2px] border-border shadow-brutal"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Content Grid */}
              <div className="flex-1">
                <FadeInStagger key={activeCategory} className="flex flex-wrap gap-4">
                  {categories
                    .find((c) => c.name === activeCategory)
                    ?.items.map((skillName) => {
                      const skill = allSkills.find((s) => s.name === skillName);
                      if (!skill) return null;
                      const IconComponent = skill.icon;
                      const color = BRAND_COLORS[skill.name] || "currentColor";
                      const isWhiteBrand = color === "#FFFFFF";
                      // White icons need dark backgrounds for visibility
                      const useDarkBg = isWhiteBrand || skill.name === "OWASP Top 10" || skill.name === "GitHub";

                      return (
                        <FadeInItem
                          key={skill.name}
                          className="flex-shrink-0"
                        >
                          <div className={cn(
                            "p-4 rounded-lg border-2 border-border bg-card flex flex-col items-center gap-2",
                            "transition-all duration-300 hover:translate-y-[-4px] hover:shadow-brutal hover:border-primary"
                          )}>
                            <div className={cn("w-12 h-12 flex items-center justify-center rounded-lg border", useDarkBg ? "icon-dark-bg" : "bg-white/5 border-white/10")}>
                               <IconComponent className="w-6 h-6" style={{ color: useDarkBg ? (theme === "light" ? "#1e293b" : "#e2e8f0") : color }} />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-tight">{skill.name}</span>
                          </div>
                        </FadeInItem>
                      );
                    })}
                </FadeInStagger>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SkillsSection;
