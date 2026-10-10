import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink, ShieldCheck, Award, Briefcase, GraduationCap, Code2, Globe } from "lucide-react";

const Resume: React.FC = () => {
  const pdfSrc = `${import.meta.env.BASE_URL}Avinash_CV.pdf`;

  return (
    <section className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Top Header Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none neobrutalist-button neobrutalist-button-secondary px-5 py-2.5 text-xs inline-flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-bold">Open Fullscreen</span>
            </a>

            <a
              href={pdfSrc}
              download="Avinash_Singh_CV.pdf"
              className="flex-1 sm:flex-none neobrutalist-button neobrutalist-button-primary px-5 py-2.5 text-xs inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-bold">Download CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer for Desktop / Tablets */}
        <div className="hidden md:block neobrutalist-card p-0 bg-card border-2 border-border overflow-hidden relative shadow-brutal mb-12">
          <div className="w-full h-[85vh] bg-muted/20">
            <object
              data={pdfSrc}
              type="application/pdf"
              className="w-full h-full border-0"
            >
              <iframe
                title="Avinash Singh CV"
                src={pdfSrc}
                className="w-full h-full border-0"
              />
            </object>
          </div>
        </div>

        {/* Dedicated Responsive Clean CV Card (Visible on mobile & accessible on all devices) */}
        <div className="md:hidden neobrutalist-card p-6 bg-card border-2 border-border space-y-6 shadow-brutal mb-8">
          {/* Header */}
          <div className="text-center pb-6 border-b border-border">
            <h1 className="text-2xl font-black text-foreground">AVINASH SINGH</h1>
            <p className="text-xs text-muted-foreground mt-1">Surat, Gujarat, India</p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-3 text-xs">
              <a href="mailto:as8009067@gmail.com" className="text-primary hover:underline">as8009067@gmail.com</a>
              <span>·</span>
              <a href="https://linkedin.com/in/singhavinash10" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>
              <span>·</span>
              <a href="https://github.com/AVII-VERSE" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
            </div>
            <div className="mt-4 flex gap-2 justify-center">
              <a
                href={pdfSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="neobrutalist-button neobrutalist-button-primary px-4 py-2 text-xs inline-flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">Open PDF</span>
              </a>
              <a
                href={pdfSrc}
                download="Avinash_Singh_CV.pdf"
                className="neobrutalist-button neobrutalist-button-secondary px-4 py-2 text-xs inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">Download</span>
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Career Objective
            </h2>
            <p className="text-xs text-foreground/80 leading-relaxed">
              Motivated Computer Science graduate currently pursuing an M.Tech in Cyber Security, seeking an entry-level position as a VAPT / Security Analyst. Eager to leverage practical hands-on skills in web application security (OWASP Top 10), vulnerability scanning, Linux environments, and Python-based security automation to help protect organizational infrastructure while continuously learning and contributing within a dedicated security team.
            </p>
          </div>

          {/* Experience */}
          <div className="pt-4 border-t border-border">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Professional Experience
            </h2>
            <div className="space-y-1">
              <p className="text-xs font-bold text-foreground">Business Development Executive</p>
              <p className="text-[11px] text-muted-foreground">Megaminds Technologies Pvt. Ltd. · Sept 2025 – May 2026</p>
              <ul className="list-disc list-inside text-xs text-foreground/80 space-y-1 pt-1">
                <li>Spearheaded enterprise client acquisition and strategic technical partnerships for customized software solutions.</li>
                <li>Formulated comprehensive technical proposals, Statements of Work (SOW), and architecture scope definitions.</li>
                <li>Managed end-to-end client communications, project scope definitions, and deliverables.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="pt-4 border-t border-border">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Featured Projects
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold text-foreground">AegisWAF — Next-Gen AI Security Command Center</p>
                <p className="text-[11px] text-muted-foreground italic">Python · Flask · Dual-Layer WAF · ML Anomaly Detection</p>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">ARKA — Kinetic Analytics & Threat Correlation Engine</p>
                <p className="text-[11px] text-muted-foreground italic">Python · Stream Analytics · Threat Telemetry · CI/CD</p>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">CJF — Clickjacking & Security Header Scanner</p>
                <p className="text-[11px] text-muted-foreground italic">Python · Multi-Threading · Security Headers · PoC Generator</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="pt-4 border-t border-border">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="space-y-2 text-xs">
              <div>
                <p className="font-bold text-foreground">M.Tech in Cyber Security</p>
                <p className="text-[11px] text-muted-foreground">Marwadi University, Rajkot · Ongoing</p>
              </div>
              <div>
                <p className="font-bold text-foreground">B.Tech in Computer Science and Engineering</p>
                <p className="text-[11px] text-muted-foreground">Uka Tarsadia University, Bardoli · 2023 – 2026 (CGPA: 8.34)</p>
              </div>
              <div>
                <p className="font-bold text-foreground">Diploma in Computer Engineering</p>
                <p className="text-[11px] text-muted-foreground">Shree Dhanvantary College of Engineering · 2020 – 2023 (CGPA: 7.74)</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="pt-4 border-t border-border">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
              <Award className="w-4 h-4" /> Certifications
            </h2>
            <ul className="list-disc list-inside text-xs text-foreground/80 space-y-1">
              <li>Deloitte Cyber Job Simulation (Deloitte · Forage)</li>
              <li>Fundamentals Foundations (Cyber Revision)</li>
              <li>FutureLearn Cybersecurity Certificate</li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-xs text-muted-foreground flex items-center justify-center gap-2 font-mono">
          <Globe className="w-3.5 h-3.5 text-primary" />
          <span>Avinash Singh · M.Tech Cyber Security · Surat, India</span>
        </div>
      </div>
    </section>
  );
};

export default Resume;
