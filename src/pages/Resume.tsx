import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink, Globe, FileText } from "lucide-react";

const Resume: React.FC = () => {
  const pdfSrc = `${import.meta.env.BASE_URL}Avinash_CV.pdf`;

  return (
    <section className="min-h-screen py-8 sm:py-12 px-3 sm:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Top Header Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none neobrutalist-button neobrutalist-button-secondary px-4 py-2 text-xs inline-flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-bold">Open Fullscreen PDF</span>
            </a>

            <a
              href={pdfSrc}
              download="Avinash_Singh_CV.pdf"
              className="flex-1 sm:flex-none neobrutalist-button neobrutalist-button-primary px-4 py-2 text-xs inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-bold">Download CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* Real PDF Resume Viewer Container */}
        <div className="w-full h-[80vh] sm:h-[84vh] bg-card border-2 border-border shadow-brutal flex flex-col overflow-hidden">
          {/* Mobile Helper Bar */}
          <div className="sm:hidden px-3 py-2 bg-primary/10 border-b border-primary/20 flex items-center justify-between text-xs">
            <span className="text-foreground/90 font-medium flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-primary" />
              Avinash_CV.pdf
            </span>
            <a
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold underline flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" />
              Open Fullscreen
            </a>
          </div>

          <iframe
            title="Avinash Singh CV"
            src={`${pdfSrc}#view=FitH`}
            className="w-full h-full border-0 block flex-1"
          />
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-xs text-muted-foreground flex items-center justify-center gap-2 font-mono">
          <Globe className="w-3.5 h-3.5 text-primary" />
          <span>Avinash Singh · M.Tech Cyber Security · Surat, India</span>
        </div>
      </div>
    </section>
  );
};

export default Resume;
