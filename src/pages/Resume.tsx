import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink, Globe } from "lucide-react";
import CvCard from "@/components/portfolio/CvCard";

const Resume: React.FC = () => {
  const pdfSrc = `${import.meta.env.BASE_URL}Avinash_CV.pdf`;

  return (
    <section className="min-h-screen py-12 sm:py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Top Header Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none neobrutalist-button neobrutalist-button-secondary px-5 py-2.5 text-xs inline-flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-bold">Open Fullscreen PDF</span>
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

        {/* Clean, Full-Feature CV Card (No clunky browser PDF viewer / iframe) */}
        <CvCard showActions={true} />

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
