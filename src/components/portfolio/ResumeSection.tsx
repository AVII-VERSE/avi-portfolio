import React from "react";
import { Reveal } from "@/components/animations/Reveal";
import CvCard from "./CvCard";

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-24 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-2">
              // Professional Profile
            </p>
            <h2 className="section-title">Curriculum Vitae</h2>
            <p className="text-foreground/75 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              A comprehensive overview of my education, hands-on security projects, technical toolset, and verified credentials.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <CvCard showActions={true} />
        </Reveal>
      </div>
    </section>
  );
};

export default ResumeSection;
