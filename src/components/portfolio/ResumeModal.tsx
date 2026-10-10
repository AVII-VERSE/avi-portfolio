import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";
// @ts-ignore
import { motion, AnimatePresence } from "framer-motion";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const pdfSrc = `${import.meta.env.BASE_URL}Avinash_CV.pdf`;

  // Lock background scroll when modal is open & handle Esc key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-5xl max-h-[92vh] bg-card border-2 border-border shadow-brutal flex flex-col z-10 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Resume Preview Modal"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b-2 border-border bg-card">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-primary/10 border border-primary/30">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground">
                    Avinash Singh — Resume
                  </h3>
                  <p className="text-[11px] font-mono text-muted-foreground hidden sm:block">
                    M.Tech Cyber Security · Aspiring VAPT Analyst
                  </p>
                </div>
              </div>

              {/* Actions: Download, Open, Close */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={pdfSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex neobrutalist-button neobrutalist-button-secondary px-3.5 py-1.5 text-xs items-center gap-1.5"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10 font-bold">Open</span>
                </a>

                <a
                  href={pdfSrc}
                  download="Avinash_Singh_CV.pdf"
                  className="neobrutalist-button neobrutalist-button-primary px-3 sm:px-4 py-1.5 text-xs inline-flex items-center gap-1.5"
                  title="Download PDF"
                >
                  <Download className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10 font-bold">Download</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-1.5 border-2 border-border hover:border-primary text-foreground hover:text-primary transition-colors hover:bg-primary/10 ml-1"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: PDF Viewer */}
            <div className="flex-1 w-full h-[76vh] bg-muted/20 relative overflow-hidden">
              <object
                data={`${pdfSrc}#toolbar=1&navpanes=0`}
                type="application/pdf"
                className="w-full h-full border-0"
              >
                <iframe
                  title="Avinash Singh CV"
                  src={`${pdfSrc}#toolbar=1&navpanes=0`}
                  className="w-full h-full border-0"
                >
                  <div className="p-8 text-center space-y-4">
                    <p className="text-sm text-foreground">
                      Unable to display PDF directly in your browser.
                    </p>
                    <a
                      href={pdfSrc}
                      download="Avinash_Singh_CV.pdf"
                      className="neobrutalist-button neobrutalist-button-primary px-5 py-2.5 text-xs inline-flex items-center gap-2"
                    >
                      <Download className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Download CV (PDF)</span>
                    </a>
                  </div>
                </iframe>
              </object>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
