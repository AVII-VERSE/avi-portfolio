import React from "react";
import { 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Award, 
  Wrench, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin,
  CheckCircle2
} from "lucide-react";

interface CvCardProps {
  showActions?: boolean;
}

export const CvCard: React.FC<CvCardProps> = ({ showActions = true }) => {
  const pdfSrc = `${import.meta.env.BASE_URL}Avinash_CV.pdf`;

  return (
    <div className="neobrutalist-card p-6 sm:p-8 lg:p-10 bg-card border-2 border-border shadow-brutal text-foreground transition-all duration-300">
      {/* Top Action Header */}
      {showActions && (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-6 border-b border-border mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              Curriculum Vitae · Live Document
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="neobrutalist-button neobrutalist-button-secondary px-4 py-2 text-xs inline-flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
            >
              <ExternalLink className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10 font-bold">Open Fullscreen PDF</span>
            </a>
            <a
              href={pdfSrc}
              download="Avinash_Singh_CV.pdf"
              className="neobrutalist-button neobrutalist-button-primary px-4 py-2 text-xs inline-flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
            >
              <Download className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10 font-bold">Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}

      {/* CV Header */}
      <div className="pb-6 border-b border-border">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
              AVINASH SINGH
            </h1>
            <p className="text-sm sm:text-base font-semibold text-primary mt-1">
              Aspiring VAPT & Security Analyst · Cyber Security Graduate
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-muted/40 border border-border">
              <MapPin className="w-3 h-3 text-primary" /> Surat, Gujarat, India
            </span>
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 pt-3 text-xs border-t border-border/50">
          <a
            href="mailto:as8009067@gmail.com"
            className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-medium"
          >
            <Mail className="w-3.5 h-3.5 text-primary" />
            <span>as8009067@gmail.com</span>
          </a>
          <span className="text-muted-foreground/40 hidden sm:inline">|</span>
          <a
            href="https://linkedin.com/in/singhavinash10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-medium"
          >
            <Linkedin className="w-3.5 h-3.5 text-primary" />
            <span>linkedin.com/in/singhavinash10</span>
          </a>
          <span className="text-muted-foreground/40 hidden sm:inline">|</span>
          <a
            href="https://github.com/AVII-VERSE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-medium"
          >
            <Github className="w-3.5 h-3.5 text-primary" />
            <span>github.com/AVII-VERSE</span>
          </a>
        </div>
      </div>

      {/* Main CV Body Grid */}
      <div className="py-6 space-y-7">
        {/* Career Objective */}
        <div>
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2.5 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Career Objective
          </h2>
          <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed bg-muted/15 p-3.5 border-l-2 border-primary">
            Motivated Computer Science graduate currently pursuing an M.Tech in Cyber Security from Marwadi University, Rajkot, seeking an entry-level position as a VAPT / Security Analyst. Eager to leverage practical hands-on skills in web application security (OWASP Top 10), vulnerability scanning, Linux environments, and Python-based security automation to help protect organizational infrastructure while continuously learning and contributing within a dedicated security team.
          </p>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" /> Education
          </h2>
          <div className="space-y-3">
            <div className="p-3 bg-card border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <p className="text-xs sm:text-sm font-bold text-foreground">
                  M.Tech in Cyber Security
                </p>
                <p className="text-xs text-muted-foreground">
                  Marwadi University, Rajkot
                </p>
              </div>
              <span className="font-mono text-[11px] text-primary font-bold self-start sm:self-auto bg-primary/10 px-2 py-0.5 border border-primary/20">
                Ongoing
              </span>
            </div>

            <div className="p-3 bg-card border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <p className="text-xs sm:text-sm font-bold text-foreground">
                  B.Tech in Computer Science and Engineering
                </p>
                <p className="text-xs text-muted-foreground">
                  Uka Tarsadia University, Bardoli · CGPA: 8.34
                </p>
              </div>
              <span className="font-mono text-[11px] text-muted-foreground self-start sm:self-auto">
                2023 – 2026
              </span>
            </div>

            <div className="p-3 bg-card border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <p className="text-xs sm:text-sm font-bold text-foreground">
                  Diploma in Computer Engineering
                </p>
                <p className="text-xs text-muted-foreground">
                  Shree Dhanvantary College of Engineering · CGPA: 7.74
                </p>
              </div>
              <span className="font-mono text-[11px] text-muted-foreground self-start sm:self-auto">
                2020 – 2023
              </span>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div>
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Professional Experience
          </h2>
          <div className="p-4 bg-card border border-border space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-foreground">
                  Business Development Executive
                </h3>
                <p className="text-xs text-primary font-semibold">
                  Megaminds Technologies Pvt. Ltd.
                </p>
              </div>
              <span className="font-mono text-[11px] text-muted-foreground self-start sm:self-auto">
                Sept 2025 – May 2026
              </span>
            </div>
            <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-foreground/80 list-none">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>Spearheaded enterprise client acquisition and strategic technical partnerships for customized software solutions.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>Formulated comprehensive technical proposals, Statements of Work (SOW), and architecture scope definitions.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>Managed end-to-end client communications, project scope definitions, and technical deliverables.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Featured Projects */}
        <div>
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
            <Code2 className="w-4 h-4" /> Featured Security Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-3.5 bg-card border border-border flex flex-col justify-between">
              <div>
                <p className="text-xs sm:text-sm font-bold text-foreground">
                  AegisWAF
                </p>
                <p className="text-[11px] font-mono text-primary font-semibold mt-0.5">
                  AI Security Command Center
                </p>
                <p className="text-xs text-foreground/80 mt-2 leading-relaxed">
                  Dual-layer WAF inspecting real-time HTTP traffic with ML anomaly detection and automated IP banning.
                </p>
              </div>
              <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-border/40">
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-muted/30 border border-border">Python</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-muted/30 border border-border">Flask</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-muted/30 border border-border">ML</span>
              </div>
            </div>

            <div className="p-3.5 bg-card border border-border flex flex-col justify-between">
              <div>
                <p className="text-xs sm:text-sm font-bold text-foreground">
                  ARKA
                </p>
                <p className="text-[11px] font-mono text-primary font-semibold mt-0.5">
                  Threat Correlation Engine
                </p>
                <p className="text-xs text-foreground/80 mt-2 leading-relaxed">
                  Real-time kinetic analytics pipeline analyzing threat telemetry streams to uncover attack patterns.
                </p>
              </div>
              <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-border/40">
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-muted/30 border border-border">Python</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-muted/30 border border-border">Telemetry</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-muted/30 border border-border">CI/CD</span>
              </div>
            </div>

            <div className="p-3.5 bg-card border border-border flex flex-col justify-between">
              <div>
                <p className="text-xs sm:text-sm font-bold text-foreground">
                  CJF Scanner
                </p>
                <p className="text-[11px] font-mono text-primary font-semibold mt-0.5">
                  Clickjacking & Headers
                </p>
                <p className="text-xs text-foreground/80 mt-2 leading-relaxed">
                  Multi-threaded automated scanner auditing CSP and X-Frame-Options with PoC HTML generation.
                </p>
              </div>
              <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-border/40">
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-muted/30 border border-border">Python</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-muted/30 border border-border">Threading</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-muted/30 border border-border">PoC Gen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications with Verified Links */}
        <div>
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
            <Award className="w-4 h-4" /> Certifications & Credentials
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            <a
              href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_8kJz96eYMTRdScXic_1755280100797_completion_certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border hover:border-primary transition-colors flex items-center justify-between group"
            >
              <div>
                <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                  Deloitte Cyber Job Simulation
                </p>
                <p className="text-[11px] text-muted-foreground">Deloitte · Forage</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-primary shrink-0 opacity-80 group-hover:opacity-100" />
            </a>

            <a
              href="https://cyber.jackghx.com/verify/CR-FUND-245AEA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border hover:border-primary transition-colors flex items-center justify-between group"
            >
              <div>
                <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                  Fundamentals Foundations
                </p>
                <p className="text-[11px] text-muted-foreground">Cyber Revision · Verified</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-primary shrink-0 opacity-80 group-hover:opacity-100" />
            </a>

            <a
              href="https://www.futurelearn.com/certificates/2kc3jtv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border hover:border-primary transition-colors flex items-center justify-between group"
            >
              <div>
                <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                  FutureLearn Certificate
                </p>
                <p className="text-[11px] text-muted-foreground">FutureLearn · Verified</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-primary shrink-0 opacity-80 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
            <Wrench className="w-4 h-4" /> Core Technical Skills
          </h2>
          <div className="grid sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-card border border-border">
              <p className="font-bold text-foreground mb-1">Security & VAPT</p>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                OWASP Top 10, Web App Testing, Network Vulnerability Assessment, Threat Modeling
              </p>
            </div>
            <div className="p-3 bg-card border border-border">
              <p className="font-bold text-foreground mb-1">Tools & Platforms</p>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                Burp Suite, Nmap, Wireshark, Metasploit, Linux (Ubuntu/Kali), Git, Docker
              </p>
            </div>
            <div className="p-3 bg-card border border-border">
              <p className="font-bold text-foreground mb-1">Languages & Scripting</p>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                Python (Security Automation), Bash Scripting, JavaScript, SQL
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Download Bar */}
      {showActions && (
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground text-center sm:text-left">
            Ready to review offline? Grab a verified PDF copy.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="neobrutalist-button neobrutalist-button-secondary px-5 py-2.5 text-xs inline-flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
            >
              <ExternalLink className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-bold">Open Fullscreen PDF</span>
            </a>
            <a
              href={pdfSrc}
              download="Avinash_Singh_CV.pdf"
              className="neobrutalist-button neobrutalist-button-primary px-5 py-2.5 text-xs inline-flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
            >
              <Download className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-bold">Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CvCard;
