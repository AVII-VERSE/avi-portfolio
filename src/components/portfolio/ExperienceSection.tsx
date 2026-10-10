import { Reveal, FadeInStagger, FadeInItem } from "@/components/animations/Reveal";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "MegaMinds Technologies",
      role: "Business Development Executive (BDE)",
      date: "Sept 2025 – May 2026",
      description: [
        "Identified and bid on software projects through freelancing platforms and online marketplaces.",
        "Prepared technical project proposals based on client requirements and coordinated with development teams on estimates and execution.",
        "Communicated with clients regarding project scope, timelines, requirements, and technical discussions.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <Reveal>
          <h2 className="section-title text-center mb-16">Experience</h2>
        </Reveal>

        <FadeInStagger className="space-y-8">
          {experiences.map((exp, index) => (
            <FadeInItem key={index}>
              <div className="neobrutalist-card p-4 sm:p-6 md:p-8 transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-bold text-lg">{exp.company}</p>
                  </div>
                  <span className="stat-badge shrink-0">{exp.date}</span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-primary mr-3 mt-2 flex-shrink-0 rotate-45" />
                      <span className="text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};

export default ExperienceSection;
