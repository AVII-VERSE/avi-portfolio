import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { Reveal, FadeInItem, FadeInStagger } from "@/components/animations/Reveal";

const certifications = [
  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte · Forage",
    date: "August 2025",
    description: "Completed practical cybersecurity tasks through a Deloitte job simulation.",
    href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_8kJz96eYMTRdScXic_1755280100797_completion_certificate.pdf",
    action: "View certificate",
  },
  {
    title: "Fundamentals Foundations",
    issuer: "Cyber Revision",
    date: "Verified credential",
    description: "Foundational cybersecurity credential covering modern security concepts and practices.",
    href: "https://cyber.jackghx.com/verify/CR-FUND-245AEA",
    action: "Verify credential",
  },
  {
    title: "FutureLearn Certificate",
    issuer: "FutureLearn",
    date: "Verified credential",
    description: "Verified learning certificate supporting continued development in cybersecurity.",
    href: "https://www.futurelearn.com/certificates/2kc3jtv",
    action: "View certificate",
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-4">
    <div className="container mx-auto max-w-6xl">
      <Reveal>
        <h2 className="section-title text-center">Certifications</h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mt-4">
          Verified learning and practical cybersecurity credentials supporting my VAPT and offensive security path.
        </p>
      </Reveal>

      <FadeInStagger className="grid md:grid-cols-3 gap-6 mt-16">
        {certifications.map((certification) => (
          <FadeInItem key={certification.title}>
            <article className="neobrutalist-card h-full p-6 flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="p-3 bg-primary/10 border-2 border-primary/30">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <ShieldCheck className="w-5 h-5 text-green-500" aria-label="Verified credential link" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{certification.title}</h3>
              <p className="text-primary font-bold mt-2">{certification.issuer}</p>
              <p className="text-xs uppercase tracking-wider text-foreground/50 mt-2">{certification.date}</p>
              <p className="text-foreground/75 leading-relaxed mt-5 flex-1">{certification.description}</p>
              <a
                href={certification.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 neobrutalist-button neobrutalist-button-secondary px-4 py-3 text-sm"
              >
                <span className="relative z-10">{certification.action}</span>
                <ExternalLink className="w-4 h-4 relative z-10" />
              </a>
            </article>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </div>
  </section>
);

export default CertificationsSection;
