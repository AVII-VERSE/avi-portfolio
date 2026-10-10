import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink, Globe, FileText } from "lucide-react";

const Resume: React.FC = () => {
  const pdfSrc = `${import.meta.env.BASE_URL}Avinash_CV.pdf`;
  const previewImg = `${import.meta.env.BASE_URL}resume-preview.png`;

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
              <span className="relative z-10 font-bold">Open PDF Fullscreen</span>
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

        {/* Real Document Preview Container (100% device compatibility) */}
        <div className="w-full bg-neutral-900/90 border-2 border-border shadow-brutal flex justify-center p-2 sm:p-6 overflow-hidden">
          <div className="relative max-w-[850px] w-full bg-white shadow-2xl border border-border/40 overflow-hidden my-auto">
            <img
              src={previewImg}
              alt="Avinash Singh Resume"
              className="w-full h-auto block select-none"
              loading="eager"
            />
          </div>
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
