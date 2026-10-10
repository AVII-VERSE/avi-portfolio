import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import AegisWafBanner from "./project-banners/AegisWafBanner";
import ArkaBanner from "./project-banners/ArkaBanner";
import CjfBanner from "./project-banners/CjfBanner";

interface FeaturedProject {
  title: string;
  tagline: string;
  description: string;
  banner: React.ReactNode;
  technologies: string[];
  github: string;
  live?: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    title: "AegisWAF — Next-Gen AI Security Command Center",
    tagline: "Dual-Layer Hybrid WAF & SOC Telemetry",
    description:
      "A next-generation AI-driven Web Application Security Platform and dual-layer WAF. Combines high-speed deterministic regex signatures with ML anomaly detection to inspect and block OWASP Top 10 exploits (SQLi, XSS, RCE, Path Traversal, SSRF, JNDI) while providing live SOC telemetry and persistent audit logging.",
    banner: <AegisWafBanner />,
    technologies: ["Python", "Flask", "Dual-Layer WAF", "ML Anomaly Detection", "OWASP", "SOC Telemetry"],
    github: "https://github.com/AVII-VERSE/AegisWAF",
  },
  {
    title: "ARKA — Advanced Real-time Kinetic Analytics",
    tagline: "High-Throughput Security Intelligence Engine",
    description:
      "A continuous security intelligence platform that ingests high-throughput digital events, correlates multi-source threat telemetry, detects anomalous patterns in real time, and turns raw system signals into actionable defensive insights with automated CI/CD security scanning.",
    banner: <ArkaBanner />,
    technologies: ["Python", "Stream Analytics", "Threat Correlation", "Event Pipeline", "CI/CD Security"],
    github: "https://github.com/AVII-VERSE/arka",
  },
  {
    title: "CJF — Clickjacking & Security Header Scanner",
    tagline: "Multi-Threaded Vulnerability Scanner & PoC Generator",
    description:
      "A fast, multi-threaded Clickjacking and web security header vulnerability scanner. Audits X-Frame-Options, CSP frame-ancestors, HSTS, CORS, and cookie protections across bulk targets with automatic interactive HTML UI redressing exploit PoC generation and CVSS markdown reporting.",
    banner: <CjfBanner />,
    technologies: ["Python", "Multi-Threading", "Clickjacking", "Security Headers", "PoC Generator", "VAPT"],
    github: "https://github.com/AVII-VERSE/CJF",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4 inline-flex items-center justify-center gap-3">
              Featured Projects
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
              Real-world cybersecurity platforms, telemetry engines, and vulnerability assessment tools from my GitHub.
            </p>
          </div>
        </Reveal>

        {/* Featured Projects List */}
        <div className="space-y-24 mt-16">
          {featuredProjects.map((project) => (
            <Reveal key={project.title}>
              <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center neobrutalist-card md:relative p-6 md:p-8 bg-card border-2 border-border">
                {/* Project Visual Banner */}
                <div className="relative group overflow-hidden border-2 border-border rounded-none shadow-brutal transition-transform duration-300 group-hover:scale-[1.01]">
                  {project.banner}
                </div>

                {/* Project Details */}
                <div className="space-y-5">
                  <div>
                    <p className="text-primary font-mono text-xs mb-1.5 tracking-widest uppercase flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      Featured Security Project
                    </p>
                    <h3 className="text-xl md:text-2xl font-black text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-secondary uppercase tracking-wider mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="relative bg-card/95 border-2 border-border p-5 md:p-6 shadow-brutal">
                    <p className="text-foreground/85 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-primary/10 border border-primary/25 text-foreground/90 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neobrutalist-button neobrutalist-button-primary px-5 py-2.5 text-xs inline-flex items-center gap-2 group/btn"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github size={16} className="relative z-10" />
                      <span className="relative z-10 font-bold">View on GitHub</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neobrutalist-button neobrutalist-button-secondary px-5 py-2.5 text-xs inline-flex items-center gap-2"
                        aria-label={`View live ${project.title}`}
                      >
                        <ExternalLink size={16} className="relative z-10" />
                        <span className="relative z-10 font-bold">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;