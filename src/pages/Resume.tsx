import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Mail, Github, ShieldAlert } from "lucide-react";

const Resume: React.FC = () => {
  return (
    <section className="min-h-screen py-16 px-4 flex items-center justify-center bg-background">
      <div className="container mx-auto max-w-2xl">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Pending Card */}
        <div className="neobrutalist-card p-8 sm:p-12 text-center bg-card border-2 border-border relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-primary/10 blur-[90px] pointer-events-none"
            aria-hidden
          />

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border-2 border-yellow-500/40 text-yellow-500 text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            Status: Pending Update
          </div>

          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border-2 border-primary bg-primary/10 text-primary">
            <Clock className="w-10 h-10 animate-pulse" />
          </div>

          {/* Title & Description */}
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
            Resume Under Update
          </h1>

          <p className="text-foreground/75 leading-relaxed text-base sm:text-lg mb-8 max-w-lg mx-auto">
            My updated cybersecurity CV is currently being finalized with recent VAPT projects, offensive security tooling, and verified credentials. It will be available for download shortly.
          </p>

          {/* Quick Notice */}
          <div className="p-4 bg-muted/50 border border-border text-sm text-foreground/80 mb-8 max-w-lg mx-auto text-left flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span>
              Need an immediate copy for recruitment or an active opportunity? Feel free to request it directly via email.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:as8009067@gmail.com?subject=Resume%20Request%20-%20Avinash%20Singh"
              className="w-full sm:w-auto neobrutalist-button neobrutalist-button-primary px-6 py-3 text-sm inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Request via Email</span>
            </a>

            <a
              href="https://github.com/AVII-VERSE"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto neobrutalist-button neobrutalist-button-secondary px-6 py-3 text-sm inline-flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4 relative z-10" />
              <span className="relative z-10">View GitHub Work</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
