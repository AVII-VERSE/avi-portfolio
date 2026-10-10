import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink, FileText, AlertCircle } from "lucide-react";

const Resume: React.FC = () => {
  const [loadError, setLoadError] = useState(false);
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
              <span className="relative z-10">Open in Tab</span>
            </a>

            <a
              href={pdfSrc}
              download="Avinash_Singh_CV.pdf"
              className="flex-1 sm:flex-none neobrutalist-button neobrutalist-button-primary px-5 py-2.5 text-xs inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-bold">Download CV</span>
            </a>
          </div>
        </div>

        {/* PDF Viewer Card */}
        <div className="neobrutalist-card p-0 bg-card border-2 border-border overflow-hidden relative shadow-brutal">
          {loadError ? (
            <div className="w-full h-[75vh] flex flex-col items-center justify-center gap-4 p-8 text-center">
              <AlertCircle size={44} className="text-primary animate-pulse" />
              <h3 className="text-xl font-bold text-foreground">View or Download CV</h3>
              <p className="text-muted-foreground max-w-md">
                Your browser or device might not support inline PDF previews. You can download or view it directly in a new tab.
              </p>
              <div className="flex gap-4 mt-2">
                <a
                  href={pdfSrc}
                  download="Avinash_Singh_CV.pdf"
                  className="neobrutalist-button neobrutalist-button-primary px-6 py-3 text-sm inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 font-bold">Download PDF</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="w-full h-[82vh] bg-muted/20">
              <iframe
                title="Avinash Singh CV"
                src={pdfSrc}
                className="w-full h-full border-0"
                onError={() => setLoadError(true)}
              />
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-xs text-muted-foreground flex items-center justify-center gap-2 font-mono">
          <FileText className="w-3.5 h-3.5 text-primary" />
          <span>Avinash Singh · M.Tech Cyber Security · Surat, India</span>
        </div>
      </div>
    </section>
  );
};

export default Resume;
